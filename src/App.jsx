const treatments = [
  {
    icon: '🏃',
    title: 'Sports Injury Management',
    text: 'Performance-focused recovery plans for sprains, strains, ligament injuries, and return-to-sport conditioning.',
  },
  {
    icon: '🩺',
    title: 'Post-Surgery Rehabilitation',
    text: 'Structured rehabilitation after orthopedic procedures to rebuild mobility, stability, and confidence.',
  },
  {
    icon: '💆',
    title: 'Chronic Pain Relief',
    text: 'Evidence-led care for persistent back, neck, and joint pain with hands-on therapy and corrective exercise.',
  },
  {
    icon: '⚡',
    title: 'Advanced Electrotherapy',
    text: 'Modern modalities that support pain control, tissue healing, muscle activation, and faster functional recovery.',
  },
];

const stats = [
  { icon: '✦', value: '10+', label: 'Years Experience' },
  { icon: '♥', value: '5000+', label: 'Happy Patients' },
  { icon: '✓', value: 'Certified Experts' },
];

function App() {
  return (
    <main className="site-shell">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="PhysioCare home">
          <span className="brand-mark">P</span>
          <span>PhysioCare</span>
        </a>
        <div className="nav-links">
          <a href="#treatments">Treatments</a>
          <a href="#appointment">Appointment</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="tel:+15550193822">Call Now</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Premium Physiotherapy & Rehabilitation Clinic</p>
          <h1>Regain Your Strength. Live Without Pain.</h1>
          <p className="hero-copy">
            Expert-led physiotherapy designed around your body, lifestyle, and recovery goals.
            Experience modern pain relief, movement restoration, and long-term wellness care.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#appointment">Book Appointment</a>
            <a className="secondary-link" href="#treatments">Explore Treatments</a>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Clinic highlights">
        {stats.map((item) => (
          <div className="stat-card" key={item.label || item.value}>
            <span className="stat-icon">{item.icon}</span>
            <div>
              <strong>{item.value}</strong>
              {item.label && <p>{item.label}</p>}
            </div>
          </div>
        ))}
      </section>

      <section className="section treatments" id="treatments">
        <div className="section-heading">
          <p className="eyebrow">Specialized Treatments</p>
          <h2>Precision care for lasting recovery.</h2>
          <p>
            Our clinicians combine advanced assessment, manual therapy, and tailored exercise programs in a calm, medical-grade environment.
          </p>
        </div>
        <div className="treatment-grid">
          {treatments.map((treatment) => (
            <article className="treatment-card" key={treatment.title}>
              <span className="treatment-icon">{treatment.icon}</span>
              <h3>{treatment.title}</h3>
              <p>{treatment.text}</p>
              <a href="#appointment" aria-label={`Book appointment for ${treatment.title}`}>Learn more</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section appointment" id="appointment">
        <div className="booking-card">
          <div className="form-panel">
            <p className="eyebrow">Quick Appointment</p>
            <h2>Start your recovery with a specialist consultation.</h2>
            <form>
              <label>
                Full Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone" placeholder="+1 555 000 0000" />
              </label>
              <label>
                Treatment Needed
                <select name="treatment" defaultValue="">
                  <option value="" disabled>Select treatment</option>
                  <option>Sports Injury Management</option>
                  <option>Post-Surgery Rehabilitation</option>
                  <option>Chronic Pain Relief</option>
                  <option>Advanced Electrotherapy</option>
                </select>
              </label>
              <label>
                Preferred Date
                <input type="date" name="date" />
              </label>
              <label className="full-width">
                Message
                <textarea name="message" rows="4" placeholder="Tell us about your pain or recovery goals" />
              </label>
              <button className="primary-button form-button" type="submit">Request Appointment</button>
            </form>
          </div>
          <aside className="info-panel" id="contact">
            <div>
              <p className="eyebrow light">Clinic Timings</p>
              <h3>Open six days a week</h3>
              <ul>
                <li><span>Mon - Fri</span><strong>8:00 AM - 7:00 PM</strong></li>
                <li><span>Saturday</span><strong>9:00 AM - 4:00 PM</strong></li>
                <li><span>Sunday</span><strong>Emergency only</strong></li>
              </ul>
            </div>
            <div className="quick-contact">
              <h3>Quick Contact</h3>
              <p>Phone: <a href="tel:+15550193822">+1 (555) 019-3822</a></p>
              <p>Email: <a href="mailto:care@physiocare.com">care@physiocare.com</a></p>
              <p>Location: 28 Wellness Avenue, Medical District</p>
            </div>
          </aside>
        </div>
      </section>

      <a className="whatsapp" href="https://wa.me/15550193822" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        WhatsApp
      </a>

      <footer className="footer">
        <div>
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">P</span>
            <span>PhysioCare</span>
          </a>
          <p>Premium physiotherapy, rehabilitation, and pain management delivered with clinical precision and compassionate care.</p>
        </div>
        <div>
          <h4>Address</h4>
          <p>28 Wellness Avenue<br />Medical District, Suite 405</p>
        </div>
        <div>
          <h4>Social</h4>
          <div className="social-links">
            <a href="#home">Instagram</a>
            <a href="#home">Facebook</a>
            <a href="#home">LinkedIn</a>
          </div>
        </div>
        <p className="disclaimer">
          Medical disclaimer: Information on this website is for general guidance only and does not replace a professional diagnosis or individualized treatment plan.
        </p>
      </footer>
    </main>
  );
}

export default App;
