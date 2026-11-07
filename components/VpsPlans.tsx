import { CircleCheck, Cpu } from "lucide-react";
import { VPS } from "@/config/plans";
import { Section, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import PlanCard from "./PlanCard";

export default function VpsPlans({ kind, h1 }: { kind: "intel" | "ryzen"; h1?: boolean }) {
  const d = VPS[kind];

  return (
    <Section id={kind === "intel" ? "intel-vps" : "ryzen-vps"} h1={h1}>
      <SectionHeading h1={h1} eyebrow={d.eyebrow} title={d.title} desc={d.description} />

      <Reveal className="mx-auto mb-10 max-w-4xl px-4">
        <div className="glass gborder rounded-2xl p-5 sm:p-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-ice">
            <Cpu size={14} className="text-neon" />
            <span>Dedicated Hardware: {d.hardware}</span>
          </div>

          <ul className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3">
            {d.highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-2 rounded-full border border-line bg-bg2/70 px-3.5 py-1.5 text-xs font-medium text-ice"
              >
                <CircleCheck size={14} className="text-neon shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div
        className={`grid gap-5 sm:grid-cols-2 ${
          kind === "intel" ? "lg:grid-cols-3" : "lg:grid-cols-3 xl:grid-cols-4"
        }`}
      >
        {d.plans.map((p, n) => (
          <Reveal key={p.id} delay={(n % 3) * 0.06} className="h-full">
            <PlanCard
              variant={kind === "intel" ? "intel" : "amd"}
              name={p.name}
              icon={p.icon}
              accent={d.accent}
              ram={p.ram}
              cpu={p.cpu}
              storage={p.storage}
              price={p.price}
              orderUrl={p.orderUrl}
              tag={d.hardware}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
