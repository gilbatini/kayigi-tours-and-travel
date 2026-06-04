function VehicleCard({ v, onEnquire }) {
  useLucide();
  return (
    <article className="vcard rise">
      <Photo variant={v.photo} className="vcard__photo" label={v.name}>
        <span className="tag tag--maroon vcard__tag"><i data-lucide="car-front"></i>4×4 Hire</span>
      </Photo>
      <div className="vcard__body">
        <h3 className="vcard__title">{v.name}</h3>
        <div className="vcard__meta">
          <span className="fact"><i data-lucide="users"></i>{v.seats}</span>
          <span className="fact"><i data-lucide="settings"></i>{v.trans}</span>
        </div>
        <ul className="vcard__specs">
          {v.specs.map(s => <li key={s}><i data-lucide="check"></i>{s}</li>)}
        </ul>
        <div className="vcard__foot">
          <div className="vcard__price"><b>{v.price}</b><span>/ day</span></div>
          <button className="btn btn--outline btn--sm" onClick={() => onEnquire(v.name)}>Reserve</button>
        </div>
      </div>
    </article>
  );
}

function VehiclesTeaser({ onAll, onEnquire }) {
  useLucide();
  return (
    <section className="section vteaser">
      <div className="container vteaser__inner">
        <div className="vteaser__text">
          <span className="eyebrow">Self-drive or driver-guide</span>
          <h2 className="section__title">Safari-ready 4×4 hire</h2>
          <p className="vteaser__p">Take the wheel yourself or travel with one of our driver-guides. Every
            Land Cruiser leaves our Kampala yard checked, kitted and ready for the parks — pop-top roofs,
            rooftop tents and full camping gear available.</p>
          <ul className="vteaser__list">
            <li><i data-lucide="shield-check"></i>Fully serviced & insured fleet</li>
            <li><i data-lucide="tent"></i>Camping &amp; rooftop-tent kits</li>
            <li><i data-lucide="headphones"></i>24/7 roadside support line</li>
          </ul>
          <button className="btn btn--primary" onClick={onAll}>Browse the fleet <i data-lucide="arrow-right"></i></button>
        </div>
        <div className="vteaser__card">
          <VehicleCard v={VEHICLES[0]} onEnquire={onEnquire} />
        </div>
      </div>
    </section>
  );
}

function VehiclesScreen({ onEnquire }) {
  useLucide();
  const [mode, setMode] = React.useState("driver");
  return (
    <div className="screen">
      <section className="subhero">
        <Photo variant="" className="subhero__bg" label="Land Cruiser · Kidepo road" />
        <div className="hero__scrim"></div>
        <div className="container subhero__content">
          <span className="eyebrow" style={{color:"var(--gold-soft)"}}>4×4 Vehicle Hire</span>
          <h1 className="subhero__title">Built for the parks.</h1>
          <p className="subhero__lead">Self-drive freedom or a driver-guide who knows every junction.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="vtoggle">
            <button className={mode==="driver"?"is-active":""} onClick={()=>setMode("driver")}>With driver-guide</button>
            <button className={mode==="self"?"is-active":""} onClick={()=>setMode("self")}>Self-drive</button>
          </div>
          <div className="vgrid">
            {VEHICLES.map(v => <VehicleCard key={v.id} v={v} onEnquire={onEnquire} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
window.VehicleCard = VehicleCard;
window.VehiclesTeaser = VehiclesTeaser;
window.VehiclesScreen = VehiclesScreen;
