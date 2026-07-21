import { store } from "@/data/store";

export function Visit() {
  return (
    <section id="visit" className="sf-block sf-container">
      <h2>Contact</h2>
      <p>
        <strong>{store.name}</strong>
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
      <p>
        <a href={store.mapsUrl} target="_blank" rel="noreferrer">
          Open in Google Maps
        </a>
      </p>
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
