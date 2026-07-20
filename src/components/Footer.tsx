import { store } from "@/data/store";

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="wrapper footer-grid">
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
              <a href="#shelf">Books</a>
            </li>
            <li>
              <a href="#how">How to reserve</a>
            </li>
            <li>
              <a href="#condition">Condition</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#visit">Visit</a>
            </li>
          </ul>
          <p className="footer-meta">Online display · Reserve by email</p>
          <p className="footer-credit">
            Background texture adapted from D Sharon Pruitt (CC BY 2.0)
          </p>
        </div>
      </div>
    </footer>
  );
}
