import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        // Mobile collapse point from the design (≤760px stacks to one column).
        wide: "761px",
      },
      colors: {
        bg: "#FFFFFF",
        surface: "#F7F6FC",
        "surface-2": "#FBFAFE",
        tint: "#F4F2FC",
        line: "#ECEAF3",
        "line-card": "#E2DEF3",
        "line-control": "#DAD6EA",
        ink: "#1D1B26",
        "ink-2": "#3A3748",
        muted: "#5A5768",
        accent: { DEFAULT: "#4B37C8", hover: "#2E2190" },
        amber: { bg: "#FDF1D6", fg: "#6B4A00", hl: "#FBE3A6" },
        green: { bg: "#E8F3EE", fg: "#1E5B42" },
        focus: "#B9B1E6",
      },
      fontFamily: {
        heading: ["var(--font-nunito)", "system-ui", "sans-serif"],
        body: ["var(--font-nunito-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
