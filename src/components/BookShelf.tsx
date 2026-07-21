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
        background: `linear-gradient(165deg, hsl(${hue} 22% 34%), hsl(${(hue + 28) % 360} 18% 22%))`,
      }}
      aria-hidden
    >
      <span>{book.title}</span>
    </div>
  );
}

function ShelfBook({
  book,
  onOpen,
  tilt,
}: {
  book: Book;
  onOpen: (book: Book) => void;
  tilt: number;
}) {
  return (
    <button
      type="button"
      className="shelf-book"
      style={{ ["--tilt" as string]: `${tilt}deg` }}
      onClick={() => onOpen(book)}
    >
      <span className="shelf-book-cover">
        <CoverArt book={book} />
      </span>
      <span className="shelf-book-meta">
        <span className="shelf-book-title">{book.title}</span>
        <span className="shelf-book-author">{book.author}</span>
        <span className="shelf-book-price">{formatPrice(book.price)}</span>
      </span>
    </button>
  );
}

function ShelfRow({
  id,
  title,
  list,
  seeMoreHref,
  seeMoreLabel,
}: {
  id?: string;
  title: string;
  list: Book[];
  seeMoreHref?: string;
  seeMoreLabel?: string;
}) {
  const { openBook } = useShop();
  const trackRef = useRef<HTMLDivElement>(null);

  if (list.length === 0) return null;

  function scroll(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 220, behavior: "smooth" });
  }

  return (
    <section id={id} className="shelf-section">
      <div className="db-container shelf-head">
        <h2>{title}</h2>
        {seeMoreHref ? (
          <a className="shelf-see-more" href={seeMoreHref}>
            {seeMoreLabel ?? "See more books…"}
          </a>
        ) : null}
      </div>

      <div className="shelf-stage">
        <button
          type="button"
          className="shelf-nav shelf-nav-prev"
          aria-label={`Previous ${title}`}
          onClick={() => scroll(-1)}
        >
          ‹
        </button>
        <div className="shelf-track" ref={trackRef}>
          {list.map((book, i) => (
            <ShelfBook
              key={book.id}
              book={book}
              onOpen={openBook}
              tilt={((i * 7) % 5) - 2}
            />
          ))}
        </div>
        <button
          type="button"
          className="shelf-nav shelf-nav-next"
          aria-label={`Next ${title}`}
          onClick={() => scroll(1)}
        >
          ›
        </button>
        <div className="shelf-wood" aria-hidden>
          <div className="shelf-wood-edge" />
        </div>
      </div>
    </section>
  );
}

export function FeaturedCarousel() {
  const featured = useMemo(() => books.filter((b) => b.featured), []);
  return (
    <ShelfRow
      id="featured"
      title="From the shelves"
      list={featured}
      seeMoreHref="#shop"
      seeMoreLabel="See more books…"
    />
  );
}

const SHELF_CATEGORIES = [
  "Fiction",
  "Poetry",
  "Vintage",
  "Occult",
  "Sci-Fi",
  "Non-fiction",
] as const;

export function BookShelf() {
  const { openBook, query, category, setCategory } = useShop();

  const searching = query.trim().length > 0 || category !== "All";

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
    <div id="shop">
      <div className="db-container shelf-browse">
        <h2 className="db-section-title">Browse the bookcase</h2>
        <p className="db-note">
          Pull a title from the shelf to read condition notes, then add it to
          your hold list and email us. Online display only. Stock turns quickly
          in the shop.
        </p>
        <div className="sf-browse-bar">
          <label htmlFor="section-select">Section</label>
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
      </div>

      {searching ? (
        <section className="shelf-section">
          <div className="db-container shelf-head">
            <h2>
              {visible.length === 0
                ? "No titles match"
                : `Results (${visible.length})`}
            </h2>
          </div>
          {visible.length > 0 ? (
            <div className="shelf-stage">
              <div className="shelf-track shelf-track-wrap">
                {visible.map((book, i) => (
                  <ShelfBook
                    key={book.id}
                    book={book}
                    onOpen={openBook}
                    tilt={((i * 7) % 5) - 2}
                  />
                ))}
              </div>
              <div className="shelf-wood" aria-hidden>
                <div className="shelf-wood-edge" />
              </div>
            </div>
          ) : (
            <p className="db-container db-note">Try another search or section.</p>
          )}
        </section>
      ) : (
        SHELF_CATEGORIES.map((cat) => (
          <ShelfRow
            key={cat}
            title={cat}
            list={books.filter((b) => b.category === cat)}
            seeMoreHref="#shop"
            seeMoreLabel="See more books…"
          />
        ))
      )}
    </div>
  );
}
