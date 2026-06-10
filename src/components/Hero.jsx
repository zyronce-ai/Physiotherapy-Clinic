import React from 'react';
import { Award, CalendarCheck, CirclePlay, ShieldCheck, Sparkles, UsersRound } from 'lucide-react';

const trustBadges = [
  { icon: ShieldCheck, label: 'Certified Therapists' },
  { icon: Award, label: '10+ Years Experience' },
  { icon: UsersRound, label: '5000+ Patients Treated' },
];

function Hero() {
  return (
    <section id="home" className="relative min-h-[760px] overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=78')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/82 to-navy/30" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cloud to-transparent" />

      <nav className="section-shell relative z-20 flex items-center justify-between py-5">
        <a href="#home" className="flex items-center gap-3 font-display text-xl font-extrabold tracking-[-0.04em]">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-electric to-cyan-400 shadow-glow">P</span>
          PhysioCare
        </a>
        <div className="hidden items-center gap-8 text-sm font-bold text-white/72 md:flex">
          <a className="transition hover:text-white" href="#services">Services</a>
          <a className="transition hover:text-white" href="#appointment">Appointment</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
        </div>
        <a href="#appointment" className="rounded-full bg-white px-5 py-3 text-sm font-extrabold text-navy shadow-lg transition hover:-translate-y-0.5 hover:bg-gold hover:text-white">
          Book Now
        </a>
      </nav>

      <div className="section-shell relative z-10 flex min-h-[650px] items-center pb-24 pt-12">
        <div className="reveal max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-gold" />
            Premium physiotherapy and rehabilitation clinic
          </div>
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.065em] sm:text-6xl lg:text-8xl">
            Regain Your{' '}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-gold bg-clip-text text-transparent">Strength.</span>
            <br />Live Without Pain.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
            Advanced physiotherapy for pain relief, sports recovery, and post-surgery rehabilitation in a calm, medical-grade environment.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#appointment" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-cyan-400 px-7 py-4 font-extrabold shadow-glow transition hover:-translate-y-1">
              <CalendarCheck className="h-5 w-5" />
              Book Appointment
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-extrabold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:text-navy">
              <CirclePlay className="h-5 w-5" />
              Our Services
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur-xl">
                <Icon className="mb-3 h-6 w-6 text-gold" />
                <p className="text-sm font-extrabold text-white/90">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
