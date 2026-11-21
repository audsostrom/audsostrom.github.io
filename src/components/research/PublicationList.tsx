"use client";

import { useEffect, useState } from "react";
import PubEntry from "./PubEntry";
import { FILTERS, publications } from "@/content/publications";

type FilterId = (typeof FILTERS)[number]["id"];
const isFilterId = (v: string | null): v is FilterId => FILTERS.some((f) => f.id === v);

export default function PublicationList() {
  const [filter, setFilter] = useState<FilterId>("all");

  // Read ?type= once on mount (static export: avoid useSearchParams + Suspense).
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("type");
    if (isFilterId(t)) setFilter(t);
  }, []);

  const pick = (id: FilterId) => {
    setFilter(id);
    const url = new URL(window.location.href);
    if (id === "all") url.searchParams.delete("type");
    else url.searchParams.set("type", id);
    url.hash = "";
    window.history.replaceState(null, "", url);
  };

  const types: readonly string[] = FILTERS.find((f) => f.id === filter)!.types;
  const shown = publications.filter((p) => types.includes(p.type));
  const years = Array.from(new Set(shown.map((p) => p.year))).sort((a, b) => b - a);

  return (
    <>
      <div role="group" aria-label="Filter by type" className="flex flex-wrap gap-[10px] pb-8">
        {FILTERS.map((f) => {
          const on = f.id === filter;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={on}
              onClick={() => pick(f.id)}
              className={`min-h-[44px] cursor-pointer rounded-full border px-[18px] text-[15px] font-bold ${
                on ? "border-accent bg-accent text-white" : "border-line-control bg-bg text-ink hover:border-accent"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {years.map((y) => (
        <section key={y} aria-labelledby={`y-${y}`} className="border-t border-line py-8">
          <h2 id={`y-${y}`} className="mb-6 mt-0 font-heading text-[26px] font-extrabold text-muted">
            {y}
          </h2>
          <div className="flex flex-col gap-8">
            {shown
              .filter((p) => p.year === y)
              .map((p) => (
                <PubEntry key={p.id} pub={p} />
              ))}
          </div>
        </section>
      ))}

      {years.length === 0 && (
        <p role="status" className="border-t border-line py-8 text-[16px] text-muted">
          Nothing of this type yet.
        </p>
      )}
    </>
  );
}
