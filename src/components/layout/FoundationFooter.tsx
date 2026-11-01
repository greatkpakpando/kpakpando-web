import Link from "next/link";
import Image from "next/image";
import { foundation, navigation } from "@/data/foundation";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
export function FoundationFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Link href="/" className="footer-brand">
            <Image
              src="/assets/logo.jpeg"
              width={60}
              height={62}
              alt="Foundation logo"
            />
            <span>
              Great Kpakpando
              <br />& Elizabeth Foundation
            </span>
          </Link>
          <p>
            Standing alongside widows, orphans and young people. Creating
            opportunities through compassion and practical support.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Connect with us</h2>
          <Link href="/contact">
            Contact the foundation <ArrowIcon />
          </Link>
          <Link href="/widows-rights">Widows’ dignity & rights</Link>
          <a className="footer-email" href={`mailto:${foundation.email}`}>
            {foundation.email}
          </a>
          <a href="tel:+2347060550994">{foundation.phones[0]}</a>
        </div>
        <div>
          <h2>Our community</h2>
          <p>
            Awgu, Enugu State
            <br />
            Nigeria
          </p>
          <p className="footer-motto">
            Faith. Compassion.
            <br />
            Opportunity.
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {foundation.name}.
        </span>
        <span>Empowering youths, widows & orphans.</span>
      </div>
    </footer>
  );
}
