function Enquiry({ open, subject, onClose }) {
  useLucide();
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => { if (open) setSent(false); }, [open]);
  if (!open) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__panel rise" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}><i data-lucide="x"></i></button>
        {!sent ? (
          <React.Fragment>
            <span className="eyebrow">Plan your trip</span>
            <h2 className="modal__title">Tell us your Uganda dream</h2>
            <p className="modal__sub">{subject ? <>About: <strong>{subject}</strong>. </> : ""}A real person from our
              Kampala team replies within 24 hours — no bots, no obligation.</p>
            <form className="form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
              <div className="form__row">
                <label className="field"><span>Full name</span><input required placeholder="Jane Traveller" /></label>
                <label className="field"><span>Email</span><input required type="email" placeholder="jane@email.com" /></label>
              </div>
              <div className="form__row">
                <label className="field"><span>Travel dates</span><input placeholder="Aug 2026 (flexible)" /></label>
                <label className="field"><span>Travellers</span>
                  <select defaultValue="2"><option>1</option><option>2</option><option>3–4</option><option>5+</option></select>
                </label>
              </div>
              <label className="field"><span>What are you hoping to see &amp; do?</span>
                <textarea rows="3" placeholder="Gorillas in Bwindi, a few days on safari, self-drive between parks…"></textarea>
              </label>
              <button className="btn btn--primary form__submit" type="submit">Send enquiry <i data-lucide="send"></i></button>
            </form>
          </React.Fragment>
        ) : (
          <div className="sent">
            <div className="sent__check"><i data-lucide="check"></i></div>
            <h2 className="modal__title">Enquiry sent</h2>
            <p className="modal__sub">Thank you. A Kayigi trip planner will email you within 24 hours to start
              shaping your itinerary. Webale — see you in Uganda.</p>
            <button className="btn btn--primary" onClick={onClose}>Back to browsing</button>
          </div>
        )}
      </div>
    </div>
  );
}
window.Enquiry = Enquiry;
