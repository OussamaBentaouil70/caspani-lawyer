// Content schema for pages rendered by ContentPage.
// Text supports **bold** inline markup; everything else is plain text.

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface ContentItem {
  title: string;
  text?: string[];
  bullets?: string[];
  /** Closing lines shown under the bullets */
  note?: string[];
  /** Button shown on the card */
  cta?: string;
  /** Page the card (or its button) navigates to; without it the button opens the consultation form */
  route?: string;
}

export interface ContentTable {
  caption?: string;
  headers: string[];
  rows: string[][];
  /** Lines shown under the table */
  note?: string[];
}

export interface ContentSection {
  id: string;
  /**
   * text  – paragraphs and bullet list, optionally next to an image
   * cards – grid of titled items
   * steps – numbered process
   * links – cards that navigate to other pages
   */
  kind: 'text' | 'cards' | 'steps' | 'links';
  eyebrow?: string;
  title?: string;
  intro?: string[];
  bullets?: string[];
  /** Comparison or example table shown under the intro */
  table?: ContentTable;
  items?: ContentItem[];
  outro?: string[];
  cta?: string;
  /** Page the section CTA navigates to; without it the CTA scrolls to the consultation form */
  ctaRoute?: string;
  image?: string;
  imageAlt?: string;
  /** 'plain': a text section without a photo (heading on the left, text on the right) */
  layout?: 'plain';
}

export interface PageContent {
  /** Canonical route without leading/trailing slashes, e.g. 'services/immigration/retirement-visa' */
  route: string;
  /** Older routes that should render the same page */
  aliases?: string[];
  seo: { title: string; description: string };
  breadcrumb: { label: string; route?: string }[];
  /** Pre-selected legal matter in the consultation forms */
  formService: string;
  /** Optional page-specific form question */
  formExtra?: { label: string; placeholder?: string; options?: string[] };
  hero: {
    title: string;
    subtitle?: string;
    paragraphs: string[];
    ctas: string[];
    badges: string[];
  };
  sections: ContentSection[];
  faqEyebrow?: string;
  faqTitle?: string;
  faqs: FaqEntry[];
  closing?: {
    eyebrow?: string;
    title: string;
    paragraphs: string[];
    ctas: string[];
    tagline?: string;
  };
  disclaimer?: string;
}
