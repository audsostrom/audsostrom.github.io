
// Home page News. Newest first. Only items from the PhD start (Sep 2025) onward.
// Collapsed view: first RECENT_COUNT items, date shown as "<label> <year>".
// Expanded view ("Show all news since Fall 2025"): grouped by year with year headings,
// vertical rail on the left, one colored dot per item (color = kind; the text carries the meaning).
// `text` supports **bold** segments only.
//
// Phrasing patterns (keep consistent):
//   Paper out, not presented by me:  "“<Short title>” published at **<Venue>**."  + Paper link
//   I presented:                     "Presented “<Short title>” at **<Venue>** in <City>."  + Paper link
//   Workshop attended:               "Attended the **<Workshop>** workshop at <Venue>."  + link to workshop site
 
export type NewsKind = "pub" | "award" | "role";
 
export const NEWS_DOT: Record<NewsKind, string> = {
  pub: "#4B37C8", // papers & talks
  award: "#E0A21B", // awards
  role: "#2F8F68", // roles & milestones
};
 
export const RECENT_COUNT = 5;
 
export interface NewsItem {
  year: number;
  label: string; // "Nov", "Summer"
  kind: NewsKind;
  text: string;
  link?: { label: string; href: string };
}
 
export const news: NewsItem[] = [
  {
    year: 2026,
    label: "Nov",
    kind: "pub",
    text: "“The Commit Gap” poster and Causeway demo accepted to **SIGCSE TS 2027**.",
    link: { label: "Details", href: "/research#sigcse27-commitgap" },
  },
  {
    year: 2026,
    label: "Jul",
    kind: "pub",
    text: "“Generominator” paper published at **ICCC 2026**.",
    link: { label: "Paper", href: "https://computationalcreativity.net/iccc26/papers/ICCC26_paper_71.pdf" },
  },
  {
    year: 2026,
    label: "Jun",
    kind: "pub",
    text: "“Scaling Experiential Learning” paper published at **ASEE 2026**.",
    link: { label: "Paper", href: "https://doi.org/10.18260/1-2--60393" },
  },
  { year: 2026, label: "Summer", kind: "award", text: "Awarded the **Summer Computational Media Department Fellowship**." },
  {
    year: 2026,
    label: "Apr",
    kind: "pub",
    text: "Presented “Bringing On-the-Job Learning into Education” at **CHI 2026** in Barcelona.",
    link: { label: "Paper", href: "https://doi.org/10.1145/3772363.3798957" },
  },
  {
    year: 2026,
    label: "Apr",
    kind: "pub",
    text: "Accepted to and attended the **Generative UI** workshop at CHI 2026.",
    link: { label: "Workshop", href: "https://genuimeetshci.github.io/chi26-workshop/" },
  },
  {
    year: 2026,
    label: "Mar",
    kind: "award",
    text: "Named a **Tools Competition finalist** (Building Pathways to Postsecondary Success).",
    link: { label: "Announcement", href: "https://tools-competition.org/26-postsecondary-finalists/" },
  },
  {
    year: 2025,
    label: "Sep",
    kind: "role",
    text: "Started my PhD in Computational Media at UC Santa Cruz with the **Eugene Cota-Robles and Regents Fellowships**.",
  },
];