import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export type DemoStatus = "production" | "beta" | "draft";

export interface Demo {
  slug: string;
  title: string;
  blurb: string;
  why_it_matters: string;
  partners: string[];
  industries: string[];
  patterns: string[];
  companion_tech: string[];
  author: string;
  author_contact?: string;
  status: DemoStatus;
  featured: boolean;
  setup_time?: string;
  demo_duration?: string;
  prereqs?: string[];
  customer_questions?: string[];
  repo?: string;
  video?: string;
  last_tested?: string;
  contentHtml: string;
}

const demosDirectory = path.join(process.cwd(), "content", "demos");

function readDemoFile(slug: string): Demo | null {
  const fullPath = path.join(demosDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? "Untitled",
    blurb: data.blurb ?? "",
    why_it_matters: data.why_it_matters ?? "",
    partners: data.partners ?? [],
    industries: data.industries ?? [],
    patterns: data.patterns ?? [],
    companion_tech: data.companion_tech ?? [],
    author: data.author ?? "TBD",
    author_contact: data.author_contact,
    status: (data.status as DemoStatus) ?? "draft",
    featured: data.featured === true,
    setup_time: data.setup_time,
    demo_duration: data.demo_duration,
    prereqs: data.prereqs ?? [],
    customer_questions: data.customer_questions ?? [],
    repo: data.repo,
    video: data.video,
    last_tested: data.last_tested,
    contentHtml: content,
  };
}

export async function getAllDemos(): Promise<Demo[]> {
  if (!fs.existsSync(demosDirectory)) return [];
  const fileNames = fs.readdirSync(demosDirectory).filter((f) => f.endsWith(".md"));
  const demos = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      return readDemoFile(slug);
    })
    .filter((d): d is Demo => d !== null);

  // Featured first, then production-ready, then by title
  return demos.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (a.status !== b.status) {
      const order = { production: 0, beta: 1, draft: 2 };
      return order[a.status] - order[b.status];
    }
    return a.title.localeCompare(b.title);
  });
}

export async function getDemoBySlug(slug: string): Promise<Demo | null> {
  const demo = readDemoFile(slug);
  if (!demo) return null;
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(demo.contentHtml);
  return { ...demo, contentHtml: processed.toString() };
}

export async function getDemoSlugs(): Promise<string[]> {
  if (!fs.existsSync(demosDirectory)) return [];
  return fs
    .readdirSync(demosDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

// Helpers for filter chips
export function uniqueValues(demos: Demo[], key: "partners" | "industries" | "patterns"): string[] {
  const set = new Set<string>();
  demos.forEach((d) => d[key].forEach((v) => set.add(v)));
  return Array.from(set).sort();
}
