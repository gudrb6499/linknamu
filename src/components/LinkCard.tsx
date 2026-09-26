"use client";

import type { LinkItem } from "@/lib/links";

export default function LinkCard({ link }: { link: LinkItem }) {
  const handleClick = () => {
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: link.id }),
      keepalive: true,
    }).catch(() => {});
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="w-full rounded-xl border border-slate-300/40 bg-white/70 px-4 py-3.5 text-center text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
    >
      {link.label}
    </a>
  );
}
