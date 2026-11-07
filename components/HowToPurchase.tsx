import { MousePointerClick, Rocket, ShoppingCart } from "lucide-react";
import { Section, SectionHeading } from "./ui";
import Reveal from "./Reveal";

const STEPS = [
  {
    step: "01",
    icon: MousePointerClick,
    title: "CHOOSE YOUR PLAN",
    text: "Explore Minecraft or VPS hosting plans tailored to your community size and performance requirements.",
  },
  {
    step: "02",
    icon: ShoppingCart,
    title: "PLACE YOUR ORDER",
    text: "Select your preferred plan and click Order Now to be redirected to our secure billing portal.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "GET STARTED",
    text: "Complete your purchase through the official TBNODES billing portal and follow the instructions provided there.",
  },
];

export default function HowToPurchase({ h1 }: { h1?: boolean }) {
  return (
    <Section id="how-to-purchase" h1={h1}>
      <SectionHeading
        h1={h1}
        eyebrow="How to Purchase"
        title="Three simple steps to launch your server"
        desc="Transparent ordering designed to get your Minecraft or VPS server online fast."
      />
      <ol className="relative grid gap-6 md:grid-cols-3">
        {/* Animated glowing connecting line across steps */}
        <div
          aria-hidden
          className="absolute left-[16%] right-[16%] top-12 hidden h-[2px] bg-gradient-to-r from-brand via-neon to-brand opacity-60 md:block"
        />

        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.12}>
            <li className="glass gborder relative rounded-2xl p-6 text-center h-full flex flex-col items-center">
              {/* Glowing Number Pill */}
              <span className="font-display text-xs font-black tracking-widest text-ice border border-neon/40 bg-ink/90 px-3 py-1 rounded-full mb-4 shadow-[0_0_15px_-3px_rgba(0,217,255,0.4)]">
                STEP {s.step}
              </span>

              {/* Icon Container */}
              <span className="grid h-16 w-16 place-items-center rounded-2xl border border-neon/50 bg-ink text-neon shadow-[0_0_30px_-6px_rgba(0,217,255,0.6)]">
                <s.icon size={28} strokeWidth={1.75} />
              </span>

              <h3 className="mt-5 font-display text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed max-w-xs">{s.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
