"use client";

import { useEffect, useRef } from "react";
import { conditionGuide } from "@/data/books";
import { store } from "@/data/store";
import { useShop } from "./ShopContext";

export function HowToReserveModal() {
  const { howOpen, closeHow } = useShop();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (howOpen) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [howOpen]);

  function pickFromShelves() {
    closeHow();
    window.setTimeout(() => {
      document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  return (
    <dialog
      ref={dialogRef}
      className="how-dialog"
      aria-labelledby="how-title"
      onCancel={(e) => {
        e.preventDefault();
        closeHow();
      }}
      onClose={closeHow}
      onClick={(e) => {
        // Click on the backdrop (the dialog itself) closes the popup.
        if (e.target === dialogRef.current) closeHow();
      }}
    >
      <div className="how-dialog-card">
        <div className="how-modal-head">
          <h2 id="how-title">How to reserve a book</h2>
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
    </dialog>
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
