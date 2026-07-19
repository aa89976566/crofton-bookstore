import { store } from "@/data/store";

export function Visit() {
  return (
    <section id="visit" className="visit section">
      <div className="section-intro">
        <p className="eyebrow">Visit</p>
        <h2>315 Brockley Road</h2>
        <p>{store.hoursNote}</p>
      </div>

      <div className="visit-grid">
        <div>
          <h3>Hours</h3>
          <ul className="hours-list">
            {store.hours.map((row) => (
              <li key={row.day}>
                <span>{row.day}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Find us</h3>
          <p>
            {store.address.line1}
            <br />
            {store.address.line2}
          </p>
          <p className="visit-links">
            <a href={store.mapsUrl} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </p>
          <h3 className="subhead">Trains</h3>
          <ul className="plain-list">
            {store.transport.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="access-note">{store.accessibility}</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>
            Phone ·{" "}
            <a href={store.phoneHref}>{store.phone}</a>
          </p>
          <p>
            Reserve email ·{" "}
            <a href={`mailto:${store.reserveEmail}`}>{store.reserveEmail}</a>
          </p>
          <p>
            Instagram ·{" "}
            <a href={store.instagram} target="_blank" rel="noreferrer">
              {store.instagramHandle}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
