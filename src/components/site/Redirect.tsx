import Link from "next/link";

/** Static-export redirect: meta refresh (hoisted to <head> by React 19) plus a visible fallback link. */
export default function Redirect({ to, label }: { to: string; label: string }) {
  return (
    <section className="py-16">
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <h1 className="mt-0 font-heading text-[28px] font-extrabold">This page has moved</h1>
      <p className="text-[17px] text-ink-2">
        It&apos;s now part of <Link href={to}>{label}</Link>.
      </p>
    </section>
  );
}
