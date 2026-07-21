import { store } from "@/data/store";

export function HomeHero() {
  return (
    <section className="home-hero" aria-label="Welcome">
      <p className="home-hero__brand">{store.name}</p>
      <p className="home-hero__place">{store.tagline}</p>
      <p className="home-hero__lede">{store.shortPitch}</p>
    </section>
  );
}

export function NewsSection() {
  return (
    <section id="news" className="panel-block">
      <h2>News</h2>
      <p>{store.events}</p>
      <p>
        Follow{" "}
        <a href={store.instagram} target="_blank" rel="noreferrer">
          {store.instagramHandle}
        </a>{" "}
        for opening times and what just arrived on the pavement piles.
      </p>
    </section>
  );
}

export function SellSection() {
  return (
    <section id="sell" className="panel-block">
      <h2>Sell</h2>
      <p>
        Bring boxes of good used books to the shop. We look for literary fiction,
        poetry, modern classics, interesting non fiction and the odd rare find.
      </p>
      <p>
        Email{" "}
        <a href={`mailto:${store.reserveEmail}`}>{store.reserveEmail}</a> or call{" "}
        <a href={store.phoneHref}>{store.phone}</a> before large drop offs.
      </p>
    </section>
  );
}
