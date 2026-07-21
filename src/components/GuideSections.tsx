import { conditionGuide } from "@/data/books";
import { store } from "@/data/store";

export function HowToReserve() {
  return (
    <section id="how" className="sf-block">
      <h2>How to reserve</h2>
      <p>
        There is no checkout and no account. You browse, hold, and email. We
        confirm what we can keep aside for you.
      </p>
      <ol className="sf-steps">
        {store.reserveHow.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <div className="sf-cta-row">
        <a className="btn btn-ink" href="#featured">
          Start with featured items
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
    <section id="condition" className="sf-block">
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
