// Research page = this list, grouped by year (newest first), with type filters.
// Order within a year is display order.

export type PubType = "paper" | "extended-abstract" | "poster" | "demo";

export interface Author {
  name: string;
  me?: boolean; // render bold
  equal?: boolean; // render trailing "*" (equal contribution)
}

export interface Publication {
  id: string; // used as anchor: /research#<id>
  year: number;
  type: PubType;
  venue: string; // shown next to the type tag
  title: string;
  authors: Author[];
  image?: { src: string; alt: string; position?: string }; // object-position for the 200x124 thumb
  tile?: string; // text tile shown when there is no image
  links: { label: string; href: string }[];
  todo?: string; // internal note, never rendered
}

export const TYPE_LABEL: Record<PubType, string> = {
  paper: "Full paper",
  "extended-abstract": "Extended abstract",
  poster: "Poster",
  demo: "Demo",
};

// Filter chips: All / Papers / Extended abstracts & posters / Demos
export const FILTERS = [
  { id: "all", label: "All", types: ["paper", "extended-abstract", "poster", "demo"] },
  { id: "paper", label: "Papers", types: ["paper"] },
  { id: "ea", label: "Extended abstracts & posters", types: ["extended-abstract", "poster"] },
  { id: "demo", label: "Demos", types: ["demo"] },
] as const;

export const publications: Publication[] = [
  {
    id: "sigcse27-causeway",
    year: 2027,
    type: "demo",
    venue: "SIGCSE TS 2027",
    title:
      "Causeway: Supporting Personalized Learning Within Collaborative Software Projects Using Micro-Roles",
    authors: [{ name: "Audrey Ostrom", me: true }, { name: "Iris Tai" }, { name: "Aubrey Hayes" }],
    image: { src: "/research/causeway-interface.jpg", alt: "Causeway dashboard and walkthrough interface", position: "top left" },
    links: [
      { label: "Live app", href: "https://causeway.web.app/" },
      { label: "PDF", href: "#" },
    ],
    todo: "Add PDF link once available.",
  },
  {
    id: "sigcse27-commitgap",
    year: 2027,
    type: "poster",
    venue: "SIGCSE TS 2027",
    title: "The Commit Gap: Anchoring Live Assessment in Students’ Own Version History",
    authors: [
      { name: "Audrey Ostrom", me: true },
      { name: "Isabella Wu" },
      { name: "Roy Kang" },
      { name: "Daisy Austin" },
      { name: "David T. Lee" },
    ],
    image: { src: "/research/commit-gap-flow.jpg", alt: "Commit Gap assessment flow", position: "left center" },
    links: [{ label: "PDF (camera-ready)", href: "#" }],
    todo: "Figure comes from the anonymized draft; swap for camera-ready figure.",
  },
  {
    id: "koli26-slr",
    year: 2026,
    type: "paper",
    venue: "Koli Calling 2026 · Koli, Finland",
    title: "GenAI-Powered Postsecondary Computer Science Education Tools: A Systematic Literature Review",
    authors: [
      { name: "Owen Sizemore" },
      { name: "Seth Bernstein" },
      { name: "Audrey Ostrom", me: true },
      { name: "Thomas Rexin" },
      { name: "Kristin Stephens-Martinez" },
    ],
    image: { src: "/research/koli26-slr-prisma.jpg", alt: "PRISMA diagram: 1,834 search results screened down to 72 papers" },
    tile: "Systematic literature review",
    links: [{ label: "DOI", href: "https://doi.org/10.1145/3856208.3856224" },],
  },
  {
    id: "iccc26-generominator",
    year: 2026,
    type: "paper",
    venue: "ICCC 2026 · Coimbra, Portugal",
    title: "Generominator: Operationalizing the Computational Creativity Ideation Cards “Generominos”",
    authors: [
      { name: "Gabriel Bacon", equal: true },
      { name: "Rosalind Dixon", equal: true },
      { name: "Max Kluiwstra-Descalle", equal: true },
      { name: "Audrey Ostrom", me: true, equal: true },
      { name: "Alexander Sherbrooke", equal: true },
      { name: "Thomas Wessel", equal: true },
      { name: "Jiangyue Wu", equal: true },
      { name: "Markus Eger" },
    ],
    image: { src: "/research/generominator.jpg", alt: "Generominator graph editor composing image-processing cards", position: "center" },
    links: [{ label: "PDF", href: "https://computationalcreativity.net/iccc26/papers/ICCC26_paper_71.pdf" }],
  },
  {
    id: "asee26-scaling",
    year: 2026,
    type: "poster",
    venue: "ASEE Annual Conference 2026",
    title:
      "Scaling Experiential Learning: Using Micro-Role-Based Structures To Model Education After The Workplace (IUSE)",
    authors: [{ name: "Audrey Ostrom", me: true }, { name: "Madison Gruender" }, { name: "David T. Lee" }],
    image: { src: "/research/asee26-course-microroles.jpg", alt: "A course organized into micro-roles across homework phases", position: "top left" },
    links: [
      { label: "DOI", href: "https://doi.org/10.18260/1-2--60393" },
      { label: "PDF", href: "#" },
    ],
  },
  {
    id: "chi26-onthejob",
    year: 2026,
    type: "extended-abstract",
    venue: "CHI 2026 Extended Abstracts",
    title:
      "Bringing “On-the-Job” Learning into Education: Lessons From a Micro-Role Apprenticeship Program and Implications for Platform Design",
    authors: [
      { name: "Audrey Ostrom", me: true, equal: true },
      { name: "Jiayu Yuki Yin", equal: true },
      { name: "Jose Chavez" },
      { name: "Pragna Chennuri" },
      { name: "Jialai Li" },
      { name: "Ashwin Nagarajan" },
      { name: "Psi Padhya" },
      { name: "Yash Raj Singh" },
      { name: "Sonia Salunke" },
      { name: "Iris Tai" },
      { name: "Chi-Kwan Jasmine Tai" },
      { name: "David T. Lee" },
    ],
    image: { src: "/research/chi26-microrole-decomposition.jpg", alt: "A project page decomposed into micro-roles and their subgoals", position: "top left" },
    links: [
      { label: "DOI", href: "https://doi.org/10.1145/3772363.3798957" },
      { label: "PDF", href: "#" },
    ],
  },
];
