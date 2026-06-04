function WhyBand() {
  useLucide();
  const stats = [
    { n:"12", l:"Years guiding Uganda" },
    { n:"6", l:"National parks covered" },
    { n:"100%", l:"Permits secured for you" },
    { n:"4.9★", l:"From 380+ travellers" },
  ];
  return (
    <section className="why">
      <div className="container why__inner">
        <div className="why__lead">
          <span className="eyebrow" style={{color:"var(--gold-soft)"}}>Why travel with Kayigi</span>
          <h2 className="why__title">Local guides. Real wilderness.<br/>Nothing left to chance.</h2>
          <p className="why__text">We're a Ugandan-owned operator based in Kampala. Our driver-guides grew up
            beside these parks — they read the forest, fix the truck, and get you to the gorillas. We handle the
            permits, the lodges and the logistics so your trip simply works.</p>
        </div>
        <div className="why__stats">
          {stats.map(s => (
            <div className="why__stat" key={s.l}>
              <div className="why__num">{s.n}</div>
              <div className="why__lab">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.WhyBand = WhyBand;
