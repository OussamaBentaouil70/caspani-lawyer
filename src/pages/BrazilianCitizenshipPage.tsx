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
  Flag,
  Landmark,
  BookOpen,
  Briefcase
} from 'lucide-react';

interface BrazilianCitizenshipPageProps {
  onNavigate: (route: string) => void;
}

export const BrazilianCitizenshipPage: React.FC<BrazilianCitizenshipPageProps> = ({ onNavigate }) => {
  // Sync document title and meta description
  useEffect(() => {
    document.title = 'Brazilian Citizenship – Naturalization, Descent & Nationality Law | Caspani Lawyers';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Personalized legal guidance for Brazilian citizenship, naturalization pathways, citizenship by descent, nationality recognition, and dual citizenship by licensed Brazilian counsel.'
      );
    }
  }, []);

  // Hero form state (Lfom f7al dima f Liman)
  const [heroForm, setHeroForm] = useState({
    fullName: '',
    email: '',
    countryCode: '+55',
    phone: '',
    pathwayInterest: 'Ordinary Naturalization (4 Years)',
    applicantSituation: 'Resident in Brazil',
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
      `Hello Caspani Lawyers, my name is ${heroForm.fullName || 'Client'}. I am inquiring about Brazilian Citizenship & Nationality Law.\nPathway Interest: ${heroForm.pathwayInterest}\nSituation: ${heroForm.applicantSituation}\nCountry: ${heroForm.currentCountry}\nPhone: ${heroForm.countryCode} ${heroForm.phone}\nEmail: ${heroForm.email}\nDetails: ${heroForm.message}`
    );
    window.open(`https://wa.me/5541998247700?text=${text}`, '_blank');
  };

  const faqs = [
    {
      question: '1. How can a foreigner become a Brazilian citizen?',
      answer:
        'Foreign nationals may qualify through naturalization after satisfying the applicable legal requirements. Some people born abroad to Brazilian parents may already qualify as Brazilian citizens by birth.'
    },
    {
      question: '2. How many years must I live in Brazil to obtain citizenship?',
      answer:
        'Ordinary naturalization generally requires four years of qualifying residence, but certain applicants may benefit from reduced residence periods. Extraordinary naturalization involves more than fifteen uninterrupted years of residence.'
    },
    {
      question: '3. Can I become Brazilian after one year?',
      answer:
        'Certain applicants, including qualifying spouses or partners of Brazilian citizens, parents of Brazilian children, and nationals originating from Portuguese-speaking countries, may qualify under a one-year residence framework. Other legal requirements still apply.'
    },
    {
      question: '4. Does marrying a Brazilian automatically give me citizenship?',
      answer:
        'No. Marriage may reduce the qualifying residence period to one year, but citizenship requires a separate naturalization application, Portuguese language evidence, clean background checks, and official ministerial review.'
    },
    {
      question: '5. Can I become Brazilian if I have a Brazilian child?',
      answer:
        'Having a Brazilian child may provide a basis for residence authorization and may reduce the residence requirement for ordinary naturalization to one year. Citizenship is not automatic.'
    },
    {
      question: '6. Can I obtain Brazilian citizenship through my Brazilian mother or father?',
      answer:
        'Potentially, yes. Individuals born abroad to Brazilian parents may qualify as natural-born Brazilians under constitutional rules through consular birth registration or a judicial nationality option upon reaching adulthood.'
    },
    {
      question: '7. Can I obtain citizenship through a Brazilian grandparent?',
      answer:
        'Not automatically. Brazilian nationality law does not establish direct citizenship claims based solely on grandparents. The nationality status of the intervening parent and applicable constitutional rules must be assessed.'
    },
    {
      question: '8. Do I need to speak Portuguese?',
      answer:
        'Portuguese communication ability is generally required for ordinary naturalization, subject to applicable regulations, accepted documentary evidence, and statutory exceptions.'
    },
    {
      question: '9. Do I need to take the CELPE-Bras examination?',
      answer:
        'Not necessarily. Depending on the naturalization category and current administrative regulations, other forms of Portuguese-language evidence (such as recognized diplomas or accredited certificates) may be accepted.'
    },
    {
      question: '10. Does Brazil allow dual citizenship?',
      answer:
        'Generally, yes. Following Constitutional Amendment No. 131/2023, Brazil fully accommodates dual and multiple citizenship. However, applicants must verify the nationality retention laws of their country of origin.'
    },
    {
      question: '11. Can I keep my original passport after becoming Brazilian?',
      answer:
        'Brazil does not require naturalizing individuals to renounce their original nationality. Whether that nationality is retained depends on the domestic laws of the applicant’s country of origin.'
    },
    {
      question: '12. Can I obtain Brazilian citizenship by investing in property?',
      answer:
        'No. Brazil does not offer automatic citizenship in exchange for real estate investment. A qualifying investment may provide a residence pathway (Golden Visa), which could later support naturalization eligibility after the statutory residence period.'
    },
    {
      question: '13. Can I obtain citizenship through a Brazilian company investment?',
      answer:
        'Business investment does not automatically grant Brazilian nationality. Eligible investors may obtain residence authorization and later apply for ordinary naturalization once qualifying residence and statutory conditions are fulfilled.'
    },
    {
      question: '14. Can I apply for naturalization while living outside Brazil?',
      answer:
        'Most residence-based naturalization categories require qualifying continuous residence within Brazil. However, citizenship by descent and certain special nationality procedures may follow different extraterritorial rules.'
    },
    {
      question: '15. Can a child obtain Brazilian citizenship through naturalization?',
      answer:
        'Certain foreign children who established residence in Brazil before the age of ten may qualify for provisional naturalization upon petition by their legal representative.'
    },
    {
      question: '16. What happens to provisional naturalization after adulthood?',
      answer:
        'A person who obtained provisional naturalization must observe the applicable statutory deadline after reaching adulthood (18 years of age) to file a formal request converting it into definitive naturalization.'
    },
    {
      question: '17. Can a former Brazilian citizen recover their nationality?',
      answer:
        'Certain former Brazilian citizens who previously lost their nationality may qualify for reacquisition or restoration under the streamlined provisions enacted by Constitutional Amendment No. 131/2023.'
    },
    {
      question: '18. Does Brazilian citizenship make me a Brazilian tax resident?',
      answer:
        'Not automatically. In Brazil, nationality and tax residency are distinct legal concepts governed by separate statutes. Tax residency depends on physical presence, visa tenure, and official declarations.'
    },
    {
      question: '19. How long does Brazilian naturalization take?',
      answer:
        'Processing times vary according to the naturalization category, Federal Police processing docket, Ministry of Justice adjudication timelines, and the completeness of documentation. No fixed approval timeline can be guaranteed.'
    },
    {
      question: '20. How much does a Brazilian citizenship application cost?',
      answer:
        'The government administrative filing itself may be exempt from statutory fees, but associated expenses include document apostilles, certified translations, police clearances, language assessments, and legal representation.'
    },
    {
      question: '21. Do I need a lawyer to apply for Brazilian citizenship?',
      answer:
        'While legal representation is not mandatory for administrative filings, retaining licensed counsel ensures strategic document auditing, avoids costly procedural errors, prevents residence calculation missteps, and provides representation before federal authorities.'
    },
    {
      question: '22. Can my citizenship application be denied?',
      answer:
        'Yes. Applications may be refused if residence continuity is broken, documentation is incomplete, criminal standards are unmet, or language requirements are unproven. Timely legal analysis provides options for administrative appeals or judicial remedies.'
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] text-[#1a1c1d] min-h-screen">
      {/* ========================================================
          1. HERO SECTION (Lfom f7al dima f Liman)
          ======================================================== */}
      <section className="relative w-full bg-[#0f1e36] text-white py-14 lg:py-20 border-b border-[#223354] overflow-hidden">
        {/* Background Image with Dark Navy Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1920&q=85"
            alt="Brazilian National Congress and supreme justice architecture in Brasília"
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
            <span className="text-[#e9c176]">BRAZILIAN CITIZENSHIP</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Headline, Copy & Trust Badges */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e9c176] block mb-2">
                — CASPANI LAWYERS • ADVOCACIA INTERNACIONAL
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
                Brazilian Citizenship – Naturalization, Citizenship by Descent &amp; Nationality Law
              </h1>
              <p className="text-base sm:text-lg font-medium text-[#e9c176] mb-4 leading-snug">
                Discover your pathway to Brazilian citizenship with personalized legal guidance.
              </p>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed mb-4">
                Are you a foreign national living in Brazil, married to a Brazilian citizen, the parent of a Brazilian child, or born abroad to a Brazilian parent?
              </p>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed mb-4">
                Brazilian nationality law provides different legal pathways depending on your family history, residence status, nationality, and individual circumstances. At Caspani Lawyers, we provide legal assistance with Brazilian naturalization, citizenship by descent, nationality recognition, civil documentation, and related administrative and judicial procedures.
              </p>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed mb-8">
                Whether you are seeking citizenship after years of residence or need to establish a nationality right acquired at birth, we help you identify the appropriate legal pathway.
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
                  href="#citizenship-pathways-section"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/30 transition-all duration-200"
                >
                  Explore Citizenship Options
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
                    <Flag className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Brazilian Nationality &amp; Immigration Law
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#e9c176] flex items-center justify-center mb-1">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Assistance in Brazil and Abroad
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

            {/* Right Column: Hero Consultation Card (Lfom 3la liman) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="hero-consultation-card">
              <div className="bg-white text-[#1a1c1d] rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/20">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c5a059] block mb-1">
                  CONFIDENTIAL LEGAL INTAKE
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0f1e36] mb-1">
                  Request Your Consultation
                </h3>
                <p className="text-xs text-[#44474d] mb-4 pb-2 border-b border-[#e8e8ea]">
                  Tell us about your background and our office will contact you regarding next steps.
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
                      Thank you, <strong className="text-[#0f1e36]">{heroForm.fullName}</strong>. A licensed Brazilian citizenship attorney will review your details within 24 business hours.
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
                          Pathway of Interest
                        </label>
                        <select
                          value={heroForm.pathwayInterest}
                          onChange={(e) => setHeroForm({ ...heroForm, pathwayInterest: e.target.value })}
                          className="w-full px-2 py-2 text-xs border border-[#c5c6ce] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#775a19] bg-white text-[#1a1c1d]"
                        >
                          <option value="Citizenship by Descent">Citizenship by Descent</option>
                          <option value="Ordinary Naturalization (4 Years)">Ordinary Naturalization (4 Years)</option>
                          <option value="Marriage / Stable Union (1 Year)">Marriage / Stable Union (1 Year)</option>
                          <option value="Brazilian Child Parentage (1 Year)">Brazilian Child Parentage (1 Year)</option>
                          <option value="Extraordinary (15 Years)">Extraordinary Naturalization (15 Years)</option>
                          <option value="Portuguese-Speaking National (1 Year)">Portuguese-Speaking National</option>
                          <option value="Provisional Naturalization (Minors)">Provisional for Minors</option>
                          <option value="Nationality Reacquisition">Nationality Reacquisition</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#44474d] mb-1">
                          Current Location
                        </label>
                        <input
                          type="text"
                          value={heroForm.currentCountry}
                          onChange={(e) => setHeroForm({ ...heroForm, currentCountry: e.target.value })}
                          placeholder="e.g. Brazil, USA, UK"
                          className="w-full px-2 py-2 text-xs border border-[#c5c6ce] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#775a19] bg-white text-[#1a1c1d]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-1" htmlFor="hero-res-msg">
                        Tell us about your background
                      </label>
                      <textarea
                        id="hero-res-msg"
                        rows={2}
                        value={heroForm.message}
                        onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                        placeholder="Years residing in Brazil, Brazilian relatives, descent lineage, or current visa status..."
                        className="w-full px-3 py-2 text-xs border border-[#c5c6ce] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#775a19] bg-white text-[#1a1c1d]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0f1e36] hover:bg-[#1a2d4f] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                    >
                      <Scale className="w-4 h-4 text-[#e9c176]" />
                      <span>Request Citizenship Review</span>
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
          2. UNDERSTANDING BRAZILIAN NATIONALITY
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — UNDERSTANDING BRAZILIAN NATIONALITY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                How Can a Foreigner Become a Brazilian Citizen?
              </h2>
              <p className="text-sm text-[#44474d] leading-relaxed mb-4">
                Brazilian nationality can arise from different legal circumstances. Some individuals are Brazilian citizens from birth, even if they were born outside Brazil. Others may acquire Brazilian nationality through naturalization after meeting the applicable legal requirements.
              </p>
              <p className="text-sm font-medium text-[#0f1e36] mb-6">
                The first step is identifying which legal category applies to your situation:
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0f1e36] mb-1">
                      Brazilian Citizenship by Birth (Originary Nationality)
                    </h3>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      Brazilian nationality may be acquired through birth in Brazilian territory (jus soli) or through qualifying descent from a Brazilian father or mother (jus sanguinis) under constitutional rules.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center shrink-0 mt-0.5">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0f1e36] mb-1">
                      Brazilian Citizenship by Naturalization (Derivative Nationality)
                    </h3>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      Eligible foreign nationals may apply for naturalization based on qualifying continuous residence in Brazil, Portuguese communication capability, and other statutory requirements.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0f1e36] mb-1">
                      Recognition or Reacquisition of Brazilian Nationality
                    </h3>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      Certain individuals may need formal administrative or judicial procedures to recognize an existing nationality right or address historical loss of Brazilian nationality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#fdfaf3] border-l-4 border-[#c5a059] mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#775a19] mb-1">Important Legal Distinction</p>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      Residence authorization, citizenship, and possession of a Brazilian passport are different legal matters. Holding a residency card (RNM) does not automatically confer citizenship without a separate petition and official decree.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#44474d] mb-6">
                At Caspani Lawyers, we assess your eligibility before recommending the appropriate legal procedure.
              </p>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Speak With a Brazilian Citizenship Lawyer</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>

            {/* Right Column: Curated Section Stock Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=85"
                  alt="Brazilian law volumes and scales of justice"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CONSTITUTIONAL JURISPRUDENCE
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Federal Constitution of Brazil (Art. 12)
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Rigorous statutory analysis of jus soli, jus sanguinis, and statutory naturalization mandates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. CITIZENSHIP PATHWAYS
          ======================================================== */}
      <section id="citizenship-pathways-section" className="w-full py-16 lg:py-20 bg-[#edeef0] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — CITIZENSHIP PATHWAYS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
              Main Pathways to Brazilian Citizenship
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              Brazilian law provides multiple distinct legal avenues to obtain nationality. Review the principal frameworks below to see how each applies to your individual circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Pathway 1 */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#c5c6ce] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-3">
                  01
                </div>
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">
                  Citizenship by Descent
                </h3>
                <span className="text-[11px] font-semibold text-[#775a19] block mb-2">
                  For individuals born abroad to a Brazilian parent
                </span>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  A person born outside Brazil to a Brazilian mother or father may qualify as a Brazilian citizen by birth under constitutional conditions. Procedures involve consular registration or a formal nationality option in Brazil.
                </p>
              </div>
              <a
                href="#descent-section"
                className="text-xs font-bold text-[#775a19] hover:underline inline-flex items-center gap-1 pt-2 border-t border-[#e8e8ea]"
              >
                <span>Explore Citizenship by Descent</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Pathway 2 */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#c5c6ce] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-3">
                  02
                </div>
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">
                  Ordinary Naturalization
                </h3>
                <span className="text-[11px] font-semibold text-[#775a19] block mb-2">
                  For qualifying foreign residents
                </span>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Generally requires four years of qualifying continuous residence in Brazil, Portuguese-language communication ability, clean background check, and satisfaction of statutory requirements.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services/brazilian-citizenship/ordinary-naturalization')}
                className="text-xs font-bold text-[#775a19] hover:underline inline-flex items-center gap-1 pt-2 border-t border-[#e8e8ea] cursor-pointer text-left"
              >
                <span>Explore Ordinary Naturalization</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Pathway 3 */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#c5c6ce] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-3">
                  03
                </div>
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">
                  Naturalization Through Family
                </h3>
                <span className="text-[11px] font-semibold text-[#775a19] block mb-2">
                  Marriage or a Brazilian Child (1 Year)
                </span>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Foreign nationals with a Brazilian spouse, qualifying partner, or Brazilian child benefit from a reduction of the ordinary residence requirement to just one continuous year.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services/brazilian-citizenship/one-year-naturalization')}
                className="text-xs font-bold text-[#775a19] hover:underline inline-flex items-center gap-1 pt-2 border-t border-[#e8e8ea] cursor-pointer text-left"
              >
                <span>Explore Family-Based Naturalization (1 Year)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Pathway 4 */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#c5c6ce] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-3">
                  04
                </div>
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">
                  Extraordinary Naturalization
                </h3>
                <span className="text-[11px] font-semibold text-[#775a19] block mb-2">
                  For long-term residents (15+ Years)
                </span>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Foreign nationals who have resided in Brazil for more than fifteen uninterrupted years with no unpardoned criminal convictions may qualify under constitutional rules without Portuguese tests.
                </p>
              </div>
              <a
                href="#extraordinary-section"
                className="text-xs font-bold text-[#775a19] hover:underline inline-flex items-center gap-1 pt-2 border-t border-[#e8e8ea]"
              >
                <span>Explore Extraordinary Naturalization</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Pathway 5 */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#c5c6ce] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-3">
                  05
                </div>
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">
                  Portuguese-Speaking Nationals
                </h3>
                <span className="text-[11px] font-semibold text-[#775a19] block mb-2">
                  Nationals of CPLP Countries (1 Year)
                </span>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  The Constitution provides a specific framework for nationals of Portuguese-speaking countries, requiring only one uninterrupted year of residence alongside moral integrity.
                </p>
              </div>
              <a
                href="#cplp-section"
                className="text-xs font-bold text-[#775a19] hover:underline inline-flex items-center gap-1 pt-2 border-t border-[#e8e8ea]"
              >
                <span>Explore Portuguese-Speaking Rules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Pathway 6 */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#c5c6ce] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-3">
                  06
                </div>
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">
                  Naturalization for Minors
                </h3>
                <span className="text-[11px] font-semibold text-[#775a19] block mb-2">
                  Provisional &amp; Definitive Conversion
                </span>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Foreign children who establish residence in Brazil before age 10 may obtain provisional naturalization, which can be converted into definitive citizenship upon reaching adulthood.
                </p>
              </div>
              <a
                href="#minors-section"
                className="text-xs font-bold text-[#775a19] hover:underline inline-flex items-center gap-1 pt-2 border-t border-[#e8e8ea]"
              >
                <span>Explore Naturalization for Minors</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Pathway 7 */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#c5c6ce] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-3">
                  07
                </div>
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">
                  Special Naturalization
                </h3>
                <span className="text-[11px] font-semibold text-[#775a19] block mb-2">
                  Diplomatic &amp; Public Service
                </span>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Specific categories for individuals married to Brazilian diplomats or persons serving the Brazilian State abroad, or employed at Brazilian missions for qualifying tenures.
                </p>
              </div>
              <a
                href="#special-section"
                className="text-xs font-bold text-[#775a19] hover:underline inline-flex items-center gap-1 pt-2 border-t border-[#e8e8ea]"
              >
                <span>Explore Special Naturalization</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Pathway 8 */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#c5c6ce] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-3">
                  08
                </div>
                <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">
                  Nationality Reacquisition
                </h3>
                <span className="text-[11px] font-semibold text-[#775a19] block mb-2">
                  For Former Brazilian Citizens (EC 131/2023)
                </span>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Individuals who previously lost Brazilian nationality may request restoration under the updated constitutional framework enacted by Constitutional Amendment No. 131/2023.
                </p>
              </div>
              <a
                href="#reacquisition-section"
                className="text-xs font-bold text-[#775a19] hover:underline inline-flex items-center gap-1 pt-2 border-t border-[#e8e8ea]"
              >
                <span>Discuss Nationality Reacquisition</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. CITIZENSHIP BY DESCENT
          ======================================================== */}
      <section id="descent-section" className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=85"
                  alt="Multi-generational family celebrating lineage and citizenship"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    JUS SANGUINIS • DESCENT LINEAGE
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Originary Brazilian Nationality by Bloodline
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Consular registrations, nationality options, and civil registry rectifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — CITIZENSHIP BY DESCENT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Brazilian Citizenship Through a Brazilian Parent
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-3">
                Were you born outside Brazil to a Brazilian mother or father? You may have a claim to Brazilian nationality by birth.
              </p>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                Article 12 of the Brazilian Constitution recognizes certain individuals born abroad to Brazilian parents as natural-born Brazilians (brasileiros natos). Depending on the birth year and parentage status, the path unfolds through consular or judicial channels:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#775a19]" />
                    Registration Through a Brazilian Consulate
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Foreign births registered with a competent Brazilian consular authority establish full civil documentation and originary Brazilian nationality under constitutional rules.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#775a19]" />
                    Nationality Option in Brazil
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    For unregistered births, the Constitution provides a pathway involving establishing residence in Brazil and filing a formal nationality option before the competent Federal Court.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-[#c5a059]" />
                    Citizenship Through Grandparents
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Having a Brazilian grandparent does not automatically establish a direct citizenship-by-descent claim. The nationality status of the intervening parent must first be legally verified.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-[#775a19]" />
                    Civil Documentation &amp; Rectification
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Cases frequently require retrieving foreign birth records, apostilling parental documents, solving name discrepancies, and coordinating registration in Brazilian Cartórios.
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#44474d] mb-6">
                At Caspani Lawyers, we help assess the legal basis for nationality recognition and identify the appropriate documentation and procedures.
              </p>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Check Your Citizenship by Descent Eligibility</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. ORDINARY NATURALIZATION
          ======================================================== */}
      <section id="ordinary-section" className="w-full py-16 lg:py-20 bg-[#f8f9fa] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — ORDINARY NATURALIZATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Brazilian Citizenship After Four Years of Residence
              </h2>
              <p className="text-sm text-[#44474d] leading-relaxed mb-6">
                Ordinary naturalization is the principal pathway for foreign nationals who have established qualifying residence in Brazil. Under the general framework governed by Law 13.445/2017, applicants must satisfy comprehensive statutory conditions:
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white border border-[#c5c6ce] flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider">
                      Residence in Brazil
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      A qualifying continuous residence period of four years with permanent status, unless a statutory reduction applies.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#c5c6ce] flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider">
                      Portuguese-Language Ability
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      Demonstrated ability to communicate in the Portuguese language through certified examinations (e.g. CELPE-Bras) or accredited education.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#c5c6ce] flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider">
                      Civil Capacity &amp; Livelihood
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      Compliance with full civil capacity requirements under Brazilian civil law and evidence of lawful economic maintenance.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#c5c6ce] flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider">
                      Criminal Record Clearances
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      Absence of unpardoned criminal convictions in Brazil and abroad, or certified proof of legally recognized rehabilitation.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#c5c6ce] flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider">
                      Supporting Documentation &amp; Stay Calculation
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      Holding a residence card for four calendar years does not automatically satisfy the rule. Extended international absences, travel logs, and stay continuity require meticulous legal auditing.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('services/brazilian-citizenship/ordinary-naturalization')}
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                <span>Evaluate 4-Year Naturalization Eligibility</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </button>
            </div>

            {/* Right Column: Curated Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85"
                  alt="Modern commercial and legal headquarters in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    STATUTORY COMPLIANCE
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Four-Year Continuous Residence Audit
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Verifying migratory movements, Federal Police certidões, and tax returns before ministerial filing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. CITIZENSHIP THROUGH MARRIAGE
          ======================================================== */}
      <section id="marriage-section" className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85"
                  alt="Couple walking hand in hand with wedding rings"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    SPOUSAL NATURALIZATION
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    One-Year Expedited Track for Spouses &amp; Partners
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Valid marriages, registered união estável, and civil capacity compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — CITIZENSHIP THROUGH MARRIAGE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Can You Obtain Brazilian Citizenship by Marrying a Brazilian?
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-3">
                Marriage to a Brazilian citizen does not automatically confer Brazilian nationality.
              </p>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                However, a legally recognized marriage or stable union (união estável) allows an eligible foreign resident to request ordinary naturalization after a significantly reduced residence tenure:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-2">
                    One-Year Residence Reduction
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    The general four-year residence requirement is statutory reduced to just 1 year of continuous residence for spouses or partners of Brazilian nationals.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-2">
                    Marriage Documentation
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Applicants must provide a Brazilian marriage certificate (Certidão de Casamento) or registered stable union deed issued or transcribed by a Brazilian Cartório.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-2">
                    Portuguese-Language Requirement
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    The applicant must still demonstrate Portuguese communication capability through certified testing or accepted documentation unless a recognized statutory exception applies.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-2">
                    Previous Marriages &amp; Foreign Divorces
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Civil issues involving previous marriages or overseas divorces may require homologation before the Superior Court of Justice (STJ) or direct cartório transcription.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fdfaf3] border-l-4 border-[#c5a059] mb-6">
                <p className="text-xs font-bold text-[#775a19]">Important:</p>
                <p className="text-xs text-[#44474d]">
                  A marriage certificate alone is not sufficient to obtain Brazilian citizenship. You must hold valid residency and submit a formal naturalization petition to the Ministry of Justice.
                </p>
              </div>

              <button
                onClick={() => onNavigate('services/brazilian-citizenship/one-year-naturalization')}
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                <span>Explore One-Year Naturalization (Marriage &amp; Family)</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. CITIZENSHIP THROUGH A BRAZILIAN CHILD
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-[#f8f9fa] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — CITIZENSHIP THROUGH A BRAZILIAN CHILD
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Can Having a Brazilian Child Help You Become a Citizen?
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-3">
                Foreign parents of Brazilian citizens enjoy significant immigration and expedited naturalization benefits under Brazilian law.
              </p>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                Under Brazilian constitutional jurisprudence and the Migration Law, parents of a Brazilian child have direct pathways to both permanent status and rapid nationality:
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-[#c5c6ce] flex items-start gap-3">
                  <Baby className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                      Residency Through a Brazilian Child
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      A qualifying parent-child relationship provides immediate grounds for permanent residence authorization through family reunification with robust constitutional deportation protections.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#c5c6ce] flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                      Reduced Naturalization Residence Period (1 Year)
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      A foreign parent with a Brazilian child qualifies for a statutory reduction of the ordinary residence requirement to just one uninterrupted year.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#c5c6ce] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                      Statutory Requirements Still Apply
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      The parent must still satisfy Portuguese communication criteria, prove clean criminal records, and maintain continuous presence in Brazil during the one-year qualification window.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#c5c6ce] flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                      Citizenship Is Not Automatic
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      A child’s Brazilian nationality does not automatically extend to their foreign parents. A formal naturalization application must be prepared, filed, and approved.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#44474d] mb-6">
                Our office can assist with evaluating both residence authorization and subsequent naturalization eligibility.
              </p>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Citizenship Through a Brazilian Child</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85"
                  alt="Father holding smiling newborn baby in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    FAMILY UNITY
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Parental Naturalization Expedited Track
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Direct qualification for Brazilian citizenship 12 months after the child's birth registration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. EXTRAORDINARY NATURALIZATION
          ======================================================== */}
      <section id="extraordinary-section" className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=85"
                  alt="Historic Brazilian architectural monument and courthouse"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    15-YEAR CONSTITUTIONAL RULE
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Extraordinary Naturalization
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Constitutional right to Brazilian nationality without language testing requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — EXTRAORDINARY NATURALIZATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Brazilian Citizenship After Fifteen Years of Residence
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-3">
                Extraordinary naturalization is a constitutional pathway for foreign nationals with an extended history of uninterrupted residence in Brazil.
              </p>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                Rooted directly in Article 12, II, "b" of the Federal Constitution, this modality has distinct constitutional conditions:
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                      Residence in Brazil for More Than 15 Uninterrupted Years
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      The applicant must demonstrate continuous residence in Brazilian territory for over 15 continuous years without extended breaks that compromise continuity.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                      Absence of Criminal Convictions
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      The applicant must present comprehensive federal and state judicial clearances certifying the absence of unpardoned criminal convictions.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                      No Portuguese Language Test Mandate
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      Unlike ordinary naturalization, the constitutional text for extraordinary naturalization does not require formal Portuguese proficiency examination certification.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fdfaf3] border-l-4 border-[#c5a059] mb-6">
                <p className="text-xs text-[#44474d] leading-relaxed">
                  <strong>Practical Note:</strong> Applicants should not assume that merely holding an old immigration document or maintaining an inactive address in Brazil is sufficient. The Federal Police will audit continuity of residence and movement history.
                </p>
              </div>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Assess Your Extraordinary Naturalization Eligibility</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. PORTUGUESE-SPEAKING NATIONALS
          ======================================================== */}
      <section id="cplp-section" className="w-full py-16 lg:py-20 bg-[#edeef0] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — PORTUGUESE-SPEAKING NATIONALS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Brazilian Citizenship for Nationals of Portuguese-Speaking Countries
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-3">
                Brazil's Constitution provides specific, streamlined naturalization provisions for nationals originating from Portuguese-speaking countries.
              </p>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                Under Article 12, II, "a" of the Federal Constitution, eligible applicants benefit from a reduced one-year uninterrupted residence requirement, together with moral suitability and clean background clearances:
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#c5c6ce] mb-6">
                <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-2">
                  Qualifying Lusophone Nations (CPLP):
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-medium text-[#0f1e36]">
                  <span className="p-2 bg-[#f8f9fa] rounded text-center border border-[#e2e2e4]">Portugal</span>
                  <span className="p-2 bg-[#f8f9fa] rounded text-center border border-[#e2e2e4]">Angola</span>
                  <span className="p-2 bg-[#f8f9fa] rounded text-center border border-[#e2e2e4]">Mozambique</span>
                  <span className="p-2 bg-[#f8f9fa] rounded text-center border border-[#e2e2e4]">Cape Verde</span>
                  <span className="p-2 bg-[#f8f9fa] rounded text-center border border-[#e2e2e4]">Guinea-Bissau</span>
                  <span className="p-2 bg-[#f8f9fa] rounded text-center border border-[#e2e2e4]">São Tomé &amp; Príncipe</span>
                  <span className="p-2 bg-[#f8f9fa] rounded text-center border border-[#e2e2e4]">Timor-Leste</span>
                  <span className="p-2 bg-[#f8f9fa] rounded text-center border border-[#e2e2e4]">Equatorial Guinea</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#c5c6ce] mb-6">
                <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                  Portuguese Nationals &amp; Equality of Rights (Estatuto de Igualdade)
                </h4>
                <p className="text-xs text-[#44474d] leading-relaxed">
                  Portuguese citizens also benefit from the reciprocal Treaty of Friendship, Collaboration and Representation (Estatuto da Igualdade de Direitos e Deveres), which grants civil and political rights without requiring the renunciation of Portuguese nationality or full naturalization.
                </p>
              </div>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Your Nationality Options</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=85"
                  alt="World map representing transatlantic Portuguese speaking nations"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CPLP FRAMEWORK
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    One-Year Residence Requirement
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Expedited naturalization for Portuguese-speaking citizens and the Portugal-Brazil Equality Statute.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. NATURALIZATION FOR CHILDREN (MINORS)
          ======================================================== */}
      <section id="minors-section" className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=85"
                  alt="Young children studying and laughing in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    MINOR CITIZENSHIP
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Provisional &amp; Definitive Naturalization
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Securing permanent nationality rights for foreign children establishing residence in Brazil.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — NATURALIZATION FOR CHILDREN
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Brazilian Naturalization for Foreign Minors
              </h2>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                Brazilian nationality law provides specific procedures for qualifying foreign children who migrate to Brazil with their families:
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    Provisional Naturalization
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Certain foreign minors who established residence in Brazil before completing ten years of age may qualify for provisional naturalization upon petition submitted through their parents or legal representatives.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    Conversion to Definitive Naturalization
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    A person who obtained provisional naturalization must formally request conversion into definitive naturalization after reaching adulthood (18 years old). The Migration Law establishes a strict statutory deadline for this conversion procedure.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    Why Early Legal Assessment Matters
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Parents must carefully distinguish between the age at which the child established residence in Brazil and the deadlines applicable to the conversion procedure, ensuring status is not compromised.
                  </p>
                </div>
              </div>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Explore Citizenship Options for Your Child</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. SPECIAL NATURALIZATION
          ======================================================== */}
      <section id="special-section" className="w-full py-16 lg:py-20 bg-[#f8f9fa] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — SPECIAL NATURALIZATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Citizenship in Specific Diplomatic and Public-Service Situations
              </h2>
              <p className="text-sm text-[#44474d] leading-relaxed mb-6">
                Brazilian nationality law provides special naturalization pathways for certain individuals with qualifying connections to Brazilian diplomatic or governmental service abroad.
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white border border-[#c5c6ce] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#44474d]">
                    Marriage or stable union for more than 5 years with a qualifying active member of the Brazilian Foreign Service or a person serving the Brazilian State abroad.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#c5c6ce] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#44474d]">
                    Qualifying continuous employment for more than 10 years at Brazilian diplomatic missions or consular representations abroad.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#c5c6ce] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#44474d]">
                    Satisfaction of general civil capacity and absence of unpardoned criminal convictions.
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#44474d] mb-6">
                Special naturalization is not a general alternative to ordinary naturalization; eligibility must be assessed under specific administrative statutory provisions.
              </p>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Request a Special Naturalization Assessment</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=85"
                  alt="Diplomatic embassy and government delegation exterior"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    ITAMARATY &amp; DIPLOMATIC CORPS
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Diplomatic Mission Service Pathways
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Tailored naturalization criteria for foreign spouses and long-tenured consular staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          12. REACQUISITION OF BRAZILIAN NATIONALITY
          ======================================================== */}
      <section id="reacquisition-section" className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?auto=format&fit=crop&w=800&q=85"
                  alt="Brazilian passport and international citizenship documents"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    EC 131/2023 REFORM
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Restoration of Brazilian Nationality
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Streamlined administrative reacquisition for citizens who previously lost their status.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — REACQUISITION OF BRAZILIAN NATIONALITY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Can You Recover Brazilian Citizenship?
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-3">
                Certain individuals who previously lost Brazilian nationality may now be eligible to request administrative reacquisition.
              </p>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                Brazil's constitutional rules on loss and reacquisition of nationality changed dramatically with <strong>Constitutional Amendment No. 131/2023</strong>. Under the updated framework, voluntary acquisition of another nationality no longer triggers automatic loss of Brazilian citizenship:
              </p>

              <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] mb-6 space-y-2">
                <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-2">
                  Cases That May Require Legal Assessment:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#44474d]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19]" />
                    <span>Historical administrative loss decrees</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19]" />
                    <span>Prior naturalization in the United States/Europe</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19]" />
                    <span>Previous voluntary renunciation of citizenship</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19]" />
                    <span>Proof of originary Brazilian civil documents</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#44474d] mb-6">
                Not every historical nationality-loss situation requires the same procedure. At Caspani Lawyers, we assess the relevant legal history and available documentation to identify the appropriate route.
              </p>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Reacquisition of Brazilian Nationality</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          13. DUAL CITIZENSHIP
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-[#edeef0] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — DUAL CITIZENSHIP
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Does Brazil Allow Dual Citizenship?
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-3">
                Yes, Brazil generally permits dual and multiple nationality.
              </p>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                Constitutional Amendment No. 131/2023 removed the previous general rule under which voluntary acquisition of another nationality could lead to forfeiture of Brazilian nationality. Brazil now fully embraces multiple citizenship:
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white border border-[#c5c6ce] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#44474d]">
                    <strong>Recognition in Brazil:</strong> Brazil recognizes a person as Brazilian while they simultaneously hold one or more foreign citizenships.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#c5c6ce] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#44474d]">
                    <strong>No Automatic Renunciation:</strong> Brazil does not require you to surrender your home country's passport upon naturalizing as Brazilian.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#c5c6ce] flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#44474d]">
                    <strong>Country of Origin Rules:</strong> However, the nationality laws of your home country may impose their own restrictions. Before naturalizing, applicants should confirm whether their original country permits dual nationality.
                  </p>
                </div>
              </div>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Dual Citizenship</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85"
                  alt="International passports and corporate traveler"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CROSS-BORDER MOBILITY
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Dual Passport Privileges
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Visa-free travel across South America, MERCOSUR freedom of movement, and global consular protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          14. PORTUGUESE-LANGUAGE REQUIREMENTS
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=85"
                  alt="Books, certificates, and Portuguese language study"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    LANGUAGE COMPLIANCE
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Portuguese Proficiency Standards
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    CELPE-Bras certifications, accredited university degrees, and statutory exemptions.
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
                Do You Need to Speak Portuguese to Become Brazilian?
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-3">
                Portuguese-language communication is an important statutory requirement for ordinary and family-based naturalization.
              </p>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                Applicants must demonstrate the ability to communicate in Portuguese through documentation recognized by the Ministry of Justice:
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    Is CELPE-Bras Mandatory?
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    CELPE-Bras is the official Brazilian Portuguese proficiency examination, but it is <strong>not the only acceptable proof</strong>. Under administrative regulations, foreign nationals may also submit recognized Brazilian university degrees, higher-education diplomas completed in Portuguese, or certificates from accredited language institutions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
                  <h4 className="text-xs font-bold text-[#0f1e36] uppercase tracking-wider mb-1">
                    Are There Exceptions?
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Yes. Nationals originating from Portuguese-speaking countries (CPLP) are presumed to meet the language requirement. Furthermore, applicants qualifying under extraordinary naturalization (15+ years of residence) are constitutionally exempt from language examinations.
                  </p>
                </div>
              </div>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Check Your Portuguese-Language Requirements</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          15. REQUIRED DOCUMENTS
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-[#edeef0] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — REQUIRED DOCUMENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
              Documents Required for Brazilian Citizenship
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              The exact documentation depends on the nationality or naturalization pathway. Review the principal checklist required across most naturalization dockets:
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#c5c6ce] mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e2e2e4]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Valid passport or accepted identity document</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e2e2e4]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Brazilian migration registration card (CRNM / RNM)</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e2e2e4]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Brazilian CPF tax identification number</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e2e2e4]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Foreign birth certificate (apostilled &amp; translated)</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e2e2e4]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Marriage or stable-union documentation, when relevant</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e2e2e4]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Brazilian parent's ID or nationality records (for descent)</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e2e2e4]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Brazilian child's birth certificate, where applicable</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e2e2e4]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Official proof of registered address in Brazil</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e2e2e4]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Federal Police Certidão de Movimentos Migratórios</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e2e2e4]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Brazilian Federal &amp; State criminal clearances</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e2e2e4]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Foreign police clearances from past countries of residence</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e2e2e4]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Portuguese language proficiency certificate (when applicable)</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e2e2e4]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Sworn certified translations (Tradução Juramentada)</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e2e2e4]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">The Hague Apostille certificates on all foreign documents</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e2e2e4]">
                <FileCheck className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0f1e36]">Completed Naturalization Application dockets &amp; declarations</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e2e2e4] text-center">
              <p className="text-xs text-[#44474d] italic mb-4">
                Additional documentation may be necessary for judicial nationality recognition, civil registration corrections, provisional naturalization, or nationality reacquisition. Our office provides a personalized checklist after reviewing the applicant's circumstances.
              </p>
              <div className="inline-block px-4 py-2 bg-[#fdfaf3] border border-[#c5a059]/40 rounded-lg text-xs font-semibold text-[#775a19]">
                Individualized legal advice and document review are provided through a paid consultation or agreed legal representation.
              </div>
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
          16. NATURALIZATION PROCESS (STEP BY STEP)
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — NATURALIZATION PROCESS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
              How to Apply for Brazilian Citizenship – Step by Step
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              We guide you through every stage of the administrative and judicial procedure with direct attorney supervision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: '01',
                title: 'Initial Legal Consultation',
                desc: 'We assess your nationality, family connections, immigration history, residence period, and citizenship objectives.'
              },
              {
                step: '02',
                title: 'Eligibility Assessment',
                desc: 'We identify the appropriate naturalization or nationality recognition pathway and verify travel continuity.'
              },
              {
                step: '03',
                title: 'Document Review',
                desc: 'We evaluate the required civil, immigration, criminal-record, apostilled, and translated documentation.'
              },
              {
                step: '04',
                title: 'Legal Preparation',
                desc: 'We assist with drafting and assembling the official petitions, declarations, and supporting statutory annexes.'
              },
              {
                step: '05',
                title: 'Application Submission',
                desc: 'The application is formally submitted through Naturalizar-se / Federal Police or competent Federal Court.'
              },
              {
                step: '06',
                title: 'Government Review',
                desc: 'The Federal Police and Ministry of Justice examine the docket, conducting background and security checks.'
              },
              {
                step: '07',
                title: 'Decision & Recognition',
                desc: 'The official ministerial decree (Portaria de Naturalização) is published in the Federal Official Gazette (DOU).'
              },
              {
                step: '08',
                title: 'Brazilian Civil Documents & Passport',
                desc: 'After naturalization is published, the applicant obtains their Brazilian RG identity card, voter title, and passport.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#775a19] block mb-1">
                    STEP {item.step}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    {item.desc}
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
              <span>Start Your Brazilian Citizenship Application</span>
              <ArrowRight className="w-4 h-4 text-[#e9c176]" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          17. COMMON CITIZENSHIP COMPLICATIONS
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-[#edeef0] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — COMMON CITIZENSHIP COMPLICATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
              When Your Brazilian Citizenship Application Requires Additional Legal Attention
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              Some nationality cases involve complexities that go beyond a standard document checklist. We provide tailored strategic representation for challenging dockets:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="p-5 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f1e36] mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#c5a059]" />
                Interrupted Residence
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Extended absences abroad or inconsistencies in migratory entries may lead the Federal Police to allege broken continuity, requiring legal justification.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f1e36] mb-2 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#775a19]" />
                Missing Civil Documents
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Foreign birth, marriage, or divorce records from war-torn or non-apostille countries may require consular legalization or judicial restoration.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f1e36] mb-2 flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-[#775a19]" />
                Name Discrepancies
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Differences in maternal surnames, hyphenations, or translated spellings across foreign and Brazilian records require formal cartório rectifications.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f1e36] mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                Criminal Background Issues
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Historical infractions, expunged records, or dismissed charges require individualized legal memorandums demonstrating statutory rehabilitation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f1e36] mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#775a19]" />
                Uncertain Brazilian Parentage
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Descent cases where parental marital status was unrecorded or paternity recognized out-of-court necessitate constitutional evidentiary briefs.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#c5c6ce] shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f1e36] mb-2 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#775a19]" />
                Administrative Delays &amp; Exigências
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                When dockets stall at the Department of Migration or face supplementary document requests, counsel provides direct administrative follow-up.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#hero-consultation-card"
              className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Discuss Your Citizenship Case</span>
              <ArrowRight className="w-4 h-4 text-[#e9c176]" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          18. TAX AND INTERNATIONAL CONSIDERATIONS
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=85"
                  alt="Financial analytics, international tax law, and wealth advisory"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CROSS-BORDER LEGAL PLANNING
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Tax Residency vs. Nationality
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Navigating Receita Federal compliance, offshore assets, and double-taxation treaties.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — TAX AND INTERNATIONAL CONSIDERATIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Brazilian Citizenship and Tax Residency Are Different
              </h2>
              <p className="text-sm font-medium text-[#775a19] mb-3">
                Brazilian nationality and Brazilian tax residency are separate legal concepts under Brazilian law.
              </p>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                Acquiring Brazilian citizenship does not, by itself, necessarily establish Brazilian tax residency. However, living in Brazil and meeting statutory physical presence criteria creates tax obligations regarding:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3 bg-[#f8f9fa] rounded-lg border border-[#e2e2e4] text-xs text-[#0f1e36]">
                  • Worldwide income taxation (Receita Federal)
                </div>
                <div className="p-3 bg-[#f8f9fa] rounded-lg border border-[#e2e2e4] text-xs text-[#0f1e36]">
                  • Foreign-source income and offshore accounts
                </div>
                <div className="p-3 bg-[#f8f9fa] rounded-lg border border-[#e2e2e4] text-xs text-[#0f1e36]">
                  • Central Bank foreign asset declarations (CBE/BACEN)
                </div>
                <div className="p-3 bg-[#f8f9fa] rounded-lg border border-[#e2e2e4] text-xs text-[#0f1e36]">
                  • Bilateral double taxation treaties
                </div>
                <div className="p-3 bg-[#f8f9fa] rounded-lg border border-[#e2e2e4] text-xs text-[#0f1e36]">
                  • International estate and succession planning
                </div>
                <div className="p-3 bg-[#f8f9fa] rounded-lg border border-[#e2e2e4] text-xs text-[#0f1e36]">
                  • Cross-border business structuring &amp; dividends
                </div>
              </div>

              <p className="text-xs text-[#44474d] mb-6">
                Applicants should evaluate the potential tax implications of their residence and personal circumstances independently from the nationality application. Where necessary, specialized tax advice should be coordinated with the nationality strategy.
              </p>

              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Your International Legal Planning</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          19. OUR LEGAL SERVICES
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-[#edeef0] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — OUR LEGAL SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
              How Caspani Lawyers Can Help You Obtain Brazilian Citizenship
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              We provide full-spectrum nationality representation across administrative and federal judicial procedures:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {[
              {
                title: 'Nationality Eligibility Assessment',
                desc: 'We evaluate the legal basis for your potential Brazilian nationality claim under constitutional rules.'
              },
              {
                title: 'Ordinary & Extraordinary Naturalization',
                desc: 'We assist qualifying foreign residents with compiling and filing complete naturalization dockets.'
              },
              {
                title: 'Family-Based Naturalization',
                desc: 'We advise eligible spouses, partners, and parents of Brazilian citizens qualifying for the 1-year track.'
              },
              {
                title: 'Citizenship by Descent',
                desc: 'We assist with assessing nationality rights involving Brazilian parents and foreign birth records.'
              },
              {
                title: 'Judicial Nationality Procedures',
                desc: 'Where appropriate, we provide assistance with legal proceedings involving nationality recognition or option before Federal Courts.'
              },
              {
                title: 'Naturalization for Minors',
                desc: 'We assist with evaluating provisional naturalization and definitive conversion procedures.'
              },
              {
                title: 'Nationality Reacquisition',
                desc: 'We assess cases involving previous loss of Brazilian nationality under Constitutional Amendment 131/2023.'
              },
              {
                title: 'Civil Documentation & Corrections',
                desc: 'We identify civil registration discrepancies and handle cartório rectifications and transcriptions.'
              },
              {
                title: 'Administrative Applications & Follow-Up',
                desc: 'We assist with the agreed application process, Federal Police scheduling, and addressing official exigências.'
              },
              {
                title: 'Immigration & Residence Planning',
                desc: 'We help foreign nationals understand initial residence pathways that support future naturalization eligibility.'
              }
            ].map((srv, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-[#c5c6ce] shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-xs font-bold text-[#0f1e36] mb-2 leading-snug">
                    {srv.title}
                  </h4>
                  <p className="text-[11px] text-[#44474d] leading-relaxed">
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
          20. WHY CHOOSE CASPANI LAWYERS?
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — WHY CHOOSE CASPANI LAWYERS?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
              Personalized Legal Guidance for Brazilian Nationality Matters
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              We combine in-depth constitutional knowledge with personalized client advocacy:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Licensed Brazilian Attorney
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Receive direct legal assistance from an attorney officially registered with the Brazilian Bar Association (OAB/PR 58.420).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Flag className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Nationality &amp; Immigration
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Comprehensive guidance connecting initial residency permits with eventual constitutional naturalization.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Individual Legal Strategy
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We assess each applicant’s residence continuity, civil documentation, and family history individually.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <UserCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Direct Attorney Communication
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Communicate directly with your lawyer and receive clear explanations of applicable procedures without middlemen.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Globe2 className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Assistance From Brazil or Abroad
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Our services are accessible to international clients worldwide and expatriates already settled across Brazil.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Multilingual Communication
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Consultations and correspondence in English, Portuguese, and Spanish tailored to international clients.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Confidential Consultations
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                All personal records and sensitive family data are guarded under statutory attorney-client privilege.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4]">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                Transparent Engagement
              </h4>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Clear scopes of representation, defined deliverables, and transparent professional fees before engagement.
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
          21. FREQUENTLY ASKED QUESTIONS (22 FAQS)
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-[#edeef0] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
              Brazilian Citizenship – FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              Find clear answers to 22 essential questions regarding Brazilian naturalization, descent claims, and nationality procedures.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-[#c5c6ce] shadow-sm overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#f8f9fa] transition-colors"
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
                    <div className="px-5 pb-4 pt-1 text-xs text-[#44474d] leading-relaxed border-t border-[#f0f0f2] bg-[#fdfdfd]">
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
          22. FINAL SECTION: IMAGE 3 ON LEFT, RESERVATION FORM ON RIGHT
          ======================================================== */}
      <section className="w-full bg-[#edeef0] py-16 lg:py-24 border-t border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — READY TO EXPLORE YOUR BRAZILIAN CITIZENSHIP OPTIONS?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Your Connection to Brazil. Your Nationality. Our Legal Guidance.
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto mb-4">
              Brazilian citizenship may be available through different legal pathways, from residence-based naturalization to nationality acquired by descent. At Caspani Lawyers, we help international clients understand their eligibility, prepare documentation, and navigate the appropriate legal procedures.
            </p>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Whether you have lived in Brazil for years, have Brazilian family members, or believe you may already be Brazilian by birth, we provide personalized legal guidance tailored to your circumstances.
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
                    BRAZILIAN NATIONALITY DESK
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    Direct Legal Counsel in Brazil
                  </h3>
                  <p className="text-xs text-[#edeef0] leading-relaxed">
                    Personalized legal evaluation by licensed Brazilian constitutional and nationality counsel within 24 business hours.
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
                id="citizenship-bottom-reservation-form"
                title="Schedule Citizenship Consultation"
                subtitle="Confidential review by licensed Brazilian nationality counsel within 24 hours"
                presetService="Brazilian Citizenship"
              />
            </div>
          </div>

          {/* Legal Practice Footer & Disclaimer */}
          <div className="max-w-3xl mx-auto text-center border-t border-[#c5c6ce] pt-6 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0f1e36]">
              CASPANI LAWYERS • ADVOCACIA INTERNACIONAL
            </p>
            <p className="text-[11px] text-[#775a19] font-medium">
              Brazilian Citizenship | Naturalization | Citizenship by Descent | Dual Nationality | Cross-Border Law
            </p>
            <p className="text-[11px] text-[#75777e] leading-relaxed">
              <strong>Legal Disclaimer:</strong> This page provides general legal information and does not constitute individualized legal advice. Citizenship eligibility, residence calculations, document compliance, and official processing times depend on the applicable statutory naturalization category, government background checks, and ministerial discretion. Brazilian nationality approval cannot be guaranteed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
