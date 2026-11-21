"use client";

import { useState } from "react";
import RichText from "@/components/site/RichText";
import { news, NEWS_DOT, RECENT_COUNT, type NewsItem } from "@/content/news";

function Rail({ items, showYear }: { items: NewsItem[]; showYear: boolean }) {
  return (
    <ol className="m-0 flex list-none flex-col gap-[18px] border-l-2 border-line-card py-0 pl-5 pr-0">
      {items.map((n) => (
        <li
          key={`${n.year}-${n.label}-${n.text}`}
          className="relative grid grid-cols-1 gap-x-4 gap-y-1 text-[15px] leading-[1.55] wide:grid-cols-[108px_minmax(0,1fr)]"
        >
          <span
            aria-hidden="true"
            className="absolute left-[-27px] top-[6px] h-3 w-3 rounded-full border-2 border-white shadow-[0_0_0_1px_#C9C2EC]"
            style={{ background: NEWS_DOT[n.kind] }}
          />
          <span className="font-bold text-muted">{showYear ? `${n.label} ${n.year}` : n.label}</span>
          <span>
            <RichText text={n.text} />
            {n.link && (
              <>
                {" "}
                <a href={n.link.href} rel="noopener noreferrer">
                  {n.link.label}
                </a>
              </>
            )}
          </span>
        </li>
      ))}
    </ol>
  );
}

export default function NewsList() {
  const [all, setAll] = useState(false);

  const years = Array.from(new Set(news.map((n) => n.year)));

  return (
    <section aria-labelledby="news-h" className="max-w-[820px] border-t border-line pb-14 pt-12">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 id="news-h" className="m-0 font-heading text-[30px] font-extrabold">
          News
        </h2>
        <span className="text-[14px] text-muted">{all ? "Since starting my PhD" : "Latest"}</span>
      </div>

      <div id="news-list">
        {all ? (
          <div className="flex flex-col gap-7">
            {years.map((y) => (
              <div key={y}>
                <h3 className="mb-3 mt-0 font-heading text-[20px] font-extrabold text-accent-hover">{y}</h3>
                <Rail items={news.filter((n) => n.year === y)} showYear={false} />
              </div>
            ))}
          </div>
        ) : (
          <Rail items={news.slice(0, RECENT_COUNT)} showYear />
        )}
      </div>

      <button
        type="button"
        aria-expanded={all}
        aria-controls="news-list"
        onClick={() => setAll((v) => !v)}
        className="mt-7 min-h-[44px] cursor-pointer rounded-xl border border-line-control bg-bg px-[18px] text-[15px] font-bold text-accent-hover hover:border-accent"
      >
        {all ? "Show recent only" : "Show all news since Fall 2025"}
      </button>
    </section>
  );
}
