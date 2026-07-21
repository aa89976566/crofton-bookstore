import { store } from "@/data/store";

export function Footer() {
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
              <a href="#shop">Browse</a>
            </li>
            <li>
              <a href="#sell">Selling Books</a>
            </li>
            <li>
              <a href="#how">Reserve</a>
            </li>
            <li>
              <a href="#condition">Condition</a>
            </li>
            <li>
              <a href="#visit">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <p>
            Online display only. Hold by email. No account required.
          </p>
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
