import type { PageContent } from '../types';

// Source: Document 1, tab "Brazil Immigration" (pathways list, consultation CTA and SEO metadata)
export const immigrationHub: PageContent = {
  route: 'services/immigration',
  aliases: ['category/brazil-immigration'],
  seo: {
    title: 'Brazil Immigration Lawyer & Residency Services | Caspani Lawyers',
    description:
      'Brazilian immigration lawyer assisting foreigners with visas, residency, family reunion, investor visas and Federal Police procedures.'
  },
  breadcrumb: [{ label: 'Services', route: 'services' }, { label: 'Brazil Immigration' }],
  formService: 'Brazilian Visas & Residence Permits',
  hero: {
    title: 'Brazil Immigration Lawyer & Residency Services',
    subtitle: 'Legal assistance with immigration procedures, work visas, family reunification and residence permits in Brazil.',
    paragraphs: [
      'Brazilian immigration lawyer assisting foreigners with visas, residency, family reunion, investor visas and Federal Police procedures.',
      'Whether you are applying from abroad or already living in Brazil, our legal team can help you understand your options, prepare your documentation and navigate the immigration process.'
    ],
    ctas: ['Book a Consultation', 'Explore Immigration Pathways'],
    badges: [
      'Licensed Brazilian Attorney (OAB)',
      'Personalized Legal Guidance',
      'Multilingual Assistance',
      'Confidential and Secure Process'
    ]
  },
  sections: [
    {
      id: 'immigration-pathways',
      kind: 'links',
      eyebrow: 'Brazil Immigration',
      title: 'Brazilian Immigration Pathways',
      items: [
        { title: 'Family Reunion & Marriage Residency', route: 'services/immigration/family-reunion-visa' },
        { title: 'Residency Through a Brazilian Child', route: 'services/immigration/permanent-residency-childbirth' },
        { title: 'Digital Nomad Visa', route: 'services/immigration/digital-nomad-visa' },
        { title: 'Retirement Visa', route: 'services/immigration/retirement-visa' },
        { title: 'Work Visas & Corporate Immigration', route: 'services/immigration/work-visas-brazil' },
        { title: 'Investor Visa & Residency', route: 'services/immigration/company-investment-visa-brazil' },
        { title: 'Student Visa' },
        { title: 'Mercosur Residency' },
        { title: 'Humanitarian Visas & Refugee Protection' },
        { title: 'Immigration Appeals & Legal Defense' }
      ]
    }
  ],
  faqs: [],
  closing: {
    title: 'Find the Right Immigration Pathway for Your Future in Brazil',
    paragraphs: [
      'Whether you are applying from abroad or already living in Brazil, our legal team can help you understand your options, prepare your documentation and navigate the immigration process.'
    ],
    ctas: ['Schedule Your Immigration Consultation']
  }
};
