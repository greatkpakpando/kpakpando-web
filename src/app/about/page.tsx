import type { Metadata } from "next";
import Image from "next/image";
import { photo } from "@/data/foundation";
import { ConnectSection, PageIntro } from "@/components/sections/Shared";
export const metadata: Metadata = {
  title: "Our story",
  description:
    "Meet the foundation founded by Mrs Joy Jideofor in memory of her mother Elizabeth Eje, and discover the compassion behind its work.",
};
export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="OUR STORY"
        title="A legacy of love. A purpose that lives on."
        text="Behind our foundation is a mother’s resilience, a daughter’s determination, and a belief that hardship should never have the final word."
      />
      <section className="section">
        <div className="container story-grid">
          <div className="story-visual tall">
            <Image
              src={photo("17.46.02")}
              alt="The foundation's school outreach bringing children together with learning materials"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
          </div>
          <div className="story-copy">
            <p className="eyebrow">
              <span />
              WHERE IT ALL BEGAN
            </p>
            <h2>
              Remembering
              <br />
              <em>Elizabeth.</em>
            </h2>
            <p>
              Elizabeth Eje (1936–2016) became a widow when her daughter Joy was
              only three. Facing the pressures and injustices of widowhood, she
              sustained her four children through petty trading and farming.
            </p>
            <p>
              Her strength, and the encouragement of Joy’s brother Raphael,
              helped Joy pursue the education she so deeply valued. Those early
              experiences shaped a lasting commitment to families facing
              hardship.
            </p>
            <p>
              Mrs Joy Jideofor (Esq) founded The Great Kpakpando & Elizabeth
              Foundation in honour and memory of her mother, turning a personal
              legacy into a wider purpose.
            </p>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span />
                WHAT GUIDES US
              </p>
              <h2>
                Compassion with
                <br />
                <em>a practical purpose.</em>
              </h2>
            </div>
            <p>
              Our work begins with the dignity of each person and the
              opportunities that help them move forward.
            </p>
          </div>
          <div className="principle-grid">
            <article>
              <span>01 / OUR PURPOSE</span>
              <h3>Support that empowers.</h3>
              <p>
                To reduce hardship for widows, orphans and young people through
                social, educational and economic empowerment, advocacy and care.
              </p>
            </article>
            <article>
              <span>02 / OUR VALUES</span>
              <h3>Faith expressed through care.</h3>
              <p>
                Our mission connects Christian faith with practical provision
                for people in need. Compassion, perseverance, integrity and hard
                work shape our approach.
              </p>
            </article>
            <article>
              <span>03 / OUR VISION</span>
              <h3>Room for a better future.</h3>
              <p>
                The foundation’s long-term vision is a place bringing together a
                school, an orphanage, a training centre for widows, a hospital
                and a chapel. This is an aspiration for the future.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">
            <span />
            OUR FOUNDER
          </p>
          <h2>
            From lived experience
            <br />
            <em>to a life of service.</em>
          </h2>
          <p>
            Mrs Joy Jideofor’s experience as the daughter of a widow informs her
            concern for women and children whose opportunities are limited by
            hardship. A trained nurse, she also cares deeply about young people
            affected by drug abuse and addiction.
          </p>
          <p>
            That purpose extends to rural school visits, career encouragement,
            learning materials and skills, as well as awareness of the dangers
            of exploitation and trafficking. The foundation’s work focuses
            particularly on Enugu State and neighbouring communities in Nigeria.
          </p>
        </div>
      </section>
      <ConnectSection />
    </>
  );
}
