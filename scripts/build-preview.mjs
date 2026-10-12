#!/usr/bin/env node
/**
 * Builds a self-contained static preview of the site in ./preview:
 *   1. copies the project to .preview-build (without API routes, which need a server)
 *   2. runs `next build` with NEXT_PUBLIC_STATIC_PREVIEW=1 (output: "export")
 *   3. post-processes the export so it works from any base path with no external hosts:
 *      - root-absolute URLs become page-relative
 *      - Unsplash images are downloaded into preview/img
 *      - internal links point at the exported .html files
 *
 * Usage: node scripts/build-preview.mjs [--skip-build] [--image-map map.json]
 *   --image-map: JSON of { "photo-<id>": "/local/file.(jpg|webp|avif)" } to use instead of downloading
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const work = path.join(root, ".preview-build");
const outDir = path.join(root, "preview");
const skipBuild = process.argv.includes("--skip-build");
const mapArg = process.argv.indexOf("--image-map");
const imageMap = mapArg > 0 ? JSON.parse(fs.readFileSync(process.argv[mapArg + 1], "utf8")) : {};
const imageExt = (id) => (imageMap[id] ? path.extname(imageMap[id]).slice(1) : "jpg");

/* ---------- 1–2. Build ---------- */
if (!skipBuild) {
  fs.rmSync(work, { recursive: true, force: true });
  fs.mkdirSync(work);
  for (const entry of fs.readdirSync(root)) {
    if ([".git", ".next", "node_modules", ".preview-build", "preview", "out"].includes(entry)) continue;
    fs.cpSync(path.join(root, entry), path.join(work, entry), { recursive: true });
  }
  fs.rmSync(path.join(work, "app", "api"), { recursive: true, force: true });
  fs.symlinkSync(path.join(root, "node_modules"), path.join(work, "node_modules"), "dir");
  execSync("npx next build", {
    cwd: work,
    stdio: "inherit",
    env: { ...process.env, NEXT_PUBLIC_STATIC_PREVIEW: "1", NEXT_TELEMETRY_DISABLED: "1" },
  });
}
const exportDir = path.join(work, "out");

/* ---------- 3. Post-process ---------- */
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(path.join(outDir, "img"), { recursive: true });

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? walk(p) : [p];
  });

const files = walk(exportDir).map((f) => path.relative(exportDir, f).split(path.sep).join("/"));
const htmlFiles = files.filter((f) => f.endsWith(".html") && !f.startsWith("_"));
// RSC payloads, fetched by Next's link prefetching.
const rscFiles = files.filter((f) => f.endsWith(".txt") && !f.startsWith("_") && f !== "robots.txt");
const staticFiles = files.filter((f) => f.startsWith("_next/static/") && /\.(js|css|woff2)$/.test(f));

// Unsplash photo URL, as it appears in attributes (&amp;) or in escaped JSON payloads.
const unsplashRe = /https:\/\/images\.unsplash\.com\/(photo-[A-Za-z0-9-]+)(\?(?:[^"'\s\\<>)]|\\u0026)*)?/g;
const photoIds = new Set();

/**
 * Local replacement for an Unsplash URL, padded to the same decoded length.
 * RSC payloads prefix long strings with their byte length, so a shorter
 * replacement would corrupt the stream.
 */
function localImage(match, id, prefix) {
  photoIds.add(id);
  const decodedLength = match.replace(/\\u0026/g, "&").replace(/&amp;/g, "&").length;
  const local = `${prefix}img/${id}.${imageExt(id)}`;
  const pad = decodedLength - local.length;
  return pad > 1 ? `${local}?${"x".repeat(pad - 1)}` : local;
}

/** Artifact hosts reserve top-level names starting with "_", so serve /_next as /assets. */
const renameAssets = (text) => text.split("_next/").join("assets/");

const prefixFor = (file) => "../".repeat(file.split("/").length - 1) || "./";

/** "/trips/x#day" → "trips/x.html#day"; files with an extension are kept as-is. */
function toExportPath(href) {
  const [pathPart, hash = ""] = href.split("#");
  const clean = pathPart.split("?")[0].replace(/^\//, "").replace(/\/$/, "");
  if (/\.[a-z0-9]+$/i.test(clean)) return clean + (hash ? `#${hash}` : "");
  return (clean === "" ? "index" : clean) + ".html" + (hash ? `#${hash}` : "");
}

const bootScript = (depth) => `<script>
(function(){
  var d=${depth}, u=new URL(location.href), s=u.pathname.split("/"); s.pop();
  for (var i=0;i<d;i++) s.pop();
  var base=u.origin+s.join("/")+"/"; window.__BASE__=base;
  function map(h){
    var hash=""; var i=h.indexOf("#"); if(i>=0){hash=h.slice(i);h=h.slice(0,i);}
    h=h.split("?")[0].replace(/^\\//,"").replace(/\\/$/,"");
    if(!/\\.[a-z0-9]+$/i.test(h)) h=(h===""?"index":h)+".html";
    return base+h+hash;
  }
  window.__previewHref=map;
  // Next prefetches page data from root-absolute URLs; resolve them against the preview base.
  var f=window.fetch;
  window.fetch=function(input,init){
    try{
      var url=typeof input==="string"?input:(input&&input.url)||String(input);
      var abs=new URL(url,location.href);
      if(abs.origin===u.origin&&abs.pathname.indexOf(base.slice(u.origin.length))!==0){
        var fixed=base+abs.pathname.slice(1)+abs.search;
        input=typeof input==="string"||input instanceof URL?fixed:new Request(fixed,input);
      }
    }catch(_){}
    return f.call(this,input,init);
  };
  // Internal links: full page loads to the exported files (no server for client-side routing).
  addEventListener("click",function(e){
    if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey) return;
    var a=e.target&&e.target.closest&&e.target.closest("a[href]"); if(!a) return;
    if(a.target&&a.target!=="_self") return;
    var h=a.getAttribute("href"); if(!h||h.charAt(0)==="#") return;
    var dest;
    if(h.charAt(0)==="/"&&h.charAt(1)!=="/") dest=map(h);
    else if(/^[a-z]+:/i.test(h)) return;
    else dest=new URL(h,location.href).href;
    var cur=location.href.split("#")[0], next=dest.split("#")[0];
    e.preventDefault(); e.stopPropagation();
    if(cur===next&&dest.indexOf("#")>=0){ location.hash=dest.split("#")[1]; return; }
    location.assign(dest);
  },true);
})();
</script>`;

for (const file of htmlFiles) {
  let html = fs.readFileSync(path.join(exportDir, file), "utf8");
  const prefix = prefixFor(file);
  const depth = file.split("/").length - 1;

  html = html.replace(unsplashRe, (m, id) => localImage(m, id, prefix));
  // Root-absolute asset and page URLs in attributes → page-relative.
  html = html.replace(/(\s(?:href|src|imageSrcSet|srcSet|imagesrcset|srcset))="\/(?!\/)([^"]*)"/g, (_m, attr, p) =>
    p.startsWith("_next/") ? `${attr}="${prefix}${p}"` : `${attr}="${prefix}${toExportPath(`/${p}`)}"`,
  );
  // Same inside the embedded RSC payload (stylesheet and font hints), where quotes are escaped.
  html = html.split('\\"/_next/').join(`\\"${prefix}_next/`);
  // Move <title> to the top of <head> (artifact hosts read it from the first 8KB).
  const titleMatch = html.match(/<title>[\s\S]*?<\/title>/);
  let title = titleMatch ? titleMatch[0] : "";
  if (titleMatch) html = html.replace(titleMatch[0], "");
  if (file === "index.html") title = "<title>The Island Edit</title>";
  html = html.replace(/<head>/, `<head>${title}${bootScript(depth)}`);

  const dest = path.join(outDir, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, renameAssets(html));
}

for (const file of rscFiles) {
  const prefix = prefixFor(file);
  let body = fs.readFileSync(path.join(exportDir, file), "utf8");
  body = body.replace(unsplashRe, (m, id) => localImage(m, id, prefix));
  body = body.split('"/_next/').join(`"${prefix}_next/`);
  const dest = path.join(outDir, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, renameAssets(body));
}

for (const file of staticFiles) {
  let body = fs.readFileSync(path.join(exportDir, file));
  if (file.endsWith(".css")) {
    body = Buffer.from(body.toString("utf8").replace(/url\(\/_next\/static\/media\//g, "url(../media/"));
  }
  if (/\/webpack-[^/]+\.js$/.test(file)) {
    // Load lazy chunks relative to the preview's base URL instead of the site root.
    const src = body.toString("utf8");
    const patched = src.replace(/"\/_next\/"/g, '(self.__BASE__||"/")+"_next/"');
    if (patched === src) throw new Error(`publicPath not found in ${file}`);
    body = Buffer.from(patched);
  }
  if (/\.(js|css)$/.test(file)) {
    let text = renameAssets(body.toString("utf8"));
    // Artifact hosts reject a literal U+FFFD; Next's polyfills use it only inside string literals.
    if (file.endsWith(".js")) text = text.replace(/\uFFFD/g, "\\uFFFD");
    body = Buffer.from(text);
  }
  const dest = path.join(outDir, renameAssets(file));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, body);
}

/* ---------- Images ---------- */
const ids = [...photoIds];
let i = 0;
for (const id of ids) {
  const dest = path.join(outDir, "img", `${id}.${imageExt(id)}`);
  if (imageMap[id]) {
    fs.copyFileSync(imageMap[id], dest);
    process.stdout.write(`\rimages ${++i}/${ids.length}`);
    continue;
  }
  const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=60&fm=jpg`;
  execSync(`curl -sSfL -o "${dest}" "${url}"`);
  process.stdout.write(`\rimages ${++i}/${ids.length}`);
}
process.stdout.write("\n");

const all = walk(outDir).map((f) => path.relative(outDir, f));
const bytes = walk(outDir).reduce((n, f) => n + fs.statSync(f).size, 0);
console.log(`preview: ${all.length} files, ${(bytes / 1e6).toFixed(1)} MB, ${htmlFiles.length} pages, ${ids.length} images`);
