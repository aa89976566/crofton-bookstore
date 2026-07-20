"use client";

import { useMemo, useState } from "react";
import { books, categories, formatPrice, type Book } from "@/data/books";
import { useReserve } from "./ReserveContext";

function CoverArt({ book }: { book: Book }) {
  const [failed, setFailed] = useState(false);
  const hue = useMemo(() => {
    let hash = 0;
    for (const ch of book.id) hash = (hash * 31 + ch.charCodeAt(0)) % 360;
    return hash;
  }, [book.id]);

  if (book.isbn && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
        alt={book.title}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div
      className="cover-fallback"
      style={{
        background: `linear-gradient(160deg, hsl(${hue} 18% 76%), hsl(${(hue + 28) % 360} 14% 58%))`,
      }}
      aria-hidden
    >
      <span>{book.title}</span>
    </div>
  );
}

export function BookShelf() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const { add } = useReserve();

  const visible = useMemo(() => {
    if (filter === "All") return books;
    if (filter === "Featured") return books.filter((b) => b.featured);
    return books.filter((b) => b.category === filter);
  }, [filter]);

  return (
    <section id="shelf" className="collection">
      <div className="filter-row" role="tablist" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            className={`filter-btn ${filter === cat ? "is-active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="product-grid">
        {visible.map((book) => (
          <li key={book.id} className="product-cell">
            <button
              type="button"
              className="grid-link"
              onClick={() => add(book)}
              aria-label={`Reserve ${book.title} by ${book.author}, ${formatPrice(book.price)}`}
            >
              <span className="grid-link__image">
                <CoverArt book={book} />
              </span>
              <span className="grid-link__caption">
                <span className="grid-link__title">
                  {book.title}
                  {book.author !== "Various" ? ` — ${book.author}` : "."}
                </span>
                <span className="grid-link__meta">{formatPrice(book.price)}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
