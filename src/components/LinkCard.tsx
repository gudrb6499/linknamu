"use client";

import type { LinkItem } from "@/lib/links";

type LinkCardProps = {
  link: LinkItem;
  count: number;
  onCountChange: (id: string, count: number) => void;
};

export default function LinkCard({ link, count, onCountChange }: LinkCardProps) {
  const handleClick = async () => {
    try {
      const res = await fetch("/api/click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: link.id }),
      });
      const data = await res.json();
      if (typeof data.count === "number") {
        onCountChange(link.id, data.count);
      }
    } catch {
      // ponytail: click count is a nice-to-have, ignore network failures
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/50 bg-white/30 px-5 py-4 text-sm font-semibold text-stone-800 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-md transition-colors duration-200 hover:bg-white/45"
    >
      <span className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
          <path d={link.icon} />
        </svg>
        {link.label}
      </span>
      <span className="text-xs font-normal text-stone-400">{count}회</span>
    </a>
  );
}
