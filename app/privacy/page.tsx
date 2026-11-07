import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { BILLING_URL, SUPPORT_EMAIL } from "@/config/site";
import { BreadcrumbsSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how TBNODES handles data privacy, billing records, and technical communications.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
      <PolicyPage title="Privacy Policy">
        <section>
          <h2>1. Information We Collect</h2>
          <p>
            The public TBNODES website (www.tbnodes.com) is purely an informational and marketing website. We do not maintain customer registration databases or user logins on this frontend. When you purchase hosting, customer billing information (such as name, email address, and billing details) is collected directly by our secure billing portal at{" "}
            <a href={BILLING_URL} className="text-ice underline underline-offset-4 hover:text-white">
              {BILLING_URL}
            </a>
            .
          </p>
          <p className="text-xs text-amber-300/80 italic">
            [Owner Review: Clarify any server analytics, web server logs, or cookie usage.]
          </p>
        </section>

        <section>
          <h2>2. How Data is Used</h2>
          <p>
            Information collected via the billing portal is used solely to provision your hosting services, process invoices, deliver support updates, and communicate critical service announcements.
          </p>
        </section>

        <section>
          <h2>3. Third-Party Services &amp; Infrastructure</h2>
          <p>
            TBNODES does not sell, rent, or trade your personal data. Infrastructure logs may be inspected solely for network security, DDoS mitigation, and diagnostic troubleshooting.
          </p>
        </section>

        <section>
          <h2>4. Data Retention &amp; Requests</h2>
          <p>
            Users may request information regarding their stored billing records or request account closure by contacting{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-ice underline underline-offset-4 hover:text-white">
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>
      </PolicyPage>
    </>
  );
}
