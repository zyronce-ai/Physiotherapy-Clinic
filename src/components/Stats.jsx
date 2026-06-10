import React, { useEffect, useState } from 'react';
import { BadgeCheck, HeartPulse, Trophy, UsersRound } from 'lucide-react';

const stats = [
  { icon: Trophy, value: 10, suffix: '+', label: 'Years Experience' },
  { icon: UsersRound, value: 5000, suffix: '+', label: 'Happy Patients' },
  { icon: BadgeCheck, value: 24, suffix: '/7', label: 'Recovery Guidance' },
  { icon: HeartPulse, value: 98, suffix: '%', label: 'Patient Satisfaction' },
];

function Stats() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId;
    const startedAt = performance.now();

    const tick = (now) => {
      const next = Math.min((now - startedAt) / 1400, 1);
      setProgress(next);
      if (next < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="section-shell relative z-20 -mt-16">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, suffix, label }) => (
          <div key={label} className="reveal glass-card rounded-[1.7rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-electric/30 hover:shadow-glow">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-electric to-cyan-400 text-white shadow-lg">
              <Icon className="h-6 w-6" />
            </div>
            <div className="font-display text-4xl font-extrabold tracking-[-0.05em] text-navy">
              {Math.round(value * progress).toLocaleString()}{suffix}
            </div>
            <p className="mt-2 text-sm font-bold text-slate-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
