import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { BILLING_URL, SUPPORT_EMAIL } from "@/config/site";
import { BreadcrumbsSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Review the refund guidelines and billing policy for TBNODES hosting services.",
  alternates: { canonical: "/refund" },
};

export default function Page() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Refund Policy", path: "/refund" },
        ]}
      />
      <PolicyPage title="Refund Policy">
        <section>
          <h2>1. Refund Eligibility &amp; Review Notice</h2>
          <p>
            At TBNODES, we are dedicated to providing high-performance server hosting. Because server resources (compute threads, dedicated RAM, and NVMe allocations) are immediately reserved upon deployment in our Delhi datacenter, refund eligibility depends on the specific service tier and usage period.
          </p>
          <p className="text-xs text-amber-300/80 italic">
            [Owner Review: Insert exact refund timeline (e.g., 24-hour / 48-hour money-back guarantee, or strict no-refund terms for dedicated resource VPSs).]
          </p>
        </section>

        <section>
          <h2>2. How to Request a Refund</h2>
          <p>
            To submit a refund request or billing inquiry, open a support ticket on our official Discord server or through the billing portal at{" "}
            <a href={BILLING_URL} className="text-ice underline underline-offset-4 hover:text-white">
              {BILLING_URL}
            </a>
            , or email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-ice underline underline-offset-4 hover:text-white">
              {SUPPORT_EMAIL}
            </a>{" "}
            with your invoice number.
          </p>
        </section>

        <section>
          <h2>3. Exceptions &amp; Exclusions</h2>
          <p>
            Refunds are not granted in cases of Acceptable Use Policy violations (including network attacks, port abuse, or unauthorized scanning) or for third-party software add-ons once provisioned.
          </p>
        </section>
      </PolicyPage>
    </>
  );
}
