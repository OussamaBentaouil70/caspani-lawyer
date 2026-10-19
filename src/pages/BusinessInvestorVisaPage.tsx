import React, { useState, useEffect } from 'react';
import { ConsultationForm } from '../components/ConsultationForm';
import {
  CheckCircle2,
  Lock,
  ArrowRight,
  FileCheck,
  Scale,
  Users,
  Compass,
  FileText,
  Clock,
  Sparkles,
  ChevronDown,
  Building2,
  TrendingUp,
  Briefcase,
  AlertTriangle,
  Receipt,
  Globe2,
  ShieldCheck,
  DollarSign,
  Landmark,
  Cpu,
  Layers,
  HelpCircle
} from 'lucide-react';

interface BusinessInvestorVisaPageProps {
  onNavigate: (route: string) => void;
}

export const BusinessInvestorVisaPage: React.FC<BusinessInvestorVisaPageProps> = ({ onNavigate }) => {
  // Sync SEO metadata
  useEffect(() => {
    document.title = 'Brazil Business Investor Visa (RN 36) | Company Investment | Caspani Lawyers';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Invest in a Brazilian business and obtain permanent residency. Legal assistance for foreign entrepreneurs with R$ 500,000 standard or R$ 150,000 innovation investments, business plans, BACEN compliance, and company formation.'
      );
    }
  }, []);

  // Form state for hero intake
  const [heroForm, setHeroForm] = useState({
    fullName: '',
    email: '',
    countryCode: '+55',
    phone: '',
    countryResidence: '',
    investmentBudget: 'R$ 500,000 (Standard Investment)',
    message: ''
  });
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  // FAQ accordion open index
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHeroSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Caspani Lawyers, my name is ${heroForm.fullName || 'Client'}. I am inquiring about the Brazil Business Investor Visa (RN 36).\nInvestment Budget: ${heroForm.investmentBudget}\nResidence Country: ${heroForm.countryResidence}\nPhone: ${heroForm.countryCode} ${heroForm.phone}\nEmail: ${heroForm.email}\nProject Brief: ${heroForm.message}`
    );
    window.open(`https://wa.me/5541998247700?text=${text}`, '_blank');
  };

  const faqs = [
    {
      question: '1. What is the Brazil Business Investor Visa?',
      answer:
        'It is a Brazilian residence-by-investment pathway (regulated under Normative Resolution RN 36/2018) for qualifying foreign nationals who invest capital in a Brazilian company and satisfy the applicable immigration requirements.'
    },
    {
      question: '2. How much do I need to invest?',
      answer:
        'The standard minimum qualifying investment is generally R$ 500,000. Certain eligible innovation or technology projects may qualify under a reduced R$ 150,000 investment threshold, subject to additional requirements.'
    },
    {
      question: '3. Can I start a new company to qualify?',
      answer:
        'Yes. Establishing a new Brazilian company (e.g., Sociedade Limitada - LLC) may provide a qualifying investment structure when the legal, corporate, and documentary requirements are satisfied.'
    },
    {
      question: '4. Can I invest in an existing Brazilian company?',
      answer:
        'Yes, potentially. The transaction and capital contribution must satisfy the applicable corporate, foreign direct investment (BACEN), and immigration requirements.'
    },
    {
      question: '5. Can I qualify by purchasing shares in a Brazilian company?',
      answer:
        'A share acquisition does not automatically qualify. The transaction must be legally assessed to determine whether it constitutes an eligible direct capital injection under the relevant immigration rules.'
    },
    {
      question: '6. Can I invest less than R$ 500,000?',
      answer:
        'Certain qualifying innovative or technology-related projects may be eligible under the reduced R$ 150,000 investment framework. Additional criteria, such as incubator endorsement or CNPq technological alignment, apply.'
    },
    {
      question: '7. Do I need a business plan?',
      answer:
        'Yes. A detailed business plan is an essential statutory part of the application and must address the operational, financial, and economic aspects of the proposed investment, including job creation projections.'
    },
    {
      question: '8. Does opening a Brazilian company automatically grant residency?',
      answer:
        'No. Company formation and immigration authorization are separate legal procedures. Merely registering a CNPJ does not confer residency rights without satisfying the RN 36 capital and business criteria.'
    },
    {
      question: '9. Do I need to transfer the investment funds from abroad?',
      answer:
        'Yes. The applicable investor immigration framework generally requires qualifying foreign investment to be transferred through authorized banking channels and properly registered with the Central Bank of Brazil (BACEN RDE-IED).'
    },
    {
      question: '10. Can I apply while living outside Brazil?',
      answer:
        'Yes. Foreign investors can prepare and initiate relevant corporate and immigration procedures while abroad, appointing legal counsel via Power of Attorney (Procuração Pública).'
    },
    {
      question: '11. Can I work in my Brazilian company?',
      answer:
        'An approved residence authorization under the business investor category allows the investor to act as administrator/director and undertake commercial activities consistent with the authorization and Brazilian law.'
    },
    {
      question: '12. Can my spouse and children obtain residency?',
      answer:
        'Yes. Eligible family members (spouse, stable union partner, dependent children) may qualify for residence through family reunification (Reunião Familiar).'
    },
    {
      question: '13. Is the Business Investor Visa permanent?',
      answer:
        'The applicable investment framework provides residence authorization for an indefinite term, subject to periodic reviews by the Ministry of Justice confirming that the business remains operational and compliant.'
    },
    {
      question: '14. Can I close my company after obtaining residency?',
      answer:
        'Closing, liquidating, or disposing of the qualifying business may jeopardize the legal basis of the residence authorization. Legal advice is recommended before making any structural changes to the investment.'
    },
    {
      question: '15. Can I obtain Brazilian citizenship through business investment?',
      answer:
        'Investment does not automatically grant citizenship. However, 4 years of continuous lawful residence (ordinary naturalization) allows foreign investors to apply for Brazilian naturalization and a Brazilian passport.'
    },
    {
      question: '16. Is the Business Investor Visa the same as the Brazil Golden Visa?',
      answer:
        'Not exactly. Company investment residency (RN 36: R$ 500,000 / R$ 150,000 in an operating business) and real estate investment residency (RN 36/45: R$ 700,000 or R$ 1,000,000 in property) are separate pathways with different qualifying criteria.'
    },
    {
      question: '17. Do I need to hire Brazilian employees?',
      answer:
        'Employment creation and economic impact are highly relevant to the assessment of a business investment project, particularly under the technology innovation category or standard multi-year business projections.'
    },
    {
      question: '18. Will I become a Brazilian tax resident?',
      answer:
        'Not necessarily on day one. Tax residency depends on statutory physical presence criteria (e.g. staying over 183 days in a 12-month period) or establishing fiscal domicile, rather than company ownership alone.'
    },
    {
      question: '19. What is VIPER?',
      answer:
        'VIPER was an acronym under Brazil\'s former foreign law (Visto Permanente). The modernized Migration Law (13.445/2017) uses the formal term "Autorização de Residência com Base em Investimento Econômico".'
    },
    {
      question: '20. How much does legal representation cost?',
      answer:
        'Professional fees depend on whether you require new company formation, business plan drafting, Central Bank registration, and consular or in-country filings. At Caspani Lawyers, we begin with a paid legal consultation and provide transparent fee proposals.'
    }
  ];

  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* ========================================================
          1. HERO SECTION: BUSINESS INVESTMENT & RESIDENCY
          ======================================================== */}
      <section className="relative w-full text-white min-h-[660px] flex items-center py-12 lg:py-20 overflow-hidden">
        {/* Background Image: São Paulo financial district & Brazilian corporate skyline */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85')`
          }}
        ></div>

        {/* Multi-Stop Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d16]/95 via-[#071929]/90 to-[#040e18]/85 pointer-events-none"></div>

        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 w-full z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#e9c176] mb-4">
            <button
              onClick={() => onNavigate('services')}
              className="hover:underline hover:text-white transition-colors cursor-pointer"
            >
              SERVICES
            </button>
            <span className="text-white/60">›</span>
            <button
              onClick={() => onNavigate('category/brazil-immigration')}
              className="hover:underline hover:text-white transition-colors cursor-pointer"
            >
              BRAZIL IMMIGRATION
            </button>
            <span className="text-white/60">›</span>
            <span className="text-white">BUSINESS INVESTOR VISA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#e9c176] mb-2 block">
                RESOLUÇÃO NORMATIVA 36 • RESIDENCE BY INVESTMENT
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] lg:leading-[54px] font-bold text-white mb-3">
                Brazil Business Investor Visa – Company Investment &amp; Residency
              </h1>

              <p className="text-lg text-[#fed488] font-serif italic mb-4">
                Invest in a Brazilian business. Establish your residency. Build your future in Brazil.
              </p>

              <div className="text-sm sm:text-base text-[#edeef0] leading-relaxed max-w-2xl space-y-3 mb-6">
                <p>
                  Are you planning to start a business, acquire a company, or expand your international operations into Brazil? Brazil offers qualifying foreign entrepreneurs and investors a legal pathway to residence through investment in a Brazilian company.
                </p>
                <p>
                  At <strong className="text-white">Caspani Lawyers</strong>, we provide personalized legal assistance with business investment immigration, corporate documentation, investment compliance, and residence authorization applications. From evaluating your investment strategy to preparing your immigration application, we help you navigate the Brazilian legal framework with clarity and confidence.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
                <a
                  href="#business-hero-form"
                  className="inline-flex items-center justify-center gap-2 bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg"
                >
                  <span>Book Your Legal Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#business-residency-overview"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/30 transition-all duration-200"
                >
                  Explore Business Investment Residency
                </a>
              </div>

              {/* 4 Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-white/20">
                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Scale className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Licensed Brazilian Attorney – OAB/PR 58.420
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Business Immigration &amp; Investment Legal Services
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Assistance for Foreign Entrepreneurs
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Multilingual and Confidential Consultations
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Intake Form */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="business-hero-form">
              <div className="bg-white text-[#1a1c1d] rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/20">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19] block mb-1">
                  REQUEST YOUR LEGAL CONSULTATION
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0f1e36] mb-1">
                  Start Your Business Investment Journey
                </h3>
                <p className="text-xs text-[#44474d] mb-4 pb-2 border-b border-[#e8e8ea]">
                  Tell us about your business plans and our office will contact you regarding the next steps.
                </p>

                {heroSubmitted ? (
                  <div className="py-6 text-center animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-[#f3ede0] text-[#775a19] mx-auto flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-7 h-7 text-[#775a19]" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-[#0f1e36] mb-1">
                      Inquiry Received
                    </h4>
                    <p className="text-xs text-[#44474d] mb-4">
                      Thank you, <strong className="text-[#0f1e36]">{heroForm.fullName}</strong>. A licensed Brazilian corporate and immigration attorney will review your project within 24 business hours.
                    </p>
                    <button
                      onClick={handleWhatsAppRedirect}
                      type="button"
                      className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md mb-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Chat Immediately on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setHeroSubmitted(false)}
                      type="button"
                      className="text-xs text-[#775a19] underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="biz-name">
                        Full Name *
                      </label>
                      <input
                        id="biz-name"
                        required
                        type="text"
                        value={heroForm.fullName}
                        onChange={(e) => setHeroForm({ ...heroForm, fullName: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="biz-email">
                          Email Address *
                        </label>
                        <input
                          id="biz-email"
                          required
                          type="email"
                          value={heroForm.email}
                          onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="biz-residence">
                          Country of Residence
                        </label>
                        <input
                          id="biz-residence"
                          type="text"
                          value={heroForm.countryResidence}
                          onChange={(e) => setHeroForm({ ...heroForm, countryResidence: e.target.value })}
                          placeholder="e.g. United States, UK"
                          className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="biz-phone">
                        Phone / WhatsApp *
                      </label>
                      <div className="grid grid-cols-4 gap-1.5">
                        <select
                          value={heroForm.countryCode}
                          onChange={(e) => setHeroForm({ ...heroForm, countryCode: e.target.value })}
                          className="col-span-1 bg-[#f3f3f5] text-[#1a1c1d] px-1.5 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19]"
                        >
                          <option value="+55">🇧🇷 +55</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+33">🇫🇷 +33</option>
                          <option value="+49">🇩🇪 +49</option>
                          <option value="+39">🇮🇹 +39</option>
                          <option value="+34">🇪🇸 +34</option>
                          <option value="+971">🇦🇪 +971</option>
                          <option value="+595">🇵🇾 +595</option>
                        </select>
                        <input
                          id="biz-phone"
                          required
                          type="tel"
                          value={heroForm.phone}
                          onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                          placeholder="Phone number"
                          className="col-span-3 bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="biz-budget">
                        Planned Investment Amount
                      </label>
                      <select
                        id="biz-budget"
                        value={heroForm.investmentBudget}
                        onChange={(e) => setHeroForm({ ...heroForm, investmentBudget: e.target.value })}
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19]"
                      >
                        <option value="R$ 500,000 (Standard Investment)">R$ 500,000 (Standard Investment)</option>
                        <option value="R$ 150,000 (Innovation / Technology)">R$ 150,000 (Innovation / Technology)</option>
                        <option value="R$ 1,000,000 - R$ 2,500,000">R$ 1,000,000 - R$ 2,500,000</option>
                        <option value="Over R$ 2,500,000">Over R$ 2,500,000</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="biz-message">
                        Message
                      </label>
                      <textarea
                        id="biz-message"
                        rows={2}
                        value={heroForm.message}
                        onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                        placeholder="Briefly describe your business project, proposed investment, and residency objectives."
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] p-2.5 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <span>Schedule My Legal Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[10px] text-center text-[#75777e] leading-tight">
                      Legal consultations are paid and conducted online by appointment. Your information is treated confidentially.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. BRAZIL BUSINESS INVESTMENT RESIDENCY (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]" id="business-residency-overview">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image: Corporate meeting / investment boardroom */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                  alt="Business investors meeting in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[450px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-3.5 rounded-xl border border-[#c5a059]/30 flex items-center justify-between text-xs">
                  <span className="font-medium">São Paulo • Curitiba • Rio de Janeiro</span>
                  <span className="font-mono text-[#e9c176]">RN 36 / CNIg</span>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — BRAZIL BUSINESS INVESTMENT RESIDENCY
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Invest in Brazil. Build a Business. Establish Your Residency.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed mb-6">
                <p>
                  Brazil offers a residence-by-investment pathway for foreign nationals who invest qualifying capital in a Brazilian company. This immigration category is designed for entrepreneurs and investors seeking to establish, acquire, or develop genuine business operations in Brazil.
                </p>
                <p>
                  Unlike a passive investment arrangement, the business investor pathway generally requires a documented investment project, an operating business structure, and compliance with the applicable foreign investment and immigration regulations.
                </p>
                <p>
                  At <strong className="text-[#0f1e36]">Caspani Lawyers</strong>, we help international investors understand the legal requirements before committing capital to a Brazilian company. Our approach focuses on connecting the immigration strategy with the legal structure and documentation of the proposed investment.
                </p>
              </div>

              <a
                href="#business-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Speak With a Brazilian Investment Immigration Lawyer</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. INVESTMENT REQUIREMENTS: R$ 500k vs R$ 150k
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — STATUTORY THRESHOLDS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              How Much Do You Need to Invest for a Brazil Business Investor Visa?
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              The minimum qualifying investment depends on the nature of the business project and the applicable immigration category under Normative Resolution RN 36.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            {/* Left Image: Corporate Investment & Capital Injection */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-lg border border-[#e2e2e4] relative min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=85"
                alt="Corporate venture and capital investment in Brazil"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-[#0f1e36]/30 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-mono uppercase text-[#e9c176]">RN 36 / CNIg Criteria</span>
                <p className="text-xs font-semibold">Foreign Direct Investment (BACEN RDE-IED)</p>
              </div>
            </div>

            {/* Right: Tier 1 & Tier 2 Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tier 1: R$ 500,000 */}
              <div className="bg-white rounded-2xl p-7 border border-[#e2e2e4] shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-serif font-bold text-[#775a19] block mb-1">
                    R$ 500,000
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0f1e36] block mb-3">
                    Standard Business Investment
                  </span>
                  <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-4">
                    The general company investment pathway requires a qualifying investment of at least <strong>R$ 500,000</strong> in a Brazilian legal entity.
                  </p>
                  <p className="text-xs text-[#75777e] leading-relaxed">
                    The investment must comply with the applicable foreign capital and immigration requirements, accompanied by a multi-year economic plan.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#e8e8ea] text-xs font-semibold text-[#0f1e36]">
                  Applicable to all standard commercial and industrial sectors.
                </div>
              </div>

              {/* Tier 2: R$ 150,000 */}
              <div className="bg-white rounded-2xl p-7 border border-[#e2e2e4] shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-serif font-bold text-[#775a19] block mb-1">
                    R$ 150,000
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0f1e36] block mb-3">
                    Innovation and Technology Projects
                  </span>
                  <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-4">
                    A reduced investment threshold of <strong>R$ 150,000</strong> applies to qualifying innovative projects involving technology, research, development, or startup ventures.
                  </p>
                  <p className="text-xs text-[#75777e] leading-relaxed">
                    Approval under this category requires assessment of the project's technological characteristics, incubator support, and expected economic contribution.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#e8e8ea] text-xs font-semibold text-[#0f1e36]">
                  Targeted at software, bio-tech, clean energy, and innovative startups.
                </div>
              </div>
            </div>
          </div>

          {/* Important Investment Conditions */}
          <div className="bg-white rounded-2xl p-8 border border-[#e2e2e4] shadow-xs max-w-4xl mx-auto">
            <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-4">
              Important Investment Conditions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#1a1c1d] mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span>The investment must qualify under Brazilian immigration regulations.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span>The investor must demonstrate lawful origin and transfer of funds.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span>The investment must be properly documented and registered with BACEN.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span>A credible and robust business plan is essential.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span>The proposed business must satisfy operational criteria.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span>The applicant must satisfy personal and background requirements.</span>
              </div>
            </div>

            <div className="p-4 bg-[#fff8eb] rounded-xl border border-[#fed488] flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
              <p className="text-xs text-[#785a1a]">
                <strong>Important:</strong> Investing the minimum amount does not automatically guarantee residence authorization. The commercial substance and compliance of the business plan are thoroughly evaluated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. BUSINESS ELIGIBILITY: WHAT TYPES OF BUSINESSES QUALIFY?
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — QUALIFYING STRUCTURES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              What Types of Businesses May Qualify?
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Brazil's business investment immigration framework is intended for genuine entrepreneurial projects that meet the relevant legal and economic requirements.
            </p>
          </div>

          {/* Section 4 Featured Stock Image Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg border border-[#e2e2e4] h-60 sm:h-72 lg:h-80">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85"
              alt="Brazilian corporate headquarters and enterprise commercial operations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/90 via-[#0f1e36]/40 to-transparent flex flex-col justify-center p-6 sm:p-10 text-white max-w-2xl">
              <span className="text-[10px] font-mono uppercase text-[#e9c176] tracking-wider mb-1.5">
                Enterprise &amp; Innovation Ecosystem
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                From Technology Ventures to Commercial Operations
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                Whether establishing a technology startup in Florianópolis, an agribusiness venture in Paraná, or a corporate subsidiary in São Paulo, legal structuring ensures alignment between corporate acts and immigration permits.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
              <Building2 className="w-8 h-8 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">New Business Formation</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Establishing a new Brazilian company with qualifying foreign capital and a viable business plan.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
              <TrendingUp className="w-8 h-8 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Investment in Existing Company</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Investing in an operating Brazilian business, subject to corporate and financial diligence.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
              <Globe2 className="w-8 h-8 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Business Expansion</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Expanding international business activities into Brazil through an appropriate subsidiary structure.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
              <Cpu className="w-8 h-8 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Technology &amp; Innovation</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Developing eligible projects involving innovation, software, research, and technical activities.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
              <Briefcase className="w-8 h-8 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Business Acquisition</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Acquiring an equity interest in a Brazilian operating company meeting the capital rules.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0f1e36] text-white flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#e9c176] block mb-2 uppercase">Legal Assessment</span>
                <h4 className="font-serif text-base font-bold mb-2">Pre-Transfer Verification</h4>
                <p className="text-xs text-[#edeef0] leading-relaxed">
                  The proposed investment structure should be assessed before funds are wired or contracts are executed.
                </p>
              </div>
              <a
                href="#business-hero-form"
                className="text-xs font-bold text-[#e9c176] hover:underline flex items-center gap-1 mt-4"
              >
                <span>Discuss Your Business Investment Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. BUSINESS PLAN REQUIREMENTS (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — BUSINESS PLAN REQUIREMENTS
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Why Your Business Plan Matters
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                A qualifying capital investment is only one part of the residence application. Brazilian immigration authorities also assess the proposed business activity and the supporting investment documentation. A business plan may need to address:
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3.5 bg-white rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-1">1. Business Activities:</strong>
                  <span className="text-xs text-[#44474d]">A clear explanation of the company's products, services, commercial activities, and proposed operations in Brazil.</span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-1">2. Investment Allocation:</strong>
                  <span className="text-xs text-[#44474d]">Information explaining how the qualifying capital will be allocated and utilized in the business.</span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-1">3. Financial Projections:</strong>
                  <span className="text-xs text-[#44474d]">Reasonable multi-year financial estimates demonstrating the proposed commercial model.</span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-1">4. Employment and Economic Impact:</strong>
                  <span className="text-xs text-[#44474d]">Anticipated direct job creation for Brazilian citizens and technological development.</span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-1">5. Operational Structure &amp; Investor's Role:</strong>
                  <span className="text-xs text-[#44474d]">Details on management, corporate premises, and the foreign investor's executive role in Brazil.</span>
                </div>
              </div>

              <a
                href="#business-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm w-fit"
              >
                <span>Get Legal Guidance on Your Investment Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85"
                  alt="Business strategy, analytics and investment projections"
                  className="w-full h-80 sm:h-96 lg:h-[520px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. COMPANY FORMATION & CAPITAL TRANSFERS (SIDE-BY-SIDE WITH IMAGES)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Company Formation */}
            <div className="bg-[#f9f9fb] rounded-2xl p-8 border border-[#e8e8ea] flex flex-col justify-between">
              <div>
                <div className="relative h-48 rounded-xl overflow-hidden mb-6 shadow-xs border border-[#e2e2e4]">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=85"
                    alt="Corporate entity formation and legal registration in Brazil"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/85 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold">Junta Comercial &amp; Receita Federal (CNPJ)</span>
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                  — CORPORATE COMPLIANCE
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-3">
                  Starting a Business in Brazil as a Foreigner
                </h3>
                <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-4">
                  Foreign nationals may establish or invest in Brazilian companies, subject to corporate, registration, tax, and immigration requirements:
                </p>
                <div className="space-y-1.5 text-xs text-[#1a1c1d] mb-6">
                  <p>• Selection of appropriate corporate structure (Ltda or S.A.)</p>
                  <p>• Registration with the Board of Trade (Junta Comercial)</p>
                  <p>• Tax ID registration (CNPJ and foreign partner CPF)</p>
                  <p>• Appointment of local legal representative (if non-resident)</p>
                  <p>• Corporate governance, accounting, and labor compliance</p>
                </div>
              </div>
              <a
                href="#business-hero-form"
                className="text-xs font-bold text-[#775a19] hover:underline flex items-center gap-1"
              >
                <span>Speak With a Brazilian Business Immigration Lawyer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right: Capital Transfers & BACEN */}
            <div className="bg-[#f9f9fb] rounded-2xl p-8 border border-[#e8e8ea] flex flex-col justify-between">
              <div>
                <div className="relative h-48 rounded-xl overflow-hidden mb-6 shadow-xs border border-[#e2e2e4]">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=85"
                    alt="Central Bank foreign exchange and capital transfer compliance"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/85 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold">BACEN RDE-IED &amp; Contratos de Câmbio</span>
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                  — FOREIGN EXCHANGE RULES
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-3">
                  How to Transfer Investment Funds to Brazil
                </h3>
                <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-4">
                  Foreign investment documentation is a central element of a business investor residence application. Investors must ensure that transfers comply with Brazilian foreign exchange rules:
                </p>
                <div className="space-y-1.5 text-xs text-[#1a1c1d] mb-6">
                  <p>• <strong>Origin of Funds:</strong> Lawful source of wealth documentation.</p>
                  <p>• <strong>International Transfer Records:</strong> Official FX contracts (Contrato de Câmbio).</p>
                  <p>• <strong>Central Bank Registration:</strong> Registration in BACEN's RDE-IED system.</p>
                  <p>• <strong>Corporate Capital Documentation:</strong> Capitalization in company articles.</p>
                  <p>• <strong>Investment Traceability:</strong> Clear financial trail to company accounts.</p>
                </div>
              </div>
              <a
                href="#business-hero-form"
                className="text-xs font-bold text-[#775a19] hover:underline flex items-center gap-1"
              >
                <span>Plan Your Investment With Legal Support</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. HOW TO APPLY: STEP-BY-STEP PROCESS
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — STEP-BY-STEP ROADMAP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              Brazil Business Investor Visa Process – Step by Step
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              A structured roadmap ensuring full corporate and regulatory compliance from the initial consultation to Federal Police registration.
            </p>
          </div>

          {/* Section 7 Stock Image Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg border border-[#e2e2e4] h-60 sm:h-72">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=85"
              alt="Legal counsel reviewing step-by-step business investment roadmap"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/90 via-[#0f1e36]/40 to-transparent flex flex-col justify-center p-6 sm:p-10 text-white max-w-xl">
              <span className="text-[10px] font-mono uppercase text-[#e9c176] tracking-wider mb-1.5">
                Strategic Immigration Execution
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                Coordinated Corporate &amp; Immigration Protocol
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                Every stage is supervised by licensed Brazilian counsel (OAB/PR 58.420) to prevent procedural rejections and bureaucratic delays.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">1</span>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Initial Legal Consultation</h4>
              <p className="text-xs text-[#44474d]">We assess your proposed investment, business model, nationality, and immigration circumstances.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">2</span>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Strategy &amp; Structure</h4>
              <p className="text-xs text-[#44474d]">We identify the corporate structure and documentary requirements affecting your investment.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">3</span>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Corporate Preparation</h4>
              <p className="text-xs text-[#44474d]">The Brazilian company is registered or existing corporate documents are thoroughly reviewed.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">4</span>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Capital Transfer &amp; BACEN</h4>
              <p className="text-xs text-[#44474d]">Qualifying capital is wired, FX contracts are closed, and registration with Central Bank is completed.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">5</span>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Business Plan &amp; Evidence</h4>
              <p className="text-xs text-[#44474d]">We organize the comprehensive business plan, corporate records, and source of funds documentation.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">6</span>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Immigration Submission</h4>
              <p className="text-xs text-[#44474d]">We lodge the residence authorization petition before the Ministry of Justice (MigranteWeb).</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">7</span>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Federal Police Registration</h4>
              <p className="text-xs text-[#44474d]">Following approval, we guide you through the Federal Police biometric appointment and CRNM issuance.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">8</span>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Ongoing Compliance</h4>
              <p className="text-xs text-[#44474d]">We provide guidance on ongoing compliance, job creation milestones, and future naturalization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. REQUIRED DOCUMENTS (WITH CHECKLIST & STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — DOCUMENTATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Documents Required for a Brazil Business Investor Visa
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d]">
              The exact document checklist depends on the investment category, corporate structure, applicant's nationality, and application procedure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Left Column: Dossier Stock Image */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-lg border border-[#e2e2e4]">
              <img
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=85"
                alt="Corporate contracts, sworn translations, and apostilled legal documents"
                className="w-full h-80 sm:h-96 lg:h-full object-cover"
              />
              <div className="bg-[#0f1e36] text-white p-5">
                <span className="text-[11px] font-mono text-[#e9c176] uppercase block mb-1">Hague Apostille &amp; Sworn Translations</span>
                <p className="text-xs text-[#edeef0] leading-relaxed">
                  Foreign documents must be legalized or apostilled in the issuing jurisdiction and translated into Portuguese by an accredited Brazilian sworn translator.
                </p>
              </div>
            </div>

            {/* Right Column: 14 Document Items Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                'Valid passport',
                'Applicant identification and civil documents',
                'Criminal background certificates',
                'Brazilian company registration documents (Contrato Social)',
                'Articles of association or corporate bylaws',
                'Business plan and multi-year financial projections',
                'Evidence of qualifying capital investment',
                'Foreign exchange and BACEN RDE-IED records',
                'Documentation supporting lawful origin of funds',
                'Corporate financial and operational records',
                'Apostilled or legalized foreign documents',
                'Certified translations into Portuguese',
                'Completed immigration application forms',
                'Proof of payment of applicable government fees'
              ].map((doc, idx) => (
                <div key={idx} className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#1a1c1d]">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="#business-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Request Your Legal Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. RESIDENCY VALIDITY, FAMILY & CITIZENSHIP (3 DEEP-DIVES WITH STOCK IMAGES)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Validity */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div className="relative h-44 overflow-hidden border-b border-[#e8e8ea]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                  alt="Brazilian corporate status and permanent business presence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 to-transparent flex items-end p-4">
                  <span className="text-[10px] font-mono text-[#e9c176] uppercase">Indefinite Term Residence</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19] block mb-2">
                    RESIDENCY VALIDITY
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-3">
                    Is the Business Investor Visa Permanent?
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed mb-3">
                    Brazil's business investor framework provides residence authorization for an indefinite term. However, authorities may review whether the business remains active and operational.
                  </p>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Withdrawing the investment or dissolving the company can jeopardize the legal basis of your residency.
                  </p>
                </div>
                <a href="#business-hero-form" className="text-xs font-bold text-[#775a19] hover:underline pt-4 block">
                  Discuss Your Long-Term Strategy →
                </a>
              </div>
            </div>

            {/* Card 2: Family */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div className="relative h-44 overflow-hidden border-b border-[#e8e8ea]">
                <img
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80"
                  alt="Foreign investor family relocating to Brazil"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 to-transparent flex items-end p-4">
                  <span className="text-[10px] font-mono text-[#e9c176] uppercase">Family Reunification (Reunião Familiar)</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19] block mb-2">
                    FAMILY RESIDENCY
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-3">
                    Can Your Family Move to Brazil With You?
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed mb-3">
                    Yes. Eligible family members (spouse, partner in a stable union, children, and qualifying dependents) qualify for Brazilian residence authorization through family reunification.
                  </p>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Family reunification petitions can be filed concurrently or following initial investor approval.
                  </p>
                </div>
                <a href="#business-hero-form" className="text-xs font-bold text-[#775a19] hover:underline pt-4 block">
                  Explore Family Residency Options →
                </a>
              </div>
            </div>

            {/* Card 3: Citizenship */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div className="relative h-44 overflow-hidden border-b border-[#e8e8ea]">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80"
                  alt="Brazilian citizenship naturalization and passport"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 to-transparent flex items-end p-4">
                  <span className="text-[10px] font-mono text-[#e9c176] uppercase">Ordinary Naturalization (4 Years)</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19] block mb-2">
                    CITIZENSHIP
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-3">
                    Can an Investment Lead to Brazilian Citizenship?
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed mb-3">
                    Brazil does not sell passports directly. However, maintaining 4 years of qualifying lawful residence allows business investors to apply for ordinary naturalization.
                  </p>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Applicants must satisfy Portuguese proficiency and clean background checks.
                  </p>
                </div>
                <a href="#business-hero-form" className="text-xs font-bold text-[#775a19] hover:underline pt-4 block">
                  Explore Brazilian Citizenship Services →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. RISKS & TAX CONSIDERATIONS (WITH STOCK IMAGES)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Card 1: Prudence */}
            <div className="p-8 rounded-2xl bg-[#f9f9fb] border border-[#e8e8ea] flex flex-col justify-between">
              <div>
                <div className="relative h-44 rounded-xl overflow-hidden mb-6 shadow-xs border border-[#e2e2e4]">
                  <img
                    src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=85"
                    alt="Commercial contracts and labor compliance in Brazil"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/80 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold">Corporate Governance &amp; CLT Protections</span>
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                  — COMMERCIAL PRUDENCE
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-4">
                  What Foreign Entrepreneurs Should Know Before Investing in Brazil
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Operating a business in Brazil requires careful legal and financial planning across corporate compliance, labor law (CLT), municipal licensing, and commercial contracts.
                </p>
                <div className="space-y-1.5 text-xs text-[#1a1c1d]">
                  <p>• <strong>Corporate Compliance:</strong> Junta Comercial filings and annual balance sheets.</p>
                  <p>• <strong>Employment &amp; Labor Law:</strong> Strict CLT statutory worker protections.</p>
                  <p>• <strong>Commercial Licensing:</strong> Municipal permits (Alvará de Funcionamento).</p>
                  <p>• <strong>Contractual Protection:</strong> Rigorous shareholder agreements.</p>
                </div>
              </div>
            </div>

            {/* Card 2: Taxation */}
            <div className="p-8 rounded-2xl bg-[#f9f9fb] border border-[#e8e8ea] flex flex-col justify-between">
              <div>
                <div className="relative h-44 rounded-xl overflow-hidden mb-6 shadow-xs border border-[#e2e2e4]">
                  <img
                    src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=85"
                    alt="Brazilian tax planning and international cross-border accounting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/80 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold">Fiscal Framework &amp; Double Tax Treaties</span>
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                  — TAX PLANNING
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-4">
                  Business Investment, Residency and Taxation in Brazil
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Investing in a Brazilian company creates distinct tax considerations for both the corporate entity and the foreign individual:
                </p>
                <div className="space-y-1.5 text-xs text-[#1a1c1d]">
                  <p>• Corporate tax regimes (Simples Nacional, Lucro Presumido, Lucro Real)</p>
                  <p>• Profit distribution exemptions and dividend repatriation rules</p>
                  <p>• Individual tax residency (183-day physical presence test)</p>
                  <p>• Avoidance of international double taxation and bilateral tax treaties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. FREQUENTLY ASKED QUESTIONS (20 FAQS WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — COMMON INQUIRIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Brazil Business Investor Visa – FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d]">
              Key questions on capital thresholds, company formation, business plans, family members, and taxes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
            {/* Left Column: FAQ Side Stock Image */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-md border border-[#e2e2e4] sticky top-28">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=85"
                alt="Direct consultation with licensed Brazilian investment counsel"
                className="w-full h-72 sm:h-80 object-cover"
              />
              <div className="bg-[#0f1e36] text-white p-5">
                <span className="text-[10px] font-mono uppercase text-[#e9c176] block mb-1">
                  Have Specific Questions?
                </span>
                <p className="text-xs text-[#edeef0] mb-3 leading-relaxed">
                  Our corporate and immigration attorneys provide individualized analysis for each cross-border commercial case.
                </p>
                <a
                  href="#business-hero-form"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e9c176] hover:underline"
                >
                  <span>Book Paid Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: 20 FAQs Accordion */}
            <div className="lg:col-span-8 space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="bg-white rounded-xl border border-[#e8e8ea] overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors cursor-pointer hover:bg-[#f9f9fb]"
                    >
                      <span className="text-sm sm:text-base font-semibold text-[#0f1e36] pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#775a19] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#44474d] leading-relaxed border-t border-[#f1f2f4]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          12. FINAL SECTION: IMAGE ON LEFT, FORM ON RIGHT (AS REQUESTED)
          ======================================================== */}
      <section className="w-full bg-[#edeef0] py-16 lg:py-24 border-t border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — READY TO INVEST IN BRAZIL?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Build Your Business in Brazil With Legal Confidence
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Whether you are launching a new venture, expanding an international company, or investing in an existing Brazilian business, understanding the legal and immigration requirements is essential. At Caspani Lawyers, we provide personalized legal guidance to help international investors navigate business investment immigration and related corporate documentation.
            </p>
          </div>

          {/* TWO-COLUMN LAYOUT: IMAGE ON THE LEFT, FORM ON THE RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto mb-10">
            {/* Left Column: Curated Corporate Stock Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85"
                  alt="Business executive and investor consultation in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/95 via-[#0f1e36]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CONFIDENTIAL LEGAL INTAKE
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    Corporate &amp; Investor Concierge
                  </h3>
                  <p className="text-xs text-[#edeef0] leading-relaxed">
                    Direct case review by licensed Brazilian corporate counsel within 24 business hours.
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
                id="biz-bottom-reservation-form"
                title="Schedule Business Investor Consultation"
                subtitle="Confidential review by licensed Brazilian corporate counsel within 24 hours"
                presetService="Business Investment Visa"
              />
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="max-w-3xl mx-auto text-center border-t border-[#c5c6ce] pt-6 text-[11px] text-[#75777e] leading-relaxed">
            <p>
              <strong>Legal Disclaimer:</strong> This page provides general legal information and does not constitute individualized legal, financial, or investment advice. Investment thresholds, immigration requirements, corporate regulations, and administrative procedures may change. Each investment and residence application must be evaluated under the legislation and requirements in force at the relevant time. Neither business success, residence approval, nor Brazilian citizenship can be guaranteed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
