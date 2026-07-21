import { store } from "@/data/store";

export function HomeHero() {
  return (
    <section className="home-hero" aria-label="Welcome">
      <p className="stamp-label">Used &amp; found in Brockley</p>
      <p className="home-hero__brand">{store.name}</p>
      <p className="home-hero__place">{store.tagline}</p>
      <p className="home-hero__lede">{store.shortPitch}</p>
    </section>
  );
}

export function NewsSection() {
  return (
    <section id="news" className="panel-block">
      <h2>Shop notes</h2>
      <p>{store.events}</p>
      <p>
        Follow{" "}
        <a href={store.instagram} target="_blank" rel="noreferrer">
          {store.instagramHandle}
        </a>{" "}
        for opening times and what just landed in the pavement crates.
      </p>
    </section>
  );
}

export function SellSection() {
  return (
    <section id="sell" className="panel-block">
      <h2>Sell to us</h2>
      <p>
        We buy good used books: literary fiction, poetry, modern classics,
        curious non fiction, and the odd rare or inscribed copy.
      </p>
      <p>
        Email{" "}
        <a href={`mailto:${store.reserveEmail}`}>{store.reserveEmail}</a> or call{" "}
        <a href={store.phoneHref}>{store.phone}</a> before large drop offs. Fair
        prices, no pressure.
      </p>
    </section>
  );
}
