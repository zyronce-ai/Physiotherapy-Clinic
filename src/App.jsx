import React, { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Services from './components/Services.jsx';
import AppointmentForm from './components/AppointmentForm.jsx';
import ClinicTimings from './components/ClinicTimings.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-cloud text-navy">
      <Hero />
      <Stats />
      <Services />
      <section id="appointment" className="section-shell grid gap-8 pb-24 pt-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
        <AppointmentForm />
        <ClinicTimings />
      </section>
      <Footer />
      <a className="whatsapp-button" href="https://wa.me/916353960524" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <svg className="relative z-10 h-8 w-8 fill-current" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.01 4.01c-6.61 0-11.98 5.28-11.98 11.79 0 2.08.56 4.11 1.61 5.9L4 28l6.46-1.6a12.18 12.18 0 0 0 5.55 1.36c6.61 0 11.98-5.28 11.98-11.79S22.62 4.01 16.01 4.01Zm0 21.72c-1.79 0-3.54-.47-5.08-1.36l-.36-.21-3.83.95.98-3.62-.24-.37a9.67 9.67 0 0 1-1.48-5.12c0-5.39 4.49-9.77 10.01-9.77s10.01 4.38 10.01 9.77-4.49 9.73-10.01 9.73Zm5.49-7.29c-.3-.15-1.78-.86-2.05-.96-.28-.1-.48-.15-.68.15-.2.29-.78.95-.95 1.15-.18.2-.35.22-.65.07-.3-.15-1.27-.46-2.42-1.47-.89-.78-1.5-1.75-1.68-2.04-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.03-.52-.08-.15-.68-1.61-.93-2.2-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.01-1.05 2.46s1.08 2.86 1.23 3.06c.15.2 2.13 3.19 5.17 4.47.72.31 1.29.5 1.73.64.73.23 1.39.2 1.91.12.58-.08 1.78-.71 2.03-1.4.25-.69.25-1.28.18-1.4-.08-.13-.28-.2-.58-.35Z" />
        </svg>
      </a>
    </main>
  );
}

export default App;
