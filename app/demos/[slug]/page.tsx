import { getDemoBySlug, getDemoSlugs } from "@/lib/demos";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = await getDemoSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function DemoPage({
  params,
}: {
  params: { slug: string };
}) {
  const demo = await getDemoBySlug(params.slug);
  if (!demo) notFound();

  const statusLabel =
    demo.status === "production"
      ? "Production-ready"
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
    <article className="max-w-content mx-auto px-6 py-12">
      <Link
        href="/"
        className="text-xs text-ink-400 hover:text-ink mb-8 inline-flex items-center gap-1"
      >
        ← Back to all demos
      </Link>

      <header className="mb-10 max-w-3xl">
        <div className="flex items-center gap-3 mb-4 text-[11px] font-medium">
          <span className={statusColor}>{statusLabel}</span>
          {demo.last_tested && (
            <span className="text-ink-400">
              Last tested {demo.last_tested}
            </span>
          )}
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-medium text-ink leading-tight tracking-tight mb-5">
          {demo.title}
        </h1>
        <p className="text-lg text-ink-600 leading-relaxed">{demo.blurb}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-10">
          {demo.why_it_matters && (
            <Section title="Why it matters">
              <p className="text-base text-ink-600 leading-relaxed whitespace-pre-line">
                {demo.why_it_matters}
              </p>
            </Section>
          )}

          {demo.customer_questions && demo.customer_questions.length > 0 && (
            <Section title="Customer questions this answers">
              <ul className="space-y-2">
                {demo.customer_questions.map((q) => (
                  <li
                    key={q}
                    className="text-base text-ink-600 leading-relaxed pl-4 border-l-2 border-neo italic font-display"
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {demo.contentHtml && (
            <Section title="Demo notes">
              <div
                className="prose prose-sm prose-neutral max-w-none text-ink-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: demo.contentHtml }}
              />
            </Section>
          )}
        </div>

        <aside className="space-y-6">
          <div className="bg-white border border-ink-100 rounded-xl p-5 space-y-4">
            <h3 className="text-xs uppercase tracking-wider text-ink-400 font-medium">
              At a glance
            </h3>
            <Stat label="Setup time" value={demo.setup_time ?? "—"} />
            <Stat label="Demo length" value={demo.demo_duration ?? "—"} />
            <Stat label="Author" value={demo.author} />
          </div>

          <div className="bg-white border border-ink-100 rounded-xl p-5 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-ink-400 font-medium mb-3">
              Get started
            </h3>
            {demo.repo && (
              <ActionLink href={demo.repo} label="Clone repo" external />
            )}
            {demo.video && (
              <ActionLink href={demo.video} label="Watch walkthrough" external />
            )}
            {!demo.repo && !demo.video && (
              <p className="text-xs text-ink-400 italic">
                Repo and video links coming soon.
              </p>
            )}
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider text-ink-400 font-medium mb-3">
              Tags
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {[...demo.partners, ...demo.industries, ...demo.patterns].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded bg-ink-50 text-ink-600"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {demo.companion_tech.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-ink-400 font-medium mb-3">
                Stack
              </h3>
              <ul className="space-y-1">
                {demo.companion_tech.map((tech) => (
                  <li
                    key={tech}
                    className="text-sm text-ink-600 font-mono"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {demo.prereqs && demo.prereqs.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-ink-400 font-medium mb-3">
                Prereqs
              </h3>
              <ul className="space-y-1.5">
                {demo.prereqs.map((p) => (
                  <li key={p} className="text-sm text-ink-600 flex gap-2">
                    <span className="text-ink-400">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-medium text-ink mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] text-ink-400 uppercase tracking-wider mb-0.5">
        {label}
      </p>
      <p className="text-sm font-medium text-ink">{value}</p>
    </div>
  );
}

function ActionLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block w-full px-3 py-2 rounded-lg border border-ink-200 hover:border-neo hover:bg-neo-light transition-colors text-sm text-ink-600 hover:text-neo-dark"
    >
      {label} →
    </a>
  );
}
