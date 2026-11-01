import type { Metadata } from "next";
import { Gallery } from "@/components/sections/Gallery";
import { ConnectSection, PageIntro } from "@/components/sections/Shared";
export const metadata: Metadata = {
  title: "Community gallery",
  description:
    "Photographs from the foundation's school outreach, youth awareness activities and support for farmers.",
};
export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="LIFE IN OUR COMMUNITY"
        title="The people behind the purpose."
        text="Moments of learning, connection and possibility. A look at the foundation’s work through photographs from our community."
      />
      <section className="section gallery-section">
        <div className="container">
          <Gallery />
        </div>
      </section>
      <ConnectSection />
    </>
  );
}
