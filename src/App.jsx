import React from 'react';

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

      <a className="whatsapp" href="https://wa.me/916353960524" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <span className="whatsapp-pulse" />
        <svg className="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.01 4.01c-6.61 0-11.98 5.28-11.98 11.79 0 2.08.56 4.11 1.61 5.9L4 28l6.46-1.6a12.18 12.18 0 0 0 5.55 1.36c6.61 0 11.98-5.28 11.98-11.79S22.62 4.01 16.01 4.01Zm0 21.72c-1.79 0-3.54-.47-5.08-1.36l-.36-.21-3.83.95.98-3.62-.24-.37a9.67 9.67 0 0 1-1.48-5.12c0-5.39 4.49-9.77 10.01-9.77s10.01 4.38 10.01 9.77-4.49 9.73-10.01 9.73Zm5.49-7.29c-.3-.15-1.78-.86-2.05-.96-.28-.1-.48-.15-.68.15-.2.29-.78.95-.95 1.15-.18.2-.35.22-.65.07-.3-.15-1.27-.46-2.42-1.47-.89-.78-1.5-1.75-1.68-2.04-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.03-.52-.08-.15-.68-1.61-.93-2.2-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.01-1.05 2.46s1.08 2.86 1.23 3.06c.15.2 2.13 3.19 5.17 4.47.72.31 1.29.5 1.73.64.73.23 1.39.2 1.91.12.58-.08 1.78-.71 2.03-1.4.25-.69.25-1.28.18-1.4-.08-.13-.28-.2-.58-.35Z" />
        </svg>
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
