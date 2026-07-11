import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of the ${site.name} website and services.`,
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 10, 2026">
      <p>
        These terms govern your use of {site.url} (the &ldquo;Site&rdquo;),
        operated by {site.legalName}. By using the Site, you agree to these
        terms.
      </p>

      <h2>Website Use</h2>
      <p>
        Content on this Site is provided for general information about our
        services. You agree not to misuse the Site, attempt to disrupt it, or
        use automated tools to scrape it for commercial purposes.
      </p>

      <h2>Estimates &amp; Inspections</h2>
      <p>
        Free inspections and estimates are offered for properties within our
        service area and create no obligation for either party. Written
        estimates are valid for 30 days unless otherwise stated. All work is
        performed under a separate written contract that governs pricing, scope,
        scheduling, and warranties.
      </p>

      <h2>Warranties</h2>
      <p>
        Workmanship and manufacturer warranties are defined exclusively in your
        project contract and warranty registration documents. Nothing on this
        Site expands or modifies those written warranties.
      </p>

      <h2>Insurance Claims</h2>
      <p>
        Summit is a licensed contractor, not a public adjuster or insurance
        advisor. Information on this Site about insurance claims is general in
        nature and not legal or financial advice. Coverage decisions rest solely
        with your insurance carrier and policy.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All Site content — text, logos, graphics, and photography — is owned by
        or licensed to {site.legalName} and may not be reproduced without
        written permission.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        The Site is provided &ldquo;as is.&rdquo; To the fullest extent
        permitted by law, {site.legalName} is not liable for indirect,
        incidental, or consequential damages arising from use of the Site.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. Continued use of the Site
        after changes are posted constitutes acceptance.
      </p>

      <h2>Contact</h2>
      <p>
        {site.legalName}, {site.address.street}, {site.address.city},{" "}
        {site.address.state} {site.address.zip} · {site.phone} · {site.email}.
      </p>
    </LegalPage>
  );
}
