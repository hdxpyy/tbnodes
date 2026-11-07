import { Cloud, Cpu, Database, Headset, HardDrive, Rocket, ShieldCheck, Terminal } from "lucide-react";
import { Section, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const FEATURES = [
  {
    icon: Cpu,
    title: "Enterprise Hardware",
    text: "Powered by multi-core Intel Xeon and high-frequency AMD Ryzen 9 9950X processors.",
  },
  {
    icon: HardDrive,
    title: "High-Speed NVMe Storage",
    text: "Lightning-fast Gen4 NVMe SSDs delivering instant world chunk loading and file transfers.",
  },
  {
    icon: ShieldCheck,
    title: "DDoS Protection",
    text: "Enterprise mitigation featuring Cloudflare Magic Transit on AMD Ryzen VPS hosting.",
  },
  {
    icon: Cloud,
    title: "Performance-Focused Infrastructure",
    text: "Strategically hosted in Delhi, India to guarantee minimum ping across the country.",
  },
  {
    icon: Rocket,
    title: "Instant Setup Target",
    text: "Automated provisioning target ensures swift server delivery as soon as billing completes.",
  },
  {
    icon: Database,
    title: "Minecraft Server Hosting",
    text: "Automated backups, extra port, and dedicated MySQL database bundled with every plan.",
  },
  {
    icon: Terminal,
    title: "Full Root Access for VPS",
    text: "Complete administrative control to install custom kernels, software stacks, and configs.",
  },
  {
    icon: Headset,
    title: "24/7 Technical Support",
    text: "Responsive assistance anytime through our active Discord server and support email.",
  },
];

export default function Features({ h1 }: { h1?: boolean }) {
  return (
    <Section id="features" h1={h1}>
      <SectionHeading
        h1={h1}
        eyebrow="Features"
        title="Everything you need to run fast"
        desc="Enterprise-grade hardware, blazing NVMe storage, and round-the-clock support behind every TBNODES plan."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={(i % 4) * 0.07} className="h-full">
            <TiltCard>
              <div className="glass gborder h-full rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-brand/40 bg-brand/10 text-neon shadow-[0_0_20px_-4px_rgba(8,123,255,0.4)]">
                    <f.icon size={24} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">{f.text}</p>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
