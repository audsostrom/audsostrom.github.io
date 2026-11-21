import { Fragment } from "react";

// Inline markup used in the content files: **bold** and [label](url). Nothing else is parsed.
const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

export default function RichText({ text, boldClassName }: { text: string; boldClassName?: string }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index > last) out.push(<Fragment key={last}>{text.slice(last, m.index)}</Fragment>);
    if (m[1] !== undefined) {
      out.push(
        <strong key={m.index} className={boldClassName}>
          {m[1]}
        </strong>
      );
    } else {
      out.push(
        <a key={m.index} href={m[3]} rel="noopener noreferrer">
          {m[2]}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(<Fragment key={last}>{text.slice(last)}</Fragment>);
  return <>{out}</>;
}
