import React, { useState, useEffect } from 'react';
import { ConsultationForm } from '../components/ConsultationForm';
import {
  CheckCircle2,
  Lock,
  ArrowRight,
  Scale,
  Users,
  Compass,
  FileText,
  Clock,
  Sparkles,
  ChevronDown,
  Building2,
  Heart,
  Baby,
  UserCheck,
  ShieldCheck,
  AlertTriangle,
  Globe2,
  Briefcase,
  HelpCircle,
  GraduationCap,
  Award,
  FileCheck
} from 'lucide-react';

interface ChildResidencyPageProps {
  onNavigate: (route: string) => void;
}

export const ChildResidencyPage: React.FC<ChildResidencyPageProps> = ({ onNavigate }) => {
  // Sync document title and meta description
  useEffect(() => {
    document.title = 'Brazil Permanent Residency Through a Brazilian Child | Caspani Lawyers';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Permanent residency in Brazil for foreign parents of a Brazilian child. Legal guidance on birthright citizenship (jus soli), Federal Police registration, and 1-year fast-track naturalization.'
      );
    }
  }, []);

  // Hero form state
  const [heroForm, setHeroForm] = useState({
    fullName: '',
    email: '',
    countryCode: '+55',
    phone: '',
    countryResidence: '',
    childStatus: 'Child Born in Brazil',
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
      `Hello Caspani Lawyers, my name is ${heroForm.fullName || 'Client'}. I am inquiring about Brazil Permanent Residency Through a Brazilian Child.\nChild Status: ${heroForm.childStatus}\nCurrent Country: ${heroForm.countryResidence}\nPhone: ${heroForm.countryCode} ${heroForm.phone}\nEmail: ${heroForm.email}\nDetails: ${heroForm.message}`
    );
    window.open(`https://wa.me/5541998247700?text=${text}`, '_blank');
  };

  const faqs = [
    {
      question: '1. Can I get permanent residency in Brazil if my child is Brazilian?',
      answer:
        'Eligible foreign parents of Brazilian citizens may qualify for residence authorization based on family reunification under Brazilian immigration law. The application must satisfy the applicable legal and documentary requirements.'
    },
    {
      question: '2. Is a child born in Brazil automatically Brazilian?',
      answer:
        'Generally, yes. Brazil recognizes citizenship by birth (jus soli) for individuals born within Brazilian territory, subject to the constitutional exception involving certain children of foreign parents serving their country in a diplomatic capacity.'
    },
    {
      question: '3. Do both parents receive residency automatically?',
      answer:
        'No. Each foreign parent must independently satisfy the applicable requirements and complete the relevant immigration procedure. Brazilian citizenship is not conferred automatically upon parents.'
    },
    {
      question: '4. Do I need to be married to the child\'s other parent?',
      answer:
        'No. A legally recognized parent-child relationship provides a basis for residence authorization regardless of whether the parents are married, cohabitating, or in a civil union.'
    },
    {
      question: '5. Can I apply if my child was born outside Brazil?',
      answer:
        'Potentially, yes. If the child holds Brazilian citizenship (e.g. through consular registration or nationality acquisition) and the qualifying parent-child relationship is properly documented, a family-based immigration pathway may be available.'
    },
    {
      question: '6. Can I apply while already in Brazil?',
      answer:
        'Yes. Eligible foreign nationals present in Brazil may request residence authorization through the applicable Federal Police procedure without leaving Brazilian territory.'
    },
    {
      question: '7. Can I apply from another country?',
      answer:
        'Yes. Eligible applicants living abroad may request a family reunification visa (VITEM XI) through the competent Brazilian consular authority in their country of residence.'
    },
    {
      question: '8. Is there a minimum age for the Brazilian child?',
      answer:
        'The family reunification category for a foreign national who has a Brazilian child does not establish a universal minimum age of the child as a condition of eligibility. Newborns immediately qualify parents for filing.'
    },
    {
      question: '9. Does my child need to live in Brazil?',
      answer:
        'The child\'s residence circumstances may be relevant to the application and should be evaluated individually, particularly regarding custody, family cohabitation, and future relocation plans.'
    },
    {
      question: '10. Can I apply if I am divorced or separated?',
      answer:
        'Potentially, yes. Divorce or separation does not automatically eliminate a legally recognized parent-child relationship under Brazilian law.'
    },
    {
      question: '11. Can I apply if I do not have custody of my child?',
      answer:
        'Custody arrangements and parental rights may require additional legal assessment. Eligibility should not be assumed or ruled out without examining the relevant court orders and civil documents.'
    },
    {
      question: '12. Do I need to show a minimum income?',
      answer:
        'The family reunification category based on having a Brazilian child does not generally impose a universal fixed investment or monthly income threshold comparable to investor or digital nomad immigration categories.'
    },
    {
      question: '13. Can I work in Brazil after obtaining residency?',
      answer:
        'Yes. Qualifying residents receive full work authorization, a Carteira de Registro Nacional Migratório (CRNM), and may request a Brazilian work permit (Carteira de Trabalho - CTPS).'
    },
    {
      question: '14. Is the residence authorization permanent?',
      answer:
        'Residence based on a Brazilian child is granted for an indefinite term (prazo indeterminado), subject to the applicable immigration rules and maintenance of valid registration.'
    },
    {
      question: '15. Can I obtain Brazilian citizenship after one year?',
      answer:
        'A foreign national with a Brazilian child may qualify for a statutory reduction of the ordinary 4-year naturalization residence requirement to just one year of continuous lawful residence. However, naturalization is not automatic and Portuguese proficiency must be demonstrated.'
    },
    {
      question: '16. Does having a Brazilian child automatically give me a Brazilian passport?',
      answer:
        'No. The child\'s Brazilian citizenship does not automatically confer Brazilian nationality on the foreign parent. You must first obtain residence authorization and subsequently apply for naturalization.'
    },
    {
      question: '17. What if my child\'s birth certificate contains an error?',
      answer:
        'Civil registration errors (such as misspelled names, missing parentage, or incorrect nationality) may require administrative Cartório retificação or judicial correction before the immigration application can proceed.'
    },
    {
      question: '18. What if my child is Brazilian through a Brazilian parent but was born abroad?',
      answer:
        'The child\'s nationality and civil registration documentation (certidão de nascimento consular or cartório transcription) must be assessed to establish the appropriate basis for the parent\'s application.'
    },
    {
      question: '19. How long does the application take?',
      answer:
        'Processing times typically range from 30 to 90 days for in-country Federal Police procedures, and 3 to 8 weeks for consular visa issuance abroad, depending on post workloads and document completeness.'
    },
    {
      question: '20. How much does the application cost?',
      answer:
        'Costs include federal migration registration fees (taxas GRU), civil document issuances, sworn translations, apostilles, and professional legal fees. At Caspani Lawyers, we begin with a paid consultation with transparent fee proposals.'
    }
  ];

  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* ========================================================
          1. HERO SECTION: RESIDENCY THROUGH A BRAZILIAN CHILD
          (BACKGROUND IMAGE + FORM ON RIGHT: "Lform 3la liman")
          ======================================================== */}
      <section className="relative w-full text-white min-h-[660px] flex items-center py-12 lg:py-20 overflow-hidden">
        {/* Background Image: Newborn baby in parents' loving hands in Brazil */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=2000&q=85')`
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
            <span className="text-white">RESIDENCY THROUGH A BRAZILIAN CHILD</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headlines & Overview */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#e9c176] mb-2 block">
                JUS SOLI • CONSTITUTIONAL RESIDENCY • REUNIÃO FAMILIAR
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] lg:leading-[54px] font-bold text-white mb-3">
                Brazil Permanent Residency Through a Brazilian Child
              </h1>

              <p className="text-lg text-[#fed488] font-serif italic mb-4">
                Your child is Brazilian. Your family deserves a secure future together.
              </p>

              <div className="text-sm sm:text-base text-[#edeef0] leading-relaxed max-w-2xl space-y-3 mb-6">
                <p>
                  Are you a foreign parent of a child born in Brazil or a child who holds Brazilian citizenship? Brazilian immigration law provides a family-based residence pathway for eligible foreign nationals who have a Brazilian child.
                </p>
                <p>
                  At <strong className="text-white">Caspani Lawyers</strong>, we provide personalized legal assistance with residence authorization applications, family documentation, immigration compliance, and Federal Police registration. Whether you are already living in Brazil or planning to relocate from abroad, we help you understand your legal options and prepare your application.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
                <a
                  href="#child-hero-form"
                  className="inline-flex items-center justify-center gap-2 bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg"
                >
                  <span>Book Your Legal Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#child-residency-overview"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/30 transition-all duration-200"
                >
                  Explore Your Residency Options
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
                    <Baby className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Family-Based Immigration Services
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Assistance From Brazil or Abroad
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Multilingual &amp; Confidential Consultations
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Intake Form ("Lform 3la liman") */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="child-hero-form">
              <div className="bg-white text-[#1a1c1d] rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/20">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19] block mb-1">
                  REQUEST YOUR LEGAL CONSULTATION
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0f1e36] mb-1">
                  Parent Residency Intake
                </h3>
                <p className="text-xs text-[#44474d] mb-4 pb-2 border-b border-[#e8e8ea]">
                  Tell us about your child's birth and family plans to schedule a confidential legal review.
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
                      Thank you, <strong className="text-[#0f1e36]">{heroForm.fullName}</strong>. A licensed Brazilian immigration lawyer will review your family case within 24 business hours.
                    </p>
                    <button
                      onClick={handleWhatsAppRedirect}
                      type="button"
                      className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md mb-2 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Chat Immediately on WhatsApp</span>
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
                  <form onSubmit={handleHeroSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="child-name">
                        Full Name *
                      </label>
                      <input
                        id="child-name"
                        required
                        type="text"
                        value={heroForm.fullName}
                        onChange={(e) => setHeroForm({ ...heroForm, fullName: e.target.value })}
                        placeholder="Your full legal name"
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="child-email">
                        Email Address *
                      </label>
                      <input
                        id="child-email"
                        required
                        type="email"
                        value={heroForm.email}
                        onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="child-phone">
                        Phone / WhatsApp *
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        <select
                          value={heroForm.countryCode}
                          onChange={(e) => setHeroForm({ ...heroForm, countryCode: e.target.value })}
                          className="col-span-1 bg-[#f3f3f5] text-[#1a1c1d] px-2 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19]"
                        >
                          <option value="+55">🇧🇷 +55</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+33">🇫🇷 +33</option>
                          <option value="+49">🇩🇪 +49</option>
                          <option value="+39">🇮🇹 +39</option>
                          <option value="+34">🇪🇸 +34</option>
                          <option value="+351">🇵🇹 +351</option>
                          <option value="+595">🇵🇾 +595</option>
                        </select>
                        <input
                          id="child-phone"
                          required
                          type="tel"
                          value={heroForm.phone}
                          onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                          placeholder="Phone number"
                          className="col-span-3 bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="child-country">
                          Current Country
                        </label>
                        <input
                          id="child-country"
                          type="text"
                          value={heroForm.countryResidence}
                          onChange={(e) => setHeroForm({ ...heroForm, countryResidence: e.target.value })}
                          placeholder="e.g. Brazil, US, UK"
                          className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="child-status">
                          Child's Situation
                        </label>
                        <select
                          id="child-status"
                          value={heroForm.childStatus}
                          onChange={(e) => setHeroForm({ ...heroForm, childStatus: e.target.value })}
                          className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19]"
                        >
                          <option value="Child Born in Brazil">Child Born in Brazil</option>
                          <option value="Child Born Abroad">Child Born Abroad</option>
                          <option value="Expecting Child in Brazil">Expecting Child in Brazil</option>
                          <option value="Adoption in Brazil">Adoption in Brazil</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="child-msg">
                        Message
                      </label>
                      <textarea
                        id="child-msg"
                        rows={2}
                        value={heroForm.message}
                        onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                        placeholder="Explain your child's birth date, location, current parent civil status, and your relocation timeline..."
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] p-2.5 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Schedule My Legal Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[10px] text-center text-[#75777e] leading-tight">
                      Legal consultations are paid and conducted online by appointment. Your personal information is treated confidentially.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. RESIDENCY BASED ON A BRAZILIAN CHILD (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]" id="child-residency-overview">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image: Young family enjoying sunny Brazil */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=1200&q=85"
                  alt="Parents holding hands with child walking along Brazilian coast"
                  className="w-full h-80 sm:h-96 lg:h-[450px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-3.5 rounded-xl border border-[#c5a059]/30 flex items-center justify-between text-xs">
                  <span className="font-medium">São Paulo • Rio de Janeiro • Curitiba • Salvador</span>
                  <span className="font-mono text-[#e9c176]">Federal Police RNM Protocol</span>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — RESIDENCY BASED ON A BRAZILIAN CHILD
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Your Brazilian Child May Provide a Pathway to Residency
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed mb-6">
                <p>
                  Under Brazilian immigration law, foreign parents of Brazilian citizens may qualify for residence authorization based on family reunification. This pathway recognizes the importance of maintaining family unity and allowing eligible parents to establish legal residence in Brazil.
                </p>
                <p>
                  It may be available to foreign nationals whose children acquired Brazilian citizenship by birth or another legally recognized route. However, the applicant must establish the qualifying parent-child relationship and satisfy the applicable immigration requirements.
                </p>
                <p>
                  Having a Brazilian child does not automatically grant residence or citizenship to the foreign parent. At <strong className="text-[#0f1e36]">Caspani Lawyers</strong>, we assess your circumstances and guide you through the appropriate immigration procedure.
                </p>
              </div>

              <a
                href="#child-hero-form"
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
          3. ELIGIBILITY REQUIREMENTS (WITH STOCK IMAGE & 5 PILLARS)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — QUALIFYING CONDITIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              Who Can Apply for Residency Through a Brazilian Child?
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              A foreign national may be eligible for residence authorization based on having a Brazilian child when the applicable legal requirements are satisfied.
            </p>
          </div>

          {/* Section 3 Stock Image Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg border border-[#e2e2e4] h-60 sm:h-72">
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=85"
              alt="Parent and child on Brazilian coast"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/90 via-[#0f1e36]/40 to-transparent flex flex-col justify-center p-6 sm:p-10 text-white max-w-xl">
              <span className="text-[10px] font-mono uppercase text-[#e9c176] tracking-wider mb-1.5">
                Statutory Parentage &amp; Civil Integrity
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                Certified Parent-Child Kinship Records
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                Clean criminal background certificates, authentic Brazilian Cartório birth deeds, and valid passport identification ensure straightforward Federal Police filing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <div className="bg-white p-5 rounded-xl border border-[#e8e8ea] shadow-xs flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">1</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-2">Parent of a Citizen</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                You must establish a legally recognized parent-child relationship with a Brazilian citizen.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e8e8ea] shadow-xs flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">2</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-2">Child Holds Citizenship</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                The child's Brazilian nationality must be supported by appropriate documentation.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e8e8ea] shadow-xs flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">3</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-2">Family Relationship</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                A Brazilian birth certificate or other legally valid civil record establishes parentage.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e8e8ea] shadow-xs flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">4</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-2">Immigration Criteria</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                You must provide the required identification, background documentation, and declarations.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e8e8ea] shadow-xs flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">5</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-2">Application Route</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Follow the appropriate application procedure depending on whether you are in Brazil or abroad.
              </p>
            </div>
          </div>

          <div className="bg-[#fff8eb] rounded-xl p-5 border border-[#fed488] flex items-start gap-3.5 max-w-3xl mx-auto mb-6">
            <AlertTriangle className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
            <p className="text-xs text-[#785a1a] leading-relaxed">
              <strong>Important:</strong> Eligibility must be assessed individually, particularly where civil registration, parental recognition, custody, or other legal circumstances require additional analysis.
            </p>
          </div>

          <div className="text-center">
            <a
              href="#child-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Check Your Residency Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. BRAZILIAN CITIZENSHIP BY BIRTH (JUS SOLI + STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Jus Soli Breakdown */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — CONSTITUTIONAL CITIZENSHIP PRINCIPLES
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Is a Child Born in Brazil Automatically Brazilian?
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed mb-6">
                <p>
                  Brazil generally recognizes citizenship by birth for individuals born within Brazilian territory, even when both parents are foreign nationals. This principle is known as <strong>jus soli</strong>, or citizenship based on place of birth.
                </p>
                <p>
                  However, the Brazilian Constitution establishes an exception involving children of foreign parents who are in Brazil in the service of their respective country (diplomatic personnel).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                    What Does This Mean for Foreign Parents?
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    A child born in Brazil may acquire Brazilian citizenship even if neither parent is Brazilian. Once the child's Brazilian nationality and parent-child relationship are properly documented, an eligible foreign parent may request residence authorization under family reunification rules.
                  </p>
                </div>

                <div className="p-4 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                    Does the Parent Automatically Become Brazilian?
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    <strong>No.</strong> Brazilian citizenship acquired by the child does not automatically extend to the parents. The parent must separately apply for residence authorization and, if interested in Brazilian citizenship later, satisfy naturalization requirements.
                  </p>
                </div>
              </div>

              <a
                href="#child-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm w-fit"
              >
                <span>Discuss Your Child's Citizenship and Your Residency</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Column: Stock Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=85"
                  alt="Newborn baby resting in hospital with birth certificate"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-[11px] font-mono text-[#e9c176] block mb-1">Jus Soli Constitutional Guarantee:</span>
                  <p className="text-xs font-semibold">
                    Article 12, I, 'a' of the Federal Constitution of Brazil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. CHILDREN BORN OUTSIDE BRAZIL (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=85"
                  alt="International flights and consular civil registration"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Consular Transcription &amp; Cartório</span>
                  <p className="text-[11px] text-[#edeef0]">
                    Consular birth certificates must be registered at Cartório do 1º Ofício (Livro E) in Brazil.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — INTERNATIONAL BIRTHS
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Can You Apply If Your Brazilian Child Was Born Abroad?
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed mb-6">
                <p>
                  A child does not necessarily have to be born in Brazil to hold Brazilian citizenship. Under Brazilian constitutional law, certain children born abroad to Brazilian parents may acquire Brazilian nationality through consular registration or residence and option procedures.
                </p>
                <p>
                  If your child holds Brazilian citizenship and the parent-child relationship is legally established, you may have a family-based immigration pathway.
                </p>
                <p>
                  However, cases involving foreign birth certificates, consular registration, nationality recognition, or incomplete civil documentation may require additional legal procedures.
                </p>
                <p>
                  At <strong className="text-[#0f1e36]">Caspani Lawyers</strong>, we assess the available documents and determine whether additional registration or recognition steps are necessary before filing the residence application.
                </p>
              </div>

              <a
                href="#child-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Request a Family Immigration Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. APPLYING FROM BRAZIL OR ABROAD (WITH 2 CARDS & STOCK IMAGES)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — APPLICATION ROUTES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              How to Apply for Residency Through Your Brazilian Child
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              There are different application procedures depending on your current location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Option 1 */}
            <div className="bg-[#f9f9fb] rounded-2xl overflow-hidden border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden border-b border-[#e8e8ea]">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85"
                    alt="Federal Police migration headquarters in Brazil"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/85 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold">Federal Police (Polícia Federal) in Brazil</span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="inline-block px-3 py-1 rounded bg-[#f3ede0] text-[#775a19] text-xs font-bold uppercase tracking-wider mb-3">
                    Option 1
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-2">
                    Apply While in Brazil
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-4">
                    Eligible foreign nationals who are present in Brazil may request residence authorization based on family reunification through the Federal Police.
                  </p>
                  <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
                    The procedure generally involves preparing the required documents, submitting the application, attending the in-person biometric appointment, and completing registration formalities.
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0">
                <div className="pt-4 border-t border-[#e8e8ea] text-xs text-[#75777e]">
                  Ideal for parents already in Brazil who gave birth locally or transitioned status while in-country.
                </div>
              </div>
            </div>

            {/* Option 2 */}
            <div className="bg-[#f9f9fb] rounded-2xl overflow-hidden border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden border-b border-[#e8e8ea]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=85"
                    alt="Consular visa application interview abroad"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/85 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold">Brazilian Embassy or Consulate Abroad</span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="inline-block px-3 py-1 rounded bg-[#f3ede0] text-[#775a19] text-xs font-bold uppercase tracking-wider mb-3">
                    Option 2
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-2">
                    Apply From Outside Brazil
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-4">
                    Eligible foreign parents living abroad may request the appropriate family reunification temporary visa (VITEM XI) through the Brazilian embassy or consulate responsible for their jurisdiction.
                  </p>
                  <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
                    After entering Brazil with the relevant visa, the applicant must complete the required Federal Police registration within the applicable statutory deadline (typically 90 days).
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0">
                <div className="pt-4 border-t border-[#e8e8ea] text-xs text-[#75777e]">
                  Ideal for international parents living overseas preparing their family relocation to Brazil.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0f1e36] text-white rounded-2xl p-7 sm:p-9 border border-[#c5a059]/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1">
                Which Route Is Right for You?
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed max-w-2xl">
                The appropriate procedure depends on your nationality, immigration history, current location, and supporting documentation. Our immigration lawyer evaluates these factors during your legal consultation.
              </p>
            </div>
            <a
              href="#child-hero-form"
              className="bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-md"
            >
              Book Your Immigration Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. REQUIRED DOCUMENTS (WITH STOCK IMAGE & CHECKLIST)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — DOCUMENTATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Documents Required for Residency Through a Brazilian Child
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d]">
              The exact requirements depend on the applicant's circumstances and the application route.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Left Image */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-lg border border-[#e2e2e4]">
              <img
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=85"
                alt="Brazilian birth certificate and apostilled parent passport documents"
                className="w-full h-80 sm:h-96 lg:h-full object-cover"
              />
              <div className="bg-[#0f1e36] text-white p-5">
                <span className="text-[11px] font-mono text-[#e9c176] uppercase block mb-1">
                  Certidão de Nascimento (Cartório)
                </span>
                <p className="text-xs text-[#edeef0] leading-relaxed">
                  The Brazilian birth certificate officially registers parentage and establishes direct entitlement to family reunification residency.
                </p>
              </div>
            </div>

            {/* Right Checklist */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Valid passport or other accepted identification',
                  'Brazilian birth certificate or other proof of child\'s Brazilian citizenship',
                  'Documentation establishing the parent-child relationship',
                  'Applicant\'s birth certificate or civil identification documents, where required',
                  'Criminal background certificates, where applicable',
                  'Required declarations concerning criminal history',
                  'Completed immigration application forms',
                  'Photographs, where required',
                  'Custody, parental recognition, or family-related documents, where relevant',
                  'Apostilled or legalized foreign documents, when applicable',
                  'Certified translations into Portuguese, where required',
                  'Proof of payment of applicable government fees'
                ].map((doc, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl border border-[#e8e8ea] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#1a1c1d]">{doc}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                Additional documents may be necessary when parentage, nationality, or civil registration requires clarification. At Caspani Lawyers, we prepare a personalized document checklist based on your individual circumstances.
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href="#child-hero-form"
                  className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Get Your Personalized Document Checklist</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-[11px] text-[#75777e] italic">
                  Provided through a paid legal consultation or agreed representation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. APPLICATION PROCESS (8-STEP ROADMAP WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — STEP-BY-STEP ROADMAP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              How to Obtain Residency Through a Brazilian Child
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Our 8-step process provides end-to-end guidance from initial eligibility check through to Federal Police CRNM registration.
            </p>
          </div>

          {/* Section 8 Stock Image Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg border border-[#e2e2e4] h-60 sm:h-72">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85"
              alt="Attorney guiding foreign parents through Brazilian residence application"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/90 via-[#0f1e36]/40 to-transparent flex flex-col justify-center p-6 sm:p-10 text-white max-w-xl">
              <span className="text-[10px] font-mono uppercase text-[#e9c176] tracking-wider mb-1.5">
                Comprehensive Procedural Support
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                Coordinated Federal Police Submission
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                We handle the Cartório, Federal Police, and Ministry of Justice procedural filings to secure your permanent residence status with confidence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="p-5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">1</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Initial Consultation</h3>
              <p className="text-xs text-[#44474d]">We assess your child's nationality, parent-child relationship, and current immigration status.</p>
            </div>

            <div className="p-5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">2</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Document Review</h3>
              <p className="text-xs text-[#44474d]">We identify the applicable requirements and review supporting civil and immigration documentation.</p>
            </div>

            <div className="p-5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">3</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Civil Registration</h3>
              <p className="text-xs text-[#44474d]">Where necessary, we help identify additional procedures involving birth registration or parentage.</p>
            </div>

            <div className="p-5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">4</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Application Preparation</h3>
              <p className="text-xs text-[#44474d]">We prepare the required forms, legal declarations, and supporting document sets.</p>
            </div>

            <div className="p-5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">5</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Application Submission</h3>
              <p className="text-xs text-[#44474d]">We assist with the appropriate residence authorization or consular visa application.</p>
            </div>

            <div className="p-5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">6</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Federal Police Registration</h3>
              <p className="text-xs text-[#44474d]">We guide you through the applicable Federal Police appointment and migration registration procedures.</p>
            </div>

            <div className="p-5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">7</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Residence Documentation</h3>
              <p className="text-xs text-[#44474d]">We assist with understanding the issuance of the Carteira de Registro Nacional Migratório (CRNM).</p>
            </div>

            <div className="p-5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">8</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Future Immigration Planning</h3>
              <p className="text-xs text-[#44474d]">We explain the applicable residence conditions and potential future naturalization options.</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#child-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Start Your Residency Application</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. OUR LEGAL SERVICES (WITH STOCK IMAGE & 8 AREAS)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — LEGAL ASSISTANCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              How Caspani Lawyers Can Help
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d]">
              Specialized legal counsel for international parents navigating Brazilian immigration and civil registration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            {/* Left Image */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-lg border border-[#e2e2e4]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85"
                alt="Lead Brazilian immigration attorney reviewing parent dossier"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
              />
              <div className="bg-[#0f1e36] text-white p-5">
                <span className="text-[10px] font-mono text-[#e9c176] uppercase block mb-1">
                  OAB/PR 58.420 • Caspani Lawyers
                </span>
                <p className="text-xs text-[#edeef0] leading-relaxed">
                  Direct attorney supervision for parentage declarations, sworn translations, and consular immigration files.
                </p>
              </div>
            </div>

            {/* Right 8 Services */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Eligibility Assessment</h3>
                <p className="text-xs text-[#44474d]">We evaluate whether your relationship with a Brazilian child provides a qualifying basis for residence authorization.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Civil Document Review</h3>
                <p className="text-xs text-[#44474d]">We review birth certificates, parentage records, and other supporting documents.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Immigration Strategy</h3>
                <p className="text-xs text-[#44474d]">We identify the appropriate application procedure based on your circumstances.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Application Preparation</h3>
                <p className="text-xs text-[#44474d]">We assist with forms, declarations, and required documentation.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Consular Visa Assistance</h3>
                <p className="text-xs text-[#44474d]">We provide legal guidance for eligible applicants requesting a family reunification visa abroad.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Federal Police Procedures</h3>
                <p className="text-xs text-[#44474d]">We assist with residence applications, registration, and related documentation requirements.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Immigration Complications</h3>
                <p className="text-xs text-[#44474d]">We provide legal assistance where documentation, immigration history, or administrative requirements create complications.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Naturalization Planning</h3>
                <p className="text-xs text-[#44474d]">We help clients understand the requirements for potential future Brazilian citizenship applications.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#child-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Schedule Your Legal Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. RESIDENCY VALIDITY & DAILY LIFE (WITH STOCK IMAGES)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Validity Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"
                  alt="CRNM physical residence card and legal validity in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[440px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Prazo Indeterminado</span>
                  <p className="text-[11px] text-[#edeef0]">
                    Residence authorization based on a Brazilian child is granted for an indefinite term.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — PERMANENT STATUS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Is Residency Through a Brazilian Child Permanent?
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed mb-6">
                <p>
                  Residence authorization based on a Brazilian child may be granted for an indefinite term, subject to the applicable immigration regulations and the applicant's circumstances.
                </p>
                <p>
                  However, residence authorization and the physical residence card (CRNM) are separate matters. A resident may still be required to maintain valid registration documentation and comply with applicable immigration obligations.
                </p>
                <p>
                  The specific validity and conditions should be confirmed from the authorization granted by the competent authority.
                </p>
              </div>
              <a
                href="#child-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Your Long-Term Residency Options</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Work & Daily Life Section */}
          <div className="border-t border-[#e2e2e4] pt-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — INTEGRATION IN BRAZIL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
                What Can You Do After Obtaining Residency?
              </h2>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
                A foreign national who receives qualifying residence authorization may establish legal residence in Brazil and exercise rights under the applicable legislation.
              </p>
            </div>

            {/* Daily Life Image Banner */}
            <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg border border-[#e2e2e4] h-60 sm:h-72">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1600&q=85"
                alt="Parents working and living happily in Brazil"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/90 via-[#0f1e36]/40 to-transparent flex flex-col justify-center p-6 sm:p-10 text-white max-w-xl">
                <span className="text-[10px] font-mono uppercase text-[#e9c176] tracking-wider mb-1.5">
                  Full Civic &amp; Economic Rights
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                  Employment, Business &amp; Family Welfare
                </h3>
                <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                  Foreign parents receive lawful employment permissions, business formation rights, public healthcare access (SUS), and schooling privileges across Brazil.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              <div className="p-5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">Employment</h3>
                <p className="text-xs text-[#44474d] leading-relaxed">Engaging in lawful employment or professional activities in accordance with Brazilian law.</p>
              </div>

              <div className="p-5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">Business Activities</h3>
                <p className="text-xs text-[#44474d] leading-relaxed">Establishing or participating in a Brazilian business, subject to applicable corporate and regulatory requirements.</p>
              </div>

              <div className="p-5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">Banking &amp; Financial Services</h3>
                <p className="text-xs text-[#44474d] leading-relaxed">Applying for financial services, subject to the relevant institution's identification and compliance requirements.</p>
              </div>

              <div className="p-5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">Healthcare</h3>
                <p className="text-xs text-[#44474d] leading-relaxed">Accessing public (SUS) or private healthcare services under the applicable rules.</p>
              </div>

              <div className="p-5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">Education</h3>
                <p className="text-xs text-[#44474d] leading-relaxed">Accessing educational opportunities in accordance with Brazilian legislation.</p>
              </div>

              <div className="p-5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">Residence Documentation</h3>
                <p className="text-xs text-[#44474d] leading-relaxed">Obtaining the relevant migration registration documents and complying with applicable administrative requirements.</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#child-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Plan Your Move to Brazil With Legal Guidance</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. SPECIAL FAMILY CIRCUMSTANCES (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — COMPLEX CASES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              What If Your Family Situation Is Complicated?
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Not every immigration case involving a Brazilian child is straightforward. Some situations require additional legal assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Parents Who Are Not Married</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Marriage between the child's parents is not a general prerequisite for a foreign parent to qualify for family-based residence. The legally recognized parent-child relationship is the relevant consideration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Separated or Divorced Parents</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Separation or divorce does not automatically eliminate the legal parent-child relationship. However, custody, parental rights, or related legal issues may require individual assessment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Children Living Abroad</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                When the Brazilian child resides outside Brazil, the family's circumstances and intended relocation plans may require additional documentation or legal analysis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Incomplete Birth Registration</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Missing or inconsistent civil records may need to be corrected through Cartório retificação before an immigration application can proceed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Parentage Recognition</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                If the applicant is not legally recognized as the child's parent on the civil registry, a separate voluntary or judicial acknowledgment procedure may be necessary.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Immigration Irregularities</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Applicants with previous immigration violations, overstays, or other legal complications should obtain individualized legal guidance before submitting an application.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#child-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Discuss Your Individual Situation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          12. BRAZILIAN NATURALIZATION (FAST-TRACK 1 YEAR + STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image: Brazilian Passport */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=85"
                  alt="Brazilian passport and citizenship naturalization certificate"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Fast-Track 1-Year Naturalization</span>
                  <p className="text-[11px] text-[#edeef0]">
                    Foreign parents of Brazilian citizens qualify for ordinary naturalization after just 1 year of continuous residence.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — BRAZILIAN NATURALIZATION
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
                Can Having a Brazilian Child Help You Obtain Citizenship?
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed mb-6">
                <p>
                  Having a Brazilian child may be relevant to a foreign parent's future eligibility for Brazilian naturalization.
                </p>
                <p>
                  Brazilian law generally establishes a four-year qualifying residence period for ordinary naturalization. However, this period may be reduced to <strong>one year</strong> for applicants who have a Brazilian child, provided they meet the applicable legal requirements.
                </p>
                <p>
                  The reduced residence period is not an automatic grant of citizenship. Applicants must also satisfy other relevant naturalization conditions, including Portuguese-language proficiency (CELPE-Bras or recognized certificates), civil capacity, and clean criminal-record requirements.
                </p>
                <p>
                  The residence period and eligibility criteria must be evaluated under the legislation in force at the time of the naturalization application.
                </p>
              </div>

              <a
                href="#child-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Explore Brazilian Naturalization Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          13. WHY CHOOSE CASPANI LAWYERS? (WITH 7 PILLARS & STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — WHY CHOOSE OUR FIRM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Personalized Immigration Support for International Parents
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d]">
              Direct representation by an experienced Brazilian immigration lawyer registered with the OAB.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <Scale className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Licensed Brazilian Attorney</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Receive legal assistance from a Brazilian lawyer registered with the Brazilian Bar Association (OAB/PR 58.420).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <Baby className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Family-Based Immigration Focus</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We assist foreign nationals with understanding residency options arising from qualifying family relationships.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <UserCheck className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Individual Legal Strategy</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We evaluate each case according to its civil documentation, immigration history, and family circumstances.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <Sparkles className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Direct Attorney Communication</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Communicate directly with your lawyer and receive clear explanations throughout the legal process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <Globe2 className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Assistance From Brazil or Abroad</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Our services are available to foreign nationals living outside Brazil and those already present in the country.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <Award className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Multilingual Communication</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We provide multilingual assistance (English, Portuguese, French, Spanish) to international clients.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] max-w-2xl mx-auto text-center mb-8 shadow-xs">
            <h4 className="font-serif text-base font-bold text-[#0f1e36] mb-1">Transparent Professional Services</h4>
            <p className="text-xs text-[#44474d]">
              The scope of representation and professional fees are discussed transparently before beginning the agreed legal services.
            </p>
          </div>

          <div className="text-center">
            <a
              href="#child-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Book Your Legal Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          14. FREQUENTLY ASKED QUESTIONS (20 FAQS WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — COMMON INQUIRIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Brazil Residency Through a Brazilian Child – FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d]">
              Key questions on jus soli citizenship, parental rights, custody, timelines, and 1-year naturalization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
            {/* Left Column: FAQ Side Stock Image */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-md border border-[#e2e2e4] sticky top-28">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=85"
                alt="Direct consultation with licensed Brazilian family immigration counsel"
                className="w-full h-72 sm:h-80 object-cover"
              />
              <div className="bg-[#0f1e36] text-white p-5">
                <span className="text-[10px] font-mono uppercase text-[#e9c176] block mb-1">
                  Have Specific Inquiries?
                </span>
                <p className="text-xs text-[#edeef0] mb-3 leading-relaxed">
                  Every family situation is unique. Our immigration attorney analyzes your specific child records during your paid consultation.
                </p>
                <a
                  href="#child-hero-form"
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
                  <div key={idx} className="bg-[#f9f9fb] rounded-xl border border-[#e8e8ea] overflow-hidden shadow-2xs">
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
          15. FINAL SECTION: IMAGE ON LEFT, RESERVATION FORM ON RIGHT
          ======================================================== */}
      <section className="w-full bg-[#edeef0] py-16 lg:py-24 border-t border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — READY TO ESTABLISH YOUR LIFE IN BRAZIL?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Your Child Is Brazilian. Let's Explore Your Residency Options.
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Having a Brazilian child may provide an important legal pathway for foreign parents seeking to establish residence in Brazil. At Caspani Lawyers, we help international families understand the immigration requirements, prepare supporting documentation, and navigate the applicable legal procedures. Whether you are planning to relocate, already living in Brazil, or considering future Brazilian naturalization, we provide personalized legal assistance tailored to your circumstances.
            </p>
          </div>

          {/* TWO-COLUMN LAYOUT: IMAGE ON THE LEFT, FORM ON THE RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto mb-10">
            {/* Left Column: Curated Parent & Child Stock Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=85"
                  alt="Foreign parent and Brazilian child bonding together"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/95 via-[#0f1e36]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    FAMILY LEGAL CONCIERGE
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    Securing Your Family's Brazilian Future
                  </h3>
                  <p className="text-xs text-[#edeef0] leading-relaxed">
                    Direct case review by licensed Brazilian immigration counsel within 24 business hours.
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
                id="child-bottom-reservation-form"
                title="Schedule Child Residency Consultation"
                subtitle="Confidential review by licensed Brazilian immigration counsel within 24 hours"
                presetService="Residency Through a Brazilian Child"
              />
            </div>
          </div>

          {/* Legal Practice Footer & Disclaimer */}
          <div className="max-w-3xl mx-auto text-center border-t border-[#c5c6ce] pt-6 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0f1e36]">
              CASPANI LAWYERS • ADVOCACIA INTERNACIONAL
            </p>
            <p className="text-[11px] text-[#775a19] font-medium">
              Brazil Immigration | Residency Through a Brazilian Child | Family Reunion Visa | Brazilian Citizenship
            </p>
            <p className="text-[11px] text-[#75777e] leading-relaxed">
              <strong>Legal Disclaimer:</strong> This page provides general legal information and does not constitute individualized legal advice. Having a Brazilian child does not automatically grant residence or citizenship to foreign parents. Eligibility, required documents, residence conditions, and administrative procedures depend on the qualifying family relationship and applicable legislation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
