"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { categories } from "@/data/books";
import { store } from "@/data/store";
import { useShop } from "./ShopContext";

const nav = [
  { href: "#news", label: "News" },
  { href: "#sell", label: "Sell" },
  { href: "#shop", label: "Buy" },
  { href: "#shop", label: "Shop" },
  { href: "#how", label: "Reserve" },
  { action: "baskets" as const, label: "Baskets" },
];

export function FloatingChrome() {
  const {
    count,
    openReserve,
    query,
    setQuery,
    category,
    setCategory,
  } = useShop();
  const [catOpen, setCatOpen] = useState(false);
  const catRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!catRef.current?.contains(e.target as Node)) setCatOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <>
      <Link href="/" className="corner-logo" aria-label={`${store.name} home`}>
        <span>C</span>
      </Link>

      <div className="floating-chrome">
        <nav className="chrome-nav" aria-label="Primary">
          {nav.map((item) =>
            "action" in item && item.action === "baskets" ? (
              <button
                key={item.label}
                type="button"
                className="chrome-nav__link"
                onClick={() => openReserve()}
              >
                {item.label}
                {count > 0 ? <span className="chrome-badge">{count}</span> : null}
              </button>
            ) : (
              <a
                key={item.label}
                href={"href" in item ? item.href : "#"}
                className="chrome-nav__link"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="chrome-tools">
          <div className="cat-wrap" ref={catRef}>
            <button
              type="button"
              className="cat-btn"
              aria-expanded={catOpen}
              aria-haspopup="listbox"
              onClick={() => setCatOpen((v) => !v)}
            >
              {category === "All" ? "Category" : category}
              <span className="cat-chevron" aria-hidden>
                ▾
              </span>
            </button>
            {catOpen ? (
              <ul className="cat-menu" role="listbox">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={category === cat}
                      onClick={() => {
                        setCategory(cat);
                        setCatOpen(false);
                        document
                          .getElementById("shop")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="chrome-search">
            <label className="sr-only" htmlFor="shelf-search">
              Search books
            </label>
            <input
              id="shelf-search"
              type="search"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => {
                document
                  .getElementById("shop")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
            <span className="search-icon" aria-hidden>
              ⌕
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
