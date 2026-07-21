"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { store } from "@/data/store";
import { useShop } from "./ShopContext";

const nav = [
  { href: "#featured", label: "From the shelves" },
  { href: "#shop", label: "Browse" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
];

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
    <header className="db-header">
      <div className="db-util">
        <div className="db-container db-util-inner">
          <a href={`mailto:${store.reserveEmail}`}>Email</a>
          <span className="db-sep">·</span>
          <button type="button" onClick={() => openReserve()}>
            Hold list ({count})
          </button>
          <span className="db-sep">·</span>
          <a href={store.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>

      <div className="db-masthead">
        <div className="db-container db-masthead-inner">
          <button
            type="button"
            className="db-menu-btn"
            aria-expanded={menuOpen}
            aria-controls="site-drawer"
            onClick={() => setMenuOpen((v) => !v)}
          >
            Menu
          </button>
          <Link href="/" className="db-logo">
            <span className="db-logo-main">{store.name}</span>
            <span className="db-logo-sub">for readers in Brockley</span>
          </Link>
          <form className="db-search" onSubmit={onSearch}>
            <label className="sr-only" htmlFor="shelf-search">
              Search
            </label>
            <input
              id="shelf-search"
              type="search"
              placeholder="Search titles or authors"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>

      <nav className="db-nav" aria-label="Primary">
        <ul className="db-container db-nav-list">
          {nav.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`db-drawer-backdrop ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      <aside
        id="site-drawer"
        className={`db-drawer ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="db-drawer-head">
          <strong>Menu</strong>
          <button type="button" onClick={() => setMenuOpen(false)}>
            Close
          </button>
        </div>
        <ul>
          {nav.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
}
