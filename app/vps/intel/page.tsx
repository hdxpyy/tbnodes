import type { Metadata } from "next";
import VpsPlans from "@/components/VpsPlans";
import HowToPurchase from "@/components/HowToPurchase";
import KnowledgeGuide from "@/components/KnowledgeGuide";
import { BreadcrumbsSchema, ServiceSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Intel Platinum VPS Hosting India – Xeon 8269-CY",
  description:
    "High-performance Intel Xeon Platinum 8269-CY VPS hosting in Delhi, India. 2Gbps network speed, dedicated IPv4, unmetered bandwidth, and high-speed NVMe storage.",
  alternates: { canonical: "/vps/intel" },
};

const INTEL_GUIDE = [
  {
    question: "What is Intel Xeon Platinum VPS hosting?",
    answer:
      "Intel Xeon Platinum VPS hosting provides enterprise-grade virtual private servers running on multi-core Intel Xeon Platinum 8269-CY processors. These processors are designed for sustained server workloads, web applications, multi-threaded bots, and community platforms.",
  },
  {
    question: "What infrastructure specifications are included?",
    answer:
      "Every Intel Platinum VPS plan hosted at our Delhi, India facility includes 1 Dedicated IPv4 address, unmetered bandwidth, a 2Gbps high-speed network connection, 99.9% uptime target, and 24/7 technical support.",
  },
  {
    question: "Which operating systems can I deploy on Intel VPS?",
    answer:
      "We support primary Linux distributions including Ubuntu 22.04/24.04 LTS, Debian 11/12, and AlmaLinux. You receive full root access via SSH to configure custom packages, Docker containers, and database engines.",
  },
  {
    question: "How do I upgrade resources if my project expands?",
    answer:
      "You can smoothly upgrade your plan from CORE-4 up to ULTIMATE-64 through our billing portal at billing.tbnodes.com without losing existing configuration files or IP addresses.",
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Intel VPS", path: "/vps/intel" },
        ]}
      />
      <ServiceSchema
        name="TBNODES Intel Platinum VPS Hosting"
        serviceType="VPS Hosting"
        description="Dedicated Intel Xeon Platinum 8269-CY VPS in Delhi, India with 2Gbps network speed and NVMe storage."
        url="/vps/intel"
      />
      <VpsPlans kind="intel" h1 />
      <KnowledgeGuide
        eyebrow="Intel Cloud Infrastructure"
        title="Intel Platinum VPS Architecture & Specs"
        description="Technical details on virtualization, dedicated IPv4 networking, and server deployment in Delhi."
        items={INTEL_GUIDE}
      />
      <HowToPurchase />
    </>
  );
}
