import { ArrowUpRight, Cpu, Database, HardDrive, MemoryStick, ShieldCheck, type LucideIcon } from "lucide-react";
import { BILLING_URL } from "@/config/site";
import TiltCard from "./TiltCard";
import GameIcon from "./icons/GameIcons";

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-center justify-between gap-3 border-b border-line/60 pb-2.5 last:border-0">
      <span className="flex items-center gap-2.5 text-xs sm:text-sm text-muted">
        <Icon className="h-4 w-4 text-neon shrink-0" strokeWidth={1.75} />
        {label}
      </span>
      <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">{value}</span>
    </li>
  );
}

export type PlanCardProps = {
  name: string;
  icon: string;
  accent: string;
  ram: string;
  cpu: string;
  storage: string;
  price: number;
  variant: "mc" | "intel" | "amd";
  tag?: string;
  badge?: string;
  extras?: string[];
  orderUrl?: string;
};

export default function PlanCard({
  name,
  icon,
  accent,
  ram,
  cpu,
  storage,
  price,
  variant,
  tag,
  badge,
  extras,
  orderUrl,
}: PlanCardProps) {
  const isMc = variant === "mc";

  return (
    <TiltCard>
      <article
        className={`glass gborder relative flex h-full flex-col overflow-hidden rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
          variant === "amd" ? "amd-card" : ""
        }`}
      >
        {/* Glow & highlight */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-25 blur-3xl"
          style={{ background: accent }}
        />

        {/* Header with authentic Minecraft block or Mob icon */}
        <header className="relative flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border p-1 shadow-[0_4px_20px_-4px_rgba(0,123,255,0.4)]"
              style={{
                borderColor: `${accent}66`,
                background: "rgba(12, 20, 34, 0.85)",
              }}
            >
              <GameIcon name={icon} className="h-8 w-8" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                {name}
                {isMc ? " Plan" : ""}
              </h3>
              {tag && <p className="text-xs font-medium text-muted truncate">{tag}</p>}
            </div>
          </div>
        </header>

        {/* Optional Owner Verification or Feature Badge */}
        {badge && (
          <div className="relative mt-3">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-cyan-400/40 bg-cyan-950/40 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-cyan-300">
              <ShieldCheck size={12} className="shrink-0 text-neon" />
              {badge}
            </span>
          </div>
        )}

        {/* Key Specifications (always visible, never hidden behind hover) */}
        <ul className="relative mt-5 space-y-2.5 text-sm">
          <Spec icon={MemoryStick} label="RAM" value={ram} />
          <Spec icon={Cpu} label={isMc ? "CPU" : "vCore"} value={cpu} />
          <Spec icon={HardDrive} label="NVMe Storage" value={storage} />
        </ul>

        {/* Extra bundle features (Backups, Port, Database) */}
        {extras && extras.length > 0 && (
          <div className="relative mt-4 rounded-xl border border-line/60 bg-bg2/40 px-3 py-2">
            <p className="flex items-center gap-2 text-xs font-medium text-ice/90">
              <Database className="h-3.5 w-3.5 shrink-0 text-neon" strokeWidth={1.75} />
              <span>{extras.join(" • ")}</span>
            </p>
          </div>
        )}

        {/* Pricing and direct billing order action */}
        <div className="relative mt-auto pt-6">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              ₹{price.toLocaleString("en-IN")}
            </span>
            <span className="text-xs sm:text-sm font-medium text-muted">/month</span>
          </div>

          <a
            href={orderUrl ?? BILLING_URL}
            className="btn-primary mt-4 w-full justify-center group"
          >
            <span>Order Now</span>
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </article>
    </TiltCard>
  );
}
