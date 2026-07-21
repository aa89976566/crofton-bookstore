import { store } from "@/data/store";
import { asset } from "@/lib/paths";

export function Visit() {
  return (
    <section id="visit" className="db-block db-container">
      <h2>Visit Us</h2>
      <p>
        Come in person when you can. The online shelf is only a slice of what is
        on the floor at {store.address.line1}.
      </p>
      <figure className="sf-visit-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/visit-storefront.jpg")}
          alt="Crofton Books storefront on Brockley Road"
        />
      </figure>
      <p>
        <strong style={{ color: "var(--ink)" }}>{store.name}</strong>
        <br />
        {store.address.line1}
        <br />
        {store.address.line2}
      </p>
      <p>
        Phone: <a href={store.phoneHref}>{store.phone}</a>
        <br />
        Email:{" "}
        <a href={`mailto:${store.reserveEmail}`}>{store.reserveEmail}</a>
      </p>
      <div className="db-cta-row">
        <a
          className="btn btn-ink"
          href={store.mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open in Google Maps
        </a>
        <a className="btn btn-ghost" href={`mailto:${store.reserveEmail}`}>
          Email before you visit
        </a>
      </div>
      <h3>Opening hours</h3>
      <ul className="sf-hours">
        {store.hours.map((row) => (
          <li key={row.day}>
            <span>{row.day}</span>
            <span>{row.time}</span>
          </li>
        ))}
      </ul>
      <p className="db-note">{store.hoursNote}</p>
      <h3>Trains</h3>
      <ul className="sf-plain">
        {store.transport.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <p>{store.accessibility}</p>
    </section>
  );
}
