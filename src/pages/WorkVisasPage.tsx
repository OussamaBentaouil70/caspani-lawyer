import React, { useState, useEffect } from 'react';
import { ConsultationForm } from '../components/ConsultationForm';
import {
  CheckCircle2,
  Lock,
  ArrowRight,
  Scale,
  Briefcase,
  Building2,
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
  Cpu,
  Flame,
  UserPlus
} from 'lucide-react';

interface WorkVisasPageProps {
  onNavigate: (route: string) => void;
}

export const WorkVisasPage: React.FC<WorkVisasPageProps> = ({ onNavigate }) => {
  // Sync document title and meta description
  useEffect(() => {
    document.title = 'Brazil Work Visa & Employment Authorization | Caspani Lawyers';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Legal assistance for Brazil Work Visas (VITEM V), intra-company transfers, technical assistance, oil & gas immigration, and employer compliance by licensed Brazilian counsel.'
      );
    }
  }, []);

  // Hero form state (Lfom 3la liman)
  const [heroForm, setHeroForm] = useState({
    fullName: '',
    email: '',
    countryCode: '+55',
    phone: '',
    applicantType: 'Foreign Professional',
    visaCategory: 'VITEM V Work Visa',
    countryResidence: '',
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
      `Hello Caspani Lawyers, my name is ${heroForm.fullName || 'Client'}. I am inquiring about Brazil Work Visas & Employment Authorization.\nRole/Applicant Type: ${heroForm.applicantType}\nVisa Category: ${heroForm.visaCategory}\nCountry of Residence: ${heroForm.countryResidence}\nPhone: ${heroForm.countryCode} ${heroForm.phone}\nEmail: ${heroForm.email}\nDetails: ${heroForm.message}`
    );
    window.open(`https://wa.me/5541998247700?text=${text}`, '_blank');
  };

  const faqs = [
    {
      question: '1. What is a Brazil Work Visa?',
      answer:
        'A Brazil Work Visa generally refers to an immigration authorization allowing a foreign national to undertake qualifying professional activities in Brazil. The applicable visa and residence category depend on the nature of the work, employment arrangement, and other circumstances.'
    },
    {
      question: '2. What is VITEM V?',
      answer:
        'VITEM V is a Brazilian temporary visa category associated with labor-related activities, subject to the applicable legal requirements, prior authorization from the Ministry of Labor / MigranteWeb, and registration with the Federal Police.'
    },
    {
      question: '3. Do I need a job offer to obtain a work visa?',
      answer:
        'Employer-sponsored categories generally require a qualifying employment contract or sponsoring arrangement with a Brazilian entity. Other professional immigration categories (such as investors or researchers) may have different requirements.'
    },
    {
      question: '4. Can I apply for a work visa without a Brazilian employer?',
      answer:
        'Certain immigration pathways may permit professional activities without traditional Brazilian local employment sponsorship—such as technical assistance contracts, intra-company transfers under foreign payroll, or business investment residency. However, the correct category depends on the proposed work and individual circumstances.'
    },
    {
      question: '5. Can I work in Brazil with a tourist visa?',
      answer:
        'No. Tourist status does not authorize local employment, receiving remuneration from a Brazilian source, or performing productive professional activities requiring specific immigration authorization.'
    },
    {
      question: '6. Can I work in Brazil with a business visa?',
      answer:
        'Certain business visitor activities (such as attending corporate meetings, signing contracts, or evaluating commercial partners) are permitted. However, actual service delivery, technical labor, or local employment require a work-related immigration authorization.'
    },
    {
      question: '7. Can I transfer from an international company to its Brazilian subsidiary?',
      answer:
        'Potentially, yes. Brazil provides intra-company transfer immigration pathways for executives, managers, and specialized technical employees transferred within the same corporate group.'
    },
    {
      question: '8. Do technical assistance assignments require a work visa?',
      answer:
        'Yes. Technical assistance and technology transfer assignments require specific immigration authorization (such as RN 3 or RN 4), supported by a valid commercial agreement between the foreign supplier and the Brazilian receiving entity.'
    },
    {
      question: '9. Do foreign professionals need a university degree?',
      answer:
        'Not every work-related category imposes the same academic degree requirement. Depending on the applicable normative resolution, a combination of certified technical experience and professional background may satisfy the statutory criteria.'
    },
    {
      question: '10. Can a Brazilian company sponsor a foreign worker?',
      answer:
        'Yes. Brazilian corporate entities in good standing with the Receita Federal (CNPJ) and labor authorities may petition for foreign workers under the appropriate Ministry of Justice / Ministry of Labor regulations.'
    },
    {
      question: '11. How long does a Brazil Work Visa last?',
      answer:
        'Validity depends on the specific immigration category. Temporary work authorizations are typically granted for up to 2 years, with options for renewal or transition to indefinite residence when conditions are satisfied.'
    },
    {
      question: '12. Can I extend my work visa?',
      answer:
        'Extensions or changes in residence authorization may be available through MigranteWeb and the Federal Police when the underlying employment contract or technical project continues and compliance is maintained.'
    },
    {
      question: '13. Can I change employers?',
      answer:
        'Employer changes generally require additional immigration steps, as the initial authorization is tied to the petitioning sponsoring entity. Foreign workers should consult immigration counsel before terminating their existing contract.'
    },
    {
      question: '14. Can my spouse and children move to Brazil with me?',
      answer:
        'Yes. Eligible family members (spouse, stable union partner, minor and dependent children) may qualify for residence through family reunification (VITEM XI) linked to the primary work visa holder.'
    },
    {
      question: '15. Can a work visa lead to permanent residency?',
      answer:
        'Certain work-related immigration pathways allow eligible foreign nationals to transition from temporary residence to residence of indefinite duration (prazo indeterminado), subject to continuous employment and compliance.'
    },
    {
      question: '16. Can I apply for Brazilian citizenship after working in Brazil?',
      answer:
        'Qualifying lawful residence may contribute toward ordinary naturalization eligibility (typically requiring 4 years of continuous residence, Portuguese proficiency, and clean criminal background), though citizenship requires a separate legal procedure.'
    },
    {
      question: '17. Can I apply while already in Brazil?',
      answer:
        'Certain foreign nationals legally present in Brazil (e.g. on visitor status) may be eligible to request residence authorization for labor purposes directly through the Federal Police and MigranteWeb without leaving the country.'
    },
    {
      question: '18. What happens if I work without the required authorization?',
      answer:
        'Unauthorized professional activities may create serious immigration penalties, including fines, cancellation of status, deportation, and administrative sanctions against the Brazilian employing company.'
    },
    {
      question: '19. How long does the application take?',
      answer:
        'Processing times typically range from 30 to 60 days for Ministry of Labor authorization and consular visa issuance, and 30 days for in-country Federal Police residence registration.'
    },
    {
      question: '20. How much does a Brazil Work Visa application cost?',
      answer:
        'Costs include federal immigration fees (taxas GRU), consular fees, certified sworn translations, Hague apostilles, and professional legal representation fees. At Caspani Lawyers, all fees are transparently outlined following an initial consultation.'
    }
  ];

  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* ========================================================
          1. HERO SECTION: WORK VISAS (IMAGE + FORM ON RIGHT: "Lfom 3la liman")
          ======================================================== */}
      <section className="relative w-full text-white min-h-[660px] flex items-center py-12 lg:py-20 overflow-hidden">
        {/* Background Image: Corporate Skyline / Business District in São Paulo */}
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
            <span className="text-white">WORK VISAS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline, Copy & Badges */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#e9c176] mb-2 block">
                VITEM V • EMPLOYMENT AUTHORIZATION • CORPORATE IMMIGRATION
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] lg:leading-[54px] font-bold text-white mb-3">
                Brazil Work Visa – Immigration &amp; Employment Authorization
              </h1>

              <p className="text-lg text-[#fed488] font-serif italic mb-4">
                Work in Brazil legally. Expand your career. Bring international talent to your business.
              </p>

              <div className="text-sm sm:text-base text-[#edeef0] leading-relaxed max-w-2xl space-y-3 mb-6">
                <p>
                  Are you a foreign professional planning to work in Brazil, or a company seeking to hire or transfer international employees?
                </p>
                <p>
                  Brazil offers several immigration pathways for foreign nationals undertaking professional activities in the country. The appropriate authorization depends on the nature of the work, employment relationship, sponsoring organization, and intended duration of stay.
                </p>
                <p>
                  At <strong className="text-white">Caspani Lawyers</strong>, we provide personalized legal assistance with Brazilian work visas, residence authorizations, corporate immigration, and employer compliance. From selecting the appropriate immigration category to preparing applications and completing Federal Police registration, we help individuals and businesses navigate Brazilian immigration requirements.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
                <a
                  href="#work-hero-form"
                  className="inline-flex items-center justify-center gap-2 bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg"
                >
                  <span>Book Your Legal Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#work-categories-overview"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/30 transition-all duration-200"
                >
                  Explore Work Visa Options
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
                    Work Visas &amp; Corporate Immigration
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Assistance for Employers &amp; Professionals
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Multilingual and Confidential Legal Services
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Intake Form ("Lfom 3la liman") */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="work-hero-form">
              <div className="bg-white text-[#1a1c1d] rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/20">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19] block mb-1">
                  REQUEST YOUR LEGAL CONSULTATION
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0f1e36] mb-1">
                  Corporate &amp; Work Visa Intake
                </h3>
                <p className="text-xs text-[#44474d] mb-4 pb-2 border-b border-[#e8e8ea]">
                  Tell us about your professional assignment or hiring project to schedule an attorney consultation.
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
                      Thank you, <strong className="text-[#0f1e36]">{heroForm.fullName}</strong>. A licensed Brazilian corporate immigration lawyer will review your case within 24 business hours.
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
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="work-name">
                        Full Name *
                      </label>
                      <input
                        id="work-name"
                        required
                        type="text"
                        value={heroForm.fullName}
                        onChange={(e) => setHeroForm({ ...heroForm, fullName: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="work-email">
                        Email Address *
                      </label>
                      <input
                        id="work-email"
                        required
                        type="email"
                        value={heroForm.email}
                        onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="work-phone">
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
                          id="work-phone"
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
                        <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="work-applicant">
                          I Am A... *
                        </label>
                        <select
                          id="work-applicant"
                          value={heroForm.applicantType}
                          onChange={(e) => setHeroForm({ ...heroForm, applicantType: e.target.value })}
                          className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19]"
                        >
                          <option value="Foreign Professional">Foreign Professional</option>
                          <option value="Brazilian Employer">Brazilian Employer</option>
                          <option value="Multinational Company">Multinational HR</option>
                          <option value="Corporate Executive">Executive / Director</option>
                          <option value="Technical Specialist">Technical Specialist</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="work-category">
                          Visa Category *
                        </label>
                        <select
                          id="work-category"
                          value={heroForm.visaCategory}
                          onChange={(e) => setHeroForm({ ...heroForm, visaCategory: e.target.value })}
                          className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19]"
                        >
                          <option value="VITEM V Work Visa">VITEM V Work Visa</option>
                          <option value="Intra-Company Transfer">Intra-Company Transfer</option>
                          <option value="Technical Assistance">Technical Assistance</option>
                          <option value="Oil & Gas Immigration">Oil &amp; Gas Industry</option>
                          <option value="Executive/Director">Executive / Director</option>
                          <option value="Not Sure / Need Advice">Not Sure / Need Advice</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="work-msg">
                        Assignment / Project Details
                      </label>
                      <textarea
                        id="work-msg"
                        rows={2}
                        value={heroForm.message}
                        onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                        placeholder="Describe the company, job title, proposed start date, and whether a Brazilian contract or foreign payroll applies..."
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] p-2.5 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Schedule Corporate Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[10px] text-center text-[#75777e] leading-tight">
                      Legal consultations are paid and conducted online by appointment. All client inquiries are protected under attorney-client privilege.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. WORKING LEGALLY IN BRAZIL (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image: Modern professional workplace in São Paulo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                  alt="International professionals working legally in modern Brazilian office"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-3.5 rounded-xl border border-[#c5a059]/30 flex items-center justify-between text-xs">
                  <span className="font-medium">São Paulo • Rio de Janeiro • Campinas • Curitiba</span>
                  <span className="font-mono text-[#e9c176]">Lei 13.445 / MigranteWeb</span>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — WORKING LEGALLY IN BRAZIL
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Understanding Brazilian Work Visas and Residence Authorization
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-4">
                Brazil has a structured immigration framework for foreign nationals who intend to undertake professional activities within its territory. Depending on the circumstances, foreign professionals may need a temporary work visa, prior residence authorization for labor purposes, or another specific immigration authorization.
              </p>

              <div className="space-y-2 mb-6 w-full">
                <span className="text-xs font-bold text-[#0f1e36] block">The correct category depends on several factors, including:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1a1c1d]">
                  <div className="flex items-start gap-2 bg-[#f9f9fb] p-2.5 rounded-lg border border-[#e8e8ea]">
                    <span className="text-[#775a19]">◆</span>
                    <span>Whether employed by a Brazilian company</span>
                  </div>
                  <div className="flex items-start gap-2 bg-[#f9f9fb] p-2.5 rounded-lg border border-[#e8e8ea]">
                    <span className="text-[#775a19]">◆</span>
                    <span>Whether worker remains on foreign payroll</span>
                  </div>
                  <div className="flex items-start gap-2 bg-[#f9f9fb] p-2.5 rounded-lg border border-[#e8e8ea]">
                    <span className="text-[#775a19]">◆</span>
                    <span>The exact type of professional activity</span>
                  </div>
                  <div className="flex items-start gap-2 bg-[#f9f9fb] p-2.5 rounded-lg border border-[#e8e8ea]">
                    <span className="text-[#775a19]">◆</span>
                    <span>Whether assignment is temporary or long-term</span>
                  </div>
                  <div className="flex items-start gap-2 bg-[#f9f9fb] p-2.5 rounded-lg border border-[#e8e8ea]">
                    <span className="text-[#775a19]">◆</span>
                    <span>Where the compensation is remitted</span>
                  </div>
                  <div className="flex items-start gap-2 bg-[#f9f9fb] p-2.5 rounded-lg border border-[#e8e8ea]">
                    <span className="text-[#775a19]">◆</span>
                    <span>Existence of Brazilian sponsor organization</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#fff8eb] rounded-xl p-4 border border-[#fed488] mb-6 text-xs text-[#785a1a] leading-relaxed">
                <strong>Crucial Warning:</strong> A business visitor visa, tourist status, or digital nomad authorization should not be assumed to permit every type of work performed in Brazil. Unauthorized employment creates severe penalties for both the worker and the Brazilian sponsor.
              </div>

              <a
                href="#work-hero-form"
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
          3. TYPES OF WORK VISAS (WITH STOCK IMAGE & 6 CARDS)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]" id="work-categories-overview">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — STATUTORY FRAMEWORK
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              Main Work Visa Categories in Brazil
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Brazil provides different immigration pathways tailored to labor contracts, corporate expansions, technical support agreements, and specialized industries.
            </p>
          </div>

          {/* Section 3 Stock Image Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg border border-[#e2e2e4] h-60 sm:h-72">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=85"
              alt="International corporate team meeting in Brazil"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/90 via-[#0f1e36]/40 to-transparent flex flex-col justify-center p-6 sm:p-10 text-white max-w-xl">
              <span className="text-[10px] font-mono uppercase text-[#e9c176] tracking-wider mb-1.5">
                Regulated Work Modalities
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                Tailored Legal Pathways for Global Talent
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                From VITEM V local employment to intra-group transfers, technical assistance, and executive appointments, we align your immigration status with Brazilian statutory norms.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#775a19] uppercase block mb-1">01 / Category</span>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  VITEM V – Temporary Work Visa
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  The VITEM V is a temporary visa category associated with labor-related activities in Brazil. It applies to foreign professionals with employment contracts with Brazilian entities or qualifying institutional arrangements.
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#775a19] font-medium pt-3 border-t border-[#f1f2f4]">
                Local CLT Contract or Service Agreement
              </span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#775a19] uppercase block mb-1">02 / Category</span>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Intra-Company Transfer Visa
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  International companies frequently transfer employees, managers, or specialists to a Brazilian subsidiary, branch, or affiliated entity. The legal basis depends on the corporate relationship and assignment nature.
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#775a19] font-medium pt-3 border-t border-[#f1f2f4]">
                Parent-Subsidiary Affiliation Required
              </span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#775a19] uppercase block mb-1">03 / Category</span>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Technical Assistance Work Visa
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Foreign technicians and specialists may require authorization to provide technical services, maintenance, installation, training, or specialized machinery assistance under commercial contracts.
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#775a19] font-medium pt-3 border-t border-[#f1f2f4]">
                Normative Resolutions RN 3 &amp; RN 4
              </span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#775a19] uppercase block mb-1">04 / Category</span>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Oil and Gas Industry Visas
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Brazil has specific immigration provisions for professionals working in offshore operations, maritime activities, platform maintenance, and oil &amp; gas infrastructure in the pre-salt basin.
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#775a19] font-medium pt-3 border-t border-[#f1f2f4]">
                Offshore Platforms &amp; Maritime Vessels
              </span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#775a19] uppercase block mb-1">05 / Category</span>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Executive and Director Visas
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Foreign executives, directors, administrators, and general managers appointed to positions in Brazilian entities may qualify under specific statutory categories tied to corporate capital investment (RN 11).
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#775a19] font-medium pt-3 border-t border-[#f1f2f4]">
                Articles of Incorporation &amp; BACEN Inflow
              </span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#775a19] uppercase block mb-1">06 / Category</span>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Specialized Professional Categories
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Brazil provides tailored immigration routes for scientific researchers, professors, athletes, artists, and medical specialists based on institutional cooperation agreements.
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#775a19] font-medium pt-3 border-t border-[#f1f2f4]">
                Scientific &amp; Cultural Conventions
              </span>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#work-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Determine the Right Work Visa Route</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. VITEM V WORK VISA (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=85"
                  alt="VITEM V consular visa stamp and employment agreement review"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">VITEM V Authorization Protocol</span>
                  <p className="text-[11px] text-[#edeef0]">
                    Prior residence authorization from the Ministry of Justice / Labor is coordinated before consular visa issuance abroad.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — VITEM V DEEP DIVE
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Brazil Temporary Work Visa for Foreign Professionals
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-4">
                The VITEM V is commonly associated with foreign nationals entering Brazil for qualifying labor-related activities. However, it is essential to distinguish between the visa issued by a Brazilian consulate abroad and the underlying residence authorization or legal basis permitting the professional activity.
              </p>

              <div className="space-y-3 w-full mb-6">
                <div className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-0.5">Who May Qualify?</strong>
                  <span className="text-xs text-[#44474d]">
                    Eligible applicants include foreign professionals with qualifying employment or labor-related arrangements with Brazilian organizations. The specific criteria depend on the applicable normative resolution.
                  </span>
                </div>

                <div className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-0.5">What Is Usually Required?</strong>
                  <span className="text-xs text-[#44474d]">
                    Applications involve a qualifying employment arrangement, corporate sponsorship documents, proof of professional qualifications (degrees or certified experience), and prior authorization through MigranteWeb.
                  </span>
                </div>

                <div className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-0.5">Can You Apply Without a Job Offer?</strong>
                  <span className="text-xs text-[#44474d]">
                    For employer-sponsored employment categories, a qualifying employment relationship or sponsoring arrangement is essential. Foreign professionals without a local employer must explore alternative routes, such as digital nomad visas or investor residency.
                  </span>
                </div>
              </div>

              <a
                href="#work-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Check Your VITEM V Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. INTRA-COMPANY TRANSFERS (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — MULTINATIONAL RELOCATION
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Transfer International Employees to Brazil
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-5">
                Multinational companies frequently need to relocate employees to Brazil for operational, technical, managerial, or strategic reasons. These transfers may involve personnel of a foreign parent company, subsidiary, affiliate, or related corporate entity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6">
                {[
                  'Transfer of international managers and directors',
                  'Assignment of specialized technical personnel',
                  'Corporate expansion and local entity establishment',
                  'Implementation of international contracts & projects',
                  'Temporary secondments to Brazilian affiliates',
                  'Strategic operational and compliance support'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-[#e8e8ea] text-xs text-[#1a1c1d]">
                    <span className="text-[#775a19]">✔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] mb-6 text-xs text-[#44474d] leading-relaxed">
                <strong className="text-[#0f1e36]">Important Legal Consideration:</strong> A transfer within the same corporate group does not automatically exempt the employee from Brazilian immigration requirements. The appropriate category depends on remuneration arrangements, corporate ties, and the actual activities in Brazil.
              </div>

              <a
                href="#work-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Schedule a Corporate Immigration Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=85"
                  alt="Multinational executive board discussing corporate transfer to Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Corporate Group Mobility</span>
                  <p className="text-[11px] text-[#edeef0]">
                    We structure inter-company agreements and secondment letters for seamless Ministry of Justice compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. TECHNICAL ASSISTANCE VISAS (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85"
                  alt="Specialized technical engineer commissioning machinery in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Industrial &amp; Technical Services</span>
                  <p className="text-[11px] text-[#edeef0]">
                    Normative Resolutions RN 3 &amp; RN 4 cover technical cooperation, technology transfer, and machinery maintenance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — SPECIALIZED ENGINEERING &amp; TECH
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
                Technical Assistance and Specialized Services in Brazil
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-4">
                Foreign professionals may be required to travel to Brazil to perform specialized technical activities for Brazilian enterprises. Common examples include:
              </p>

              <div className="grid grid-cols-2 gap-2 w-full mb-5">
                {[
                  'Equipment installation',
                  'Industrial maintenance & overhaul',
                  'Technical repairs & diagnostics',
                  'Machinery commissioning',
                  'Specialized workforce training',
                  'Technical consulting & audits',
                  'Technology implementation',
                  'Engineering-related assistance'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#1a1c1d] p-2 bg-[#f9f9fb] rounded-lg border border-[#e8e8ea]">
                    <span className="text-[#775a19]">⚙</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <div className="p-3 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <h4 className="font-serif text-xs font-bold text-[#0f1e36] mb-1">
                    Does Technical Assistance Require a Work Visa?
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    The answer depends on the actual services performed, the contractual relationship, the duration of the assignment, and the applicable immigration rules. Some narrowly defined technical activities may be subject to short-term arrangements (e.g., up to 180 days under RN 3), while others require prior authorization.
                  </p>
                </div>

                <div className="p-3 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <h4 className="font-serif text-xs font-bold text-[#0f1e36] mb-1">
                    Why the Contract Matters
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Technical assistance applications require documentation explaining the commercial relationship between the foreign service provider and the Brazilian receiving organization. The classification of the services must accurately reflect the work to be performed.
                  </p>
                </div>
              </div>

              <a
                href="#work-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Your Technical Assistance Assignment</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. OIL AND GAS IMMIGRATION (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — OFFSHORE &amp; ENERGY SECTOR
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Work Visas for Brazil's Oil and Gas Industry
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-5">
                Brazil's oil and gas sector involves international professionals working in complex technical, maritime, and offshore environments. Foreign workers in these industries are subject to specialized immigration regulations governing maritime vessels, drilling rigs, and FPSO units.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6">
                {[
                  'Offshore technicians and supervisors',
                  'Subsea, drilling & petroleum engineers',
                  'Maritime personnel and vessel officers',
                  'Specialized equipment commissioning experts',
                  'Offshore project and operations managers',
                  'Health, safety & environmental consultants'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-[#e8e8ea] text-xs text-[#1a1c1d]">
                    <span className="text-[#775a19]">⚓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] mb-6 text-xs text-[#44474d] leading-relaxed">
                <strong className="text-[#0f1e36]">Industry-Specific Considerations:</strong> The appropriate authorization depends on whether the unit is foreign-flagged or Brazilian-flagged, maritime jurisdiction, the proportion of Brazilian crew (proporcionalidade de marítimos), and Normative Resolution RN 5 or RN 6.
              </div>

              <a
                href="#work-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Speak With a Corporate Immigration Lawyer</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85"
                  alt="Offshore oil and gas drilling platform in Brazilian pre-salt waters"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Pre-Salt Offshore Operations</span>
                  <p className="text-[11px] text-[#edeef0]">
                    Compliance with Maritime Authority (Marinha do Brasil) and Ministry of Justice offshore vessel protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. BUSINESS VISAS VS. WORK VISAS (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — LEGAL BOUNDARIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              Can You Work in Brazil With a Business Visa?
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              A business visa and a work authorization are not interchangeable under Brazilian law.
            </p>
          </div>

          {/* Section 8 Stock Image Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg border border-[#e2e2e4] h-60 sm:h-72">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85"
              alt="Business visitor reviewing legal distinctions between visit and labor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/90 via-[#0f1e36]/40 to-transparent flex flex-col justify-center p-6 sm:p-10 text-white max-w-xl">
              <span className="text-[10px] font-mono uppercase text-[#e9c176] tracking-wider mb-1.5">
                Substance Over Form
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                Business Meetings vs. Productive Labor
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                Brazilian immigration authorities assess the actual reality of services rendered, not merely the contract title or ticket duration.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 bg-[#f9f9fb] rounded-2xl border border-[#e8e8ea]">
              <div className="inline-block px-3 py-1 rounded bg-[#25D366]/15 text-[#1e824c] text-xs font-bold uppercase tracking-wider mb-3">
                Permitted on Business Visitor Status (VIVIS)
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-3">
                Business Visitor Activities
              </h3>
              <ul className="space-y-2 text-xs text-[#44474d]">
                <li className="flex items-start gap-2"><span className="text-[#1e824c]">✔</span> Attending corporate board meetings and executive discussions</li>
                <li className="flex items-start gap-2"><span className="text-[#1e824c]">✔</span> Commercial negotiations and contract signings</li>
                <li className="flex items-start gap-2"><span className="text-[#1e824c]">✔</span> Participating in industry conferences and trade seminars</li>
                <li className="flex items-start gap-2"><span className="text-[#1e824c]">✔</span> Exploring investment opportunities and inspecting facilities</li>
                <li className="flex items-start gap-2"><span className="text-[#1e824c]">✔</span> Non-remunerated business visits with zero local labor</li>
              </ul>
            </div>

            <div className="p-6 bg-[#f9f9fb] rounded-2xl border border-[#e8e8ea]">
              <div className="inline-block px-3 py-1 rounded bg-[#e9c176]/30 text-[#775a19] text-xs font-bold uppercase tracking-wider mb-3">
                Requires Formal Work Authorization
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0f1e36] mb-3">
                Activities That Require Work Visas
              </h3>
              <ul className="space-y-2 text-xs text-[#44474d]">
                <li className="flex items-start gap-2"><span className="text-[#775a19]">◆</span> Employment by a Brazilian corporate entity (CLT)</li>
                <li className="flex items-start gap-2"><span className="text-[#775a19]">◆</span> Performing physical, engineering, or industrial technical services</li>
                <li className="flex items-start gap-2"><span className="text-[#775a19]">◆</span> Carrying out productive labor or software coding for local entities</li>
                <li className="flex items-start gap-2"><span className="text-[#775a19]">◆</span> Hands-on technical consulting, machinery repair, or training</li>
                <li className="flex items-start gap-2"><span className="text-[#775a19]">◆</span> Long-term operational assignments or receiving Brazilian pay</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#work-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Verify Your Immigration Requirements Before Traveling</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. ELIGIBILITY REQUIREMENTS (WITH STOCK IMAGE & 6 FACTORS)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — QUALIFYING METRICS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              Who Qualifies for a Brazil Work Visa?
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Eligibility depends on the specific work-related immigration category. There is no single checklist that applies universally.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            {/* Left Image */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-lg border border-[#e2e2e4]">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85"
                alt="Attorney evaluating professional credentials and eligibility"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
              />
              <div className="bg-[#0f1e36] text-white p-5">
                <span className="text-[10px] font-mono text-[#e9c176] uppercase block mb-1">
                  Comprehensive Case Assessment
                </span>
                <p className="text-xs text-[#edeef0] leading-relaxed">
                  We pre-screen candidate credentials and sponsor eligibility to ensure compliance with Ministry of Justice requirements.
                </p>
              </div>
            </div>

            {/* Right 6 Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Professional Qualifications</h3>
                <p className="text-xs text-[#44474d]">Applicants may need to demonstrate relevant education, technical training, professional experience, or specialized expertise.</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Employment / Service Arrangements</h3>
                <p className="text-xs text-[#44474d]">A qualifying employment contract or technical service agreement must be prepared and executed.</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Brazilian Sponsoring Organization</h3>
                <p className="text-xs text-[#44474d]">Certain applications require active participation by a registered Brazilian employer or receiving organization.</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Corporate Documentation</h3>
                <p className="text-xs text-[#44474d]">Companies must provide registration documents, declarations, and tax records supporting the proposed activities.</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Criminal Background &amp; Identification</h3>
                <p className="text-xs text-[#44474d]">Applicants must comply with relevant identification, passport validity, and clean background record requirements.</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Immigration Compliance</h3>
                <p className="text-xs text-[#44474d]">The proposed professional activities must strictly align with the specific immigration authorization requested.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#work-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Get a Personalized Work Visa Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. REQUIRED DOCUMENTS (WITH STOCK IMAGE & CHECKLIST)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — DOCUMENTATION DOSSIER
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Documents Required for a Brazil Work Visa
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d]">
              Requirements depend on the applicable immigration category, applicant's nationality, and sponsoring organization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Left Image */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-lg border border-[#e2e2e4]">
              <img
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=85"
                alt="Document dossier and Brazilian sworn translation records"
                className="w-full h-80 sm:h-96 lg:h-full object-cover"
              />
              <div className="bg-[#0f1e36] text-white p-5">
                <span className="text-[11px] font-mono text-[#e9c176] uppercase block mb-1">
                  Apostilles &amp; Sworn Translations
                </span>
                <p className="text-xs text-[#edeef0] leading-relaxed">
                  Foreign diplomas and experience certificates must be Hague apostilled and translated by an accredited Brazilian sworn translator (Tradutor Juramentado).
                </p>
              </div>
            </div>

            {/* Right Checklist */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Valid passport (minimum 6 months validity)',
                  'Applicant civil identification documents',
                  'Employment contract or service agreement',
                  'Professional curriculum vitae / résumé',
                  'Academic diplomas and graduation certificates',
                  'Evidence of professional experience (minimum years)',
                  'Brazilian employer registration documents (CNPJ)',
                  'Company Articles of Incorporation (Contrato Social)',
                  'Required employer declarations & MigranteWeb forms',
                  'Criminal background clearances (apostilled)',
                  'Detailed job description and justification statement',
                  'Hague apostilles on all foreign civil documents',
                  'Certified Brazilian sworn translations into Portuguese',
                  'Proof of payment of federal GRU government fees'
                ].map((doc, idx) => (
                  <div key={idx} className="p-3 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#1a1c1d]">{doc}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                Certain professional categories may require additional documentation, such as technical project descriptions, equipment procurement orders, or regional council authorizations (e.g. CREA, CRM). At Caspani Lawyers, we prepare a personalized checklist based on your case.
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href="#work-hero-form"
                  className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Request Your Legal Document Checklist</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-[11px] text-[#75777e] italic">
                  Provided through a paid consultation or agreed corporate representation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. APPLICATION PROCESS (8-STEP ROADMAP WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — STEP-BY-STEP ROADMAP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              How to Apply for a Brazil Work Visa
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Our 8-step process provides seamless coordination between the Brazilian employer, foreign professional, Ministry of Justice, and Federal Police.
            </p>
          </div>

          {/* Section 11 Stock Image Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg border border-[#e2e2e4] h-60 sm:h-72">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=85"
              alt="Attorney guiding Brazilian employer and international worker through immigration roadmap"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/90 via-[#0f1e36]/40 to-transparent flex flex-col justify-center p-6 sm:p-10 text-white max-w-xl">
              <span className="text-[10px] font-mono uppercase text-[#e9c176] tracking-wider mb-1.5">
                Full-Service Immigration Concierge
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                From Strategy to Federal Police CRNM Card
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                Direct legal representation minimizes delays and ensures full compliance with the General Coordination of Labor Immigration (CGIg).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">1</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Initial Legal Consultation</h3>
              <p className="text-xs text-[#44474d]">We assess the professional activities, proposed employment arrangement, nationality, and legal requirements.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">2</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Visa Category Selection</h3>
              <p className="text-xs text-[#44474d]">We identify the appropriate statutory legal basis for the proposed activities in Brazil.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">3</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Employer Documentation</h3>
              <p className="text-xs text-[#44474d]">We review and audit Brazilian employer documents, corporate registrations, and justification letters.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">4</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Professional Dossier Preparation</h3>
              <p className="text-xs text-[#44474d]">We organize diplomas, CVs, sworn translations, Hague apostilles, and legal declarations.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">5</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Ministry Authorization</h3>
              <p className="text-xs text-[#44474d]">Where applicable, the residence authorization is submitted electronically via MigranteWeb to the Ministry of Justice.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">6</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Consular Visa Application</h3>
              <p className="text-xs text-[#44474d]">Applicants requiring a visa abroad complete consular appointments following prior approval.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">7</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Arrival &amp; Federal Police</h3>
              <p className="text-xs text-[#44474d]">After entering Brazil, the professional attends biometrics for registration and issuance of the CRNM card.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">8</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Ongoing Compliance &amp; Renewals</h3>
              <p className="text-xs text-[#44474d]">We assist with statutory conditions, contract extensions, employer changes, and family renewals.</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#work-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Start Your Brazil Work Visa Application</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          12. CORPORATE IMMIGRATION SERVICES (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — CORPORATE SOLUTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Immigration Solutions for Brazilian &amp; International Employers
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d]">
              Employing foreign professionals in Brazil requires careful coordination between immigration procedures, corporate documentation, and applicable labor rules.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            {/* Left Image */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-lg border border-[#e2e2e4]">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=85"
                alt="Corporate counsel advising HR leadership on Brazilian immigration"
                className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
              />
              <div className="bg-[#0f1e36] text-white p-5">
                <span className="text-[10px] font-mono text-[#e9c176] uppercase block mb-1">
                  Caspani Lawyers • Corporate Immigration Desk
                </span>
                <p className="text-xs text-[#edeef0] leading-relaxed">
                  Dedicated legal counsel for Brazilian subsidiaries, multinational enterprises, and international mobility departments.
                </p>
              </div>
            </div>

            {/* Right 8 Services */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Work Authorization Strategy</h3>
                <p className="text-xs text-[#44474d]">We assess the immigration requirements associated with proposed employment and professional assignments.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Employer Documentation</h3>
                <p className="text-xs text-[#44474d]">We assist with preparing and reviewing corporate documentation relevant to immigration applications.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">International Employee Transfers</h3>
                <p className="text-xs text-[#44474d]">We evaluate immigration arrangements for employees transferred between affiliated multinational entities.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Technical Assignment Immigration</h3>
                <p className="text-xs text-[#44474d]">We assist companies engaging foreign technicians and engineers for specialized equipment projects.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Immigration Compliance Audits</h3>
                <p className="text-xs text-[#44474d]">We provide guidance concerning permitted immigration activities and the work actually performed in Brazil.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Renewals &amp; Status Changes</h3>
                <p className="text-xs text-[#44474d]">We help employers navigate contract renewals, assignment extensions, and transitions to indefinite residency.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Family Reunification for Staff</h3>
                <p className="text-xs text-[#44474d]">We assist accompanying spouses, partners, and children with dependent family visas (VITEM XI).</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Individual Legal Representation</h3>
                <p className="text-xs text-[#44474d]">We also advise foreign professionals who need assistance understanding their rights under Brazilian immigration law.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#work-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Schedule a Corporate Immigration Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          13. EMPLOYER RESPONSIBILITIES (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — COMPLIANCE AUDIT
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Immigration Compliance for Companies Hiring Foreign Workers
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-5">
                Brazilian employers and receiving organizations have important statutory responsibilities when engaging foreign professionals. Immigration authorization does not replace compliance with Brazilian labor, corporate, or tax laws.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-6">
                {[
                  'Appropriate immigration authorization before work starts',
                  'Accurate employment and service contract alignment',
                  'Receita Federal corporate registration (CNPJ) status',
                  'Compliance with Brazilian Labor Code (CLT) rules',
                  'Social security (INSS) and income tax withholding',
                  'Professional council licensing (e.g. CREA, OAB, CRM)',
                  'Continuous monitoring of immigration conditions',
                  'Timely filing for contract extensions and renewals',
                  'Notification of contract termination to Federal Police',
                  'Maintaining compliant employment and migration records'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#1a1c1d]">
                    <span className="text-[#775a19]">✔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] mb-6 text-xs text-[#44474d] leading-relaxed">
                Companies should assess these legal obligations before foreign employees begin working in Brazil to prevent substantial administrative penalties.
              </div>

              <a
                href="#work-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Your Company's Immigration Compliance</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85"
                  alt="Human resources director reviewing labor compliance documents"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Corporate Risk Mitigation</span>
                  <p className="text-[11px] text-[#edeef0]">
                    We safeguard corporate sponsors against labor liabilities and unauthorized work violations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          14. WORK VISA VALIDITY (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=85"
                  alt="Physical CRNM card and legal residence terms in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Three Distinct Validity Periods</span>
                  <p className="text-[11px] text-[#edeef0]">
                    Understanding visa entry windows, authorized stay periods, and physical CRNM card dates.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — STATUTORY DURATION
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                How Long Can You Stay in Brazil With a Work Visa?
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-5">
                The duration of a work-related visa or residence authorization depends on the specific immigration category and the applicable legal basis. Some authorizations are designed for short-term technical assignments, while others permit longer periods of multi-year residence.
              </p>

              <div className="space-y-3 w-full mb-6">
                <div className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-0.5">1. Visa Validity (Entry Window)</strong>
                  <span className="text-xs text-[#44474d]">
                    The period during which the consular visa sticker in your passport may be used to enter Brazilian territory.
                  </span>
                </div>

                <div className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-0.5">2. Authorized Residence Period</strong>
                  <span className="text-xs text-[#44474d]">
                    The period for which the foreign national is legally authorized to reside and work in Brazil (usually 1 to 2 years initially).
                  </span>
                </div>

                <div className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-0.5">3. Residence Card Validity (CRNM)</strong>
                  <span className="text-xs text-[#44474d]">
                    The validity printed on the physical Carteira de Registro Nacional Migratório issued by the Federal Police.
                  </span>
                </div>
              </div>

              <a
                href="#work-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Your Work Visa Validity and Renewal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          15. CHANGING EMPLOYERS (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — EMPLOYER MOBILITY
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Can You Change Jobs While Holding a Brazilian Work Visa?
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-5">
                Changing employers or professional activities may affect the legal basis of a work-related residence authorization. The consequences depend on the applicable immigration category and the conditions of the initial authorization.
              </p>

              <div className="space-y-3 w-full mb-6">
                <span className="text-xs font-bold text-[#0f1e36] block">Before changing employers, foreign workers must consider:</span>
                <div className="space-y-2">
                  <div className="p-3 bg-white rounded-lg border border-[#e8e8ea] text-xs text-[#1a1c1d] flex items-center gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Whether the authorization is tied to a specific sponsoring Brazilian company</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#e8e8ea] text-xs text-[#1a1c1d] flex items-center gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Whether a new MigranteWeb petition or formal Federal Police notification is required</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#e8e8ea] text-xs text-[#1a1c1d] flex items-center gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Whether the proposed new activities remain within the permitted statutory category</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#e8e8ea] text-xs text-[#1a1c1d] flex items-center gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Whether existing residence authorization remains valid during the transition period</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#e8e8ea] text-xs text-[#1a1c1d] flex items-center gap-2">
                    <span className="text-[#775a19]">◆</span>
                    <span>Whether changes in corporate sponsorship affect accompanying family members' status</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-[#e8e8ea] mb-6 text-xs text-[#75777e]">
                Foreign professionals should not assume that every work-related residence authorization permits unrestricted changes of employer.
              </div>

              <a
                href="#work-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Get Legal Advice Before Changing Employers</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
                  alt="Professional considering career transition and legal employer transfer in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Seamless Career Transitions</span>
                  <p className="text-[11px] text-[#edeef0]">
                    We coordinate employer transfers without interrupting your continuous legal residence timeline in Brazil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          16. FAMILY MEMBERS (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=85"
                  alt="Expatriate family living happily together in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Family Reunification (VITEM XI)</span>
                  <p className="text-[11px] text-[#edeef0]">
                    Spouses, partners, and children accompany principal work visa holders with full work and study rights in Brazil.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — FAMILY REUNIFICATION
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
                Can Your Family Join You in Brazil?
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-5">
                Eligible family members of foreign workers may qualify for residence through family reunification under Brazilian immigration law. This ensures that international professionals can relocate to Brazil alongside their loved ones.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6">
                <div className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-1">Spouses &amp; Civil Partners</strong>
                  <p className="text-xs text-[#44474d]">Legally married spouses or partners in a recognized stable union (união estável).</p>
                </div>

                <div className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-1">Minor &amp; Dependent Children</strong>
                  <p className="text-xs text-[#44474d]">Biological, adopted, or stepchildren, including qualifying student adult dependents.</p>
                </div>

                <div className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-1">Dependent Ascendants</strong>
                  <p className="text-xs text-[#44474d]">Certain dependent parents of the principal resident under applicable dependency rules.</p>
                </div>

                <div className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-1">Work Authorization for Spouses</strong>
                  <p className="text-xs text-[#44474d]">Spouses granted family reunion residence enjoy full work rights and CRNM issuance.</p>
                </div>
              </div>

              <a
                href="#work-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Explore Family Reunion Visas</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          17. WORK VISAS AND CITIZENSHIP (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — LONG-TERM HORIZONS
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
                Can a Work Visa Lead to Permanent Residency or Citizenship?
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                <p>
                  Certain work-related immigration pathways may allow eligible foreign nationals to transition from temporary status to residence for an indefinite term (permanent residence), subject to continuous employment and compliance.
                </p>
                <p>
                  However, not every work authorization provides the same long-term immigration options. Brazilian citizenship is a separate legal matter requiring compliance with specific statutory naturalization criteria.
                </p>
                <p>
                  The ordinary naturalization framework generally requires <strong>four years</strong> of continuous lawful residence, Portuguese language proficiency (CELPE-Bras or recognized certificates), civil capacity, and clean criminal background checks. Statutorily recognized reductions (e.g. marriage to a Brazilian or having a Brazilian child) may reduce this threshold to one year.
                </p>
              </div>

              <a
                href="#work-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Explore Long-Term Immigration Options</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=85"
                  alt="Brazilian passport and naturalization certificate"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Path to Brazilian Nationality</span>
                  <p className="text-[11px] text-[#edeef0]">
                    Continuous legal work residence counts toward the 4-year naturalization timeline under Brazilian nationality law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          18. WHY CHOOSE CASPANI LAWYERS? (7 PILLARS + STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — YOUR LEGAL ADVANTAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Personalized Legal Support for Foreign Professionals &amp; Employers
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d]">
              Direct representation by an experienced Brazilian corporate immigration attorney registered with the OAB.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#f9f9fb] p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <Scale className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Licensed Brazilian Attorney</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Receive corporate immigration assistance from a lawyer registered with the Brazilian Bar Association (OAB/PR 58.420).
              </p>
            </div>

            <div className="bg-[#f9f9fb] p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <Briefcase className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Corporate Immigration Knowledge</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We assist with complex cross-border employment matters involving international staff and Brazilian enterprises.
              </p>
            </div>

            <div className="bg-[#f9f9fb] p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <Compass className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Personalized Immigration Strategy</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We assess the actual professional activities and legal requirements before recommending an optimal application route.
              </p>
            </div>

            <div className="bg-[#f9f9fb] p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <UserCheck className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Direct Attorney Communication</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Communicate directly with your lawyer and receive clear legal explanations throughout the application process.
              </p>
            </div>

            <div className="bg-[#f9f9fb] p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <Globe2 className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Assistance From Brazil or Abroad</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Our services are available to multinational employers abroad and foreign professionals already present in Brazil.
              </p>
            </div>

            <div className="bg-[#f9f9fb] p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <Award className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Multilingual Legal Support</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We provide multilingual legal services (English, Portuguese, French, Spanish) to facilitate assistance to global companies.
              </p>
            </div>
          </div>

          <div className="bg-[#f9f9fb] p-6 rounded-xl border border-[#e8e8ea] max-w-2xl mx-auto text-center mb-8 shadow-xs">
            <h4 className="font-serif text-base font-bold text-[#0f1e36] mb-1">Transparent Professional Services</h4>
            <p className="text-xs text-[#44474d]">
              The scope of representation and professional fees are discussed transparently before any agreed legal services begin.
            </p>
          </div>

          <div className="text-center">
            <a
              href="#work-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Book Your Legal Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          19. FREQUENTLY ASKED QUESTIONS (20 FAQS WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Brazil Work Visa – FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d]">
              Comprehensive answers regarding VITEM V, intra-company transfers, technical assistance, timelines, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
            {/* Left Column: FAQ Side Stock Image */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-md border border-[#e2e2e4] sticky top-28">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=85"
                alt="Direct consultation with licensed Brazilian immigration attorney"
                className="w-full h-72 sm:h-80 object-cover"
              />
              <div className="bg-[#0f1e36] text-white p-5">
                <span className="text-[10px] font-mono uppercase text-[#e9c176] block mb-1">
                  Have Specific Labor Inquiries?
                </span>
                <p className="text-xs text-[#edeef0] mb-3 leading-relaxed">
                  Every employment and corporate situation is unique. Our immigration attorney analyzes your specific contracts during your consultation.
                </p>
                <a
                  href="#work-hero-form"
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
                  <div key={idx} className="bg-white rounded-xl border border-[#e8e8ea] overflow-hidden shadow-2xs">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors cursor-pointer hover:bg-[#fcfcfd]"
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
          20. FINAL SECTION: IMAGE ON LEFT, RESERVATION FORM ON RIGHT
          ======================================================== */}
      <section className="w-full bg-[#edeef0] py-16 lg:py-24 border-t border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — READY TO WORK IN BRAZIL?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Your Career. Your Business. Our Immigration Guidance.
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Whether you are an international professional preparing to work in Brazil or an employer seeking to recruit foreign talent, selecting the correct immigration pathway is essential. At Caspani Lawyers, we provide personalized legal guidance for work visas, residence authorizations, corporate immigration, and related compliance matters. We help you understand the applicable requirements and prepare your immigration process with clarity and professional attention.
            </p>
          </div>

          {/* TWO-COLUMN LAYOUT: IMAGE ON THE LEFT, FORM ON THE RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto mb-10">
            {/* Left Column: Curated Corporate Stock Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85"
                  alt="Modern commercial corporate tower in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/95 via-[#0f1e36]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CORPORATE IMMIGRATION DESK
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    Direct Corporate Counsel in Brazil
                  </h3>
                  <p className="text-xs text-[#edeef0] leading-relaxed">
                    Direct case review by licensed Brazilian employment &amp; immigration counsel within 24 business hours.
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
                id="work-bottom-reservation-form"
                title="Schedule Corporate Work Visa Consultation"
                subtitle="Confidential review by licensed Brazilian corporate immigration counsel within 24 hours"
                presetService="Work Visas & Employment Authorization"
              />
            </div>
          </div>

          {/* Legal Practice Footer & Disclaimer */}
          <div className="max-w-3xl mx-auto text-center border-t border-[#c5c6ce] pt-6 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0f1e36]">
              CASPANI LAWYERS • ADVOCACIA INTERNACIONAL
            </p>
            <p className="text-[11px] text-[#775a19] font-medium">
              Brazil Immigration | VITEM V Work Visas | Intra-Company Transfers | Technical Assistance | Corporate Compliance
            </p>
            <p className="text-[11px] text-[#75777e] leading-relaxed">
              <strong>Legal Disclaimer:</strong> This page provides general legal information and does not constitute individualized legal advice. Work visa eligibility, documentation requirements, and processing times depend on the specific labor contract, sponsoring Brazilian entity, applicable normative resolutions, and consular discretion.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
