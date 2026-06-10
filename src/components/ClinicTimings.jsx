import React, { useMemo } from 'react';
import { Clock3, Mail, MapPin, Phone, SunMedium } from 'lucide-react';

const timings = [
  { day: 'Monday - Friday', time: '8:00 AM - 7:00 PM', days: [1, 2, 3, 4, 5], start: 8, end: 19 },
  { day: 'Saturday', time: '9:00 AM - 4:00 PM', days: [6], start: 9, end: 16 },
  { day: 'Sunday', time: 'Emergency Only', days: [0], start: null, end: null },
];

function ClinicTimings() {
  const isOpenNow = useMemo(() => {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours() + now.getMinutes() / 60;
    return timings.some((slot) => slot.days.includes(currentDay) && slot.start !== null && currentHour >= slot.start && currentHour < slot.end);
  }, []);

  return (
    <aside className="reveal rounded-[2.2rem] bg-navy p-6 text-white shadow-premium sm:p-8 lg:p-10">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-300">Clinic Timings</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.05em]">Visit us today</h2>
        </div>
        <span className={`rounded-full px-4 py-2 text-xs font-extrabold ${isOpenNow ? 'bg-emerald-400 text-navy' : 'bg-gold text-white'}`}>
          {isOpenNow ? 'Open Now' : 'Closed Now'}
        </span>
      </div>

      <div className="grid gap-4">
        {timings.map((slot) => (
          <div key={slot.day} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-gold">
                <SunMedium className="h-5 w-5" />
              </div>
              <div>
                <p className="font-extrabold">{slot.day}</p>
                <p className="text-sm text-white/62">{slot.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 text-sm text-white/72">
        <a className="flex items-center gap-3 transition hover:text-white" href="tel:+916353960524">
          <Phone className="h-5 w-5 text-cyan-300" />
          +91 63539 60524
        </a>
        <a className="flex items-center gap-3 transition hover:text-white" href="mailto:care@physiocare.com">
          <Mail className="h-5 w-5 text-cyan-300" />
          care@physiocare.com
        </a>
        <p className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-cyan-300" />
          28 Wellness Avenue, Medical District
        </p>
        <p className="flex items-center gap-3">
          <Clock3 className="h-5 w-5 text-cyan-300" />
          Same-day slots available for urgent pain cases
        </p>
      </div>
    </aside>
  );
}

export default ClinicTimings;
