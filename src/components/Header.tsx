"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { store } from "@/data/store";
import { useReserve } from "./ReserveContext";

const nav = [
  { href: "#shelf", label: "Shelf" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
  { href: "#reserve", label: "Reserve" },
];

export function Header() {
  const { count, open, toggle } = useReserve();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          Menu
        </button>

        <Link href="/" className="brand-mark" onClick={() => setMenuOpen(false)}>
          <span className="brand-name">{store.name}</span>
          <span className="brand-place">{store.tagline}</span>
        </Link>

        <nav id="site-nav" className={`site-nav ${menuOpen ? "is-open" : ""}`}>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="reserve-chip"
          onClick={() => {
            setMenuOpen(false);
            toggle();
            if (!count) open();
          }}
          aria-label={`Open reserve list, ${count} items`}
        >
          Reserve <span className="reserve-count">{count}</span>
        </button>
      </div>
    </header>
  );
}
