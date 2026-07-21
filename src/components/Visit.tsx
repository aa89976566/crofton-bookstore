import { store } from "@/data/store";

export function Visit() {
  return (
    <section id="visit" className="sf-block">
      <h2>Visit Us</h2>
      <p>
        Come in person when you can. The online shelf is only a slice of what is
        on the floor at {store.address.line1}.
      </p>
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
      <div className="sf-cta-row">
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
        <a className="btn btn-ghost" href={store.instagram} target="_blank" rel="noreferrer">
          Check hours on Instagram
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
      <p className="sf-note">{store.hoursNote}</p>
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
