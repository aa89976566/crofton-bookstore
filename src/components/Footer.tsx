import { store } from "@/data/store";

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-brand">{store.name}</p>
          <p>
            {store.address.line1}
            <br />
            {store.address.line2}
          </p>
        </div>
        <div>
          <p>
            <a href={store.phoneHref}>{store.phone}</a>
          </p>
          <p>
            <a href={`mailto:${store.reserveEmail}`}>{store.reserveEmail}</a>
          </p>
          <p>
            <a href={store.instagram} target="_blank" rel="noreferrer">
              {store.instagramHandle}
            </a>
          </p>
        </div>
        <div>
          <ul className="footer-links">
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#sell">Sell to us</a>
            </li>
            <li>
              <a href="#shop">Shelves</a>
            </li>
            <li>
              <a href="#how">Reserve</a>
            </li>
            <li>
              <a href="#visit">Visit</a>
            </li>
          </ul>
          <p className="footer-meta">Secondhand shelves. Hold by email.</p>
        </div>
      </div>
    </footer>
  );
}
