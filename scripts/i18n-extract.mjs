#!/usr/bin/env node
// Lists every English string the site translates, so i18n/{fr,de,es}.json can be kept complete.
//   node --experimental-strip-types scripts/i18n-extract.mjs         write i18n/strings.json + i18n/client-keys.json
//   node --experimental-strip-types scripts/i18n-extract.mjs check   exit 1 if any locale is missing a string
// Sources: t("…") / msg("…") calls in the code, every visible string in /data, and the strings a
// production build reports as untranslated (I18N_COLLECT=1 next build writes i18n/missing.txt).
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const { SKIP_KEYS } = await import(pathToFileURL(join(ROOT, "lib/i18n/config.ts")));
const keys = new Set();
const client = new Set();
const hasWords = (s) => /\p{L}{2}/u.test(s);

const walkDir = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walkDir(p) : /\.(tsx?|mjs)$/.test(f) ? [p] : [];
  });
const unescape = (s) => s.replace(/\\(['"`\\])/g, "$1").replace(/\\n/g, "\n");
const CALL = /\b(?:t|msg)\(\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`((?:[^`\\$]|\\.)*)`)/g;
const LITERAL = /"((?:[^"\\]|\\.)*)"/g;

const clientData = new Set(["lib/planner.ts"]);
for (const dir of ["app/(en)", "components", "lib"]) {
  for (const f of walkDir(join(ROOT, dir))) {
    if (f.includes("/lib/i18n/")) continue;
    const src = readFileSync(f, "utf8");
    const isClient = /^\s*["']use client["']/.test(src);
    for (const m of src.matchAll(CALL)) {
      const k = unescape(m[1] ?? m[2] ?? m[3]);
      if (!hasWords(k)) continue;
      keys.add(k);
      if (isClient) client.add(k);
    }
    if (isClient) {
      // Labels kept in plain literals (option lists, maps) are looked up with t(variable).
      for (const m of src.matchAll(LITERAL)) {
        const k = unescape(m[1]);
        if (hasWords(k) && /^[A-Z]|\s/.test(k) && !/[{}<>]|^[a-z-]+(\s[a-z-:\[\]/.]+)+$/.test(k)) {
          client.add(k);
          if (/^[A-Z][\w’']/.test(k) && !/^(Arrow\w+|Enter|Escape|Tab|IDR|USD)$/.test(k)) keys.add(k);
        }
      }
      for (const m of src.matchAll(/from "@\/((?:data|lib)\/[\w-]+)"/g)) clientData.add(`${m[1]}.ts`);
    }
  }
}

function collect(v, key, into = [], skip = true) {
  if (typeof v === "string") {
    if ((!skip || !key || !SKIP_KEYS.has(key)) && hasWords(v) && !/^(https?:|\/)/.test(v)) into.push(v);
  } else if (Array.isArray(v)) v.forEach((x) => collect(x, key, into, skip));
  else if (v && Object.getPrototypeOf(v) === Object.prototype) for (const [k, x] of Object.entries(v)) collect(x, k, into, key !== "included");
  return into;
}

const dataFiles = readdirSync(join(ROOT, "data")).filter((f) => f.endsWith(".ts") && f !== "types.ts").map((f) => `data/${f}`);
for (const f of [...dataFiles, "lib/planner.ts", "lib/data.ts", "lib/data-labels.ts"]) {
  if (!existsSync(join(ROOT, f))) continue;
  let mod;
  try {
    mod = await import(pathToFileURL(join(ROOT, f)));
  } catch {
    // Modules that import server-only code are read as text instead.
    const src = readFileSync(join(ROOT, f), "utf8");
    mod = { _: [...src.matchAll(LITERAL)].map((m) => unescape(m[1])).filter((s) => /^[A-Z]/.test(s)) };
  }
  for (const [name, v] of Object.entries(mod)) {
    if (typeof v === "function") continue;
    if (name === "currencies") continue;
    for (const s of collect(v)) {
      keys.add(s);
      if (clientData.has(f)) client.add(s);
    }
  }
}
// lib/planner.ts error messages live inside a function.
for (const m of readFileSync(join(ROOT, "lib/planner.ts"), "utf8").matchAll(LITERAL)) {
  const k = unescape(m[1]);
  if (/^[A-Z].*\s/.test(k) || /^[A-Z][a-z]+$/.test(k)) { keys.add(k); client.add(k); }
}

const missingFile = join(ROOT, "i18n/missing.txt");
if (existsSync(missingFile)) {
  for (const line of readFileSync(missingFile, "utf8").split("\n")) if (line.trim()) keys.add(JSON.parse(line));
}
const keep = existsSync(join(ROOT, "i18n/keep.json")) ? new Set(JSON.parse(readFileSync(join(ROOT, "i18n/keep.json"), "utf8"))) : new Set();
for (const k of keep) keys.delete(k);

const sorted = [...keys].sort();
if (process.argv[2] === "check") {
  let bad = 0;
  for (const l of ["fr", "de", "es"]) {
    const d = JSON.parse(readFileSync(join(ROOT, `i18n/${l}.json`), "utf8"));
    const miss = sorted.filter((k) => !d[k]);
    if (miss.length) {
      bad++;
      console.log(`${l}: ${miss.length} missing`, miss.slice(0, 10));
    }
  }
  if (bad) process.exit(1);
  console.log(`i18n: all ${sorted.length} strings translated in fr, de, es`);
} else {
  writeFileSync(join(ROOT, "i18n/strings.json"), JSON.stringify(sorted, null, 1) + "\n");
  writeFileSync(join(ROOT, "i18n/client-keys.json"), JSON.stringify([...client].filter((k) => !keep.has(k)).sort(), null, 1) + "\n");
  console.log(`${sorted.length} strings (${client.size} used by client components)`);
}
