import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Neo4j Demo Hub",
  description: "Integration patterns from the field. Neo4j + your stack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <header className="border-b border-ink-100 bg-[#FAFAF7]/80 backdrop-blur sticky top-0 z-10">
          <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded bg-ink flex items-center justify-center text-white font-display text-sm font-medium">
                N
              </div>
              <div className="leading-tight">
                <div className="font-medium text-sm text-ink">Demo Hub</div>
                <div className="text-[11px] text-ink-400 -mt-0.5">Neo4j SA org</div>
              </div>
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-ink-400 hover:text-ink transition-colors"
              >
                Contribute
              </a>
              <span className="text-[11px] px-2 py-1 rounded-full bg-neo-light text-neo-dark font-medium">
                Internal · v0.1
              </span>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-ink-100 mt-16">
          <div className="max-w-content mx-auto px-6 py-8 text-xs text-ink-400 flex items-center justify-between">
            <span>Built by SAs, for SAs.</span>
            <span>Not an official Neo4j marketing property.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
