"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { galleryPhotos } from "@/data/foundation";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
const categories = [
  "All photographs",
  "Education",
  "Livelihoods",
  "Youth outreach",
];
export function Gallery() {
  const [category, setCategory] = useState(categories[0]);
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const current = galleryPhotos[selected];
  function open(index: number, target: HTMLButtonElement) {
    setSelected(index);
    opener.current = target;
    dialog.current?.showModal();
  }
  function move(direction: number) {
    setSelected(
      (value) =>
        (value + direction + galleryPhotos.length) % galleryPhotos.length,
    );
  }
  return (
    <>
      <div
        className="gallery-filters"
        role="group"
        aria-label="Filter photographs"
      >
        {categories.map((item) => (
          <button
            key={item}
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="gallery-count" aria-live="polite">
        {
          galleryPhotos.filter(
            (p) => category === categories[0] || category === p.category,
          ).length
        }{" "}
        photographs · Select a photograph to take a closer look
      </p>
      <div className="gallery-grid">
        {galleryPhotos.map(
          (p, index) =>
            (category === categories[0] || p.category === category) && (
              <figure key={p.src}>
                <button
                  className="gallery-image"
                  onClick={(event) => open(index, event.currentTarget)}
                  aria-label={`Enlarge: ${p.title}`}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                  <span className="gallery-enlarge-icon" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </button>
                <figcaption>
                  <span>{p.category}</span>
                  <h2>{p.title}</h2>
                </figcaption>
              </figure>
            ),
        )}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={current.title}
        onClose={() => opener.current?.focus()}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") move(1);
          if (event.key === "ArrowLeft") move(-1);
        }}
      >
        <div className="lightbox-top">
          <span>
            {current.category} · {selected + 1} / {galleryPhotos.length}
          </span>
          <button
            autoFocus
            onClick={() => dialog.current?.close()}
            aria-label="Close photograph"
          >
            Close ×
          </button>
        </div>
        <div className="lightbox-image">
          <Image src={current.src} alt={current.alt} fill sizes="90vw" />
        </div>
        <div className="lightbox-bottom">
          <button onClick={() => move(-1)} aria-label="Previous photograph">
            <ArrowIcon direction="left" />
          </button>
          <p>{current.title}</p>
          <button onClick={() => move(1)} aria-label="Next photograph">
            <ArrowIcon />
          </button>
        </div>
      </dialog>
    </>
  );
}
