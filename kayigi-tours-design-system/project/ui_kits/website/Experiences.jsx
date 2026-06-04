function ExperienceCard({ exp, onOpen }) {
  useLucide();
  return (
    <article className="xcard rise" onClick={() => onOpen(exp.id)}>
      <Photo variant={exp.photo} className="xcard__photo" label={exp.park}>
        <span className={`tag tag--${exp.catClass} xcard__tag`}><i data-lucide={exp.icon}></i>{exp.cat}</span>
        <span className="xcard__fav"><i data-lucide="heart"></i></span>
        <div className="photo__grad-b"></div>
      </Photo>
      <div className="xcard__body">
        <h3 className="xcard__title">{exp.title}</h3>
        <div className="xcard__loc"><i data-lucide="map-pin"></i>{exp.park}</div>
        <div className="xcard__foot">
          <div className="xcard__facts">
            <span className="fact"><i data-lucide="clock"></i>{exp.days}</span>
            <span className="fact"><i data-lucide="users"></i>{exp.group}</span>
          </div>
          <div className="xcard__price"><b>{exp.price}</b><span>per person</span></div>
        </div>
      </div>
    </article>
  );
}

function Experiences({ onOpen }) {
  useLucide();
  const [filter, setFilter] = React.useState("All");
  const filters = ["All", "Gorilla Trek", "Chimps", "Game Drive"];
  const list = filter === "All" ? EXPERIENCES : EXPERIENCES.filter(e => e.cat === filter);
  return (
    <section className="section" id="experiences">
      <div className="container">
        <div className="section__head">
          <div>
            <span className="eyebrow">Signature journeys</span>
            <h2 className="section__title">Choose your Uganda</h2>
          </div>
          <div className="filters">
            {filters.map(f => (
              <button key={f} className={`filter ${filter === f ? "is-active" : ""}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
        </div>
        <div className="xgrid">
          {list.map(e => <ExperienceCard key={e.id} exp={e} onOpen={onOpen} />)}
        </div>
      </div>
    </section>
  );
}
window.ExperienceCard = ExperienceCard;
window.Experiences = Experiences;
