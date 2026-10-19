import type { PageContent } from '../types';

// Source: Document 1, tab "Marriage Permanent Residency"
export const marriageResidency: PageContent = {
  route: 'services/immigration/permanent-residency-marriage',
  aliases: ['subpage/brazil-immigration/marriage-permanent-residency'],
  seo: {
    title: 'Brazil Residency Through Marriage | Caspani Lawyers',
    description:
      'Married to a Brazilian citizen? Get legal assistance with marriage-based residency, stable unions, documentation and Federal Police procedures.'
  },
  breadcrumb: [
    { label: 'Services', route: 'services' },
    { label: 'Brazil Immigration', route: 'services/immigration' },
    { label: 'Marriage Permanent Residency' }
  ],
  formService: 'Marriage Permanent Residency',
  hero: {
    title: 'Marriage Permanent Residency in Brazil',
    subtitle: 'Legal assistance for foreigners married to Brazilian citizens or in a legally recognized stable union.',
    paragraphs: [
      'We help you navigate the Brazilian residency process with personalized legal guidance, proper documentation, and assistance with Federal Police procedures.'
    ],
    ctas: ['Book a Legal Consultation', 'Learn About the Process'],
    badges: [
      'Licensed Brazilian Attorney (OAB)',
      'Personalized Legal Guidance',
      'Multilingual Assistance',
      'Confidential Legal Services'
    ]
  },
  sections: [
    {
      id: 'build-your-life-in-brazil-together',
      kind: 'text',
      eyebrow: 'How We Help',
      title: 'Build Your Life in Brazil Together',
      intro: [
        'If you are married to a Brazilian citizen or in a legally recognized stable union (união estável), you may qualify for a Brazilian residence permit based on family reunification.',
        'At Caspani Lawyers, we provide legal assistance throughout the process, from eligibility assessment and document preparation to application submission and Federal Police registration.',
        'Whether you are currently living in Brazil or applying from abroad, we help you understand your legal options and the requirements applicable to your circumstances.'
      ],
      cta: 'Speak With a Brazilian Immigration Lawyer',
      image: '/images/inheritance-probate.jpg',
      imageAlt: 'Family together'
    },
    {
      id: 'why-choose-caspani-lawyers',
      kind: 'cards',
      eyebrow: 'Why Choose Caspani Lawyers?',
      title: 'Reliable Legal Support for Your New Chapter',
      intro: [
        'Moving to Brazil to live with your spouse or partner is an important decision. Our legal services are designed to make the immigration process clearer, more organized, and legally secure.'
      ],
      items: [
        {
          title: 'Personalized Immigration Strategy',
          text: [
            'We evaluate your individual circumstances, marital status, and immigration history to identify the appropriate legal pathway under Brazilian immigration law.'
          ]
        },
        {
          title: 'Complete Document Preparation',
          text: [
            'We assist with the preparation and review of required documents, including marriage certificates, proof of stable union, translations, apostilles, and other supporting evidence.'
          ]
        },
        {
          title: 'Federal Police Assistance',
          text: [
            'Our services include guidance on immigration applications, Federal Police appointments, migration registration, and procedural follow-up.'
          ]
        },
        {
          title: 'Direct Attorney Communication',
          text: ['Communicate directly with your Brazilian immigration lawyer and receive clear explanations throughout your case.']
        },
        {
          title: 'Support for International Couples',
          text: [
            'We assist foreign spouses and partners, including couples married abroad, applicants living outside Brazil, and those seeking residency through a recognized stable union.'
          ]
        }
      ]
    },
    {
      id: 'how-to-obtain-residency-through-marriage',
      kind: 'steps',
      eyebrow: 'How to Obtain Residency in Brazil Through Marriage',
      title: 'Your Brazilian Residency Application: Step by Step',
      items: [
        {
          title: 'Initial Legal Consultation',
          text: ['We assess your eligibility, review your circumstances, and identify the appropriate immigration procedure.']
        },
        {
          title: 'Document Preparation',
          text: [
            'We provide a personalized document checklist and assist with the review, translation, apostille, and legalization requirements, where applicable.'
          ]
        },
        {
          title: 'Immigration Application',
          text: ['We prepare and assist with submitting your application to the competent Brazilian immigration authorities.']
        },
        {
          title: 'Federal Police Registration',
          text: [
            'We guide you through applicable Federal Police procedures, appointments, identification requirements, and requests for additional documentation.'
          ]
        },
        {
          title: 'Residency Approval & Documentation',
          text: [
            'Following approval, we assist with the applicable migration registration and residence documentation, including the RNM and CRNM.'
          ]
        }
      ],
      outro: ['The applicable residence period and conditions depend on the legal basis and the decision of the competent authorities.']
    },
    {
      id: 'documents-required',
      kind: 'text',
      eyebrow: 'Documents Required for Marriage-Based Residency in Brazil',
      title: 'What Do You Need to Apply?',
      intro: [
        'The required documents depend on your nationality, immigration history, marital status, and whether you apply from Brazil or abroad.',
        'Common documentation may include:'
      ],
      bullets: [
        'Valid passport or accepted identity document.',
        'Marriage certificate or legally sufficient evidence of a stable union (união estável).',
        "Brazilian spouse's or partner's identification documents.",
        'Criminal background certificates, when required.',
        'Applicable declarations and supporting documents.',
        'Apostilled or legalized foreign documents, where required.',
        'Certified translations into Portuguese, where applicable.',
        'Additional documents requested by Brazilian immigration authorities.'
      ],
      outro: ['Our legal team reviews your individual circumstances and provides a personalized checklist before preparing your application.'],
      image: '/images/recognition-passport.jpg',
      imageAlt: 'Brazilian passport on a world map'
    },
    {
      id: 'marriage-vs-stable-union',
      kind: 'text',
      eyebrow: 'Marriage vs. Stable Union in Brazil',
      title: 'Can You Apply for Brazilian Residency Without Being Married?',
      intro: [
        'Yes. Brazilian immigration law provides family reunification pathways for eligible spouses and partners in a legally recognized stable union (união estável).',
        'However, the documentation required to establish a stable union differs from the evidence normally presented by legally married couples.',
        'Our immigration lawyer can assess your relationship documentation and explain the requirements applicable to your case.'
      ],
      image: '/images/desk-passport.jpg',
      imageAlt: 'Brazilian passport and immigration law books on a desk'
    },
    {
      id: 'apply-from-abroad',
      kind: 'text',
      eyebrow: 'Applying From Abroad',
      title: 'Can You Apply for Brazilian Residency From Abroad?',
      intro: [
        'Foreign nationals married to Brazilian citizens may have different procedural options depending on their circumstances.',
        'Applicants outside Brazil may be eligible to request a family reunion visa through a Brazilian consular authority.',
        'Those already in Brazil may qualify to apply for residence authorization before the competent immigration authorities.',
        'We help determine the appropriate route based on your location, nationality, and legal status.'
      ],
      image: '/images/international-legal-services.jpg',
      imageAlt: 'International legal services'
    },
    {
      id: 'marriage-and-citizenship',
      kind: 'text',
      eyebrow: 'Brazilian Citizenship',
      title: 'Does Marriage Automatically Grant Brazilian Citizenship?',
      intro: [
        'No. Marriage to a Brazilian citizen does not automatically grant Brazilian nationality.',
        'However, under certain conditions, marriage to a Brazilian citizen may reduce the residence period required for ordinary naturalization to one year.',
        'Applicants must still meet the other applicable legal requirements.',
        'At Caspani Lawyers, we assess both your immediate residency options and your potential future eligibility for Brazilian citizenship.'
      ],
      image: '/images/office-documents.jpg',
      imageAlt: 'Attorney reviewing immigration documents'
    }
  ],
  faqs: [
    {
      question: 'Can I obtain permanent residency in Brazil by marrying a Brazilian citizen?',
      answer:
        'Marriage to a Brazilian citizen may establish eligibility for residence authorization based on family reunification, subject to the applicable legal requirements.'
    },
    {
      question: 'Can I apply through a stable union instead of marriage?',
      answer:
        'Yes. A legally recognized stable union may provide a basis for family reunification residency when the required conditions and supporting evidence are satisfied.'
    },
    {
      question: 'Can I apply if my marriage took place outside Brazil?',
      answer:
        'Yes, potentially. Foreign marriages may be used in Brazilian immigration procedures, subject to the applicable documentary and registration requirements.'
    },
    {
      question: 'Do I need to be physically present in Brazil?',
      answer:
        'The requirements depend on the immigration procedure. Some steps may be initiated abroad, while biometric collection and migration registration generally require personal attendance in Brazil.'
    },
    {
      question: 'Can I work in Brazil after obtaining residency?',
      answer:
        'Residence authorization based on family reunification generally allows the foreign national to work in Brazil, subject to applicable legal requirements.'
    },
    {
      question: 'How long does the process take?',
      answer:
        'Processing times vary depending on the competent authority, the completeness of the documentation, and the circumstances of each application.'
    },
    {
      question: 'What happens if I divorce after obtaining residency?',
      answer:
        'The immigration consequences of divorce or separation depend on the specific residence authorization, the circumstances of the relationship, and the applicable law. Individual legal assessment is recommended.'
    }
  ],
  closing: {
    eyebrow: 'Start Your New Life in Brazil With Legal Guidance',
    title: 'Book a Consultation With a Brazilian Immigration Lawyer',
    paragraphs: [
      'Whether you are married to a Brazilian citizen, planning to marry, or seeking residency through a stable union, Caspani Lawyers can help you understand the legal requirements and available immigration pathways.',
      'Receive personalized guidance, a document checklist tailored to your circumstances, and a legal strategy for your Brazilian residency application.'
    ],
    ctas: ['Schedule Your Legal Consultation'],
    tagline: 'Brazilian Immigration & International Legal Services'
  }
};
