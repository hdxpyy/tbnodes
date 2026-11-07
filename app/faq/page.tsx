import type { Metadata } from "next";
import Faq from "@/components/Faq";
import Community from "@/components/Community";
import { BreadcrumbsSchema, FaqSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Frequently Asked Questions – Hosting & Billing Guide",
  description:
    "Find answers to common questions about TBNODES Minecraft server hosting, Intel and Ryzen VPS plans, Delhi datacenter, root access, and billing.",
  alternates: { canonical: "/faq" },
};

export default function Page() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
      <FaqSchema />
      <Faq h1 />
      <Community />
    </>
  );
}
