import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, PageIntro } from "@/components/sections/Shared";
export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Explore how to enquire about supporting the foundation through time, professional expertise, community partnerships or practical contributions.",
};
const opportunities = [
  {
    title: "Share your time and skills",
    text: "Interested in helping with education, community outreach or awareness activities? Tell us about your experience and ask about current needs.",
    action: "Ask about getting involved",
    href: "/contact",
  },
  {
    title: "Bring your professional expertise",
    text: "We welcome conversations with educators, qualified Nigerian lawyers, healthcare professionals and organisations whose expertise complements our purpose.",
    action: "Explore professional collaboration",
    href: "/widows-rights",
  },
  {
    title: "Support practical community work",
    text: "Speak with the foundation about current programme needs, resources or project support. Please confirm arrangements directly before making a contribution.",
    action: "Discuss supporting our work",
    href: "/contact",
  },
];
export default function InvolvedPage() {
  return (
    <>
      <PageIntro
        eyebrow="GET INVOLVED"
        title="Your kindness can become someone’s opportunity."
        text="There are many ways to care. Start a conversation about the time, experience or practical support you would like to share."
      />
      <section className="section">
        <div className="container principle-grid">
          {opportunities.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1} / MAKE A CONNECTION</span>
              <h2 className="opportunity-title">{item.title}</h2>
              <p>{item.text}</p>
              <Link className="text-link" href={item.href}>
                {item.action} <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section soft-section" id="care-and-accountability">
        <div className="container narrow">
          <p className="eyebrow">
            <span />
            CARE, DIGNITY & ACCOUNTABILITY
          </p>
          <h2>
            Respect is part
            <br />
            <em>of the work.</em>
          </h2>
          <p>
            Our work concerns children, widows and families facing difficult
            circumstances. Enquiries and offers of support should respect their
            privacy and dignity.
          </p>
          <p>
            For questions about participation, safeguarding arrangements,
            permissions or how support would be used, please contact the
            foundation before making a commitment. Specific opportunities and
            support depend on current needs and available resources.
          </p>
          <p>
            Do not include sensitive medical details, legal documents or
            identifying information about a child in an initial email. This
            website does not collect donations or provide emergency, clinical or
            confidential case-intake services.
          </p>
          <Link className="button button-red" href="/contact">
            Talk with us <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
