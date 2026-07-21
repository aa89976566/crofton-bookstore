"use client";

import { useMemo, useRef, useState } from "react";
import { books, categories, formatPrice, type Book } from "@/data/books";
import { useShop } from "./ShopContext";

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
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div
      className="cover-fallback"
      style={{
        background: `linear-gradient(165deg, hsl(${hue} 18% 78%), hsl(${(hue + 25) % 360} 14% 62%))`,
      }}
      aria-hidden
    >
      <span>{book.title}</span>
    </div>
  );
}

function BookCardButton({
  book,
  className,
  onOpen,
}: {
  book: Book;
  className: string;
  onOpen: (book: Book) => void;
}) {
  return (
    <button type="button" className={className} onClick={() => onOpen(book)}>
      <span className="sf-book-image">
        <CoverArt book={book} />
      </span>
      <span className="sf-book-info">
        <span className="sf-book-author">{book.author}</span>
        <span className="sf-book-title">{book.title}</span>
        <span className="sf-book-price">{formatPrice(book.price)}</span>
        <span className="sf-more">More</span>
      </span>
    </button>
  );
}

export function FeaturedCarousel() {
  const { openBook } = useShop();
  const trackRef = useRef<HTMLDivElement>(null);
  const featured = useMemo(() => books.filter((b) => b.featured), []);

  function scrollByCard(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".sf-carousel-card") as HTMLElement | null;
    const amount = card ? card.offsetWidth + 14 : 200;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <section id="featured" className="sf-featured">
      <div className="sf-featured-head">
        <h2>Featured Items</h2>
        <a className="sf-see-all" href="#shop">
          See all featured items
          <span className="sf-see-all-icon" aria-hidden>
            <svg viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>

      <div className="sf-carousel-wrap">
        <button
          type="button"
          className="sf-carousel-nav sf-carousel-prev"
          aria-label="Previous featured titles"
          onClick={() => scrollByCard(-1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <div className="sf-carousel" ref={trackRef}>
          {featured.map((book) => (
            <BookCardButton
              key={book.id}
              book={book}
              className="sf-carousel-card"
              onOpen={openBook}
            />
          ))}
        </div>
        <button
          type="button"
          className="sf-carousel-nav sf-carousel-next"
          aria-label="Next featured titles"
          onClick={() => scrollByCard(1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export function BookShelf() {
  const { openBook, query, category, setCategory } = useShop();

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = books;
    if (category === "Featured") list = list.filter((b) => b.featured);
    else if (category !== "All") list = list.filter((b) => b.category === category);
    if (q) {
      list = list.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          (b.isbn && b.isbn.includes(q)),
      );
    }
    return list;
  }, [category, query]);

  return (
    <section id="shop" className="sf-catalogue">
      <div className="sf-container">
        <h2 className="sf-section-title">Browse the shelves</h2>
        <p className="sf-note" style={{ marginBottom: "1rem" }}>
          Online display only. Open a title for condition notes, then add it to
          your hold list and email us. Stock turns quickly in the shop.
        </p>

        <div className="sf-browse-bar">
          <label htmlFor="section-select">Browse</label>
          <select
            id="section-select"
            value={category}
            onChange={(e) => setCategory(e.target.value as typeof category)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {visible.length === 0 ? (
          <p className="sf-empty">No titles match. Try another search.</p>
        ) : (
          <ul className="sf-book-grid">
            {visible.map((book) => (
              <li key={book.id}>
                <BookCardButton
                  book={book}
                  className="sf-book-card"
                  onOpen={openBook}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
