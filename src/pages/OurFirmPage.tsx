import React, { useEffect } from 'react';
import {
  Scale,
  Globe,
  MessagesSquare,
  Languages,
  MonitorSmartphone,
  ShieldCheck,
  Plane,
  Briefcase,
  Home,
  Calculator,
  Landmark,
  Gavel,
  ArrowRight
} from 'lucide-react';
import { ConsultationForm } from '../components/ConsultationForm';
import { FaqAccordion } from '../components/FaqAccordion';
import { TeamSlider, type TeamMember } from '../components/TeamSlider';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface OurFirmPageProps {
  onNavigate: (route: string) => void;
}

const TEAM: TeamMember[] = [
  {
    name: 'Erica Montarini Gaspani',
    role: 'Founder & Brazilian Attorney',
    detail: 'OAB/PR 58.420 • CRECI-PR F57569',
    image: '/images/team-erica.jpg'
  },
  { name: 'Mohamed', role: 'Legal Assistant', detail: 'French & Arabic Markets', image: '/images/team-mohamed.jpg' },
  { name: 'Niss Jonas', role: 'Legal Assistant', detail: 'Europe', image: '/images/team-niss-jonas.jpg' },
  { name: 'Evelyn Gaspani', role: 'Legal Assistant', detail: 'South America', image: '/images/team-evelyn-gaspani.jpg' },
  { name: 'Adam Malo', role: 'Legal Assistant', detail: 'North America', image: '/images/team-adam-malo.jpg' }
];

const EXPERTISE = [
  { icon: Plane, title: 'Immigration & Citizenship', text: 'Visas, residence permits, naturalization, family reunification and Brazilian citizenship.' },
  { icon: Briefcase, title: 'Business & Corporate Law', text: 'Commercial contracts, foreign investments, business transactions and cross-border corporate matters.' },
  { icon: Home, title: 'Real Estate & Property Law', text: 'Property acquisitions, legal due diligence, purchase and sale agreements and real estate disputes.' },
  { icon: Calculator, title: 'International Tax & Non-Resident Matters', text: 'Brazilian tax residency, non-resident taxation, cross-border tax considerations and legal planning.' },
  { icon: Landmark, title: 'Inheritance & Estate Planning', text: 'Brazilian probate, foreign heirs, wills, succession planning and inheritance disputes.' },
  { icon: Gavel, title: 'Litigation & Cross-Border Legal Services', text: 'Civil and commercial litigation, debt recovery, contractual disputes, foreign judgments and international legal documentation.' }
];

const WHY_CHOOSE = [
  { icon: Scale, title: 'Brazilian Legal Expertise', text: 'Professional legal assistance based on Brazilian legislation and procedures.' },
  { icon: Globe, title: 'International Perspective', text: 'Experience assisting clients with legal interests involving Brazil and other jurisdictions.' },
  { icon: MessagesSquare, title: 'Direct & Personalized Communication', text: 'Individualized attention and clear explanations throughout the legal process.' },
  { icon: Languages, title: 'Multilingual Assistance', text: 'Communication in Portuguese, English, Spanish, Italian and French, with Arabic interpretation available by arrangement.' },
  { icon: MonitorSmartphone, title: 'Remote Legal Services', text: 'Online consultations and remote legal assistance whenever permitted by the applicable procedures.' },
  { icon: ShieldCheck, title: 'Confidentiality & Transparency', text: 'Professional handling of sensitive information, clearly defined services and transparent engagement terms.' }
];

const HOW_WE_WORK = [
  { title: 'Initial Consultation', text: 'Schedule a paid consultation to discuss your legal matter, objectives and circumstances.' },
  { title: 'Legal Assessment', text: 'We evaluate the applicable Brazilian legislation, documentation requirements and potential legal risks.' },
  { title: 'Personalized Strategy', text: 'We identify appropriate legal options and propose the scope of any additional services.' },
  { title: 'Legal Assistance & Follow-Up', text: 'Once formally engaged, we provide the agreed legal services and communicate relevant developments.' }
];

const FAQS = [
  { question: 'Do you assist clients living outside Brazil?', answer: 'Yes. We assist international clients remotely whenever the applicable legal procedures allow it.' },
  { question: 'What languages do you speak?', answer: 'We communicate in Portuguese, English, Spanish, Italian and French. Arabic interpretation can be arranged when necessary.' },
  { question: 'Do you provide legal services in Paraguay, the United States or Europe?', answer: 'Our primary legal jurisdiction is Brazil. We assist with Brazilian legal matters and cross-border coordination involving other countries. Foreign-law advice and representation require appropriately authorized local professionals.' },
  { question: 'Are initial consultations free?', answer: 'No. All individualized legal consultations are paid, and additional legal services are quoted separately.' }
];

export const OurFirmPage: React.FC<OurFirmPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'About Caspani Lawyers | International Law Firm in Brazil';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        'Caspani Lawyers | Advocacia Internacional provides personalized Brazilian legal services to foreign individuals, international families, entrepreneurs and investors.'
      );
  }, []);

  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* 1. HERO */}
      <section className="relative w-full bg-[#0f1e36] text-white py-16 lg:py-24 overflow-hidden">
        <img
          src="/images/hero-rio.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/95 via-[#0f1e36]/85 to-[#0f1e36]/55 pointer-events-none"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#775a19]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#e9c176]/10 blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#fed488] border border-[#c5a059]/40 backdrop-blur-sm mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#fed488] animate-pulse"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">OUR FIRM</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-5">About Caspani Lawyers</h1>

          <p className="text-base sm:text-lg text-[#e9c176] leading-relaxed mb-8 max-w-3xl mx-auto">
            International Law Firm in Brazil | Immigration | Business Law | Real Estate | Cross-Border Legal Services
          </p>

          <button
            onClick={() => onNavigate('consultation')}
            className="bg-[#fed488] hover:bg-[#775a19] text-[#785a1a] hover:text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
          >
            Schedule a Paid Legal Consultation
          </button>
        </div>
      </section>

      {/* 2. YOUR INTERNATIONAL LAW FIRM IN BRAZIL */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[2px] bg-[#775a19]"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19]">WHO WE ARE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
                Your International Law Firm in Brazil
              </h2>
              <p className="text-lg text-[#775a19] font-medium mb-6">
                Brazilian Legal Expertise. International Perspective. Personalized Service.
              </p>
              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed">
                <p>
                  At Caspani Lawyers | Advocacia Internacional, we provide personalized legal services to foreign individuals, international families, entrepreneurs and investors navigating legal matters in Brazil.
                </p>
                <p>
                  Our practice combines Brazilian legal expertise with an international perspective, helping clients understand local regulations, protect their interests and manage complex cross-border legal matters.
                </p>
                <p>
                  Whether you are relocating, investing, establishing a business or resolving a legal dispute, we offer professional legal guidance tailored to your circumstances.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="/images/international-legal-services.jpg"
                  alt="International legal services in Brazil"
                  className="w-full h-80 lg:h-[420px] object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/30">
                  <span className="text-[10px] uppercase tracking-wider text-[#fed488] block">Caspani Lawyers</span>
                  <span className="font-serif text-sm font-bold">Advocacia Internacional • Curitiba, Paraná</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEET YOUR LAWYER */}
      <section className="w-full bg-[#f3f3f5] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px]">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#fed488]/40 pointer-events-none"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#e2e2e4]">
                  <img
                    alt="Erica Montarini Gaspani - Founder & Brazilian Attorney"
                    className="w-full h-auto object-cover object-top aspect-[3/4]"
                    src="/images/erica-montarini-gaspani.jpg"
                  />
                  <div className="p-4 bg-[#0f1e36] text-white">
                    <p className="font-serif text-lg font-bold">Erica Montarini Gaspani</p>
                    <p className="text-xs text-[#fed488] font-mono">OAB/PR 58.420 • CRECI-PR F57569</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[2px] bg-[#775a19]"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19]">MEET YOUR LAWYER</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-1">Erica Montarini Gaspani</h2>
              <p className="text-sm font-semibold text-[#775a19] mb-6">Brazilian Attorney | OAB/PR 58.420</p>

              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed mb-8">
                <p>
                  Erica Montarini Gaspani is a Brazilian attorney with over 15 years of legal experience, specializing in Brazilian immigration, international legal matters, civil litigation and legal documentation.
                </p>
                <p>
                  Admitted to the Brazilian Bar in 2010, she holds postgraduate qualifications in Civil Procedure, Constitutional Law and Electoral Law.
                </p>
                <p>
                  With extensive international experience and multilingual communication skills, Erica assists foreign clients with Brazilian legal procedures, cross-border transactions and investment-related matters.
                </p>
                <p>
                  She is also a licensed real estate broker in Brazil (CRECI-PR F57569), providing additional insight into Brazilian property transactions and foreign real estate investments.
                </p>
                <p>
                  Her approach emphasizes direct communication, personalized legal strategies, confidentiality and professional responsibility.
                </p>
              </div>

              <div>
                <button
                  onClick={() => onNavigate('consultation')}
                  className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                >
                  Schedule a Consultation with Erica
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3b. OUR TEAM — group portrait + individual profiles */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]" id="our-team">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19] block mb-2">OUR TEAM</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">Meet the Caspani Lawyers Team</h2>
            <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
              Our attorney and legal assistants support international clients across Europe, North America, South America and the French- and Arabic-speaking markets.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4] mb-14">
            <img
              src="/images/team-portrait.jpg"
              alt="The Caspani Lawyers team"
              className="w-full h-72 sm:h-[420px] lg:h-[520px] object-cover object-[center_30%]"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 bg-[#0f1e36]/90 backdrop-blur-md text-white px-5 py-3 rounded-xl border border-[#c5a059]/30">
              <span className="text-[10px] uppercase tracking-wider text-[#fed488] block">Caspani Lawyers</span>
              <span className="font-serif text-sm font-bold">Advocacia Internacional • Curitiba, Paraná</span>
            </div>
          </div>

          <TeamSlider members={TEAM} />
        </div>
      </section>

      {/* 4. AREAS OF EXPERTISE */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19] block mb-2">PRACTICE AREAS</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36]">Our Areas of Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {EXPERTISE.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-[#f9f9fb] rounded-xl p-6 lg:p-8 border border-[#e2e2e4] hover:border-[#c5a059]/60 shadow-xs hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-lg bg-[#edeef0] text-[#775a19] flex items-center justify-center mb-4 group-hover:bg-[#0f1e36] group-hover:text-[#fed488] transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">{title}</h3>
                <p className="text-sm text-[#44474d] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 border border-[#0f1e36] text-[#0f1e36] hover:bg-[#0f1e36] hover:text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Explore Our Legal Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE CASPANI LAWYERS */}
      <section className="w-full bg-[#0f1e36] text-white py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#fed488] block mb-2">OUR COMMITMENT</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">Why Choose Caspani Lawyers?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white/10 rounded-xl p-6 border border-white/15 hover:border-[#fed488]/60 transition-colors">
                <div className="w-11 h-11 rounded-lg bg-[#fed488]/20 text-[#fed488] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-[#edeef0] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19] block mb-2">OUR PROCESS</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36]">How We Work</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_WE_WORK.map((step, index) => (
              <div key={step.title} className="bg-white rounded-xl p-6 border border-[#e2e2e4] shadow-xs relative">
                <span className="font-serif text-4xl font-bold text-[#e9c176] block mb-3">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">{step.title}</h3>
                <p className="text-sm text-[#44474d] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19] block mb-2">FAQ</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36]">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* 8. YOUR LEGAL PARTNER IN BRAZIL — Image 3 on the left, form on the right */}
      <section className="w-full bg-[#edeef0] py-16 lg:py-24" id="bottom-consultation-section">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">Your Legal Partner in Brazil</h2>
            <p className="text-sm sm:text-base text-[#44474d] leading-relaxed mb-3">
              Whether you are planning to relocate, invest, establish a business or protect your legal interests in Brazil, Caspani Lawyers | Advocacia Internacional provides professional legal assistance with an international perspective.
            </p>
            <p className="font-serif text-base font-semibold text-[#775a19] mb-6">
              Brazilian Legal Expertise. International Solutions. Personalized Representation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#our-firm-bottom-form"
                className="bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                Book a Paid Legal Consultation
              </a>
              <a
                href="https://wa.me/5541998247700"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#f3f3f5] text-[#0f1e36] px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider border border-[#c5c6ce] transition-colors inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="w-[18px] h-[18px] text-[#25D366]" />
                Contact Caspani Lawyers
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="/images/image-3-desk-passport.jpg"
                  alt="Brazilian passport and legal reference books on an attorney's desk"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/95 via-[#0f1e36]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CASPANI LAWYERS • OAB/PR 58.420
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">Direct Attorney Representation</h3>
                  <p className="text-xs text-[#edeef0] leading-relaxed">
                    Brazilian legal services with an international perspective, handled with strict confidentiality.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7" id="our-firm-bottom-form">
              <ConsultationForm id="our-firm-form" title="Request a Consultation" presetService="Brazilian Visas & Residence Permits" />
            </div>
          </div>

          <p className="max-w-4xl mx-auto mt-10 text-[11px] text-[#5f6368] leading-relaxed text-center">
            Caspani Lawyers provides Brazilian legal services within its authorized professional scope. Foreign-law advice and representation require appropriately qualified professionals. Legal services are subject to a separate engagement, and outcomes cannot be guaranteed.
          </p>
        </div>
      </section>
    </div>
  );
};
