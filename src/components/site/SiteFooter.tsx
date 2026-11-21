import { profile } from "@/content/profile";

export default function SiteFooter() {
  return (
    <footer className="mt-6 border-t border-line">
      <div className="mx-auto flex max-w-[1080px] flex-wrap justify-between gap-3 px-4 py-7 text-[14px] text-muted wide:px-8">
        <span>{profile.name} · UC Santa Cruz</span>
        <span>Last updated {profile.lastUpdated}</span>
      </div>
    </footer>
  );
}
