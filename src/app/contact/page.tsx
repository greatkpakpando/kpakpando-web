import type { Metadata } from "next";
import { foundation } from "@/data/foundation";
import { PageIntro } from "@/components/sections/Shared";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Great Kpakpando & Elizabeth Foundation in Awgu, Enugu State, Nigeria.",
};
export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="GET IN TOUCH"
        title="Good things begin with a conversation."
        text="Have a question about the foundation or want to explore how you can support our work? Reach out directly. We would love to connect."
      />
      <section className="section contact-section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">
              <span />
              LET’S CONNECT
            </p>
            <h2>
              Your kindness.
              <br />
              <em>Our shared purpose.</em>
            </h2>
            <p>
              Whether you are interested in our activities, community support or
              working together, contact the foundation by email or telephone.
            </p>
            <div className="contact-note">
              <strong>A note about these details</strong>
              <p>
                These contact details are from the foundation’s previous
                website. Please contact us before arranging a visit.
              </p>
            </div>
          </div>
          <div className="contact-cards">
            <article>
              <span>01 / WRITE TO US</span>
              <h3>Email the foundation</h3>
              <a href={`mailto:${foundation.email}`}>
                {foundation.email} <ArrowIcon />
              </a>
            </article>
            <article>
              <span>02 / GIVE US A CALL</span>
              <h3>Speak with us</h3>
              {foundation.phones.map((phone) => (
                <a href={`tel:${phone.replaceAll(" ", "")}`} key={phone}>
                  {phone} <ArrowIcon />
                </a>
              ))}
            </article>
            <article>
              <span>03 / OUR LOCATION</span>
              <h3>Rooted in our community</h3>
              <p>{foundation.address}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
