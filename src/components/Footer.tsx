"use client";

import { store } from "@/data/store";
import { useShop } from "./ShopContext";

export function Footer() {
  const { openHow } = useShop();

  return (
    <footer className="sf-footer">
      <div className="sf-container sf-footer-grid">
        <div>
          <strong>{store.name}</strong>
          <p>
            {store.address.line1}
            <br />
            {store.address.line2}
          </p>
          <p>
            <a href={store.phoneHref}>{store.phone}</a>
            <br />
            <a href={`mailto:${store.reserveEmail}`}>{store.reserveEmail}</a>
          </p>
        </div>
        <div>
          <ul className="sf-footer-links">
            <li>
              <a href="#featured">From the shelves</a>
            </li>
            <li>
              <a href="#shop">Browse</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#visit">Visit</a>
            </li>
            <li>
              <button type="button" onClick={openHow}>
                Reserve
              </button>
            </li>
          </ul>
        </div>
        <div>
          <p>Online display only. Hold by email. No account required.</p>
          <p>
            <a href={store.instagram} target="_blank" rel="noreferrer">
              {store.instagramHandle}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
