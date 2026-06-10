import React, { useState } from 'react';
import { CalendarDays, Send } from 'lucide-react';

const initialForm = {
  name: '',
  phone: '',
  treatment: '',
  date: '',
  message: '',
};

function AppointmentForm() {
  const [form, setForm] = useState(initialForm);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitToWhatsApp = (event) => {
    event.preventDefault();

    const bookingMessage = [
      'Hello PhysioCare, I want to book an appointment.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Treatment: ${form.treatment}`,
      `Preferred Date: ${form.date}`,
      `Message: ${form.message || 'N/A'}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/916353960524?text=${encodeURIComponent(bookingMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="reveal glass-card rounded-[2.2rem] p-6 sm:p-8 lg:p-10">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Quick Appointment</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.055em] text-navy sm:text-4xl">
            Book a specialist consultation.
          </h2>
        </div>
        <div className="hidden h-14 w-14 place-items-center rounded-2xl bg-gold/15 text-gold sm:grid">
          <CalendarDays className="h-7 w-7" />
        </div>
      </div>

      <form className="grid gap-4 sm:grid-cols-2" onSubmit={submitToWhatsApp}>
        <div className="floating-label relative">
          <input id="name" name="name" type="text" placeholder="Full Name" value={form.name} onChange={updateField} required />
          <label htmlFor="name">Full Name</label>
        </div>
        <div className="floating-label relative">
          <input id="phone" name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={updateField} required />
          <label htmlFor="phone">Phone Number</label>
        </div>
        <div className="floating-label relative">
          <select id="treatment" name="treatment" value={form.treatment} onChange={updateField} required>
            <option value="" disabled>Select treatment</option>
            <option>Sports Injury Management</option>
            <option>Post-Surgery Rehabilitation</option>
            <option>Back & Neck Pain Relief</option>
            <option>Advanced Electrotherapy</option>
          </select>
          <label htmlFor="treatment">Treatment</label>
        </div>
        <div className="floating-label relative">
          <input id="date" name="date" type="date" placeholder="Preferred Date" value={form.date} onChange={updateField} required />
          <label htmlFor="date">Preferred Date</label>
        </div>
        <div className="floating-label relative sm:col-span-2">
          <textarea id="message" name="message" rows="5" placeholder="Message" value={form.message} onChange={updateField} />
          <label htmlFor="message">Recovery Goal</label>
        </div>
        <button type="submit" className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-cyan-400 px-7 font-extrabold text-white shadow-glow transition hover:-translate-y-1 sm:col-span-2 sm:w-fit">
          Request Appointment
          <Send className="h-5 w-5 transition group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
