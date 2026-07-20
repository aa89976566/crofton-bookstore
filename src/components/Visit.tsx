import { store } from "@/data/store";

export function Visit() {
  return (
    <section id="visit" className="info-block">
      <div className="wrapper narrow">
        <h2>Visit</h2>
        <p>
          {store.address.line1}
          <br />
          {store.address.line2}
        </p>
        <p>
          <a href={store.mapsUrl} target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
        </p>

        <h3>Hours</h3>
        <ul className="hours-list">
          {store.hours.map((row) => (
            <li key={row.day}>
              <span>{row.day}</span>
              <span>{row.time}</span>
            </li>
          ))}
        </ul>
        <p className="note">{store.hoursNote}</p>

        <h3>Trains</h3>
        <ul className="plain-list">
          {store.transport.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>{store.accessibility}</p>
      </div>
    </section>
  );
}
