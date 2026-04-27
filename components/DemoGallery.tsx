"use client";

import { useMemo, useState } from "react";
import type { Demo } from "@/lib/demos";
import DemoCard from "./DemoCard";

interface Props {
  demos: Demo[];
  partners: string[];
  industries: string[];
}

export default function DemoGallery({ demos, partners, industries }: Props) {
  const [partner, setPartner] = useState<string>("all");
  const [industry, setIndustry] = useState<string>("all");

  const filtered = useMemo(() => {
    return demos.filter((d) => {
      const partnerOk = partner === "all" || d.partners.includes(partner);
      const industryOk = industry === "all" || d.industries.includes(industry);
      return partnerOk && industryOk;
    });
  }, [demos, partner, industry]);

  const hasFilters = partner !== "all" || industry !== "all";

  return (
    <div>
      <div className="space-y-4 mb-10">
        <FilterRow
          label="Partner"
          options={["all", ...partners]}
          active={partner}
          onChange={setPartner}
        />
        <FilterRow
          label="Industry"
          options={["all", ...industries]}
          active={industry}
          onChange={setIndustry}
        />
      </div>

      <div className="flex items-baseline justify-between mb-5">
        <p className="text-xs text-ink-400 uppercase tracking-wider font-medium">
          {filtered.length} demo{filtered.length === 1 ? "" : "s"}
        </p>
        {hasFilters && (
          <button
            onClick={() => {
              setPartner("all");
              setIndustry("all");
            }}
            className="text-xs text-ink-400 hover:text-ink underline underline-offset-2"
          >
            Clear filters
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="border border-dashed border-ink-200 rounded-xl p-10 text-center">
          <p className="text-sm text-ink-400 mb-2">
            No demos match those filters yet.
          </p>
          <p className="text-sm text-ink-600">
            Want to{" "}
            <a
              href="https://github.com"
              className="text-neo underline underline-offset-2"
            >
              contribute one
            </a>
            ?
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((d) => (
            <DemoCard key={d.slug} demo={d} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterRow({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: string[];
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-[11px] uppercase tracking-wider text-ink-400 font-medium pt-1.5 w-16 flex-shrink-0">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => {
          const label = opt === "all" ? "All" : opt;
          const isActive = active === opt;
          return (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              data-active={isActive}
              className="chip text-xs px-3 py-1 rounded-full border border-ink-200 text-ink-600 hover:border-ink-400 hover:text-ink"
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
