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
  Heart,
  Baby,
  UserCheck,
  ShieldCheck,
  AlertTriangle,
  Globe2,
  Briefcase,
  HelpCircle,
  GraduationCap,
  Award
} from 'lucide-react';

interface FamilyReunionVisaPageProps {
  onNavigate: (route: string) => void;
}

export const FamilyReunionVisaPage: React.FC<FamilyReunionVisaPageProps> = ({ onNavigate }) => {
  // Sync document title and meta description
  useEffect(() => {
    document.title = 'Brazil Family Reunion Visa (VITEM XI) | Specialists | Caspani Lawyers';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Legal assistance for Brazil Family Reunion Visa (VITEM XI) and residence authorization. Reconnect with spouses, children, parents, and family members in Brazil with direct attorney guidance.'
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
    familyRelationship: 'Spouse',
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
      `Hello Caspani Lawyers, my name is ${heroForm.fullName || 'Client'}. I am inquiring about the Brazil Family Reunion Visa (VITEM XI).\nFamily Relationship: ${heroForm.familyRelationship}\nCurrent Residence: ${heroForm.countryResidence}\nPhone: ${heroForm.countryCode} ${heroForm.phone}\nEmail: ${heroForm.email}\nDetails: ${heroForm.message}`
    );
    window.open(`https://wa.me/5541998247700?text=${text}`, '_blank');
  };

  const faqs = [
    {
      question: '1. What is the Brazil Family Reunion Visa?',
      answer:
        'The Family Reunion Visa (VITEM XI) is a temporary visa category for eligible relatives of Brazilian citizens or qualifying foreign residents who wish to join their family in Brazil.'
    },
    {
      question: '2. Who can apply for family reunification?',
      answer:
        'Qualifying relationships may include spouses, partners in a stable union, children, parents, certain grandparents, grandchildren, stepchildren, siblings, and other relationships recognized under the applicable immigration rules.'
    },
    {
      question: '3. Can I apply while already in Brazil?',
      answer:
        'Yes. Eligible foreign nationals who are legally present in Brazil may be able to apply for residence authorization directly through the Federal Police without having to leave the country.'
    },
    {
      question: '4. Can I apply from outside Brazil?',
      answer:
        'Yes. Eligible applicants abroad may request VITEM XI through the Brazilian consular authority responsible for their jurisdiction and enter Brazil once the visa is issued.'
    },
    {
      question: '5. Can I bring my foreign spouse to Brazil?',
      answer:
        'Yes. A qualifying marriage to a Brazilian citizen or eligible foreign resident may provide a legal basis for family reunification residence.'
    },
    {
      question: '6. Can unmarried partners apply?',
      answer:
        'Yes. A legally recognized stable union (união estável) may qualify when the applicable relationship, cohabitation, and documentary requirements are satisfied.'
    },
    {
      question: '7. Can I bring my parents to Brazil?',
      answer:
        'Certain parents of Brazilian citizens or qualifying foreign residents may be eligible for family reunification, subject to statutory criteria.'
    },
    {
      question: '8. Can I bring my adult children?',
      answer:
        'Certain adult children may qualify under specific conditions, including legally recognized economic dependency, disability, or enrollment in higher education.'
    },
    {
      question: '9. Can I bring my brother or sister?',
      answer:
        'Certain siblings may qualify subject to age, student status, economic dependency, guardianship, and other applicable immigration conditions.'
    },
    {
      question: '10. Do I need to prove financial dependency?',
      answer:
        'Not in every case. Economic dependency evidence is required for certain qualifying family relationships (such as adult children or siblings) but is not a universal requirement for spouses or minor children.'
    },
    {
      question: '11. Do I need to register my foreign marriage in Brazil?',
      answer:
        'Depending on the circumstances, a marriage celebrated abroad may require consular registration and transcription at a Cartório do 1º Ofício de Registro Civil in Brazil to support the relevant legal procedures.'
    },
    {
      question: '12. What if I was divorced abroad?',
      answer:
        'A foreign divorce may require homologation (recognition) before the Superior Court of Justice (STJ) or direct registration at a Brazilian cartório before certain civil or immigration procedures can be completed.'
    },
    {
      question: '13. Can family reunion residents work in Brazil?',
      answer:
        'Yes. Family-based residents receive a Carteira de Registro Nacional Migratório (CRNM) and Carteira de Trabalho (CTPS), allowing them to undertake lawful employment or commercial activities in Brazil.'
    },
    {
      question: '14. Is family reunification residency permanent?',
      answer:
        'The duration and conditions depend on the qualifying relationship, sponsor\'s status, and applicable immigration rules. Authorizations tied to Brazilian citizens or permanent residents are generally granted for an indefinite term.'
    },
    {
      question: '15. Can I obtain Brazilian citizenship through family reunification?',
      answer:
        'Not automatically. Naturalization requires a separate application. However, spouses of Brazilian citizens or parents of Brazilian children benefit from an expedited 1-year residence requirement.'
    },
    {
      question: '16. How long does the process take?',
      answer:
        'Processing times typically vary from 3 to 8 weeks for consular visas abroad, and approximately 30 to 90 days for in-country Federal Police residence authorization.'
    },
    {
      question: '17. Do I need health insurance?',
      answer:
        'Health insurance should not be assumed to be a universal requirement for all family reunification applications. Any applicable requirement must be confirmed for the specific consular or residence procedure.'
    },
    {
      question: '18. What if my family member\'s Brazilian residence expires?',
      answer:
        'The sponsor\'s immigration status may affect the applicant\'s eligibility or ongoing residence conditions. The legal consequences must be assessed according to the specific case.'
    },
    {
      question: '19. What if my family situation changes after approval?',
      answer:
        'Changes involving marriage dissolution, separation, divorce, custody alterations, or dependency cessation may have legal consequences depending on the residence category and duration.'
    },
    {
      question: '20. How much does a family reunion application cost?',
      answer:
        'Costs may include government fees (taxas federais), civil documents, Hague apostilles, sworn translations, and professional legal services. At Caspani Lawyers, professional fees are transparently discussed following an individual consultation.'
    }
  ];

  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* ========================================================
          1. HERO SECTION: FAMILY REUNION VISA (IMAGE + FORM ON RIGHT)
          ======================================================== */}
      <section className="relative w-full text-white min-h-[660px] flex items-center py-12 lg:py-20 overflow-hidden">
        {/* Background Image: Brazilian multi-generational family celebrating together */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=2000&q=85')`
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
            <span className="text-white">FAMILY REUNION VISA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline and Briefing */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#e9c176] mb-2 block">
                VITEM XI • REUNIÃO FAMILIAR • LEGAL IMMIGRATION
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] lg:leading-[54px] font-bold text-white mb-3">
                Brazil Family Reunion Visa – Bring Your Loved Ones Together
              </h1>

              <p className="text-lg text-[#fed488] font-serif italic mb-4">
                Your family belongs together. We help you navigate the legal path to reunite in Brazil.
              </p>

              <div className="text-sm sm:text-base text-[#edeef0] leading-relaxed max-w-2xl space-y-3 mb-6">
                <p>
                  Are you planning to join your spouse, children, parents, or other eligible family members in Brazil? Brazil offers family reunification immigration pathways for qualifying relatives of Brazilian citizens and foreign nationals holding eligible residence status.
                </p>
                <p>
                  At <strong className="text-white">Caspani Lawyers</strong>, we provide personalized legal assistance with family reunion visas (VITEM XI), residence authorization applications, document preparation, and Federal Police registration. Whether your family is currently living in different countries or already together in Brazil, we help you understand the requirements and prepare the appropriate immigration application.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
                <a
                  href="#family-hero-form"
                  className="inline-flex items-center justify-center gap-2 bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg"
                >
                  <span>Book Your Legal Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#family-eligibility-overview"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/30 transition-all duration-200"
                >
                  Explore Family Residency Options
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
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#edeef0] leading-tight">
                    Family Immigration &amp; Residency Services
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
                    Multilingual and Confidential Consultations
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Intake Form (Lformulaire 3la liman) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="family-hero-form">
              <div className="bg-white text-[#1a1c1d] rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/20">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19] block mb-1">
                  REQUEST YOUR LEGAL CONSULTATION
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0f1e36] mb-1">
                  Start Your Family Reunification Process
                </h3>
                <p className="text-xs text-[#44474d] mb-4 pb-2 border-b border-[#e8e8ea]">
                  Tell us about your family circumstances and receive personalized guidance from a Brazilian immigration lawyer.
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
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="fam-name">
                        Full Name *
                      </label>
                      <input
                        id="fam-name"
                        required
                        type="text"
                        value={heroForm.fullName}
                        onChange={(e) => setHeroForm({ ...heroForm, fullName: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="fam-email">
                        Email Address *
                      </label>
                      <input
                        id="fam-email"
                        required
                        type="email"
                        value={heroForm.email}
                        onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="fam-phone">
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
                          id="fam-phone"
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
                        <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="fam-country">
                          Current Country of Residence
                        </label>
                        <input
                          id="fam-country"
                          type="text"
                          value={heroForm.countryResidence}
                          onChange={(e) => setHeroForm({ ...heroForm, countryResidence: e.target.value })}
                          placeholder="e.g. United States, UK"
                          className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="fam-rel">
                          Family Relationship *
                        </label>
                        <select
                          id="fam-rel"
                          value={heroForm.familyRelationship}
                          onChange={(e) => setHeroForm({ ...heroForm, familyRelationship: e.target.value })}
                          className="w-full bg-[#f3f3f5] text-[#1a1c1d] px-3 py-2 rounded-lg text-xs border border-[#c5c6ce] focus:outline-none focus:border-[#775a19]"
                        >
                          <option value="Spouse">Spouse</option>
                          <option value="Partner (Stable Union)">Partner (Stable Union)</option>
                          <option value="Child (Minor / Adult)">Child</option>
                          <option value="Parent">Parent</option>
                          <option value="Sibling">Sibling</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#44474d] mb-0.5" htmlFor="fam-msg">
                        Message
                      </label>
                      <textarea
                        id="fam-msg"
                        rows={2}
                        value={heroForm.message}
                        onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                        placeholder="Briefly explain your relationship to the family member in Brazil, their citizenship or immigration status, and your plans..."
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
          2. FAMILY IMMIGRATION IN BRAZIL (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]" id="family-residency-overview">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image: Multi-generation family embrace */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=85"
                  alt="Family members reuniting happily in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[450px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-3.5 rounded-xl border border-[#c5a059]/30 flex items-center justify-between text-xs">
                  <span className="font-medium">Curitiba • São Paulo • Rio de Janeiro • Florianópolis</span>
                  <span className="font-mono text-[#e9c176]">Lei 13.445 / RN 37</span>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — FAMILY IMMIGRATION IN BRAZIL
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Reuniting Families Across Borders
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed mb-6">
                <p>
                  Living apart from loved ones can be challenging, especially when international immigration requirements create additional uncertainty.
                </p>
                <p>
                  Brazilian immigration law recognizes family reunification as an important principle and provides residence pathways for eligible family members. However, eligibility depends on the family relationship, the immigration status of the person in Brazil, and the documentation required for each category.
                </p>
                <p>
                  At <strong className="text-[#0f1e36]">Caspani Lawyers</strong>, we help families understand these requirements and organize the legal process with clarity. Our services cover family reunion visa applications abroad, residence authorization requests in Brazil, and related immigration documentation.
                </p>
              </div>

              <a
                href="#family-hero-form"
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
          3. FAMILY REUNIFICATION ELIGIBILITY (WITH STOCK IMAGE & 8 CARDS)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]" id="family-eligibility-overview">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — ELIGIBILITY CRITERIA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              Who Can Apply for a Brazil Family Reunion Visa?
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Brazil's family reunification framework recognizes several qualifying family relationships. Eligibility may extend to the following categories, subject to the applicable conditions.
            </p>
          </div>

          {/* Section 3 Stock Image Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg border border-[#e2e2e4] h-60 sm:h-72">
            <img
              src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=1600&q=85"
              alt="Family generation and children in Brazil"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/90 via-[#0f1e36]/45 to-transparent flex flex-col justify-center p-6 sm:p-10 text-white max-w-xl">
              <span className="text-[10px] font-mono uppercase text-[#e9c176] tracking-wider mb-1.5">
                Statutory Relational Categories
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                Spouses, Children, Parents &amp; Dependents
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                Both biological and legal kinship ties qualify when supported by certified, apostilled civil records and compliant Brazilian sworn translations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <span className="text-[11px] font-bold text-[#775a19] uppercase block mb-1">01 / Relatives</span>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Spouses</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Foreign nationals legally married to a Brazilian citizen or qualifying resident may be eligible for family-based residence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <span className="text-[11px] font-bold text-[#775a19] uppercase block mb-1">02 / Relatives</span>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Partners in a Stable Union</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Partners in a legally recognized stable union (união estável) may qualify when the relationship satisfies Brazilian immigration requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <span className="text-[11px] font-bold text-[#775a19] uppercase block mb-1">03 / Relatives</span>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Children</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Eligible children of Brazilian citizens or qualifying residents may obtain residence based on family reunification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <span className="text-[11px] font-bold text-[#775a19] uppercase block mb-1">04 / Relatives</span>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Parents</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Foreign parents of Brazilian citizens or qualifying foreign residents may be eligible, depending on the applicable legal conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <span className="text-[11px] font-bold text-[#775a19] uppercase block mb-1">05 / Relatives</span>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Grandparents &amp; Grandchildren</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Certain direct-line family relationships may qualify under Brazilian family reunification rules.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <span className="text-[11px] font-bold text-[#775a19] uppercase block mb-1">06 / Relatives</span>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Stepchildren</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Stepchildren may qualify when the applicable age, dependency, or other legal requirements are satisfied.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <span className="text-[11px] font-bold text-[#775a19] uppercase block mb-1">07 / Relatives</span>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Siblings</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Certain siblings may qualify, subject to age, student status, economic dependency, or other relevant conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <span className="text-[11px] font-bold text-[#775a19] uppercase block mb-1">08 / Relatives</span>
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Guardianship &amp; Care</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Specific legally recognized guardianship or family relationships may also provide a basis for residence authorization.
              </p>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-[#fff8eb] rounded-xl p-5 border border-[#fed488] flex items-start gap-3.5 max-w-4xl mx-auto mb-6">
            <AlertTriangle className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
            <div className="text-xs text-[#785a1a] leading-relaxed">
              <strong>Important Legal Consideration:</strong> Not every family relationship automatically qualifies. Age limits, proof of economic dependency, legal custody, and the sponsor's status can affect eligibility.
            </div>
          </div>

          <div className="text-center">
            <a
              href="#family-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Check Your Family's Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. THE FAMILY MEMBER IN BRAZIL (SPONSOR STATUS + IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Chamante Overview */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — SPONSOR ASSESSMENT
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Who Can Sponsor a Family Reunion Application?
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                The family member in Brazil, often referred to as the <em>chamante</em>, plays an important role in the immigration process. Depending on the applicable category, family reunification may be based on a qualifying relationship with:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                  <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">A Brazilian Citizen</h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    A Brazilian national may provide the qualifying family relationship for certain family-based immigration applications.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                  <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Foreign National With Eligible Residence</h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    A foreign resident in Brazil may be able to reunite with qualifying family members, subject to the rules governing their status.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                  <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">A Brazilian Child</h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    A foreign parent of a Brazilian citizen child has a specific, constitutionally protected family-based residence pathway.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                  <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">A Spouse or Partner Residing in Brazil</h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    An eligible foreign spouse or partner may request residence based on a qualifying marriage or stable union.
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#75777e] leading-relaxed mb-6">
                Certain temporary immigration categories have specific restrictions or conditions regarding family reunification. The sponsor's exact status should therefore be assessed before choosing an application route.
              </p>

              <a
                href="#family-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm w-fit"
              >
                <span>Discuss Your Family Immigration Situation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Column: Stock Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
                  alt="Brazilian sponsor and legal representative reviewing immigration dossier"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-[11px] font-mono text-[#e9c176] block mb-1">Chamante Legal Verification:</span>
                  <p className="text-xs font-semibold">
                    CPF, RG/CRNM, Proof of Residence &amp; Financial Maintenance Declarations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. APPLICATION ROUTES: VITEM XI OR IN-BRAZIL (WITH STOCK IMAGES)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — APPLICATION ROUTES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              Family Reunion Visa or Residence Authorization?
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              There are two principal routes for eligible applicants, depending on where they are located.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Option 1: Consular Visa */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e2e4] shadow-xs flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden border-b border-[#e8e8ea]">
                  <img
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=85"
                    alt="International travel and Brazilian consulate visa issuance"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/85 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold">Brazilian Embassy &amp; Consulate Abroad</span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="inline-block px-3 py-1 rounded bg-[#f3ede0] text-[#775a19] text-xs font-bold uppercase tracking-wider mb-3">
                    Option 1
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-2">
                    Family Reunion Visa (VITEM XI)
                  </h3>
                  <span className="text-xs font-bold text-[#775a19] block mb-3">
                    Applying From Outside Brazil
                  </span>
                  <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-4">
                    Eligible foreign nationals residing abroad may apply for a family reunion temporary visa through the Brazilian embassy or consulate responsible for their jurisdiction.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#1a1c1d] pl-1">
                    <li className="flex items-center gap-2"><span className="text-[#775a19]">◆</span> Confirming the qualifying family relationship</li>
                    <li className="flex items-center gap-2"><span className="text-[#775a19]">◆</span> Preparing civil and immigration documents</li>
                    <li className="flex items-center gap-2"><span className="text-[#775a19]">◆</span> Completing the consular application</li>
                    <li className="flex items-center gap-2"><span className="text-[#775a19]">◆</span> Submitting supporting evidence</li>
                    <li className="flex items-center gap-2"><span className="text-[#775a19]">◆</span> Paying applicable visa fees</li>
                    <li className="flex items-center gap-2"><span className="text-[#775a19]">◆</span> Attending an interview if required</li>
                    <li className="flex items-center gap-2"><span className="text-[#775a19]">◆</span> Completing migration registration after arriving in Brazil</li>
                  </ul>
                </div>
              </div>

              <div className="p-7 pt-0">
                <div className="pt-4 border-t border-[#e8e8ea] text-xs text-[#75777e]">
                  Ideal for applicants currently residing outside Brazil seeking to enter with residence status secured.
                </div>
              </div>
            </div>

            {/* Option 2: In-Country Residence */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e2e4] shadow-xs flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden border-b border-[#e8e8ea]">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85"
                    alt="Federal Police migration registration in Brazil"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/85 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold">Polícia Federal • In-Country Authorization</span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="inline-block px-3 py-1 rounded bg-[#f3ede0] text-[#775a19] text-xs font-bold uppercase tracking-wider mb-3">
                    Option 2
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-2">
                    Family Reunion Residence Authorization
                  </h3>
                  <span className="text-xs font-bold text-[#775a19] block mb-3">
                    Applying From Within Brazil
                  </span>
                  <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-4">
                    Eligible foreign nationals already legally present in Brazil (e.g. on a visitor visa or visa waiver) may be able to request residence authorization directly through the Federal Police.
                  </p>
                  <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-4">
                    This process involves the applicable application forms, family relationship documentation, declarations, biometrics, and registration procedures.
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0">
                <div className="pt-4 border-t border-[#e8e8ea] text-xs text-[#75777e]">
                  Ideal for families already together in Brazil who wish to transition status smoothly without traveling abroad.
                </div>
              </div>
            </div>
          </div>

          {/* Callout */}
          <div className="bg-[#0f1e36] text-white rounded-2xl p-7 sm:p-9 border border-[#c5a059]/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1">
                Which Route Should You Choose?
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed max-w-2xl">
                The correct procedure depends on your nationality, current location, immigration status, and qualifying family relationship. Our office assesses these factors during your legal consultation.
              </p>
            </div>
            <a
              href="#family-hero-form"
              className="bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-md"
            >
              Book Your Immigration Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. REQUIRED DOCUMENTS (WITH CHECKLIST & STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — DOCUMENTATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Documents Required for Family Reunification in Brazil
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d]">
              The documentation required depends on the family relationship and application route.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Left Image */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-lg border border-[#e2e2e4]">
              <img
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=85"
                alt="Passport, marriage certificates, and sworn translations"
                className="w-full h-80 sm:h-96 lg:h-full object-cover"
              />
              <div className="bg-[#0f1e36] text-white p-5">
                <span className="text-[11px] font-mono text-[#e9c176] uppercase block mb-1">
                  Apostille &amp; Sworn Translations
                </span>
                <p className="text-xs text-[#edeef0] leading-relaxed">
                  Foreign civil records must be apostilled or legalized abroad and translated into Portuguese by an accredited Brazilian sworn translator.
                </p>
              </div>
            </div>

            {/* Right Checklist */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Valid passport or other accepted identification',
                  'Birth certificate',
                  'Marriage certificate, where applicable',
                  'Evidence of a legally recognized stable union, where applicable',
                  'Identification documents of the family member in Brazil',
                  'Proof of Brazilian citizenship or qualifying residence status',
                  'Criminal background documentation, where required',
                  'Proof of economic dependency, when applicable',
                  'Evidence of student status, when relevant',
                  'Custody, guardianship, or parental authorization documents',
                  'Required declarations and application forms',
                  'Apostilles or legalizations of foreign documents',
                  'Certified translations into Portuguese',
                  'Proof of payment of applicable government fees'
                ].map((doc, idx) => (
                  <div key={idx} className="p-3 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#1a1c1d]">{doc}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea] mb-4 text-xs text-[#44474d] leading-relaxed">
                <strong className="text-[#0f1e36]">Important:</strong> A generic checklist may not be sufficient for your case. The documentation for a spouse differs from that required for a sibling, dependent adult child, or other relative. At Caspani Lawyers, we provide a personalized checklist based on your specific family relationship and immigration circumstances.
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href="#family-hero-form"
                  className="inline-flex items-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Get Your Personalized Document Checklist</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-[11px] text-[#75777e] italic">
                  Provided through a paid consultation or agreed representation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. MARRIAGE AND STABLE UNION (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: 4 Cards */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — SPOUSAL &amp; PARTNER IMMIGRATION
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Family Residency Through Marriage or Stable Union
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                Marriage and stable union are common legal grounds for family-based residence in Brazil. However, each requires appropriate evidence and compliance with the applicable immigration requirements.
              </p>

              <div className="space-y-3.5 mb-6">
                <div className="p-4 bg-white rounded-xl border border-[#e8e8ea]">
                  <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                    Marriage to a Brazilian Citizen
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Foreign spouses of Brazilian citizens may qualify for residence through family reunification. A marriage celebrated abroad may require registration or transcription in Brazil, depending on the circumstances and applicable procedures.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#e8e8ea]">
                  <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                    Marriage to a Foreign Resident
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    A foreign national married to a qualifying resident in Brazil may be eligible for family reunification. The sponsor's immigration category and status must be assessed.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#e8e8ea]">
                  <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                    Stable Union (União Estável)
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Brazilian law recognizes stable unions, and eligible partners may obtain residence based on a qualifying relationship. The required evidence depends on the applicable immigration regulations and circumstances.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#e8e8ea]">
                  <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">
                    Previous Marriage or Divorce Abroad
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    If either partner has a prior foreign marriage or divorce, additional civil registration or recognition procedures (e.g. STJ homologation) may be necessary.
                  </p>
                </div>
              </div>

              <a
                href="#family-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm w-fit"
              >
                <span>Explore Marriage-Based Residency</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Column: Stock Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85"
                  alt="Couple enjoying life together in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Civil Unions &amp; Weddings in Brazil</span>
                  <p className="text-[11px] text-[#edeef0]">
                    We coordinate both Cartório civil deeds of união estável and consular marriage transcription for seamless Federal Police filing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. CHILDREN AND DEPENDENTS (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Stock Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=85"
                  alt="Parents with children in Brazilian park"
                  className="w-full h-80 sm:h-96 lg:h-[520px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Minor &amp; Adult Dependents</span>
                  <p className="text-[11px] text-[#edeef0]">
                    Assistance with student dependency status, child custody records, and parental travel authorizations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Copy & Criteria */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — DEPENDENT RELATIVES
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
                Bringing Your Children and Dependents to Brazil
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-6">
                Family reunification may be available to qualifying children and other dependents of Brazilian citizens or eligible foreign residents. However, the legal requirements differ according to the applicant's age, relationship, and dependency circumstances.
              </p>

              <div className="space-y-3 w-full mb-6">
                <div className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-0.5">Minor Children:</strong>
                  <span className="text-xs text-[#44474d]">Minor children may qualify based on their relationship to the Brazilian citizen or eligible resident.</span>
                </div>
                <div className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-0.5">Adult Children:</strong>
                  <span className="text-xs text-[#44474d]">Certain adult children may qualify under specific conditions, including legally relevant economic dependency or full-time university enrollment.</span>
                </div>
                <div className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-0.5">Stepchildren:</strong>
                  <span className="text-xs text-[#44474d]">Applications involving stepchildren may require additional evidence and may be subject to age or dependency conditions.</span>
                </div>
                <div className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-0.5">Parents and Other Dependents:</strong>
                  <span className="text-xs text-[#44474d]">Parents and other qualifying relatives may have family-based immigration options under the applicable regulations.</span>
                </div>
                <div className="p-3.5 bg-[#f9f9fb] rounded-xl border border-[#e8e8ea]">
                  <strong className="text-xs text-[#0f1e36] block mb-0.5">Child Custody and Parental Authorization:</strong>
                  <span className="text-xs text-[#44474d]">Applications involving minors may require custody documentation, parental consent, or other legal evidence. International family situations involving disputed custody or parental rights require particular attention.</span>
                </div>
              </div>

              <a
                href="#family-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Your Family's Immigration Options</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. APPLICATION PROCESS (8-STEP ROADMAP WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — STEP-BY-STEP ROADMAP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              How to Apply for Family Reunification in Brazil
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              Our structured 8-step roadmap ensures seamless coordination from initial relationship review through to Federal Police CRNM issuance.
            </p>
          </div>

          {/* Section 9 Stock Image Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg border border-[#e2e2e4] h-60 sm:h-72">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85"
              alt="Attorney guiding family through Brazilian immigration filing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/90 via-[#0f1e36]/40 to-transparent flex flex-col justify-center p-6 sm:p-10 text-white max-w-xl">
              <span className="text-[10px] font-mono uppercase text-[#e9c176] tracking-wider mb-1.5">
                Full-Lifecycle Legal Guidance
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                From Consultation to Residence Card
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                Direct legal representation avoids common pitfalls with consular queues, sworn translation standards, and Federal Police biometrics.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">1</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Initial Legal Consultation</h3>
              <p className="text-xs text-[#44474d]">We assess the family relationship, sponsor's immigration status, applicant's location, and applicable eligibility requirements.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">2</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Immigration Strategy</h3>
              <p className="text-xs text-[#44474d]">We identify the appropriate visa or residence authorization procedure.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">3</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Document Preparation</h3>
              <p className="text-xs text-[#44474d]">We help organize civil records, relationship evidence, dependency documentation, and other supporting materials.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">4</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Application Submission</h3>
              <p className="text-xs text-[#44474d]">We prepare and assist with submitting the application to the competent Brazilian consulate or immigration authority.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">5</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Additional Requirements</h3>
              <p className="text-xs text-[#44474d]">We assist with responding to applicable documentary requests and preparing for any required appointments or interviews.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">6</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Federal Police Registration</h3>
              <p className="text-xs text-[#44474d]">Following the relevant approval or entry procedures, we guide applicants through the required migration registration process.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">7</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Residence Documentation</h3>
              <p className="text-xs text-[#44474d]">We assist with understanding the applicable residence documentation, including the Carteira de Registro Nacional Migratório (CRNM).</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea] flex flex-col">
              <span className="w-7 h-7 rounded-full bg-[#0f1e36] text-[#e9c176] text-xs font-bold flex items-center justify-center mb-3">8</span>
              <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Long-Term Planning</h3>
              <p className="text-xs text-[#44474d]">We provide guidance concerning relevant residence conditions, future immigration options, and potential naturalization eligibility.</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#family-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Start Your Family Reunion Application</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. OUR LEGAL SERVICES (WITH STOCK IMAGE & 8 AREAS)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — LEGAL EXPERTISE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              How Caspani Lawyers Can Help Your Family
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d]">
              Dedicated cross-border legal support tailored specifically to international families reuniting in Brazil.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            {/* Left Image */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-lg border border-[#e2e2e4]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85"
                alt="Lead Brazilian immigration attorney reviewing legal case"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
              />
              <div className="bg-[#0f1e36] text-white p-5">
                <span className="text-[10px] font-mono text-[#e9c176] uppercase block mb-1">
                  OAB/PR 58.420 • Caspani Lawyers
                </span>
                <p className="text-xs text-[#edeef0] leading-relaxed">
                  Personalized attention by licensed counsel with cross-border expertise in private international law and family immigration.
                </p>
              </div>
            </div>

            {/* Right 8 Services */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Family Relationship Assessment</h3>
                <p className="text-xs text-[#44474d]">We evaluate the qualifying family relationship and relevant legal requirements.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Sponsor Status Verification</h3>
                <p className="text-xs text-[#44474d]">We review the immigration or citizenship status of the family member in Brazil.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Civil Document Review</h3>
                <p className="text-xs text-[#44474d]">We identify issues affecting marriage certificates, birth certificates, custody records, and other supporting documentation.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Foreign Marriage and Divorce Matters</h3>
                <p className="text-xs text-[#44474d]">Where relevant, we provide guidance concerning recognition or registration procedures involving foreign civil records.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Visa and Residence Applications</h3>
                <p className="text-xs text-[#44474d]">We assist with the applicable family reunification immigration procedures.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Federal Police Registration</h3>
                <p className="text-xs text-[#44474d]">We guide clients through required appointments, registration, and residence documentation.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Additional Documentary Requests</h3>
                <p className="text-xs text-[#44474d]">We assist with addressing immigration authority requests within the agreed scope of representation.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f9f9fb] border border-[#e8e8ea]">
                <h3 className="font-serif text-sm font-bold text-[#0f1e36] mb-1">Future Immigration Planning</h3>
                <p className="text-xs text-[#44474d]">We help clients understand relevant residence conditions and potential future immigration pathways.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#family-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Schedule Your Family Immigration Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. RESIDENCY RIGHTS AND CONDITIONS (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — RIGHTS &amp; COMPLIANCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              What Rights Does Family-Based Residence Provide?
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              An approved family-based residence authorization allows the foreign national to reside legally in Brazil under the conditions established by the applicable immigration rules.
            </p>
          </div>

          {/* Section 11 Stock Image Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg border border-[#e2e2e4] h-60 sm:h-72">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1600&q=85"
              alt="Family living happily and working in Brazil"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/90 via-[#0f1e36]/40 to-transparent flex flex-col justify-center p-6 sm:p-10 text-white max-w-xl">
              <span className="text-[10px] font-mono uppercase text-[#e9c176] tracking-wider mb-1.5">
                Full Integration in Brazilian Society
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                Work, Study, Healthcare &amp; Civil Rights
              </h3>
              <p className="text-xs sm:text-sm text-[#edeef0] leading-relaxed">
                Family reunion residents enjoy full access to employment authorization, education, public &amp; private healthcare (SUS), and financial banking services.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea]">
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">Legal Residence</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">The right to reside in Brazil in accordance with the applicable residence authorization.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea]">
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">Employment</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">Family-based residents may generally undertake lawful employment or professional activities, subject to relevant Brazilian laws.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea]">
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">Education</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">Eligible foreign residents may access educational opportunities and enroll in schools and universities under the applicable rules.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea]">
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">Healthcare</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">Foreign nationals may access healthcare services in accordance with Brazilian law and applicable public (SUS) and private arrangements.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea]">
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">Migration Registration</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">Residents must comply with applicable Federal Police registration and documentation requirements (CRNM and CPF).</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#e8e8ea]">
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-1">Ongoing Compliance</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">Residents must observe the legal conditions of their authorization and applicable Brazilian immigration regulations.</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] text-center text-xs text-[#75777e] max-w-2xl mx-auto">
            <em>Family-based residence does not automatically grant Brazilian citizenship, though it serves as a qualifying basis for naturalization.</em>
          </div>
        </div>
      </section>

      {/* ========================================================
          12. RESIDENCY VALIDITY (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"
                  alt="CRNM physical card and legal immigration documents"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Prazo Indeterminado</span>
                  <p className="text-[11px] text-[#edeef0]">
                    Permanent residence authorizations remain valid for an indefinite period, with CRNM physical cards renewed periodically.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — STATUTORY DURATION
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">
                Is Family Reunion Residency Permanent?
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed mb-6">
                <p>
                  The duration and conditions of family-based residence depend on the qualifying relationship, the sponsor's status, and the applicable immigration rules.
                </p>
                <p>
                  Some family-based residence authorizations may be granted for an indefinite term (permanent). Other situations may involve specific conditions or residence periods tied to the primary visa holder.
                </p>
                <p>
                  The validity of a consular visa, the duration of residence authorization, and the validity of the physical residence card (CRNM) are separate matters. Clients should therefore review the specific authorization granted rather than assuming that every family reunification case follows the same timeline.
                </p>
              </div>

              <a
                href="#family-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Get Legal Advice About Your Residency</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          13. PROCESSING TIMES AND COSTS (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — TIMELINES &amp; FEES
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
                How Long Does Family Reunification Take?
              </h2>

              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed mb-5">
                Processing times vary depending on the application route, responsible authority, documentation, and individual circumstances. Factors that may affect processing include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-6">
                {[
                  'Consular jurisdiction abroad',
                  'Federal Police appointment availability in Brazil',
                  'Completeness of supporting documents',
                  'Foreign civil registration requirements',
                  'Criminal background documentation',
                  'Economic dependency evidence',
                  'Additional requests from immigration authorities'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#1a1c1d]">
                    <span className="text-[#775a19]">✔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#e8e8ea] mb-6 text-xs text-[#44474d] leading-relaxed">
                Government fees may also differ depending on the procedure and jurisdiction. Professional legal fees depend on the complexity of the case and the scope of the agreed services. At Caspani Lawyers, we begin with a paid legal consultation to assess your circumstances and discuss the appropriate legal strategy.
              </div>

              <a
                href="#family-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Book Your Legal Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=85"
                  alt="Transparent legal fees, fee schedules, and timelines"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Fee Transparency</span>
                  <p className="text-[11px] text-[#edeef0]">
                    Clear scope of work, all-inclusive legal proposals, and no hidden surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          14. BRAZILIAN CITIZENSHIP (WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=85"
                  alt="Brazilian citizenship naturalization and passport"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/40">
                  <span className="text-xs font-bold block mb-1">Expedited 1-Year Naturalization</span>
                  <p className="text-[11px] text-[#edeef0]">
                    Spouses of Brazilian citizens and parents of Brazilian children qualify for naturalization after just 1 year of continuous lawful residence.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                — NATURALIZATION PATHWAY
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
                Can Family Reunification Lead to Brazilian Citizenship?
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#44474d] leading-relaxed mb-6">
                <p>
                  Family-based residence does not automatically result in Brazilian nationality. However, qualifying lawful residence may contribute toward future naturalization eligibility.
                </p>
                <p>
                  Brazilian naturalization is a separate legal process and generally requires compliance with conditions relating to qualifying residence duration, Portuguese-language proficiency (CELPE-Bras or equivalent), civil capacity, and clean criminal-record requirements.
                </p>
                <p>
                  Certain applicants, including those with qualifying Brazilian family relationships (such as marriage to a Brazilian national or having a Brazilian child), benefit from legally recognized reductions in the ordinary 4-year naturalization residence period down to just <strong>1 year</strong>. Eligibility must be assessed according to the applicable law and the applicant's individual circumstances.
                </p>
              </div>

              <a
                href="#family-hero-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Explore Brazilian Citizenship Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          15. WHY CHOOSE CASPANI LAWYERS? (7 PILLARS + STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-[#f9f9fb] py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — YOUR ADVANTAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Personalized Legal Support for International Families
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
                Receive immigration assistance directly from a lawyer registered with the Brazilian Bar Association (OAB/PR 58.420).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <Heart className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Personalized Family Strategy</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We evaluate each family relationship and application individually to identify the strongest legal basis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <UserCheck className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Direct Attorney Communication</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Communicate directly with your lawyer and receive clear explanations about the relevant legal requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <Globe2 className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">International Client Assistance</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We assist clients living abroad and foreign nationals already present in Brazil across all Brazilian consulates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <Award className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Multilingual Legal Services</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                We provide multilingual communication (English, Portuguese, French, Spanish) to facilitate assistance to international families.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] shadow-xs">
              <Sparkles className="w-7 h-7 text-[#775a19] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2">Remote Legal Consultations</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Consultations are conducted online by video call, allowing clients to receive legal guidance from any country.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#e8e8ea] max-w-2xl mx-auto text-center mb-8 shadow-xs">
            <h4 className="font-serif text-base font-bold text-[#0f1e36] mb-1">Transparent Professional Services</h4>
            <p className="text-xs text-[#44474d]">
              The scope of representation and professional fees are discussed transparently before any agreed legal services begin.
            </p>
          </div>

          <div className="text-center">
            <a
              href="#family-hero-form"
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Speak With Our Immigration Lawyer</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          16. FREQUENTLY ASKED QUESTIONS (20 FAQS WITH STOCK IMAGE)
          ======================================================== */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — COMMON QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Brazil Family Reunion Visa – FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d]">
              Key questions on eligibility, marriage abroad, adult children, custody, timelines, and naturalization.
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
                  Have Specific Family Inquiries?
                </span>
                <p className="text-xs text-[#edeef0] mb-3 leading-relaxed">
                  Every family situation is unique. Our immigration attorney analyzes your specific kinship documents during your paid video consultation.
                </p>
                <a
                  href="#family-hero-form"
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
          17. FINAL SECTION: IMAGE ON LEFT, RESERVATION FORM ON RIGHT
          ======================================================== */}
      <section className="w-full bg-[#edeef0] py-16 lg:py-24 border-t border-[#e2e2e4]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              — READY TO REUNITE WITH YOUR FAMILY?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-2">
              Bring Your Family Together in Brazil With Legal Confidence
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              International family reunification can involve complex documentation and different immigration procedures. At Caspani Lawyers, we provide personalized legal guidance to help families understand their options, prepare their applications, and navigate the Brazilian immigration process. Whether you are joining your spouse, bringing your children to Brazil, or seeking residence through another qualifying family relationship, we are here to assist you.
            </p>
          </div>

          {/* TWO-COLUMN LAYOUT: IMAGE ON THE LEFT, FORM ON THE RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto mb-10">
            {/* Left Column: Curated Family Stock Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=85"
                  alt="Family hugging and celebrating reunion in Brazil"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/95 via-[#0f1e36]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    FAMILY LEGAL CONCIERGE
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    Your Family Belonging in Brazil
                  </h3>
                  <p className="text-xs text-[#edeef0] leading-relaxed">
                    Direct case review by licensed Brazilian family and immigration counsel within 24 business hours.
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
                id="family-bottom-reservation-form"
                title="Schedule Family Reunion Consultation"
                subtitle="Confidential review by licensed Brazilian immigration counsel within 24 hours"
                presetService="Brazil Family Reunion Visa Specialists"
              />
            </div>
          </div>

          {/* Legal Practice Footer & Disclaimer */}
          <div className="max-w-3xl mx-auto text-center border-t border-[#c5c6ce] pt-6 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0f1e36]">
              CASPANI LAWYERS • ADVOCACIA INTERNACIONAL
            </p>
            <p className="text-[11px] text-[#775a19] font-medium">
              Brazil Immigration | Family Reunion Visa | Family-Based Residency | Marriage Residency | Brazilian Citizenship
            </p>
            <p className="text-[11px] text-[#75777e] leading-relaxed">
              <strong>Legal Disclaimer:</strong> This page provides general legal information and does not constitute individualized legal advice. Eligibility, required documents, residence conditions, and administrative procedures depend on the qualifying family relationship and applicable legislation. Immigration rules may change, and approval cannot be guaranteed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
