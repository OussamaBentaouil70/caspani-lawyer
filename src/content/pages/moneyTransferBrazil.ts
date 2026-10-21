import type { PageContent } from '../types';

// Source: Document 1, tab "Money Transfer to Brazil" (short-format page, transcribed by hand)
export const moneyTransferBrazil: PageContent = {
  route: 'services/banking-money-transfers/money-transfer-to-brazil',
  aliases: ['subpage/banking-money/money-transfer-to-brazil'],
  seo: {
    title: 'International Money Transfers in Brazil | Caspani Lawyers',
    description:
      'Legal support for foreign property buyers, investors and non-residents moving funds to and from Brazil: payment clauses, source of funds, compliance and closing.'
  },
  breadcrumb: [
    { label: 'Services', route: 'services' },
    { label: 'Banking & Money Transfers', route: 'services/banking-money-transfers' },
    { label: 'Money Transfer to Brazil' }
  ],
  formService: 'Cross-Border Money Transfers & CDE Accounts',
  formExtra: {
    label: 'Purpose of Transfer',
    placeholder: 'Select the purpose',
    options: ['Property Purchase', 'Property Sale', 'Corporate Investment', 'Capital Contribution', 'Personal Funds', 'Inheritance', 'Other']
  },
  hero: {
    title: 'International Money Transfers in Brazil',
    subtitle: 'Legal Support for Foreign Property Buyers, Investors & Non-Residents',
    paragraphs: [
      'Move your funds across borders with the right legal documentation and a coordinated transaction strategy.',
      'Buying real estate in Brazil, investing in a Brazilian company, or transferring property sale proceeds abroad can involve complex legal, banking, and tax considerations.',
      'For international clients, the challenge is often not simply sending the money. It is ensuring that the transfer is correctly documented, accepted by the relevant financial institution, and consistent with the legal purpose of the transaction.',
      'At Caspani Lawyers | Advocacia Internacional, we provide legal assistance with cross-border transactions involving Brazil, including property purchase payments, investment documentation, corporate capital contributions, and international remittances following property sales.',
      'Our services focus on the Brazilian legal aspects of the transaction, including contractual payment obligations, source-of-funds documentation, compliance coordination, and legally appropriate closing arrangements.',
      'International funds transfers require more than a bank account. They require a clear legal purpose and properly coordinated documentation.'
    ],
    ctas: ['Book Your Paid Legal Consultation'],
    badges: []
  },
  sections: [
    {
      id: 'cross-border-money-transfer-legal-services',
      kind: 'cards',
      title: 'Our Cross-Border Money Transfer Legal Services',
      items: [
        {
          title: 'Property Purchase Payments',
          text: [
            'Legal assistance for international buyers transferring funds to acquire Brazilian real estate, including payment clauses, transaction documentation, and closing coordination.'
          ]
        },
        {
          title: 'Property Sale Proceeds',
          text: [
            'Legal support for property owners preparing to transfer sale proceeds abroad, including coordination of relevant transaction and tax documentation.'
          ]
        },
        {
          title: 'Corporate Investment Transfers',
          text: [
            'Assessment of the legal structure of foreign capital contributions, shareholder loans, and other qualifying corporate funding arrangements.'
          ]
        },
        {
          title: 'Source-of-Funds Documentation',
          text: ['Review and organization of relevant documentation concerning the lawful origin and economic purpose of transferred funds.']
        },
        {
          title: 'Foreign Exchange Compliance',
          text: [
            'Legal guidance concerning applicable Brazilian foreign-exchange rules and documentary requirements communicated by authorized financial institutions.'
          ]
        },
        {
          title: 'Non-Resident Transactions',
          text: ['Assistance with legal issues affecting foreign individuals and Brazilian citizens residing abroad.']
        },
        {
          title: 'Cross-Border Payment Disputes',
          text: ['Assessment of contractual and legal issues arising from delayed, rejected, misdirected, or disputed transaction payments.']
        }
      ]
    },
    {
      id: 'secure-property-payments',
      kind: 'text',
      eyebrow: 'Secure Property Payments in Brazil',
      title: 'The Challenge: When Should the Buyer Pay the Seller?',
      intro: [
        'A foreign buyer may be reluctant to transfer a substantial purchase price before receiving ownership of the property.',
        'The seller, meanwhile, may refuse to execute the required documents without assurance of payment.',
        'Brazilian property ownership generally transfers through registration of the appropriate acquisition title with the competent Real Estate Registry Office.',
        'This makes the coordination of contractual payment obligations, notarial execution, banking settlement, and registration particularly important.',
        'The appropriate transaction structure may involve negotiated payment conditions, documentary safeguards, and available arrangements offered by authorized institutions.',
        'Caspani Lawyers assists with the legal coordination of these steps. We do not hold client funds or act as a payment institution.'
      ],
      image: '/images/real-estate.jpg',
      imageAlt: 'Residential property in Brazil'
    },
    {
      id: 'legal-assistance-process',
      kind: 'steps',
      title: 'Our Legal Assistance Process',
      items: [
        { title: 'Initial Consultation', text: ['We assess the transaction, the parties, the countries involved, and the legal purpose of the transfer.'] },
        {
          title: 'Legal Structuring',
          text: ['We examine the underlying purchase, sale, or investment arrangement and identify relevant Brazilian legal requirements.']
        },
        {
          title: 'Documentation Review',
          text: ['We assess relevant contracts, identification documents, powers of attorney, and source-of-funds evidence.']
        },
        {
          title: 'Banking Compliance Coordination',
          text: ['We assist with the legal documentation required by the financial institution selected for the transaction.']
        },
        {
          title: 'Payment and Closing Coordination',
          text: ['For property transactions, we help align payment obligations with the agreed closing procedure.']
        },
        {
          title: 'Post-Transaction Documentation',
          text: ['We identify records that should be preserved for future ownership, tax, investment, or remittance purposes.']
        }
      ],
      image: '/images/banking-money-transfers.jpg',
      imageAlt: 'Savings and international money transfers'
    },
    {
      id: 'why-legal-assistance-matters',
      kind: 'text',
      title: 'Why Legal Assistance Matters',
      intro: [
        'International transfers involving substantial investments may raise questions about the source of the funds, the recipient’s identity, the legal purpose of the payment, the appropriate transaction classification, and the relationship between payment and transfer of ownership.',
        'Legal assistance can help identify contractual risks, clarify documentation requirements, and coordinate the relevant parties before funds are committed.',
        'However, transfer approval, exchange rates, settlement times, and banking decisions remain the responsibility of the authorized financial institution.'
      ],
      image: '/images/office-documents.jpg',
      imageAlt: 'Attorney reviewing transaction documents'
    }
  ],
  faqs: [
    {
      question: 'Can foreigners transfer large amounts of money to Brazil?',
      answer: 'Yes. Lawful high-value transfers may be possible, subject to applicable regulations, provider policies, and compliance requirements.'
    },
    {
      question: 'Can I transfer money to Brazil without a Brazilian bank account?',
      answer: 'Potentially, yes. The available arrangements depend on the transaction and the authorized provider.'
    },
    {
      question: 'Can I pay the seller directly from my overseas bank account?',
      answer: 'The proposed payment structure must be assessed against the contractual, banking, tax, and regulatory requirements.'
    },
    {
      question: 'Does Brazil require proof of the origin of funds?',
      answer: 'Financial institutions may request documentation concerning the lawful origin and economic purpose of the funds.'
    },
    {
      question: 'Are international transfers to Brazil taxable?',
      answer:
        'A transfer is not automatically taxable income. The underlying transaction and any applicable financial transaction taxes must be assessed separately.'
    },
    {
      question: 'Can I transfer money abroad after selling Brazilian property?',
      answer: 'Potentially, yes, subject to applicable tax, banking, foreign-exchange, and documentary requirements.'
    },
    {
      question: 'Can Caspani Lawyers execute the transfer?',
      answer:
        'No. Transfers and currency conversion are performed by appropriately authorized financial institutions. Our role concerns the legal transaction and related documentation.'
    },
    {
      question: 'How do I begin?',
      answer: 'Schedule a paid online consultation to discuss the transaction, documentation, and legal assistance required.'
    }
  ],
  closing: {
    title: 'Transfer Funds With a Clear Legal Strategy',
    paragraphs: [
      'Whether you are buying property, investing in a company, or transferring sale proceeds overseas, the legal structure and supporting documentation should be assessed before completing the transaction.',
      'Caspani Lawyers | Advocacia Internacional assists international clients with Brazilian legal requirements connected to cross-border transactions.'
    ],
    ctas: ['Schedule Your Paid Consultation']
  },
  disclaimer:
    'This content is general information, not individualized legal or financial advice. Caspani Lawyers does not provide banking, currency exchange, escrow, or custody services and does not guarantee transfer approval, settlement time, or financial outcomes. Professional services require an agreed engagement.'
};
