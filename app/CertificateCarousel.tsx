"use client";

import { useState } from "react";

export type CertificateItem = {
  date: string;
  href?: string;
  issuer: string;
  name: string;
  tag: string;
};

type CertificateCarouselProps = {
  items: CertificateItem[];
};

export default function CertificateCarousel({ items }: CertificateCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];
  const lastIndex = items.length - 1;

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex === 0 ? lastIndex : currentIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex === lastIndex ? 0 : currentIndex + 1));
  };

  return (
    <div className="cert-carousel" aria-label="Certification carousel">
      <div className="cert-carousel__stage">
        <article className="cert-slide" key={activeItem.name}>
          <div className="cert-slide__top">
            <span>{activeItem.tag}</span>
            <span>
              {activeIndex + 1}/{items.length}
            </span>
          </div>
          <h3>{activeItem.name}</h3>
          <p>{activeItem.issuer}</p>
          <div className="cert-slide__meta">
            <span>{activeItem.date}</span>
            <span>Credential</span>
          </div>
          {activeItem.href ? (
            <a href={activeItem.href} target="_blank" rel="noreferrer">
              View certificate
            </a>
          ) : (
            <span className="cert-slide__pending">Certificate link pending</span>
          )}
        </article>
      </div>

      <div className="cert-carousel__controls">
        <button type="button" onClick={goToPrevious} aria-label="Previous certificate">
          ‹
        </button>
        <div className="cert-carousel__dots" aria-label="Certificate selector">
          {items.map((item, index) => (
            <button
              aria-label={`Show ${item.name}`}
              aria-pressed={index === activeIndex}
              className={index === activeIndex ? "active" : undefined}
              key={item.name}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
        <button type="button" onClick={goToNext} aria-label="Next certificate">
          ›
        </button>
      </div>
    </div>
  );
}
