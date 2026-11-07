import { HelpCircle, Info, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export type GuideItem = {
  question: string;
  answer: string;
};

export default function KnowledgeGuide({
  title = "Hosting Architecture & Buyer's Guide",
  eyebrow = "Knowledge Base",
  description = "Technical specifications, recommendations, and clear architectural answers to help you choose the best hosting configuration.",
  items,
}: {
  title?: string;
  eyebrow?: string;
  description?: string;
  items: GuideItem[];
}) {
  return (
    <section className="relative px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-ice uppercase mb-3">
              <Sparkles size={13} className="text-neon" />
              <span>{eyebrow}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              {title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm text-muted leading-relaxed">
              {description}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <Reveal key={item.question} delay={idx * 0.06} className="h-full">
              <div className="glass gborder rounded-2xl p-6 h-full flex flex-col justify-start">
                <div className="flex items-start gap-3.5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-brand/40 bg-brand/10 text-neon mt-0.5">
                    <HelpCircle size={16} />
                  </span>
                  <h3 className="font-display text-base font-bold text-white leading-snug">
                    {item.question}
                  </h3>
                </div>
                <div className="mt-3.5 text-xs sm:text-sm text-muted leading-relaxed pl-11">
                  <p>{item.answer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
