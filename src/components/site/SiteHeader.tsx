"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/content/profile";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/cv", label: "CV" },
];

export default function SiteHeader() {
  const pathname = usePathname().replace(/\/$/, "") || "/";

  return (
    <header className="border-b border-line bg-bg">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-[18px] wide:px-8"
      >
        <Link
          href="/"
          className="font-heading text-[20px] font-extrabold tracking-[-0.01em] text-ink no-underline hover:text-accent"
        >
          {profile.name}
        </Link>
        <ul className="flex flex-wrap gap-x-7 gap-y-1 text-[15px] font-semibold">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex min-h-[44px] items-center border-b-2 no-underline ${
                    active ? "border-accent text-accent" : "border-transparent text-ink-2 hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
