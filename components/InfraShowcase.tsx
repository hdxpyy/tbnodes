import { Network, Server, Box } from "lucide-react";
import { Section, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import SceneFrame from "./three/SceneFrame";

const fb = (Icon: typeof Server) => (
  <div className="grid h-full place-items-center">
    <Icon className="h-16 w-16 text-brand/70" strokeWidth={1.25} />
  </div>
);

const ITEMS = [
  {
    scene: "rack" as const,
    icon: Server,
    title: "Server infrastructure",
    text: "Enterprise-grade hardware in Delhi, India. Move your pointer over the racks to rotate them.",
    label: "3D interactive server racks in Delhi datacenter",
  },
  {
    scene: "block" as const,
    icon: Box,
    title: "Minecraft server hosting",
    text: "Plans from Dirt to Warden with NVMe storage, backups, a port and a database included.",
    label: "3D Minecraft-inspired server block",
  },
  {
    scene: "nodes" as const,
    icon: Network,
    title: "Connected network",
    text: "Hover the nodes to explore a simplified view of how traffic moves between systems.",
    label: "3D network node visualization",
  },
];

export default function InfraShowcase({ h1 }: { h1?: boolean }) {
  return (
    <Section id="infrastructure" h1={h1}>
      <SectionHeading
        h1={h1}
        eyebrow="Infrastructure"
        title="Server infrastructure"
        desc="Enterprise-grade hardware in Delhi, India. Move your pointer over the racks to rotate them."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {ITEMS.map((it, i) => (
          <Reveal key={it.scene} delay={i * 0.1}>
            <div className="glass gborder overflow-hidden rounded-2xl flex flex-col h-full">
              <SceneFrame
                scene={it.scene}
                label={it.label}
                className="h-64 sm:h-72"
                fallback={fb(it.icon)}
              />
              <div className="p-6 mt-auto">
                <h3 className="font-display text-lg font-bold text-white">{it.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">{it.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
