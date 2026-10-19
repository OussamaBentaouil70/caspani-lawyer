import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ShieldCheck, MapPin, Phone, Clock, Mail, Scale } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#f3f3f5] text-[#44474d] pt-16 pb-12 border-t border-[#e2e2e4]">
      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Col 1: Emblem & Firm Bio */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                alt="Caspani Lawyers Emblem"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZIPBpyzQBr2CDPrPBazVrZm3-x-zYmrz02TgNVC2YLNOl2MjWeXgFqSrzH0dVrK38Dv6YA_Lu-aB8lnXcjKjqKvJ9xDpmgbpvuZ-a_GUZmhzcrssV5WslbdaZwx3xvZ--h47LK2i2R4-NebnB1UBa8KgJpWCTbtTd9gQ72Nw4wqVlkVLBno-dtmutuq3Kln4xl08b3pjZxkkJbs93lxHMvu0NrkKbNu8pKQn02bLoS6u1I4dFL_xp"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold uppercase text-[#000412]">
                  CASPANI LAWYERS
                </span>
                <span className="text-[10px] font-semibold uppercase text-[#775a19] tracking-[0.2em]">
                  ADVOCACIA INTERNACIONAL
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-md mb-6">
              Caspani Lawyers | Advocacia Internacional provides personalized legal services to foreign individuals, international families, entrepreneurs and investors navigating legal matters in Brazil. Brazilian Legal Expertise. International Perspective. Personalized Service.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#0f1e36]">
              <span className="bg-white border border-[#c5a059]/40 px-3 py-1 rounded shadow-xs font-semibold">
                OAB/PR 58.420
              </span>
              <span className="bg-white border border-[#c5a059]/40 px-3 py-1 rounded shadow-xs font-semibold">
                CRECI-PR F57569
              </span>
            </div>
          </div>

          {/* Col 2: Practice Groups Quick Nav */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0f1e36] mb-4">
              Practice Areas
            </span>
            <ul className="flex flex-col gap-2 text-xs">
              {SERVICES_DATA.slice(0, 8).map((cat) => (
                <li key={cat.slug}>
                  <button
                    onClick={() => {
                      onNavigate(`category/${cat.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#775a19] text-left transition-colors cursor-pointer"
                  >
                    {cat.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#775a19] font-semibold hover:underline text-left cursor-pointer pt-1"
                >
                  View All 11 Practice Groups →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Diplomatic & Inquiries */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0f1e36] mb-4">
              Diplomatic & Direct Inquiries
            </span>
            <div className="flex flex-col gap-2.5 text-xs text-[#44474d] mb-6">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span>Curitiba, Paraná, Brazil</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#775a19] text-[18px]">chat</span>
                <a
                  href="https://wa.me/5541998247700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#775a19] font-medium transition-colors"
                >
                  WhatsApp Direct: +55 (41) 99824-7700
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#775a19] shrink-0" />
                <span>Mon – Fri, 09:00 – 18:00 (BRT / UTC-3)</span>
              </p>
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0f1e36] block mb-2">
                Multilingual Legal Counsel:
              </span>
              <div className="flex flex-wrap gap-1.5 text-[11px]">
                <span className="bg-white border border-[#e2e2e4] px-2.5 py-1 rounded text-[#1a1c1d]">English</span>
                <span className="bg-white border border-[#e2e2e4] px-2.5 py-1 rounded text-[#1a1c1d]">Português</span>
                <span className="bg-white border border-[#e2e2e4] px-2.5 py-1 rounded text-[#1a1c1d]">Español</span>
                <span className="bg-white border border-[#e2e2e4] px-2.5 py-1 rounded text-[#1a1c1d]">Italiano</span>
                <span className="bg-white border border-[#e2e2e4] px-2.5 py-1 rounded text-[#1a1c1d]">Français</span>
                <span className="bg-white border border-[#e2e2e4] px-2.5 py-1 rounded text-[#1a1c1d]">العربية (interpreter)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Bar Footer */}
        <div className="pt-6 border-t border-[#e2e2e4] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#75777e]">
          <p>
            © {new Date().getFullYear()} Caspani Lawyers – Advocacia Internacional. All rights reserved. Registered under Brazilian Federal Bar Association (OAB/PR 58.420).
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('our-firm')} className="hover:text-[#0f1e36] transition-colors cursor-pointer">
              Our Firm
            </button>
            <span className="text-gray-300">•</span>
            <button onClick={() => onNavigate('consultation')} className="hover:text-[#0f1e36] transition-colors cursor-pointer">
              Schedule Consultation
            </button>
            <span className="text-gray-300">•</span>
            <span className="text-gray-400">Strict LGPD Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
