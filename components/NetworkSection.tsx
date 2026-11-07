import { Gauge, MapPin, ShieldCheck, Wifi } from "lucide-react";
import { Section, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import SceneFrame from "./three/SceneFrame";

const FACTS = [
  {
    icon: MapPin,
    title: "Delhi, India Datacenter",
    text: "Strategically located server infrastructure providing ultra-low ping across India and South Asia.",
  },
  {
    icon: Gauge,
    title: "2Gbps Network Uplink",
    text: "High-speed network pipes with unmetered bandwidth on Intel Platinum VPS plans.",
  },
  {
    icon: ShieldCheck,
    title: "Cloudflare Magic Transit + DDoS Protection",
    text: "Enterprise mitigation filtering unwanted attacks before they reach AMD Ryzen VPS servers.",
  },
  {
    icon: Wifi,
    title: "Dedicated IPv4 Address",
    text: "Dedicated IPv4 included with Intel Platinum VPS plans for pristine IP reputation and direct access.",
  },
];

export default function NetworkSection({ h1 }: { h1?: boolean }) {
  return (
    <Section id="network" h1={h1}>
      <SectionHeading
        h1={h1}
        eyebrow="Connected Network"
        title="Connected network"
        desc="Hover the nodes to explore a simplified view of how traffic moves between systems."
      />
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="glass gborder rounded-2xl p-2 sm:p-4 overflow-hidden">
            <SceneFrame
              scene="globe"
              label="3D connected network globe with Delhi, India marker"
              className="h-[360px] sm:h-[480px]"
              fallback={
                <div className="grid h-full place-items-center">
                  <div className="grid h-52 w-52 place-items-center rounded-full border border-brand/40 bg-brand/10">
                    <MapPin className="h-12 w-12 text-neon" strokeWidth={1.25} />
                  </div>
                </div>
              }
            />
          </div>
        </Reveal>
        <ul className="grid gap-4">
          {FACTS.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <li className="glass gborder flex gap-4 rounded-2xl p-5 items-start">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-brand/40 bg-brand/10 text-neon shadow-[0_0_16px_-4px_rgba(8,123,255,0.4)]">
                  <f.icon size={22} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-white text-base">{f.title}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">{f.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
