"use client";

import { useEffect, useState } from "react";
import { store } from "@/data/store";
import { asset } from "@/lib/paths";

/** Photos from the Crofton Books Google Maps listing. */
const slides = [
  {
    src: asset("/images/shop-hero.jpg"),
    alt: "Crofton Books storefront on Brockley Road with the shop sign and window displays",
  },
  {
    src: asset("/images/shop-interior.jpg"),
    alt: "Looking into Crofton Books from the pavement, shelves packed wall to wall",
  },
  {
    src: asset("/images/shop-hero-3.jpg"),
    alt: "Wooden shelves inside Crofton Books filled with secondhand titles",
  },
  {
    src: asset("/images/shop-hero-2.jpg"),
    alt: "A title from the Crofton Books shelves, photographed in the shop",
  },
];

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const mapUrl = asset("/images/map-bg.jpg");

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused]);

  function go(delta: number) {
    setIndex((i) => (i + delta + slides.length) % slides.length);
  }

  return (
    <section
      className="sf-hero"
      style={{ ["--hero-map" as string]: `url(${mapUrl})` }}
      aria-roledescription="carousel"
      aria-label="Shop atmosphere"
    >
      <div className="sf-hero-frame">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`sf-hero-slide ${i === index ? "is-active" : ""}`}
            aria-hidden={i !== index}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}

        <button
          type="button"
          className="sf-hero-nav sf-hero-prev"
          aria-label="Previous image"
          onClick={() => go(-1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          type="button"
          className="sf-hero-nav sf-hero-next"
          aria-label="Next image"
          onClick={() => go(1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button
          type="button"
          className="sf-hero-pause"
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          onClick={() => setPaused((p) => !p)}
        >
          {paused ? (
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M7 5h3v14H7zm7 0h3v14h-3z" />
            </svg>
          )}
        </button>
      </div>
      <div className="sf-hero-dots" role="tablist" aria-label="Slides">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={i === index ? "is-active" : ""}
            aria-label={`Show slide ${i + 1}`}
            aria-selected={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export function StoryGuide() {
  return (
    <section id="story" className="sf-story">
      <h2>Our Story</h2>
      <p>
        {store.name} {store.tagline} opened in {store.established} at{" "}
        {store.address.line1}. {store.shortPitch}
      </p>
      <p>
        New here? Use the paths below. Browse Featured Items for a quick look,
        read About for the shop ethos, or jump to Visit Us for hours and trains.
      </p>
      <div className="sf-guide-row">
        <a className="sf-guide-link" href="#featured">
          <strong>Featured Items</strong>
          <span>A curated slice of the shelves to open first.</span>
        </a>
        <a className="sf-guide-link" href="#about">
          <strong>About the shop</strong>
          <span>Who we are, what we stock, and how the floor feels.</span>
        </a>
        <a className="sf-guide-link" href="#visit">
          <strong>Visit Us</strong>
          <span>Address, hours, trains, and how to get here.</span>
        </a>
      </div>
    </section>
  );
}

export function NewsSection() {
  return (
    <section id="news" className="sf-block">
      <h2>New Arrivals</h2>
      <p>{store.events}</p>
      <p>
        Follow{" "}
        <a href={store.instagram} target="_blank" rel="noreferrer">
          {store.instagramHandle}
        </a>{" "}
        for what just arrived in the shop. Hours and one-off openings are posted
        there too.
      </p>
      <div className="sf-cta-row">
        <a className="btn btn-ink" href="#featured">
          See featured titles
        </a>
        <a className="btn btn-ghost" href="#visit">
          Plan a visit
        </a>
      </div>
    </section>
  );
}

export function SellSection() {
  return (
    <section id="sell" className="sf-block">
      <h2>Selling Books</h2>
      <p>
        We buy good used books: literary fiction, poetry, modern classics,
        curious non fiction, and the odd rare or inscribed copy.
      </p>
      <p>
        Email{" "}
        <a href={`mailto:${store.reserveEmail}`}>{store.reserveEmail}</a> or
        call <a href={store.phoneHref}>{store.phone}</a> before large drop offs.
      </p>
      <div className="sf-cta-row">
        <a className="btn btn-ink" href={`mailto:${store.reserveEmail}`}>
          Email about selling
        </a>
        <a className="btn btn-ghost" href="#visit">
          Find the shop
        </a>
      </div>
    </section>
  );
}
