"use client";
import { useState } from "react";
import { Section, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import PlanCard from "./PlanCard";
import { MC_TIERS } from "@/config/plans";

export default function MinecraftPlans({ h1 }: { h1?: boolean }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const tier = MC_TIERS[activeIdx];

  return (
    <Section id="minecraft-plans" h1={h1}>
      <SectionHeading
        h1={h1}
        eyebrow="Minecraft Hosting"
        title="Minecraft server hosting"
        desc="Plans from Dirt to Warden with NVMe storage, backups, a port and a database included."
      />

      {/* Tier Switcher Tabs */}
      <Reveal className="mb-8 flex justify-center">
        <div
          role="tablist"
          aria-label="Minecraft Tier Selection"
          className="glass flex w-full max-w-2xl flex-col gap-1 rounded-2xl p-1.5 sm:flex-row"
        >
          {MC_TIERS.map((t, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveIdx(idx)}
                className={`flex-1 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-bright to-brand text-white shadow-[0_8px_24px_-10px_rgba(8,123,255,.9)]"
                    : "text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Tier Info description */}
      <div className="mx-auto mb-10 max-w-3xl text-center px-4">
        <p className="text-sm sm:text-base text-muted leading-relaxed">{tier.description}</p>
        {tier.designedFor.length > 0 && (
          <p className="mt-3 text-xs sm:text-sm font-medium text-ice/90">
            Recommended for: {tier.designedFor.join(" • ")}
          </p>
        )}
      </div>

      {/* Pricing Cards Grid */}
      <div key={tier.id} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tier.plans.map((p, n) => (
          <Reveal key={p.id} delay={(n % 4) * 0.05} className="h-full">
            <PlanCard
              variant="mc"
              name={p.name}
              icon={p.icon}
              accent={p.accent}
              ram={p.ram}
              cpu={p.cpu}
              storage={p.storage}
              price={p.price}
              badge={p.badge}
              orderUrl={p.orderUrl}
              extras={[`${p.backups} Backups`, "Port Included", "Database Included"]}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
