import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 10, 2026">
      <p>
        {site.legalName} (&ldquo;Summit,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us&rdquo;) respects your privacy. This policy explains what
        information we collect through {site.url}, why we collect it, and how we
        handle it.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>
          <strong>Information you provide:</strong> name, phone number, email
          address, property address/ZIP, and project details submitted through
          our forms or by phone.
        </li>
        <li>
          <strong>Automatic information:</strong> standard analytics data such
          as pages visited, device type, browser, and approximate location
          derived from IP address.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to inspection, estimate, and service requests.</li>
        <li>To schedule appointments and communicate about your project.</li>
        <li>To improve our website, services, and marketing.</li>
        <li>To comply with legal and insurance-documentation requirements.</li>
      </ul>

      <h2>What We Don&rsquo;t Do</h2>
      <p>
        We do not sell your personal information. We share it only with service
        providers who help us operate (scheduling and CRM) and when required
        by law.
      </p>

      <h2>Cookies &amp; Analytics</h2>
      <p>
        Our site uses cookies and similar technologies for essential
        functionality and aggregate analytics. You can disable cookies in your
        browser; core pages will continue to work.
      </p>

      <h2>Data Retention &amp; Security</h2>
      <p>
        Lead and project records are retained as long as needed to service your
        warranty and meet legal obligations. We use industry-standard measures
        to protect data in transit and at rest.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal
        information at any time by calling {site.phone}. Rhode Island
        residents have additional rights under applicable state privacy law,
        including opting out of targeted advertising.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy: {site.legalName}, {site.address.street},{" "}
        {site.address.city}, {site.address.state} {site.address.zip} ·{" "}
        {site.phone}.
      </p>
    </LegalPage>
  );
}
