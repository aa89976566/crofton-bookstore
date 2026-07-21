import { conditionGuide } from "@/data/books";
import { store } from "@/data/store";

export function HowToReserve() {
  return (
    <section id="how" className="db-block db-container">
      <h2>How to reserve</h2>
      <p>
        There is no checkout and no account. Browse the shelves, hold a title,
        then email us. We confirm what we can keep aside.
      </p>
      <ol className="sf-steps">
        {store.reserveHow.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <div className="db-cta-row">
        <a className="btn btn-ink" href="#featured">
          Pick from the shelves
        </a>
        <a className="btn btn-ghost" href={`mailto:${store.reserveEmail}`}>
          Email {store.reserveEmail}
        </a>
      </div>
    </section>
  );
}

export function ConditionGuide() {
  return (
    <section id="condition" className="db-block db-container">
      <h2>Condition guide</h2>
      <p>
        Secondhand books are described honestly. Grades follow common
        antiquarian practice. Always read the notes on each title.
      </p>
      <dl className="sf-condition">
        {conditionGuide.map((row) => (
          <div key={row.grade}>
            <dt>{row.grade}</dt>
            <dd>{row.meaning}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
