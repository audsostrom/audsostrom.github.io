import fs from "node:fs";
import path from "node:path";
import { profile } from "@/content/profile";

/**
 * Circular headshot. Runs at build time: if public/<headshot.src> doesn't exist yet,
 * render a circular placeholder instead of a broken image.
 */
export default function Headshot() {
  const { src, alt } = profile.headshot;
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  if (!exists) {
    return (
      <div
        role="img"
        aria-label="Headshot placeholder"
        className="flex h-[240px] w-[240px] items-center justify-center rounded-full border border-dashed border-focus bg-[#F1EFFA] text-[14px] font-semibold text-muted"
      >
        [Your headshot]
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={240} height={240} className="h-[240px] w-[240px] rounded-full object-cover" />
  );
}
