function Detail({ exp, onBack, onEnquire }) {
  useLucide();
  if (!exp) return null;
  return (
    <div className="screen">
      <section className="dhero">
        <Photo variant={exp.photo} className="dhero__bg" label={exp.park} />
        <div className="hero__scrim"></div>
        <div className="container dhero__content">
          <button className="crumb" onClick={onBack}><i data-lucide="arrow-left"></i>All safaris</button>
          <span className={`tag tag--${exp.catClass}`}><i data-lucide={exp.icon}></i>{exp.cat}</span>
          <h1 className="dhero__title">{exp.title}</h1>
          <div className="dhero__facts">
            <span className="fact fact--light"><i data-lucide="map-pin"></i>{exp.park}</span>
            <span className="fact fact--light"><i data-lucide="clock"></i>{exp.days}</span>
            <span className="fact fact--light"><i data-lucide="users"></i>{exp.group}</span>
            <span className="fact fact--light"><i data-lucide="footprints"></i>{exp.grade}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container dbody">
          <div className="dmain">
            <p className="dlede">{exp.blurb}</p>

            <h3 className="dh3">Day by day</h3>
            <ol className="itin">
              {exp.days_list.map((d, i) => (
                <li className="itin__item" key={i}>
                  <div className="itin__marker"><span>{i+1}</span></div>
                  <div className="itin__body">
                    <div className="itin__day">{d.d} · <strong>{d.t}</strong></div>
                    <p className="itin__text">{d.b}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h3 className="dh3">What's included</h3>
            <ul className="incl">
              {exp.includes.map(it => <li key={it}><i data-lucide="check"></i>{it}</li>)}
            </ul>
          </div>

          <aside className="dside">
            <div className="bookcard">
              <div className="bookcard__price"><span>from</span><b>{exp.price}</b><span>per person</span></div>
              <div className="bookcard__rows">
                <div className="bookcard__row"><i data-lucide="clock"></i>{exp.days}</div>
                <div className="bookcard__row"><i data-lucide="users"></i>{exp.group}</div>
                <div className="bookcard__row"><i data-lucide="badge-check"></i>Permits included</div>
              </div>
              <button className="btn btn--primary bookcard__cta" onClick={() => onEnquire(exp.title)}>Enquire about this trip</button>
              <button className="btn btn--outline bookcard__cta" onClick={() => onEnquire(exp.title)}><i data-lucide="message-circle"></i>Ask a question</button>
              <div className="bookcard__note"><i data-lucide="shield-check"></i>No payment now — we'll tailor a quote.</div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
window.Detail = Detail;
