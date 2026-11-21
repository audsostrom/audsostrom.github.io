import type { Metadata } from "next";
import Redirect from "@/components/site/Redirect";

export const metadata: Metadata = { title: "Moved to CV", robots: { index: false } };

export default function BackgroundRedirect() {
  return <Redirect to="/cv" label="the CV page" />;
}
