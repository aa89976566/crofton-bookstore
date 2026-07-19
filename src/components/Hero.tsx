export function Hero() {
  return (
    <section className="hero" aria-label="Welcome">
      <div className="hero-copy">
        <p className="hero-brand animate-rise">Crofton Books</p>
        <h1 className="hero-title animate-rise delay-1">
          Organised chaos on Brockley Road
        </h1>
        <p className="hero-lede animate-rise delay-2">
          Secondhand, antiquarian, rare — and a few new titles worth the train
          from town. Browse the online shelf and email us to reserve.
        </p>
        <div className="hero-actions animate-rise delay-3">
          <a className="btn btn-ink" href="#shelf">
            Browse the shelf
          </a>
          <a className="btn btn-ghost" href="#visit">
            Plan a visit
          </a>
        </div>
      </div>
    </section>
  );
}
