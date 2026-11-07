import type { Metadata } from "next";
import Features from "@/components/Features";
import WhyTB from "@/components/WhyTB";
import KnowledgeGuide from "@/components/KnowledgeGuide";
import { BreadcrumbsSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Hosting Features & Infrastructure Standards",
  description:
    "Explore TBNODES enterprise hosting features: Intel Xeon and AMD Ryzen 9 9950X hardware, Gen4 NVMe SSDs, Cloudflare Magic Transit DDoS mitigation, and Delhi datacenter.",
  alternates: { canonical: "/features" },
};

const FEATURE_INSIGHTS = [
  {
    question: "Why does TBNODES choose Gen4 NVMe over standard SSDs?",
    answer:
      "Enterprise NVMe solid-state drives deliver multiple gigabytes per second in sequential and random read/write throughput. This prevents I/O wait times during autosaves, database lookups, and massive player telemetry logging.",
  },
  {
    question: "How does TBNODES handle DDoS attacks?",
    answer:
      "On our Ryzen VPS tier, traffic is routed through Cloudflare Magic Transit, which inspects packets globally across an anycast network and scrubs malicious volume before it ever hits our Delhi host machines. Minecraft plans benefit from targeted UDP mitigation.",
  },
  {
    question: "What is the benefit of Indian server location in Delhi?",
    answer:
      "By placing hardware directly in Delhi, India, ping for players across North, Central, and South India averages 10ms to 45ms—drastically superior to European or North American hosts which routinely inflict 140ms to 250ms latency on Indian gamers.",
  },
  {
    question: "How does 24/7 technical support operate?",
    answer:
      "Our support infrastructure operates around the clock via our official Discord ticketing channel and email. You communicate directly with systems technicians experienced in Minecraft server administration and Linux system administration.",
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
        ]}
      />
      <Features h1 />
      <KnowledgeGuide
        eyebrow="Architectural Breakdown"
        title="Engineering Standards Behind TBNODES"
        description="Deep dive into our enterprise hardware selection, NVMe storage performance, and DDoS scrubbing."
        items={FEATURE_INSIGHTS}
      />
      <WhyTB />
    </>
  );
}
