import { store } from "@/data/store";

export function HomeHero() {
  return (
    <section className="sf-intro sf-container">
      <p>
        Independent secondhand bookshop at {store.address.line1},{" "}
        {store.address.line2}. Browse online, open a title for condition notes,
        then email us to hold a copy for collection.
      </p>
    </section>
  );
}

export function NewsSection() {
  return (
    <section id="news" className="sf-block sf-container">
      <h2>New Arrivals</h2>
      <p>{store.events}</p>
      <p>
        Follow{" "}
        <a href={store.instagram} target="_blank" rel="noreferrer">
          {store.instagramHandle}
        </a>{" "}
        for what just arrived in the shop.
      </p>
    </section>
  );
}

export function SellSection() {
  return (
    <section id="sell" className="sf-block sf-container">
      <h2>Selling Books</h2>
      <p>
        We buy good used books: literary fiction, poetry, modern classics,
        curious non fiction, and the odd rare or inscribed copy.
      </p>
      <p>
        Email{" "}
        <a href={`mailto:${store.reserveEmail}`}>{store.reserveEmail}</a> or
        call <a href={store.phoneHref}>{store.phone}</a> before large drop offs.
      </p>
    </section>
  );
}
