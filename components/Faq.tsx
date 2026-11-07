"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/config/faq";
import { Section, SectionHeading } from "./ui";
import Reveal from "./Reveal";

export default function Faq({ h1 }: { h1?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" h1={h1}>
      <SectionHeading
        h1={h1}
        eyebrow="FAQ"
        title="Frequently asked questions"
        desc="Answers to common questions regarding Minecraft server plans, VPS infrastructure, and billing."
      />
      <div className="mx-auto max-w-3xl space-y-3 px-2 sm:px-0">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q}>
              <div className="glass gborder rounded-2xl transition-colors">
                <button
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white text-sm sm:text-base hover:text-ice transition-colors"
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-neon transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-muted border-t border-line/40 pt-3">
                        <p>{f.a}</p>
                        {f.links && f.links.length > 0 && (
                          <div className="mt-3.5 flex flex-wrap gap-2">
                            {f.links.map((l) => (
                              <a
                                key={l.href}
                                href={l.href}
                                {...(l.href.includes("discord")
                                  ? { target: "_blank", rel: "noopener noreferrer" }
                                  : {})}
                                className="btn-ghost !px-3.5 !py-2 text-xs"
                              >
                                {l.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
