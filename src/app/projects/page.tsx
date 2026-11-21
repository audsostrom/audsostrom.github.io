import type { Metadata } from "next";
import Redirect from "@/components/site/Redirect";

export const metadata: Metadata = { title: "Moved to Research", robots: { index: false } };

export default function ProjectsRedirect() {
  return <Redirect to="/research" label="the Research page" />;
}
