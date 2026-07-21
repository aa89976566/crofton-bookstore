import { store } from "@/data/store";

export function About() {
  return (
    <section id="about" className="sf-block">
      <h2>About</h2>
      {store.about.map((para) => (
        <p key={para.slice(0, 28)}>{para}</p>
      ))}
      <p>
        Owner: {store.owner}. Est. {store.established}. {store.philosophy}
      </p>
      <p>{store.accessibility}</p>
      <div className="sf-cta-row">
        <a className="btn btn-ink" href="#visit">
          Plan your visit
        </a>
        <a className="btn btn-ghost" href="#featured">
          Browse featured items
        </a>
        <a className="btn btn-ghost" href="#how">
          How to reserve
        </a>
      </div>
    </section>
  );
}
