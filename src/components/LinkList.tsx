"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/lib/links";
import LinkCard from "./LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/click")
      .then((res) => res.json())
      .then((data) => setCounts(data.counts ?? {}))
      .catch(() => {});
  }, []);

  const handleCountChange = (id: string, count: number) => {
    setCounts((prev) => ({ ...prev, [id]: count }));
  };

  return (
    <div className="flex w-full flex-col gap-5">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          link={link}
          count={counts[link.id] ?? 0}
          onCountChange={handleCountChange}
        />
      ))}
    </div>
  );
}
