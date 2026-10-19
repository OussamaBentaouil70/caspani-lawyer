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
  FileText,
  HelpCircle,
  TrendingUp,
  Calendar,
  BookOpen,
  Briefcase,
  Plane,
  Stamp,
  BadgeCheck,
  Compass
} from 'lucide-react';

interface OrdinaryNaturalizationPageProps {
  onNavigate: (route: string) => void;
}

export const OrdinaryNaturalizationPage: React.FC<OrdinaryNaturalizationPageProps> = ({ onNavigate }) => {
  // Sync document title and meta description
  useEffect(() => {
    document.title = 'Brazil Ordinary Naturalization – 4-Year Residency Route to Citizenship | Caspani Lawyers';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Comprehensive legal counsel for foreign residents applying for ordinary naturalization in Brazil after four years of residence under Article 65 of Law 13,445/2017. OAB/PR 58.420.'
      );
    }
  }, []);

  // Hero form state ("Lform 3la liman")
  const [heroForm, setHeroForm] = useState({
    fullName: '',
    email: '',
    countryCode: '+55',
    phone: '',
    currentStatus: 'Permanent Resident (CRNM/RNM)',
    yearsInBrazil: '4+ Years (Eligible for Naturalization)',
    portugueseLevel: 'CELPE-Bras Passed / Certified',
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
      `Hello Caspani Lawyers, my name is ${heroForm.fullName || 'Client'}. I am inquiring about Ordinary Naturalization in Brazil (4-Year Route).\nStatus: ${heroForm.currentStatus}\nResidency Tenure: ${heroForm.yearsInBrazil}\nPortuguese Level: ${heroForm.portugueseLevel}\nPhone: ${heroForm.countryCode} ${heroForm.phone}\nEmail: ${heroForm.email}\nDetails: ${heroForm.message}`
    );
    window.open(`https://wa.me/5541998247700?text=${text}`, '_blank');
  };

  const faqs = [
    {
      question: '1. What is ordinary naturalization under Brazilian law?',
      answer:
        'Ordinary naturalization (Naturalização Ordinária) is the standard legal process governed by Article 65 of the Migration Law (Law No. 13,445/2017) and Decree No. 9,199/2017, by which a foreign national who has held continuous legal residence in Brazil for at least four years, possesses civil capacity, communicates in Portuguese, and demonstrates a clean criminal record can acquire full Brazilian citizenship.'
    },
    {
      question: '2. How long must I live in Brazil before applying for ordinary naturalization?',
      answer:
        'The general statutory rule is a minimum of four (4) years of continuous, lawful residence in Brazilian territory. This period is calculated from the date of your formal registration as a resident with the Federal Police (CRNM/RNM). This timeframe may be legally reduced to one or two years if you meet specific statutory reduction criteria.'
    },
    {
      question: '3. Can the four-year residence requirement be shortened?',
      answer:
        'Yes. Article 66 of Law No. 13,445/2017 provides reductions: down to one (1) year if you have a Brazilian child, are married to or in a recognized stable union with a Brazilian citizen, or are a national of a Portuguese-speaking country (CPLP); or down to two (2) years if you have provided relevant service to Brazil or have recognized scientific, artistic, or professional excellence.'
    },
    {
      question: '4. How much time can I spend outside Brazil during the four qualifying years?',
      answer:
        'Under administrative regulations governing naturalization, your absences from Brazilian territory cannot exceed twelve (12) cumulative months during the four-year qualifying period. Furthermore, absences should not demonstrate an intention to abandon your Brazilian permanent domicile. The Federal Police audits your exact entry and exit movements via the official Certidão de Movimentos Migratórios.'
    },
    {
      question: '5. Does temporary residence count toward the four-year requirement?',
      answer:
        'Generally, the applicant must hold indeterminate (permanent) residence at the time of petitioning for ordinary naturalization. However, certain temporary residence tenures (such as specific work authorizations or Mercosur temporary residence) may be converted and credited toward the total residency tally once converted into permanent status, provided there was no gap in lawful status.'
    },
    {
      question: '6. Is Portuguese language proficiency mandatory for ordinary naturalization?',
      answer:
        'Yes. Demonstrating the ability to communicate in the Portuguese language is an express statutory requirement under Article 65, III of Law No. 13,445/2017. Unlike extraordinary naturalization (15-year rule), ordinary naturalization strictly requires verifiable proof of language proficiency.'
    },
    {
      question: '7. What certificates prove Portuguese language proficiency?',
      answer:
        'Acceptable proofs include: the CELPE-Bras certificate (Intermediário level or higher) administered by INEP; a diploma from an accredited Brazilian primary, secondary, or higher education institution; completion of an approved university-level Portuguese course; or an approved assessment by an accredited language institute.'
    },
    {
      question: '8. Can I keep my original citizenship when I become a Brazilian citizen?',
      answer:
        'Yes. Brazil fully permits dual and multiple citizenship. Under Constitutional Amendment No. 131/2023, the voluntary acquisition of another nationality no longer triggers automatic loss of Brazilian citizenship, and Brazil does not require you to renounce your foreign nationality upon naturalizing. However, you should independently verify whether your country of origin permits dual citizenship.'
    },
    {
      question: '9. Do I need to show proof of income or employment in Brazil?',
      answer:
        'Yes. Applicants must demonstrate financial self-sufficiency or capacity for economic livelihood (capacidade de subsistência) under Article 65 of the Migration Law. This is typically established through Brazilian Federal Income Tax Returns (DIRPF), formal employment pay stubs (holerites), corporate dividend distributions, commercial contracts, or verifiable investment income.'
    },
    {
      question: '10. What criminal background checks are required for naturalization?',
      answer:
        'You must submit negative criminal certificates (Certidões Negativas de Antecedentes Criminais) from the Federal Police, Federal Justice, State Justice courts in all Brazilian states where you have resided over the preceding five years, and police clearances from countries where you resided prior to arriving in Brazil (duly apostilled/legalized and translated by a certified Brazilian sworn translator).'
    },
    {
      question: '11. How long does the Ministry of Justice take to decide a naturalization petition?',
      answer:
        'Once filed electronically via the federal Naturalomar portal and authenticated at your local Federal Police superintendency, processing typically ranges between 8 and 18 months, depending on administrative volume at the Departamento de Migrações (DEMIG) in Brasília and whether any official demands (exigências) are issued.'
    },
    {
      question: '12. Can an ordinary naturalization petition be rejected?',
      answer:
        'Yes. Petitions are rejected if the applicant has unexcused travel absences exceeding 12 months, unresolved criminal or judicial investigations, tax irregularities, unverified Portuguese proficiency, or insufficient proof of continuous residence. Engaging experienced legal counsel ensures your docket is pre-audited to avoid costly denials.'
    },
    {
      question: '13. What happens once my naturalization is approved?',
      answer:
        'The Ministry of Justice publishes the naturalization decree (Portaria de Naturalização) in the Diário Oficial da União (DOU). With this official publication, you are legally a Brazilian citizen. You then register your Brazilian civil birth certificate (traslado da certidão), obtain your Electoral Card (Título de Eleitor), update your CPF to citizen status, and apply for your Brazilian biometric passport.'
    },
    {
      question: '14. Will my children automatically become Brazilian citizens if I naturalize?',
      answer:
        'Minor children residing in Brazil do not automatically acquire citizenship through your naturalization, but they become eligible for provisional naturalization (Naturalização Provisória), which can be converted into definitive citizenship once they reach legal age of majority (18 years).'
    },
    {
      question: '15. Are there tax consequences to becoming a Brazilian citizen?',
      answer:
        'In Brazil, tax liability is determined by tax residency (domicílio fiscal), not nationality. Since you already hold permanent resident status in Brazil for four years, you are most likely already considered a Brazilian tax resident. Becoming a citizen does not alter this regime, but international wealth planning should be reviewed.'
    },
    {
      question: '16. How does Caspani Lawyers assist with ordinary naturalization?',
      answer:
        'Our legal office manages the entire naturalization lifecycle: auditing your travel history and physical presence, assembling and legalizing foreign records, verifying Brazilian tax compliance and court clearances, coordinating Portuguese certification, drafting legal petitions, filing on the federal portal, accompanying Federal Police interviews, and monitoring ministerial gazettes until your Brazilian passport is issued.'
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] text-[#1a1c1d] min-h-screen">
      {/* ========================================================
          1. HERO SECTION (Lform 3la liman)
          ======================================================== */}
      <section className="relative bg-[#0f1e36] text-white overflow-hidden py-14 lg:py-20 border-b border-[#e9c176]/30">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=85"
            alt="Brazilian capital federal architecture and Esplanada dos Ministérios"
            className="w-full h-full object-cover opacity-20 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1526] via-[#0f1e36]/90 to-[#0b1526]/80" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#e9c176] font-bold mb-6">
            <button
              onClick={() => onNavigate('services')}
              className="hover:underline cursor-pointer"
            >
              SERVICES
            </button>
            <span>&gt;</span>
            <button
              onClick={() => onNavigate('services/brazilian-citizenship')}
              className="hover:underline cursor-pointer"
            >
              BRAZILIAN CITIZENSHIP
            </button>
            <span>&gt;</span>
            <span className="text-white">ORDINARY NATURALIZATION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Headline, Copy, Credentials */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e9c176]/10 border border-[#e9c176]/30 text-[#e9c176] text-xs font-bold tracking-wide w-fit mb-5">
                <Scale className="w-3.5 h-3.5" />
                <span>Article 65, Law No. 13,445/2017 – Naturalização Ordinária</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
                Brazil Ordinary Naturalization – The Four-Year Residency Route to Citizenship
              </h1>

              <p className="text-lg sm:text-xl text-[#e9c176] font-medium mb-5">
                Turn your Brazilian permanent residency into definitive citizenship, voting rights, and a world-class passport.
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#d1d5db] leading-relaxed mb-8">
                <p>
                  Have you been living lawfully in Brazil as a permanent resident? Under Brazilian nationality and immigration law, foreign nationals who have maintained continuous legal residence in Brazil for at least <strong className="text-white">four (4) continuous years</strong> may apply for ordinary naturalization.
                </p>
                <p>
                  At <strong className="text-white">Caspani Lawyers</strong>, we deliver structured, end-to-end legal counsel for foreign residents seeking Brazilian citizenship—from conducting detailed travel absence audits and validating tax standing to Portuguese language certification, background clearance collation, and formal ministerial representation before the Federal Police and the Ministry of Justice in Brasília.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href="#hero-consultation-card"
                  className="inline-flex items-center gap-2 bg-[#775a19] hover:bg-[#8f6d1f] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
                >
                  <Lock className="w-4 h-4 text-[#e9c176]" />
                  <span>Book Your Legal Consultation</span>
                </a>
                <a
                  href="#eligibility-requirements"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Explore 4-Year Requirements</span>
                  <ArrowRight className="w-4 h-4 text-[#e9c176]" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#e9c176] shrink-0" />
                  <span className="text-xs font-semibold text-white/90">OAB/PR 58.420</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#e9c176] shrink-0" />
                  <span className="text-xs font-semibold text-white/90">Nationality Law</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-[#e9c176] shrink-0" />
                  <span className="text-xs font-semibold text-white/90">Multilingual</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#e9c176] shrink-0" />
                  <span className="text-xs font-semibold text-white/90">100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Intake Form ("Lform 3la liman") */}
            <div id="hero-consultation-card" className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-[#e9c176]/40 text-[#1a1c1d]">
                <div className="flex items-center justify-between pb-4 border-b border-[#e2e2e4] mb-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#775a19] block">
                      CONFIDENTIAL CITIZENSHIP INTAKE
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#0f1e36]">
                      Check Your Naturalization Eligibility
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#0f1e36] text-[#e9c176] flex items-center justify-center shrink-0">
                    <Scale className="w-5 h-5" />
                  </div>
                </div>

                {heroSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-[#0f1e36]">
                      Consultation Request Received
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      Thank you, <strong className="text-[#0f1e36]">{heroForm.fullName}</strong>. Our Brazilian immigration and nationality practice will review your 4-year residency profile and contact you within one business day.
                    </p>
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Connect Instantly on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setHeroSubmitted(false)}
                      className="text-xs text-[#775a19] hover:underline block mx-auto pt-2"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-[#2D3142] uppercase tracking-wide mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={heroForm.fullName}
                        onChange={(e) => setHeroForm({ ...heroForm, fullName: e.target.value })}
                        placeholder="As shown on your passport / RNM"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] text-xs focus:ring-2 focus:ring-[#775a19] focus:border-[#775a19] outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-[#2D3142] uppercase tracking-wide mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={heroForm.email}
                          onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] text-xs focus:ring-2 focus:ring-[#775a19] focus:border-[#775a19] outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-[#2D3142] uppercase tracking-wide mb-1">
                          Phone / WhatsApp *
                        </label>
                        <div className="flex gap-1.5">
                          <input
                            type="text"
                            value={heroForm.countryCode}
                            onChange={(e) => setHeroForm({ ...heroForm, countryCode: e.target.value })}
                            className="w-16 px-2 py-2.5 rounded-lg border border-[#c5c6ce] text-xs text-center font-mono"
                          />
                          <input
                            type="tel"
                            required
                            value={heroForm.phone}
                            onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                            placeholder="Phone number"
                            className="w-full px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] text-xs focus:ring-2 focus:ring-[#775a19] focus:border-[#775a19] outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-[#2D3142] uppercase tracking-wide mb-1">
                          Current Residency Status *
                        </label>
                        <select
                          value={heroForm.currentStatus}
                          onChange={(e) => setHeroForm({ ...heroForm, currentStatus: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] text-xs bg-white focus:ring-2 focus:ring-[#775a19] outline-none"
                        >
                          <option>Permanent Resident (CRNM/RNM)</option>
                          <option>Temporary Visa Holder (VITEM V / XI)</option>
                          <option>Mercosur Agreement Residency</option>
                          <option>Digital Nomad / Investor Visa</option>
                          <option>Other / Unsure of exact status</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#2D3142] uppercase tracking-wide mb-1">
                          Years Lived in Brazil *
                        </label>
                        <select
                          value={heroForm.yearsInBrazil}
                          onChange={(e) => setHeroForm({ ...heroForm, yearsInBrazil: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] text-xs bg-white focus:ring-2 focus:ring-[#775a19] outline-none"
                        >
                          <option>4+ Years (Eligible for Naturalization)</option>
                          <option>3 to 4 Years (Planning ahead)</option>
                          <option>1 to 3 Years (Reviewing reductions)</option>
                          <option>15+ Years (Extraordinary route)</option>
                          <option>Less than 1 Year</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#2D3142] uppercase tracking-wide mb-1">
                        Portuguese Language Proficiency *
                      </label>
                      <select
                        value={heroForm.portugueseLevel}
                        onChange={(e) => setHeroForm({ ...heroForm, portugueseLevel: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] text-xs bg-white focus:ring-2 focus:ring-[#775a19] outline-none"
                      >
                        <option>CELPE-Bras Passed / Certified</option>
                        <option>Fluent / Conversational (Need test)</option>
                        <option>Intermediate (Studying for exam)</option>
                        <option>Beginner (Need study plan)</option>
                        <option>Brazilian University Degree Holder</option>
                        <option>Native Speaker (CPLP / Portugal)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#2D3142] uppercase tracking-wide mb-1">
                        Your Background &amp; Timeline Details
                      </label>
                      <textarea
                        rows={2}
                        value={heroForm.message}
                        onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                        placeholder="Mention any extended trips outside Brazil, marital status, or citizenship timeline goals..."
                        className="w-full px-3.5 py-2 rounded-lg border border-[#c5c6ce] text-xs focus:ring-2 focus:ring-[#775a19] focus:border-[#775a19] outline-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0f1e36] hover:bg-[#1a2d4f] text-white py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer mt-1"
                    >
                      <Scale className="w-4 h-4 text-[#e9c176]" />
                      <span>Schedule My Legal Consultation</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[10px] text-[#75777e] pt-1">
                      <Lock className="w-3 h-3 text-[#775a19]" />
                      <span>Online paid consultations. Attorney-client confidentiality guaranteed.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. STATUTORY OVERVIEW: WHAT IS ORDINARY NATURALIZATION?
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=85"
                  alt="Brazilian Federal Supreme Court and legal sovereignty in Brasília"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-[#0f1e36]/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    SOVEREIGN NATIONALITY REGIME
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Article 65 of Law No. 13,445/2017
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    The legal codification granting foreign permanent residents the constitutional right to naturalize.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1efe7] text-[#775a19] text-xs font-bold mb-4">
                <Compass className="w-3.5 h-3.5" />
                <span>LEGAL FRAMEWORK</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f1e36] tracking-tight mb-4">
                What Is Ordinary Naturalization in Brazil?
              </h2>

              <p className="text-sm sm:text-base text-[#44474d] leading-relaxed mb-4">
                Ordinary naturalization (<em>Naturalização Ordinária</em>) is the foundational path under Brazilian nationality law that allows foreign citizens to transition from permanent residency status to full, irrevocable Brazilian citizenship.
              </p>

              <p className="text-sm text-[#44474d] leading-relaxed mb-6">
                Unlike countries with restrictive citizenship laws or discretionary quotas, Brazil grants citizenship based on transparent statutory benchmarks established in <strong className="text-[#0f1e36]">Article 65 of Law No. 13,445/2017</strong> (the Brazilian Migration Law) and regulated by <strong className="text-[#0f1e36]">Decree No. 9,199/2017</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#f8f9fa] rounded-xl p-4 border border-[#e2e2e4]">
                  <div className="flex items-center gap-2 mb-2 text-[#775a19]">
                    <Clock className="w-4 h-4" />
                    <h4 className="font-serif text-sm font-bold text-[#0f1e36]">
                      4 Years Continuous Residence
                    </h4>
                  </div>
                  <p className="text-xs text-[#5f6368] leading-relaxed">
                    Uninterrupted domicile in Brazil as a registered permanent resident with strict limits on international absences.
                  </p>
                </div>

                <div className="bg-[#f8f9fa] rounded-xl p-4 border border-[#e2e2e4]">
                  <div className="flex items-center gap-2 mb-2 text-[#775a19]">
                    <BookOpen className="w-4 h-4" />
                    <h4 className="font-serif text-sm font-bold text-[#0f1e36]">
                      Portuguese Communication
                    </h4>
                  </div>
                  <p className="text-xs text-[#5f6368] leading-relaxed">
                    Demonstrated ability to read, write, and converse in Portuguese via CELPE-Bras or recognized academic diplomas.
                  </p>
                </div>

                <div className="bg-[#f8f9fa] rounded-xl p-4 border border-[#e2e2e4]">
                  <div className="flex items-center gap-2 mb-2 text-[#775a19]">
                    <ShieldCheck className="w-4 h-4" />
                    <h4 className="font-serif text-sm font-bold text-[#0f1e36]">
                      Clean Criminal Record
                    </h4>
                  </div>
                  <p className="text-xs text-[#5f6368] leading-relaxed">
                    Absence of unpardoned criminal convictions or certified legal rehabilitation under Brazilian and foreign law.
                  </p>
                </div>

                <div className="bg-[#f8f9fa] rounded-xl p-4 border border-[#e2e2e4]">
                  <div className="flex items-center gap-2 mb-2 text-[#775a19]">
                    <Briefcase className="w-4 h-4" />
                    <h4 className="font-serif text-sm font-bold text-[#0f1e36]">
                      Economic Livelihood
                    </h4>
                  </div>
                  <p className="text-xs text-[#5f6368] leading-relaxed">
                    Proof of financial self-sufficiency or legitimate means of livelihood through employment, business, or assets.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0f1e36]/5 border border-[#0f1e36]/15 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                <p className="text-xs text-[#44474d] leading-relaxed">
                  <strong className="text-[#0f1e36]">Continuous Residence vs. Holding a Card:</strong> Simply having a valid CRNM for four years is insufficient. The Federal Police audits physical days inside Brazil using automated immigration border logs. Excessive travel outside Brazil can reset or invalidate your qualification period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. DETAILED ELIGIBILITY REQUIREMENTS (WHO QUALIFIES?)
          ======================================================== */}
      <section id="eligibility-requirements" className="w-full py-16 lg:py-20 bg-[#f8f9fa] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1efe7] text-[#775a19] text-xs font-bold mb-3">
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>STATUTORY CRITERIA</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f1e36] tracking-tight mb-4">
              Who Qualifies for Ordinary Naturalization in Brazil?
            </h2>
            <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
              Every naturalization petition undergoes rigorous scrutiny by the Federal Police and the Ministry of Justice. Applicants must satisfy five cumulative statutory conditions under Brazilian law.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Condition 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#c5c6ce] hover:border-[#775a19] transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Civil Capacity
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Under Article 65, I of the Migration Law, the applicant must possess full civil capacity under Brazilian civil law (generally meaning at least 18 years of age and not subject to legal interdiction or incapacity).
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#775a19] pt-3 border-t border-[#f0f0f2] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Civil Code Compliance</span>
              </div>
            </div>

            {/* Condition 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#c5c6ce] hover:border-[#775a19] transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  4-Year Continuous Residence
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  The applicant must maintain registered residence in Brazil for an uninterrupted period of at least four years. The period is counted from the date of initial registration as a resident, verified through Federal Police migratory records.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#775a19] pt-3 border-t border-[#f0f0f2] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Audited Continuous Presence</span>
              </div>
            </div>

            {/* Condition 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#c5c6ce] hover:border-[#775a19] transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Portuguese Communication
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  Applicants must prove their ability to communicate in Portuguese. Acceptable credentials include the official CELPE-Bras certificate, accredited Brazilian diplomas, or certified Portuguese language coursework.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#775a19] pt-3 border-t border-[#f0f0f2] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>CELPE-Bras or Diploma</span>
              </div>
            </div>

            {/* Condition 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#c5c6ce] hover:border-[#775a19] transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-4">
                  04
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  No Criminal Convictions
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  The applicant must not have an unpardoned criminal conviction or must have obtained full rehabilitation under Brazilian law. Clearances must be secured from Federal, State, and overseas jurisdictions.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#775a19] pt-3 border-t border-[#f0f0f2] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Certidões Negativas Clearances</span>
              </div>
            </div>

            {/* Condition 5 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#c5c6ce] hover:border-[#775a19] transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-sm mb-4">
                  05
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
                  Economic Self-Sufficiency
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  The applicant must substantiate sufficient financial resources to maintain themselves and their dependents in Brazil, documented via Brazilian tax returns (DIRPF), formal employment, or commercial dividends.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#775a19] pt-3 border-t border-[#f0f0f2] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Tax &amp; Income Compliance</span>
              </div>
            </div>

            {/* Condition 6: Statutory Reductions */}
            <div className="bg-[#0f1e36] text-white rounded-xl p-6 shadow-md border border-[#e9c176]/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#e9c176] text-[#0f1e36] flex items-center justify-center font-bold text-sm mb-4">
                  ★
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  Qualify for a Reduction?
                </h3>
                <p className="text-xs text-[#edeef0] leading-relaxed mb-4">
                  Article 66 reduces the 4-year period to 1 year if you are married to a Brazilian, have a Brazilian child, or come from a Portuguese-speaking country; or to 2 years for recognized professional/scientific contributions.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services/brazilian-citizenship/one-year-naturalization')}
                className="text-xs font-bold text-[#e9c176] hover:underline pt-3 border-t border-white/20 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Explore 1-Year Fast-Track</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Banner with image */}
          <div className="rounded-2xl overflow-hidden bg-white border border-[#c5c6ce] shadow-md grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 h-64 lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=85"
                alt="Professional team reviewing legal dossiers in Brazil"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#775a19] block mb-2">
                EXPERT LEGAL VERIFICATION
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0f1e36] mb-3">
                Unsure if You Have Completed the 4-Year Requirement?
              </h3>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                Calculating exact eligibility involves reviewing every international departure, calculating travel absences, verifying tax filings, and matching registration records. Our immigration lawyers conduct a confidential pre-filing audit.
              </p>
              <a
                href="#hero-consultation-card"
                className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Request a Residency Audit</span>
                <ArrowRight className="w-4 h-4 text-[#e9c176]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. TRAVEL ABSENCES & THE RESIDENCY CONTINUITY TEST
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1efe7] text-[#775a19] text-xs font-bold mb-4">
                <Plane className="w-3.5 h-3.5" />
                <span>TRAVEL CONTINUITY AUDIT</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f1e36] tracking-tight mb-4">
                Travel Absences &amp; The 4-Year Continuity Test
              </h2>

              <p className="text-sm sm:text-base text-[#44474d] leading-relaxed mb-4">
                The most frequent reason ordinary naturalization applications are questioned or rejected is <strong className="text-[#0f1e36]">excessive international travel during the qualifying period</strong>.
              </p>

              <p className="text-sm text-[#44474d] leading-relaxed mb-6">
                Under Brazilian administrative practice and Ministry of Justice guidelines, residence must be genuine and continuous. While foreign residents are free to travel abroad for vacations, business, and family visits, there are strict cumulative thresholds:
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                      The 12-Month Aggregate Absence Ceiling
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      Total cumulative time spent outside Brazil must not exceed twelve (12) months across the entire four-year qualifying period. Any time beyond this limit may interrupt continuity and require you to accumulate additional residence.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                      Certidão de Movimentos Migratórios
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      The Federal Police generates an internal travel movement certificate that records every entry and exit through Brazilian maritime, aerial, and land borders. Every single departure is counted down to the day.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e2e2e4] flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                      Habitual Domicile &amp; Intent to Return
                    </h4>
                    <p className="text-xs text-[#44474d] leading-relaxed">
                      Even if total travel remains under 12 months, prolonged single trips (such as being away for 6+ consecutive months) can trigger inquiries regarding whether you abandoned Brazilian tax domicile or permanent residence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#hero-consultation-card"
                  className="inline-flex items-center gap-2 bg-[#775a19] hover:bg-[#8f6d1f] text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Audit Your Travel Record</span>
                  <ArrowRight className="w-4 h-4 text-[#e9c176]" />
                </a>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85"
                  alt="International passport and travel documents on desk"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-[#0f1e36]/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    BORDER COMPLIANCE
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Federal Police Travel Logs
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Every exit and entry is audited against statutory presence rules before naturalization approval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. PORTUGUESE LANGUAGE REQUIREMENT & CELPE-BRAS
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-[#f8f9fa] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=85"
                  alt="Student preparing for Portuguese language proficiency certification"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-[#0f1e36]/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    LANGUAGE COMPLIANCE
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    CELPE-Bras &amp; Academic Diplomas
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Official proof of ability to communicate in the Portuguese language is mandatory for ordinary naturalization.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Options */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1efe7] text-[#775a19] text-xs font-bold mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                <span>COMMUNICATION PROFICIENCY</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f1e36] tracking-tight mb-4">
                The Portuguese Language Requirement
              </h2>

              <p className="text-sm sm:text-base text-[#44474d] leading-relaxed mb-4">
                Article 65, III of Law No. 13,445/2017 establishes that an applicant for ordinary naturalization must demonstrate <strong className="text-[#0f1e36]">the ability to communicate in the Portuguese language</strong>, taking into account the conditions of the person naturalizing.
              </p>

              <p className="text-sm text-[#44474d] leading-relaxed mb-6">
                Decree No. 9,199/2017 and administrative rulings define specific mechanisms through which language proficiency may be legally evidenced:
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="bg-white p-4 rounded-xl border border-[#c5c6ce] shadow-sm">
                  <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#775a19]" />
                    <span>CELPE-Bras Certificate (Intermediário or Above)</span>
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    The Certificado de Proficiência em Língua Portuguesa para Estrangeiros (CELPE-Bras), administered by INEP/MEC, is the gold standard government credential recognized across all federal ministries.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#c5c6ce] shadow-sm">
                  <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#775a19]" />
                    <span>Brazilian Academic Degree or Secondary Diploma</span>
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Completion of undergraduate, master’s, or doctoral programs at a Brazilian higher education institution accredited by the Ministry of Education (MEC), or completion of Brazilian primary/secondary education.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#c5c6ce] shadow-sm">
                  <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#775a19]" />
                    <span>Accredited Higher Education Portuguese Course</span>
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Certificates from recognized university extension courses in Portuguese for foreigners that satisfy minimum hourly duration and curriculum criteria defined in federal portarias.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#c5c6ce] shadow-sm">
                  <h4 className="font-serif text-sm font-bold text-[#0f1e36] mb-1 flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-[#775a19]" />
                    <span>CPLP Lusophone Exemption</span>
                  </h4>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Citizens of Portuguese-speaking countries (Portugal, Angola, Mozambique, Cabo Verde, São Tomé and Príncipe, Guinea-Bissau, and Timor-Leste) benefit from simplified language recognition based on native language status.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#hero-consultation-card"
                  className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Verify Your Language Evidence</span>
                  <ArrowRight className="w-4 h-4 text-[#e9c176]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. STEP-BY-STEP ORDINARY NATURALIZATION PROCESS
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1efe7] text-[#775a19] text-xs font-bold mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>THE NATURALIZATION ROADMAP</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f1e36] tracking-tight mb-4">
              Step-by-Step Naturalization Process
            </h2>
            <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
              Applying for Brazilian citizenship is a formal legal procedure that transitions from municipal police superintendencies to the Ministry of Justice in Brasília.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Step 1 */}
            <div className="bg-[#f8f9fa] rounded-xl p-6 border border-[#c5c6ce] relative hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#0f1e36] text-[#e9c176] font-bold text-xs flex items-center justify-center">
                  01
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19]">
                  Phase 1
                </span>
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                Residency &amp; Travel Audit
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Review of your four-year stay history, calculating international trips, confirming uninterrupted status, verifying tax declarations (DIRPF), and obtaining state/federal police certidões.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#f8f9fa] rounded-xl p-6 border border-[#c5c6ce] relative hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#0f1e36] text-[#e9c176] font-bold text-xs flex items-center justify-center">
                  02
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19]">
                  Phase 2
                </span>
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                Document Collation &amp; Sworn Translations
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Apostilling foreign police clearances, securing certified Brazilian sworn translations (tradução juramentada), and preparing Portuguese language test documentation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#f8f9fa] rounded-xl p-6 border border-[#c5c6ce] relative hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#0f1e36] text-[#e9c176] font-bold text-xs flex items-center justify-center">
                  03
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19]">
                  Phase 3
                </span>
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                Federal Portal Filing (Naturalomar)
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Electronic petition submission through the Ministry of Justice system (Naturalomar / MigranteWeb), uploading all statutory exhibits, forms, and declarations.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#f8f9fa] rounded-xl p-6 border border-[#c5c6ce] relative hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#0f1e36] text-[#e9c176] font-bold text-xs flex items-center justify-center">
                  04
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19]">
                  Phase 4
                </span>
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                Federal Police In-Person Verification
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                In-person appointment at your local Federal Police superintendency for biometric capture, original document verification, and official signature on the naturalization docket.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-[#f8f9fa] rounded-xl p-6 border border-[#c5c6ce] relative hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#0f1e36] text-[#e9c176] font-bold text-xs flex items-center justify-center">
                  05
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19]">
                  Phase 5
                </span>
              </div>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
                Ministry of Justice Adjudication
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Formal legal review by the Department of Migration (DEMIG) in Brasília. We monitor the docket weekly to respond promptly to any administrative requests (exigências).
              </p>
            </div>

            {/* Step 6 */}
            <div className="bg-[#0f1e36] text-white rounded-xl p-6 border border-[#e9c176]/30 relative hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#e9c176] text-[#0f1e36] font-bold text-xs flex items-center justify-center">
                  06
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#e9c176]">
                  Phase 6
                </span>
              </div>
              <h3 className="font-serif text-base font-bold text-white mb-2">
                DOU Gazette &amp; Brazilian Passport
              </h3>
              <p className="text-xs text-[#edeef0] leading-relaxed">
                Publication in the Diário Oficial da União (DOU) granting Brazilian nationality. We assist with registration, Electoral Card (Título de Eleitor), and your Brazilian biometric passport.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#hero-consultation-card"
              className="inline-flex items-center gap-2 bg-[#775a19] hover:bg-[#8f6d1f] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Begin Your Naturalization Journey</span>
              <ArrowRight className="w-4 h-4 text-[#e9c176]" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. BENEFITS OF BRAZILIAN CITIZENSHIP
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-[#f8f9fa] border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Benefits Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1efe7] text-[#775a19] text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CITIZENSHIP PRIVILEGES</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f1e36] tracking-tight mb-4">
                Why Transition From Permanent Residency to Brazilian Citizenship?
              </h2>

              <p className="text-sm sm:text-base text-[#44474d] leading-relaxed mb-6">
                Holding a permanent residency card (CRNM) gives you the right to live and work in Brazil, but it is not unconditional. Naturalization transforms your status into permanent, constitutional membership in the Brazilian nation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl border border-[#c5c6ce] shadow-sm">
                  <div className="flex items-center gap-2 text-[#775a19] mb-1.5">
                    <Globe2 className="w-4 h-4" />
                    <h4 className="font-serif text-sm font-bold text-[#0f1e36]">
                      Tier-1 Global Passport
                    </h4>
                  </div>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Visa-free or visa-on-arrival access to over 170 countries, including the entire European Schengen Area, United Kingdom, New Zealand, Japan, and all South America.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#c5c6ce] shadow-sm">
                  <div className="flex items-center gap-2 text-[#775a19] mb-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <h4 className="font-serif text-sm font-bold text-[#0f1e36]">
                      Irrevocable Right of Abode
                    </h4>
                  </div>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    No minimum stay rules, no renewal fees, and zero risk of status cancellation or deportation, even if you reside outside Brazil for years.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#c5c6ce] shadow-sm">
                  <div className="flex items-center gap-2 text-[#775a19] mb-1.5">
                    <Scale className="w-4 h-4" />
                    <h4 className="font-serif text-sm font-bold text-[#0f1e36]">
                      Full Political &amp; Civil Rights
                    </h4>
                  </div>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Exercise the right to vote in Brazilian elections, run for public office, participate in civic policy, and access public service careers (concursos públicos).
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#c5c6ce] shadow-sm">
                  <div className="flex items-center gap-2 text-[#775a19] mb-1.5">
                    <Award className="w-4 h-4" />
                    <h4 className="font-serif text-sm font-bold text-[#0f1e36]">
                      Dual Citizenship Protection
                    </h4>
                  </div>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Under Constitutional Amendment No. 131/2023, Brazil fully accommodates dual and multiple citizenship with no domestic requirement to renounce original nationality.
                  </p>
                </div>
              </div>

              <div className="bg-[#0f1e36] text-white p-4 rounded-xl border border-[#e9c176]/30 flex items-start gap-3">
                <Stamp className="w-5 h-5 text-[#e9c176] shrink-0 mt-0.5" />
                <p className="text-xs text-[#edeef0] leading-relaxed">
                  <strong className="text-white">Mercosur Freedom of Movement:</strong> Brazilian citizens enjoy full settlement and work privileges across all Mercosur member and associated states (Argentina, Uruguay, Paraguay, Chile, Colombia, and Peru).
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=85"
                  alt="Young professional celebrating Brazilian passport and international mobility"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/90 via-[#0f1e36]/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    SOVEREIGN EMPOWERMENT
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Definitive Brazilian Nationality
                  </h4>
                  <p className="text-xs text-[#edeef0] mt-1">
                    Unconditional belonging to one of the world's most dynamic and multicultural democracies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. REQUIRED DOCUMENTATION & LEGALIZATION CHECKLIST
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1efe7] text-[#775a19] text-xs font-bold mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>DOCKET PREPARATION</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f1e36] tracking-tight mb-4">
              Required Documents for Ordinary Naturalization
            </h2>
            <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
              Every exhibit must be compiled in strict accordance with federal standards, including Hague apostilles, certified translations, and court clearings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#f8f9fa] rounded-xl p-5 border border-[#c5c6ce]">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-xs mb-3">
                DOC 1
              </div>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-2">
                Identification &amp; Status
              </h3>
              <ul className="text-xs text-[#44474d] space-y-2">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19] shrink-0 mt-0.5" />
                  <span>Valid foreign passport (all stamped pages)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19] shrink-0 mt-0.5" />
                  <span>Permanent CRNM / RNM card</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19] shrink-0 mt-0.5" />
                  <span>Active CPF registration</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] rounded-xl p-5 border border-[#c5c6ce]">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-xs mb-3">
                DOC 2
              </div>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-2">
                Residency &amp; Travel
              </h3>
              <ul className="text-xs text-[#44474d] space-y-2">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19] shrink-0 mt-0.5" />
                  <span>Certidão de Movimentos Migratórios</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19] shrink-0 mt-0.5" />
                  <span>Proof of continuous address in Brazil</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19] shrink-0 mt-0.5" />
                  <span>Notarized declaration of domicile</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] rounded-xl p-5 border border-[#c5c6ce]">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-xs mb-3">
                DOC 3
              </div>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-2">
                Criminal Clearances
              </h3>
              <ul className="text-xs text-[#44474d] space-y-2">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19] shrink-0 mt-0.5" />
                  <span>Federal Police &amp; Federal Court certidões</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19] shrink-0 mt-0.5" />
                  <span>State Judicial distribution certidões</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19] shrink-0 mt-0.5" />
                  <span>Apostilled foreign police clearances</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] rounded-xl p-5 border border-[#c5c6ce]">
              <div className="w-9 h-9 rounded-lg bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-xs mb-3">
                DOC 4
              </div>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-2">
                Language &amp; Livelihood
              </h3>
              <ul className="text-xs text-[#44474d] space-y-2">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19] shrink-0 mt-0.5" />
                  <span>CELPE-Bras certificate or diploma</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19] shrink-0 mt-0.5" />
                  <span>Brazilian tax returns (DIRPF past 4 yrs)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#775a19] shrink-0 mt-0.5" />
                  <span>Proof of regular livelihood &amp; income</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-[#c5c6ce] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0f1e36] text-[#e9c176] flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-[#0f1e36]">
                  Complete Legal Docket Curation by Caspani Lawyers
                </h4>
                <p className="text-xs text-[#44474d]">
                  We obtain all Brazilian court clearings, draft official statutory petitions, coordinate sworn translations, and verify document integrity before submission.
                </p>
              </div>
            </div>
            <a
              href="#hero-consultation-card"
              className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#1a2d4f] text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Request Checklist Review</span>
              <ArrowRight className="w-4 h-4 text-[#e9c176]" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. FREQUENTLY ASKED QUESTIONS (16 DETAILED ACCORDIONS)
          ======================================================== */}
      <section className="w-full py-16 lg:py-20 bg-[#f8f9fa] border-b border-[#e2e2e4]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1efe7] text-[#775a19] text-xs font-bold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f1e36] tracking-tight mb-4">
              Frequently Asked Questions About Ordinary Naturalization
            </h2>
            <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
              Clear answers to the most common legal, operational, and practical questions regarding the 4-year Brazilian citizenship process.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-[#c5c6ce] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#fafafb] transition-colors"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-[#0f1e36]">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-[#0f1e36] text-[#e9c176] rotate-180' : 'bg-[#f1efe7] text-[#775a19]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-[#f0f0f2] text-xs sm:text-sm text-[#44474d] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-white border border-[#c5c6ce] text-center max-w-xl mx-auto shadow-sm">
            <h4 className="font-serif text-base font-bold text-[#0f1e36] mb-2">
              Have a Specific Question About Your Case?
            </h4>
            <p className="text-xs text-[#5f6368] mb-4">
              Our legal team is ready to evaluate your travel stamps, residence history, and language certification.
            </p>
            <a
              href="#hero-consultation-card"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#775a19] hover:underline"
            >
              <span>Schedule a Personal Consultation with Attorney Caspani</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. BOTTOM RESERVATION SECTION
              "Image 3" on the left, Reservation Form on the right
          ======================================================== */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f1efe7] text-[#775a19] text-xs font-bold mb-3">
              <Scale className="w-3.5 h-3.5" />
              <span>ORDINARY NATURALIZATION DESK</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1e36] tracking-tight mb-4">
              Schedule Your Naturalization Legal Consultation
            </h2>
            <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
              Plan your 4-year citizenship timeline, audit your travel absences, and ensure full compliance before filing with the Brazilian Ministry of Justice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: "Image 3" Landmark Legal Visual with Badges */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#e9c176]/40">
                <img
                  src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=85"
                  alt="High-definition Brazilian landmark judicial architecture and justice palace"
                  className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1526]/95 via-[#0f1e36]/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#e9c176] text-[#0f1e36] text-[10px] font-bold uppercase tracking-widest w-fit mb-2">
                    CASPANI LAWYERS • OAB/PR 58.420
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                    Brazilian Nationality &amp; Naturalization
                  </h3>
                  <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed mb-4">
                    Assisting expatriates, executives, investors, and international families in obtaining lawful Brazilian citizenship.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/20">
                    <span className="text-[11px] font-semibold text-[#e9c176] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Strict Confidentiality
                    </span>
                    <span className="text-[11px] font-semibold text-white/90 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-[#e9c176]" />
                      Direct Attorney Representation
                    </span>
                  </div>
                </div>
              </div>

              {/* Legal Credentials Card */}
              <div className="bg-[#f8f9fa] p-5 rounded-xl border border-[#c5c6ce] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0f1e36] text-[#e9c176] flex items-center justify-center font-bold text-xs shrink-0">
                    OAB
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#0f1e36]">
                      Advogada Regularmente Inscrita
                    </h4>
                    <p className="text-xs text-[#775a19] font-medium">
                      Ordem dos Advogados do Brasil – OAB/PR 58.420
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[#44474d] leading-relaxed">
                  All consultations are conducted directly by or under the supervision of a licensed Brazilian attorney in full compliance with the Federal Code of Ethics and Discipline (Law No. 8,906/1994).
                </p>
              </div>
            </div>

            {/* Right Column: Reservation Form ("Lform 3la liman") */}
            <div className="lg:col-span-7">
              <ConsultationForm presetService="Ordinary Naturalization" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. STATUTORY DISCLAIMER FOOTER NOTE
          ======================================================== */}
      <section className="w-full py-8 bg-[#0b1526] text-white/70 border-t border-white/10 text-[11px]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-2">
          <p>
            <strong>LEGAL NOTICE:</strong> The information provided on this page is for general informative and educational purposes regarding Brazilian nationality law (Law No. 13,445/2017, Decree No. 9,199/2017, and constitutional provisions) and does not constitute a formal attorney-client relationship. Official naturalization decisions are the sovereign prerogative of the Ministry of Justice and Public Security (MJSP).
          </p>
          <p>
            Caspani Lawyers • Curitiba, Paraná, Brazil • OAB/PR 58.420 • Multilingual Consultations in English, Portuguese, Spanish, and French.
          </p>
        </div>
      </section>
    </div>
  );
};
