import React, { useEffect } from 'react';
import {
  CheckCircle2,
  Plane,
  Briefcase,
  Home,
  Calculator,
  Landmark,
  Gavel,
  Award,
  Globe,
  MessagesSquare,
  Languages,
  Video,
  Mail,
  Phone,
  Clock
} from 'lucide-react';
import { ConsultationForm } from '../components/ConsultationForm';
import { FaqAccordion } from '../components/FaqAccordion';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface GetConsultationPageProps {
  onNavigate: (route: string) => void;
}

const EXPECT = [
  { title: 'Case Assessment', text: 'Evaluation of your circumstances and legal concerns.' },
  { title: 'Legal Options', text: 'Identification of applicable legal requirements and potential solutions.' },
  { title: 'Risk Assessment', text: 'Explanation of relevant legal risks and limitations.' },
  { title: 'Documentation Guidance', text: 'Information about the documents and procedures required.' },
  { title: 'Personalized Strategy', text: 'Recommendations on appropriate next steps.' },
  { title: 'Further Assistance', text: 'Information about additional legal services when necessary.' }
];

const AREAS = [
  { icon: Plane, title: 'Immigration & Citizenship', text: 'Visas, residence permits, naturalization and family reunification.' },
  { icon: Briefcase, title: 'Business & Corporate Law', text: 'Company formation, commercial contracts, foreign investments and business transactions.' },
  { icon: Home, title: 'Real Estate & Property Law', text: 'Property acquisitions, legal due diligence and real estate investments.' },
  { icon: Calculator, title: 'International Tax & Non-Resident Matters', text: 'Brazilian tax residency, international relocation and cross-border tax considerations.' },
  { icon: Landmark, title: 'Inheritance & Estate Planning', text: 'Brazilian probate, foreign heirs and succession matters.' },
  { icon: Gavel, title: 'Litigation & Cross-Border Legal Services', text: 'Civil disputes, debt recovery, international documentation and legal representation in Brazil.' }
];

const STEPS = [
  { title: 'Submit Your Request', text: 'Complete the consultation form with your contact information and a brief description of your legal matter.' },
  { title: 'Receive Consultation Details', text: 'Our office will provide appointment availability, professional fees and payment instructions.' },
  { title: 'Confirm Your Appointment', text: 'Your appointment will be confirmed once the consultation fee has been paid.' },
  { title: 'Meet Your Attorney Online', text: 'Attend your private consultation via Google Meet and discuss your legal options and next steps.' }
];

const WHY_CHOOSE = [
  { icon: Award, title: 'Experienced Brazilian Attorney', text: 'Legal assistance from Erica Montarini Gaspani, registered with the Brazilian Bar Association — OAB/PR 58.420.' },
  { icon: Globe, title: 'International Perspective', text: 'Personalized legal guidance for foreign nationals, international families and investors.' },
  { icon: MessagesSquare, title: 'Direct Communication', text: 'Discuss your case directly with a qualified Brazilian attorney.' },
  { icon: Languages, title: 'Multilingual Assistance', text: 'Consultations in Portuguese, English, Spanish, Italian and French, with Arabic interpretation available by arrangement.' },
  { icon: Video, title: 'Online & Confidential', text: 'Private consultations via Google Meet, accessible wherever you are.' }
];

const FAQS = [
  { question: 'Are legal consultations free?', answer: 'No. All consultations are paid. Professional fees and payment instructions are provided before booking confirmation.' },
  { question: 'Can I schedule a consultation from abroad?', answer: 'Yes. Consultations are conducted online via Google Meet.' },
  { question: 'Will I speak directly with a lawyer?', answer: 'Yes. Your consultation is conducted with a Brazilian attorney.' },
  { question: 'Does the consultation include legal representation?', answer: 'No. Additional legal services and representation are quoted and contracted separately.' },
  { question: 'Can you assist with legal matters outside Brazil?', answer: 'We assist with Brazilian legal matters and cross-border coordination. Foreign-law advice and representation require appropriately authorized professionals.' }
];

export const GetConsultationPage: React.FC<GetConsultationPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Get a Legal Consultation in Brazil | Caspani Lawyers';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        'Book a paid online legal consultation with a Brazilian attorney (OAB/PR 58.420) for immigration, business, real estate, tax, inheritance and cross-border matters.'
      );
  }, []);

  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* 1. HERO */}
      <section className="relative w-full bg-[#0f1e36] text-white py-14 lg:py-20 overflow-hidden">
        <img
          src="/images/hero-rio.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/95 via-[#0f1e36]/85 to-[#0f1e36]/55 pointer-events-none"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#775a19]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#e9c176]/10 blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#fed488] border border-[#c5a059]/40 backdrop-blur-sm mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#fed488] animate-pulse"></span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">GET A CONSULTATION</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Get a Legal Consultation</h1>
            <p className="text-base sm:text-lg text-[#e9c176] leading-relaxed mb-8">
              International Legal Services in Brazil | Immigration | Business Law | Real Estate | Tax & Cross-Border Matters
            </p>

            <h2 className="font-serif text-2xl font-bold text-white mb-4">Expert Legal Guidance Starts Here</h2>
            <div className="space-y-3 text-sm sm:text-base text-[#edeef0] leading-relaxed mb-8">
              <p>
                Every legal matter is unique. Whether you are planning to relocate to Brazil, invest in property, establish a business or resolve a legal dispute, professional guidance is essential.
              </p>
              <p>
                At Caspani Lawyers | Advocacia Internacional, we provide personalized legal consultations for foreign individuals, international families, entrepreneurs and investors.
              </p>
              <p>
                Discuss your case directly with an experienced Brazilian attorney and receive legal guidance tailored to your circumstances.
              </p>
            </div>

            <a
              href="#request-consultation"
              className="inline-flex items-center justify-center bg-[#fed488] hover:bg-[#775a19] text-[#785a1a] hover:text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              Schedule Your Legal Consultation
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHAT TO EXPECT */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19] block mb-2">YOUR CONSULTATION</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">What to Expect from Your Consultation</h2>
              <p className="text-sm sm:text-base text-[#44474d] leading-relaxed mb-8">
                Your consultation is designed to provide clarity and direction regarding your legal matter.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {EXPECT.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-lg bg-[#f9f9fb] border border-[#e8e8ea]">
                    <CheckCircle2 className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-bold text-[#0f1e36] block">{item.title}</span>
                      <span className="text-xs text-[#44474d]">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#5f6368] italic">
                Additional legal services, document preparation and representation are subject to a separate engagement.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="/images/erica-studio-2.jpg"
                  alt="Erica Montarini Gaspani, Brazilian attorney"
                  className="w-full h-96 lg:h-[480px] object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/30">
                  <span className="text-[10px] uppercase tracking-wider text-[#fed488] block">Online via Google Meet</span>
                  <span className="font-serif text-sm font-bold">Private consultation with a Brazilian attorney</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AREAS WE CAN ASSIST WITH */}
      <section className="w-full bg-[#f3f3f5] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19] block mb-2">PRACTICE AREAS</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36]">Areas We Can Assist With</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-[#e2e2e4] shadow-xs">
                <div className="w-11 h-11 rounded-lg bg-[#0f1e36] text-[#fed488] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">{title}</h3>
                <p className="text-sm text-[#44474d] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW TO SCHEDULE */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19] block mb-2">STEP BY STEP</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36]">How to Schedule Your Consultation</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, index) => (
              <div key={step.title} className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e2e2e4]">
                <span className="w-10 h-10 rounded-full bg-[#0f1e36] text-[#fed488] font-serif font-bold flex items-center justify-center mb-4">
                  {index + 1}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">{step.title}</h3>
                <p className="text-sm text-[#44474d] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REQUEST A CONSULTATION — form */}
      <section className="w-full bg-[#edeef0] py-16 lg:py-24 border-b border-[#e2e2e4]" id="request-consultation">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <ConsultationForm
                id="dedicated-consultation-form"
                variant="full"
                title="Request a Consultation"
                subtitle="Please complete the form below, and our office will contact you with the next steps."
              />
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="/images/image-3-desk-passport.jpg"
                  alt="Brazilian passport and legal reference books on an attorney's desk"
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/95 via-[#0f1e36]/30 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CASPANI LAWYERS • OAB/PR 58.420
                  </span>
                  <span className="font-serif text-lg font-bold">Strict Confidentiality • Direct Attorney Representation</span>
                </div>
              </div>

              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl p-6">
                <h3 className="text-sm font-bold text-[#0f1e36] mb-2">Prefer WhatsApp?</h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  You can also contact our office directly on WhatsApp to request consultation details.
                </p>
                <a
                  href="https://wa.me/5541998247700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <WhatsAppIcon className="w-[18px] h-[18px]" />
                  <span>WhatsApp: +55 (41) 99824-7700</span>
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 border border-[#e2e2e4] shadow-xs space-y-2.5 text-xs text-[#44474d]">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#775a19]" />
                  <a href="mailto:contact@caspanilawyers.com" className="hover:text-[#775a19]">contact@caspanilawyers.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#775a19]" />
                  <span>+55 (41) 99824-7700</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#775a19]" />
                  <span>Mon – Fri: 09:00 – 18:00 (BRT / UTC-3)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE */}
      <section className="w-full bg-[#0f1e36] text-white py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-10">Why Choose Caspani Lawyers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {WHY_CHOOSE.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white/10 rounded-xl p-5 border border-white/15">
                <Icon className="w-6 h-6 text-[#fed488] mb-3" />
                <h3 className="font-serif text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-xs text-[#edeef0] leading-relaxed">{text}</p>
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

      {/* 8. CLOSING CTA + DISCLAIMER */}
      <section className="w-full bg-[#f3f3f5] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">Let's Discuss Your Legal Matter</h2>
          <p className="text-sm sm:text-base text-[#44474d] leading-relaxed mb-4">
            Whether you need immigration assistance, business legal advice, real estate guidance or support with an international legal matter, our office is here to help you understand your options.
          </p>
          <p className="font-serif text-base font-semibold text-[#0f1e36]">Caspani Lawyers | Advocacia Internacional</p>
          <p className="text-sm text-[#775a19] mb-8">Your International Law Firm in Brazil.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href="#request-consultation"
              className="bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              Schedule Your Legal Consultation
            </a>
            <button
              onClick={() => onNavigate('our-firm')}
              className="bg-white hover:bg-[#edeef0] text-[#0f1e36] px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-[#c5c6ce] transition-colors cursor-pointer"
            >
              About Our Firm
            </button>
          </div>
          <p className="text-[11px] text-[#5f6368] leading-relaxed">
            <strong>Legal Disclaimer:</strong> All consultations are paid and subject to advance payment. Consultation fees are communicated before booking confirmation. Submitting a request does not establish an attorney-client relationship. Additional legal services require a separate engagement. Legal outcomes cannot be guaranteed.
          </p>
        </div>
      </section>
    </div>
  );
};
