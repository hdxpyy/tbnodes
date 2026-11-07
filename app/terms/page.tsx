import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { BILLING_URL, SUPPORT_EMAIL } from "@/config/site";
import { BreadcrumbsSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the Terms of Service for TBNODES Minecraft server hosting and VPS hosting services.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ]}
      />
      <PolicyPage title="Terms of Service">
        <section>
          <h2>1. Services &amp; Scope</h2>
          <p>
            TBNODES provides public hosting solutions including Minecraft server hosting, Intel Xeon Platinum VPS hosting, AMD Ryzen 9 9950X VPS hosting, and related game server services. All services are hosted on physical infrastructure located in Delhi, India.
          </p>
          <p className="text-xs text-amber-300/80 italic">
            [Owner Review: Detail specific SLA commitments, maintenance windows, and server provisioning parameters.]
          </p>
        </section>

        <section>
          <h2>2. Customer Orders &amp; Billing System</h2>
          <p>
            All subscriptions, invoices, and payments are managed exclusively through our official external billing portal at{" "}
            <a href={BILLING_URL} className="text-ice underline underline-offset-4 hover:text-white">
              {BILLING_URL}
            </a>
            . TBNODES does not store payment card credentials on this marketing website.
          </p>
          <p className="text-xs text-amber-300/80 italic">
            [Owner Review: Add recurring renewal timelines, cancellation notice periods, and invoice grace periods.]
          </p>
        </section>

        <section>
          <h2>3. Acceptable Use Policy (AUP)</h2>
          <p>
            Customers are strictly prohibited from using TBNODES services for unauthorized port scanning, denial-of-service (DDoS) attacks, crypto-currency mining, malware distribution, phishing, or any unlawful activity violating applicable Indian cyber laws.
          </p>
          <p className="text-xs text-amber-300/80 italic">
            [Owner Review: Define suspension thresholds and abusive network utilization enforcement policies.]
          </p>
        </section>

        <section>
          <h2>4. Service Availability &amp; Liability</h2>
          <p>
            TBNODES strives for maximum uptime and stability. While we implement hardware redundancy and DDoS mitigation, services are provided on a commercially reasonable effort basis without indirect damage liabilities.
          </p>
        </section>

        <section>
          <h2>5. Contact &amp; Legal Inquiries</h2>
          <p>
            For questions regarding these Terms of Service, contact our team at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-ice underline underline-offset-4 hover:text-white">
              {SUPPORT_EMAIL}
            </a>{" "}
            or open a ticket in our official Discord community.
          </p>
        </section>
      </PolicyPage>
    </>
  );
}
