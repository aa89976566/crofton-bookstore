import { conditionGuide } from "@/data/books";
import { store } from "@/data/store";

export function HowToReserve() {
  return (
    <section id="how" className="sf-block sf-container">
      <h2>How to reserve</h2>
      <ol className="sf-steps">
        {store.reserveHow.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}

export function ConditionGuide() {
  return (
    <section id="condition" className="sf-block sf-container">
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
