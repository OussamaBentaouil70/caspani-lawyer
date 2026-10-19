import React, { useState, useEffect } from 'react';
import { ConsultationForm } from '../components/ConsultationForm';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Send,
  Building,
  Users,
  Compass,
  Scale,
  Calculator,
  Home,
  Handshake,
  HeartHandshake,
  FileText,
  Landmark,
  BadgeCheck
} from 'lucide-react';

interface ServicesIndexPageProps {
  onNavigate: (route: string) => void;
}

interface ServiceCardItem {
  number: string;
  categoryTag: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  route: string;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({ onNavigate }) => {
  // Sync SEO metadata as requested
  useEffect(() => {
    document.title = 'Legal Services in Brazil for Foreigners | Caspani Lawyers';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Brazilian legal services for foreigners and investors. Immigration, citizenship, real estate, inheritance, taxation and international legal support.'
      );
    }
  }, []);

  // Form state for hero intake form (matching image.png)
  const [heroForm, setHeroForm] = useState({
    fullName: '',
    countryCode: '+55',
    phone: '',
    email: '',
    message: ''
  });
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHeroSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Caspani Lawyers, my name is ${heroForm.fullName || 'Client'}. I am contacting you regarding Legal Services in Brazil.\nPhone: ${heroForm.countryCode} ${heroForm.phone}\nEmail: ${heroForm.email}\nDetails: ${heroForm.message}`
    );
    window.open(`https://wa.me/5541998247700?text=${text}`, '_blank');
  };

  // The 11 Legal Services defined in the prompt
  const servicesList: ServiceCardItem[] = [
    {
      number: '01 / LEGAL SERVICES',
      categoryTag: 'LEGAL SERVICES',
      title: 'Brazil Immigration',
      description: 'Legal assistance with immigration procedures, work visas, family reunification and residence permits in Brazil.',
      image: '/images/brazil-immigration.jpg',
      icon: <Building className="w-5 h-5 text-white" />,
      route: 'category/brazil-immigration'
    },
    {
      number: '02 / LEGAL SERVICES',
      categoryTag: 'LEGAL SERVICES',
      title: 'Paraguay Immigration',
      description: 'Guidance on Paraguayan residency options, immigration documentation and cross-border relocation.',
      image: '/images/paraguay-immigration.jpg',
      icon: <Users className="w-5 h-5 text-white" />,
      route: 'category/paraguay-immigration'
    },
    {
      number: '03 / LEGAL SERVICES',
      title: 'Brazilian Citizenship',
      categoryTag: 'LEGAL SERVICES',
      description: 'Legal support for naturalization, citizenship by descent, eligibility assessments and applications.',
      image: '/images/recognition-passport.jpg',
      icon: <FileText className="w-5 h-5 text-white" />,
      route: 'category/brazilian-citizenship'
    },
    {
      number: '04 / LEGAL SERVICES',
      categoryTag: 'LEGAL SERVICES',
      title: 'Visas & Residency',
      description: 'Assistance with digital nomad, retirement, family, employment and other Brazilian visa and residency pathways.',
      image: '/images/desk-passport.jpg',
      icon: <BadgeCheck className="w-5 h-5 text-white" />,
      route: 'category/brazil-immigration'
    },
    {
      number: '05 / LEGAL SERVICES',
      categoryTag: 'LEGAL SERVICES',
      title: 'Humanitarian Protection',
      description: 'Confidential legal assistance with refugee claims, humanitarian residence and protection procedures.',
      image: '/images/legal-services.jpg',
      icon: <HeartHandshake className="w-5 h-5 text-white" />,
      route: 'category/brazil-immigration'
    },
    {
      number: '06 / LEGAL SERVICES',
      categoryTag: 'LEGAL SERVICES',
      title: 'Immigration Defense',
      description: 'Legal representation in immigration-related administrative proceedings, appeals and status regularization.',
      image: '/images/litigation.jpg',
      icon: <Scale className="w-5 h-5 text-white" />,
      route: 'category/litigation'
    },
    {
      number: '07 / LEGAL SERVICES',
      categoryTag: 'LEGAL SERVICES',
      title: 'Non-Resident Taxation',
      description: 'Legal guidance on Brazilian tax obligations affecting foreign property owners, investors and non-residents.',
      image: '/images/banking-money-transfers.jpg',
      icon: <Calculator className="w-5 h-5 text-white" />,
      route: 'subpage/others/tax-services'
    },
    {
      number: '08 / LEGAL SERVICES',
      categoryTag: 'LEGAL SERVICES',
      title: 'Real Estate Legal Services',
      description: 'Legal assistance with property purchases, due diligence, contracts, real estate disputes and transactions involving foreign buyers.',
      image: '/images/real-estate.jpg',
      icon: <Home className="w-5 h-5 text-white" />,
      route: 'category/real-estate'
    },
    {
      number: '09 / LEGAL SERVICES',
      categoryTag: 'LEGAL SERVICES',
      title: 'Investor Visas & Residency',
      description: 'Legal guidance on residence permits through qualifying real estate or business investments in Brazil.',
      image: '/images/debt-collection.jpg',
      icon: <Handshake className="w-5 h-5 text-white" />,
      route: 'subpage/brazil-immigration/property-investor-visa-golden-visa'
    },
    {
      number: '10 / LEGAL SERVICES',
      categoryTag: 'LEGAL SERVICES',
      title: 'International Family Law',
      description: 'Cross-border legal assistance with marriage, divorce recognition, family documentation and related proceedings.',
      image: '/images/inheritance-probate.jpg',
      icon: <Users className="w-5 h-5 text-white" />,
      route: 'category/recognition'
    },
    {
      number: '11 / LEGAL SERVICES',
      categoryTag: 'LEGAL SERVICES',
      title: 'Inheritance & Probate',
      description: 'Legal representation for foreign heirs, Brazilian estate proceedings, asset transfers and inheritance disputes.',
      image: '/images/estate-planning.jpg',
      icon: <Landmark className="w-5 h-5 text-white" />,
      route: 'category/inheritance-probates'
    }
  ];

  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* ========================================================
          HERO SECTION: MATCHING IMAGE.PNG WITH CINEMATIC RIO BACKDROP
          ======================================================== */}
      <section className="relative w-full text-white min-h-[580px] lg:min-h-[640px] flex items-center py-12 lg:py-20 overflow-hidden">
        {/* Background Panoramic Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105 opacity-40"
          style={{
            backgroundImage: `url('/images/hero-rio.jpg')`
          }}
        ></div>

        {/* Cinematic Multi-stop Dark Gradient Overlay to match image.png */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d16]/95 via-[#081a2b]/85 to-[#040e18]/55 pointer-events-none"></div>

        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Authority & Headline Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Brand Gold Eyebrow */}
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#e9c176] mb-3 block">
                CASPANI LAWYERS · ADVOCACIA INTERNACIONAL
              </span>

              {/* H1 as requested */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] font-bold text-white mb-4">
                Legal Services in Brazil for Foreigners &amp; International Investors
              </h1>

              {/* Lead Paragraph */}
              <p className="text-sm sm:text-base text-[#edeef0] leading-relaxed max-w-2xl mb-6">
                Caspani Lawyers provides personalized legal assistance in Brazilian immigration, citizenship, real estate, investment, inheritance and cross-border matters. We help international clients navigate Brazilian law with clarity, confidence and direct legal support.
              </p>

              {/* Primary Hero CTA */}
              <div className="mb-8">
                <a
                  href="#hero-consultation-form-card"
                  className="inline-flex items-center justify-center bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] px-7 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Your Legal Consultation Now
                </a>
              </div>

              {/* 4 Trust Check Bullets with Gold Icons */}
              <div className="space-y-2.5 text-xs sm:text-sm text-[#edeef0]">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#e9c176]/20 text-[#e9c176] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#e9c176]" />
                  </div>
                  <span>Licensed Brazilian Attorney — OAB/PR 58.420</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#e9c176]/20 text-[#e9c176] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#e9c176]" />
                  </div>
                  <span>Cross-Border Legal Services</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#e9c176]/20 text-[#e9c176] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#e9c176]" />
                  </div>
                  <span>Multilingual &amp; Remote Legal Assistance</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#e9c176]/20 text-[#e9c176] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#e9c176]" />
                  </div>
                  <span>Personalized and Confidential Consultations</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Consultation Card (matching image.png) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="hero-consultation-form-card">
              <div className="bg-[#0b1c2d]/92 text-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/15 backdrop-blur-md">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-4 pb-2 border-b border-white/10">
                  Request a Legal Consultation
                </h3>

                {heroSubmitted ? (
                  <div className="py-6 text-center animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-[#e9c176]/20 text-[#e9c176] mx-auto flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-7 h-7 text-[#e9c176]" />
                    </div>
                    <h4 className="font-serif text-lg font-bold mb-1">Inquiry Submitted</h4>
                    <p className="text-xs text-[#edeef0] mb-4">
                      Thank you. A licensed Brazilian attorney will review your inquiry within 24 business hours.
                    </p>
                    <button
                      onClick={handleWhatsAppRedirect}
                      type="button"
                      className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md mb-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Chat Directly on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setHeroSubmitted(false)}
                      type="button"
                      className="text-xs text-[#e9c176] underline hover:text-white"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] text-[#edeef0] mb-1 font-medium" htmlFor="hero-name">
                        Full name
                      </label>
                      <input
                        id="hero-name"
                        required
                        type="text"
                        value={heroForm.fullName}
                        onChange={(e) => setHeroForm({ ...heroForm, fullName: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-white text-[#1a1c1d] px-3.5 py-2.5 rounded-lg text-xs sm:text-sm placeholder:text-[#75777e] focus:outline-none focus:ring-2 focus:ring-[#e9c176]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-[#edeef0] mb-1 font-medium" htmlFor="hero-phone">
                        Phone
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        <select
                          value={heroForm.countryCode}
                          onChange={(e) => setHeroForm({ ...heroForm, countryCode: e.target.value })}
                          className="col-span-1 bg-white text-[#1a1c1d] px-2 py-2.5 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#e9c176]"
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
                          id="hero-phone"
                          required
                          type="tel"
                          value={heroForm.phone}
                          onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                          placeholder="Phone / WhatsApp"
                          className="col-span-3 bg-white text-[#1a1c1d] px-3.5 py-2.5 rounded-lg text-xs sm:text-sm placeholder:text-[#75777e] focus:outline-none focus:ring-2 focus:ring-[#e9c176]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] text-[#edeef0] mb-1 font-medium" htmlFor="hero-email">
                        Email
                      </label>
                      <input
                        id="hero-email"
                        required
                        type="email"
                        value={heroForm.email}
                        onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full bg-white text-[#1a1c1d] px-3.5 py-2.5 rounded-lg text-xs sm:text-sm placeholder:text-[#75777e] focus:outline-none focus:ring-2 focus:ring-[#e9c176]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-[#edeef0] mb-1 font-medium" htmlFor="hero-message">
                        Message
                      </label>
                      <textarea
                        id="hero-message"
                        rows={3}
                        value={heroForm.message}
                        onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                        placeholder="Tell us briefly about your situation..."
                        className="w-full bg-white text-[#1a1c1d] p-3 rounded-lg text-xs sm:text-sm placeholder:text-[#75777e] focus:outline-none focus:ring-2 focus:ring-[#e9c176]"
                      ></textarea>
                    </div>

                    {/* Action 1: Gold Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg shadow-md transition-colors duration-200"
                    >
                      Get Legal Assistance
                    </button>

                    {/* Action 2: Green WhatsApp Button */}
                    <button
                      type="button"
                      onClick={handleWhatsAppRedirect}
                      className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Chat With Us Instantly on WhatsApp</span>
                    </button>

                    <p className="text-[10px] text-center text-[#c5c6ce] pt-1">
                      The message will be prepared for WhatsApp at +55 41 99824-7700
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          OUR SERVICES SECTION: 11 CARDS MATCHING IMAGE.PNG DESIGN
          ======================================================== */}
      <section className="w-full py-16 lg:py-24 bg-white border-b border-[#e2e2e4]" id="our-services-grid">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header as in image.png */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c5a059] block mb-2">
              WHAT WE DO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              Our Services
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto">
              From immigration and citizenship to property investments, international family matters and inheritance, Caspani Lawyers provides tailored Brazilian legal services to individuals, families and businesses worldwide.
            </p>
          </div>

          {/* 11 Cards Grid matching image.png */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {servicesList.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-xl overflow-hidden border border-[#e2e2e4] hover:border-[#c5a059] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Thumbnail Image with Floating Gold Icon Badge */}
                  <div className="relative h-40 w-full overflow-hidden bg-[#0f1e36]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Dark gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                    {/* Floating Gold Icon Badge on bottom-left of the photo (identical to image.png) */}
                    <div className="absolute -bottom-3 left-4 w-9 h-9 rounded-lg bg-[#c5a059] border-2 border-white shadow-md flex items-center justify-center z-10">
                      {service.icon}
                    </div>
                  </div>

                  {/* Card Text Content */}
                  <div className="p-4 pt-6">
                    <span className="text-[9px] font-bold tracking-widest text-[#75777e] uppercase block mb-1">
                      {service.number}
                    </span>

                    <h3 className="font-serif text-base font-bold text-[#0f1e36] mb-2 group-hover:text-[#c5a059] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs text-[#44474d] leading-relaxed line-clamp-3 mb-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Learn More link with gold arrow */}
                <div className="p-4 pt-0">
                  <button
                    onClick={() => {
                      onNavigate(service.route);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-[#c5a059] group-hover:text-[#775a19] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          BOTTOM CALLOUT & SECOND RESERVATION FORM
          ======================================================== */}
      <section className="w-full bg-[#edeef0] py-16 lg:py-20 border-t border-[#e2e2e4]" id="bottom-consultation-section">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header as requested in user prompt */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c5a059] block mb-2">
              CLIENT ENGAGEMENT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-3">
              Your Legal Matters in Brazil, Handled with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed max-w-2xl mx-auto mb-6">
              Whether you are relocating, investing, acquiring property or managing legal matters from abroad, Caspani Lawyers provides personalized guidance tailored to your situation.
            </p>
            <a
              href="#bottom-intake-form"
              className="inline-flex items-center justify-center bg-[#c5a059] hover:bg-[#775a19] text-white px-7 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Schedule Your Legal Consultation
            </a>
          </div>

          {/* TWO-COLUMN LAYOUT: IMAGE ON THE LEFT, FORM ON THE RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto" id="bottom-intake-form">
            {/* Left Column: Curated Legal Practice Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="/images/image-3-desk-passport.jpg"
                  alt="Brazilian passport and legal reference books on an attorney's desk"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/95 via-[#0f1e36]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CASPANI LAWYERS • ADVOCACIA INTERNACIONAL
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    Direct Legal Counsel in Brazil
                  </h3>
                  <p className="text-xs text-[#edeef0] leading-relaxed">
                    Personalized legal assistance in immigration, citizenship, real estate, and cross-border transactions.
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-[#e9c176]">
                    <span>OAB/PR 58.420</span>
                    <span>Confidential Advice</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Full Reservation Form */}
            <div className="lg:col-span-7">
              <ConsultationForm
                id="services-bottom-reservation-form"
                title="Schedule Legal Consultation"
                subtitle="Direct response within 24 business hours from our bilingual attorney"
                presetService="Brazilian Visas & Residence Permits"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
