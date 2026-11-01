import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ConnectSection, PageIntro } from "@/components/sections/Shared";
export const metadata: Metadata = {
  title: "Widows’ dignity and rights",
  description:
    "The foundation's commitment to widow advocacy, dignity and the wellbeing of women and children.",
};
export default function RightsPage() {
  return (
    <>
      <PageIntro
        eyebrow="DIGNITY & WIDOWS’ RIGHTS"
        title="A loss should never take away a person’s dignity."
        text="Our commitment to widows is rooted in lived experience—and a belief that women and their children deserve care, fairness and protection."
      />
      <section className="section">
        <div className="container story-grid">
          <div className="story-copy">
            <p className="eyebrow">
              <span />A PERSONAL COMMITMENT
            </p>
            <h2>
              Standing alongside
              <br />
              <em>widows and children.</em>
            </h2>
            <p>
              Elizabeth Eje’s experience of widowhood shaped our founder’s
              understanding of the hardship and unfair treatment women can face
              after losing a husband. Advocacy for widows and concern for
              children’s wellbeing are part of the foundation’s original
              objectives.
            </p>
            <p>
              We seek to be a voice for women in vulnerable circumstances, to
              challenge harmful practices and to encourage dignity, opportunity
              and practical support.
            </p>
          </div>
          <div className="principle-stack">
            <article>
              <p className="eyebrow">DIGNITY</p>
              <h3>Respect in every circumstance.</h3>
              <p>
                Bereavement should never be a reason for intimidation,
                exploitation or exclusion.
              </p>
            </article>
            <article>
              <p className="eyebrow">OPPORTUNITY</p>
              <h3>Support for a more secure future.</h3>
              <p>
                Our wider work includes practical assistance, education and
                livelihood empowerment for families facing hardship.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container narrow">
          <p className="eyebrow">
            <span />
            ENQUIRIES & PROFESSIONAL SUPPORT
          </p>
          <h2>Start with a conversation.</h2>
          <p>
            Contact the foundation to ask about its advocacy work or discuss a
            potential professional collaboration. Qualified Nigerian lawyers and
            legal organisations interested in contributing their expertise are
            welcome to enquire.
          </p>
          <p>
            Legal advice and representation must come from appropriately
            qualified practitioners. Any case support or referral depends on
            confirmed availability, professional assessment and resources. An
            enquiry does not guarantee representation.
          </p>
          <p>
            Please begin with a general enquiry. Do not send sensitive case
            documents or children’s personal information to the general email
            address. This website does not provide a confidential case-intake
            service.
          </p>
          <Link className="button button-red" href="/contact">
            Contact the foundation <Arrow />
          </Link>
        </div>
      </section>
      <ConnectSection />
    </>
  );
}
