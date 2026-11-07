import { CircleCheck } from "lucide-react";
import { Section } from "./ui";
import Reveal from "./Reveal";

const POINTS = [
  "Performance-focused hardware",
  "Flexible hosting plans",
  "High-speed NVMe storage",
  "Delhi, India infrastructure",
  "DDoS protection where supplied",
  "Dedicated 24/7 technical support",
  "Transparent upfront pricing",
  "Multiple hosting categories",
];

export default function WhyTB({ h1 }: { h1?: boolean }) {
  const H: "h1" | "h2" = h1 ? "h1" : "h2";

  return (
    <Section id="why-tb-nodes" h1={h1}>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-ice uppercase mb-4">
            <span>Why Choose TBNODES</span>
          </div>
          <H className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
            BUILT FOR PERFORMANCE.<br />
            <span className="text-grad">DESIGNED FOR GAMERS.</span>
          </H>
          <p className="mt-5 max-w-lg text-sm sm:text-base text-muted sm:text-lg leading-relaxed">
            TBNODES provides hosting solutions designed for Minecraft communities, gamers, creators, developers and VPS users. Powered by real enterprise hardware in Delhi, India.
          </p>
        </Reveal>

        <ul className="grid gap-3 sm:grid-cols-2">
          {POINTS.map((p, i) => (
            <Reveal key={p} delay={i * 0.05}>
              <li className="glass gborder flex items-center gap-3 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white">
                <CircleCheck size={18} className="shrink-0 text-neon" />
                <span>{p}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
