"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { store } from "@/data/store";
import { useShop } from "./ShopContext";

const nav = [
  { href: "#story", label: "Our Story" },
  { href: "#featured", label: "Featured Items" },
  { href: "#shop", label: "Browse All" },
  { href: "#how", label: "How to Reserve" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit Us" },
  { href: "#sell", label: "Selling Books" },
  { href: "#condition", label: "Condition Guide" },
];

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16.5 16.5L21 21" />
    </svg>
  );
}

export function SiteHeader() {
  const { count, openReserve, query, setQuery } = useShop();
  const [menuOpen, setMenuOpen] = useState(false);
  const [localQuery, setLocalQuery] = useState(query);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function onSearch(e: FormEvent) {
    e.preventDefault();
    setQuery(localQuery);
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <header className="sf-header">
      <div className="sf-util">
        <div className="sf-util-inner">
          <div className="sf-util-left">
            <a href={`mailto:${store.reserveEmail}`}>Email us</a>
            <span className="sf-sep">|</span>
            <button type="button" onClick={() => openReserve()}>
              Hold list <span className="sf-cart-count">({count} items)</span>
            </button>
          </div>
        </div>
      </div>

      <div className="sf-masthead">
        <Link href="/" className="sf-logo">
          <span className="sf-logo-main">{store.name}</span>
          <span className="sf-logo-sub">Secondhand books in Brockley</span>
        </Link>
      </div>

      <div className="sf-toolbar">
        <button
          type="button"
          className="sf-icon-btn"
          aria-expanded={menuOpen}
          aria-controls="site-drawer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <IconMenu />
        </button>
        <form className="sf-search" onSubmit={onSearch}>
          <label className="sr-only" htmlFor="shelf-search">
            Search author, title, or keyword
          </label>
          <input
            id="shelf-search"
            type="search"
            placeholder="author, title, or keyword"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
          />
          <button type="submit" className="sf-btn-search" aria-label="Search">
            <IconSearch />
          </button>
        </form>
      </div>

      <div
        className={`sf-drawer-backdrop ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      <aside
        id="site-drawer"
        className={`sf-drawer ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="sf-drawer-head">
          <strong>Menu</strong>
          <button
            type="button"
            className="sf-drawer-close"
            onClick={() => setMenuOpen(false)}
          >
            Close
          </button>
        </div>
        <ul className="sf-drawer-nav">
          {nav.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="sf-drawer-hint">
          Start with Our Story or Visit Us if you are new. Browse Featured Items
          when you know what you are looking for.
        </p>
      </aside>
    </header>
  );
}
