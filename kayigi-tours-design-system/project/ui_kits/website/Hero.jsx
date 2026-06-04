function Hero({ onSearch, onEnquire }) {
  useLucide();
  return (
    <section className="hero">
      <Photo variant="photo--forest" className="hero__bg" label="Mountain gorilla · Bwindi" />
      <div className="hero__scrim"></div>
      <div className="container hero__content">
        <span className="eyebrow hero__eyebrow rise">Uganda · The Pearl of Africa</span>
        <h1 className="hero__title rise">Stand metres from a <em>mountain gorilla.</em></h1>
        <p className="hero__lead rise">Small-group safaris and self-drive 4×4 adventures across Uganda's
          forests and savannas — planned with guides who know these hills by name.</p>

        <div className="searchbar rise">
          <div className="searchbar__field">
            <label>Experience</label>
            <div className="searchbar__input"><i data-lucide="compass"></i><span>Gorilla trekking</span></div>
          </div>
          <div className="searchbar__div"></div>
          <div className="searchbar__field">
            <label>Park</label>
            <div className="searchbar__input"><i data-lucide="map-pin"></i><span>Bwindi Forest</span></div>
          </div>
          <div className="searchbar__div"></div>
          <div className="searchbar__field">
            <label>When</label>
            <div className="searchbar__input"><i data-lucide="calendar"></i><span className="muted">Add dates</span></div>
          </div>
          <button className="btn btn--primary searchbar__go" onClick={onSearch}>
            <i data-lucide="search"></i> Find trips
          </button>
        </div>

        <div className="hero__trust rise">
          <span><i data-lucide="badge-check"></i> Licensed Ugandan operator</span>
          <span><i data-lucide="star"></i> 12 years guiding</span>
          <span><i data-lucide="leaf"></i> Permits handled for you</span>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
