function App() {
  const [view, setView] = React.useState("home");      // home | detail | vehicles
  const [activeExp, setActiveExp] = React.useState(null);
  const [solid, setSolid] = React.useState(false);
  const [enq, setEnq] = React.useState({ open:false, subject:"" });

  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive:true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (v) => {
    setView(v);
    window.scrollTo(0, 0);
    setSolid(v !== "home");
  };
  const openExp = (id) => { setActiveExp(EXPERIENCES.find(e => e.id === id)); go("detail"); };
  const openEnq = (subject = "") => setEnq({ open:true, subject });

  // detail & vehicles screens always have a solid mast
  const mastSolid = solid || view !== "home";

  return (
    <div className="kit-root">
      <Masthead solid={mastSolid} active={view === "detail" ? "home" : view}
                onNav={go} onEnquire={() => openEnq("")} />
      <div className="viewport">
        {view === "home" && (
          <React.Fragment>
            <Hero onSearch={() => { const el = document.getElementById("experiences"); if (el) window.scrollTo({ top: el.offsetTop - 74, behavior: "smooth" }); }}
                  onEnquire={() => openEnq("")} />
            <Experiences onOpen={openExp} />
            <WhyBand />
            <VehiclesTeaser onAll={() => go("vehicles")} onEnquire={(n) => openEnq(n)} />
            <Footer onNav={go} />
          </React.Fragment>
        )}
        {view === "detail" && (
          <React.Fragment>
            <Detail exp={activeExp} onBack={() => go("home")} onEnquire={(n) => openEnq(n)} />
            <Footer onNav={go} />
          </React.Fragment>
        )}
        {view === "vehicles" && (
          <React.Fragment>
            <VehiclesScreen onEnquire={(n) => openEnq(n)} />
            <Footer onNav={go} />
          </React.Fragment>
        )}
      </div>
      <Enquiry open={enq.open} subject={enq.subject} onClose={() => setEnq({ open:false, subject:"" })} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
