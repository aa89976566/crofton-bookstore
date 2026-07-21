import { store } from "@/data/store";
import { asset } from "@/lib/paths";

export function About() {
  return (
    <section id="about" className="db-block db-container">
      <h2>About</h2>
      <figure className="sf-visit-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/hero-04-interior.jpg")}
          alt="Secondhand books on wooden shelves inside Crofton Books"
        />
      </figure>
      {store.about.map((para) => (
        <p key={para.slice(0, 28)}>{para}</p>
      ))}
      <p>
        Owner: {store.owner}. Est. {store.established}. {store.philosophy}
      </p>
      <p>{store.accessibility}</p>
      <div className="db-cta-row">
        <a className="btn btn-ink" href="#visit">
          Plan your visit
        </a>
        <a className="btn btn-ghost" href="#featured">
          Pick from the shelves
        </a>
      </div>
    </section>
  );
}
