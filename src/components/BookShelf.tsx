"use client";

import { useMemo, useState } from "react";
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
    <section id="shop" className="sf-featured">
      <div className="sf-container">
        <h2 className="sf-section-title">Featured from the shelves</h2>

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
              <li key={book.id} className="sf-book">
                <button
                  type="button"
                  className="sf-book-card"
                  onClick={() => openBook(book)}
                >
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
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
