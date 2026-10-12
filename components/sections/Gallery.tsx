import Image from "next/image";
import type { Img } from "@/data/types";

export function Gallery({ images }: { images: Img[] }) {
  if (images.length === 0) return null;
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {images.map((img, i) => (
        <figure
          key={img.src + i}
          className={`relative overflow-hidden rounded-sm bg-sand-200 ${i === 0 ? "col-span-2 aspect-[16/10] md:row-span-2 md:aspect-auto" : "aspect-[4/3]"}`}
        >
          <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
          {img.credit && (
            <figcaption className="absolute bottom-2 right-2 rounded-sm bg-black/40 px-2 py-0.5 text-[0.6875rem] text-white">
              {img.credit}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
