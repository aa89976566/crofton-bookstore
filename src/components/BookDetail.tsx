"use client";

import { useMemo, useState } from "react";
import {
  formatPrice,
  relatedBooks,
  type Book,
} from "@/data/books";
import { store } from "@/data/store";
import { useShop } from "./ShopContext";

function Cover({ book, large = false }: { book: Book; large?: boolean }) {
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
        alt={`Cover of ${book.title}`}
        className={large ? "detail-cover-img" : undefined}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div
      className={large ? "cover-fallback detail-cover-fallback" : "cover-fallback"}
      style={{
        background: `linear-gradient(160deg, hsl(${hue} 18% 76%), hsl(${(hue + 28) % 360} 14% 58%))`,
      }}
      aria-hidden
    >
      <span>{book.title}</span>
    </div>
  );
}

export function BookDetail() {
  const { activeBook, closeBook, add, openBook } = useShop();

  if (!activeBook) return null;

  const book = activeBook;
  const related = relatedBooks(book);

  return (
    <>
      <div className="detail-backdrop is-open" onClick={closeBook} />
      <aside
        className="detail-panel is-open"
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-detail-title"
      >
        <div className="detail-head">
          <button type="button" className="text-btn" onClick={closeBook}>
            Close
          </button>
        </div>

        <div className="detail-body">
          <div className="detail-media">
            <Cover book={book} large />
          </div>

          <div className="detail-copy">
            <p className="detail-category">{book.category}</p>
            <h2 id="book-detail-title">{book.title}</h2>
            <p className="detail-author">{book.author}</p>
            <p className="detail-price">{formatPrice(book.price)}</p>

            <dl className="detail-facts">
              <div>
                <dt>Condition</dt>
                <dd>{book.condition}</dd>
              </div>
              <div>
                <dt>Binding</dt>
                <dd>{book.binding}</dd>
              </div>
              {book.publisher ? (
                <div>
                  <dt>Publisher</dt>
                  <dd>{book.publisher}</dd>
                </div>
              ) : null}
              {book.year ? (
                <div>
                  <dt>Date</dt>
                  <dd>{book.year}</dd>
                </div>
              ) : null}
              {book.edition ? (
                <div>
                  <dt>Edition</dt>
                  <dd>{book.edition}</dd>
                </div>
              ) : null}
              {book.isbn ? (
                <div>
                  <dt>ISBN</dt>
                  <dd>{book.isbn}</dd>
                </div>
              ) : null}
              <div>
                <dt>Available</dt>
                <dd>
                  {book.stock === 1
                    ? "1 copy in shop"
                    : `About ${book.stock} in shop`}
                </dd>
              </div>
            </dl>

            <h3>Condition notes</h3>
            <p>{book.conditionNotes}</p>

            <h3>About this title</h3>
            <p>{book.description}</p>

            <h3>How to get it</h3>
            <p>
              Add to your reserve list and email {store.name}. We confirm what we
              can hold for collection at {store.address.line1}, or discuss postage
              in the reply. No online payment.
            </p>

            <div className="detail-actions">
              <button
                type="button"
                className="btn btn-ink"
                onClick={() => add(book)}
              >
                Add to reserve
              </button>
              <a className="btn btn-ghost" href={`mailto:${store.reserveEmail}?subject=${encodeURIComponent(`Question about ${book.title}`)}`}>
                Ask a question
              </a>
            </div>
          </div>
        </div>

        {related.length > 0 ? (
          <div className="detail-related">
            <h3>More in {book.category}</h3>
            <ul>
              {related.map((item) => (
                <li key={item.id}>
                  <button type="button" onClick={() => openBook(item)}>
                    <span>{item.title}</span>
                    <span>{formatPrice(item.price)}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </aside>
    </>
  );
}
