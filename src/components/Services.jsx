import React from 'react';
import { Activity, ArrowRight, Bone, Dumbbell, HeartPulse, RadioTower, ShieldPlus } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Sports Injury Management',
    text: 'Return-to-play programs for sprains, strains, ligament injuries, mobility deficits, and performance recovery.',
  },
  {
    icon: Bone,
    title: 'Post-Surgery Rehabilitation',
    text: 'Progressive rehabilitation after orthopedic procedures to restore strength, range, balance, and confidence.',
  },
  {
    icon: HeartPulse,
    title: 'Back & Neck Pain Relief',
    text: 'Hands-on therapy, posture correction, and corrective exercise for chronic spinal pain and stiffness.',
  },
  {
    icon: RadioTower,
    title: 'Advanced Electrotherapy',
    text: 'Modern modalities for pain control, muscle activation, circulation, tissue repair, and faster functional recovery.',
  },
  {
    icon: Activity,
    title: 'Mobility Restoration',
    text: 'Precision movement screening and mobility plans for better walking, bending, lifting, and daily activity.',
  },
  {
    icon: ShieldPlus,
    title: 'Senior Physiotherapy',
    text: 'Safe balance, fall prevention, joint care, and strength programs tailored for older adults.',
  },
];

function Services() {
  return (
    <section id="services" className="section-shell py-24 lg:py-28">
      <div className="reveal mx-auto mb-12 max-w-3xl text-center">
        <p className="eyebrow">Specialized Services</p>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-[-0.055em] text-navy sm:text-5xl">
          Expert treatment plans with clinical precision and premium comfort.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Each program is built around your diagnosis, movement goals, and lifestyle so recovery feels focused, measurable, and safe.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, text }) => (
          <article key={title} className="reveal group rounded-[2rem] border border-slate-200/80 bg-white p-7 shadow-[0_18px_50px_rgba(10,22,40,0.08)] transition duration-300 hover:-translate-y-2 hover:border-electric/50 hover:shadow-glow">
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-electric to-cyan-400 text-white shadow-lg shadow-electric/25 transition group-hover:scale-105">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="font-display text-xl font-extrabold tracking-[-0.035em] text-navy">{title}</h3>
            <p className="mt-3 min-h-[6.2rem] leading-7 text-slate-600">{text}</p>
            <a href="#appointment" className="mt-5 inline-flex items-center gap-2 font-extrabold text-electric">
              Book this service
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
