import type { ReactNode } from "react";
import RichText from "@/components/site/RichText";
import type { CvRow as Row } from "@/content/cv";

/** `220px section title | content`, separated by a top border. Stacks at ≤760px. */
export function CvSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid grid-cols-1 gap-5 border-t border-line py-9 wide:grid-cols-[220px_minmax(0,1fr)] wide:gap-10">
      <h2 className="m-0 font-heading text-[22px] font-extrabold">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

/** The one CV row pattern: **Title**, Org / optional muted description | 180px date. */
export function CvRows({ rows }: { rows: Row[] }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-4 p-0 text-[16px] leading-[1.5]">
      {rows.map((r) => (
        <li
          key={`${r.title}-${r.org}-${r.date}`}
          className="grid grid-cols-1 gap-x-6 gap-y-1 wide:grid-cols-[minmax(0,1fr)_180px]"
        >
          <div>
            <strong>{r.title}</strong>, {r.org}
            {r.desc && (
              <span className="mt-1 block text-[15px] leading-[1.55] text-muted">
                <RichText text={r.desc} />
              </span>
            )}
          </div>
          <div className="font-bold text-muted">{r.date}</div>
        </li>
      ))}
    </ul>
  );
}
