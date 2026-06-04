function Masthead({ solid, onNav, onEnquire, active }) {
  useLucide();
  const links = [
    { id:"home", label:"Safaris" },
    { id:"vehicles", label:"4×4 Hire" },
    { id:"about", label:"About" },
    { id:"journal", label:"Journal" },
  ];
  const isSolid = solid;
  return (
    <header className={`mast ${isSolid ? "mast--solid" : ""}`}>
      <div className="container mast__inner">
        <a className="mast__logo" onClick={() => onNav("home")}>
          <img src="../../assets/logo-full.png" className="mast__logo--dark" alt="Kayigi Tours & Travel" />
          <img src="../../assets/logo-full-white.png" className="mast__logo--light" alt="Kayigi Tours & Travel" />
        </a>
        <nav className="mast__nav">
          {links.map(l => (
            <a key={l.id} className={`mast__link ${active === l.id ? "is-active" : ""}`}
               onClick={() => onNav(l.id === "about" || l.id === "journal" ? active : l.id)}>{l.label}</a>
          ))}
        </nav>
        <div className="mast__right">
          <a className="mast__phone"><i data-lucide="phone"></i><span>+256 700 000 000</span></a>
          <button className="btn btn--primary btn--sm" onClick={onEnquire}>Plan my trip</button>
        </div>
      </div>
    </header>
  );
}
window.Masthead = Masthead;
