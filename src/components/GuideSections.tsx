import { conditionGuide } from "@/data/books";
import { store } from "@/data/store";

export function HowToReserve() {
  return (
    <section id="how" className="info-block">
      <div className="wrapper narrow">
        <h2>How to reserve</h2>
        <ol className="how-list">
          {store.reserveHow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ConditionGuide() {
  return (
    <section id="condition" className="info-block">
      <div className="wrapper narrow">
        <h2>Condition guide</h2>
        <p>
          Secondhand books are described honestly. Grades follow common
          antiquarian practice. Always read the notes on the title page.
        </p>
        <dl className="condition-dl">
          {conditionGuide.map((row) => (
            <div key={row.grade}>
              <dt>{row.grade}</dt>
              <dd>{row.meaning}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
