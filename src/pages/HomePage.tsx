import React from 'react';
import { ConsultationForm } from '../components/ConsultationForm';
import { SERVICES_DATA } from '../data/servicesData';
import {
  Calendar,
  ShieldCheck,
  Check,
  ArrowRight,
  Star,
  Building,
  Scale,
  Briefcase,
  FileCheck,
  Globe,
  Award,
  Sparkles,
  MapPin,
  Clock,
  Send
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* 1. HERO SECTION: SPLIT EDITORIAL LUXURY WITH INTEGRATED CONSULTATION FORM */}
      <section className="relative w-full bg-[#0f1e36] text-white py-14 lg:py-20 overflow-hidden">
        <img
          src="/images/hero-rio.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/95 via-[#0f1e36]/85 to-[#0f1e36]/55 pointer-events-none"></div>
        {/* Ambient architectural glow background elements */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#775a19]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#e9c176]/10 blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Authority & Strategic Positioning */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#fed488] border border-[#c5a059]/40 backdrop-blur-sm mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#fed488] animate-pulse"></span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                  BRAZILIAN LAW FIRM FOR INTERNATIONAL CLIENTS
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] lg:leading-[54px] font-bold text-white mb-4">
                International Lawyers in Brazil — Immigration, Business & Cross-Border Legal Services
              </h1>

              <p className="text-base sm:text-lg text-[#edeef0] leading-relaxed max-w-2xl mb-6">
                Caspani Lawyers provides personalized legal assistance to foreign individuals, families, investors, and businesses navigating Brazilian law. From visas and residency to real estate investments and international legal matters, we help you protect your interests and move forward with confidence in Brazil.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
                <a
                  href="#hero-consultation-form"
                  className="inline-flex items-center justify-center gap-2 bg-[#fed488] hover:bg-[#775a19] text-[#785a1a] hover:text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Legal Consultation</span>
                </a>
                <a
                  href="https://wa.me/5541998247700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-[#c5a059]/40 hover:border-[#c5a059] transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#fed488]">chat</span>
                  <span>Contact Us on WhatsApp</span>
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
                    <span>Licensed Brazilian Real Estate Agent (CRECI-PR F57569)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#fed488]">◆</span>
                    <span>Specialized in Immigration & Foreign Nationals Law</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#fed488]">◆</span>
                    <span>Legal Support From Property Selection to Residency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#fed488]">◆</span>
                    <span>Multilingual Assistance: English, Portuguese & Arabic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#fed488]">◆</span>
                    <span>100% Confidential Legal Consultation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Consultation Intake Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="hero-consultation-form">
              <ConsultationForm
                id="hero-intake"
                title="Request Legal Consultation"
                subtitle="Direct case evaluation & response within 24 hours"
                presetService="Brazilian Visas & Residence Permits"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 1: MEET YOUR INTERNATIONAL LAWYER (ERICA MONTARINI GASPANI) */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text Column Left */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[2px] bg-[#775a19]"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19]">
                  ABOUT THE FOUNDER
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-6">
                Meet Your International Lawyer in Brazil
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed mb-6">
                <p>
                  <strong className="text-[#0f1e36] font-semibold">Erica Montarini Gaspani</strong> is a licensed Brazilian attorney, licensed real estate agent and founder of Caspani Lawyers, providing legal services to international clients, individuals, families, investors, and businesses in Brazil.
                </p>
                <p>
                  With extensive legal experience, she assists foreign clients with immigration, visas, residency, Brazilian citizenship, real estate transactions, and cross-border legal matters.
                </p>
                <p>
                  At Caspani Lawyers, we combine Brazilian legal expertise with an international perspective, delivering personalized legal solutions to clients worldwide.
                </p>
              </div>

              {/* Highlight Box: Why Work With Us? */}
              <div className="bg-[#f9f9fb] rounded-xl p-6 border-l-4 border-l-[#775a19] border-t border-r border-b border-[#e8e8ea] shadow-xs mb-6">
                <span className="font-serif text-base font-bold text-[#0f1e36] block mb-3 uppercase tracking-wide">
                  Why Work With Us?
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#1a1c1d]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#775a19] text-base mt-0.5">◆</span>
                    <div>
                      <strong className="text-[#0f1e36]">Direct Access to Your Attorney</strong> — Personalized communication throughout your legal matter.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#775a19] text-base mt-0.5">◆</span>
                    <div>
                      <strong className="text-[#0f1e36]">Tailored Legal Strategies</strong> — Solutions designed around your individual or business needs.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#775a19] text-base mt-0.5">◆</span>
                    <div>
                      <strong className="text-[#0f1e36]">Multilingual & Confidential Service</strong> — Professional legal assistance across borders, wherever you are.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Profile Sign-Off Card */}
              <div className="flex items-center gap-4 p-4 bg-[#f3f3f5] rounded-lg border border-[#e2e2e4]">
                <div className="w-12 h-12 rounded-full bg-[#0f1e36] text-[#fed488] flex items-center justify-center font-serif text-lg font-bold">
                  EM
                </div>
                <div>
                  <p className="font-serif text-base font-bold text-[#0f1e36] leading-tight">
                    Erica Montarini Gaspani
                  </p>
                  <p className="text-xs text-[#775a19] font-medium">
                    Founder & Brazilian Attorney | OAB/PR 58.420 • CRECI-PR F57569
                  </p>
                  <p className="text-[11px] font-mono text-[#75777e]">
                    Caspani Lawyers — Advocacia Internacional
                  </p>
                </div>
              </div>
            </div>

            {/* Image Column Right: Image 1 */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px]">
                {/* Decorative Offset Border Canvas */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#fed488]/40 pointer-events-none"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#e2e2e4]">
                  <img
                    alt="Erica Montarini Gaspani - Founder of Caspani Lawyers"
                    className="w-full h-auto object-cover object-top aspect-[3/4]"
                    src="/images/erica-montarini-gaspani.jpg"
                  />
                  {/* Floating Accreditation Ribbon */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/95 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] text-[#fed488] uppercase tracking-wider">
                          Accredited Counsel
                        </span>
                        <span className="font-serif text-sm font-semibold">
                          Ordem dos Advogados do Brasil
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[10px] text-[#fed488] uppercase tracking-wider">
                          Registration
                        </span>
                        <span className="font-mono text-xs font-bold text-white">
                          OAB/PR 58.420
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-[#edeef0]">
                      <span>Realtor Licensure: CRECI-PR F57569</span>
                      <span className="flex items-center gap-1 text-[#fed488]">
                        <span className="material-symbols-outlined text-[14px]">verified</span> Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 2: HOW CAN WE HELP YOU? (3x3 PRACTICE AREA CARDS) */}
      <section className="w-full bg-[#f3f3f5] py-16 lg:py-24" id="services">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#775a19]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19]">
                PRACTICE AREAS
              </span>
              <span className="w-6 h-[2px] bg-[#775a19]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              How Can We Help You?
            </h2>
            <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
              At <strong>Caspani Lawyers</strong>, we provide personalized legal services to foreign nationals, international families, investors, and businesses with interests in Brazil. From immigration and citizenship to real estate, taxation, inheritance, and cross-border legal matters, our firm helps international clients navigate Brazilian law with clarity, confidence, and professional guidance.
            </p>
          </div>

          {/* 3x3 Grid of 9 Cards matching the prompt exactly */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Brazilian Visas & Residency */}
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#e2e2e4] hover:border-[#c5a059]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#edeef0] text-[#775a19] flex items-center justify-center mb-4 group-hover:bg-[#0f1e36] group-hover:text-[#fed488] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">badge</span>
                </div>
                <div className="w-6 h-[2px] bg-[#775a19] mb-3"></div>
                <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-2">
                  Brazilian Visas & Residency
                </h3>
                <p className="text-xs sm:text-sm text-[#44474d] mb-4 leading-relaxed">
                  Navigate Brazil's immigration system with legal guidance tailored to your circumstances. We assist foreign nationals, families, and businesses with visa applications, residence permits, and immigration compliance.
                </p>
                <ul className="space-y-1.5 text-xs text-[#1a1c1d] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Tourist, work, family reunification, and digital nomad visas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Temporary and permanent residence applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Immigration documentation, legal strategy, and administrative follow-up</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('category/brazil-immigration')}
                className="text-xs uppercase tracking-wider font-bold text-[#0f1e36] group-hover:text-[#775a19] flex items-center gap-1.5 pt-3 border-t border-[#e8e8ea] transition-colors cursor-pointer"
              >
                <span>Explore Visas & Residency</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 2. Real Estate Law & Property Investment in Brazil */}
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#e2e2e4] hover:border-[#c5a059]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#edeef0] text-[#775a19] flex items-center justify-center mb-4 group-hover:bg-[#0f1e36] group-hover:text-[#fed488] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">apartment</span>
                </div>
                <div className="w-6 h-[2px] bg-[#775a19] mb-3"></div>
                <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-2">
                  Real Estate Law & Property Investment in Brazil
                </h3>
                <p className="text-xs sm:text-sm text-[#44474d] mb-4 leading-relaxed">
                  Buying or selling property in Brazil as a foreigner requires careful legal planning. We assist international clients with property transactions, due diligence, and legal documentation, including remote transactions.
                </p>
                <ul className="space-y-1.5 text-xs text-[#1a1c1d] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Property due diligence and ownership verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Purchase agreements, legal documentation, and closing support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Real estate investment guidance for foreign buyers</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('category/real-estate')}
                className="text-xs uppercase tracking-wider font-bold text-[#0f1e36] group-hover:text-[#775a19] flex items-center gap-1.5 pt-3 border-t border-[#e8e8ea] transition-colors cursor-pointer"
              >
                <span>Explore Real Estate Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3. Investor Visas & Residency by Investment */}
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#e2e2e4] hover:border-[#c5a059]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#edeef0] text-[#775a19] flex items-center justify-center mb-4 group-hover:bg-[#0f1e36] group-hover:text-[#fed488] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">trending_up</span>
                </div>
                <div className="w-6 h-[2px] bg-[#775a19] mb-3"></div>
                <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-2">
                  Investor Visas & Residency by Investment
                </h3>
                <p className="text-xs sm:text-sm text-[#44474d] mb-4 leading-relaxed">
                  Explore Brazilian residency options through real estate or business investment. We provide legal guidance on investment eligibility, residence permit applications, and the immigration implications of investing in Brazil.
                </p>
                <ul className="space-y-1.5 text-xs text-[#1a1c1d] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Real estate and business investment residency pathways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Investor visa eligibility and application preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Immigration, corporate, and tax considerations</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('subpage/brazil-immigration/property-investor-visa-golden-visa')}
                className="text-xs uppercase tracking-wider font-bold text-[#0f1e36] group-hover:text-[#775a19] flex items-center gap-1.5 pt-3 border-t border-[#e8e8ea] transition-colors cursor-pointer"
              >
                <span>Explore Investor Residency</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 4. Brazilian Citizenship & Naturalization */}
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#e2e2e4] hover:border-[#c5a059]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#edeef0] text-[#775a19] flex items-center justify-center mb-4 group-hover:bg-[#0f1e36] group-hover:text-[#fed488] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">public</span>
                </div>
                <div className="w-6 h-[2px] bg-[#775a19] mb-3"></div>
                <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-2">
                  Brazilian Citizenship & Naturalization
                </h3>
                <p className="text-xs sm:text-sm text-[#44474d] mb-4 leading-relaxed">
                  Obtain Brazilian citizenship with professional legal assistance. We assess eligibility, prepare documentation, and guide foreign nationals through naturalization and citizenship procedures.
                </p>
                <ul className="space-y-1.5 text-xs text-[#1a1c1d] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Citizenship eligibility and legal assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Naturalization applications and document preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Administrative follow-up and legal assistance</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('category/brazilian-citizenship')}
                className="text-xs uppercase tracking-wider font-bold text-[#0f1e36] group-hover:text-[#775a19] flex items-center gap-1.5 pt-3 border-t border-[#e8e8ea] transition-colors cursor-pointer"
              >
                <span>Explore Brazilian Citizenship</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 5. International Family Law */}
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#e2e2e4] hover:border-[#c5a059]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#edeef0] text-[#775a19] flex items-center justify-center mb-4 group-hover:bg-[#0f1e36] group-hover:text-[#fed488] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">diversity_1</span>
                </div>
                <div className="w-6 h-[2px] bg-[#775a19] mb-3"></div>
                <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-2">
                  International Family Law
                </h3>
                <p className="text-xs sm:text-sm text-[#44474d] mb-4 leading-relaxed">
                  Cross-border family matters require an understanding of Brazilian law and international legal procedures. We assist individuals and families with marriage-related legal matters, international divorce, and recognition of foreign judgments in Brazil.
                </p>
                <ul className="space-y-1.5 text-xs text-[#1a1c1d] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>International marriage and prenuptial agreements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Foreign divorce recognition and related proceedings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Recognition and enforcement of foreign judgments</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('category/recognition')}
                className="text-xs uppercase tracking-wider font-bold text-[#0f1e36] group-hover:text-[#775a19] flex items-center gap-1.5 pt-3 border-t border-[#e8e8ea] transition-colors cursor-pointer"
              >
                <span>Explore International Family Law</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 6. Refugee, Asylum & Humanitarian Protection */}
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#e2e2e4] hover:border-[#c5a059]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#edeef0] text-[#775a19] flex items-center justify-center mb-4 group-hover:bg-[#0f1e36] group-hover:text-[#fed488] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">shield</span>
                </div>
                <div className="w-6 h-[2px] bg-[#775a19] mb-3"></div>
                <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-2">
                  Refugee, Asylum & Humanitarian Protection
                </h3>
                <p className="text-xs sm:text-sm text-[#44474d] mb-4 leading-relaxed">
                  Confidential legal representation for individuals seeking protection in Brazil. We assist with refugee status applications, humanitarian residence pathways, and related immigration procedures.
                </p>
                <ul className="space-y-1.5 text-xs text-[#1a1c1d] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Refugee status and humanitarian protection assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Application preparation and supporting documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Legal representation and administrative follow-up</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('category/brazil-immigration')}
                className="text-xs uppercase tracking-wider font-bold text-[#0f1e36] group-hover:text-[#775a19] flex items-center gap-1.5 pt-3 border-t border-[#e8e8ea] transition-colors cursor-pointer"
              >
                <span>Explore Humanitarian Protection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 7. Immigration Defense & Administrative Appeals */}
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#e2e2e4] hover:border-[#c5a059]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#edeef0] text-[#775a19] flex items-center justify-center mb-4 group-hover:bg-[#0f1e36] group-hover:text-[#fed488] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">gavel</span>
                </div>
                <div className="w-6 h-[2px] bg-[#775a19] mb-3"></div>
                <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-2">
                  Immigration Defense & Administrative Appeals
                </h3>
                <p className="text-xs sm:text-sm text-[#44474d] mb-4 leading-relaxed">
                  Protect your immigration rights in Brazil with legal representation in administrative proceedings, immigration disputes, and status regularization matters.
                </p>
                <ul className="space-y-1.5 text-xs text-[#1a1c1d] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Immigration appeals and administrative proceedings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Deportation and removal defense</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Immigration status regularization and legal representation</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('category/brazil-immigration')}
                className="text-xs uppercase tracking-wider font-bold text-[#0f1e36] group-hover:text-[#775a19] flex items-center gap-1.5 pt-3 border-t border-[#e8e8ea] transition-colors cursor-pointer"
              >
                <span>Explore Immigration Defense</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 8. Brazilian Taxation for Non-Residents */}
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#e2e2e4] hover:border-[#c5a059]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#edeef0] text-[#775a19] flex items-center justify-center mb-4 group-hover:bg-[#0f1e36] group-hover:text-[#fed488] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">receipt_long</span>
                </div>
                <div className="w-6 h-[2px] bg-[#775a19] mb-3"></div>
                <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-2">
                  Brazilian Taxation for Non-Residents
                </h3>
                <p className="text-xs sm:text-sm text-[#44474d] mb-4 leading-relaxed">
                  Understand your Brazilian tax obligations before investing, earning income, or transferring assets. We provide legal guidance on non-resident taxation and cross-border tax matters, coordinating specialized tax services when required.
                </p>
                <ul className="space-y-1.5 text-xs text-[#1a1c1d] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Tax implications of Brazilian property income and capital gains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Non-resident taxation and cross-border tax planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Tax considerations for foreign investors and business owners</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('subpage/others/tax-services')}
                className="text-xs uppercase tracking-wider font-bold text-[#0f1e36] group-hover:text-[#775a19] flex items-center gap-1.5 pt-3 border-t border-[#e8e8ea] transition-colors cursor-pointer"
              >
                <span>Explore Non-Resident Taxation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 9. International Inheritance & Probate in Brazil */}
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#e2e2e4] hover:border-[#c5a059]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#edeef0] text-[#775a19] flex items-center justify-center mb-4 group-hover:bg-[#0f1e36] group-hover:text-[#fed488] transition-colors">
                  <span className="material-symbols-outlined text-[26px]">account_balance</span>
                </div>
                <div className="w-6 h-[2px] bg-[#775a19] mb-3"></div>
                <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-2">
                  International Inheritance & Probate in Brazil
                </h3>
                <p className="text-xs sm:text-sm text-[#44474d] mb-4 leading-relaxed">
                  Managing an inheritance involving Brazilian assets can be complex for heirs living abroad. We assist international families with Brazilian probate proceedings, estate documentation, and cross-border succession matters.
                </p>
                <ul className="space-y-1.5 text-xs text-[#1a1c1d] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Brazilian probate and estate administration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Inheritance procedures for foreign heirs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Powers of attorney, asset transfers, and succession documentation</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('category/inheritance-probates')}
                className="text-xs uppercase tracking-wider font-bold text-[#0f1e36] group-hover:text-[#775a19] flex items-center gap-1.5 pt-3 border-t border-[#e8e8ea] transition-colors cursor-pointer"
              >
                <span>Explore Inheritance & Probate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 3: WHAT OUR CLIENTS SAY */}
      <section className="w-full bg-white py-16 lg:py-24 border-y border-[#e2e2e4]" id="testimonials">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#775a19]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19]">
                CLIENT EXPERIENCES
              </span>
              <span className="w-6 h-[2px] bg-[#775a19]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              What Our Clients Say
            </h2>
            <p className="text-sm sm:text-base text-[#44474d]">
              Verified feedback from international families, investors, and foreign nationals across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-[#f9f9fb] rounded-xl p-6 lg:p-8 border border-[#e2e2e4] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#775a19] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#775a19] text-[#775a19]" />
                  ))}
                </div>
                <p className="text-sm text-[#1a1c1d] italic leading-relaxed mb-6">
                  “Navigating Brazilian residency and acquiring beachfront real estate seemed daunting until Erica took over. Her bilingual clarity and dual legal/realtor credentials saved us months. Exceptional counsel.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#e8e8ea]">
                <div className="w-10 h-10 rounded-full bg-[#0f1e36] text-[#fed488] flex items-center justify-center font-serif font-bold text-sm">
                  MV
                </div>
                <div>
                  <p className="font-serif text-sm font-bold text-[#0f1e36]">Michael Vance</p>
                  <p className="text-xs text-[#775a19]">United States • Digital Nomad & Investor</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#f9f9fb] rounded-xl p-6 lg:p-8 border border-[#e2e2e4] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#775a19] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#775a19] text-[#775a19]" />
                  ))}
                </div>
                <p className="text-sm text-[#1a1c1d] italic leading-relaxed mb-6">
                  “Caspani Lawyers handled our investor visa and corporate compliance with remarkable discretion and speed. The Arabic translation support and cross-border tax guidance were world-class.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#e8e8ea]">
                <div className="w-10 h-10 rounded-full bg-[#0f1e36] text-[#fed488] flex items-center justify-center font-serif font-bold text-sm">
                  TA
                </div>
                <div>
                  <p className="font-serif text-sm font-bold text-[#0f1e36]">Dr. Tariq Al-Mansoor</p>
                  <p className="text-xs text-[#775a19]">United Arab Emirates • Commercial Investor</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#f9f9fb] rounded-xl p-6 lg:p-8 border border-[#e2e2e4] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#775a19] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#775a19] text-[#775a19]" />
                  ))}
                </div>
                <p className="text-sm text-[#1a1c1d] italic leading-relaxed mb-6">
                  “Our family's naturalization and real estate due diligence were handled smoothly without us needing to fly into Brazil during the initial phase. Total peace of mind and meticulous paperwork.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#e8e8ea]">
                <div className="w-10 h-10 rounded-full bg-[#0f1e36] text-[#fed488] flex items-center justify-center font-serif font-bold text-sm">
                  SM
                </div>
                <div>
                  <p className="font-serif text-sm font-bold text-[#0f1e36]">Sophie & Jean-Luc Moreau</p>
                  <p className="text-xs text-[#775a19]">France • Relocation & Dual Citizenship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 4: WHY CHOOSE CASPANI LAWYERS? */}
      <section className="w-full bg-[#0f1e36] text-white py-16 lg:py-24 relative overflow-hidden" id="our-firm">
        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-[#fed488]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#fed488]">
                PROVEN ADVANTAGES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
              Why Choose Caspani Lawyers?
            </h2>
            <p className="text-lg text-[#fed488] font-normal mb-4">
              Your Trusted Brazilian Law Firm for International Legal Matters
            </p>
            <p className="text-sm sm:text-base text-[#edeef0] leading-relaxed">
              At <strong>Caspani Lawyers</strong>, we understand the challenges of navigating Brazilian law from abroad. Our firm provides personalized legal assistance to foreign individuals, families, investors, and businesses, combining Brazilian legal expertise with an international approach.
            </p>
          </div>

          {/* 4 Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/15 hover:border-[#fed488]/60 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#fed488]/20 text-[#fed488] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">verified_user</span>
              </div>
              <h3 className="font-serif text-base font-bold text-white mb-2">
                Brazilian Legal Expertise You Can Trust
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                Led by <strong>Erica Montarini Gaspani, a licensed Brazilian attorney (OAB/PR 58.420)</strong>, our firm provides legal guidance on immigration, residency, citizenship, investments, and cross-border matters, with a commitment to professionalism and confidentiality.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/15 hover:border-[#fed488]/60 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#fed488]/20 text-[#fed488] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">hub</span>
              </div>
              <h3 className="font-serif text-base font-bold text-white mb-2">
                Integrated Legal Solutions
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                From immigration and real estate to business investments and international family matters, we consider how different legal issues connect, helping clients make informed decisions and avoid unnecessary complications.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/15 hover:border-[#fed488]/60 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#fed488]/20 text-[#fed488] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">language</span>
              </div>
              <h3 className="font-serif text-base font-bold text-white mb-2">
                Legal Assistance Wherever You Are
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                Access Brazilian legal services from anywhere in the world. We assist international clients remotely through video consultations, WhatsApp, email, and digital document exchange, with in-person procedures arranged when legally required.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/15 hover:border-[#fed488]/60 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#fed488]/20 text-[#fed488] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">translate</span>
              </div>
              <h3 className="font-serif text-base font-bold text-white mb-2">
                Multilingual & Personalized Support
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                Clear communication is essential when dealing with international legal matters. We assist clients in <strong>English, Portuguese, Spanish, Italian, and French</strong>, with Arabic interpretation available when needed. Every case receives individual attention and straightforward legal guidance.
              </p>
            </div>
          </div>

          {/* Action CTA Bar */}
          <div className="bg-white/10 rounded-2xl p-6 lg:p-8 border border-[#c5a059]/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="font-serif text-xl font-bold text-white block mb-1">
                Ready to discuss your Brazilian legal strategy?
              </span>
              <span className="text-xs sm:text-sm text-[#edeef0]">
                Schedule a direct intake session with our principal attorney.
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#bottom-consultation-section"
                className="bg-[#fed488] hover:bg-[#775a19] text-[#785a1a] hover:text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                Start Your Consultation Now
              </a>
              <a
                href="https://wa.me/5541998247700"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider border border-[#c5a059]/40 transition-colors inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-[#fed488]">chat</span>
                <span>Chat With Us Instantly on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 5: RELOCATION ASSISTANCE & PROCESS */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24" id="relocation-process">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: 6-Point Checklist */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-8 h-[2px] bg-[#775a19]"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19]">
                  END-TO-END EXECUTION
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                We Handle the Legal Process — So You Can Focus on Your Future in Brazil
              </h2>
              <p className="text-sm sm:text-base text-[#44474d] leading-relaxed mb-8">
                At <strong>Caspani Lawyers</strong>, we simplify Brazilian legal and administrative procedures for foreign individuals, families, and investors. From immigration and residency to property investments and essential registrations, we guide you through every step with personalized legal support.
              </p>

              {/* 6-Point Interactive Checklist */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#e8e8ea] shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#fed488] text-[#785a1a] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#0f1e36] block">
                      Visas & Residency Permits
                    </span>
                    <span className="text-xs text-[#44474d]">
                      Immigration applications and legal guidance.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#e8e8ea] shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#fed488] text-[#785a1a] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#0f1e36] block">
                      CPF (Brazilian Tax ID)
                    </span>
                    <span className="text-xs text-[#44474d]">
                      Registration assistance for foreign nationals.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#e8e8ea] shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#fed488] text-[#785a1a] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#0f1e36] block">
                      RNM & Federal Police Registration
                    </span>
                    <span className="text-xs text-[#44474d]">
                      Immigration registration and documentation.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#e8e8ea] shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#fed488] text-[#785a1a] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#0f1e36] block">
                      Real Estate & Investment Support
                    </span>
                    <span className="text-xs text-[#44474d]">
                      Property transactions and legal due diligence.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#e8e8ea] shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#fed488] text-[#785a1a] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#0f1e36] block">
                      Driver's License (CNH)
                    </span>
                    <span className="text-xs text-[#44474d]">
                      Guidance on obtaining or converting a foreign license.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#e8e8ea] shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#fed488] text-[#785a1a] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#0f1e36] block">
                      Document Preparation & Legalization
                    </span>
                    <span className="text-xs text-[#44474d]">
                      Assistance with required documents and administrative procedures.
                    </span>
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div className="p-4 bg-[#f3f3f5] rounded-xl border border-[#c5a059]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="font-serif text-sm font-bold text-[#0f1e36] block">
                    One Law Firm. Personalized Guidance. From Start to Finish.
                  </span>
                </div>
                <a
                  href="#bottom-consultation-section"
                  className="bg-[#0f1e36] hover:bg-[#775a19] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-xs"
                >
                  Get Legal Assistance in Brazil
                </a>
              </div>
            </div>

            {/* Right Column: Coastal Architecture Image + WhatsApp Card */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  alt="Brazilian flag — relocation and legal assistance in Brazil"
                  className="w-full h-80 lg:h-96 object-cover"
                  src="/images/brazil-immigration.jpg"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/30 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#fed488] text-[24px]">location_city</span>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#fed488] block">
                        Cross-Border Gateway
                      </span>
                      <span className="font-serif text-sm font-bold">
                        Curitiba • Rio de Janeiro • São Paulo
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono bg-white/20 px-2.5 py-1 rounded text-[#edeef0]">
                    Full National Coverage
                  </span>
                </div>
              </div>

              {/* Quick WhatsApp Inquiry Box */}
              <div className="bg-white p-6 rounded-2xl border border-[#e2e2e4] shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[22px]">quick_reference</span>
                    <span className="font-serif text-base font-bold text-[#0f1e36]">
                      Immediate WhatsApp Inquiry
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#775a19] font-bold">
                    Online • UTC-3
                  </span>
                </div>
                <p className="text-xs text-[#44474d] mb-4">
                  Need immediate advice regarding a pending visa deadline, property purchase in Brazil, or document legalization? Connect directly with our legal concierge.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://wa.me/5541998247700"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>WhatsApp: +55 (41) 99824-7700</span>
                  </a>
                  <a
                    href="mailto:contact@caspanilawyers.com"
                    className="bg-[#f3f3f5] hover:bg-[#edeef0] text-[#0f1e36] py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 border border-[#c5c6ce]"
                  >
                    <span className="material-symbols-outlined text-[18px]">email</span>
                    <span>Email Dossier</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECOND RESERVATION FORM AT THE END BEFORE FOOTER (User requirement) */}
      <section className="w-full bg-[#edeef0] py-16 lg:py-24 border-t border-[#e2e2e4]" id="bottom-consultation-section">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#775a19]"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#775a19]">
                LEGAL APPOINTMENT
              </span>
              <span className="w-6 h-[2px] bg-[#775a19]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              Book Your Legal Consultation
            </h2>
            <p className="text-sm sm:text-base text-[#44474d]">
              Protect your legal interests and move forward with confidence in Brazil. Submit your case details below for attorney review.
            </p>
          </div>

          {/* TWO-COLUMN LAYOUT: IMAGE ON THE LEFT, FORM ON THE RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
            {/* Left Column: Curated Legal Practice Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="/images/image-3-desk-passport.jpg"
                  alt="Brazilian passport and legal reference books on an attorney's desk"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/95 via-[#0f1e36]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CASPANI LAWYERS • ADVOCACIA INTERNACIONAL
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    Direct Brazilian Legal Counsel
                  </h3>
                  <p className="text-xs text-[#edeef0] leading-relaxed">
                    Protecting your interests across Brazilian immigration, citizenship, real estate acquisitions, and commercial ventures.
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-[#e9c176]">
                    <span>OAB/PR 58.420</span>
                    <span>100% Confidential</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Full Reservation Form */}
            <div className="lg:col-span-7">
              <ConsultationForm
                id="bottom-intake"
                title="Schedule Legal Consultation"
                subtitle="Confidential review by licensed Brazilian counsel within 24 hours"
                presetService="Brazilian Visas & Residence Permits"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
