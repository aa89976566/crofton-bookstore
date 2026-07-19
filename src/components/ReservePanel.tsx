"use client";

import { FormEvent, useMemo, useState } from "react";
import { formatPrice } from "@/data/books";
import { store } from "@/data/store";
import { useReserve } from "./ReserveContext";

export function ReservePanel() {
  const { items, count, remove, clear, isOpen, close } = useReserve();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [sentHint, setSentHint] = useState(false);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.book.price * item.qty, 0),
    [items],
  );

  function buildMailto() {
    const lines = items.map(
      (item) =>
        `- ${item.book.title} by ${item.book.author} × ${item.qty} (${formatPrice(item.book.price)} each) [${item.book.id}]`,
    );
    const body = [
      `Hello Crofton Books,`,
      ``,
      `I would like to reserve the following:`,
      ``,
      ...lines,
      ``,
      `Estimated total (for reference): ${formatPrice(total)}`,
      ``,
      `Name: ${name || "(please fill)"}`,
      `Email: ${email || "(please fill)"}`,
      `Phone: ${phone || "—"}`,
      ``,
      note ? `Note: ${note}` : "",
      ``,
      `I understand this is a reserve request, not an online purchase.`,
      `Thank you!`,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = encodeURIComponent(
      `Reserve request — ${count} title${count === 1 ? "" : "s"}`,
    );
    return `mailto:${store.reserveEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!items.length) return;
    window.location.href = buildMailto();
    setSentHint(true);
  }

  return (
    <>
      <div
        className={`reserve-backdrop ${isOpen ? "is-open" : ""}`}
        onClick={close}
        aria-hidden={!isOpen}
      />
      <aside
        id="reserve"
        className={`reserve-panel ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
        aria-label="Reserve list"
      >
        <div className="reserve-head">
          <h2>Reserve list</h2>
          <button type="button" className="text-btn" onClick={close}>
            Close
          </button>
        </div>

        <p className="reserve-note">
          We do not take online payments. Send an email reserve request and we
          will confirm availability for collection or further arrangement.
        </p>

        {items.length === 0 ? (
          <p className="reserve-empty">
            Your list is empty. Browse the shelf and add titles you hope to
            hold.
          </p>
        ) : (
          <ul className="reserve-list">
            {items.map((item) => (
              <li key={item.book.id}>
                <div>
                  <strong>{item.book.title}</strong>
                  <span>
                    {item.book.author} · {formatPrice(item.book.price)}
                    {item.qty > 1 ? ` × ${item.qty}` : ""}
                  </span>
                </div>
                <button
                  type="button"
                  className="text-btn"
                  onClick={() => remove(item.book.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <form className="reserve-form" onSubmit={onSubmit}>
            <p className="reserve-total">
              Reference total · {formatPrice(total)}
            </p>
            <label>
              Your name
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </label>
            <label>
              Your email
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </label>
            <label>
              Phone <span className="optional">(optional)</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
              />
            </label>
            <label>
              Note <span className="optional">(optional)</span>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Collection day, edition preference…"
              />
            </label>
            <button type="submit" className="btn btn-ink" disabled={!items.length}>
              Email reserve request
            </button>
            <button type="button" className="text-btn clear-btn" onClick={clear}>
              Clear list
            </button>
            {sentHint && (
              <p className="sent-hint">
                Your email app should open with the request. If nothing opens,
                write to{" "}
                <a href={`mailto:${store.reserveEmail}`}>{store.reserveEmail}</a>{" "}
                or call{" "}
                <a href={store.phoneHref}>{store.phone}</a>.
              </p>
            )}
          </form>
        )}
      </aside>
    </>
  );
}
