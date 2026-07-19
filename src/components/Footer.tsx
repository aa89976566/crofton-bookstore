import { store } from "@/data/store";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-brand">
          {store.name} {store.tagline}
        </p>
        <p>
          {store.address.line1}, {store.address.line2}
        </p>
        <p className="footer-meta">
          Online display only · Reserve by email · No accounts
        </p>
        <p className="footer-credit">
          Background texture adapted from D Sharon Pruitt (CC BY 2.0)
        </p>
      </div>
    </footer>
  );
}
