import { store } from "@/data/store";

export function About() {
  return (
    <section id="about" className="info-block">
      <div className="wrapper narrow">
        <h2>About</h2>
        {store.about.map((para) => (
          <p key={para.slice(0, 28)}>{para}</p>
        ))}
        <p>{store.events}</p>
        <p>
          Owner · {store.owner}
          <br />
          Est. {store.established}
        </p>
      </div>
    </section>
  );
}
