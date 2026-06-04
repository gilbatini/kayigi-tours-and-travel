function Footer({ onNav }) {
  useLucide();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="../../assets/logo-full-white.png" alt="Kayigi Tours & Travel" className="footer__logo" />
          <p className="footer__tag">Ugandan-owned safaris &amp; 4×4 hire. Plot 14, Kampala Road, Kampala, Uganda.</p>
          <div className="footer__social">
            <a><i data-lucide="camera"></i></a>
            <a><i data-lucide="users"></i></a>
            <a><i data-lucide="mail"></i></a>
            <a><i data-lucide="phone"></i></a>
          </div>
        </div>
        <div className="footer__cols">
          <div>
            <h4>Safaris</h4>
            <a onClick={()=>onNav("home")}>Gorilla trekking</a>
            <a onClick={()=>onNav("home")}>Chimp tracking</a>
            <a onClick={()=>onNav("home")}>Savanna game drives</a>
            <a onClick={()=>onNav("home")}>Grand Uganda tour</a>
          </div>
          <div>
            <h4>Vehicle hire</h4>
            <a onClick={()=>onNav("vehicles")}>Land Cruiser TZ</a>
            <a onClick={()=>onNav("vehicles")}>Rooftop tents</a>
            <a onClick={()=>onNav("vehicles")}>Self-drive</a>
            <a onClick={()=>onNav("vehicles")}>Driver-guides</a>
          </div>
          <div>
            <h4>Kayigi</h4>
            <a>About us</a>
            <a>Travel journal</a>
            <a>Responsible travel</a>
            <a>Contact</a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        <div className="container footer__barin">
          <span>© 2026 Kayigi Tours &amp; Travel</span>
          <span>www.kayigitoursandtravel.com</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
