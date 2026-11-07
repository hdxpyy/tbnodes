import type { Metadata } from "next";
import NetworkSection from "@/components/NetworkSection";
import InfraShowcase from "@/components/InfraShowcase";
import KnowledgeGuide from "@/components/KnowledgeGuide";
import { BreadcrumbsSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Server Infrastructure & Network Topology",
  description:
    "Explore TBNODES network infrastructure in Delhi, India: 2Gbps uplinks, dedicated IPv4, Cloudflare Magic Transit DDoS protection, and low-latency Indian routing.",
  alternates: { canonical: "/network" },
};

const NETWORK_GUIDE = [
  {
    question: "Where is TBNODES server infrastructure located?",
    answer:
      "Our physical hardware infrastructure is deployed in tier-grade datacenter facilities located in Delhi, India. This central Indian location provides direct fiber peering with domestic Indian telecom networks, ensuring rock-solid ping for players nationwide.",
  },
  {
    question: "What network bandwidth and throughput are provided?",
    answer:
      "Intel Platinum VPS plans feature unmetered bandwidth on high-speed 2Gbps port uplinks. Minecraft hosting plans include high-throughput traffic allowances tailored to sustain peak concurrent player activity.",
  },
  {
    question: "Why is a dedicated IPv4 important for VPS hosting?",
    answer:
      "A dedicated IPv4 provides full port availability without NAT mapping, enables clean email and reverse DNS reputation, and allows direct custom domain binding for web applications, game servers, and SSL certificates.",
  },
  {
    question: "How does the network mitigate large-scale volumetric attacks?",
    answer:
      "We utilize multi-tiered network filters. AMD Ryzen plans leverage Cloudflare Magic Transit to absorb multi-gigabit volumetric floods at edge nodes, ensuring zero downtime and uninterrupted uptime.",
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Network", path: "/network" },
        ]}
      />
      <NetworkSection h1 />
      <KnowledgeGuide
        eyebrow="Network Topology"
        title="Delhi Infrastructure & Traffic Routing"
        description="Comprehensive details on our physical datacenter location, fiber peering, and DDoS scrubbing architecture."
        items={NETWORK_GUIDE}
      />
      <InfraShowcase />
    </>
  );
}
