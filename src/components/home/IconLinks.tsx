import Link from "next/link";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaRegFileLines } from "react-icons/fa6";
import { SiGooglescholar, SiOrcid } from "react-icons/si";
import { profile } from "@/content/profile";

const ICONS: Record<string, IconType> = {
  cv: FaRegFileLines,
  scholar: SiGooglescholar,
  orcid: SiOrcid,
  github: FaGithub,
  linkedin: FaLinkedin,
};

const cls =
  "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line-control bg-bg text-ink-2 no-underline transition-colors hover:border-accent hover:text-accent";

export default function IconLinks() {
  return (
    <ul aria-label="Links" className="flex flex-wrap gap-1">
      {profile.links.map((l) => {
        const Icon = ICONS[l.icon];
        const icon = <Icon size={20} aria-hidden="true" />;
        const internal = l.href.startsWith("/");
        return (
          <li key={l.label}>
            {internal ? (
              <Link href={l.href} aria-label={l.label} title={l.label} className={cls}>
                {icon}
              </Link>
            ) : (
              <a href={l.href} aria-label={l.label} title={l.label} className={cls} rel="noopener noreferrer">
                {icon}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
