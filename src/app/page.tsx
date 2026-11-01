import Image from "next/image";
import Link from "next/link";
import { photo, programs } from "@/data/foundation";
import { Arrow, ConnectSection } from "@/components/sections/Shared";
import { NigeriaCollage } from "@/components/sections/NigeriaCollage";
import { SunIcon } from "@/components/ui/SunIcon";
export default function HomePage() {
  return (
    <>
      <section className="hero hero-nigeria">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              DIGNITY. OPPORTUNITY. HOPE.
            </p>
            <h1>
              A little care.
              <br />A world of
              <br />
              <em>possibility.</em>
            </h1>
            <p>
              Standing with widows, nurturing children, and empowering young
              people to build a brighter tomorrow.
            </p>
            <div className="hero-actions">
              <Link className="button button-red" href="/our-work">
                Discover our work <Arrow />
              </Link>
              <Link className="text-link" href="/about">
                Meet the foundation <Arrow />
              </Link>
            </div>
          </div>
          <NigeriaCollage />
        </div>
      </section>
      <section className="purpose-strip" aria-label="Who we support">
        <div className="container">
          <span className="strip-intro">
            ONE PURPOSE.
            <br />
            <strong>MANY POSSIBILITIES.</strong>
          </span>
          <div>
            <span aria-hidden="true">01</span>
            <h2>Empowering widows</h2>
          </div>
          <div>
            <span aria-hidden="true">02</span>
            <h2>Nurturing children</h2>
          </div>
          <div>
            <span aria-hidden="true">03</span>
            <h2>Inspiring young people</h2>
          </div>
        </div>
      </section>
      <section className="section story-section">
        <div className="container story-grid">
          <div className="story-visual">
            <Image
              src={photo("17.45.59")}
              alt="A foundation representative speaking with children outside a rural school"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
            <span className="image-label">OUR COMMUNITY. OUR COMMITMENT.</span>
          </div>
          <div className="story-copy">
            <p className="eyebrow">
              <span />
              THE HEART BEHIND OUR WORK
            </p>
            <h2>
              A mother’s strength.
              <br />
              <em>A daughter’s purpose.</em>
            </h2>
            <p>
              The Great Kpakpando & Elizabeth Foundation was born from a deeply
              personal understanding of hardship—and the strength it takes to
              overcome it.
            </p>
            <p>
              Founded by Mrs Joy Jideofor (Esq) in memory of her mother,
              Elizabeth Eje, we turn that legacy of resilience into practical
              support for widows, orphans and young people.
            </p>
            <Link className="text-link" href="/about">
              Read our story <Arrow />
            </Link>
            <div className="story-belief">
              <SunIcon />
              <span>
                Rooted in love.
                <br />
                <strong>Built on the belief that everyone matters.</strong>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section work-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span />
                SMALL ACTIONS. MEANINGFUL CHANGE.
              </p>
              <h2>
                Opportunity takes
                <br />
                <em>many forms.</em>
              </h2>
            </div>
            <div>
              <p>
                Education, encouragement and the tools to move forward. Explore
                the work at the heart of our foundation.
              </p>
              <Link className="text-link" href="/our-work">
                Explore our work <Arrow />
              </Link>
            </div>
          </div>
          <div className="program-grid">
            {programs.map((p) => (
              <Link
                className="program-card"
                href={`/our-work#${p.id}`}
                key={p.id}
              >
                <div className="program-image">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                  <span>{p.number}</span>
                </div>
                <div className="program-content">
                  <p className="eyebrow">{p.category}</p>
                  <h3>{p.shortTitle}</h3>
                  <p>{p.text}</p>
                  <span className="card-arrow">
                    <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="values-banner">
        <div className="container">
          <SunIcon />
          <p>
            We believe that compassion becomes powerful
            <br />
            when it becomes <em>action.</em>
          </p>
          <Link href="/gallery" className="text-link">
            See our community in pictures <Arrow />
          </Link>
        </div>
      </section>
      <ConnectSection />
    </>
  );
}
