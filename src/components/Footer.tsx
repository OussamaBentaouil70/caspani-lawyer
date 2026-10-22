import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ShieldCheck, MapPin, Phone, Clock, Mail, Scale } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

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
            <div className="mb-5">
              <img alt="Caspani Lawyers" className="h-24 w-auto object-contain" src="/images/caspani-lawyers-logo.png" />
            </div>

            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-md mb-6">
              Caspani Lawyers | Advocacia Internacional provides personalized legal services to foreign individuals, international families, entrepreneurs and investors navigating legal matters in Brazil. Brazilian Legal Expertise. International Perspective. Personalized Service.
            </p>
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
                <WhatsAppIcon className="w-[18px] h-[18px] text-[#775a19]" />
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
            <button onClick={() => onNavigate('about')} className="hover:text-[#0f1e36] transition-colors cursor-pointer">
              Our Firm
            </button>
            <span className="text-gray-300">•</span>
            <button onClick={() => onNavigate('get-a-consultation')} className="hover:text-[#0f1e36] transition-colors cursor-pointer">
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
