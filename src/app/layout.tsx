import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { profile } from "@/content/profile";
import { SITE_URL, social } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const description =
  "Audrey Ostrom is a PhD student in Computational Media at UC Santa Cruz (Tech4Good Lab) building systems for scalable on-the-job learning and AI-era assessment.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${profile.name} · PhD Student, UC Santa Cruz`, template: `%s · ${profile.name}` },
  description,
  ...social(profile.name, description),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main id="main" className="mx-auto w-full max-w-[1080px] flex-1 px-4 pb-16 wide:px-8">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
