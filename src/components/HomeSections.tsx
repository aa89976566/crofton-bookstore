"use client";

import { useEffect, useState } from "react";
import { store } from "@/data/store";
import { asset } from "@/lib/paths";

const slides = [
  {
    src: asset("/images/hero-01-outside.jpg"),
    alt: "Crofton Books storefront with books on the Brockley Road pavement",
  },
  {
    src: asset("/images/hero-02-pavement.jpg"),
    alt: "Outdoor tables and crates of secondhand books outside the shop",
  },
  {
    src: asset("/images/hero-03-aisle.jpg"),
    alt: "Looking down a packed aisle inside Crofton Books",
  },
  {
    src: asset("/images/hero-04-interior.jpg"),
    alt: "Floor to ceiling shelves inside the Brockley bookshop",
  },
];

export function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="db-hero" aria-label="Shop photographs">
      <div className="db-container">
        <p className="db-intro">
          Our website lists a curated slice of titles from the shop. If you
          cannot find what you want, email{" "}
          <a href={`mailto:${store.reserveEmail}`}>{store.reserveEmail}</a> or
          call <a href={store.phoneHref}>{store.phone}</a>. Hold by email. No
          online checkout.
        </p>
        <div className="db-hero-frame">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`db-hero-slide ${i === index ? "is-active" : ""}`}
              aria-hidden={i !== index}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
          <div className="db-hero-dots">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                className={i === index ? "is-active" : ""}
                aria-label={`Show photo ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StoryGuide() {
  return (
    <section id="story" className="db-story db-container">
      <h2>Our Story</h2>
      <p>
        {store.name} {store.tagline} opened in {store.established} at{" "}
        {store.address.line1}. {store.shortPitch}
      </p>
      <p>
        New here? Start by{" "}
        <a href="#featured">picking a title from the shelves</a>, read{" "}
        <a href="#about">about the shop</a>, or jump to{" "}
        <a href="#visit">visit us</a> for hours and trains.
      </p>
    </section>
  );
}

export function NewsSection() {
  return (
    <section id="news" className="db-block db-container">
      <h2>New Arrivals</h2>
      <p>{store.events}</p>
      <p>
        Follow{" "}
        <a href={store.instagram} target="_blank" rel="noreferrer">
          {store.instagramHandle}
        </a>{" "}
        for what just arrived.
      </p>
    </section>
  );
}
