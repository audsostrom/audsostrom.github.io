import type { Metadata } from "next";
import PublicationList from "@/components/research/PublicationList";
import { profile } from "@/content/profile";
import { publications } from "@/content/publications";
import { SITE_URL, social } from "@/lib/site";

const description = `Papers, posters, and demos by ${profile.name}: micro-role apprenticeship, Causeway, and AI-era assessment in computing education.`;

export const metadata: Metadata = {
  title: "Research",
  description,
  alternates: { canonical: "/research" },
  ...social(`Research · ${profile.name}`, description),
};

// ScholarlyArticle entries; placeholder authors ("[...]") and "#" links are left out.
const pubsJsonLd = {
  "@context": "https://schema.org",
  "@graph": publications.map((p) => {
    const doi = p.links.find((l) => l.label === "DOI")?.href;
    const realLinks = p.links.map((l) => l.href).filter((h) => h.startsWith("http"));
    return {
      "@type": "ScholarlyArticle",
      "@id": `${SITE_URL}/research#${p.id}`,
      headline: p.title,
      datePublished: String(p.year),
      isPartOf: p.venue,
      author: p.authors
        .filter((a) => !a.name.startsWith("["))
        .map((a) => ({ "@type": "Person", name: a.name, ...(a.me ? { url: `${SITE_URL}/` } : {}) })),
      ...(doi ? { sameAs: doi } : {}),
      ...(realLinks.length ? { url: realLinks[0] } : {}),
      ...(p.image ? { image: `${SITE_URL}${p.image.src}` } : {}),
    };
  }),
};

const link = (icon: string) => profile.links.find((l) => l.icon === icon)!.href;

export default function ResearchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pubsJsonLd) }} />
      <section className="pb-0 pt-12 wide:pt-[72px]">
        <h1 className="mb-3 mt-0 font-heading text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] wide:text-[44px]">
          Research
        </h1>
        <p className="mb-7 mt-0 text-[16px] text-muted">
          Papers, posters, and demos. * equal contribution · Also on{" "}
          <a href={link("scholar")} rel="noopener noreferrer">
            Google Scholar
          </a>{" "}
          and{" "}
          <a href={link("orcid")} rel="noopener noreferrer">
            ORCID
          </a>
        </p>
      </section>
      <PublicationList />
    </>
  );
}
