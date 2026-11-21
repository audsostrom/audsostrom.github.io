// CV page. ONE row pattern for every section except Skills (Audrey is in HCI; inconsistency will be noticed):
//
//   **Title**, Organization ............................ Date      <- date in a 180px right column
//   Optional description (15px, muted #5A5768, 1–2 lines)
//
// - Title bold, organization regular, separated by ", ".
// - Date rule: a single term uses the term ("Spring 2026"); anything longer uses years ("2023 – 2025").
// - Description may contain inline links (rendered as accent links).
// - Section layout: 220px section title | rows; 1px top border; rows 16px apart. Stack to one column under 760px.

export const cvPdf = "/cv.pdf"; // [UPLOAD UPDATED CV PDF]

export interface CvRow {
  title: string;
  org: string;
  date: string;
  desc?: string; // may include simple inline links: [label](url)
}

export const sections: { title: string; rows: CvRow[] }[] = [
  {
    title: "Education",
    rows: [
      { title: "Ph.D., Computational Media", org: "UC Santa Cruz", date: "2025 – 2030 (expected)", desc: "Tech4Good Lab · Advisor: David T. Lee" },
      { title: "B.S., Computer Science, Minor in Statistics", org: "UC Santa Cruz", date: "2020 – 2024" },
    ],
  },
  {
    title: "Honors & funding",
    rows: [
      {
        title: "2× Awardee",
        org: "UCSC Colleges Student Project Fund",
        date: "2026",
        desc: "For research projects I proposed and led with undergraduate mentees.",
      },
      { title: "Finalist", org: "Tools Competition, Building Pathways to Postsecondary Success", date: "2026" },
      { title: "Summer Fellowship", org: "Computational Media Department, UC Santa Cruz", date: "Summer 2026" },
      { title: "Travel awards", org: "UC Santa Cruz", date: "2026", desc: "Dean’s Travel Grant; Computational Media Travel Supplement Award" },
      { title: "Eugene Cota-Robles Fellowship", org: "UC Santa Cruz", date: "2025 – present" },
      { title: "Regents Fellowship", org: "UC Santa Cruz", date: "2025" },
    ],
  },
  {
    title: "Experience",
    rows: [
      {
        title: "Junior Research Engineer",
        org: "UC Santa Cruz",
        date: "2025",
        desc: "Led an Agile team of 8 developers building open-source Angular/Firebase apps for edtech and social computing studies; ran interviews and thematic coding.",
      },
      {
        title: "Web Development Lead",
        org: "Tech4Good Lab",
        date: "2023 – 2025",
        desc: "Directed 70+ undergraduate researchers across 7 teams through sprints, code review, and deployment. Architected a gratitude-sharing community platform that increased positive engagement by 60% in user studies.",
      },
      {
        title: "Full-Stack Engineer Intern",
        org: "Sorbet",
        date: "Fall 2024",
        desc: "Built portfolio and payment features for a cross-border fintech startup (Next.js, Redux, Tailwind; NestJS and PostgreSQL APIs).",
      },
      {
        title: "Research Assistant",
        org: "UCSC Open Source Program Office",
        date: "Summer 2024",
        desc: "Built an open-source learning platform for 100+ users, including an in-browser coding environment on StackBlitz WebContainers. [OSRE report](https://ucsc-ospo.github.io/report/osre24/ucsc/causeway/20240620-audsostrom/)",
      },
    ],
  },
  {
    title: "Workshop contributions",
    rows: [
      {
        title: "Causeway: Generative UI for Just-in-Time Experiential Learning",
        org: "CHI 2026 Workshop on Generative UI",
        date: "Spring 2026",
        desc: "Video submission (non-archival) · [Video](https://www.youtube.com/watch?v=7sjMvdRsruw) · [Workshop](https://genuimeetshci.github.io/chi26-workshop/)",
      },
    ],
  },
  {
    title: "Mentoring & teaching",
    rows: [
      {
        title: "Research Mentor",
        org: "Tech4Good Lab · UCSC Research Pathways",
        date: "2025 – present",
        desc: "Mentor ~6 undergraduates per quarter and advise the lab’s web development skill-building program. Recent projects: an AI tutor that scaffolds open-ended project work and a team coding platform built around each student’s learning pathway.",
      },
      {
        title: "Mentor",
        org: "UCSC Science Internship Program",
        date: "Summer 2026",
        desc: "[“Applications of Live Assessments and Generative AI for Fairer Evaluation Outcomes”](https://sip.ucsc.edu/2026-research-projects/)",
      },
      { title: "Teaching Assistant", org: "CMPM 118, UC Santa Cruz", date: "Spring 2026" },
      {
        title: "Mentor",
        org: "UCSC Science Internship Program",
        date: "Summer 2025",
        desc: "[“Exploring the Use of Generative AI for Creating Experiential Learning Content”](https://sip.ucsc.edu/2025-research-projects/)",
      },
      {
        title: "Academic Tutor",
        org: "UC Santa Cruz",
        date: "2022 – 2024",
        desc: "1:1 and group tutoring across 24 courses in discrete math, data structures, algorithms, C/C++, and Python.",
      },
    ],
  },
  // "Service & Leadership" and "Skills" are rendered between Mentoring & teaching and Other projects, using their own layouts (see below).
  {
    title: "Other projects",
    rows: [
      {
        title: "Mouse sleep-stage classification",
        org: "UC Santa Cruz",
        date: "Spring 2023",
        desc: "Dual CNNs on Fourier-transformed EEG/EMG data from the Zuo Lab, 91% accuracy (PyTorch) · [Code](https://github.com/audsostrom/mice-sleep-analysis)",
      },
      {
        title: "Flora Fit",
        org: "LA Hacks",
        date: "Spring 2024",
        desc: "Exploration app with Gemini-generated journal prompts (React Native, Firebase) · [Code](https://github.com/LAHacks2024/FloraFit)",
      },
    ],
  },
];

export const skills = [
  { title: "Research methods", text: "Semi-structured interviews, thematic coding, grounded theory, surveys, field deployments" },
  {
    title: "Engineering",
    text: "Python, TypeScript, SQL, R, C/C++ · React, Angular, Next.js, Flask · PyTorch, pandas, scikit-learn · GCP, Firebase, PostgreSQL, MongoDB · Docker, Figma",
  },
];

// "Service & Leadership" section: a single run-in paragraph (16px), items joined by " · ", each "**Title**, Org (dates)".
export const leadership = [
  { title: "President", org: "Women in Science and Engineering (WiSE)", date: "2026 – present" },
  { title: "Tech Director", org: "GraceHacks", date: "2023 – 2024" },
  { title: "Logistics Officer", org: "CruzHacks", date: "2023 – 2024" },
  { title: "Mobile Developer", org: "UCSC Blueprint", date: "2023 – 2024" },
];
