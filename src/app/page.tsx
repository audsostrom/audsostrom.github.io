import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import Headshot from "@/components/home/Headshot";
import IconLinks from "@/components/home/IconLinks";
import ThreadCard from "@/components/home/ThreadCard";
import NewsList from "@/components/home/NewsList";
import { profile, threads } from "@/content/profile";
import { SITE_URL, isRealProfile } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${profile.name} · PhD Student, UC Santa Cruz` },
  alternates: { canonical: "/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "PhD Student, Computational Media",
  description: profile.tagline.before + profile.tagline.highlight + profile.tagline.after,
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of California, Santa Cruz",
    department: { "@type": "Organization", name: "Tech4Good Lab", url: "https://lab.tech4good.dev/" },
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of California, Santa Cruz" },
  knowsAbout: [...profile.seeking.areas, "Experiential learning", "Computing education"],
  url: `${SITE_URL}/`,
  sameAs: profile.links.map((l) => l.href).filter(isRealProfile),
};

export default function Home() {
  const { tagline, bio, seeking } = profile;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <section
        aria-labelledby="hero-name"
        className="grid grid-cols-1 items-start gap-12 pb-14 pt-12 wide:grid-cols-[240px_minmax(0,1fr)] wide:pt-[72px]"
      >
        <div className="flex flex-col items-start gap-4">
          <Headshot />
          <div className="flex flex-col gap-1 text-[15px] leading-[1.5]">
            <span className="font-bold">{profile.email}</span>
            <span className="text-muted">{profile.location}</span>
          </div>
          <IconLinks />
        </div>

        <div className="flex flex-col gap-5">
          <h1
            id="hero-name"
            className="m-0 font-heading text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] wide:text-[52px]"
          >
            {profile.name}
          </h1>
          <p className="m-0 font-heading text-[21px] font-bold leading-[1.4] text-[#2B2838] wide:text-[24px]">
            {tagline.before}
            <span className="bg-[linear-gradient(transparent_62%,#FBE3A6_62%)]">{tagline.highlight}</span>
            {tagline.after}
          </p>
          <p className="m-0 text-[17px] leading-[1.7] text-ink-2">
            {bio.map((seg) =>
              seg.href ? (
                <a key={seg.text} href={seg.href} target="_blank" rel="noopener noreferrer">
                  {seg.text}
                </a>
              ) : (
                <Fragment key={seg.text}>{seg.text}</Fragment>
              )
            )}
          </p>
          <div className="flex flex-col gap-[10px] rounded-2xl bg-tint px-5 py-4">
            <div className="flex flex-wrap items-center gap-2">
              <span id="areas-label" className="eyebrow mr-1 text-muted">
                {seeking.areasLabel}
              </span>
              <ul aria-labelledby="areas-label" className="m-0 flex list-none flex-wrap gap-2 p-0">
                {seeking.areas.map((a) => (
                  <li
                    key={a}
                    className="inline-flex min-h-[28px] items-center rounded-full border border-line-control bg-white px-3 text-[14px] font-bold text-accent-hover"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <p className="m-0 text-[15px] text-ink-2">
              {seeking.ask.before}
              <strong className="text-accent-hover">{seeking.ask.bold}</strong>
              {seeking.ask.after}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="research-h" className="border-t border-line py-12">
        <div className="mb-7 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h2 id="research-h" className="m-0 font-heading text-[30px] font-extrabold">
            Research
          </h2>
          <Link href="/research" className="text-[15px] font-bold">
            All publications →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 wide:grid-cols-2">
          {threads.map((t) => (
            <ThreadCard key={t.id} thread={t} />
          ))}
        </div>
      </section>

      <NewsList />
    </>
  );
}
