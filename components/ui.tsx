import type { ReactNode } from "react";
import Reveal from "./Reveal";

export function Section({ id, h1, children, className = "" }: { id?: string; h1?: boolean; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative scroll-mt-20 px-5 ${h1 ? "pb-20 pt-36" : "py-24"} ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, desc, h1 }: { eyebrow: string; title: string; desc?: string; h1?: boolean }) {
  const H: "h1" | "h2" = h1 ? "h1" : "h2";
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold tracking-wider text-ice">{eyebrow}</span>
      <H className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</H>
      {desc && <p className="mt-4 text-base text-muted sm:text-lg">{desc}</p>}
    </Reveal>
  );
}
