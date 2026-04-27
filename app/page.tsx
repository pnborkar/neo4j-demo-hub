import { getAllDemos, uniqueValues } from "@/lib/demos";
import DemoGallery from "@/components/DemoGallery";

export default async function HomePage() {
  const demos = await getAllDemos();
  const partners = uniqueValues(demos, "partners");
  const industries = uniqueValues(demos, "industries");

  return (
    <div className="relative">
      <div className="absolute inset-0 dotgrid pointer-events-none" aria-hidden />
      <div className="relative max-w-content mx-auto px-6 pt-16 pb-20">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-neo-dark font-medium mb-4">
            Integration patterns from the field
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-ink leading-[1.05] mb-5 tracking-tight">
            Neo4j <span className="italic font-normal text-ink-400">+</span> your stack.
          </h1>
          <p className="text-lg text-ink-600 leading-relaxed max-w-2xl">
            Every demo in this hub is runnable, scripted, and ready to deliver.
            Filter by the partner ecosystem your customer lives in. Clone, run,
            walk through.
          </p>
        </div>

        <DemoGallery
          demos={demos}
          partners={partners}
          industries={industries}
        />
      </div>
    </div>
  );
}
