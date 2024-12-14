import Navbar from "./components/navbar";
import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from 'next/font/google';
import { Theme } from "@radix-ui/themes";
import "./globals.css";

const sans = IBM_Plex_Sans({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans'
})

const inter = Inter({
  subsets: ['latin'], // Load specific character subsets
  variable: '--font-inter', // Add as a CSS variable (optional)
  display: 'swap',         // Use swap for better loading performance
});

export const metadata: Metadata = {
  title: "the auds corner",
  description: "Portfolio Site for Audrey Ostrom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sans.variable} antialiased`}
        style={{
          background: "linear-gradient(-45deg, #ffffff, #ffe4e9, #fcc8e2, #f6baed, #efb0ff, #d3a2ff, #8eb8ff, #91efff, #d5f9ff)",
          backgroundSize: "200% 200%",
          animation: "anim 15s ease infinite",
          overflowY: "hidden"
        }}
      >
        <Theme hasBackground={false}>
        <Navbar />
        {children}
        </Theme>
      </body>
    </html>
  );
}
