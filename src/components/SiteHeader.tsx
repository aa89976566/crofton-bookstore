"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { store } from "@/data/store";
import { useShop } from "./ShopContext";

const nav = [
  { href: "#shop", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#shop", label: "New Arrivals" },
  { href: "#shop", label: "Browse" },
  { href: "#how", label: "Reserve" },
  { href: "#sell", label: "Selling Books" },
  { href: "#visit", label: "Contact" },
];

export function SiteHeader() {
  const { count, openReserve, query, setQuery } = useShop();
  const [menuOpen, setMenuOpen] = useState(false);
  const [localQuery, setLocalQuery] = useState(query);

  function onSearch(e: FormEvent) {
    e.preventDefault();
    setQuery(localQuery);
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <header className="sf-header">
      <div className="sf-util">
        <div className="sf-container sf-util-inner">
          <div className="sf-util-left">
            <a href={`mailto:${store.reserveEmail}`}>Email us</a>
            <span className="sf-sep">|</span>
            <button type="button" onClick={() => openReserve()}>
              Hold list <span className="sf-cart-count">({count})</span>
            </button>
          </div>
          <form className="sf-search" onSubmit={onSearch}>
            <label className="sr-only" htmlFor="shelf-search">
              Search
            </label>
            <input
              id="shelf-search"
              type="search"
              placeholder="Search"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
            />
            <button type="submit" className="sf-btn-search">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="sf-masthead">
        <div className="sf-container">
          <Link href="/" className="sf-logo">
            <span className="sf-logo-main">{store.name}</span>
            <span className="sf-logo-sub">Secondhand books in Brockley</span>
          </Link>
        </div>
      </div>

      <nav className="sf-navbar" aria-label="Primary">
        <div className="sf-container sf-navbar-inner">
          <button
            type="button"
            className="sf-menu-toggle"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            Menu
          </button>
          <ul className={`sf-nav ${menuOpen ? "is-open" : ""}`}>
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
