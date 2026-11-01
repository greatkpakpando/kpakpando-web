import Image from "next/image";
import { photo } from "@/data/foundation";
import { SunIcon } from "@/components/ui/SunIcon";

const moments = [
  { file: "17.41.04 (1)", alt: "A foundation-supported farmer tending maize" },
  {
    file: "17.46.02",
    alt: "Children sharing learning materials during foundation outreach",
  },
  { file: "17.45.59", alt: "A school visit bringing the community together" },
  { file: "17.46.19", alt: "Young people at a drug-awareness event" },
  {
    file: "17.46.02 (3)",
    alt: "Schoolchildren holding their learning materials",
  },
];

export function NigeriaCollage() {
  return (
    <figure className="nigeria-art">
      <div className="map-orbit" aria-hidden="true" />
      <div
        className="nigeria-collage"
        role="group"
        aria-label="Photographs of the foundation’s community arranged in the shape of Nigeria"
      >
        {moments.map((moment, index) => (
          <div className={`map-photo map-photo-${index + 1}`} key={moment.file}>
            <Image
              src={photo(moment.file)}
              alt={moment.alt}
              fill
              sizes="(max-width: 760px) 50vw, 25vw"
              preload={index < 2}
            />
          </div>
        ))}
        <div className="map-gold" aria-hidden="true">
          <SunIcon />
        </div>
      </div>
      <div className="map-pin" aria-hidden="true" />
      <figcaption className="map-caption">
        <span className="map-caption-line" />
        <div>
          <strong>Rooted in Enugu.</strong>
          <span>Connected by compassion.</span>
        </div>
        <span className="map-caption-arrow" aria-hidden="true">
          ↗
        </span>
      </figcaption>
      <span className="map-coordinate" aria-hidden="true">
        NIGERIA · A SHARED FUTURE
      </span>
    </figure>
  );
}
