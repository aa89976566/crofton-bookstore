"use client";

import Link from "next/link";
import { useState } from "react";
import { store } from "@/data/store";
import { useShop } from "./ShopContext";

const nav = [
  { href: "#shelf", label: "Books" },
  { href: "#how", label: "How to reserve" },
  { href: "#condition", label: "Condition" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { count, toggleReserve, openReserve, query, setQuery } = useShop();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="announce-bar">
        <div className="wrapper announce-inner">
          <p className="announce-message">
            Hello! We hold books by email reserve :)
          </p>
          <div className="announce-right">
            <a href={`mailto:${store.reserveEmail}`}>Email us</a>
            <span className="sep" aria-hidden>
              ·
            </span>
            <button
              type="button"
              className="cart-link"
              onClick={() => toggleReserve()}
              aria-label={`Open reserve list, ${count} items`}
            >
              Reserve
              <span className="cart-count">{count}</span>
            </button>
          </div>
        </div>
      </div>

      <header className="site-header" role="banner">
        <div className="wrapper header-row">
          <button
            type="button"
            className="menu-btn"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            Menu
          </button>

          <h1 className="site-logo">
            <Link href="/" className="logo-link" onClick={() => setMenuOpen(false)}>
              <span className="logo-word">{store.name}</span>
              <span className="logo-sub">{store.tagline}</span>
            </Link>
          </h1>

          <button
            type="button"
            className="mobile-cart"
            onClick={() => openReserve()}
            aria-label={`Open reserve list, ${count} items`}
          >
            {count}
          </button>

          <nav
            id="site-nav"
            className={`site-nav ${menuOpen ? "is-open" : ""}`}
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="site-nav__link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="wrapper search-row">
          <label className="search-label" htmlFor="shelf-search">
            Search
          </label>
          <input
            id="shelf-search"
            type="search"
            className="search-input"
            placeholder="Title, author, ISBN…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </header>
    </>
  );
}
