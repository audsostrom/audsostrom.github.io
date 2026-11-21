import Link from "next/link";
import RichText from "@/components/site/RichText";
import { threads } from "@/content/profile";

type Thread = (typeof threads)[number];
// A pill is either a paper link (pubId → /research#id) or an external action (href).
type Pill = { label: string; pubId?: string; href?: string; style?: string };

const PRIMARY = "pill bg-accent text-white hover:bg-accent-hover hover:text-white";
const PAPER = "pill bg-tint text-accent-hover hover:text-accent";

export default function ThreadCard({ thread: t }: { thread: Thread }) {
  const tinted = !!t.highlight;
  const line = tinted ? "border-line-card" : "border-line";
  const headingId = `${t.id}-h`;

  return (
    <article
      aria-labelledby={headingId}
      className={`flex flex-col overflow-hidden rounded-[20px] border ${line} ${tinted ? "bg-surface-2" : "bg-bg"}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={t.image.src}
        alt={t.image.alt}
        className={`h-[200px] w-full border-b bg-white object-cover ${line}`}
        style={{ objectPosition: t.image.position }}
      />
      <div className="flex flex-grow flex-col gap-[10px] p-[22px]">
        <div className="eyebrow text-accent">{t.eyebrow}</div>
        <h3 id={headingId} className="m-0 font-heading text-[20px] font-extrabold leading-[1.25]">
          {t.title}
        </h3>
        <p className="m-0 text-[15px] leading-[1.65] text-ink-2">
          <RichText text={t.text} boldClassName="text-ink" />
        </p>
        {t.badge && (
          <div>
            <span className="inline-flex min-h-[26px] items-center rounded-full bg-amber-bg px-[10px] text-[12px] font-bold text-amber-fg">
              {t.badge}
            </span>
          </div>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-[6px]">
          {t.pills.map((p: Pill) =>
            p.pubId ? (
              <Link key={p.label} href={`/research#${p.pubId}`} className={PAPER}>
                {p.label}
              </Link>
            ) : (
              <a key={p.label} href={p.href} className={PRIMARY} target="_blank" rel="noopener noreferrer">
                {p.label}
              </a>
            )
          )}
        </div>
      </div>
    </article>
  );
}
