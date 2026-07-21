import { store } from "@/data/store";

export function About() {
  return (
    <section id="about" className="sf-block sf-container">
      <h2>About</h2>
      {store.about.map((para) => (
        <p key={para.slice(0, 28)}>{para}</p>
      ))}
      <p>
        Owner: {store.owner}. Est. {store.established}.
      </p>
    </section>
  );
}
