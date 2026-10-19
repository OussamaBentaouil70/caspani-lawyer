import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Lock, Scale, ShieldCheck } from 'lucide-react';
import { ConsultationForm } from './ConsultationForm';
import { FaqAccordion } from './FaqAccordion';
import type { ContentItem, ContentSection, PageContent } from '../content/types';

interface ContentPageProps {
  content: PageContent;
  onNavigate: (route: string) => void;
}

const WHATSAPP_URL = 'https://wa.me/5541998247700';
/** Shared background for every hero that carries the consultation form */
const HERO_IMAGE = '/images/hero-rio.jpg';

/** Images for sections whose content file does not name one; each page starts at a different offset */
const SECTION_IMAGES: [string, string][] = [
  ['/images/desk-passport.jpg', 'Brazilian passport and law books on an attorney desk'],
  ['/images/office-documents.jpg', 'Attorney reviewing legal documents'],
  ['/images/legal-services.jpg', 'Scales of justice'],
  ['/images/recognition-passport.jpg', 'Brazilian passport on a world map'],
  ['/images/erica-studio-1.jpg', 'Erica Montarini Gaspani, Brazilian attorney'],
  ['/images/services-desk.jpg', 'Law books and globe in a law office'],
  ['/images/brazil-immigration.jpg', 'Brazilian flag'],
  ['/images/international-legal-services.jpg', 'International legal services'],
  ['/images/litigation.jpg', 'Judge gavel'],
  ['/images/erica-studio-2.jpg', 'Erica Montarini Gaspani, Brazilian attorney'],
  ['/images/home-justice.jpg', 'Lady Justice statue in a law library'],
  ['/images/team-portrait.jpg', 'The Caspani Lawyers team']
];

const routeOffset = (route: string) => [...route].reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % SECTION_IMAGES.length;

/** Rounded photo with a caption card, used beside section content */
const SectionImage: React.FC<{ src: string; alt: string; eyebrow?: string; title?: string; className?: string }> = ({
  src,
  alt,
  eyebrow,
  title,
  className = 'h-72 sm:h-96 lg:h-[460px]'
}) => (
  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e2e4]">
    <img src={src} alt={alt} className={`w-full object-cover object-[center_25%] ${className}`} loading="lazy" />
    {title && (
      <div className="absolute bottom-4 left-4 right-4 bg-[#0f1e36]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#c5a059]/30">
        <span className="text-[10px] uppercase tracking-wider text-[#fed488] block">{eyebrow ?? 'Caspani Lawyers'}</span>
        <span className="font-serif text-sm font-bold">{title}</span>
      </div>
    )}
  </div>
);

/** Renders **bold** markup inside an otherwise plain string */
const Rich: React.FC<{ text: string }> = ({ text }) => (
  <>
    {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={i} className="font-semibold text-inherit">{part.slice(2, -2)}</strong>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    )}
  </>
);

const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

const isContactCta = (label: string) => /contact|whatsapp/i.test(label);

/** A CTA either opens WhatsApp or scrolls to a consultation form on the page */
const CtaButton: React.FC<{ label: string; target: string; variant?: 'gold' | 'navy' | 'ghost' | 'outline' }> = ({
  label,
  target,
  variant = 'navy'
}) => {
  const styles = {
    gold: 'bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b] shadow-lg',
    navy: 'bg-[#0f1e36] hover:bg-[#775a19] text-white shadow-sm',
    ghost: 'bg-white/10 hover:bg-white/20 text-white border border-white/30',
    outline: 'bg-white hover:bg-[#f3f3f5] text-[#0f1e36] border border-[#c5c6ce]'
  }[variant];
  const className = `inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${styles}`;

  if (isContactCta(label)) {
    return (
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={className}>
        <span className="material-symbols-outlined text-[18px]">chat</span>
        <span>{label}</span>
      </a>
    );
  }
  return (
    <button type="button" onClick={() => scrollToId(target)} className={className}>
      <span>{label}</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  );
};

const SectionHeader: React.FC<{ section: ContentSection; dark?: boolean; center?: boolean }> = ({ section, dark, center }) => (
  <div className={center ? 'text-center max-w-3xl mx-auto mb-12' : 'mb-6'}>
    {section.eyebrow && (
      <span className={`text-[11px] font-bold uppercase tracking-[0.2em] block mb-2 ${dark ? 'text-[#fed488]' : 'text-[#775a19]'}`}>
        {section.eyebrow}
      </span>
    )}
    {section.title && (
      <h2 className={`font-serif text-3xl sm:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-[#0f1e36]'}`}>{section.title}</h2>
    )}
    {section.intro?.map((p) => (
      <p key={p} className={`text-sm sm:text-base leading-relaxed mb-3 ${dark ? 'text-[#edeef0]' : 'text-[#44474d]'}`}>
        <Rich text={p} />
      </p>
    ))}
  </div>
);

const BulletList: React.FC<{ bullets: string[]; dark?: boolean; columns?: boolean }> = ({ bullets, dark, columns }) => (
  <ul className={`grid gap-2.5 mb-6 ${columns ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
    {bullets.map((b) => (
      <li key={b} className={`flex items-start gap-2.5 text-sm leading-relaxed ${dark ? 'text-[#edeef0]' : 'text-[#1a1c1d]'}`}>
        <CheckCircle2 className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${dark ? 'text-[#fed488]' : 'text-[#775a19]'}`} />
        <span>
          <Rich text={b} />
        </span>
      </li>
    ))}
  </ul>
);

const Outro: React.FC<{ section: ContentSection; dark?: boolean; center?: boolean; onNavigate: (route: string) => void }> = ({
  section,
  dark,
  center,
  onNavigate
}) => (
  <>
    {section.outro?.map((p) => (
      <p
        key={p}
        className={`text-sm leading-relaxed mb-3 ${center ? 'text-center max-w-3xl mx-auto' : ''} ${dark ? 'text-[#edeef0]' : 'text-[#44474d]'}`}
      >
        <Rich text={p} />
      </p>
    ))}
    {section.cta && (
      <div className={`mt-4 ${center ? 'text-center' : ''}`}>
        {section.ctaRoute ? (
          <button
            type="button"
            onClick={() => onNavigate(section.ctaRoute!)}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              dark ? 'bg-[#e9c176] hover:bg-[#c5a059] text-[#121c2b]' : 'bg-[#0f1e36] hover:bg-[#775a19] text-white'
            }`}
          >
            <span>{section.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <CtaButton label={section.cta} target="bottom-form" variant={dark ? 'gold' : 'navy'} />
        )}
      </div>
    )}
  </>
);

const ItemCard: React.FC<{ item: ContentItem; dark?: boolean; onNavigate: (route: string) => void }> = ({ item, dark, onNavigate }) => (
  <div
    className={`rounded-xl p-6 border transition-all flex flex-col ${
      dark
        ? 'bg-white/10 border-white/15 hover:border-[#fed488]/60'
        : 'bg-white border-[#e2e2e4] hover:border-[#c5a059]/60 shadow-xs hover:shadow-md'
    }`}
  >
    <div className={`w-8 h-[2px] mb-4 ${dark ? 'bg-[#fed488]' : 'bg-[#775a19]'}`}></div>
    <h3 className={`font-serif text-lg font-bold mb-2 leading-snug ${dark ? 'text-white' : 'text-[#0f1e36]'}`}>
      <Rich text={item.title} />
    </h3>
    {item.text?.map((t) => (
      <p key={t} className={`text-sm leading-relaxed mb-2 ${dark ? 'text-[#edeef0]' : 'text-[#44474d]'}`}>
        <Rich text={t} />
      </p>
    ))}
    {item.bullets && item.bullets.length > 0 && (
      <ul className="mt-2 space-y-1.5">
        {item.bullets.map((b) => (
          <li key={b} className={`flex items-start gap-2 text-sm ${dark ? 'text-[#edeef0]' : 'text-[#1a1c1d]'}`}>
            <span className={dark ? 'text-[#fed488]' : 'text-[#775a19]'}>◆</span>
            <span>
              <Rich text={b} />
            </span>
          </li>
        ))}
      </ul>
    )}
    {item.cta && (
      <button
        type="button"
        onClick={() => (item.route ? onNavigate(item.route) : scrollToId('bottom-form'))}
        className={`mt-auto pt-4 text-left text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer transition-colors ${
          dark ? 'text-[#fed488] hover:text-white' : 'text-[#775a19] hover:text-[#0f1e36]'
        }`}
      >
        <span>{item.cta}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    )}
  </div>
);

const gridCols = (count: number) =>
  count === 4 || count === 2 ? 'md:grid-cols-2' : count % 3 === 0 || count > 4 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2';

const Section: React.FC<{
  section: ContentSection;
  index: number;
  fallbackImage: [string, string];
  onNavigate: (route: string) => void;
}> = ({ section, index, fallbackImage, onNavigate }) => {
  const image = section.image ?? fallbackImage[0];
  const imageAlt = section.imageAlt ?? (section.image ? section.title ?? '' : fallbackImage[1]);
  // "Why choose us" sections get the dark navy treatment
  const dark = /why (choose|clients|retirees)/i.test(`${section.eyebrow ?? ''} ${section.title ?? ''}`) && section.kind === 'cards';
  const bg = dark ? 'bg-[#0f1e36]' : index % 2 === 0 ? 'bg-white' : 'bg-[#f9f9fb]';
  const wrapper = `w-full ${bg} py-16 lg:py-24 border-b border-[#e2e2e4]`;

  if (section.kind === 'text') {
    const imageLeft = index % 4 === 0;
    const body = (
      <div>
        <SectionHeader section={section} />
        {section.items?.map((item) => (
          <div key={item.title} className="mb-5">
            <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-2">
              <Rich text={item.title} />
            </h3>
            {item.text?.map((t) => (
              <p key={t} className="text-sm sm:text-base text-[#44474d] leading-relaxed mb-2">
                <Rich text={t} />
              </p>
            ))}
            {item.bullets && <BulletList bullets={item.bullets} />}
          </div>
        ))}
        {section.bullets && <BulletList bullets={section.bullets} />}
        <Outro section={section} onNavigate={onNavigate} />
      </div>
    );

    return (
      <section className={wrapper} id={section.id}>
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className={`lg:col-span-5 ${imageLeft ? '' : 'lg:order-2'}`}>
              <SectionImage src={image} alt={imageAlt} eyebrow={section.eyebrow} title={section.title} />
            </div>
            <div className="lg:col-span-7">{body}</div>
          </div>
        </div>
      </section>
    );
  }

  if (section.kind === 'steps') {
    return (
      <section className={wrapper} id={section.id}>
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionImage
                src={image}
                alt={imageAlt}
                eyebrow={section.eyebrow}
                title={section.title}
                className="h-64 sm:h-80 lg:h-[520px]"
              />
            </div>
            <div className="lg:col-span-7">
              <SectionHeader section={section} />
              <ol className="space-y-4 mb-8">
                {section.items?.map((item, i) => (
                  <li key={item.title} className="flex gap-5 bg-white rounded-xl p-6 border border-[#e2e2e4] shadow-xs">
                    <span className="w-11 h-11 rounded-full bg-[#0f1e36] text-[#fed488] font-serif text-lg font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#0f1e36] mb-1">
                        <Rich text={item.title} />
                      </h3>
                      {item.text?.map((t) => (
                        <p key={t} className="text-sm text-[#44474d] leading-relaxed mb-1">
                          <Rich text={t} />
                        </p>
                      ))}
                      {item.bullets && <BulletList bullets={item.bullets} />}
                    </div>
                  </li>
                ))}
              </ol>
              {section.bullets && <BulletList bullets={section.bullets} columns />}
              <Outro section={section} onNavigate={onNavigate} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section.kind === 'links') {
    return (
      <section className={wrapper} id={section.id}>
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <SectionHeader section={section} center />
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8`}>
            {section.items?.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => (item.route ? onNavigate(item.route) : scrollToId('bottom-form'))}
                className="group text-left bg-white rounded-xl p-6 border border-[#e2e2e4] hover:border-[#c5a059] shadow-xs hover:shadow-md transition-all flex items-start justify-between gap-4 cursor-pointer"
              >
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0f1e36] group-hover:text-[#775a19] transition-colors mb-1">
                    {item.title}
                  </h3>
                  {item.text?.map((t) => (
                    <p key={t} className="text-sm text-[#44474d] leading-relaxed">
                      {t}
                    </p>
                  ))}
                  {!item.route && <p className="text-xs text-[#775a19] mt-1">Request a consultation</p>}
                </div>
                <ChevronRight className="w-5 h-5 text-[#c5a059] shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
              </button>
            ))}
          </div>
          <Outro section={section} center onNavigate={onNavigate} />
        </div>
      </section>
    );
  }

  // cards
  const count = section.items?.length ?? 0;
  return (
    <section className={wrapper} id={section.id}>
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          <div className="lg:col-span-7">
            <SectionHeader section={section} dark={dark} />
          </div>
          <div className="lg:col-span-5">
            <SectionImage src={image} alt={imageAlt} className="h-56 sm:h-72 lg:h-80" />
          </div>
        </div>
        {section.bullets && !count && (
          <div className="max-w-4xl mx-auto">
            <BulletList bullets={section.bullets} dark={dark} columns />
          </div>
        )}
        <div className={`grid grid-cols-1 ${gridCols(count)} gap-6 mb-8`}>
          {section.items?.map((item) => (
            <ItemCard key={item.title} item={item} dark={dark} onNavigate={onNavigate} />
          ))}
        </div>
        {section.bullets && count > 0 && (
          <div className="max-w-4xl mx-auto">
            <BulletList bullets={section.bullets} dark={dark} columns />
          </div>
        )}
        <Outro section={section} dark={dark} center onNavigate={onNavigate} />
      </div>
    </section>
  );
};

/** Data-driven legal practice page: hero + intake form, content sections, FAQ, closing reservation section */
export const ContentPage: React.FC<ContentPageProps> = ({ content, onNavigate }) => {
  const { hero, sections, faqs, closing } = content;

  useEffect(() => {
    document.title = content.seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.seo.description);
  }, [content]);

  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      {/* HERO — intake form on the right */}
      <section className="relative w-full bg-[#0f1e36] text-white py-12 lg:py-20 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/95 via-[#0f1e36]/85 to-[#0f1e36]/55 pointer-events-none"></div>

        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-[#e9c176] mb-6">
            {content.breadcrumb.map((crumb, i) => (
              <React.Fragment key={crumb.label}>
                {i > 0 && <span className="text-white/50">›</span>}
                {crumb.route ? (
                  <button onClick={() => onNavigate(crumb.route!)} className="hover:text-white hover:underline cursor-pointer">
                    {crumb.label}
                  </button>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7 flex flex-col items-start">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] font-bold text-white mb-4">{hero.title}</h1>
              {hero.subtitle && <p className="text-lg sm:text-xl text-[#e9c176] font-medium leading-relaxed mb-6">{hero.subtitle}</p>}
              <div className="space-y-3 text-sm sm:text-base text-[#edeef0] leading-relaxed max-w-2xl mb-8">
                {hero.paragraphs.map((p) => (
                  <p key={p}>
                    <Rich text={p} />
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                {hero.ctas[0] && <CtaButton label={hero.ctas[0]} target="hero-form" variant="gold" />}
                {hero.ctas[1] && <CtaButton label={hero.ctas[1]} target={sections[0]?.id ?? 'bottom-form'} variant="ghost" />}
              </div>

              {hero.badges.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 w-full pt-6 border-t border-white/15">
                  {hero.badges.map((badge) => (
                    <div key={badge} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#edeef0]">
                      <ShieldCheck className="w-4 h-4 text-[#e9c176] shrink-0" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-5 w-full" id="hero-form">
              <div className="rounded-xl ring-1 ring-[#e9c176]/60">
                <ConsultationForm
                  id="hero-intake"
                  title="Request Your Consultation"
                  subtitle="Tell us about your situation and our office will contact you with the next steps."
                  presetService={content.formService}
                  extraField={content.formExtra}
                  compact
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      {sections.map((section, index) => (
        <Section
          key={section.id}
          section={section}
          index={index}
          fallbackImage={SECTION_IMAGES[(routeOffset(content.route) + index) % SECTION_IMAGES.length]}
          onNavigate={onNavigate}
        />
      ))}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="w-full bg-[#f3f3f5] py-16 lg:py-24 border-b border-[#e2e2e4]" id="faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19] block mb-2">
                {content.faqEyebrow ?? 'FREQUENTLY ASKED QUESTIONS'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36]">{content.faqTitle ?? 'Frequently Asked Questions'}</h2>
            </div>
            <FaqAccordion items={faqs} />
          </div>
        </section>
      )}

      {/* CLOSING — Image 3 on the left, consultation form on the right */}
      <section className="w-full bg-[#edeef0] py-16 lg:py-24" id="closing">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          {closing && (
            <div className="text-center max-w-3xl mx-auto mb-12">
              {closing.eyebrow && (
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#775a19] block mb-2">{closing.eyebrow}</span>
              )}
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4">{closing.title}</h2>
              {closing.paragraphs.map((p) => (
                <p key={p} className="text-sm sm:text-base text-[#44474d] leading-relaxed mb-3">
                  <Rich text={p} />
                </p>
              ))}
              {closing.ctas.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                  {closing.ctas.map((cta, i) => (
                    <CtaButton key={cta} label={cta} target="bottom-form" variant={i === 0 ? 'navy' : 'outline'} />
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#c5c6ce]">
                <img
                  src="/images/image-3-desk-passport.jpg"
                  alt="Brazilian passport and legal reference books on an attorney's desk"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36]/95 via-[#0f1e36]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e9c176] mb-1">
                    CASPANI LAWYERS • OAB/PR 58.420
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-3">{content.formService}</h3>
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="inline-flex items-center gap-1 bg-white/15 px-2.5 py-1 rounded">
                      <Lock className="w-3 h-3 text-[#e9c176]" /> Strict Confidentiality
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white/15 px-2.5 py-1 rounded">
                      <Scale className="w-3 h-3 text-[#e9c176]" /> Direct Attorney Representation
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#e2e2e4] text-xs text-[#44474d] leading-relaxed">
                <strong className="text-[#0f1e36] block mb-1">Licensed Brazilian Attorney</strong>
                Erica Montarini Gaspani is registered with the Ordem dos Advogados do Brasil, Paraná Section, under OAB/PR 58.420.
              </div>
            </div>

            <div className="lg:col-span-7" id="bottom-form">
              <ConsultationForm
                id="bottom-intake"
                title="Schedule Your Legal Consultation"
                presetService={content.formService}
                extraField={content.formExtra}
              />
            </div>
          </div>

          {(closing?.tagline || content.disclaimer) && (
            <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-[#c5c6ce] text-center">
              {closing?.tagline && (
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#775a19] mb-3">
                  Caspani Lawyers | Advocacia Internacional — {closing.tagline}
                </p>
              )}
              {content.disclaimer && (
                <p className="text-[11px] text-[#5f6368] leading-relaxed">
                  <Rich text={content.disclaimer} />
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
