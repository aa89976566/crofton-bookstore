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
        alt=""
        className="book-cover-img"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div
      className="book-cover-fallback"
      style={{
        background: `linear-gradient(155deg, hsl(${hue} 28% 28%), hsl(${(hue + 40) % 360} 22% 18%))`,
      }}
      aria-hidden
    >
      <span className="fallback-title">{book.title}</span>
      <span className="fallback-author">{book.author}</span>
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
    <section id="shelf" className="shelf section">
      <div className="section-intro">
        <p className="eyebrow">Online shelf</p>
        <h2>Books to reserve by email</h2>
        <p>
          No checkout, no account — add titles to your reserve list and we will
          hold them when we can. Stock turns quickly in the shop.
        </p>
      </div>

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

      <ul className="book-grid">
        {visible.map((book, index) => (
          <li
            key={book.id}
            className="book-item animate-rise"
            style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}
          >
            <article className="book-card-plain">
              <div className="book-media">
                <CoverArt book={book} />
              </div>
              <div className="book-meta">
                <h3>{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <p className="book-price">{formatPrice(book.price)}</p>
                <p className="book-condition">
                  {book.condition}
                  {book.year ? ` · ${book.year}` : ""}
                </p>
                <p className="book-desc">{book.description}</p>
                <button
                  type="button"
                  className="btn btn-ink btn-slim"
                  onClick={() => add(book)}
                >
                  Add to reserve
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
