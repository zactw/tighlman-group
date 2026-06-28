import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — The Tighlman Group",
  description:
    "Privacy practices, disclaimers, and legal terms for The Tighlman Group LLC.",
};

const SECTIONS: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "scope",
    title: "1. Scope and Acceptance",
    body: (
      <>
        <p>
          This Privacy Policy (&ldquo;Policy&rdquo;) describes how The Tighlman
          Group LLC, an Arizona limited liability company (&ldquo;The Tighlman
          Group,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
          collects, uses, discloses, and otherwise processes information in
          connection with the website located at tighlman-group.com and any
          related pages, subdomains, software, applications, or services that
          reference or link to this Policy (collectively, the
          &ldquo;Services&rdquo;).
        </p>
        <p>
          By accessing or using the Services, you acknowledge that you have
          read, understood, and agree to be bound by this Policy in its
          entirety. If you do not agree, you must immediately discontinue use
          of the Services.
        </p>
      </>
    ),
  },
  {
    id: "information",
    title: "2. Information We Collect",
    body: (
      <>
        <p>
          We collect only the information necessary to operate the Services and
          to respond to communications you initiate with us. Categories may
          include:
        </p>
        <ul>
          <li>
            <strong>Information you provide directly.</strong> When you contact
            us by email, telephone, or any communication channel we make
            available, we receive the contents of your communication and any
            information you choose to disclose, such as your name, email
            address, business name, telephone number, and the subject of your
            inquiry.
          </li>
          <li>
            <strong>Automatically collected information.</strong> When you
            visit the Services, our infrastructure providers (including
            hosting, content-delivery, and analytics vendors) may automatically
            log information such as IP address, device type, operating system,
            browser type and version, referring URL, pages viewed, timestamps,
            and approximate geographic location derived from IP address.
          </li>
          <li>
            <strong>Cookies and similar technologies.</strong> The Services
            and embedded third-party scripts may set cookies, local storage
            entries, pixels, web beacons, or comparable identifiers to enable
            functionality, remember preferences, measure performance, and
            understand usage. You can disable cookies through your browser
            settings, but parts of the Services may not function as intended.
          </li>
          <li>
            <strong>Business contact information.</strong> If you become a
            client, prospective client, vendor, or business contact, we may
            retain records about our interactions, contracts, deliverables,
            invoices, and project communications.
          </li>
        </ul>
        <p>
          We do not knowingly collect biometric data, government-issued
          identifiers, payment-card data, or special categories of personal
          information described under the General Data Protection Regulation
          through this website. Do not submit such information to us through
          this website.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "3. How We Use Information",
    body: (
      <>
        <p>We may use information for any lawful business purpose, including:</p>
        <ul>
          <li>operating, maintaining, and improving the Services;</li>
          <li>
            responding to inquiries, providing requested information, and
            communicating with you about projects, proposals, or engagements;
          </li>
          <li>
            performing contracts, generating invoices, and collecting
            outstanding amounts;
          </li>
          <li>
            measuring and analyzing usage of the Services, debugging, and
            improving security, reliability, and performance;
          </li>
          <li>
            preventing, detecting, investigating, and responding to fraud,
            unauthorized access, abuse, or violations of our terms or
            applicable law;
          </li>
          <li>
            complying with legal obligations, including responding to lawful
            subpoenas, court orders, or government requests; and
          </li>
          <li>
            establishing, exercising, or defending legal rights and claims.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "4. How We Share Information",
    body: (
      <>
        <p>
          We do not sell personal information. We share information only as
          described below or with your consent:
        </p>
        <ul>
          <li>
            <strong>Service providers.</strong> We engage third-party vendors
            (such as hosting, email, analytics, error monitoring, and
            communication providers) to perform functions on our behalf. These
            providers may access information solely to perform their services
            and are bound by confidentiality obligations.
          </li>
          <li>
            <strong>Professional advisors.</strong> Attorneys, accountants,
            auditors, insurers, and consultants who provide professional
            services to us.
          </li>
          <li>
            <strong>Business transfers.</strong> In connection with a merger,
            acquisition, financing, reorganization, sale of assets,
            bankruptcy, or similar transaction, information may be transferred
            or disclosed to potential or actual successors.
          </li>
          <li>
            <strong>Legal requirements.</strong> When we believe in good faith
            that disclosure is necessary to comply with applicable law, legal
            process, regulatory request, or to protect the rights, property,
            or safety of The Tighlman Group, our clients, our personnel, or
            the public.
          </li>
          <li>
            <strong>Aggregated or de-identified data.</strong> We may share
            aggregated, anonymized, or de-identified information that cannot
            reasonably be used to identify you.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "5. Third-Party Services and Links",
    body: (
      <>
        <p>
          The Services may contain links to or embed content from third-party
          websites, products, or services that we do not control. We are not
          responsible for the privacy practices, content, or policies of any
          third party. Your use of any third-party website or service is
          subject to that third party&apos;s own terms and privacy practices,
          which we encourage you to review.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "6. Data Retention",
    body: (
      <>
        <p>
          We retain information for as long as necessary to fulfill the
          purposes described in this Policy, including to satisfy legal,
          accounting, contractual, audit, dispute-resolution, or enforcement
          requirements. We may retain information indefinitely in backups,
          archives, or disaster-recovery systems even after deletion from
          active systems.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "7. Data Security",
    body: (
      <>
        <p>
          We take commercially reasonable measures designed to protect the
          information we hold from loss, misuse, and unauthorized access,
          disclosure, alteration, or destruction. However, no method of
          transmission over the Internet or method of electronic storage is
          completely secure. We cannot and do not guarantee the absolute
          security of any information, and you transmit information to us at
          your own risk.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "8. Your Rights and Choices",
    body: (
      <>
        <p>
          Depending on your jurisdiction, you may have rights regarding
          personal information about you, such as the right to access,
          correct, delete, restrict, or object to processing, or to receive a
          copy of your personal information in a portable format. You may
          exercise any such rights by emailing us using the contact details in
          Section 18. We will respond as required by applicable law and may
          require verification of your identity before fulfilling a request.
        </p>
        <p>
          We do not respond to &ldquo;Do Not Track&rdquo; browser signals at
          this time because no industry consensus exists for interpreting
          them.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "9. Children",
    body: (
      <>
        <p>
          The Services are not directed to children under the age of thirteen
          (13), and we do not knowingly collect personal information from
          children under thirteen (13). If you believe a child has provided us
          with personal information, please contact us and we will take
          reasonable steps to delete it.
        </p>
      </>
    ),
  },
  {
    id: "international",
    title: "10. International Users",
    body: (
      <>
        <p>
          The Services are operated from the United States and intended for
          users located in the United States. If you access the Services from
          outside the United States, you understand that information may be
          transferred to, stored, and processed in the United States or other
          jurisdictions whose data-protection laws may differ from those of
          your country. By using the Services, you consent to such transfer,
          storage, and processing.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    body: (
      <>
        <p>
          We may update this Policy at any time and for any reason. When we
          do, we will revise the &ldquo;Last Updated&rdquo; date above. Your
          continued use of the Services after any change constitutes
          acceptance of the updated Policy. We encourage you to review this
          Policy periodically.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    title: "12. Pricing, Plans, and Service Changes",
    body: (
      <>
        <p>
          Any prices, plans, packages, features, discounts, promotions, or
          service descriptions referenced on the Services are provided for
          general informational purposes only. They are non-binding estimates,
          do not constitute an offer or commitment, and may be changed,
          suspended, replaced, or discontinued at any time, for any reason or
          no reason, without prior notice and at our sole discretion. Final
          pricing, scope, deliverables, payment terms, and any other terms of
          engagement will be set forth exclusively in a written engagement
          agreement or proposal signed by an authorized representative of The
          Tighlman Group.
        </p>
        <p>
          We reserve the right to refuse service, decline any prospective
          engagement, modify or discontinue any portion of the Services, and
          adjust pricing, fees, billing methods, or maintenance terms at any
          time. No statement, advertisement, marketing material, or
          information on the Services creates any warranty, representation,
          guarantee, or contractual obligation of any kind.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "13. Disclaimers; No Warranties",
    body: (
      <>
        <p className="uppercase tracking-wide">
          The Services, including all information, content, materials, and
          features made available through them, are provided on an &ldquo;as
          is&rdquo; and &ldquo;as available&rdquo; basis, without warranties
          of any kind, whether express, implied, statutory, or otherwise. To
          the maximum extent permitted by applicable law, The Tighlman Group
          disclaims all warranties, including any implied warranties of
          merchantability, fitness for a particular purpose, title, accuracy,
          completeness, non-infringement, quiet enjoyment, system integration,
          and any warranties arising out of course of dealing, course of
          performance, usage, or trade practice.
        </p>
        <p>
          Without limiting the foregoing, The Tighlman Group does not warrant
          that the Services will be uninterrupted, secure, accurate, complete,
          current, free of viruses or other harmful components, or that any
          defect will be corrected. Any reliance you place on information
          available through the Services is strictly at your own risk.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "14. Limitation of Liability",
    body: (
      <>
        <p className="uppercase tracking-wide">
          To the maximum extent permitted by applicable law, in no event will
          The Tighlman Group, its members, managers, officers, employees,
          contractors, agents, suppliers, or licensors be liable for any
          indirect, incidental, special, consequential, exemplary, punitive,
          or enhanced damages, including damages for lost profits, lost
          revenue, lost data, lost goodwill, business interruption, or cost of
          substitute services, arising out of or relating to this Policy, the
          Services, or any information accessed through the Services, whether
          based in contract, tort (including negligence), strict liability,
          statute, or any other legal theory, even if The Tighlman Group has
          been advised of the possibility of such damages.
        </p>
        <p className="uppercase tracking-wide">
          The aggregate liability of The Tighlman Group and its affiliates
          arising out of or relating to this Policy or the Services will not
          exceed the greater of one hundred United States dollars
          (US$100.00) or the amounts actually paid by you to The Tighlman
          Group during the three (3) months immediately preceding the event
          giving rise to the claim. The foregoing limitations apply
          notwithstanding the failure of any limited remedy of its essential
          purpose. Some jurisdictions do not allow certain limitations of
          liability, so portions of the above may not apply to you.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "15. Indemnification",
    body: (
      <>
        <p>
          You agree to defend, indemnify, and hold harmless The Tighlman Group
          and its members, managers, officers, employees, contractors, agents,
          and affiliates from and against any and all claims, demands,
          actions, proceedings, liabilities, losses, damages, judgments,
          awards, settlements, costs, and expenses (including reasonable
          attorneys&apos; fees and court costs) arising out of or relating to:
          (a) your access to or use of the Services; (b) your violation of
          this Policy or any applicable law; (c) your violation of any
          third-party right, including intellectual-property, privacy, or
          publicity rights; or (d) any content or information you submit,
          transmit, or otherwise make available through the Services.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "16. Governing Law and Dispute Resolution",
    body: (
      <>
        <p>
          This Policy and any dispute, claim, or controversy arising out of or
          relating to it or the Services are governed by and construed in
          accordance with the laws of the State of Arizona, United States,
          without regard to its conflict-of-laws principles. The United
          Nations Convention on Contracts for the International Sale of Goods
          does not apply.
        </p>
        <p>
          Any dispute, claim, or controversy arising out of or relating to
          this Policy or the Services that is not resolved informally will be
          resolved by binding individual arbitration administered by JAMS in
          Maricopa County, Arizona, under its then-current Streamlined
          Arbitration Rules and Procedures, by a single arbitrator. Judgment
          on the award may be entered in any court of competent jurisdiction.
          Each party waives any right to a jury trial and to participate as a
          plaintiff or class member in any purported class or representative
          proceeding. Notwithstanding the foregoing, either party may seek
          injunctive or other equitable relief in any court of competent
          jurisdiction to protect intellectual-property rights or
          confidential information.
        </p>
        <p>
          If arbitration is held unenforceable, the exclusive venue for any
          action will be the state or federal courts located in Maricopa
          County, Arizona, and you irrevocably consent to personal
          jurisdiction and venue in those courts.
        </p>
      </>
    ),
  },
  {
    id: "miscellaneous",
    title: "17. Miscellaneous",
    body: (
      <>
        <p>
          If any provision of this Policy is held invalid, unlawful, or
          unenforceable, that provision will be modified to the minimum extent
          necessary to make it enforceable, and the remaining provisions will
          continue in full force and effect. Our failure to enforce any
          provision is not a waiver of our right to do so later. You may not
          assign or transfer your rights or obligations under this Policy
          without our prior written consent; any attempted assignment without
          consent is void. This Policy constitutes the entire agreement
          between you and The Tighlman Group regarding the subject matter
          hereof and supersedes all prior or contemporaneous understandings.
          Headings are for convenience only and do not affect interpretation.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "18. Contact",
    body: (
      <>
        <p>
          For privacy questions, requests, or notices required under this
          Policy, please contact us through the &ldquo;Book a call&rdquo;
          option on our website, which opens your email client and addresses
          a message to our designated contact.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Nav />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase">
              Legal
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/40 text-sm">
            Last Updated: June 27, 2026
          </p>

          <div className="mt-12 space-y-10 text-white/70 text-base leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4 [&_strong]:text-white [&_strong]:font-semibold">
            {SECTIONS.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  {section.title}
                </h2>
                {section.body}
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
