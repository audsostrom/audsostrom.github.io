import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { CvRows, CvSection } from "@/components/cv/CvSection";
import { cvPdf, leadership, sections, skills } from "@/content/cv";
import { profile } from "@/content/profile";
import { social } from "@/lib/site";

const description = `CV highlights for ${profile.name}: education, fellowships, experience, workshop contributions, mentoring, service, and skills.`;

export const metadata: Metadata = {
  title: "CV",
  description,
  alternates: { canonical: "/cv" },
  ...social(`CV · ${profile.name}`, description),
};

export default function CvPage() {
  return (
    <>
      <section className="flex flex-wrap items-end justify-between gap-5 pb-10 pt-12 wide:pt-[72px]">
        <div>
          <h1 className="mb-3 mt-0 font-heading text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] wide:text-[44px]">
            CV
          </h1>
          <p className="m-0 text-[17px] text-muted">
            Highlights below; publications are on the <Link href="/research">Research</Link> page.
          </p>
        </div>
        <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="btn bg-accent text-white hover:bg-accent-hover hover:text-white">
          Download CV (PDF)
        </a>
      </section>

      {sections.map((sec) => (
        <Fragment key={sec.title}>
          {/* Service & Leadership and Skills sit just before Other projects (see cv.ts). */}
          {sec.title === "Other projects" && <ServiceAndSkills />}
          <CvSection title={sec.title}>
            <CvRows rows={sec.rows} />
          </CvSection>
        </Fragment>
      ))}
    </>
  );
}

function ServiceAndSkills() {
  return (
    <>
      <CvSection title="Service & Leadership">
        <p className="m-0 text-[16px] leading-[1.7] text-ink-2">
          {leadership.map((l, i) => (
            <Fragment key={l.title + l.org}>
              {i > 0 && " · "}
              <strong className="text-ink">{l.title}</strong>, {l.org} ({l.date})
            </Fragment>
          ))}
        </p>
      </CvSection>

      <CvSection title="Skills">
        <div className="grid grid-cols-1 gap-5 text-[16px] leading-[1.6] wide:grid-cols-2">
          {skills.map((s) => (
            <div key={s.title}>
              <div className="mb-1 font-bold">{s.title}</div>
              <div className="text-ink-2">{s.text}</div>
            </div>
          ))}
        </div>
      </CvSection>
    </>
  );
}
