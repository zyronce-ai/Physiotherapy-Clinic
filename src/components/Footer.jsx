import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <a href="#home" className="flex items-center gap-3 font-display text-xl font-extrabold tracking-[-0.04em]">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-electric to-cyan-400">P</span>
            PhysioCare
          </a>
          <p className="mt-5 max-w-md leading-7 text-white/64">
            Premium physiotherapy, rehabilitation, and pain management delivered with clinical precision, modern equipment, and compassionate care.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, index) => (
              <a key={index} href="#home" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white/72 transition hover:-translate-y-1 hover:bg-electric hover:text-white" aria-label="Social link">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-extrabold">Contact</h3>
          <div className="mt-5 grid gap-4 text-white/66">
            <a className="flex items-center gap-3 transition hover:text-white" href="tel:+916353960524">
              <Phone className="h-5 w-5 text-gold" />
              +91 63539 60524
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gold" />
              28 Wellness Avenue, Medical District
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-extrabold">Disclaimer</h3>
          <p className="mt-5 leading-7 text-white/64">
            Website information is for general guidance only and does not replace professional diagnosis or individualized medical treatment.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/46">
        (c) 2026 PhysioCare. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
