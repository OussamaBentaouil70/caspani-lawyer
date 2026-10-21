import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight, Lock, Scale, ShieldCheck } from 'lucide-react';
import { ConsultationForm } from './ConsultationForm';
import { FaqAccordion } from './FaqAccordion';
import type { ContentItem, ContentSection, ContentTable, PageContent } from '../content/types';
import { WhatsAppIcon } from './WhatsAppIcon';

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

/** Photo with an offset navy block behind it — the one repeated signature element of the content sections */
const PhotoFrame: React.FC<{ src: string; alt: string; side?: 'left' | 'right'; className?: string }> = ({
  src,
  alt,
  side = 'left',
  className = 'h-72 sm:h-96 lg:h-[480px]'
}) => (
  <div className={`relative ${side === 'left' ? 'mr-5 mb-5' : 'ml-5 mb-5'}`}>
    <div
      aria-hidden="true"
      className={`absolute -bottom-5 w-2/3 h-2/3 bg-[#0f1e36] ${side === 'left' ? '-left-5' : '-right-5'}`}
    ></div>
    <img src={src} alt={alt} className={`relative w-full object-cover object-[center_25%] ${className}`} loading="lazy" />
  </div>
);

/** Renders **bold** markup and https:// addresses (as external links) inside an otherwise plain string */
const Rich: React.FC<{ text: string }> = ({ text }) => (
  <>
    {text.split(/(\*\*[^*]+\*\*|https:\/\/[^\s]+[^\s.,;)])/g).map((part, i) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={i} className="font-semibold text-inherit">{part.slice(2, -2)}</strong>
      ) : part.startsWith('https://') ? (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#775a19] underline underline-offset-2 break-all hover:text-[#0f1e36]"
        >
          {part}
        </a>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    )}
  </>
);

/** Hero copy: consecutive "- " lines form a list (e.g. a "You may be asking:" list); everything else is a paragraph */
const groupHeroParagraphs = (paragraphs: string[]): (string | string[])[] =>
  paragraphs.reduce<(string | string[])[]>((blocks, p) => {
    if (!p.startsWith('- ')) return [...blocks, p];
    const last = blocks[blocks.length - 1];
    if (Array.isArray(last)) {
      last.push(p.slice(2));
      return blocks;
    }
    return [...blocks, [p.slice(2)]];
  }, []);

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
        <WhatsAppIcon className="w-[18px] h-[18px]" />
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

// ---- Content-section building blocks (everything between the hero and the closing form) ----

const TITLE = 'font-serif font-normal text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.15] tracking-[-0.01em]';
const BODY = 'text-[15px] leading-[1.75]';

const SectionHeader: React.FC<{ section: ContentSection; dark?: boolean }> = ({ section, dark }) => (
  <div className="mb-8">
    {section.eyebrow && (
      <span className={`block text-[12px] font-semibold tracking-[0.08em] mb-3 ${dark ? 'text-[#e9c176]' : 'text-[#775a19]'}`}>
        {section.eyebrow}
      </span>
    )}
    {section.title && <h2 className={`${TITLE} mb-5 ${dark ? 'text-white' : 'text-[#0f1e36]'}`}>{section.title}</h2>}
    {section.intro?.map((p) => (
      <p key={p} className={`${BODY} max-w-[68ch] mb-3 ${dark ? 'text-[#d8dbe2]' : 'text-[#44474d]'}`}>
        <Rich text={p} />
      </p>
    ))}
    {section.table && <SectionTable table={section.table} />}
  </div>
);

const SectionTable: React.FC<{ table: ContentTable }> = ({ table }) => (
  <div className="mt-8 max-w-4xl">
    {table.caption && (
      <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#775a19] mb-3">{table.caption}</p>
    )}
    <div className="overflow-x-auto bg-white border border-[#e2e2e4] border-t-2 border-t-[#775a19]">
      <table className="w-full min-w-[520px] text-left border-collapse">
        <thead>
          <tr className="bg-[#0f1e36]">
            {table.headers.map((h) => (
              <th key={h} scope="col" className="px-5 py-3.5 text-[12px] font-semibold tracking-[0.06em] uppercase text-[#e9c176]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join('|')} className="border-t border-[#e2e2e4] even:bg-[#f8f9fa]">
              {row.map((cell, c) =>
                c === 0 ? (
                  <th key={c} scope="row" className="px-5 py-4 font-serif font-normal text-[16px] text-[#0f1e36] align-top">
                    <Rich text={cell} />
                  </th>
                ) : (
                  <td key={c} className="px-5 py-4 text-[15px] leading-relaxed text-[#44474d] align-top">
                    <Rich text={cell} />
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {table.note?.map((p, i) => (
      <p key={p} className={`${BODY} max-w-[68ch] ${i === 0 ? 'mt-4' : 'mt-2'} text-[#44474d]`}>
        <Rich text={p.replace(/^(Important:)/, '**$1**')} />
      </p>
    ))}
  </div>
);

const BulletList: React.FC<{ bullets: string[]; dark?: boolean; columns?: boolean }> = ({ bullets, dark, columns }) => (
  <ul className={`grid gap-x-8 gap-y-2.5 mb-6 ${columns ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
    {bullets.map((b) => (
      <li key={b} className={`flex items-start gap-3 text-[15px] leading-relaxed ${dark ? 'text-[#edeef0]' : 'text-[#1a1c1d]'}`}>
        <span aria-hidden="true" className={`w-3 h-px mt-[0.8em] shrink-0 ${dark ? 'bg-[#e9c176]' : 'bg-[#775a19]'}`}></span>
        <span>
          <Rich text={b} />
        </span>
      </li>
    ))}
  </ul>
);

/** Compact square-cornered button used inside content sections */
const SectionButton: React.FC<{ label: string; onClick?: () => void; dark?: boolean }> = ({ label, onClick, dark }) => {
  const className = `inline-flex items-center gap-2.5 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.06em] transition-colors cursor-pointer ${
    dark ? 'bg-[#e9c176] text-[#0f1e36] hover:bg-white' : 'bg-[#0f1e36] text-white hover:bg-[#775a19]'
  }`;
  if (isContactCta(label)) {
    return (
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={className}>
        <WhatsAppIcon className="w-4 h-4" />
        <span>{label}</span>
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick ?? (() => scrollToId('bottom-form'))} className={className}>
      <span>{label}</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  );
};

const Outro: React.FC<{ section: ContentSection; dark?: boolean; onNavigate: (route: string) => void }> = ({
  section,
  dark,
  onNavigate
}) => (
  <>
    {section.outro?.map((p) =>
      // A lone closing sentence or an "Important:" note is the section's key statement: give it a gold rule
      !dark && (/^Important:/i.test(p) || section.outro!.length === 1) ? (
        <p
          key={p}
          className="max-w-[60ch] my-4 border-l-2 border-[#775a19] pl-5 font-serif text-[18px] sm:text-[19px] leading-[1.6] text-[#0f1e36]"
        >
          <Rich text={p} />
        </p>
      ) : (
        <p key={p} className={`${BODY} max-w-[68ch] mb-3 ${dark ? 'text-[#d8dbe2]' : 'text-[#44474d]'}`}>
          <Rich text={p} />
        </p>
      )
    )}
    {section.cta && (
      <div className="mt-6">
        <SectionButton
          label={section.cta}
          dark={dark}
          onClick={section.ctaRoute ? () => onNavigate(section.ctaRoute!) : undefined}
        />
      </div>
    )}
  </>
);

const ItemBody: React.FC<{ item: ContentItem; dark?: boolean; onNavigate: (route: string) => void }> = ({ item, dark, onNavigate }) => (
  <>
    {item.text?.map((t) => (
      <p key={t} className={`${BODY} mb-2 ${dark ? 'text-[#d8dbe2]' : 'text-[#44474d]'}`}>
        <Rich text={t} />
      </p>
    ))}
    {item.bullets && item.bullets.length > 0 && (
      <div className="mt-3">
        <BulletList bullets={item.bullets} dark={dark} />
      </div>
    )}
    {item.note?.map((t) => (
      <p key={t} className={`${BODY} mt-3 ${dark ? 'text-[#d8dbe2]' : 'text-[#44474d]'}`}>
        <Rich text={t} />
      </p>
    ))}
    {item.cta && (
      <button
        type="button"
        onClick={() => (item.route ? onNavigate(item.route) : scrollToId('bottom-form'))}
        className={`mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold cursor-pointer underline-offset-4 hover:underline ${
          dark ? 'text-[#e9c176]' : 'text-[#775a19]'
        }`}
      >
        <span>{item.cta}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    )}
  </>
);

/** Items as a divided list beside a sticky heading (replaces card grids) */
const CardsList: React.FC<{ section: ContentSection; image: string; imageAlt: string; dark: boolean; onNavigate: (route: string) => void }> = ({
  section,
  image,
  imageAlt,
  dark,
  onNavigate
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
    <div className="lg:col-span-5 lg:sticky lg:top-28">
      <SectionHeader section={section} dark={dark} />
      {!dark && <PhotoFrame src={image} alt={imageAlt} className="h-56 sm:h-72" />}
      <div className={dark ? '' : 'mt-10'}>
        <Outro section={section} dark={dark} onNavigate={onNavigate} />
      </div>
    </div>
    <div className="lg:col-span-7">
      {section.bullets && <BulletList bullets={section.bullets} dark={dark} columns />}
      <ul className={dark ? 'grid grid-cols-1 md:grid-cols-2 gap-x-10' : ''}>
        {section.items?.map((item) => (
          <li key={item.title} className={`py-7 border-t ${dark ? 'border-white/15' : 'border-[#d9dbe0]'}`}>
            <h3 className={`font-serif font-normal text-[21px] leading-snug mb-2.5 ${dark ? 'text-white' : 'text-[#0f1e36]'}`}>
              <Rich text={item.title} />
            </h3>
            <ItemBody item={item} dark={dark} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/** Items as tabs beside a photo, used on alternate card sections to vary the rhythm */
const CardsTabs: React.FC<{ section: ContentSection; image: string; imageAlt: string; onNavigate: (route: string) => void }> = ({
  section,
  image,
  imageAlt,
  onNavigate
}) => {
  const items = section.items ?? [];
  const [active, setActive] = useState(0);
  const current = items[active];

  // Standard tab keyboard behaviour: arrows move the selection, Home/End jump to the ends
  const selectAndFocus = (index: number) => {
    const next = (index + items.length) % items.length;
    setActive(next);
    document.getElementById(`${section.id}-tab-${next}`)?.focus();
  };
  const onTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    const moves: Record<string, number> = { ArrowRight: index + 1, ArrowDown: index + 1, ArrowLeft: index - 1, ArrowUp: index - 1, Home: 0, End: items.length - 1 };
    if (e.key in moves) {
      e.preventDefault();
      selectAndFocus(moves[e.key]);
    }
  };

  return (
    <>
      <div className="max-w-3xl">
        <SectionHeader section={section} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <PhotoFrame src={image} alt={imageAlt} />
        </div>
        <div className="lg:col-span-7">
          <div role="tablist" aria-label={section.title ?? 'Topics'} className="flex flex-wrap gap-x-3 gap-y-3 mb-10">
            {items.map((item, i) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                id={`${section.id}-tab-${i}`}
                aria-selected={active === i}
                aria-controls={`${section.id}-panel`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
                title={item.title}
                className={`max-w-full truncate whitespace-nowrap px-4 py-2.5 text-[14px] leading-5 border-b-2 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775a19] ${
                  active === i
                    ? 'bg-[#0f1e36] text-white border-[#0f1e36]'
                    : 'bg-transparent text-[#5f6368] border-[#c5c6ce] hover:text-[#0f1e36] hover:border-[#0f1e36]'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          {current && (
            <div role="tabpanel" id={`${section.id}-panel`} aria-labelledby={`${section.id}-tab-${active}`}>
              <h3 className="font-serif font-normal text-[26px] leading-snug text-[#0f1e36] mb-4">
                <Rich text={current.title} />
              </h3>
              <ItemBody item={current} onNavigate={onNavigate} />
            </div>
          )}
          {section.bullets && (
            <div className="mt-6">
              <BulletList bullets={section.bullets} columns />
            </div>
          )}
          <div className="mt-6">
            <Outro section={section} onNavigate={onNavigate} />
          </div>
        </div>
      </div>
    </>
  );
};

type CardsVariant = 'list' | 'cards' | 'tabs' | 'index' | 'mosaic';

const avgTextLength = (items: ContentItem[]) =>
  items.reduce((sum, it) => sum + (it.text ?? []).join(' ').length, 0) / Math.max(items.length, 1);

/** Whether a layout suits a section's shape: tabs need few, substantial items; compact layouts need short ones */
const suits = (section: ContentSection, variant: CardsVariant) => {
  const items = section.items ?? [];
  const n = items.length;
  const hasBullets = items.some((it) => it.bullets?.length);
  const hasCtas = items.some((it) => it.cta);
  const short = avgTextLength(items) < 140;
  switch (variant) {
    case 'tabs':
      return n >= 3 && n <= 6 && (hasBullets || avgTextLength(items) >= 90);
    case 'index':
      return n >= 4 && !hasBullets && !hasCtas && short;
    case 'mosaic':
      return n >= 4 && n <= 10 && !hasBullets && short;
    default:
      return true;
  }
};

/** Picks a layout per card section, cycling through the rotation and skipping layouts that don't fit the content */
const pickCardsVariants = (sections: ContentSection[]): CardsVariant[] => {
  const ROTATION: CardsVariant[] = ['list', 'index', 'cards', 'mosaic', 'tabs'];
  let pointer = 0;
  return sections.map((s) => {
    if (s.kind !== 'cards') return 'list';
    for (let tries = 0; tries < ROTATION.length; tries++) {
      const candidate = ROTATION[(pointer + tries) % ROTATION.length];
      if (suits(s, candidate)) {
        pointer = (pointer + tries + 1) % ROTATION.length;
        return candidate;
      }
    }
    return 'list';
  });
};

/** Editorial index: term on the left, explanation on the right, hairline rules between rows */
const CardsIndex: React.FC<{ section: ContentSection; onNavigate: (route: string) => void }> = ({ section, onNavigate }) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
    <div className="lg:col-span-4 lg:sticky lg:top-28">
      <SectionHeader section={section} />
      <Outro section={section} onNavigate={onNavigate} />
    </div>
    <dl className="lg:col-span-8 border-b border-[#d9dbe0]">
      {section.bullets && (
        <div className="pb-6">
          <BulletList bullets={section.bullets} columns />
        </div>
      )}
      {section.items?.map((item) => (
        <div key={item.title} className="grid grid-cols-1 sm:grid-cols-[minmax(0,15rem)_1fr] gap-x-10 gap-y-1.5 py-5 border-t border-[#d9dbe0]">
          <dt className="font-serif text-[18px] leading-snug text-[#0f1e36]">
            <Rich text={item.title} />
          </dt>
          <dd className={`${BODY} text-[#44474d]`}>
            {item.text?.map((t) => (
              <span key={t} className="block">
                <Rich text={t} />
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  </div>
);

/** Tall photo carrying the section title in large type; items in two columns under fine gold rules */
const CardsMosaic: React.FC<{ section: ContentSection; image: string; imageAlt: string; onNavigate: (route: string) => void }> = ({
  section,
  image,
  imageAlt,
  onNavigate
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
    <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-[560px] overflow-hidden">
      <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover object-[center_25%]" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e36] via-[#0f1e36]/55 to-[#0f1e36]/5"></div>
      <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
        {section.eyebrow && (
          <span className="block text-[12px] font-semibold tracking-[0.08em] text-[#e9c176] mb-3">{section.eyebrow}</span>
        )}
        {section.title && (
          <h2 className="font-serif font-normal text-white text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.12] tracking-[-0.01em]">
            {section.title}
          </h2>
        )}
      </div>
    </div>
    <div className="lg:col-span-7 flex flex-col justify-center">
      {section.intro?.map((p) => (
        <p key={p} className={`${BODY} max-w-[68ch] mb-3 text-[#44474d]`}>
          <Rich text={p} />
        </p>
      ))}
      {section.table && <SectionTable table={section.table} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7 mt-6">
        {section.items?.map((item) => (
          <div key={item.title} className="border-t border-[#c9a45c] pt-4">
            <h3 className="font-serif font-normal text-[18px] leading-snug text-[#0f1e36] mb-1.5">
              <Rich text={item.title} />
            </h3>
            <ItemBody item={item} onNavigate={onNavigate} />
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Outro section={section} onNavigate={onNavigate} />
      </div>
    </div>
  </div>
);

/** Items as a grid of square-cornered cards, used on every third card section */
const CardsGrid: React.FC<{ section: ContentSection; onNavigate: (route: string) => void }> = ({ section, onNavigate }) => {
  const count = section.items?.length ?? 0;
  const cols = count === 2 || count === 4 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3';
  return (
    <>
      <div className="max-w-3xl">
        <SectionHeader section={section} />
      </div>
      <div className={`grid grid-cols-1 ${cols} gap-6`}>
        {section.items?.map((item) => (
          <article key={item.title} className="bg-white border border-[#e2e2e4] border-t-2 border-t-[#775a19] p-7 flex flex-col">
            <h3 className="font-serif font-normal text-[21px] leading-snug text-[#0f1e36] mb-3">
              <Rich text={item.title} />
            </h3>
            <ItemBody item={item} onNavigate={onNavigate} />
          </article>
        ))}
      </div>
      {section.bullets && (
        <div className="mt-10">
          <BulletList bullets={section.bullets} columns />
        </div>
      )}
      <div className="mt-8">
        <Outro section={section} onNavigate={onNavigate} />
      </div>
    </>
  );
};

const Section: React.FC<{
  section: ContentSection;
  index: number;
  /** Card sections rotate between a divided list, a card grid and tabs */
  cardsVariant: CardsVariant;
  fallbackImage: [string, string];
  onNavigate: (route: string) => void;
}> = ({ section, index, cardsVariant, fallbackImage, onNavigate }) => {
  const image = section.image ?? fallbackImage[0];
  const imageAlt = section.imageAlt ?? (section.image ? section.title ?? '' : fallbackImage[1]);
  // "Why choose us" sections are the one navy band in the middle of the page
  const dark = /why (choose|clients|retirees)/i.test(`${section.eyebrow ?? ''} ${section.title ?? ''}`) && section.kind === 'cards';
  const bg = dark ? 'bg-[#0f1e36]' : index % 2 === 0 ? 'bg-white' : 'bg-[#f4f5f7]';
  const wrapper = `w-full ${bg} py-20 lg:py-28`;
  const inner = 'max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12';

  if (section.kind === 'text') {
    const imageLeft = index % 4 === 0;
    return (
      <section className={wrapper} id={section.id}>
        <div className={inner}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className={`lg:col-span-5 ${imageLeft ? '' : 'lg:order-2'}`}>
              <PhotoFrame src={image} alt={imageAlt} side={imageLeft ? 'left' : 'right'} />
            </div>
            <div className="lg:col-span-7">
              <SectionHeader section={section} />
              {section.items?.map((item) => (
                <div key={item.title} className="mb-6">
                  <h3 className="font-serif font-normal text-[21px] leading-snug text-[#0f1e36] mb-2">
                    <Rich text={item.title} />
                  </h3>
                  <ItemBody item={item} onNavigate={onNavigate} />
                </div>
              ))}
              {section.bullets && <BulletList bullets={section.bullets} />}
              <Outro section={section} onNavigate={onNavigate} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section.kind === 'steps') {
    return (
      <section className={wrapper} id={section.id}>
        <div className={inner}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionHeader section={section} />
              <div className="hidden lg:block">
                <PhotoFrame src={image} alt={imageAlt} className="h-72" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <ol className="relative border-l border-[#c5c6ce] ml-5">
                {section.items?.map((item, i) => (
                  <li key={item.title} className="relative pl-10 pb-10 last:pb-0">
                    <span className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-white border border-[#775a19] text-[#775a19] font-serif text-[16px] flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h3 className="font-serif font-normal text-[21px] leading-snug text-[#0f1e36] pt-1.5 mb-2">
                      <Rich text={item.title} />
                    </h3>
                    <ItemBody item={item} onNavigate={onNavigate} />
                  </li>
                ))}
              </ol>
              {section.bullets && (
                <div className="mt-10">
                  <BulletList bullets={section.bullets} columns />
                </div>
              )}
              <div className="mt-8">
                <Outro section={section} onNavigate={onNavigate} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section.kind === 'links') {
    return (
      <section className={wrapper} id={section.id}>
        <div className={inner}>
          <div className="max-w-3xl">
            <SectionHeader section={section} />
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-b border-[#d9dbe0]">
            {section.items?.map((item) => (
              <li key={item.title} className="border-t border-[#d9dbe0]">
                <button
                  type="button"
                  onClick={() => (item.route ? onNavigate(item.route) : scrollToId('bottom-form'))}
                  className="group w-full flex items-center justify-between gap-4 py-6 text-left cursor-pointer"
                >
                  <span>
                    <span className="block font-serif text-[21px] text-[#0f1e36] group-hover:text-[#775a19] transition-colors">
                      {item.title}
                    </span>
                    {!item.route && <span className="block text-[13px] text-[#5f6368] mt-1">Request a consultation</span>}
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#775a19] shrink-0 transition-transform group-hover:translate-x-1" />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Outro section={section} onNavigate={onNavigate} />
          </div>
        </div>
      </section>
    );
  }

  // cards: the layout was chosen per section by pickCardsVariants; the navy band always uses the list
  const variant: CardsVariant = dark ? 'list' : cardsVariant;
  return (
    <section className={wrapper} id={section.id}>
      <div className={inner}>
        {variant === 'tabs' && <CardsTabs section={section} image={image} imageAlt={imageAlt} onNavigate={onNavigate} />}
        {variant === 'cards' && <CardsGrid section={section} onNavigate={onNavigate} />}
        {variant === 'index' && <CardsIndex section={section} onNavigate={onNavigate} />}
        {variant === 'mosaic' && (
          <CardsMosaic section={section} image={image} imageAlt={imageAlt} onNavigate={onNavigate} />
        )}
        {variant === 'list' && (
          <CardsList section={section} image={image} imageAlt={imageAlt} dark={dark} onNavigate={onNavigate} />
        )}
      </div>
    </section>
  );
};


/** Data-driven legal practice page: hero + intake form, content sections, FAQ, closing reservation section */
export const ContentPage: React.FC<ContentPageProps> = ({ content, onNavigate }) => {
  const { hero, sections, faqs, closing } = content;
  // Each card section gets a layout that fits its content, rotating so neighbouring sections differ
  const cardsVariants = pickCardsVariants(sections);

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
                {groupHeroParagraphs(hero.paragraphs).map((block) =>
                  Array.isArray(block) ? (
                    <ul key={block[0]} className="space-y-1.5 pl-1">
                      {block.map((li) => (
                        <li key={li} className="flex items-start gap-3">
                          <span aria-hidden="true" className="w-3 h-px mt-[0.75em] shrink-0 bg-[#e9c176]"></span>
                          <span>
                            <Rich text={li} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={block}>
                      <Rich text={block} />
                    </p>
                  )
                )}
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
          cardsVariant={cardsVariants[index]}
          fallbackImage={SECTION_IMAGES[(routeOffset(content.route) + index) % SECTION_IMAGES.length]}
          onNavigate={onNavigate}
        />
      ))}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="w-full bg-white py-20 lg:py-28 border-t border-[#e2e2e4]" id="faq">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="block text-[12px] font-semibold tracking-[0.08em] text-[#775a19] mb-3">
                {content.faqEyebrow ?? 'FREQUENTLY ASKED QUESTIONS'}
              </span>
              <h2 className="font-serif font-normal text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.15] tracking-[-0.01em] text-[#0f1e36] mb-5">
                {content.faqTitle ?? 'Frequently Asked Questions'}
              </h2>
              <p className="text-[15px] leading-[1.75] text-[#44474d] mb-6">Can't find your answer? Ask us directly.</p>
              <button
                type="button"
                onClick={() => scrollToId('bottom-form')}
                className="inline-flex items-center gap-2.5 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.06em] bg-[#0f1e36] text-white hover:bg-[#775a19] transition-colors cursor-pointer"
              >
                <span>Ask a Question</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={faqs} />
            </div>
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
