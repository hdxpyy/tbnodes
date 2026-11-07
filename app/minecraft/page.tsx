import type { Metadata } from "next";
import MinecraftPlans from "@/components/MinecraftPlans";
import HowToPurchase from "@/components/HowToPurchase";
import KnowledgeGuide from "@/components/KnowledgeGuide";
import { BreadcrumbsSchema, ServiceSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Minecraft Server Hosting India – Dirt to Warden Plans",
  description:
    "Explore high-performance Minecraft server hosting in Delhi, India. Plans from 2GB Dirt (₹20/mo) to 128GB Warden with NVMe SSDs, automated backups, and 24/7 support.",
  alternates: { canonical: "/minecraft" },
};

const MINECRAFT_GUIDE = [
  {
    question: "What is Minecraft server hosting?",
    answer:
      "Minecraft server hosting provides dedicated compute, RAM, and NVMe disk storage optimized specifically for running Minecraft multiplayer worlds. Instead of hosting locally on personal computers, TBNODES hosts your server 24/7 in our Delhi datacenter with zero lag, dedicated IPs, and DDoS mitigation.",
  },
  {
    question: "How do I choose the right Minecraft hosting plan?",
    answer:
      "Consider your player count and server type: lightweight vanilla or testing servers thrive on 2GB to 6GB (Dirt or Stone). Public SMPs with 10-25 players generally require 8GB to 16GB (Copper to Emerald). For heavily modded servers, custom plugin networks, and large communities with 30+ players, choose 24GB+ (Diamond, Netherite, or Ultimate Tier).",
  },
  {
    question: "How much RAM does a Minecraft SMP need?",
    answer:
      "A standard Paper/Purpur Survival Multiplayer (SMP) with 10 to 15 concurrent players operates smoothly with 6GB to 8GB of RAM. If you introduce large world borders, view distances above 10 chunks, or grief prevention plugins, 10GB to 16GB provides substantial headroom for stable 20.0 TPS.",
  },
  {
    question: "What is the difference between NVMe and traditional SSD?",
    answer:
      "NVMe SSDs connect via the PCIe bus, bypassing the legacy SATA bottlenecks. This delivers up to 6 times faster read/write speeds, enabling instant chunk loading when Elytra flying, rapid server boot times, and instant world saves without micro-stutters.",
  },
  {
    question: "Can I install custom plugins, mods, and modpacks?",
    answer:
      "Yes. TBNODES supports all Minecraft server software including Paper, Spigot, Purpur, Fabric, Forge, and NeoForge. You can easily upload mods, world folders, and datapacks.",
  },
  {
    question: "How can customers order TBNODES Minecraft hosting?",
    answer:
      "Choose any Minecraft plan from our list, click 'Order Now', and you will be directed to our official billing portal at billing.tbnodes.com to complete checkout and activate your server.",
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Minecraft Hosting", path: "/minecraft" },
        ]}
      />
      <ServiceSchema
        name="TBNODES Minecraft Server Hosting"
        serviceType="Game Server Hosting"
        description="High-performance Minecraft hosting in Delhi, India with NVMe storage, automated backups, and 24/7 support."
        url="/minecraft"
      />
      <MinecraftPlans h1 />
      <KnowledgeGuide
        eyebrow="Minecraft Server Architecture"
        title="Selecting & Scaling Your Minecraft Server"
        description="Architectural insights on RAM requirements, NVMe storage performance, and plugin optimization."
        items={MINECRAFT_GUIDE}
      />
      <HowToPurchase />
    </>
  );
}
