// Site-wide profile + Home page content. Header line and About paragraph are FINAL wording (approved by Audrey); do not rephrase.

export const profile = {
  name: "Audrey Ostrom",
  // Header line under the name (Nunito 700, 24px). The `highlight` part gets the amber highlighter underline.
  tagline: {
    before: "I study how AI can extend what mentors and near-peers can do, so more students can find ",
    highlight: "an entry point into real-world work",
    after: ".",
  },
  // About paragraph (17px). Render the two links inline where named.
  bio: [
    { text: "I'm a second-year PhD student in Computational Media at UC Santa Cruz, advised by " },
    { text: "David T. Lee", href: "https://lab.tech4good.dev/" },
    {
      text: " in the Tech4Good Lab and supported by the Eugene Cota-Robles Fellowship. My research focuses on scaling experiential learning, so that more students can get the kind of on-the-job learning that usually only comes from internships and apprenticeships. With generative AI reshaping both entry-level work and how software is built, I design and evaluate systems that tailor support to each learner and help them show what they understand. For over three years, I've led and advised my lab's web development skill-building program in UCSC's ",
    },
    { text: "Research Pathways", href: "https://researchpathways.engineering.ucsc.edu/" },
    { text: ", where these systems are designed and tested." },
  ],
  // Box at the end of the intro (tint bg #F4F2FC, radius 16px). Row 1: small uppercase label "Research areas" + white outlined pills.
  // Row 2: "Looking for **Summer 2027 research internships**." No "Get in touch" link (email is already shown on the left).
  seeking: {
    areasLabel: "Research areas",
    areas: ["HCI", "EdTech", "Human–AI collaboration"],
    ask: { before: "Looking for ", bold: "Summer 2027 internships", after: "." },
  },
  email: "aostrom [at] ucsc [dot] edu",
  location: "Santa Cruz, CA",
  headshot: { src: "/headshot_ucsc.png", alt: "Audrey Ostrom" },
  // Icon links under the headshot (email is shown as text above them, not as an icon).
  links: [
    { label: "CV", href: "/cv", icon: "cv" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=471Tq6UAAAAJ&hl=en", icon: "scholar" },
    { label: "ORCID", href: "https://orcid.org/0009-0005-3136-3407", icon: "orcid" },
    { label: "GitHub", href: "https://www.github.com/audsostrom", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/audrey-ostrom", icon: "linkedin" },
  ],
  lastUpdated: "November 2026",
};

// Home page research threads: two equal cards side by side (one column under 760px).
// Each card: 200px image on top, eyebrow, title, one paragraph, optional badge, pills pinned to the bottom.
// Describe published work only; never name unpublished projects. Card copy is FINAL.
export const threads = [
  {
    id: "real-work",
    eyebrow: "Learning through real work",
    title: "Micro-roles and Causeway",
    image: {
      src: "/research/causeway-interface.jpg",
      alt: "Causeway interface: a team dashboard of micro-role subgoal progress, a walkthrough step, terminal output, submission feedback and a code diff review",
      position: "top left",
    },
    text: "Internships teach tacit skills but don't scale. I break real software projects into micro-roles (Components → Containers → Applications) so novices can contribute from day one, and lead **Causeway**, the platform built on this model.",
    badge: "2026 Tools Competition Finalist",
    pills: [
      { label: "Try Causeway", href: "https://causeway.web.app/", style: "primary" },
      { label: "CHI '26 EA", pubId: "chi26-onthejob" },
      { label: "ASEE '26", pubId: "asee26-scaling" },
    ],
    highlight: true, // tinted card background (#FBFAFE, border #E2DEF3)
  },
  {
    id: "adaptive-ai",
    eyebrow: "AI help that adapts",
    title: "Scaffolding and assessment when AI can write the code",
    image: {
      src: "/research/commit-gap-flow.jpg",
      alt: "Flow of the Commit Gap assessment: implement a task, answer task-grounded questions, defend differences from past commits, move to next steps",
      position: "left center",
    },
    text: "When AI can write the code, a working project no longer shows what a student knows. I use students' own work history, like their past commits, to check their understanding in live assessments and to decide how much help an AI tutor should give.",
    pills: [{ label: "SIGCSE '27 Poster", pubId: "sigcse27-commitgap" }],
  },
];
