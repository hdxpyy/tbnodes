import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, HardDrive, MapPin, ShieldCheck, User } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import WhyTB from "@/components/WhyTB";
import { SITE, LOCATION } from "@/config/site";
import { BreadcrumbsSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About TBNODES – High-Performance Game & VPS Hosting",
  description:
    "Learn about TBNODES, founded by Frostyy. We provide performance-focused Minecraft and VPS hosting powered by enterprise hardware located in Delhi, India.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <Section h1>
        <SectionHeading
          h1
          eyebrow="About TBNODES"
          title="Engineered for Performance. Built for India."
          desc={SITE.tagline}
        />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <div className="glass gborder rounded-2xl p-7 sm:p-8 space-y-5 text-sm sm:text-base text-muted leading-relaxed">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Our Mission &amp; Identity
                </h2>
                <p>
                  <strong className="text-white">TBNODES</strong> is a dedicated game and cloud server hosting provider founded and operated by{" "}
                  <strong className="text-white">{SITE.owner}</strong>. Our core philosophy is straightforward: provide transparent, enterprise-grade server infrastructure located directly in India, backed by responsive technical support and fair pricing.
                </p>
                <p>
                  Gamers, developers, and Minecraft community owners in India have historically faced high latency from overseas hosts or inflated prices from intermediaries. TBNODES solves this by delivering modern compute hardware—featuring multi-core Intel Xeon and ultra-high-frequency AMD Ryzen 9 9950X processors—directly from our datacenter facility in{" "}
                  <strong className="text-white">{LOCATION.city}, {LOCATION.country}</strong>.
                </p>
                <p>
                  Whether you are launching a vanilla Survival SMP, configuring a custom Lifesteal or modded server, or provisioning an isolated Linux virtual private server with full root privileges, TBNODES delivers raw, unthrottled performance.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link href="/minecraft" className="btn-primary !px-4 !py-2.5 text-xs">
                    Minecraft Plans
                  </Link>
                  <Link href="/vps/intel" className="btn-ghost !px-4 !py-2.5 text-xs">
                    Intel VPS
                  </Link>
                  <Link href="/vps/ryzen" className="btn-ghost !px-4 !py-2.5 text-xs">
                    Ryzen VPS
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4">
            <Reveal delay={0.1}>
              <div className="glass gborder rounded-2xl p-6 space-y-4">
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
                  Verified Brand Facts
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-muted">
                  <li className="flex items-center gap-3">
                    <User size={16} className="text-neon shrink-0" />
                    <span>Founder / Owner: <strong className="text-white">{SITE.owner}</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin size={16} className="text-neon shrink-0" />
                    <span>Hardware Location: <strong className="text-white">{LOCATION.city}, {LOCATION.country}</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Cpu size={16} className="text-neon shrink-0" />
                    <span>Processors: <strong className="text-white">Intel Xeon &amp; Ryzen 9 9950X</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HardDrive size={16} className="text-neon shrink-0" />
                    <span>Storage Standard: <strong className="text-white">High-Speed NVMe SSDs</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ShieldCheck size={16} className="text-neon shrink-0" />
                    <span>DDoS Protection: <strong className="text-white">Cloudflare Magic Transit</strong></span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
      <WhyTB />
    </>
  );
}
