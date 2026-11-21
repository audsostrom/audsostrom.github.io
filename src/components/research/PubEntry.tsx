import { Fragment } from "react";
import { TYPE_LABEL, type Publication, type PubType } from "@/content/publications";

const TAG_STYLE: Record<PubType, string> = {
  paper: "bg-amber-bg text-amber-fg",
  "extended-abstract": "bg-tint text-accent-hover",
  poster: "bg-tint text-accent-hover",
  demo: "bg-green-bg text-green-fg",
};

export default function PubEntry({ pub }: { pub: Publication }) {
  // "#" marks a link that isn't available yet (e.g. a PDF before camera-ready); don't render it.
  const links = pub.links.filter((l) => l.href && l.href !== "#");

  return (
    <article
      id={pub.id}
      className="grid scroll-mt-6 grid-cols-1 items-start gap-4 wide:grid-cols-[200px_minmax(0,1fr)] wide:gap-7"
    >
      {pub.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={pub.image.src}
          alt={pub.image.alt}
          loading="lazy"
          className="h-[124px] w-[200px] rounded-xl border border-line bg-white object-cover"
          style={{ objectPosition: pub.image.position ?? "center" }}
        />
      ) : (
        <div
          aria-hidden="true"
          className="box-border flex h-[124px] w-[200px] items-center justify-center rounded-xl bg-tint p-3 text-center font-heading text-[16px] font-extrabold text-accent-hover"
        >
          {pub.tile}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex min-h-[24px] items-center rounded-full px-[10px] text-[12px] font-bold ${TAG_STYLE[pub.type]}`}
          >
            {TYPE_LABEL[pub.type]}
          </span>
          <span className="text-[14px] font-bold text-muted">{pub.venue}</span>
        </div>
        <h3 className="m-0 font-heading text-[19px] font-extrabold leading-[1.35]">{pub.title}</h3>
        <p className="m-0 text-[15px] leading-[1.55] text-ink-2">
          {pub.authors.map((a, i) => (
            <Fragment key={`${a.name}-${i}`}>
              {i > 0 && ", "}
              {a.me ? <strong className="text-ink">{a.name}</strong> : a.name}
              {a.equal && "*"}
            </Fragment>
          ))}
        </p>
        {links.length > 0 && (
          <ul className="m-0 flex list-none flex-wrap gap-x-[18px] gap-y-1 p-0 text-[14px] font-bold">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="inline-flex min-h-[32px] items-center" rel="noopener noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
