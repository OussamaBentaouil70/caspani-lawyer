import React, { useState, useEffect } from 'react';
import { ConsultationForm } from '../components/ConsultationForm';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  FileCheck,
  Scale,
  Users,
  Compass,
  FileText,
  HelpCircle,
  Clock,
  Heart,
  Calendar,
  Sparkles,
  ChevronDown
} from 'lucide-react';

interface MarriageResidencyPageProps {
  onNavigate: (route: string) => void;
}

export const MarriageResidencyPage: React.FC<MarriageResidencyPageProps> = ({ onNavigate }) => {
  // Sync SEO metadata
  useEffect(() => {
    document.title = 'Brazil Residency Through Marriage | Caspani Lawyers';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Married to a Brazilian citizen? Get legal assistance with marriage-based residency, stable unions, documentation and Federal Police procedures.'
      );
    }
  }, []);

  // Form state for hero intake form
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
      `Hello Caspani Lawyers, my name is ${heroForm.fullName || 'Client'}. I am inquiring about Marriage Permanent Residency in Brazil.\nPhone: ${heroForm.countryCode} ${heroForm.phone}\nEmail: ${heroForm.email}\nDetails: ${heroForm.message}`
    );
    window.open(`https://wa.me/5541998247700?text=${text}`, '_blank');
  };

  const faqs = [
    {
      question: 'Can I obtain permanent residency in Brazil by marrying a Brazilian citizen?',
      answer:
        'Marriage to a Brazilian citizen establishes legal eligibility for residence authorization based on family reunification (Reunião Familiar), subject to fulfilling statutory documentation and background requirements under Brazilian Migration Law 13.445/2017.'
    },
    {
      question: 'Can I apply through a stable union instead of marriage?',
      answer:
        'Yes. Brazilian law fully recognizes a stable civil union (união estável) as having equal status for family reunification residency, provided the required documentary evidence (e.g. notarized public deed, joint financial cohabitation proof) is satisfied.'
    },
    {
      question: 'Can I apply if my marriage took place outside Brazil?',
      answer:
        'Yes, potentially. Foreign marriages can be used in Brazilian immigration procedures. The foreign marriage certificate must be apostilled in the issuing country, translated by a sworn Brazilian translator, and transcribed at a Cartório de Registro Civil in Brazil.'
    },
    {
      question: 'Do I need to be physically present in Brazil?',
      answer:
        'The requirements depend on the procedural route. If applying from abroad via a Brazilian Consulate, initial filing starts overseas. However, the final issuance of the National Migration Registry card (CRNM / RNM) requires personal biometric registration before the Federal Police in Brazil.'
    },
    {
      question: 'Can I work in Brazil after obtaining residency?',
      answer:
        'Yes. Residence authorization based on marriage or stable union grants full, unrestricted work authorization in Brazil upon issuance of the Federal Police protocol and CRNM.'
    },
    {
      question: 'How long does the process take?',
      answer:
        'Federal Police processing in Brazil typically takes between 30 and 90 days. Consular processing abroad generally takes 4 to 8 weeks depending on the specific consular post.'
    },
    {
      question: 'What happens if I divorce after obtaining residency?',
      answer:
        'The immigration consequences of divorce or legal separation depend on how long the marriage lasted, whether there are Brazilian children, and whether indefinite permanent status has already been definitively granted. An individual legal review is recommended.'
    }
  ];

  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* ========================================================
          1. HERO SECTION: MATCHING IMAGE.PNG (CORCOVADO RIO DUSK BACKDROP)
          ======================================================== */}
      <section className="relative w-full text-white min-h-[620px] flex items-center py-12 lg:py-20 overflow-hidden">
        {/* Background Panoramic Rio Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=2000&q=85')`
          }}
        ></div>

        {/* Cinematic Multi-Stop Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d16]/92 via-[#081a2b]/88 to-[#040e18]/85 pointer-events-none"></div>

        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 w-full z-10">
          {/* Breadcrumbs matching image.png */}
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
            <span className="text-white">MARRIAGE PERMANENT RESIDENCY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] lg:leading-[54px] font-bold text-white mb-4">
                Marriage Permanent Residency in Brazil
              </h1>

              <p className="text-sm sm:text-base text-[#edeef0] leading-relaxed max-w-2xl mb-6">
                Legal assistance for foreigners married to Brazilian citizens or in a legally recognized stable union. We help you navigate the Brazilian residency process with personalized legal guidance, proper documentation, and assistance with Federal Police procedures.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
                <a
                  href="#hero-consultation-card"
                  className="inline-flex items-center justify-center gap-2 bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#how-we-help-section"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/30 transition-all duration-200"
                >
                  Learn About the Process
                </a>
              </div>

              {/* 4 Trust Badges Horizontally (Matching image.png) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-white/20">
                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Scale className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Licensed Brazilian Attorney (OAB)
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Personalized Legal Guidance
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Support in English, Portuguese &amp; Spanish
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Confidential and Secure Process
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Consultation Card (Exact match to image.png) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="hero-consultation-card">
              <div className="bg-white text-[#1a1c1d] rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/20">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0f1e36] mb-1">
                  Request Your Consultation
                </h3>
                <p className="text-xs text-[#44474d] mb-4 pb-2 border-b border-[#e8e8ea]">
                  Tell us about your situation and our team will get back to you shortly.
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
                      Thank you, <strong className="text-[#0f1e36]">{heroForm.fullName}</strong>. A licensed Brazilian attorney will review your details within 24 business hours.
                    </p>
                    <button
                      onClick={handleWhatsAppRedirect}
                      type="button"
                      className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md mb-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Continue via WhatsApp Concierge</span>
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
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="hero-res-name">
                        Full name
                      </label>
                      <input
                        id="hero-res-name"
                        required
                        type="text"
                        value={heroForm.fullName}
                        onChange={(e) => setHeroForm({ ...heroForm, fullName: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="hero-res-email">
                        Email
                      </label>
                      <input
                        id="hero-res-email"
                        required
                        type="email"
                        value={heroForm.email}
                        onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="hero-res-phone">
                        Phone
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
                          id="hero-res-phone"
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
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="hero-res-message">
                        Message
                      </label>
                      <textarea
                        id="hero-res-message"
                        rows={3}
                        value={heroForm.message}
                        onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                        placeholder="Tell us about your situation and your goals."
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
                      <span>Your information is confidential.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. HOW WE HELP SECTION (MATCHING IMAGE.PNG: COUPLE OVERLOOKING RIO)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]" id="how-we-help-section">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image: International couple looking at Rio scenery */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=85"
                  alt="Couple embracing overlooking Rio de Janeiro landscape"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — HOW WE HELP
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-5">
                Build Your Life in Brazil Together
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed mb-6">
                <p>
                  If you are married to a Brazilian citizen or in a legally recognized stable union (<strong className="text-[#0f1e36]">união estável</strong>), you may qualify for a Brazilian residence permit based on family reunification.
                </p>
                <p>
                  At <strong className="text-[#0f1e36]">Caspani Lawyers</strong>, we provide legal assistance throughout the process, from eligibility assessment and document preparation to application submission and Federal Police registration.
                </p>
                <p>
                  Whether you are currently living in Brazil or applying from abroad, we help you understand your legal options and the requirements applicable to your circumstances.
                </p>
              </div>

              <a
                href="#hero-consultation-card"
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
          3. WHY CLIENTS CHOOSE CASPANI LAWYERS (5 CIRCULAR ICON CARDS)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — WHY CLIENTS CHOOSE CASPANI LAWYERS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              Reliable Legal Support for Your New Chapter
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Moving to Brazil to live with your spouse or partner is an important decision. Our legal services are designed to make the immigration process clearer, more organized, and legally secure.
            </p>
          </div>

          {/* 5 Circular Icon Cards Horizontal Grid (Matching image.png) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* 1. Personalized Immigration Strategy */}
            <div className="bg-white rounded-xl p-6 border border-[#e2e2e4] shadow-xs flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#f3ede0] text-[#775a19] flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2 leading-snug">
                Personalized Immigration Strategy
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We evaluate your specific situation and guide you on the best immigration pathway based on your marriage or stable union.
              </p>
            </div>

            {/* 2. Complete Document Preparation */}
            <div className="bg-white rounded-xl p-6 border border-[#e2e2e4] shadow-xs flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#f3ede0] text-[#775a19] flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2 leading-snug">
                Complete Document Preparation
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Assistance with all required Brazilian and foreign documents, translations, legalizations and apostilles.
              </p>
            </div>

            {/* 3. Federal Police Support */}
            <div className="bg-white rounded-xl p-6 border border-[#e2e2e4] shadow-xs flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#f3ede0] text-[#775a19] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2 leading-snug">
                Federal Police Assistance
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We handle the entire process with the Federal Police, including appointments, protocol, and follow-up.
              </p>
            </div>

            {/* 4. Direct Attorney Communication */}
            <div className="bg-white rounded-xl p-6 border border-[#e2e2e4] shadow-xs flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#f3ede0] text-[#775a19] flex items-center justify-center mb-4">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2 leading-snug">
                Direct Attorney Communication
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Work directly with an experienced Brazilian immigration lawyer throughout your case.
              </p>
            </div>

            {/* 5. Support for International Couples */}
            <div className="bg-white rounded-xl p-6 border border-[#e2e2e4] shadow-xs flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#f3ede0] text-[#775a19] flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2 leading-snug">
                Support for Foreign Couples
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We assist with marriages and stable unions, including cases where the couple lives abroad or one spouse is not in Brazil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. STEP-BY-STEP PROCESS SECTION
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — STEP-BY-STEP PROCESS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              How to Obtain Residency in Brazil Through Marriage
            </h2>
            <p className="text-sm font-semibold text-[#775a19]">
              Your Brazilian Residency Application: Step by Step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] flex flex-col">
              <div className="w-8 h-8 rounded-full bg-[#0f1e36] text-[#e9c176] font-bold text-xs flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                Initial Legal Consultation
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We assess your eligibility, review your circumstances, and identify the appropriate immigration procedure.
              </p>
            </div>

            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] flex flex-col">
              <div className="w-8 h-8 rounded-full bg-[#0f1e36] text-[#e9c176] font-bold text-xs flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                Document Preparation
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We provide a personalized document checklist and assist with review, translation, apostille, and legalization requirements.
              </p>
            </div>

            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] flex flex-col">
              <div className="w-8 h-8 rounded-full bg-[#0f1e36] text-[#e9c176] font-bold text-xs flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                Immigration Application
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We prepare and assist with submitting your application to the competent Brazilian immigration authorities.
              </p>
            </div>

            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] flex flex-col">
              <div className="w-8 h-8 rounded-full bg-[#0f1e36] text-[#e9c176] font-bold text-xs flex items-center justify-center mb-4">
                4
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                Federal Police Registration
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We guide you through applicable Federal Police procedures, appointments, biometrics, and responses to documentation requests.
              </p>
            </div>

            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] flex flex-col">
              <div className="w-8 h-8 rounded-full bg-[#0f1e36] text-[#e9c176] font-bold text-xs flex items-center justify-center mb-4">
                5
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                Residency Approval &amp; Documentation
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Following approval, we assist with the applicable migration registration and residence documentation, including the RNM and CRNM.
              </p>
            </div>
          </div>

          <p className="text-xs text-center text-[#75777e] italic max-w-xl mx-auto">
            The applicable residence period and conditions depend on the legal basis and the decision of the competent authorities.
          </p>
        </div>
      </section>

      {/* ========================================================
          5. REQUIRED DOCUMENTS SECTION
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — DOCUMENTATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Documents Required for Marriage-Based Residency in Brazil
            </h2>
            <p className="text-sm font-semibold text-[#775a19]">
              What Do You Need to Apply?
            </p>
            <p className="text-xs sm:text-sm text-[#44474d] mt-2">
              The required documents depend on your nationality, immigration history, marital status, and whether you apply from Brazil or abroad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
              <span className="text-xs text-[#1a1c1d] leading-relaxed">
                Valid passport or accepted identity document.
              </span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
              <span className="text-xs text-[#1a1c1d] leading-relaxed">
                Marriage certificate or legally sufficient evidence of a stable union (união estável).
              </span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
              <span className="text-xs text-[#1a1c1d] leading-relaxed">
                Brazilian spouse's or partner's official identification documents.
              </span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
              <span className="text-xs text-[#1a1c1d] leading-relaxed">
                Criminal background certificates, when required.
              </span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
              <span className="text-xs text-[#1a1c1d] leading-relaxed">
                Applicable declarations and supporting cohabitation documents.
              </span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
              <span className="text-xs text-[#1a1c1d] leading-relaxed">
                Apostilled or legalized foreign documents, where required.
              </span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
              <span className="text-xs text-[#1a1c1d] leading-relaxed">
                Certified translations into Portuguese by a Brazilian sworn translator.
              </span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
              <span className="text-xs text-[#1a1c1d] leading-relaxed">
                Additional documents requested by Brazilian immigration authorities.
              </span>
            </div>
          </div>

          <div className="bg-[#f3ede0] rounded-xl p-4 sm:p-5 border border-[#c5a059]/40 text-center max-w-2xl mx-auto">
            <p className="text-xs text-[#785a1a] leading-relaxed">
              Our legal team reviews your individual circumstances and provides a personalized checklist before preparing your application.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. LEGAL DEEP-DIVES & PROCEDURAL CLARIFICATIONS
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Marriage vs. Stable Union */}
            <div className="bg-[#f9f9fb] rounded-xl p-6 lg:p-8 border border-[#e8e8ea] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19] block mb-2">
                  LEGAL COMPARISON
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-3">
                  Marriage vs. Stable Union in Brazil
                </h3>
                <h4 className="text-xs font-semibold text-[#775a19] mb-3">
                  Can You Apply for Brazilian Residency Without Being Married?
                </h4>
                <p className="text-xs text-[#44474d] leading-relaxed mb-3">
                  Yes. Brazilian immigration law provides family reunification pathways for eligible spouses and partners in a legally recognized stable union (<strong className="text-[#0f1e36]">união estável</strong>).
                </p>
                <p className="text-xs text-[#44474d] leading-relaxed">
                  However, the documentation required to establish a stable union differs from the evidence normally presented by legally married couples. Our immigration lawyer can assess your relationship documentation and explain the requirements applicable to your case.
                </p>
              </div>
            </div>

            {/* Card 2: Applying From Abroad */}
            <div className="bg-[#f9f9fb] rounded-xl p-6 lg:p-8 border border-[#e8e8ea] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19] block mb-2">
                  JURISDICTIONAL ROUTING
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-3">
                  Can You Apply for Brazilian Residency From Abroad?
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-3">
                  Foreign nationals married to Brazilian citizens may have different procedural options depending on their circumstances.
                </p>
                <p className="text-xs text-[#44474d] leading-relaxed mb-3">
                  Applicants outside Brazil may be eligible to request a family reunion visa through a Brazilian consular authority abroad. Those already in Brazil may qualify to apply for residence authorization directly before the competent immigration authorities.
                </p>
                <p className="text-xs text-[#44474d] leading-relaxed">
                  We help determine the appropriate route based on your location, nationality, and legal status.
                </p>
              </div>
            </div>

            {/* Card 3: Citizenship Expedited Route */}
            <div className="bg-[#f9f9fb] rounded-xl p-6 lg:p-8 border border-[#e8e8ea] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19] block mb-2">
                  NATURALIZATION PATHWAY
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-3">
                  Does Marriage Automatically Grant Brazilian Citizenship?
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-3">
                  No. Marriage to a Brazilian citizen does not automatically grant Brazilian nationality.
                </p>
                <p className="text-xs text-[#44474d] leading-relaxed mb-3">
                  However, under certain conditions, marriage to a Brazilian citizen may <strong className="text-[#0f1e36]">reduce the residence period required for ordinary naturalization to just one year</strong>. Applicants must still meet other applicable legal requirements.
                </p>
                <p className="text-xs text-[#44474d] leading-relaxed">
                  At Caspani Lawyers, we assess both your immediate residency options and your potential future eligibility for Brazilian citizenship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. FREQUENTLY ASKED QUESTIONS SECTION
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — COMMON QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
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
      </section>

      {/* ========================================================
          8. FINAL CALLOUT & SECOND RESERVATION FORM (BEFORE FOOTER)
          ======================================================== */}
      <section className="w-full bg-[#edeef0] py-16 lg:py-24 border-t border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — GET STARTED TODAY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Start Your New Life in Brazil With Legal Guidance
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#775a19] mb-3">
              Book a Consultation With a Brazilian Immigration Lawyer
            </p>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto mb-4">
              Whether you are married to a Brazilian citizen, planning to marry, or seeking residency through a stable union, Caspani Lawyers can help you understand the legal requirements and available immigration pathways. Receive personalized guidance, a document checklist tailored to your circumstances, and a legal strategy for your Brazilian residency application.
            </p>
            <div className="inline-block py-1 px-3 bg-white/60 rounded text-[11px] font-mono text-[#0f1e36] mb-8 border border-[#c5a059]/30">
              CASPANI LAWYERS | ADVOCACIA INTERNACIONAL • Brazilian Immigration &amp; International Legal Services
            </div>
          </div>

          {/* TWO-COLUMN LAYOUT: IMAGE ON THE LEFT, FORM ON THE RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
            {/* Left Column: Curated Stock Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=85"
                  alt="Marriage residency consultation in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/95 via-[#0f1e36]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CONFIDENTIAL LEGAL INTAKE
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    Family Reunification Concierge
                  </h3>
                  <p className="text-xs text-[#edeef0] leading-relaxed">
                    Direct evaluation by licensed Brazilian counsel within 24 business hours.
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
                id="marriage-residency-bottom-form"
                title="Schedule Your Marriage Residency Consultation"
                subtitle="Confidential review by licensed Brazilian counsel within 24 hours"
                presetService="Marriage Permanent Residency"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
