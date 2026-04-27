import Link from "next/link";
import type { Demo } from "@/lib/demos";

const partnerColors: Record<string, string> = {
  Databricks: "bg-[#FF3621]/10 text-[#B8261A]",
  GCP: "bg-[#4285F4]/10 text-[#1A56C7]",
  AWS: "bg-[#FF9900]/10 text-[#B36800]",
  Snowflake: "bg-[#29B5E8]/10 text-[#1A7BA0]",
  Confluent: "bg-[#173361]/10 text-[#173361]",
  Azure: "bg-[#0078D4]/10 text-[#005A9E]",
};

export default function DemoCard({ demo }: { demo: Demo }) {
  const statusLabel =
    demo.status === "production"
      ? "Production"
      : demo.status === "beta"
      ? "Beta"
      : "Draft";
  const statusColor =
    demo.status === "production"
      ? "text-accent-green"
      : demo.status === "beta"
      ? "text-accent-amber"
      : "text-ink-400";

  return (
    <Link href={`/demos/${demo.slug}`} className="block">
      <article
        className={`demo-card h-full bg-white border rounded-xl p-5 ${
          demo.featured ? "border-neo border-2" : "border-ink-100"
        }`}
      >
        <div className="flex items-center gap-2 mb-3 text-[11px]">
          {demo.featured && (
            <span className="px-2 py-0.5 rounded bg-neo text-white font-medium uppercase tracking-wide">
              Featured
            </span>
          )}
          <span className={`font-medium ${statusColor}`}>{statusLabel}</span>
          {demo.last_tested && (
            <span className="text-ink-400 ml-auto">
              tested {demo.last_tested.slice(0, 7)}
            </span>
          )}
        </div>

        <h3 className="font-display text-lg font-medium text-ink leading-tight mb-2">
          {demo.title}
        </h3>
        <p className="text-sm text-ink-600 leading-relaxed mb-4">
          {demo.blurb}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {demo.partners.map((p) => (
            <span
              key={p}
              className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                partnerColors[p] ?? "bg-ink-50 text-ink-600"
              }`}
            >
              {p}
            </span>
          ))}
          {demo.industries.slice(0, 2).map((i) => (
            <span
              key={i}
              className="text-[11px] px-2 py-0.5 rounded bg-ink-50 text-ink-600"
            >
              {i}
            </span>
          ))}
          {demo.patterns.slice(0, 1).map((p) => (
            <span
              key={p}
              className="text-[11px] px-2 py-0.5 rounded bg-amber-50 text-amber-800"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-ink-100 text-[11px]">
          <span className="text-ink-400">Author</span>
          <span className="font-medium text-ink-600">{demo.author}</span>
          <span className="ml-auto text-neo font-medium">View demo →</span>
        </div>
      </article>
    </Link>
  );
}
