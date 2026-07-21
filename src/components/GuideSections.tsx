"use client";

import { useEffect } from "react";
import { conditionGuide } from "@/data/books";
import { store } from "@/data/store";
import { useShop } from "./ShopContext";

export function HowToReserveModal() {
  const { howOpen, closeHow } = useShop();

  useEffect(() => {
    if (!howOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [howOpen]);

  function pickFromShelves() {
    closeHow();
    document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div
        className={`how-backdrop ${howOpen ? "is-open" : ""}`}
        onClick={closeHow}
        aria-hidden={!howOpen}
      />
      <div
        className={`how-modal ${howOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="how-title"
        aria-hidden={!howOpen}
      >
        <div className="how-modal-head">
          <h2 id="how-title">How to reserve</h2>
          <button type="button" className="text-btn" onClick={closeHow}>
            Close
          </button>
        </div>
        <p>
          There is no checkout and no account. Browse the shelves, hold a title,
          then email us. We confirm what we can keep aside.
        </p>
        <ol className="sf-steps">
          {store.reserveHow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="db-cta-row">
          <button type="button" className="btn btn-ink" onClick={pickFromShelves}>
            Pick from the shelves
          </button>
          <a className="btn btn-ghost" href={`mailto:${store.reserveEmail}`}>
            Email {store.reserveEmail}
          </a>
        </div>
      </div>
    </>
  );
}

export function ConditionGuide() {
  return (
    <section id="condition" className="db-block db-container">
      <h2>Condition guide</h2>
      <p>
        Secondhand books are described honestly. Grades follow common
        antiquarian practice. Always read the notes on each title.
      </p>
      <dl className="sf-condition">
        {conditionGuide.map((row) => (
          <div key={row.grade}>
            <dt>{row.grade}</dt>
            <dd>{row.meaning}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
