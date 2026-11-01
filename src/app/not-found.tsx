import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow">
        <p className="eyebrow">PAGE NOT FOUND</p>
        <h1>
          Let’s find your
          <br />
          <em>way back.</em>
        </h1>
        <p>The page you are looking for could not be found.</p>
        <Link className="button button-red" href="/">
          Back to home <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
