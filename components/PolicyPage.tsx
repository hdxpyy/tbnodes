import type { ReactNode } from "react";
import { TriangleAlert } from "lucide-react";
import { Section } from "./ui";

export default function PolicyPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Section h1>
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">{title}</h1>
        <div className="glass mt-6 flex gap-3 rounded-xl border-amber-400/40 p-4 text-sm text-amber-200">
          <TriangleAlert size={18} className="mt-0.5 shrink-0" />
          <p>Draft for owner review. Replace the bracketed sections with your confirmed policy before publishing.</p>
        </div>
        <div className="mt-8 space-y-6 text-muted [&_h2]:mb-2 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white">{children}</div>
      </div>
    </Section>
  );
}
