import React from 'react';
import { ServiceCategory } from '../data/servicesData';
import { ConsultationForm } from '../components/ConsultationForm';
import { ChevronRight, ArrowRight, ShieldCheck, Scale, CheckCircle, Clock } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface CategoryPageProps {
  category: ServiceCategory;
  onNavigate: (route: string) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ category, onNavigate }) => {
  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* Breadcrumbs */}
      <div className="w-full bg-[#f3f3f5] border-b border-[#e2e2e4] py-3">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center gap-2 text-xs font-mono text-[#75777e]">
          <button onClick={() => onNavigate('home')} className="hover:text-[#0f1e36] hover:underline cursor-pointer">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-[#c5c6ce]" />
          <button onClick={() => onNavigate('services')} className="hover:text-[#0f1e36] hover:underline cursor-pointer">
            Services
          </button>
          <ChevronRight className="w-3 h-3 text-[#c5c6ce]" />
          <span className="text-[#0f1e36] font-semibold">{category.title}</span>
        </div>
      </div>

      {/* Hero Section with Embedded Reservation Form */}
      <section className="relative w-full bg-[#0f1e36] text-white py-14 lg:py-18 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#775a19]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full bg-[#e9c176]/10 blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#fed488] border border-[#c5a059]/40 backdrop-blur-sm mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#fed488] animate-pulse"></span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                  LEGAL PRACTICE GROUP • {category.subpages.length} DEDICATED SUB-SERVICES
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] lg:leading-[54px] font-bold text-white mb-4">
                {category.title}
              </h1>

              <p className="text-base sm:text-lg text-[#edeef0] leading-relaxed max-w-2xl mb-6">
                {category.description} Our firm provides strategic, end-to-end counsel ensuring complete compliance with Brazilian statutory frameworks.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
                <a
                  href="#category-hero-form"
                  className="inline-flex items-center justify-center gap-2 bg-[#fed488] hover:bg-[#775a19] text-[#785a1a] hover:text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span>Book Practice Consultation</span>
                </a>
                <a
                  href={`https://wa.me/5541998247700?text=${encodeURIComponent(
                    `Hello Caspani Lawyers, I would like legal advice regarding ${category.title} in Brazil.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-[#c5a059]/40 hover:border-[#c5a059] transition-all duration-200"
                >
                  <WhatsAppIcon className="w-[18px] h-[18px] text-[#fed488]" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="w-full pt-6 border-t border-white/15">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-[#edeef0]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#fed488]">◆</span>
                    <span>Licensed Brazilian Attorney (OAB/PR 58.420)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#fed488]">◆</span>
                    <span>Direct Senior Attorney Representation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#fed488]">◆</span>
                    <span>Bilingual Legal Support (English/Portuguese)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#fed488]">◆</span>
                    <span>Strict 100% Confidentiality</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Reservation Form */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="category-hero-form">
              <ConsultationForm
                id="cat-hero-intake"
                title={`Consultation: ${category.title}`}
                subtitle="Direct review by licensed Brazilian attorney within 24 hours"
                presetService={category.title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subpages Grid Section */}
      <section className="w-full py-16 lg:py-24 bg-[#f9f9fb] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#775a19]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19]">
                SUB-SERVICES DIRECTORY
              </span>
              <span className="w-6 h-[2px] bg-[#775a19]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              Explore Services in {category.title}
            </h2>
            <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
              Select any subpage below to view detailed requirements, procedural steps, required documentation, and to request a tailored case review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.subpages.map((sub, index) => (
              <div
                key={sub.slug}
                className="bg-white rounded-xl p-6 lg:p-8 border border-[#e2e2e4] hover:border-[#c5a059]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#edeef0] text-[#775a19] flex items-center justify-center group-hover:bg-[#0f1e36] group-hover:text-[#fed488] transition-colors">
                      <span className="font-serif font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-[#f3f3f5] text-[#75777e] px-2 py-1 rounded">
                      Sub-Service
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-2 group-hover:text-[#775a19] transition-colors">
                    {sub.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#44474d] mb-4 leading-relaxed line-clamp-3">
                    {sub.shortDescription}
                  </p>

                  {sub.timeline && (
                    <div className="p-2.5 rounded bg-[#f9f9fb] border border-[#e8e8ea] text-[11px] text-[#75777e] flex items-center gap-2 mb-6">
                      <Clock className="w-3.5 h-3.5 text-[#775a19] shrink-0" />
                      <span>Timeline: {sub.timeline}</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    onNavigate(`subpage/${category.slug}/${sub.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs uppercase tracking-wider font-bold text-[#0f1e36] group-hover:text-[#775a19] flex items-center justify-between pt-3 border-t border-[#e8e8ea] transition-colors cursor-pointer w-full"
                >
                  <span>Explore {sub.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Reservation Form (Before Footer) */}
      <section className="w-full bg-[#edeef0] py-16 lg:py-20 border-t border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#775a19]"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#775a19]">
                RESERVE YOUR APPOINTMENT
              </span>
              <span className="w-6 h-[2px] bg-[#775a19]"></span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#0f1e36] mb-2">
              Discuss Your {category.title} Matter
            </h2>
            <p className="text-sm text-[#44474d]">
              Submit your inquiry below or schedule a confidential direct case review with Erica Montarini Gaspani.
            </p>
          </div>

          {/* TWO-COLUMN LAYOUT: IMAGE ON THE LEFT, FORM ON THE RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
            {/* Left Column: Curated Stock Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85"
                  alt={`${category.title} legal review`}
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/95 via-[#0f1e36]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CASPANI LAWYERS • ADVOCACIA INTERNACIONAL
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#edeef0] leading-relaxed">
                    Personalized strategy and legal assistance under Brazilian law.
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-[#e9c176]">
                    <span>OAB/PR 58.420</span>
                    <span>Confidential Consultations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Full Reservation Form */}
            <div className="lg:col-span-7">
              <ConsultationForm
                id="cat-bottom-intake"
                title={`Schedule Review: ${category.title}`}
                subtitle="Direct response within 24 business hours"
                presetService={category.title}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
