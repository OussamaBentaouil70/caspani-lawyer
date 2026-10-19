import React, { useState, useEffect } from 'react';
import { ConsultationForm } from '../components/ConsultationForm';
import {
  CheckCircle2,
  Lock,
  ArrowRight,
  Scale,
  Globe2,
  ChevronDown,
  AlertTriangle,
  Award,
  Sparkles,
  ShieldCheck,
  Clock,
  UserCheck,
  FileCheck,
  Users,
  Compass,
  FileText,
  HelpCircle,
  TrendingUp,
  Heart,
  Baby,
  Calendar,
  BookOpen
} from 'lucide-react';

interface OneYearNaturalizationPageProps {
  onNavigate: (route: string) => void;
}

export const OneYearNaturalizationPage: React.FC<OneYearNaturalizationPageProps> = ({ onNavigate }) => {
  // Sync document title and meta description
  useEffect(() => {
    document.title = 'One-Year Brazilian Naturalization (Spouses & Parents) | Caspani Lawyers';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Legal assistance for Brazilian citizenship after one year of residence based on marriage, stable union, or having a Brazilian child under Article 66 of the Migration Law.'
      );
    }
  }, []);

  // Hero form state (Lform 3la liman)
  const [heroForm, setHeroForm] = useState({
    fullName: '',
    email: '',
    countryCode: '+55',
    phone: '',
    qualifyingTie: 'Married to a Brazilian Citizen',
    residenceDuration: 'Currently living in Brazil (>1 year)',
    currentCountry: '',
    message: ''
  });
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHeroSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Caspani Lawyers, my name is ${heroForm.fullName || 'Client'}. I am inquiring about One-Year Brazilian Naturalization (Marriage / Child).\nQualifying Family Tie: ${heroForm.qualifyingTie}\nResidence Tenure: ${heroForm.residenceDuration}\nLocation: ${heroForm.currentCountry}\nPhone: ${heroForm.countryCode} ${heroForm.phone}\nEmail: ${heroForm.email}\nDetails: ${heroForm.message}`
    );
    window.open(`https://wa.me/5541998247700?text=${text}`, '_blank');
  };

  const faqs = [
    {
      question: '1. Can I become a Brazilian citizen after one year?',
      answer:
        'Certain foreign residents with qualifying Brazilian family ties—specifically spouses, partners in a recognized stable union, or parents of a Brazilian child—may apply for ordinary naturalization after just one year of qualifying continuous residence, provided all other statutory requirements are satisfied.'
    },
    {
      question: '2. Does marrying a Brazilian automatically give me citizenship?',
      answer:
        'No. Marriage does not automatically confer citizenship or a Brazilian passport. It allows you to obtain residency through family reunification and reduces the ordinary naturalization residence requirement from four years to one year. You must still submit a formal naturalization application to the Ministry of Justice.'
    },
    {
      question: '3. Can I obtain Brazilian citizenship through a stable union?',
      answer:
        'Potentially, yes. A legally recognized stable union (união estável) with a Brazilian citizen, formalized through a public deed in a Cartório or judicial recognition, supports eligibility for the one-year reduced naturalization residence period.'
    },
    {
      question: '4. Can I obtain Brazilian citizenship if I have a Brazilian child?',
      answer:
        'Yes. Under Article 66, I, "a" of Law No. 13,445/2017, foreign parents of a Brazilian child (born in Brazil or abroad to a Brazilian parent) qualify for the reduced one-year residence requirement for naturalization.'
    },
    {
      question: '5. How many months can I be outside Brazil during the one qualifying year?',
      answer:
        'Under administrative guidelines from the Ministry of Justice, applicants under the one-year ordinary naturalization track generally cannot have accumulated more than three months (90 days) of absence from Brazilian territory during the qualifying 12-month period.'
    },
    {
      question: '6. Do I need to speak Portuguese for one-year naturalization?',
      answer:
        'Yes. Having a Brazilian spouse or child does not exempt you from demonstrating the ability to communicate in Portuguese. You must present acceptable documentation, such as the CELPE-Bras certificate, a recognized Brazilian university degree, or accredited course certificate.'
    },
    {
      question: '7. Does the one-year period start on the day of marriage or child birth?',
      answer:
        'Not necessarily. The one-year residence clock is tied to your lawful permanent residence registration in Brazil (CRNM / RNM) and continuous physical presence, evaluated in conjunction with the existence of the qualifying family relationship.'
    },
    {
      question: '8. What happens if my spouse and I separate before naturalization is granted?',
      answer:
        'Under the Migration Law, the spouses or partners must not be legally or factually separated at the time naturalization is granted. A dissolution of the marriage or relationship before approval extinguishes eligibility under this specific track.'
    },
    {
      question: '9. Does one-year naturalization mean I will receive my passport in 12 months?',
      answer:
        'No. One year refers to the minimum period of continuous residence required before you are legally eligible to file your petition. Government processing by the Federal Police and Ministry of Justice takes additional months depending on docket backlog.'
    },
    {
      question: '10. Can I keep my original citizenship when becoming Brazilian?',
      answer:
        'Brazil permits dual and multiple citizenship under Constitutional Amendment No. 131/2023. You are not required by Brazilian law to renounce your foreign passport, though you should confirm the retention laws of your home country.'
    },
    {
      question: '11. Can foreign marriages be used directly for Brazilian naturalization?',
      answer:
        'A marriage celebrated abroad must first be transcribed at the 1º Ofício de Registro Civil in Brazil or registered through a Brazilian consulate to produce legal effects for naturalization.'
    },
    {
      question: '12. What documents are needed for the one-year naturalization application?',
      answer:
        'Key documents include your valid passport, CRNM residency card, CPF, Brazilian marriage certificate or child birth certificate, spouse\'s Brazilian identity document, Brazilian and foreign police clearances, Portuguese language evidence, and Federal Police travel movement certificates.'
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] text-[#1a1c1d] min-h-screen">
      {/* ========================================================
          1. HERO SECTION (Lform 3la liman)
          ======================================================== */}
      <section className="relative w-full bg-[#0f1e36] text-white py-14 lg:py-20 border-b border-[#223354] overflow-hidden">
        {/* Background Image with Dark Navy Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85"
            alt="International family walking hand in hand in Brazil"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36] via-[#0f1e36]/90 to-[#0f1e36]/75" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e9c176] mb-6">
            <button
              onClick={() => onNavigate('home')}
              className="hover:underline text-[#edeef0]/80 transition-colors cursor-pointer"
            >
              SERVICES
            </button>
            <span className="text-white/40">&gt;</span>
            <button
              onClick={() => onNavigate('services/brazilian-citizenship')}
              className="hover:underline text-[#edeef0]/80 transition-colors cursor-pointer"
            >
              BRAZILIAN CITIZENSHIP
            </button>
            <span className="text-white/40">&gt;</span>
            <span className="text-[#e9c176]">ONE-YEAR NATURALIZATION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Headline, Copy & Trust Badges */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e9c176] block mb-2">
                — CASPANI LAWYERS • ADVOCACIA INTERNACIONAL
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
                Brazilian Citizenship After One Year – Naturalization Through Marriage or a Brazilian Child
              </h1>
              <p className="text-base sm:text-lg font-medium text-[#e9c176] mb-4 leading-snug">
                Your family ties to Brazil may shorten your path to Brazilian citizenship.
              </p>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed mb-4">
                Are you married to a Brazilian citizen, in a legally recognized stable union with a Brazilian partner, or the parent of a Brazilian child?
              </p>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed mb-4">
                Brazilian nationality law allows certain foreign residents with qualifying family relationships to apply for ordinary naturalization after a reduced residence period of just one year.
              </p>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed mb-4">
                At Caspani Lawyers, we provide personalized legal assistance with Brazilian naturalization, residence history assessment, civil documentation, Portuguese-language requirements, and citizenship applications.
              </p>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed mb-8">
                Whether you already live in Brazil or are planning to establish residence with your family, we help you understand the legal requirements and prepare the appropriate strategy.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
                <a
                  href="#hero-consultation-card"
                  className="inline-flex items-center justify-center gap-2 bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg"
                >
                  <span>Book Your Legal Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#who-qualifies-section"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/30 transition-all duration-200"
                >
                  Check Your Naturalization Eligibility
                </a>
              </div>

              {/* 4 Trust Badges Horizontally */}
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
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Brazilian Citizenship &amp; Family Immigration
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Assistance for International Families
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Multilingual and Confidential Services
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Consultation Card (Lform 3la liman) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="hero-consultation-card">
              <div className="bg-white text-[#1a1c1d] rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/20">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c5a059] block mb-1">
                  CONFIDENTIAL LEGAL INTAKE
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0f1e36] mb-1">
                  Request Your Consultation
                </h3>
                <p className="text-xs text-[#44474d] mb-4 pb-2 border-b border-[#e8e8ea]">
                  Tell us about your family ties in Brazil and our office will contact you regarding next steps.
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
                      Thank you, <strong className="text-[#0f1e36]">{heroForm.fullName}</strong>. A licensed Brazilian citizenship attorney will review your family ties and residence timeline within 24 business hours.
                    </p>
                    <button
                      onClick={handleWhatsAppRedirect}
                      type="button"
                      className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md mb-2 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Continue via WhatsApp Concierge</span>
                    </button>
                    <button
                      onClick={() => setHeroSubmitted(false)}
                      type="button"
                      className="text-xs text-[#775a19] underline cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="hero-res-name">
                        Full Name *
                      </label>
                      <input
                        id="hero-res-name"
                        type="text"
                        required
                        value={heroForm.fullName}
                        onChange={(e) => setHeroForm({ ...heroForm, fullName: e.target.value })}
                        placeholder="Your full legal name"
                        className="w-full px-3 py-2 text-xs border border-[#c5c6ce] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#775a19] focus:border-[#775a19] bg-white text-[#1a1c1d]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="hero-res-email">
                        Email Address *
                      </label>
                      <input
                        id="hero-res-email"
                        type="email"
                        required
                        value={heroForm.email}
                        onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-3 py-2 text-xs border border-[#c5c6ce] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#775a19] focus:border-[#775a19] bg-white text-[#1a1c1d]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="hero-res-phone">
                        Phone / WhatsApp *
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={heroForm.countryCode}
                          onChange={(e) => setHeroForm({ ...heroForm, countryCode: e.target.value })}
                          className="w-20 px-2 py-2 text-xs border border-[#c5c6ce] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#775a19] bg-white text-[#1a1c1d] text-center"
                          placeholder="+55"
                        />
                        <input
                          id="hero-res-phone"
                          type="tel"
                          required
                          value={heroForm.phone}
                          onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                          placeholder="Phone number"
                          className="flex-1 px-3 py-2 text-xs border border-[#c5c6ce] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#775a19] bg-white text-[#1a1c1d]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#44474d] mb-1">
                          Qualifying Tie
                        </label>
                        <select
                          value={heroForm.qualifyingTie}
                          onChange={(e) => setHeroForm({ ...heroForm, qualifyingTie: e.target.value })}
                          className="w-full px-2 py-2 text-xs border border-[#c5c6ce] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#775a19] bg-white text-[#1a1c1d]"
                        >
                          <option value="Married to a Brazilian Citizen">Married to Brazilian Citizen</option>
                          <option value="Stable Union (União Estável)">Stable Union Partner</option>
                          <option value="Parent of a Brazilian Child">Parent of Brazilian Child</option>
                          <option value="Evaluating Options">Evaluating Family Options</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#44474d] mb-1">
                          Residence Status
                        </label>
                        <select
                          value={heroForm.residenceDuration}
                          onChange={(e) => setHeroForm({ ...heroForm, residenceDuration: e.target.value })}
                          className="w-full px-2 py-2 text-xs border border-[#c5c6ce] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#775a19] bg-white text-[#1a1c1d]"
                        >
                          <option value="Currently in Brazil (>1 year)">In Brazil &gt; 1 Year</option>
                          <option value="Currently in Brazil (<1 year)">In Brazil &lt; 1 Year</option>
                          <option value="Holding RNM Residency">Holding RNM Residency</option>
                          <option value="Currently Living Abroad">Currently Abroad</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="hero-res-msg">
                        Tell us about your situation
                      </label>
                      <textarea
                        id="hero-res-msg"
                        rows={2}
                        value={heroForm.message}
                        onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                        placeholder="Date of marriage, child birth date, Portuguese knowledge, or CRNM residency dates..."
                        className="w-full px-3 py-2 text-xs border border-[#c5c6ce] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#775a19] bg-white text-[#1a1c1d]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0f1e36] hover:bg-[#1a2d4f] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                    >
                      <Scale className="w-4 h-4 text-[#e9c176]" />
                      <span>Request 1-Year Citizenship Review</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 pt-1 text-[10px] text-[#75777e]">
                      <Lock className="w-3 h-3 text-[#775a19]" />
                      <span>Confidential Legal Review under Brazilian Bar Ethics (OAB)</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. ONE-YEAR BRAZILIAN NATURALIZATION
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — ONE-YEAR BRAZILIAN NATURALIZATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Can You Become a Brazilian Citizen After One Year?
              </h2>
              <p className="text-sm text-[#44474d] leading-relaxed mb-4">
                Brazilian law generally requires four years of qualifying residence for ordinary naturalization. However, certain applicants with close family connections to Brazil may benefit from a reduction of that residence requirement to <strong>just one year</strong>.
              </p>
              <p className="text-sm font-medium text-[#0f1e36] mb-4">
                This reduction applies to foreign nationals who:
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </div>
                  <span className="text-xs font-semibold text-[#0f1e36]">
                    Have a Brazilian child (born in Brazil or abroad); or
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </div>
                  <span className="text-xs font-semibold text-[#0f1e36]">
                    Are married to a Brazilian citizen; or
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </div>
                  <span className="text-xs font-semibold text-[#0f1e36]">
                    Live in a legally recognized stable union (união estável) with a Brazilian citizen.
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#fdfaf3] border-l-4 border-[#c5a059] mb-6 space-y-2">
                <p className="text-xs font-bold text-[#775a19]">
                  Statutory Basis: Article 66, Law No. 13,445/2017
                </p>
                <p className="text-xs text-[#44474d] leading-relaxed">
                  One year is the minimum qualifying residence period for eligible applicants, not the total time required to obtain citizenship. Applicants must still satisfy the remaining naturalization requirements and receive approval from the competent Brazilian authorities.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#hero-consultation-card"
                  className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Speak With a Brazilian Citizenship Lawyer</span>
                  <ArrowRight className="w-4 h-4 text-[#e9c176]" />
                </a>
                <button
                  onClick={() => onNavigate('services/brazilian-citizenship/ordinary-naturalization')}
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-[#775a19]/10 text-[#775a19] border border-[#775a19]/40 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Explore Standard 4-Year Route</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Section Stock Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=85"
                  alt="Federal supreme court and statutory legal architecture in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    STATUTORY REDUCTION
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Article 66, Brazilian Migration Law
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Reducing the standard four-year residency mandate to twelve continuous months for qualifying family ties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. WHO QUALIFIES?
          ======================================================== */}
      <section id="who-qualifies-section" className="w-full py-16 lg:py-20 bg-[#edeef0] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — WHO QUALIFIES?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
              Who Is Eligible for One-Year Naturalization in Brazil?
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              Review the three primary family relationships that qualify for the statutory reduction under Brazilian nationality jurisprudence:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#c5c6ce] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Foreign Spouses of Brazilian Citizens
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Foreign nationals married to Brazilian citizens may qualify for the reduced residence requirement. The marriage must be legally recognized, and the spouses must not be legally or factually separated at the time naturalization is granted.
                </p>
              </div>
              <a
                href="#marriage-section"
                className="text-xs font-bold text-[#775a19] hover:underline inline-flex items-center gap-1 pt-3 border-t border-[#e8e8ea]"
              >
                <span>Read Marriage Rules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#c5c6ce] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Foreign Partners in a Stable Union
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Foreign nationals in a legally recognized stable union (união estável) with a Brazilian citizen may also qualify. The relationship must satisfy the applicable statutory, documentary, and public deed requirements.
                </p>
              </div>
              <a
                href="#stable-union-section"
                className="text-xs font-bold text-[#775a19] hover:underline inline-flex items-center gap-1 pt-3 border-t border-[#e8e8ea]"
              >
                <span>Read Stable Union Rules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#c5c6ce] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Foreign Parents of Brazilian Children
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Foreign nationals who have a Brazilian child, whether Brazilian by birth or qualifying naturalization, benefit from the reduced residence period. The legally recognized parent-child relationship must be established through official documentation.
                </p>
              </div>
              <a
                href="#child-section"
                className="text-xs font-bold text-[#775a19] hover:underline inline-flex items-center gap-1 pt-3 border-t border-[#e8e8ea]"
              >
                <span>Read Parentage Rules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#c5c6ce] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-[#0f1e36] mb-1">
                What If You Do Not Have These Family Ties?
              </h4>
              <p className="text-xs text-[#44474d]">
                Other naturalization categories are available, including a separate one-year framework for nationals of Portuguese-speaking countries (CPLP) or statutory reductions for professional/scientific contributions.
              </p>
            </div>
            <a
              href="#hero-consultation-card"
              className="inline-flex items-center gap-1.5 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Find the Right Pathway</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#e9c176]" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. NATURALIZATION THROUGH MARRIAGE
          ======================================================== */}
      <section id="marriage-section" className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85"
                  alt="International married couple celebrating in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    TWO-STEP JURISPRUDENCE
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    From Spousal Residency to Brazilian Passport
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Step 1: Family Reunion Residency | Step 2: 1-Year Naturalization Docket.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — NATURALIZATION THROUGH MARRIAGE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Brazilian Citizenship Through Marriage
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-4">
                Marriage to a Brazilian citizen provides two distinct legal opportunities:
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    Step 1 – Residence Authorization (Family Reunification)
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    A qualifying marriage provides the basis for permanent residence authorization through family reunification, allowing the foreign spouse to live and work lawfully in Brazil.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    Step 2 – Reduced Naturalization Residence Period (1 Year)
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Once the applicant satisfies one continuous year of qualifying residence and the remaining nationality criteria, the marriage supports an expedited naturalization application.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#c5c6ce] mb-6">
                <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-2">
                  Important Marriage Requirements:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#44474d]">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19]" />
                    <span>The marriage must be legally valid under Brazilian civil law.</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19]" />
                    <span>The Brazilian spouse's nationality must be documented (RG, Certidão).</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19]" />
                    <span>The applicant must establish the qualifying 1-year residence period.</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19]" />
                    <span>The spouses must not be legally or factually separated when naturalization is granted.</span>
                  </li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fdfaf3] border-l-4 border-[#c5a059] mb-6">
                <p className="text-xs font-bold text-[#775a19]">Married Outside Brazil?</p>
                <p className="text-xs text-[#44474d]">
                  A marriage celebrated abroad must undergo consular registration or Brazilian civil transcription (Cartório do 1º Ofício) with sworn translation and apostilles before it can support naturalization.
                </p>
              </div>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Explore Citizenship Through Marriage</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. NATURALIZATION THROUGH STABLE UNION
          ======================================================== */}
      <section id="stable-union-section" className="w-full py-16 lg:py-20 bg-[#f8f9fa] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — NATURALIZATION THROUGH STABLE UNION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Can an Unmarried Partner Become Brazilian After One Year?
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-3">
                Yes. Brazilian law recognizes stable unions (união estável) as a qualifying family relationship in immigration and nationality procedures.
              </p>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                A foreign national in a legally formalized stable union with a Brazilian citizen may qualify for the reduced one-year naturalization residence period.
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-[#c5c6ce]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    What Is a Stable Union?
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    A stable union is a public, continuous, and lasting cohabitation established with the intention of creating a family entity, recognized under Article 226 of the Federal Constitution and Brazilian Civil Code.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#c5c6ce]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    Required Legal Formalities:
                  </h4>
                  <ul className="space-y-1 text-xs text-[#44474d]">
                    <li>• Public deed recognizing stable union (Escritura Pública de União Estável) executed in Cartório</li>
                    <li>• Judicial sentence of recognition, when formalized through court</li>
                    <li>• Evidence of cohabitation, joint financial accounts, or mutual domicile</li>
                    <li>• Documentation establishing the partner's Brazilian citizenship</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-[#fdfaf3] border-l-4 border-[#c5a059]">
                  <p className="text-xs font-bold text-[#775a19]">Is Living Together Enough?</p>
                  <p className="text-xs text-[#44474d]">
                    Informal cohabitation alone is not sufficient. The union must be formalized through official cartório or judicial documentation before the Ministry of Justice will accept the naturalization petition.
                  </p>
                </div>
              </div>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Naturalization Through Stable Union</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=85"
                  alt="Modern international couple consulting legal documentation"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    UNIÃO ESTÁVEL
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Cartório Public Deed Formalization
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Equating stable union rights to civil marriage for 1-year expedited naturalization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. NATURALIZATION THROUGH A BRAZILIAN CHILD
          ======================================================== */}
      <section id="child-section" className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85"
                  alt="Mother and father holding Brazilian born infant"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    FAMILY ANCHOR
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Residency &amp; Citizenship via Brazilian Child
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Constitutional non-deportation protections and 1-year citizenship pathway.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — NATURALIZATION THROUGH A BRAZILIAN CHILD
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Brazilian Citizenship for Foreign Parents of Brazilian Children
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-4">
                Having a Brazilian child provides one of the strongest immigration and naturalization pathways under Brazilian law.
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    Residence Through a Brazilian Child
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    An eligible foreign parent qualifies for immediate residence authorization through family reunification, supported by Supreme Court (STF) non-deportation jurisprudence.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    One-Year Naturalization Rule
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Article 66, I, "a" reduces the ordinary residence requirement to one year for applicants who have a Brazilian child.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-[#f8f9fa] rounded-lg border border-[#e2e2e4]">
                    <span className="text-xs font-bold text-[#0f1e36] block mb-1">Child Born in Brazil</span>
                    <span className="text-[11px] text-[#44474d]">A child born on Brazilian soil is Brazilian by birth under the constitutional jus soli rule.</span>
                  </div>
                  <div className="p-3 bg-[#f8f9fa] rounded-lg border border-[#e2e2e4]">
                    <span className="text-xs font-bold text-[#0f1e36] block mb-1">Child Born Abroad</span>
                    <span className="text-[11px] text-[#44474d]">A child born abroad who acquires Brazilian nationality through a Brazilian parent also qualifies.</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fdfaf3] border-l-4 border-[#c5a059] mb-6">
                <p className="text-xs text-[#44474d]">
                  <strong>Notice:</strong> Having a Brazilian child does not automatically confer citizenship on the foreign parent. You must obtain residence and formally file for naturalization once the 12-month tenure is satisfied.
                </p>
              </div>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Explore Citizenship Through a Brazilian Child</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. RESIDENCY REQUIREMENTS (WHAT COUNTS AS 1 YEAR?)
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-[#edeef0] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — RESIDENCY REQUIREMENTS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                What Counts as One Year of Residence in Brazil?
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-4">
                Proving the qualifying residence period is one of the most critical elements of this naturalization pathway.
              </p>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                The applicant must demonstrate continuous, lawful residence in Brazilian territory in accordance with strict nationality guidelines:
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-xl bg-white border border-[#c5c6ce]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#775a19]" />
                    Absences From Brazil (The 3-Month Rule)
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Under current administrative guidance from the Ministry of Justice, applicants under the 1-year track generally cannot have accumulated more than <strong>three months (90 days)</strong> of absence from Brazil during the qualifying 12-month tenure.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#c5c6ce]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-[#775a19]" />
                    Actual Residence vs. Mere Address
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Applicants must demonstrate genuine domicile rather than relying solely on a Brazilian postal address or occasional tourist visits.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#c5c6ce]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#775a19]" />
                    When Does the Residence Period Begin?
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    The starting date is determined according to official immigration registration. The date of marriage, the child's birth date, and the start of qualifying residence are distinct milestones.
                  </p>
                </div>
              </div>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Request a Residence History Assessment</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85"
                  alt="Calendar schedule, passports, and travel history logs"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    IMMIGRATION AUDIT
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Federal Police Travel Log Clearance
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Auditing Certidão de Movimentos Migratórios to ensure compliance with the 90-day absence threshold.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. OTHER NATURALIZATION REQUIREMENTS
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — STATUTORY PREREQUISITES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
              Requirements Beyond the One-Year Residence Period
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              The reduced residence period does not eliminate the remaining conditions for ordinary naturalization. All criteria must be fulfilled:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
              <div className="w-8 h-8 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Scale className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Civil Capacity
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Applicants must possess full legal capacity under Brazilian civil law (being at least 18 years of age or emancipated).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
              <div className="w-8 h-8 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Portuguese Communication
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Demonstrated Portuguese communication ability through CELPE-Bras certification or accredited education diplomas.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
              <div className="w-8 h-8 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Criminal Record Clearance
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Clean criminal background in Brazil and former countries of residence, or documented legal rehabilitation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
              <div className="w-8 h-8 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <FileCheck className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Valid Supporting Records
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Complete CRNM registration, CPF tax compliance, apostilled foreign civil certificates, and sworn translations.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#hero-consultation-card"
              className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-7 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Check Your Full Naturalization Eligibility</span>
              <ArrowRight className="w-4 h-4 text-[#e9c176]" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. PORTUGUESE-LANGUAGE REQUIREMENTS
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-[#edeef0] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=85"
                  alt="Portuguese language certification manuals and study desk"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    LANGUAGE COMPLIANCE
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Portuguese Communication Standard
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    CELPE-Bras certificates, university degrees, and official language documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — PORTUGUESE-LANGUAGE REQUIREMENTS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Do You Need to Speak Portuguese?
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-4">
                Yes. Applicants seeking one-year ordinary naturalization must satisfy the Portuguese communication requirement.
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-[#c5c6ce]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    CELPE-Bras Examination
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    The Certificado de Proficiência em Língua Portuguesa para Estrangeiros (CELPE-Bras), administered by INEP, is the official benchmark recognized across all Brazilian federal agencies.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#c5c6ce]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    Alternative Recognized Evidence
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Under administrative portarias, applicants may also qualify by presenting diplomas from Brazilian primary, secondary, or higher education institutions, or completion certificates from accredited university language programs.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#fdfaf3] border-l-4 border-[#c5a059]">
                  <p className="text-xs font-bold text-[#775a19]">Can You Apply Without Speaking Portuguese?</p>
                  <p className="text-xs text-[#44474d]">
                    No. A Brazilian spouse or Brazilian child does not exempt you from this requirement. Applicants must genuinely communicate in Portuguese during potential Federal Police in-person interviews.
                  </p>
                </div>
              </div>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Your Portuguese Documentation</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. REQUIRED DOCUMENTS
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — REQUIRED DOCUMENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
              Documents for One-Year Brazilian Naturalization
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              The exact document checklist depends on whether your application is anchored by marriage, stable union, or a Brazilian child:
            </p>
          </div>

          <div className="bg-[#f8f9fa] rounded-2xl p-6 sm:p-8 border border-[#e2e2e4] mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#c5c6ce]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Valid passport or official identity document</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#c5c6ce]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">CRNM / RNM migration registration card</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#c5c6ce]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Brazilian CPF tax identification number</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#c5c6ce]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Brazilian Marriage Certificate (for spouses)</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#c5c6ce]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Stable-Union Public Deed (for partners)</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#c5c6ce]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Brazilian Child's Birth Certificate (for parents)</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#c5c6ce]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Proof of Brazilian nationality of spouse or child</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#c5c6ce]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Federal Police Certidão de Movimentos Migratórios</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#c5c6ce]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Proof of qualifying continuous residence in Brazil</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#c5c6ce]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Federal and State criminal record certificates</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#c5c6ce]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Foreign police clearances from past residences</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#c5c6ce]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Portuguese language proficiency certificate</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#c5c6ce]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">The Hague Apostille on foreign civil records</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#c5c6ce]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Sworn certified translations (Tradução Juramentada)</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#c5c6ce]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Declarations of cohabitation and maintenance</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e2e2e4] text-center">
              <p className="text-xs text-[#44474d] italic">
                Cases involving foreign marriages, previous divorces, inconsistent names, or incomplete records require individualized legal auditing.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#hero-consultation-card"
              className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <span>Get Your Personalized Document Checklist</span>
              <ArrowRight className="w-4 h-4 text-[#e9c176]" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. FOREIGN MARRIAGES AND DIVORCES
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-[#edeef0] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — FOREIGN MARRIAGES AND DIVORCES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Was Your Marriage Celebrated Outside Brazil?
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-4">
                Foreign civil records often introduce legal complexities that must be addressed prior to submitting your naturalization docket.
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white border border-[#c5c6ce]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    Foreign Marriage Registration
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    A foreign marriage must be transcribed into a Brazilian civil register (Livro E, Cartório do 1º Ofício) to produce full legal effects.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#c5c6ce]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    Foreign Divorce Recognition
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Prior divorces executed abroad may require direct cartório transcription or formal homologation before the Superior Court of Justice (STJ).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#c5c6ce]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    Name Discrepancies
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Variations between maiden names, matrimonial additions, and passport spellings require legal rectification to avoid docket rejection.
                  </p>
                </div>
              </div>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Request a Civil Documentation Assessment</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=85"
                  alt="Civil registry certificates, cartório stamps, and legal contracts"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CARTÓRIO COMPLIANCE
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Civil Transcription &amp; STJ Homologation
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Resolving foreign marriage registrations and judicial divorce validity before filing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          12. APPLICATION PROCESS (9 STEPS)
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — APPLICATION PROCESS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
              How to Apply for Brazilian Citizenship After One Year
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              Our office oversees every milestone from document auditing to passport issuance:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              {
                step: '01',
                title: 'Initial Legal Consultation',
                desc: 'We evaluate your family ties, marriage registration, immigration status, and naturalization objectives.'
              },
              {
                step: '02',
                title: 'Eligibility Assessment',
                desc: 'We confirm qualification under Article 66 and verify absence limits (< 90 days abroad).'
              },
              {
                step: '03',
                title: 'Residence History Verification',
                desc: 'We examine your CRNM tenure, address history, and Federal Police travel records.'
              },
              {
                step: '04',
                title: 'Civil Document Preparation',
                desc: 'We organize Brazilian marriage certificates, stable union deeds, or child birth records.'
              },
              {
                step: '05',
                title: 'Portuguese Evidence Review',
                desc: 'We verify CELPE-Bras certificates or educational diplomas satisfying language rules.'
              },
              {
                step: '06',
                title: 'Naturalization Application',
                desc: 'We assemble and lodge the formal petition on Naturalizar-se / Federal Police portal.'
              },
              {
                step: '07',
                title: 'Administrative Review',
                desc: 'Federal Police and Ministry of Justice conduct background reviews and in-person interviews.'
              },
              {
                step: '08',
                title: 'Naturalization Decision',
                desc: 'The ministerial decree is officially published in the Diário Oficial da União (DOU).'
              },
              {
                step: '09',
                title: 'Identity & Brazilian Passport',
                desc: 'Following publication, we assist with obtaining your Brazilian RG, voter title, and passport.'
              }
            ].map((st, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#775a19] block mb-1">
                    STEP {st.step}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1.5">
                    {st.title}
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#hero-consultation-card"
              className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <span>Start Your Naturalization Application</span>
              <ArrowRight className="w-4 h-4 text-[#e9c176]" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          13. HOW LONG DOES IT TAKE?
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-[#edeef0] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — PROCESSING TIMELINES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
              Does One-Year Naturalization Mean Citizenship in Twelve Months?
            </h2>
            <p className="text-base font-bold text-[#775a19] mb-4">
              No. It is essential to distinguish between the two separate periods:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            <div className="p-6 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <span className="text-xs font-bold text-[#775a19] uppercase tracking-wider block mb-1">
                Period 1:
              </span>
              <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                Qualifying Residence Period (12 Months)
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                The applicant must live continuously in Brazil as a permanent resident for 1 full year with no more than 90 days abroad before filing the petition.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <span className="text-xs font-bold text-[#775a19] uppercase tracking-wider block mb-1">
                Period 2:
              </span>
              <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                Government Processing Timeline (Months)
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                After filing, the Federal Police and Ministry of Justice examine the docket. Processing durations vary based on administrative queues; no fixed approval date can be guaranteed.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#hero-consultation-card"
              className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-7 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Plan Your Citizenship Timeline</span>
              <ArrowRight className="w-4 h-4 text-[#e9c176]" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          14. BRAZILIAN PASSPORT AND DUAL CITIZENSHIP
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?auto=format&fit=crop&w=800&q=85"
                  alt="Brazilian passport on travel departure desk"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    NATIONALITY SECURITY
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Dual Citizenship Freedom (EC 131/2023)
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Retain your native citizenship while holding full Brazilian constitutional rights.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — PASSPORT &amp; DUAL CITIZENSHIP
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Can You Keep Your Original Citizenship?
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-4">
                Yes. Brazil generally permits dual and multiple nationality under the Constitution.
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    No Brazilian Renunciation Mandate
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Under Brazilian law, naturalizing does not require you to renounce your existing citizenship.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    Brazilian Passport Privileges
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Once naturalization is published, you obtain a Brazilian passport offering visa-free travel to over 170 destinations and MERCOSUR freedom of movement.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    Home Country Considerations
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    While Brazil allows multiple citizenships, applicants should verify whether their original country permits dual nationality without restrictions.
                  </p>
                </div>
              </div>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Your Dual Citizenship Options</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          15. TAX AND INTERNATIONAL CONSIDERATIONS
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-[#edeef0] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — TAX AND CROSS-BORDER PLANNING
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Brazilian Citizenship and Tax Residency
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-4">
                Brazilian nationality and Brazilian tax residency are separate legal matters governed by distinct statutory frameworks.
              </p>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                However, establishing qualifying residence in Brazil for naturalization triggers Brazilian tax residency, requiring legal planning regarding:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3 bg-white rounded-lg border border-[#c5c6ce] text-xs text-[#0f1e36]">
                  • Worldwide income taxation (Receita Federal)
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#c5c6ce] text-xs text-[#0f1e36]">
                  • Foreign-source income and offshore dividends
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#c5c6ce] text-xs text-[#0f1e36]">
                  • Central Bank foreign asset declarations (CBE/BACEN)
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#c5c6ce] text-xs text-[#0f1e36]">
                  • International double taxation treaties
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#c5c6ce] text-xs text-[#0f1e36]">
                  • Cross-border family succession &amp; trusts
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#c5c6ce] text-xs text-[#0f1e36]">
                  • Matrimonial property regimes (Comunhão de Bens)
                </div>
              </div>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Your International Legal Planning</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=85"
                  alt="International corporate finance and cross border tax advisory"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CROSS-BORDER WEALTH
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Fiscal Structuring for Expatriate Families
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Coordinating Brazilian residency with foreign income tax compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          16. OUR LEGAL SERVICES
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — OUR LEGAL SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
              How Caspani Lawyers Can Help
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              We provide complete legal guidance across all stages of family-based Brazilian naturalization:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              {
                title: 'One-Year Naturalization Eligibility',
                desc: 'We evaluate whether your family relationship and residence tenure satisfy the statutory reduction.'
              },
              {
                title: 'Residence History Assessment',
                desc: 'We review immigration records and verify continuous residence compliance with absence limits.'
              },
              {
                title: 'Marriage & Stable-Union Docs',
                desc: 'We assess Brazilian marriage certificates and coordinate cartório public deed registrations.'
              },
              {
                title: 'Brazilian Child Documentation',
                desc: 'We assist with identifying relevant nationality, civil registry, and parentage documentation.'
              },
              {
                title: 'Civil Registration Matters',
                desc: 'We handle foreign marriage transcriptions, STJ divorce homologations, and name rectifications.'
              },
              {
                title: 'Portuguese-Language Compliance',
                desc: 'We assist with identifying accepted documentation and navigating CELPE-Bras requirements.'
              },
              {
                title: 'Naturalization Applications',
                desc: 'We draft and file the formal application through the competent Brazilian administrative system.'
              },
              {
                title: 'Responding to Official Exigências',
                desc: 'We handle official notifications, document requests, and Federal Police inquiries.'
              },
              {
                title: 'Long-Term Nationality Planning',
                desc: 'We advise on Brazilian passports, identity documentation, and dual citizenship retention.'
              }
            ].map((srv, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1.5">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#hero-consultation-card"
              className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <span>Book Your Citizenship Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#e9c176]" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          17. WHY CHOOSE CASPANI LAWYERS?
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-[#edeef0] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — WHY CHOOSE CASPANI LAWYERS?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
              Personalized Legal Guidance for International Families
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              We assist international clients with precision, confidentiality, and direct attorney engagement:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-5 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Licensed Brazilian Attorney
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Receive direct legal assistance from an attorney registered with the Brazilian Bar Association (OAB/PR 58.420).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Family Immigration Focus
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Dedicated practice assisting foreign spouses, partners, and parents with nationality solutions.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Individual Legal Strategy
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Each case is evaluated according to its specific residence timeline, documentation, and family status.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <UserCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Direct Communication
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Communicate directly with your lawyer and receive clear explanations throughout the process.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Globe2 className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Assistance From Anywhere
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We assist international clients preparing their move and families already residing across Brazil.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Multilingual Support
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Legal consultations and document guidance available in English, Portuguese, and Spanish.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Strict Confidentiality
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Personal, family, and civil data are protected under Brazilian Bar attorney-client privilege.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Transparent Engagement
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Clear scopes of representation, transparent fee structures, and no hidden charges.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#hero-consultation-card"
              className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <span>Schedule Your Legal Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#e9c176]" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          18. FREQUENTLY ASKED QUESTIONS
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
              One-Year Brazilian Naturalization – FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              Find clear answers to key statutory questions regarding family-based ordinary naturalization in Brazil.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#f8f9fa] rounded-xl border border-[#c5c6ce] shadow-sm overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white transition-colors"
                  >
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#0f1e36]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#775a19] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs text-[#44474d] leading-relaxed border-t border-[#e2e2e4] bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          19. FINAL SECTION: IMAGE 3 ON LEFT, RESERVATION FORM ON RIGHT
          ======================================================== */}
      <section className="w-full bg-[#edeef0] py-16 lg:py-24 border-t border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — READY TO EXPLORE ONE-YEAR NATURALIZATION?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Your Family Ties. Your Residency. Our Legal Guidance.
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto mb-4">
              Brazilian citizenship through marriage, stable union, or a Brazilian child offers an expedited pathway to full nationality. At Caspani Lawyers, we help international families assess eligibility, verify continuous residence, prepare civil documents, and file with the Ministry of Justice.
            </p>
          </div>

          {/* TWO-COLUMN LAYOUT: IMAGE ON THE LEFT (IMAGE 3), FORM ON THE RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto mb-10">
            {/* Left Column: Curated Legal Practice Image ("Image 3") */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=85"
                  alt="Brazilian constitutional landmark and federal supreme jurisprudence architecture"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/95 via-[#0f1e36]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    ONE-YEAR CITIZENSHIP DESK
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    Direct Legal Counsel in Brazil
                  </h3>
                  <p className="text-xs text-[#edeef0] leading-relaxed">
                    Personalized legal evaluation by licensed Brazilian family and citizenship counsel within 24 business hours.
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
                id="one-year-bottom-reservation-form"
                title="Schedule 1-Year Naturalization Consultation"
                subtitle="Confidential review by licensed Brazilian nationality counsel within 24 hours"
                presetService="One-Year Naturalization (Spouses & Parents)"
              />
            </div>
          </div>

          {/* Legal Practice Footer & Disclaimer */}
          <div className="max-w-3xl mx-auto text-center border-t border-[#c5c6ce] pt-6 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0f1e36]">
              CASPANI LAWYERS • ADVOCACIA INTERNACIONAL
            </p>
            <p className="text-[11px] text-[#775a19] font-medium">
              Brazilian Citizenship | One-Year Naturalization | Marriage Naturalization | Brazilian Child | Nationality Law
            </p>
            <p className="text-[11px] text-[#75777e] leading-relaxed">
              <strong>Legal Disclaimer:</strong> This page provides general legal information and does not constitute individualized legal advice. One-year naturalization eligibility, continuous residence limits, Portuguese language evidence, and administrative processing times depend on individual case facts and ministerial discretion. Nationality approval cannot be guaranteed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
