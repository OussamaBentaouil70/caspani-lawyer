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
  Laptop,
  DollarSign,
  Calendar,
  AlertTriangle,
  Receipt,
  Globe2,
  Building,
  ShieldCheck,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface DigitalNomadVisaPageProps {
  onNavigate: (route: string) => void;
}

export const DigitalNomadVisaPage: React.FC<DigitalNomadVisaPageProps> = ({ onNavigate }) => {
  // Sync SEO metadata
  useEffect(() => {
    document.title = 'Brazil Digital Nomad Visa (VITEM XIV) | Caspani Lawyers';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Live and work remotely in Brazil with the Digital Nomad Visa (VITEM XIV). Legal assistance with requirements, consular filings, Federal Police registration, and tax compliance.'
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
      `Hello Caspani Lawyers, my name is ${heroForm.fullName || 'Client'}. I am inquiring about the Brazil Digital Nomad Visa (VITEM XIV).\nPhone: ${heroForm.countryCode} ${heroForm.phone}\nEmail: ${heroForm.email}\nDetails: ${heroForm.message}`
    );
    window.open(`https://wa.me/5541998247700?text=${text}`, '_blank');
  };

  const faqs = [
    {
      question: '1. Can I apply for a Digital Nomad Visa while already in Brazil?',
      answer:
        'Yes. Eligible foreign nationals who are legally present in Brazil (e.g., on a tourist stay) may apply for residence authorization under the Digital Nomad framework without necessarily leaving the country. The appropriate procedure is submitted through the Ministry of Justice MigranteWeb system.'
    },
    {
      question: '2. How much income do I need to qualify?',
      answer:
        'The financial requirement generally allows applicants to demonstrate either a minimum monthly income of USD 1,500 from foreign sources OR available bank funds of at least USD 18,000 at the time of application.'
    },
    {
      question: '3. Can freelancers apply for the Brazil Digital Nomad Visa?',
      answer:
        'Yes. Freelancers, independent contractors, and remote business owners qualify if they can demonstrate continuous eligible remote professional activities for foreign clients and the required foreign-sourced financial resources.'
    },
    {
      question: '4. Can I work for a Brazilian company?',
      answer:
        'No. The Digital Nomad framework is strictly intended for remote work connected to foreign employers or international clients, without an employment relationship in Brazil. If you intend to work for a Brazilian employer, a Brazilian Work Visa (VITEM V) is required.'
    },
    {
      question: '5. How long is the Digital Nomad Visa valid?',
      answer:
        'The initial temporary residence authorization is generally granted for up to one year, with renewal possibilities for another 12-month period subject to continued satisfaction of legal requirements.'
    },
    {
      question: '6. Can I bring my spouse or children?',
      answer:
        'Yes. Eligible family members (spouse, partner in a stable union, and dependent children) may apply for temporary residence based on family reunification (Reunião Familiar).'
    },
    {
      question: '7. Do I need to speak Portuguese?',
      answer:
        'Portuguese-language proficiency is not a legal requirement for obtaining the Digital Nomad Visa. However, knowledge of Portuguese is helpful for day-to-day administrative matters and interacting with local services.'
    },
    {
      question: '8. Will I receive a Brazilian residence card?',
      answer:
        'Yes. Eligible foreign nationals who complete the required registration procedures with the Federal Police in Brazil obtain the official physical migration ID: Carteira de Registro Nacional Migratório (CRNM).'
    },
    {
      question: '9. Can I open a bank account in Brazil?',
      answer:
        'Yes. Once you have a Brazilian Tax ID (CPF) and your CRNM residence card or Federal Police registration protocol, you can open domestic resident bank accounts or specialized non-resident (CDE) accounts.'
    },
    {
      question: '10. Do I have to pay taxes in Brazil?',
      answer:
        'Potential Brazilian tax obligations depend on your tax residency status and physical stay in the country. If you stay in Brazil for more than 183 days within any 12-month period, you generally become a Brazilian tax resident. Immigration residence and tax residence must be assessed separately.'
    },
    {
      question: '11. Can the Digital Nomad Visa lead to permanent residency or citizenship?',
      answer:
        'The Digital Nomad Visa is a temporary immigration category and does not automatically convert into permanent residence. However, other pathways (e.g. real estate investment, marriage to a Brazilian citizen, or company formation) may become available depending on your evolving goals.'
    },
    {
      question: '12. Do I need an immigration lawyer?',
      answer:
        'While legal representation is not mandatory by law for initial visa filings, professional legal assistance ensures your foreign contracts, sworn translations, apostilles, and Federal Police submissions comply strictly with Brazilian normative resolutions, preventing rejections and processing delays.'
    },
    {
      question: '13. How much does a Digital Nomad Visa application cost?',
      answer:
        'Costs depend on whether you apply through a consulate abroad or inside Brazil, consular fees, Federal Police issuance fees (taxa de emissão de CRNM), apostilles, certified translations, and professional legal services. We outline all transparent costs during your initial consultation.'
    }
  ];

  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* ========================================================
          1. HERO SECTION: CINEMATIC DIGITAL NOMAD RIO BACKDROP
          ======================================================== */}
      <section className="relative w-full text-white min-h-[640px] flex items-center py-12 lg:py-20 overflow-hidden">
        {/* Background Image: Rio coast & laptop nomad aesthetic */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85')`
          }}
        ></div>

        {/* Multi-Stop Dark Gradient Overlay for Maximum Readability */}
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
            <span className="text-white">DIGITAL NOMAD VISA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#e9c176] mb-2 block">
                VITEM XIV • RESOLUÇÃO NORMATIVA 45
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] lg:leading-[54px] font-bold text-white mb-3">
                Brazil Digital Nomad Visa – Live and Work Remotely in Brazil
              </h1>

              <p className="text-lg text-[#fed488] font-serif italic mb-4">
                Your remote work. Your lifestyle. Your new home in Brazil.
              </p>

              <div className="text-sm sm:text-base text-[#edeef0] leading-relaxed max-w-2xl space-y-3 mb-6">
                <p>
                  Planning to live in Brazil while working remotely for an international company or foreign clients? Brazil's Digital Nomad Visa (VITEM XIV) offers eligible remote professionals a legal pathway to temporary residency.
                </p>
                <p>
                  At <strong className="text-white">Caspani Lawyers</strong>, we assist international professionals, freelancers, and entrepreneurs with visa applications, residency permits, renewals, and immigration compliance. From eligibility assessment to Federal Police registration, we provide personalized legal guidance throughout your immigration journey.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
                <a
                  href="#nomad-hero-form"
                  className="inline-flex items-center justify-center gap-2 bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg"
                >
                  <span>Book Your Legal Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/5541998247700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/30 transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#e9c176]">chat</span>
                  <span>Speak With an Immigration Lawyer</span>
                </a>
              </div>

              {/* 4 Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-white/20">
                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Scale className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Brazilian Licensed Attorney – OAB/PR 58.420
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Legal Assistance From Brazil or Abroad
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Multilingual Immigration Support
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Personalized and Confidential Legal Services
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Intake Form (Lformulaire 3la liman f7al dima) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="nomad-hero-form">
              <div className="bg-white text-[#1a1c1d] rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/20">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0f1e36] mb-1">
                  Request Your Consultation
                </h3>
                <p className="text-xs text-[#44474d] mb-4 pb-2 border-b border-[#e8e8ea]">
                  Tell us about your remote work and our immigration team will get back to you shortly.
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
                      Thank you, <strong className="text-[#0f1e36]">{heroForm.fullName}</strong>. A licensed Brazilian immigration attorney will review your eligibility within 24 business hours.
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
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="nomad-name">
                        Full name
                      </label>
                      <input
                        id="nomad-name"
                        required
                        type="text"
                        value={heroForm.fullName}
                        onChange={(e) => setHeroForm({ ...heroForm, fullName: e.target.value })}
                        placeholder="Your full legal name"
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="nomad-email">
                        Email
                      </label>
                      <input
                        id="nomad-email"
                        required
                        type="email"
                        value={heroForm.email}
                        onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="nomad-phone">
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
                          id="nomad-phone"
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
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="nomad-message">
                        Message
                      </label>
                      <textarea
                        id="nomad-message"
                        rows={3}
                        value={heroForm.message}
                        onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                        placeholder="Tell us about your remote job, income, and timeline for Brazil..."
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
          2. WORK REMOTELY. EXPERIENCE BRAZIL LEGALLY (WITH IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image: Remote worker on laptop in scenic Brazil */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85"
                  alt="Remote professional working in Brazil with laptop"
                  className="w-full h-80 sm:h-96 lg:h-[440px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-3.5 rounded-xl border border-[#c5a059]/30 flex items-center justify-between text-xs">
                  <span className="font-medium">Florianópolis • Rio de Janeiro • São Paulo</span>
                  <span className="font-mono text-[#e9c176]">RN 45 Framework</span>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — BRAZIL DIGITAL NOMAD VISA
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Work Remotely. Experience Brazil Legally.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed mb-6">
                <p>
                  Brazil has become an attractive destination for international remote workers seeking a balance between professional flexibility, cultural experiences, and quality of life.
                </p>
                <p>
                  Introduced in 2022, Brazil's Digital Nomad immigration framework allows eligible foreign nationals to live in the country while continuing to work remotely for employers or clients located outside Brazil.
                </p>
                <p>
                  Whether you are employed by an international company, operate your own remote business, or work independently as a freelancer, our immigration team can help you understand your eligibility and prepare your application.
                </p>
              </div>

              <a
                href="#nomad-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Your Immigration Options</span>
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
                Who Qualifies for Brazil's Digital Nomad Visa?
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                The Brazilian Digital Nomad Visa is intended for foreign nationals who perform professional activities remotely using information and communication technologies, without establishing an employment relationship in Brazil.
              </p>

              {/* 5 Criteria */}
              <div className="space-y-3.5 mb-6">
                <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] shadow-2xs">
                  <h3 className="text-sm font-bold text-[#0f1e36] mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs flex items-center justify-center">1</span>
                    Remote Employment or Professional Activity
                  </h3>
                  <p className="text-xs text-[#44474d] pl-8 leading-relaxed">
                    You must work remotely for a foreign employer, international clients, or a business operating outside Brazil. Freelancers and independent contractors may also qualify when their professional activities are properly documented.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] shadow-2xs">
                  <h3 className="text-sm font-bold text-[#0f1e36] mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs flex items-center justify-center">2</span>
                    Minimum Income or Financial Resources
                  </h3>
                  <div className="text-xs text-[#44474d] pl-8 leading-relaxed">
                    Applicants must demonstrate at least one of the following:
                    <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[#0f1e36] font-medium">
                      <li>Monthly income of at least <strong>USD 1,500</strong> from foreign sources; or</li>
                      <li>Available bank funds of at least <strong>USD 18,000</strong>.</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] shadow-2xs">
                  <h3 className="text-sm font-bold text-[#0f1e36] mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs flex items-center justify-center">3</span>
                    Valid Identification and Supporting Documents
                  </h3>
                  <p className="text-xs text-[#44474d] pl-8 leading-relaxed">
                    You must hold a valid passport and provide the documentation required by the applicable immigration authority.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] shadow-2xs">
                  <h3 className="text-sm font-bold text-[#0f1e36] mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs flex items-center justify-center">4</span>
                    Criminal Background Documentation
                  </h3>
                  <p className="text-xs text-[#44474d] pl-8 leading-relaxed">
                    Criminal record certificates or equivalent documents may be required, depending on the application route.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] shadow-2xs">
                  <h3 className="text-sm font-bold text-[#0f1e36] mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs flex items-center justify-center">5</span>
                    Compliance With Immigration Regulations
                  </h3>
                  <p className="text-xs text-[#44474d] pl-8 leading-relaxed">
                    Your professional activities and immigration status must comply with Brazilian law.
                  </p>
                </div>
              </div>

              {/* Warning Callout */}
              <div className="p-4 bg-[#fff8eb] rounded-xl border border-[#fed488] flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                <p className="text-xs text-[#785a1a] leading-relaxed">
                  <strong>Important:</strong> The Digital Nomad Visa is not intended for individuals employed locally by Brazilian companies. A different immigration authorization may be required.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85"
                  alt="Remote tech workspace with passport and documents"
                  className="w-full h-80 sm:h-96 lg:h-[520px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md text-white p-4 rounded-xl border border-white/20">
                  <span className="text-[11px] font-mono text-[#e9c176] block mb-1">
                    Financial Benchmark:
                  </span>
                  <p className="text-xs font-semibold">
                    USD $1,500/Month Income OR USD $18,000 Liquid Bank Balance
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
                  alt="Legal documentation, passport and apostille certificates"
                  className="w-full h-80 sm:h-96 lg:h-[540px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Apostille &amp; Sworn Translations</span>
                  <p className="text-[11px] text-[#edeef0]">
                    All foreign contracts and statements are verified and translated by licensed Brazilian sworn translators.
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
                Documents for a Brazil Digital Nomad Visa Application
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                Preparing accurate and consistent documentation is an essential part of the immigration process. Depending on your nationality and whether you apply from Brazil or abroad, documents may include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6">
                {[
                  'Valid passport',
                  'Completed visa or residence application',
                  'Proof of remote employment or professional activity',
                  'Employment contracts or service agreements',
                  'Proof of foreign-sourced income',
                  'Recent bank statements',
                  'Criminal background certificates',
                  'Birth certificate or civil identification',
                  'Health insurance, where applicable',
                  'Apostilles, legalizations, and certified translations',
                  'Proof of payment of government fees'
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f9f9fb] border border-[#e8e8ea]">
                    <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#1a1c1d]">{doc}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                Our team reviews the relevant documentation requirements and helps clients prepare their applications in accordance with the applicable procedures.
              </p>

              <a
                href="#nomad-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm mb-2"
              >
                <span>Get Your Personalized Document Checklist</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-[#75777e] italic">
                The personalized checklist is provided as part of our legal consultation and case assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. HOW TO APPLY: TWO PROCEDURAL ROUTES (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — APPLICATION PATHWAYS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              How to Apply for a Digital Nomad Visa in Brazil
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Brazil offers different application routes depending on whether you are already in the country or applying from abroad.
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
                  Apply From Outside Brazil
                </h3>
                <p className="text-sm text-[#44474d] leading-relaxed mb-4">
                  Eligible applicants may request a Digital Nomad Visa (VITEM XIV) through a Brazilian embassy or consulate with jurisdiction over their place of residence.
                </p>
                <p className="text-sm text-[#44474d] leading-relaxed">
                  The process generally involves document preparation, submission of the consular application, payment of applicable fees, and compliance with any additional consular requirements.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e8e8ea] flex items-center justify-between text-xs text-[#75777e]">
                <span>Processing Location: Brazilian Consulate abroad</span>
                <span className="font-semibold text-[#0f1e36]">Consular Queue</span>
              </div>
            </div>

            {/* Option 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[#e2e2e4] shadow-xs flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-[#f3ede0] text-[#775a19] text-xs font-bold uppercase tracking-wider mb-4">
                  Option 2
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-4">
                  Apply While in Brazil
                </h3>
                <p className="text-sm text-[#44474d] leading-relaxed mb-4">
                  Foreign nationals legally present in Brazil may be eligible to request residence authorization based on remote work through the appropriate Brazilian immigration procedures.
                </p>
                <p className="text-sm text-[#44474d] leading-relaxed mb-4">
                  Applications under this route are generally submitted through the competent Ministry of Justice immigration system (MigranteWeb).
                </p>
                <p className="text-sm text-[#44474d] leading-relaxed">
                  Following approval, applicants must complete the applicable registration procedures with the Federal Police.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e8e8ea] flex items-center justify-between text-xs text-[#75777e]">
                <span>Processing Location: MigranteWeb + Federal Police</span>
                <span className="font-semibold text-[#0f1e36]">In-Country Status</span>
              </div>
            </div>
          </div>

          {/* Which Route Callout */}
          <div className="bg-[#0f1e36] text-white rounded-2xl p-8 lg:p-10 border border-[#c5a059]/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Which Application Route Is Right for You?
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                The appropriate strategy depends on your nationality, current immigration status, location, supporting documents, and intended travel dates. At Caspani Lawyers, we assess these factors during your legal consultation and recommend the appropriate application pathway.
              </p>
            </div>
            <a
              href="#nomad-hero-form"
              className="bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-md"
            >
              Book an Immigration Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. OUR LEGAL SERVICES: HOW CASPANI LAWYERS CAN HELP
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — OUR LEGAL SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              How Caspani Lawyers Can Help
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              We provide personalized immigration assistance to foreign professionals planning to establish temporary residence in Brazil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Service 1 */}
            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Immigration Eligibility Assessment
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed">
                  We evaluate your professional activities, income documentation, and immigration history to determine whether the Digital Nomad pathway is suitable for your circumstances.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-4">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Document Preparation and Review
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed">
                  We assist with organizing employment records, financial evidence, identification documents, and other supporting materials.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Visa and Residency Applications
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed">
                  We prepare and assist with the applicable immigration procedures, including consular applications and residence authorization requests in Brazil, according to the agreed scope of representation.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Federal Police Registration
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed">
                  We guide clients through the registration procedures required to obtain their Brazilian migration registration documentation (CRNM).
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Residency Renewals
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed">
                  We assist eligible residents with renewal applications and compliance with the applicable immigration requirements.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-[#f9f9fb] rounded-xl p-6 border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Additional Immigration Assistance
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed">
                  We provide legal guidance regarding changes in immigration circumstances, alternative residency pathways, and related documentation requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#nomad-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Start Your Application With Caspani Lawyers</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. VISA VALIDITY AND RENEWAL & TAX CONSIDERATIONS (SIDE-BY-SIDE WITH IMAGES)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Card: Validity & Renewal */}
            <div className="bg-white rounded-2xl p-8 border border-[#e2e2e4] shadow-xs flex flex-col justify-between">
              <div>
                <div className="relative rounded-xl overflow-hidden mb-6 h-48">
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                    alt="Brazil scenery and legal stay period"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold">Initial 1-Year Stay + 12-Month Extension</span>
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                  — VISA VALIDITY AND RENEWAL
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-4">
                  How Long Can You Stay in Brazil?
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                  <p>
                    Brazil's Digital Nomad framework generally provides temporary residence for an initial period of up to one year.
                  </p>
                  <p>
                    Renewal may be available, subject to the applicable rules and continued satisfaction of the legal requirements. Renewal procedures may require updated proof of remote professional activity, financial resources, and other supporting documents.
                  </p>
                  <p>
                    If your circumstances change, another residence authorization category may be more appropriate. Our legal team can assess your situation and explain the available options.
                  </p>
                </div>
              </div>

              <a
                href="#nomad-hero-form"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#775a19] hover:underline cursor-pointer"
              >
                <span>Get Legal Advice About Your Residency</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right Card: Tax Considerations */}
            <div className="bg-white rounded-2xl p-8 border border-[#e2e2e4] shadow-xs flex flex-col justify-between">
              <div>
                <div className="relative rounded-xl overflow-hidden mb-6 h-48">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                    alt="Tax calculation and fiscal considerations in Brazil"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold">183-Day Physical Presence Benchmark</span>
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                  — TAX CONSIDERATIONS
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-4">
                  Digital Nomad Visa and Tax Residency in Brazil
                </h3>
                <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-3">
                  Obtaining immigration authorization and becoming a Brazilian tax resident are separate legal matters. Foreign nationals living in Brazil may become subject to Brazilian tax obligations depending on their immigration status, length of stay, and other relevant circumstances.
                </p>
                <div className="bg-[#f9f9fb] p-3 rounded-lg border border-[#e8e8ea] text-xs text-[#0f1e36] space-y-1 mb-4">
                  <p>• Tax residency classification &amp; physical presence (183 days rule)</p>
                  <p>• Foreign employment and freelance income treatment</p>
                  <p>• International bank accounts and asset declarations</p>
                  <p>• Potential double taxation treaties &amp; exit certificates</p>
                </div>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  A Digital Nomad Visa does not automatically exempt foreign income from Brazilian taxation. At Caspani Lawyers, we help clients identify legal and tax-related considerations and coordinate specialized tax assistance when necessary.
                </p>
              </div>

              <a
                href="#nomad-hero-form"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#775a19] hover:underline cursor-pointer"
              >
                <span>Discuss Your Immigration and Tax Situation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. WHY CHOOSE CASPANI LAWYERS? (6 PILLARS WITH IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — WHY CHOOSE CASPANI LAWYERS?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              International Immigration Support With a Personal Approach
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Moving abroad requires more than completing immigration forms. It requires understanding the legal framework, preparing reliable documentation, and planning each stage carefully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
              <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                Licensed Brazilian Legal Representation
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Your case is handled under the supervision of a Brazilian attorney registered with the Brazilian Bar Association (OAB/PR 58.420).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
              <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                Personalized Immigration Strategy
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We assess each client's circumstances individually rather than offering a one-size-fits-all solution.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
              <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                International Client Support
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We assist clients living abroad and foreign nationals already residing in Brazil with remote efficiency.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
              <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                Multilingual Communication
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Our office supports international clients in English, Portuguese, Spanish, and French, facilitating communication throughout the legal process.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
              <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                Transparent Professional Services
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We explain the scope of representation, applicable professional fees, and procedural requirements before beginning the agreed legal work.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
              <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                Online Consultations
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Our consultations are conducted remotely via secure video channels, allowing clients to obtain legal guidance without traveling to our office.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. FREQUENTLY ASKED QUESTIONS (13 COMPREHENSIVE FAQS)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Brazil Digital Nomad Visa – FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d]">
              Key questions about remote work eligibility, financial requirements, procedures, and taxes.
            </p>
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
          10. FINAL INTAKE & SECOND RESERVATION FORM (BEFORE FOOTER)
          ======================================================== */}
      <section className="w-full bg-[#edeef0] py-16 lg:py-24 border-t border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — READY TO MOVE TO BRAZIL?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Start Your Digital Nomad Journey With Confidence
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto mb-4">
              Whether you are planning your first move to Brazil, already working remotely in the country, or preparing to renew your residence authorization, Caspani Lawyers can assist you. Our immigration services are designed to help international professionals navigate Brazilian legal requirements with clarity and personalized attention.
            </p>
            <div className="inline-block py-1 px-3 bg-white/60 rounded text-[11px] font-mono text-[#0f1e36] mb-8 border border-[#c5a059]/30">
              CASPANI LAWYERS | ADVOCACIA INTERNACIONAL • International Legal Services | Brazil Immigration | Digital Nomad Visas
            </div>
          </div>

          {/* TWO-COLUMN LAYOUT: IMAGE ON THE LEFT, FORM ON THE RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto mb-12">
            {/* Left Column: Curated Stock Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=85"
                  alt="Remote work consultation in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/95 via-[#0f1e36]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CONFIDENTIAL LEGAL INTAKE
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    Digital Nomad Visa Concierge
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

            {/* Right Column: Reservation Form */}
            <div className="lg:col-span-7">
              <ConsultationForm
                id="nomad-bottom-reservation-form"
                title="Schedule Your Digital Nomad Consultation"
                subtitle="Confidential review by licensed Brazilian immigration counsel within 24 hours"
                presetService="Digital Nomad Visa (VITEM XIV)"
              />
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="max-w-3xl mx-auto text-center border-t border-[#c5c6ce] pt-6 text-[11px] text-[#75777e] leading-relaxed">
            <p>
              <strong>Legal Disclaimer:</strong> This page provides general information and does not constitute individualized legal advice. Immigration rules, documentation requirements, administrative procedures, and government fees may change. Eligibility and available options must be assessed under the legislation and administrative requirements applicable to each case. Visa or residence approval cannot be guaranteed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
