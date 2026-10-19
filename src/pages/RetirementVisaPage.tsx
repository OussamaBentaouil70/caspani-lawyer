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
  Sun,
  DollarSign,
  AlertTriangle,
  Building,
  ShieldCheck,
  Palmtree,
  Heart,
  Landmark,
  Home,
  Receipt
} from 'lucide-react';

interface RetirementVisaPageProps {
  onNavigate: (route: string) => void;
}

export const RetirementVisaPage: React.FC<RetirementVisaPageProps> = ({ onNavigate }) => {
  // Sync SEO metadata
  useEffect(() => {
    document.title = 'Brazil Retirement Visa (VITEM XIV / RN 40) | Caspani Lawyers';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Retire in Brazil with the Retirement Visa (RN 40). Legal assistance for foreign retirees and pensioners with income verification ($2,000/mo), Federal Police registration, and tax planning.'
      );
    }
  }, []);

  // Form state for hero intake
  const [heroForm, setHeroForm] = useState({
    fullName: '',
    email: '',
    countryCode: '+55',
    phone: '',
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
      `Hello Caspani Lawyers, my name is ${heroForm.fullName || 'Client'}. I am inquiring about the Brazil Retirement Visa.\nPhone: ${heroForm.countryCode} ${heroForm.phone}\nEmail: ${heroForm.email}\nDetails: ${heroForm.message}`
    );
    window.open(`https://wa.me/5541998247700?text=${text}`, '_blank');
  };

  const faqs = [
    {
      question: '1. What is the Brazil Retirement Visa?',
      answer:
        'The Brazil Retirement Visa (VITEM XIV under Normative Resolution RN 40/2019) is an immigration pathway for eligible foreign retirees and pension recipients who wish to establish residence in Brazil and meet the applicable financial and documentary requirements.'
    },
    {
      question: '2. How much retirement income do I need?',
      answer:
        'The retirement immigration framework generally requires proof of the ability to transfer at least USD 2,000 per month (or equivalent in foreign currency) to Brazil from qualifying retirement or pension income, with an additional amount for accompanying dependents.'
    },
    {
      question: '3. Is there a minimum age requirement?',
      answer:
        'The relevant immigration framework focuses on qualifying retirement or pension status and official government or corporate pension documentation, rather than establishing a universal minimum age for every applicant.'
    },
    {
      question: '4. Can I apply using savings or investment income?',
      answer:
        'Savings, rental income, dividends, and other investment returns do not automatically qualify as retirement or pension income under RN 40. Their relevance must be assessed under the applicable rules, and alternative pathways (such as Property Golden Visa) may be more suitable.'
    },
    {
      question: '5. Can I apply while already in Brazil?',
      answer:
        'Yes. Eligible foreign nationals who are already legally present in Brazil (e.g., on a valid tourist stay) may be able to request retirement-based residence authorization directly through the Ministry of Justice MigranteWeb system without leaving the country.'
    },
    {
      question: '6. Can I apply from the United States, Canada, or Europe?',
      answer:
        'Yes. Eligible applicants residing abroad may apply through the Brazilian consular authority (Embassy or Consulate General) responsible for their jurisdiction of residence.'
    },
    {
      question: '7. Do I need health insurance?',
      answer:
        'Health insurance requirements may differ depending on whether the application is submitted through a Brazilian consulate abroad or as a residence authorization request in Brazil. Having comprehensive international medical coverage is always strongly recommended.'
    },
    {
      question: '8. How long is the retirement residence authorization valid?',
      answer:
        'Initial validity depends on the procedure. Retirement-based residence may be granted for up to two years, with renewal possibilities under the relevant regulations leading to indefinite permanent status.'
    },
    {
      question: '9. Can I bring my spouse or family members?',
      answer:
        'Yes. Eligible family members (spouse, civil union partner, minor children) may qualify for residence through family reunification (Reunião Familiar).'
    },
    {
      question: '10. Can I buy property in Brazil as a foreign retiree?',
      answer:
        'Yes. Foreign nationals may generally purchase urban real estate in Brazil, subject to obtaining a CPF (Tax ID) and complying with Central Bank foreign exchange rules. Rural properties are subject to statutory size limitations.'
    },
    {
      question: '11. Will I become a Brazilian tax resident?',
      answer:
        'Moving to Brazil may result in Brazilian tax residency depending on your immigration status, entry date, duration of stay (typically exceeding 183 days), and other relevant circumstances. A personalized cross-border tax assessment is recommended.'
    },
    {
      question: '12. Can retirement residency lead to Brazilian citizenship?',
      answer:
        'Retirement-based residence does not automatically grant Brazilian citizenship. However, qualifying periods of continuous lawful residence (typically 4 years ordinary naturalization, or 1 year if married to a Brazilian citizen) contribute toward naturalization eligibility.'
    },
    {
      question: '13. How long does the application take?',
      answer:
        'Processing times typically range from 4 to 8 weeks for consular applications abroad, and 60 to 90 days for in-country Federal Police and Ministry of Justice procedures.'
    },
    {
      question: '14. Do I need to speak Portuguese?',
      answer:
        'Portuguese proficiency is not a requirement for obtaining initial retirement-based residence. However, Portuguese proficiency (CELPE-Bras or recognized proof) is required if you later choose to apply for Brazilian naturalization.'
    },
    {
      question: '15. Do I need a lawyer to apply?',
      answer:
        'Legal representation is not mandatory by law, but an experienced Brazilian immigration attorney ensures your pension documents, sworn translations, Hague apostilles, and bank transfer declarations are properly formatted, avoiding delays and rejections.'
    }
  ];

  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* ========================================================
          1. HERO SECTION: RETIREMENT IN BRAZIL (IMAGE + FORM ON RIGHT)
          ======================================================== */}
      <section className="relative w-full text-white min-h-[640px] flex items-center py-12 lg:py-20 overflow-hidden">
        {/* Background Image: Brazilian coastal paradise */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=2000&q=85')`
          }}
        ></div>

        {/* Multi-Stop Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d16]/94 via-[#071929]/90 to-[#040e18]/85 pointer-events-none"></div>

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
            <span className="text-white">RETIREMENT VISA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#e9c176] mb-2 block">
                VITEM XIV • RESOLUÇÃO NORMATIVA 40/2019
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] lg:leading-[54px] font-bold text-white mb-3">
                Brazil Retirement Visa – Live Your Retirement in Brazil
              </h1>

              <p className="text-lg text-[#fed488] font-serif italic mb-4">
                Your retirement. A new lifestyle. A new chapter in Brazil.
              </p>

              <div className="text-sm sm:text-base text-[#edeef0] leading-relaxed max-w-2xl space-y-3 mb-6">
                <p>
                  Planning to retire in Brazil and enjoy a new life abroad? Brazil offers eligible foreign retirees a legal pathway to residency based on qualifying retirement or pension income.
                </p>
                <p>
                  At <strong className="text-white">Caspani Lawyers</strong>, we provide personalized legal assistance with Brazilian retirement visas, residence authorizations, document preparation, and Federal Police registration. Whether you are planning your move from abroad or already living in Brazil, our immigration lawyer can help you understand your options and navigate the legal process.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
                <a
                  href="#retirement-hero-form"
                  className="inline-flex items-center justify-center gap-2 bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg"
                >
                  <span>Book Your Legal Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#retirement-residency-overview"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/30 transition-all duration-200"
                >
                  Explore Retirement Residency Options
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
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Personalized Immigration Strategy
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Multilingual Legal Assistance
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Remote and Confidential Consultations
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Intake Form (Lformulaire 3la liman) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="retirement-hero-form">
              <div className="bg-white text-[#1a1c1d] rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/20">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0f1e36] mb-1">
                  Request Your Consultation
                </h3>
                <p className="text-xs text-[#44474d] mb-4 pb-2 border-b border-[#e8e8ea]">
                  Tell us about your pension or retirement plans and our legal team will get back to you shortly.
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
                      Thank you, <strong className="text-[#0f1e36]">{heroForm.fullName}</strong>. A licensed Brazilian attorney will review your retirement details within 24 business hours.
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
                  <form onSubmit={handleHeroSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="ret-name">
                        Full name
                      </label>
                      <input
                        id="ret-name"
                        required
                        type="text"
                        value={heroForm.fullName}
                        onChange={(e) => setHeroForm({ ...heroForm, fullName: e.target.value })}
                        placeholder="Your full legal name"
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="ret-email">
                        Email
                      </label>
                      <input
                        id="ret-email"
                        required
                        type="email"
                        value={heroForm.email}
                        onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="ret-phone">
                        Phone / WhatsApp
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        <select
                          value={heroForm.countryCode}
                          onChange={(e) => setHeroForm({ ...heroForm, countryCode: e.target.value })}
                          className="col-span-1 bg-[#f3f3f5] text-[#1a1c1d] px-2 py-2.5 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19]"
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
                          id="ret-phone"
                          required
                          type="tel"
                          value={heroForm.phone}
                          onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                          placeholder="Your phone number"
                          className="col-span-3 bg-[#f3f3f5] text-[#1a1c1d] px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="ret-message">
                        Message
                      </label>
                      <textarea
                        id="ret-message"
                        rows={3}
                        value={heroForm.message}
                        onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                        placeholder="Tell us about your pension source, timeline, and destination in Brazil..."
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] p-3 rounded-lg text-xs sm:text-sm border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <span>Get My Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center justify-center gap-1.5 pt-1 text-center text-[11px] text-[#75777e]">
                      <Lock className="w-3.5 h-3.5 text-[#775a19]" />
                      <span>Your information is strictly confidential.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. RETIREMENT RESIDENCY IN BRAZIL (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]" id="retirement-residency-overview">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image: Active retirees enjoying Brazilian coast */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85"
                  alt="Senior couple enjoying Brazilian coastal retirement lifestyle"
                  className="w-full h-80 sm:h-96 lg:h-[440px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-3.5 rounded-xl border border-[#c5a059]/30 flex items-center justify-between text-xs">
                  <span className="font-medium">Florianópolis • Salvador • Curitiba • Rio de Janeiro</span>
                  <span className="font-mono text-[#e9c176]">RN 40 Framework</span>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — RETIREMENT RESIDENCY IN BRAZIL
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Enjoy Your Retirement in Brazil With Legal Confidence
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed mb-6">
                <p>
                  Brazil attracts retirees from around the world with its warm climate, diverse landscapes, vibrant culture, and lifestyle opportunities. From coastal destinations to cosmopolitan cities and peaceful countryside communities, the country offers a wide range of options for foreign retirees seeking a new place to call home.
                </p>
                <p>
                  However, relocating to Brazil requires more than choosing a destination. Understanding immigration eligibility, financial requirements, documentation, and tax implications is essential.
                </p>
                <p>
                  At <strong className="text-[#0f1e36]">Caspani Lawyers</strong>, we help international retirees prepare for this transition through personalized immigration assistance and legal guidance.
                </p>
              </div>

              <a
                href="#retirement-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Speak With a Brazilian Immigration Lawyer</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. ELIGIBILITY REQUIREMENTS (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — ELIGIBILITY REQUIREMENTS
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Who Qualifies for a Brazil Retirement Visa?
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                Brazil's retirement immigration pathway is designed for eligible foreign nationals who receive qualifying retirement or pension income and intend to establish residence in Brazil. Under the retirement immigration framework, applicants generally must demonstrate:
              </p>

              <div className="space-y-3.5 mb-6">
                <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] shadow-2xs">
                  <h3 className="text-sm font-bold text-[#0f1e36] mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs flex items-center justify-center">1</span>
                    Qualifying Retirement or Pension Income
                  </h3>
                  <div className="text-xs text-[#44474d] pl-8 leading-relaxed">
                    Applicants must provide evidence of retirement benefits, pension payments, or another legally qualifying retirement-related income source:
                    <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[#0f1e36]">
                      <li>Government retirement pensions</li>
                      <li>Social Security retirement benefits</li>
                      <li>Private or occupational pensions</li>
                      <li>Survivor's pensions &amp; qualifying annuities</li>
                    </ul>
                    <span className="block mt-1 text-[#775a19] font-medium italic">
                      Note: Not every form of passive income automatically qualifies as retirement income.
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] shadow-2xs">
                  <h3 className="text-sm font-bold text-[#0f1e36] mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs flex items-center justify-center">2</span>
                    Minimum Monthly Income: USD $2,000
                  </h3>
                  <p className="text-xs text-[#44474d] pl-8 leading-relaxed">
                    Applicants generally must demonstrate the ability to transfer at least <strong>USD 2,000 per month</strong> to Brazil from qualifying retirement or pension income. The source, consistency, and supporting documentation of the income are critical to the eligibility assessment.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] shadow-2xs">
                  <h3 className="text-sm font-bold text-[#0f1e36] mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs flex items-center justify-center">3</span>
                    Financial Documentation
                  </h3>
                  <p className="text-xs text-[#44474d] pl-8 leading-relaxed">
                    Applicants must provide suitable evidence of their retirement income and the legal banking mechanisms to transfer funds to Brazil.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] shadow-2xs">
                  <h3 className="text-sm font-bold text-[#0f1e36] mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs flex items-center justify-center">4</span>
                    Identification and Background Documentation
                  </h3>
                  <p className="text-xs text-[#44474d] pl-8 leading-relaxed">
                    A valid passport, criminal background documentation, and other civil records are required.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] shadow-2xs">
                  <h3 className="text-sm font-bold text-[#0f1e36] mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs flex items-center justify-center">5</span>
                    Immigration Compliance
                  </h3>
                  <p className="text-xs text-[#44474d] pl-8 leading-relaxed">
                    Applicants must satisfy all applicable Brazilian immigration requirements and provide the documentation requested by the competent authorities.
                  </p>
                </div>
              </div>

              {/* Warning Box */}
              <div className="p-4 bg-[#fff8eb] rounded-xl border border-[#fed488] flex items-start gap-3 mb-6">
                <AlertTriangle className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                <p className="text-xs text-[#785a1a] leading-relaxed">
                  <strong>Important:</strong> Having substantial savings, rental income, or investment assets does not necessarily establish eligibility under the retirement-specific immigration category. Alternative residence pathways (such as Property Investor Visa) may be more appropriate.
                </p>
              </div>

              <a
                href="#retirement-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm w-fit"
              >
                <span>Check Your Eligibility With a Brazilian Lawyer</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=1000&q=85"
                  alt="Senior lifestyle in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[540px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md text-white p-4 rounded-xl border border-white/20">
                  <span className="text-[11px] font-mono text-[#e9c176] block mb-1">
                    RN 40 Financial Threshold:
                  </span>
                  <p className="text-xs font-semibold">
                    USD $2,000 / Month Qualifying Pension Inflow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. REQUIRED DOCUMENTS (WITH STOCK IMAGE & CHECKLIST)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=85"
                  alt="Passport, pension certificates, and apostille translations"
                  className="w-full h-80 sm:h-96 lg:h-[540px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Pensions &amp; Benefit Statements</span>
                  <p className="text-[11px] text-[#edeef0]">
                    Social Security letters and pension deeds must be apostilled in country of origin and translated by a certified Brazilian sworn translator.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Checklist */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — REQUIRED DOCUMENTS
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
                Documents Required for a Brazil Retirement Visa
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                The exact document checklist depends on your nationality, retirement income, current residence, and whether you apply through a Brazilian consulate or from within Brazil:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6">
                {[
                  'Valid passport',
                  'Birth certificate or civil identification',
                  'Criminal background certificate',
                  'Official proof of retirement or pension benefits',
                  'Evidence of monthly retirement income',
                  'Bank statements showing receipt of retirement benefits',
                  'Documentation demonstrating ability to transfer funds to Brazil',
                  'Completed application forms and declarations',
                  'Health insurance valid in Brazil',
                  'Apostilled or legalized foreign documents',
                  'Certified translations into Portuguese',
                  'Proof of payment of applicable government fees'
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f9f9fb] border border-[#e8e8ea]">
                    <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#1a1c1d]">{doc}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                Our legal services include reviewing the relevant requirements and helping clients prepare their documentation for submission.
              </p>

              <a
                href="#retirement-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm mb-2"
              >
                <span>Get Your Personalized Document Checklist</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-[#75777e] italic">
                A personalized checklist is provided during the legal consultation or agreed representation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. APPLICATION OPTIONS (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — APPLICATION OPTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              How to Apply for a Retirement Visa in Brazil
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Brazil provides different immigration procedures for eligible foreign retirees depending on where they are located.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Option 1 */}
            <div className="bg-white rounded-2xl p-8 border border-[#e2e2e4] shadow-xs flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-[#f3ede0] text-[#775a19] text-xs font-bold uppercase tracking-wider mb-4">
                  Option 1
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-4">
                  Apply Through a Brazilian Consulate
                </h3>
                <p className="text-sm text-[#44474d] leading-relaxed mb-4">
                  Foreign retirees living outside Brazil may apply for the appropriate temporary retirement visa (VITEM XIV) through a Brazilian embassy or consulate.
                </p>
                <ul className="space-y-1.5 text-xs text-[#1a1c1d] mb-4 pl-2">
                  <li className="flex items-center gap-2">
                    <span className="text-[#775a19]">◆</span> Reviewing eligibility and retirement income
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#775a19]">◆</span> Preparing supporting documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#775a19]">◆</span> Submitting the consular application
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#775a19]">◆</span> Paying applicable government fees
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#775a19]">◆</span> Traveling to Brazil following visa issuance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#775a19]">◆</span> Completing the required Federal Police registration
                  </li>
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-[#e8e8ea] text-xs text-[#75777e]">
                Consular requirements and processing times may vary according to the location of the application.
              </div>
            </div>

            {/* Option 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[#e2e2e4] shadow-xs flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-[#f3ede0] text-[#775a19] text-xs font-bold uppercase tracking-wider mb-4">
                  Option 2
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-4">
                  Apply for Residence Authorization in Brazil
                </h3>
                <p className="text-sm text-[#44474d] leading-relaxed mb-4">
                  Eligible foreign nationals already legally present in Brazil may be able to request retirement-based residence authorization through the appropriate Brazilian immigration procedure.
                </p>
                <p className="text-sm text-[#44474d] leading-relaxed mb-4">
                  This route generally involves preparing the application, submitting the required documents to the competent Ministry of Justice system, and completing migration registration with the Federal Police after approval.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-[#e8e8ea] text-xs text-[#75777e]">
                Ideal for clients already in Brazil who wish to transition status smoothly without traveling abroad.
              </div>
            </div>
          </div>

          {/* Callout Bar */}
          <div className="bg-[#0f1e36] text-white rounded-2xl p-8 lg:p-10 border border-[#c5a059]/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Which Option Is Right for You?
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                The appropriate application route depends on your location, nationality, immigration status, financial documentation, and personal circumstances. At Caspani Lawyers, we assess these factors during your legal consultation and help identify a suitable strategy.
              </p>
            </div>
            <a
              href="#retirement-hero-form"
              className="bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-md"
            >
              Discuss Your Retirement Residency Options
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. OUR LEGAL SERVICES (7 SPECIALIZED SERVICES)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — LEGAL ASSISTANCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              How Caspani Lawyers Can Help You Retire in Brazil
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Relocating internationally can involve unfamiliar legal and administrative procedures. Our immigration services are designed to help foreign retirees understand the process and prepare their applications with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                Retirement Visa Eligibility Assessment
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We evaluate your retirement income, nationality, documentation, and immigration history to assess your eligibility.
              </p>
            </div>

            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                Personalized Immigration Strategy
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We help determine whether applying from abroad or requesting residence authorization in Brazil is appropriate for your situation.
              </p>
            </div>

            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                Document Preparation and Review
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We assist with retirement benefit records, financial evidence, civil documents, apostilles, legalizations, and translations.
              </p>
            </div>

            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                Visa and Residence Applications
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We provide legal assistance with the applicable retirement immigration procedures across consular posts and Brazilian ministries.
              </p>
            </div>

            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                Federal Police Registration
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We guide clients through the required registration procedures, biometric appointments, and residence card documentation (CRNM).
              </p>
            </div>

            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                Residency Renewals
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We assist eligible clients with renewal procedures and updated documentary requirements for indefinite term status.
              </p>
            </div>

            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] shadow-xs md:col-span-2 lg:col-span-3">
              <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                Additional Legal Support (Real Estate &amp; Estate Planning)
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Depending on your circumstances, we can also assist with related Brazilian legal matters, including property transactions, title due diligence, wills, and international estate or inheritance issues, under separate engagements.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#retirement-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Start Your Retirement Residency Application</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. RESIDENCY VALIDITY & ACCEPTED INCOME (SIDE-BY-SIDE WITH IMAGES)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Card 1: Validity and Renewal */}
            <div className="bg-white rounded-2xl p-8 border border-[#e2e2e4] shadow-xs flex flex-col justify-between">
              <div>
                <div className="relative rounded-xl overflow-hidden mb-6 h-48">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                    alt="Brazilian retirement residency duration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold">Initial 2-Year Stay • Indefinite Permanent Transition</span>
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                  — RESIDENCY VALIDITY AND RENEWAL
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-4">
                  How Long Can You Stay in Brazil With a Retirement Visa?
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                  <p>
                    Brazil's retirement immigration framework allows qualifying foreign retirees to obtain temporary residence, with the initial validity depending on the applicable procedure and authorization.
                  </p>
                  <p>
                    Retirement-based residence may be granted for a period of up to two years, with renewal possibilities subject to the applicable regulations. Renewal applications may require updated documentation demonstrating that the applicant continues to satisfy the relevant conditions.
                  </p>
                  <p>
                    Some applicants may subsequently qualify for residence for an indefinite term, depending on the legal framework and their individual circumstances.
                  </p>
                </div>
              </div>

              <a
                href="#retirement-hero-form"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#775a19] hover:underline cursor-pointer"
              >
                <span>Get Legal Advice About Your Residency Renewal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 2: Accepted Retirement Income */}
            <div className="bg-white rounded-2xl p-8 border border-[#e2e2e4] shadow-xs flex flex-col justify-between">
              <div>
                <div className="relative rounded-xl overflow-hidden mb-6 h-48">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                    alt="Retirement income verification"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold">Official Pensions &amp; Transfer Proof</span>
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                  — RETIREMENT INCOME REQUIREMENTS
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-4">
                  What Retirement Income Is Accepted in Brazil?
                </h3>
                <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-3">
                  One of the most important aspects of a retirement residence application is proving the origin and regularity of your income. Brazilian immigration authorities assess whether the applicant receives qualifying retirement or pension benefits and meets financial requirements:
                </p>
                <div className="bg-[#f9f9fb] p-3 rounded-lg border border-[#e8e8ea] text-xs text-[#0f1e36] space-y-1.5 mb-4">
                  <p><strong>Traditional Retirement Income:</strong> Government pensions, Social Security retirement benefits, and recognized public schemes.</p>
                  <p><strong>Private Retirement Arrangements:</strong> Private pension arrangements and 401(k)/IRA distributions requiring tailored legal analysis.</p>
                  <p><strong>Rental Income &amp; Investment Returns:</strong> Rental payments and dividends do NOT automatically qualify as retirement income under RN 40.</p>
                </div>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  <strong>What If Your Income Does Not Qualify?</strong> Brazil offers other immigration pathways, including family-based residence and qualifying property investment routes.
                </p>
              </div>

              <a
                href="#retirement-hero-form"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#775a19] hover:underline cursor-pointer"
              >
                <span>Schedule Your Retirement Visa Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. TAX CONSIDERATIONS & WHY RETIREES CHOOSE BRAZIL
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — TAX CONSIDERATIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Retirement in Brazil and International Tax Obligations
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                <p>
                  Immigration residency and tax residency are separate legal concepts. Moving to Brazil may affect how your pension, retirement income, investments, and foreign assets are treated for tax purposes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea] text-xs font-medium text-[#0f1e36]">
                  <div>• Brazilian tax residency rules (183-day rule)</div>
                  <div>• Foreign pension income tax treatment</div>
                  <div>• Reporting of overseas financial assets</div>
                  <div>• International banking and transfers</div>
                  <div>• Double taxation and bilateral tax treaties</div>
                  <div>• Brazilian annual income tax filing (DIRPF)</div>
                  <div>• Estate planning and inheritance considerations</div>
                </div>
                <p>
                  The tax treatment of foreign retirement income depends on the applicant's circumstances, applicable Brazilian legislation, and relevant international agreements. Before relocating, it is important to understand the potential tax implications. Caspani Lawyers can help identify relevant legal considerations and coordinate specialized tax assistance where necessary.
                </p>
              </div>

              <a
                href="#retirement-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm w-fit"
              >
                <span>Discuss Your Retirement and Legal Planning</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85"
                  alt="Financial documents and Brazilian retirement planning"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Why Retirees Choose Brazil */}
          <div className="pt-10 border-t border-[#e8e8ea]">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — LIFESTYLE &amp; OPPORTUNITIES
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0f1e36]">
                Why Retirees Choose Brazil: A New Lifestyle, New Opportunities
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="p-5 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea] text-center">
                <Sun className="w-8 h-8 text-[#775a19] mx-auto mb-2" />
                <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Climate &amp; Natural Beauty</h4>
                <p className="text-xs text-[#44474d]">Diverse landscapes, tropical beaches, and pleasant year-round climates.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea] text-center">
                <Palmtree className="w-8 h-8 text-[#775a19] mx-auto mb-2" />
                <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Lifestyle Flexibility</h4>
                <p className="text-xs text-[#44474d]">Choose between vibrant metropolitan hubs, quiet coastal towns, or countryside.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea] text-center">
                <Heart className="w-8 h-8 text-[#775a19] mx-auto mb-2" />
                <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Cultural Experiences</h4>
                <p className="text-xs text-[#44474d]">Rich culinary traditions, music, warm local hospitality, and community living.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea] text-center">
                <Home className="w-8 h-8 text-[#775a19] mx-auto mb-2" />
                <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Property &amp; Housing</h4>
                <p className="text-xs text-[#44474d]">Attractive real estate purchasing and rental options for foreign nationals.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea] text-center">
                <Users className="w-8 h-8 text-[#775a19] mx-auto mb-2" />
                <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Family &amp; Long-Term</h4>
                <p className="text-xs text-[#44474d]">Family reunification, healthcare security, and peaceful estate structuring.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. WHY CHOOSE CASPANI LAWYERS?
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — WHY CHOOSE CASPANI LAWYERS?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              Personalized Legal Support for Your Retirement in Brazil
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-xl bg-white border border-[#e8e8ea] shadow-xs">
              <Scale className="w-8 h-8 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Licensed Brazilian Attorney</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Your immigration matter is handled directly under the supervision of a licensed Brazilian lawyer registered with the OAB (OAB/PR 58.420).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#e8e8ea] shadow-xs">
              <Users className="w-8 h-8 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Direct Attorney Communication</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Receive personalized legal explanations and communicate directly with your attorney throughout every step.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#e8e8ea] shadow-xs">
              <Compass className="w-8 h-8 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">International Client Assistance</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Our office assists foreign nationals living abroad and clients already present in Brazil with full remote efficiency.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#e8e8ea] shadow-xs">
              <Sparkles className="w-8 h-8 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Multilingual Support</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We provide multilingual communication in English, Portuguese, Spanish, and French to help international clients navigate procedures easily.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#e8e8ea] shadow-xs">
              <FileCheck className="w-8 h-8 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Transparent Legal Services</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Professional fees and the full scope of representation are agreed upon transparently before legal work begins.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#e8e8ea] shadow-xs">
              <ShieldCheck className="w-8 h-8 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Remote Consultations</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Consultations are conducted online, allowing clients to receive Brazilian legal guidance without needing to travel initially.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#retirement-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Book Your Legal Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. FREQUENTLY ASKED QUESTIONS (15 COMPREHENSIVE FAQS)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Brazil Retirement Visa – FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d]">
              Key questions about pension eligibility, $2,000 income requirements, property purchases, and taxes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-[#f9f9fb] rounded-xl border border-[#e8e8ea] overflow-hidden shadow-xs">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors cursor-pointer hover:bg-white"
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
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#44474d] leading-relaxed border-t border-[#e8e8ea] bg-white">
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
          11. FINAL SECTION: RESERVATION FORM AT THE END
          (IMAGE AT LEFT, FORM AT RIGHT AS REQUESTED!)
          ======================================================== */}
      <section className="w-full bg-[#edeef0] py-16 lg:py-24 border-t border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — READY TO RETIRE IN BRAZIL?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Plan Your Retirement in Brazil With Confidence
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Whether you are preparing to move to Brazil, already living in the country, or considering a retirement-based residence application, Caspani Lawyers can help you understand your legal options. Receive personalized immigration guidance and professional legal assistance tailored to your retirement plans.
            </p>
          </div>

          {/* TWO-COLUMN LAYOUT: IMAGE ON THE LEFT, FORM ON THE RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
            {/* Left Column: Curated Stock Image with Badge */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=85"
                  alt="Retiree consultation with Caspani Lawyers"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/95 via-[#0f1e36]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CONFIDENTIAL LEGAL INTAKE
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    Retirement &amp; Relocation Concierge
                  </h3>
                  <p className="text-xs text-[#edeef0] leading-relaxed">
                    Direct legal evaluation by licensed Brazilian counsel within 24 business hours.
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
                id="retirement-bottom-reservation-form"
                title="Schedule Your Retirement Consultation"
                subtitle="Confidential review by licensed Brazilian immigration counsel within 24 hours"
                presetService="Retirement Visa"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
