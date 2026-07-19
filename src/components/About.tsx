import { store } from "@/data/store";

export function About() {
  return (
    <section id="about" className="about section">
      <div className="section-intro">
        <p className="eyebrow">About</p>
        <h2>A bookshop for everyone</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          {store.about.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
          <p>{store.events}</p>
        </div>
        <dl className="about-facts">
          <div>
            <dt>Founded</dt>
            <dd>{store.established}</dd>
          </div>
          <div>
            <dt>Owner</dt>
            <dd>{store.owner}</dd>
          </div>
          <div>
            <dt>Spirit</dt>
            <dd>{store.philosophy}</dd>
          </div>
          <div>
            <dt>Follow</dt>
            <dd>
              <a href={store.instagram} target="_blank" rel="noreferrer">
                {store.instagramHandle}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
