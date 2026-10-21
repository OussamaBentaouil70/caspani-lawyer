import React, { useState } from 'react';
import { Subpage, ServiceCategory } from '../data/servicesData';
import { ConsultationForm } from './ConsultationForm';
import {
  ChevronRight,
  ShieldCheck,
  FileText,
  Clock,
  HelpCircle,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Calendar,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface SubpageTemplateProps {
  category: ServiceCategory;
  subpage: Subpage;
  onNavigate: (route: string) => void;
}

export const SubpageTemplate: React.FC<SubpageTemplateProps> = ({
  category,
  subpage,
  onNavigate
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const siblingPages = category.subpages.filter((s) => s.slug !== subpage.slug);

  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* 1. BREADCRUMBS BAR */}
      <div className="w-full bg-[#f3f3f5] border-b border-[#e2e2e4] py-3">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center flex-wrap gap-2 text-xs font-mono text-[#75777e]">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#0f1e36] hover:underline cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-[#c5c6ce]" />
          <button
            onClick={() => onNavigate('services')}
            className="hover:text-[#0f1e36] hover:underline cursor-pointer"
          >
            Services
          </button>
          <ChevronRight className="w-3 h-3 text-[#c5c6ce]" />
          <button
            onClick={() => onNavigate(`category/${category.slug}`)}
            className="hover:text-[#0f1e36] hover:underline cursor-pointer"
          >
            {category.title}
          </button>
          <ChevronRight className="w-3 h-3 text-[#c5c6ce]" />
          <span className="text-[#0f1e36] font-semibold truncate max-w-xs sm:max-w-md">
            {subpage.title}
          </span>
        </div>
      </div>

      {/* 2. HERO SECTION WITH EMBEDDED RESERVATION FORM */}
      <section className="relative w-full bg-[#0f1e36] text-white py-12 lg:py-16 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#775a19]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full bg-[#e9c176]/10 blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#fed488] border border-[#c5a059]/40 backdrop-blur-sm mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#fed488] animate-pulse"></span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                  {category.title} • Legal Practice Dossier
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] font-bold text-white mb-4">
                {subpage.title}
              </h1>

              <p className="text-base sm:text-lg text-[#edeef0] leading-relaxed max-w-2xl mb-6">
                {subpage.shortDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
                <a
                  href="#subpage-hero-form"
                  className="inline-flex items-center justify-center gap-2 bg-[#fed488] hover:bg-[#775a19] text-[#785a1a] hover:text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Legal Consultation</span>
                </a>
                <a
                  href={`https://wa.me/5541998247700?text=${encodeURIComponent(
                    `Hello Caspani Lawyers, I am inquiring about ${subpage.title} in Brazil.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider border border-[#c5a059]/40 hover:border-[#c5a059] transition-all duration-200"
                >
                  <WhatsAppIcon className="w-[18px] h-[18px] text-[#fed488]" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>

              {/* Trust Badges 2-Column Grid */}
              <div className="w-full pt-6 border-t border-white/15">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-[#edeef0]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#fed488]">◆</span>
                    <span>Licensed Brazilian Attorney (OAB/PR 58.420)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#fed488]">◆</span>
                    <span>Licensed Real Estate Agent (CRECI-PR F57569)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#fed488]">◆</span>
                    <span>Specialized in Foreign Nationals & Expats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#fed488]">◆</span>
                    <span>Direct Senior Attorney Oversight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#fed488]">◆</span>
                    <span>Multilingual: EN, PT, ES, IT, FR & Arabic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#fed488]">◆</span>
                    <span>100% Confidential Legal Assessment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero: Reservation Form in Hero Section */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="subpage-hero-form">
              <ConsultationForm
                id="hero-subpage-intake"
                title={`Inquire: ${subpage.title}`}
                subtitle="Preliminary case evaluation & 24h direct attorney response"
                presetService={subpage.title}
                compact={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUBPAGE CONTENT BODY */}
      <section className="w-full py-16 bg-[#f9f9fb] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Column (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {/* Card 1: Overview & Statutory Framework (With Stock Image) */}
              <div className="bg-white rounded-xl overflow-hidden border border-[#e2e2e4] shadow-xs">
                <div className="h-56 sm:h-64 w-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80"
                    alt={subpage.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-[#0f1e36]/40 to-transparent flex items-end p-6">
                    <span className="text-white font-serif text-lg font-bold">
                      {subpage.title} — Cross-Border Legal Practice
                    </span>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-[2px] bg-[#775a19]"></span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#775a19]">
                      LEGAL OVERVIEW & STRATEGY
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#0f1e36] mb-4">
                    Navigating {subpage.title} Under Brazilian Law
                  </h2>
                  <div className="text-sm text-[#44474d] leading-relaxed space-y-3">
                    <p>
                      Navigating <strong>{subpage.title}</strong> requires strict alignment with Brazilian federal statutes, ministerial regulations, and practical administrative procedures. Foreign clients often face bureaucratic friction, ambiguous translation demands, and multi-agency protocols across the Federal Police (Polícia Federal), Ministry of Justice (Ministério da Justiça), Receita Federal, and local notaries (Cartórios).
                    </p>
                    <p>
                      At Montarini & Caspani Lawyers, we provide end-to-end representation, structuring every stage of your dossier to eliminate delays, safeguard your rights, and ensure seamless approvals from start to finish.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Eligibility & Statutory Requirements */}
              {subpage.eligibility && subpage.eligibility.length > 0 && (
                <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#e2e2e4] shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-[2px] bg-[#775a19]"></span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#775a19]">
                      QUALIFYING CRITERIA
                    </span>
                  </div>
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#0f1e36] mb-4">
                    Eligibility Requirements
                  </h3>
                  <div className="space-y-3">
                    {subpage.eligibility.map((crit, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#f9f9fb] border border-[#e8e8ea]">
                        <span className="text-[#775a19] text-base mt-0.5">◆</span>
                        <span className="text-sm text-[#1a1c1d] leading-relaxed font-medium">
                          {crit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card 3: Step-by-Step Procedure */}
              {subpage.steps && subpage.steps.length > 0 && (
                <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#e2e2e4] shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-[2px] bg-[#775a19]"></span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#775a19]">
                      ROADMAP & TIMELINE
                    </span>
                  </div>
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#0f1e36] mb-6">
                    Step-by-Step Legal Procedure
                  </h3>
                  <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#e8e8ea]">
                    {subpage.steps.map((st, idx) => (
                      <div key={idx} className="relative flex items-start gap-4 pl-2">
                        <div className="w-8 h-8 rounded-full bg-[#0f1e36] text-[#fed488] font-bold text-xs flex items-center justify-center shrink-0 z-10 border-2 border-white shadow-xs">
                          {idx + 1}
                        </div>
                        <div className="flex-1 bg-[#f9f9fb] p-4 rounded-lg border border-[#e8e8ea]">
                          <h4 className="text-sm font-bold text-[#0f1e36] mb-1">
                            {st.title}
                          </h4>
                          <p className="text-xs text-[#44474d] leading-relaxed">
                            {st.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {subpage.timeline && (
                    <div className="mt-6 p-4 rounded-lg bg-[#f3ede0] border border-[#c5a059]/40 flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#775a19] shrink-0" />
                      <div className="text-xs text-[#785a1a]">
                        <strong className="block text-sm font-semibold">Estimated Adjudication Timeline:</strong>
                        <span>{subpage.timeline}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Card 4: Required Documentation Dossier */}
              {subpage.documents && subpage.documents.length > 0 && (
                <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#e2e2e4] shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-[2px] bg-[#775a19]"></span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#775a19]">
                      CHECKLIST
                    </span>
                  </div>
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#0f1e36] mb-4">
                    Required Legal Documentation Dossier
                  </h3>
                  <p className="text-xs text-[#44474d] mb-4">
                    All foreign-issued certificates must bear a Hague Apostille and be translated into Portuguese by a Brazilian sworn public translator (Tradutor Público Juramentado).
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {subpage.documents.map((doc, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f9f9fb] border border-[#e8e8ea]">
                        <CheckCircle className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-[#1a1c1d]">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card 5: CUSTOM CLIENT CONTENT AREA (Ready for user to paste content) */}
              <div className="bg-gradient-to-br from-white to-[#fbfaf6] rounded-xl p-6 lg:p-8 border-2 border-dashed border-[#c5a059]/60 shadow-xs relative">
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#e8e8ea]">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#775a19]" />
                    <span className="font-serif text-lg font-bold text-[#0f1e36]">
                      Detailed Case Materials & Custom Notes
                    </span>
                  </div>
                  <span className="bg-[#edeef0] text-[#775a19] px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold uppercase">
                    Custom Content Section
                  </span>
                </div>
                <div className="text-sm text-[#44474d] leading-relaxed space-y-3">
                  <p className="italic text-xs text-[#75777e] bg-white p-3 rounded border border-[#e2e2e4]">
                    ℹ️ <strong>Note for Site Administrator:</strong> This dedicated container is structured and pre-formatted for your specific long-form text, custom statutory references, fee schedules, or case precedents for <em>{subpage.title}</em>.
                  </p>
                  <p>
                    Every cross-border legal engagement in Brazil involves unique jurisdictional nuances. Whether your matter touches international tax optimization, family reunification status, corporate structuring, or real estate acquisition, our firm customizes our legal opinions and administrative submissions directly to your case facts.
                  </p>
                </div>
              </div>

              {/* Card 6: Frequently Asked Questions */}
              {subpage.faqs && subpage.faqs.length > 0 && (
                <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#e2e2e4] shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-[2px] bg-[#775a19]"></span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#775a19]">
                      COMMON QUESTIONS
                    </span>
                  </div>
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#0f1e36] mb-6">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {subpage.faqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div key={idx} className="rounded-lg border border-[#e8e8ea] overflow-hidden">
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                            className="w-full flex items-center justify-between p-4 bg-[#f9f9fb] hover:bg-[#edeef0] text-left transition-colors cursor-pointer"
                          >
                            <span className="text-sm font-semibold text-[#0f1e36]">
                              {faq.question}
                            </span>
                            <span className="text-lg text-[#775a19] font-bold ml-2">
                              {isOpen ? '−' : '+'}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="p-4 bg-white text-xs sm:text-sm text-[#44474d] leading-relaxed border-t border-[#e8e8ea]">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Column (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Lead Attorney Profile Card */}
              <div className="bg-white rounded-xl p-6 border border-[#e2e2e4] shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#775a19] block mb-2">
                  LEAD ATTORNEY REPRESENTATION
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    alt="Erica Montarini Gaspani"
                    className="w-14 h-14 rounded-full object-cover object-top border-2 border-[#c5a059]"
                    src="/images/erica-montarini-gaspani.jpg"
                  />
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#0f1e36]">
                      Erica Montarini Gaspani
                    </h4>
                    <p className="text-xs text-[#775a19] font-semibold">
                      Founder & Brazilian Attorney
                    </p>
                    <p className="text-[11px] font-mono text-[#75777e]">
                      OAB/PR 58.420 • CRECI F57569
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Direct personal oversight on all cross-border legal filings. We do not pass your case to junior paralegals.
                </p>
                <a
                  href={`https://wa.me/5541998247700?text=${encodeURIComponent(
                    `Hello Attorney Erica Montarini, I would like direct counsel regarding ${subpage.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <WhatsAppIcon className="w-[16px] h-[16px]" />
                  <span>Connect with Attorney</span>
                </a>
              </div>

              {/* Related Services in this Category */}
              {siblingPages.length > 0 && (
                <div className="bg-white rounded-xl p-6 border border-[#e2e2e4] shadow-xs">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#e8e8ea]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0f1e36]">
                      Also in {category.title}
                    </span>
                    <button
                      onClick={() => onNavigate(`category/${category.slug}`)}
                      className="text-xs text-[#775a19] hover:underline cursor-pointer"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-2">
                    {siblingPages.map((sib) => (
                      <button
                        key={sib.slug}
                        onClick={() => {
                          onNavigate(`subpage/${category.slug}/${sib.slug}`);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-[#f3ede0] border border-transparent hover:border-[#c5a059]/40 transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <span className="text-xs font-semibold text-[#0f1e36] group-hover:text-[#775a19] truncate pr-2">
                          {sib.title}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#775a19] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Legal Assurance Card */}
              <div className="bg-[#0f1e36] text-white rounded-xl p-6 shadow-md border border-[#c5a059]/40">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#fed488] block mb-2">
                  INSTITUTIONAL GUARANTEE
                </span>
                <h4 className="font-serif text-lg font-bold mb-2">
                  100% Confidential Legal Intake
                </h4>
                <p className="text-xs text-[#edeef0] leading-relaxed mb-4">
                  Under Brazilian Federal Law 8.906/94 (Estatuto da OAB), all discussions and case records exchanged with our firm are protected by absolute attorney-client privilege.
                </p>
                <div className="text-[11px] font-mono text-[#fed488] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#fed488]" />
                  <span>Curitiba & Rio de Janeiro Chambers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECOND RESERVATION FORM (BEFORE THE FOOTER) */}
      <section className="w-full bg-[#edeef0] py-16 border-t border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#775a19]"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#775a19]">
                START YOUR INTAKE
              </span>
              <span className="w-6 h-[2px] bg-[#775a19]"></span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#0f1e36] mb-2">
              Ready to Proceed With {subpage.title}?
            </h2>
            <p className="text-sm text-[#44474d]">
              Submit your inquiry below or schedule a confidential legal review with our senior Brazilian counsel.
            </p>
          </div>

          {/* TWO-COLUMN LAYOUT: IMAGE ON THE LEFT, FORM ON THE RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
            {/* Left Column: Curated Stock Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=85"
                  alt={`${subpage.title} consultation`}
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/95 via-[#0f1e36]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#fed488] mb-1">
                    CONFIDENTIAL LEGAL INTAKE
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    {subpage.title}
                  </h3>
                  <p className="text-xs text-[#edeef0] leading-relaxed">
                    Direct preliminary case review by licensed Brazilian counsel within 24 business hours.
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-[#fed488]">
                    <span>OAB/PR 58.420</span>
                    <span>100% Confidential</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Full Reservation Form */}
            <div className="lg:col-span-7">
              <ConsultationForm
                id="subpage-bottom-intake"
                title={`Reserve Consultation: ${subpage.title}`}
                subtitle="Direct response within 24 business hours from our bilingual attorney"
                presetService={subpage.title}
                compact={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
