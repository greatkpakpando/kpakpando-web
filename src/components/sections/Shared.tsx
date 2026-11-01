import Link from "next/link";
import { ArrowIcon as Arrow } from "@/components/ui/ArrowIcon";
export { Arrow };
export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h1>{title}</h1>
        <p className="intro-text">{text}</p>
      </div>
    </section>
  );
}
export function ConnectSection() {
  return (
    <section className="connect-section">
      <div className="container connect-inner">
        <div>
          <p className="eyebrow">COMPASSION STARTS WITH CONNECTION</p>
          <h2>
            There is a place for
            <br />
            <em>your kindness.</em>
          </h2>
        </div>
        <div>
          <p>
            Want to learn more or explore how you can support our work? We would
            love to hear from you.
          </p>
          <Link className="button button-cream" href="/contact">
            Let’s start a conversation <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
