import type { Metadata } from "next";

export const SITE_URL = "https://audsostrom.github.io";

const OG_IMAGE = { url: "/research/causeway-interface.jpg", alt: "Causeway interface" };

/** Per-page Open Graph / Twitter tags (Next replaces, not merges, these objects per route). */
export function social(title: string, description: string): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: { type: "website", siteName: "Audrey Ostrom", title, description, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  };
}

/** True for real profile URLs; filters out placeholders like the bare scholar.google.com. */
export const isRealProfile = (href: string) => href.startsWith("http") && new URL(href).pathname.length > 1;
