import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { programs } from "@/data/foundation";
import { Arrow, ConnectSection, PageIntro } from "@/components/sections/Shared";
export const metadata: Metadata = {
  title: "Our work",
  description:
    "Explore the foundation's work in children's education, widow empowerment, farming support and youth drug-awareness outreach.",
};
export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="OUR WORK"
        title="Practical care. Lasting possibility."
        text="We stand alongside widows, children and young people with support that responds to the challenges they face and the futures they hope to build."
      />
      <div className="container work-jumps" aria-label="Areas of work">
        {programs.map((p) => (
          <a key={p.id} href={`#${p.id}`}>
            {p.category} <span aria-hidden="true">↓</span>
          </a>
        ))}
      </div>
      {programs.map((p) => (
        <section key={p.id} id={p.id} className="section work-detail">
          <div className="container story-grid">
            <div className="story-visual tall">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(max-width: 760px) 100vw, 45vw"
              />
            </div>
            <div className="story-copy">
              <p className="eyebrow">
                <span />
                {p.number} / {p.category}
              </p>
              <h2>{p.title}</h2>
              <p>{p.text}</p>
              <p>{p.detail}</p>
              <Link
                className="text-link"
                href={p.id === "rights" ? "/widows-rights" : "/contact"}
              >
                {p.id === "rights"
                  ? "Our commitment to widows’ rights"
                  : "Talk to us about this work"}{" "}
                <Arrow />
              </Link>
            </div>
          </div>
        </section>
      ))}
      <ConnectSection />
    </>
  );
}
