import type { Metadata } from "next";
import { Receipt } from "lucide-react";
import { BILLING_URL, DISCORD_URL, SUPPORT_EMAIL, SUPPORT_MAILTO } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import { DiscordIcon, GmailIcon } from "@/components/icons/BrandIcons";

export const metadata: Metadata = {
  title: "Support & Customer Assistance",
  description:
    "Get 24/7 technical assistance for TBNODES Minecraft and VPS hosting via our official Discord community, support email, or billing portal.",
  alternates: { canonical: "/support" },
};

const CARDS = [
  {
    icon: DiscordIcon,
    title: "Discord Community",
    text: "Chat with the TBNODES team, open support tickets, and get real-time setup guidance 24/7.",
    cta: "Join Discord Server",
    href: DISCORD_URL,
    ext: true,
  },
  {
    icon: GmailIcon,
    title: "Direct Support Email",
    text: `Send questions directly to ${SUPPORT_EMAIL} for billing, technical inquiries, or pre-sales advice.`,
    cta: "Send Email",
    href: SUPPORT_MAILTO,
    ext: false,
  },
  {
    icon: Receipt,
    title: "Official Billing Portal",
    text: "Manage orders, invoices, payment methods, and hosting service renewals at billing.tbnodes.com.",
    cta: "Open Billing Portal",
    href: BILLING_URL,
    ext: false,
  },
];

export default function Page() {
  return (
    <>
      <Section h1>
        <SectionHeading
          h1
          eyebrow="Support"
          title="We're Here to Help"
          desc="Connect directly with our 24/7 technical team and active community."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="glass gborder flex h-full flex-col rounded-2xl p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-brand/40 bg-brand/10 text-neon">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 font-display text-lg font-bold text-white">{c.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">{c.text}</p>
                  <a
                    href={c.href}
                    {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="btn-primary mt-6"
                  >
                    {c.cta}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <Faq />
    </>
  );
}
