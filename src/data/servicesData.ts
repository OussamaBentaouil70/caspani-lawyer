export interface Subpage {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  categorySlug: string;
  categoryTitle: string;
  eligibility: string[];
  steps: { title: string; description: string }[];
  documents: string[];
  timeline: string;
  faqs: { question: string; answer: string }[];
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  iconName: string;
  description: string;
  subpages: Subpage[];
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "brazil-immigration",
    slug: "brazil-immigration",
    title: "Brazil Immigration",
    iconName: "badge",
    description: "Comprehensive visa and residency solutions tailored for international individuals, digital nomads, retirees, investors, and families.",
    subpages: [
      {
        id: "marriage-permanent-residency",
        slug: "marriage-permanent-residency",
        title: "Marriage Permanent Residency",
        shortDescription: "Secure Brazilian permanent residence through marriage or stable civil union (união estável) with a Brazilian citizen or permanent resident.",
        categorySlug: "brazil-immigration",
        categoryTitle: "Brazil Immigration",
        eligibility: [
          "Legally recognized civil marriage or established stable union with a Brazilian national or legal resident.",
          "Clean criminal record in all jurisdictions of residence over the preceding 5 years.",
          "Valid foreign passport with at least 6 months remaining validity.",
          "Joint proof of cohabitation and mutual financial or social commitment."
        ],
        steps: [
          { title: "Document Legalization & Apostille", description: "Collect and apostille your foreign birth certificate, police clearances, and previous marriage dissolutions." },
          { title: "Sworn Translation in Brazil", description: "Translate all foreign language documents with an accredited Brazilian sworn translator (Tradutor Juramentado)." },
          { title: "Federal Police Protocol Filing", description: "Submit the permanent residency dossier directly to the Federal Police (Polícia Federal)." },
          { title: "In-Person Biometrics & RNM Issuance", description: "Attend the in-person interview, submit biometrics, and receive the National Migration Registry card (Carteira de Registro Nacional Migratório)." }
        ],
        documents: [
          "Original Brazilian Marriage Certificate or Notarized União Estável deed",
          "Valid Foreign Passport (certified copy)",
          "Apostilled Criminal Background Check from country of origin & residence",
          "Joint Declaration of Cohabitation",
          "Proof of residence in Brazil (utility bill or registered lease)",
          "Brazilian Tax ID (CPF)"
        ],
        timeline: "Approximately 30 to 90 days for Federal Police adjudication.",
        faqs: [
          { question: "Can we apply if we married outside of Brazil?", answer: "Yes, but foreign marriages must first be consularized or registered at Cartório do 1º Ofício de Registro Civil in Brazil." },
          { question: "Does this grant an immediate right to work?", answer: "Yes, the Federal Police protocol grants provisional legal stay and full work authorization in Brazil." }
        ]
      },
      {
        id: "digital-nomad-visa",
        slug: "digital-nomad-visa",
        title: "Digital Nomad Visa (VITEM XIV)",
        shortDescription: "Live and work remotely from Brazil for foreign employers and clients under the official RN 45/2021 digital nomad framework.",
        categorySlug: "brazil-immigration",
        categoryTitle: "Brazil Immigration",
        eligibility: [
          "Remote employment or freelance contracts with non-Brazilian companies or clients.",
          "Proven monthly income of at least USD $1,500 (or equivalent in foreign currency) OR bank reserves of USD $18,000+.",
          "Comprehensive international health insurance covering the entire Brazilian territory.",
          "Clean background check from home country."
        ],
        steps: [
          { title: "Eligibility & Financial Assessment", description: "Review remote employment contracts, bank statements, and tax returns to substantiate remote status." },
          { title: "Consular Application or In-Country Filing", description: "Apply either through a Brazilian Consulate abroad or directly while legally in Brazil via the MigranteWeb portal." },
          { title: "Ministry of Justice Approval", description: "Coordinate with the General Coordination of Labor Immigration (CGIg)." },
          { title: "RNM Registration at Federal Police", description: "Finalize biometric registration upon arrival or status transition." }
        ],
        documents: [
          "Remote Work Employment Contract or Service Agreements",
          "Bank Statements proving $1,500/month or $18,000 lump sum",
          "International Medical Insurance policy",
          "Apostilled Police Clearance Certificate",
          "Statement of remote work intent under RN 45"
        ],
        timeline: "2 to 4 weeks for consular processing; 30 to 60 days via MigranteWeb in Brazil.",
        faqs: [
          { question: "How long is the Brazilian digital nomad visa valid?", answer: "Initially 1 year, renewable for an additional 12-month period." },
          { question: "Can I bring my spouse and dependents?", answer: "Yes, dependents can be included under family reunification provisions." }
        ]
      },
      {
        id: "retirement-visa",
        slug: "retirement-visa",
        title: "Retirement Visa (VITEM XIV / RN 40)",
        shortDescription: "Retire in Brazil's scenic coastlines and cultural capitals with proof of guaranteed monthly pension or retirement transfers.",
        categorySlug: "brazil-immigration",
        categoryTitle: "Brazil Immigration",
        eligibility: [
          "Verifiable monthly pension or retirement income of at least USD $2,000.",
          "Additional proof of $1,000/month for each accompanying dependent.",
          "Official statement from government pension agency or private pension fund."
        ],
        steps: [
          { title: "Pension Certification", description: "Secure certified, apostilled documentation from Social Security or pension administrators." },
          { title: "Banking Transfer Channel Setup", description: "Establish a compliant foreign exchange transfer mechanism into a Brazilian bank." },
          { title: "Immigration Filing & RNM Issuance", description: "Submit documentation to the Federal Police or Brazilian Consulate." }
        ],
        documents: [
          "Official Pension or Annuity Statement (Apostilled)",
          "Proof of regular monthly foreign transfers",
          "Apostilled Police Clearance Certificates",
          "Valid Passport and Health Coverage"
        ],
        timeline: "4 to 8 weeks depending on consular queue.",
        faqs: [
          { question: "Is the retirement visa permanent?", answer: "It grants temporary residency renewable for up to 2 years, transitioning into permanent residency thereafter." }
        ]
      },
      {
        id: "property-investor-visa-golden-visa",
        slug: "property-investor-visa-golden-visa",
        title: "Property Investor Visa (Golden Visa)",
        shortDescription: "Obtain Brazilian residency by purchasing urban real estate starting at R$ 700,000 (North/Northeast) or R$ 1,000,000 (South/Southeast).",
        categorySlug: "brazil-immigration",
        categoryTitle: "Brazil Immigration",
        eligibility: [
          "Direct acquisition of completed or off-plan Brazilian real estate.",
          "Minimum investment: R$ 700,000 for properties located in North/Northeast states, or R$ 1,000,000 for properties in South/Southeast/Central-West.",
          "Funds must originate from foreign capital legally transferred into Brazil through the Central Bank (BACEN)."
        ],
        steps: [
          { title: "Property Due Diligence & Purchase", description: "Perform full title search, tax clearance, and execute the public deed of purchase." },
          { title: "Central Bank (RDE-IED) Registration", description: "Formally register the foreign direct investment with the Central Bank of Brazil." },
          { title: "Ministry of Justice Dossier Submission", description: "Submit real estate title deed and investment proof to MigranteWeb." },
          { title: "Federal Police RNM Card Issuance", description: "Attend Federal Police biometrics appointment for residency issuance." }
        ],
        documents: [
          "Matrícula (Property Title Registry) showing ownership",
          "Escritura Pública de Compra e Venda",
          "Central Bank Foreign Exchange Contracts (Contratos de Câmbio)",
          "Apostilled Criminal Clearances",
          "Valid Passport and CPF"
        ],
        timeline: "60 to 90 days after property deed registration.",
        faqs: [
          { question: "Can I combine two properties to reach the threshold?", answer: "Yes, you can purchase multiple properties whose aggregate value meets the statutory minimum." }
        ]
      },
      {
        id: "business-investment-visa",
        slug: "business-investment-visa",
        title: "Business Investment Visa (RN 36)",
        shortDescription: "Obtain residency by founding a Brazilian enterprise, investing in a local startup, or infusing commercial capital.",
        categorySlug: "brazil-immigration",
        categoryTitle: "Brazil Immigration",
        eligibility: [
          "Direct capital investment of at least R$ 500,000 in a Brazilian company with an investment plan, or R$ 150,000 for technology/innovation startups.",
          "Commitment to Brazilian job creation or technological advancement.",
          "Business plan demonstrating economic viability."
        ],
        steps: [
          { title: "Entity Formation & CPF/CNPJ", description: "Establish a Brazilian Sociedade Limitada (LLC) or subsidiary." },
          { title: "BACEN Capital Inflow", description: "Transfer capital via international wire registered with BACEN." },
          { title: "Labor Ministry Adjudication", description: "Submit investment dossier to the National Immigration Council (CNIg)." }
        ],
        documents: [
          "Articles of Incorporation (Contrato Social)",
          "BACEN Foreign Direct Investment confirmation",
          "Certified Multi-Year Business Plan",
          "Tax clearances and criminal background checks"
        ],
        timeline: "60 to 120 days.",
        faqs: [
          { question: "Do I need a Brazilian partner?", answer: "Foreigners can own 100% of a Brazilian company, though an in-country legal representative is required initially." }
        ]
      },
      {
        id: "brazil-family-reunion-visa-specialists",
        slug: "brazil-family-reunion-visa-specialists",
        title: "Brazil Family Reunion Visa Specialists",
        shortDescription: "Bring your spouse, children, parents, or dependent siblings to join you in Brazil under comprehensive family reunion treaties.",
        categorySlug: "brazil-immigration",
        categoryTitle: "Brazil Immigration",
        eligibility: [
          "Spouse or partner in an established union with a Brazilian resident.",
          "Ascendants (parents) or descendants (children/grandchildren) of a Brazilian resident.",
          "Financial dependency or guardianship recognized under Brazilian law."
        ],
        steps: [
          { title: "Kinship Dossier Preparation", description: "Gather and apostille vital statistics certificates demonstrating direct legal relation." },
          { title: "Financial Guarantee Declaration", description: "Prepare sponsor affidavit of financial maintenance." },
          { title: "Federal Police Protocol", description: "Lodge family reunion petition directly or via Brazilian Consulate." }
        ],
        documents: [
          "Proof of Kinship (Birth / Marriage Certificates)",
          "Sponsor's RNM Card or Brazilian RG",
          "Proof of Accommodation & Financial Means",
          "Apostilled Police Clearances for adult applicants"
        ],
        timeline: "30 to 60 days.",
        faqs: [
          { question: "Can family members work in Brazil?", answer: "Yes, family reunion residents receive full work authorization upon RNM issuance." }
        ]
      },
      {
        id: "residency-through-a-brazilian-child",
        slug: "residency-through-a-brazilian-child",
        title: "Residency Through a Brazilian Child",
        shortDescription: "Parents of a Brazilian-born child are constitutionally guaranteed immediate permanent residency and an expedited naturalization track.",
        categorySlug: "brazil-immigration",
        categoryTitle: "Brazil Immigration",
        eligibility: [
          "Biological or adoptive parent of a child holding Brazilian nationality.",
          "Actual economic or emotional guardianship and cohabitation with the child.",
          "Clean criminal history."
        ],
        steps: [
          { title: "Birth Registration", description: "Register child's birth at local Cartório de Registro Civil." },
          { title: "Federal Police Filing", description: "Lodge permanent residency petition based on Brazilian child." },
          { title: "Expedited Citizenship Track", description: "Qualify for full Brazilian naturalization after just 1 year of continuous residence." }
        ],
        documents: [
          "Brazilian Child's Birth Certificate (Certidão de Nascimento)",
          "Declaration of custody, maintenance, and cohabitation",
          "Parents' Passports & Apostilled Police Clearances",
          "Proof of address in Brazil"
        ],
        timeline: "30 to 45 days for permanent status.",
        faqs: [
          { question: "Are parents protected from deportation?", answer: "Under Brazilian constitutional jurisprudence, parents of Brazilian minors cannot be deported." }
        ]
      },
      {
        id: "work-visas",
        slug: "work-visas",
        title: "Work Visas (VITEM V)",
        shortDescription: "Legal counsel for expatriate executives, specialized technicians, corporate transferees, and professional hires.",
        categorySlug: "brazil-immigration",
        categoryTitle: "Brazil Immigration",
        eligibility: [
          "Formal employment contract or technical services agreement with a Brazilian corporate entity.",
          "Relevant university degrees and verifiable professional experience.",
          "Corporate adherence to Brazil's 2/3 Brazilian worker ratio rule."
        ],
        steps: [
          { title: "Corporate Authorization Filing", description: "File petition with the Ministry of Labor and Employment (MTE) in Brasília." },
          { title: "Consular Visa Stamping", description: "Receive consular notification and obtain visa stamp abroad." },
          { title: "Arrival & Police Registration", description: "Complete RNM and carteira de trabalho registration." }
        ],
        documents: [
          "Brazilian Employment Contract",
          "Apostilled Diplomas and Experience Certificates",
          "Company CNPJ and Corporate Charter",
          "Police Clearance"
        ],
        timeline: "4 to 8 weeks.",
        faqs: [
          { question: "Can work visas transition into permanent residency?", answer: "Yes, many categories allow conversion after 2 continuous years." }
        ]
      }
    ]
  },
  {
    id: "brazilian-citizenship",
    slug: "brazilian-citizenship",
    title: "Brazilian Citizenship",
    iconName: "public",
    description: "Legal support for naturalization pathways, citizenship by descent, and restoration of Brazilian nationality.",
    subpages: [
      {
        id: "one-year-naturalization",
        slug: "one-year-naturalization",
        title: "One-Year Naturalization (Spouses & Parents)",
        shortDescription: "Expedited Brazilian citizenship after only 1 year of continuous residency for spouses of citizens or parents of Brazilian children.",
        categorySlug: "brazilian-citizenship",
        categoryTitle: "Brazilian Citizenship",
        eligibility: [
          "1 year of uninterrupted legal residency in Brazil.",
          "Married to a Brazilian citizen OR parent of a Brazilian child.",
          "Proven Portuguese language proficiency (CELPE-Bras or recognized diploma).",
          "Absence of unpardoned criminal convictions."
        ],
        steps: [
          { title: "Residency & Cohabitation Audit", description: "Verify uninterrupted residence and absence of extended travel periods." },
          { title: "Language Proficiency Certification", description: "Coordinate Portuguese language compliance." },
          { title: "Ministry of Justice Naturalization Docket", description: "Submit dossier to the Department of Migration in Brasília." },
          { title: "Portaria Deferimento & Brazilian Passport", description: "Publication in the Diário Oficial da União and passport issuance." }
        ],
        documents: [
          "Federal Police Certidão de Movimentos Migratórios",
          "Brazilian Marriage or Child Birth Certificate",
          "Portuguese Proficiency Certificate",
          "Federal and State Police Clearances"
        ],
        timeline: "6 to 12 months for ministerial approval.",
        faqs: [
          { question: "Does Brazil allow dual citizenship?", answer: "Yes, Brazil fully recognizes dual and multiple citizenship." }
        ]
      },
      {
        id: "ordinary-naturalization",
        slug: "ordinary-naturalization",
        title: "Ordinary Naturalization",
        shortDescription: "Standard 4-year continuous residency pathway to acquiring full Brazilian citizenship and an international passport.",
        categorySlug: "brazilian-citizenship",
        categoryTitle: "Brazilian Citizenship",
        eligibility: [
          "4 years of continuous, legal residence in Brazil.",
          "Ability to communicate in Portuguese.",
          "Capacity for self-support or economic livelihood.",
          "Clear criminal background."
        ],
        steps: [
          { title: "Stay Continuity Check", description: "Verify international travel limits during the 4-year tenure." },
          { title: "Financial & Tax Good Standing", description: "Compile Brazilian federal tax returns (DIRPF) and certidões negativas." },
          { title: "Formal Adjudication", description: "Federal Police intake and Ministry of Justice gazette." }
        ],
        documents: [
          "Permanent RNM Card",
          "Brazilian Income Tax Returns for past 4 years",
          "CELPE-Bras language certificate",
          "Clean criminal records"
        ],
        timeline: "8 to 14 months.",
        faqs: [
          { question: "Can the 4-year period be reduced?", answer: "Yes, it can be reduced to 1 year through marriage/parentage or 2 years through notable scientific/artistic service." }
        ]
      },
      {
        id: "extraordinary-naturalization",
        slug: "extraordinary-naturalization",
        title: "Extraordinary Naturalization (15-Year Rule)",
        shortDescription: "Unconditional citizenship pathway for foreign nationals who have resided in Brazil for more than 15 uninterrupted years.",
        categorySlug: "brazilian-citizenship",
        categoryTitle: "Brazilian Citizenship",
        eligibility: [
          "15 continuous years of residence in Brazilian territory.",
          "Clean criminal record in Brazil.",
          "No requirement to prove Portuguese language proficiency."
        ],
        steps: [
          { title: "Historical Residence Assembly", description: "Compile proof of 15 years in Brazil." },
          { title: "Criminal Record Clearances", description: "Generate state and federal judiciary certificates." },
          { title: "Federal Police Protocol", description: "Direct ministerial decree." }
        ],
        documents: [
          "Historic utility bills, leases, or tax records across 15 years",
          "RNM registration records",
          "Federal, state, and electoral clearance certificates"
        ],
        timeline: "6 to 10 months.",
        faqs: [
          { question: "Is language testing required for this category?", answer: "No, extraordinary naturalization does not require language proficiency certification." }
        ]
      },
      {
        id: "portuguese-speaking-cplp",
        slug: "portuguese-speaking-cplp",
        title: "Portuguese-Speaking (CPLP) Naturalization",
        shortDescription: "Fast-track 1-year residency citizenship for nationals of Portugal, Angola, Mozambique, Cape Verde, and CPLP member states.",
        categorySlug: "brazilian-citizenship",
        categoryTitle: "Brazilian Citizenship",
        eligibility: [
          "Citizenship in a Portuguese-language speaking country (CPLP).",
          "1 continuous year of legal residence in Brazil.",
          "Moral suitability and clean criminal background."
        ],
        steps: [
          { title: "Nationality Verification", description: "Validate CPLP passport and entry status." },
          { title: "One-Year Residency Protocol", description: "File immediately after completing 365 days of legal residence." },
          { title: "Ministerial Grant", description: "Gazette publication." }
        ],
        documents: [
          "CPLP Passport",
          "Proof of 1-year uninterrupted residence in Brazil",
          "Police Clearance Certificates"
        ],
        timeline: "6 to 9 months.",
        faqs: [
          { question: "Are Portuguese citizens granted equal political rights?", answer: "Yes, under the Estatuto da Igualdade bilateral treaty." }
        ]
      },
      {
        id: "citizenship-by-descent",
        slug: "citizenship-by-descent",
        title: "Citizenship by Descent (Jus Sanguinis)",
        shortDescription: "Claim Brazilian citizenship if born abroad to a Brazilian mother or father who was outside Brazil.",
        categorySlug: "brazilian-citizenship",
        categoryTitle: "Brazilian Citizenship",
        eligibility: [
          "Born abroad to at least one Brazilian parent.",
          "Consular registration completed during infancy OR residency transfer to Brazil."
        ],
        steps: [
          { title: "Consular Record Audit", description: "Examine whether birth was recorded at a Brazilian Consulate." },
          { title: "Cartório do 1º Ofício Transcrição", description: "Transcribe consular certificate into Brazilian domestic registry." },
          { title: "National ID & Passport Issuance", description: "Obtain RG, CPF, and Brazilian passport." }
        ],
        documents: [
          "Foreign Birth Certificate",
          "Brazilian Parent's Birth Certificate and RG/Passport",
          "Consular Birth Registration"
        ],
        timeline: "2 to 6 weeks.",
        faqs: [
          { question: "What if my birth was never registered at a consulate?", answer: "You can move to Brazil and file for the 'Adult Option' (Opção de Nacionalidade) before a Federal Court." }
        ]
      },
      {
        id: "descent-adult-option",
        slug: "descent-adult-option",
        title: "Descent — Adult Option (Opção de Nacionalidade)",
        shortDescription: "Judicial confirmation of Brazilian nationality for adults born abroad to Brazilian parents who missed consular registration.",
        categorySlug: "brazilian-citizenship",
        categoryTitle: "Brazilian Citizenship",
        eligibility: [
          "Born abroad to a Brazilian parent without consular birth registration.",
          "Have reached the age of majority (18 years old).",
          "Have established residence in Brazil."
        ],
        steps: [
          { title: "Establish Residence in Brazil", description: "Enter Brazil with foreign passport and establish domicile." },
          { title: "Federal Court Lawsuit", description: "File a judicial action for Opção de Nacionalidade in Federal Court (Justiça Federal)." },
          { title: "Definitive Birth Certificate", description: "Court issues mandado de averbação for domestic Cartório." }
        ],
        documents: [
          "Foreign Birth Certificate (Apostilled & Sworn Translated)",
          "Brazilian Parent's Proof of Nationality",
          "Proof of Brazilian address"
        ],
        timeline: "4 to 8 months in Federal Court.",
        faqs: [
          { question: "Is this retroactive?", answer: "Yes, once granted, you are considered a native-born Brazilian (brasileiro nato) from birth." }
        ]
      },
      {
        id: "reacquiring-citizenship",
        slug: "reacquiring-citizenship",
        title: "Reacquiring Citizenship (Reaquisição)",
        shortDescription: "Reclaim lost Brazilian nationality under Constitutional Amendment EC 131/2023 without bureaucratic hurdles.",
        categorySlug: "brazilian-citizenship",
        categoryTitle: "Brazilian Citizenship",
        eligibility: [
          "Former Brazilian citizen who lost nationality upon voluntarily acquiring a foreign passport prior to EC 131/2023.",
          "Dossier filed before the Ministry of Justice."
        ],
        steps: [
          { title: "Loss Decree Verification", description: "Locate original ministerial decree revoking nationality." },
          { title: "Re-acquisition Petition", description: "Submit formal petition under the reformed constitutional framework." },
          { title: "Restoration Gazette", description: "Official restoration of all civil and political rights." }
        ],
        documents: [
          "Original Brazilian Birth or Marriage Certificate",
          "Decree of Loss of Nationality",
          "Current Foreign Passport",
          "Criminal Clearances"
        ],
        timeline: "3 to 6 months.",
        faqs: [
          { question: "Does EC 131/2023 now protect dual citizenship?", answer: "Yes! Brazilians no longer lose nationality simply by acquiring a second foreign passport." }
        ]
      }
    ]
  },
  {
    id: "real-estate",
    slug: "real-estate",
    title: "Real Estate Legal Services",
    iconName: "apartment",
    description: "End-to-end legal due diligence, contract drafting, title clearing, and closing support for foreign property buyers across Brazil.",
    subpages: [
      {
        id: "full-purchase-support",
        slug: "full-purchase-support",
        title: "Full Purchase Support",
        shortDescription: "Turnkey legal representation from initial offer through title deed signing (Escritura Pública) and official property registry (RGI).",
        categorySlug: "real-estate",
        categoryTitle: "Real Estate Legal Services",
        eligibility: [
          "Foreign individuals or overseas corporations acquiring residential, commercial, or rural property in Brazil.",
          "Active CPF / CNPJ and Central Bank exchange capability."
        ],
        steps: [
          { title: "Letter of Intent & Negotiation", description: "Draft protective purchase proposals and conditions precedent." },
          { title: "Multi-Jurisdiction Due Diligence", description: "Check seller lawsuits, tax liens, building permits, and title history." },
          { title: "Escritura Pública Signing", description: "Coordinate closing at the notary (Cartório de Notas) in person or via digital e-Notariado." },
          { title: "Registry at Cartório de Imóveis (RGI)", description: "Record deed onto the Matrícula to establish absolute legal ownership." }
        ],
        documents: [
          "Updated Matrícula com Certidão de Ônus Reais",
          "Certidões Negativas (Federal, State, Labor, Municipal)",
          "Buyer's CPF and Foreign Passport",
          "Central Bank foreign exchange receipts"
        ],
        timeline: "2 to 4 weeks for full review and closing.",
        faqs: [
          { question: "Can I buy property in Brazil without traveling there?", answer: "Yes, our firm can act via specific Power of Attorney (Procuração Pública) or digital e-Notariado." }
        ]
      },
      {
        id: "preliminary-property-review",
        slug: "preliminary-property-review",
        title: "Preliminary Property Review",
        shortDescription: "Quick-turnaround risk assessment of title deeds, seller encumbrances, and municipal zoning before you pay any earnest money.",
        categorySlug: "real-estate",
        categoryTitle: "Real Estate Legal Services",
        eligibility: [
          "Prospective buyers considering a Brazilian property offer.",
          "Identification of property address or Matrícula registration number."
        ],
        steps: [
          { title: "Immediate Title Pull", description: "Obtain updated digital Matrícula directly from the local Registry." },
          { title: "Litigation & Lien Scan", description: "Cross-reference seller names across state and federal judicial databases." },
          { title: "Red Flag Advisory", description: "Deliver comprehensive risk evaluation report within 48 to 72 hours." }
        ],
        documents: ["Matrícula number and seller ID/CPF", "Draft broker agreement (if any)"],
        timeline: "48 to 72 business hours.",
        faqs: [
          { question: "Why do this before signing a sinal (deposit)?", answer: "In Brazil, deposits can be forfeited if you back out without contractual contingencies." }
        ]
      },
      {
        id: "15-step-buying-guide",
        slug: "15-step-buying-guide",
        title: "The 15-Step Buying Guide",
        shortDescription: "Comprehensive roadmap navigating foreign buyers through the Brazilian property acquisition lifecycle.",
        categorySlug: "real-estate",
        categoryTitle: "Real Estate Legal Services",
        eligibility: ["Any foreign investor planning to acquire Brazilian real estate."],
        steps: [
          { title: "Steps 1–5: Preparation & Identification", description: "CPF registration, FX broker selection, property identification, preliminary offer, and legal engagement." },
          { title: "Steps 6–10: Rigorous Due Diligence", description: "Matrícula audit, municipal tax certificates, seller litigation sweep, condomínio clearance, and environmental zoning." },
          { title: "Steps 11–15: Closing & Registration", description: "Promessa contract, FX transfer, ITBI municipal tax payment, Escritura Pública signing, and final RGI registry recording." }
        ],
        documents: ["Step-by-step checklist documentation"],
        timeline: "Full lifecycle typically spans 30 to 60 days.",
        faqs: [
          { question: "What is ITBI?", answer: "ITBI is the municipal property transfer tax, typically between 2% and 4% of property value." }
        ]
      },
      {
        // Rendered by the content page src/content/pages/acquisition.ts; these fields only feed menus and listings
        id: "real-estate-acquisition",
        slug: "real-estate-acquisition",
        title: "Real Estate Acquisition",
        shortDescription: "Legal services for foreign individuals, companies and investors acquiring real estate in Brazil.",
        categorySlug: "real-estate",
        categoryTitle: "Real Estate Legal Services",
        eligibility: ["Foreign individuals, companies and investment groups acquiring Brazilian real estate."],
        steps: [],
        documents: [],
        timeline: "",
        faqs: []
      },
      {
        id: "off-plan-properties-na-planta",
        slug: "off-plan-properties-na-planta",
        title: "Off-Plan Properties (Na Planta)",
        shortDescription: "Legal protection for pre-construction and developer purchases, verifying building registration (Patrimônio de Afetação) and warranties.",
        categorySlug: "real-estate",
        categoryTitle: "Real Estate Legal Services",
        eligibility: ["Purchasers buying units directly from developers before or during construction."],
        steps: [
          { title: "Memorial de Incorporação Verification", description: "Ensure the project is formally registered with Cartório de Imóveis." },
          { title: "Patrimônio de Afetação Audit", description: "Confirm the construction project's assets are legally segregated from the developer's corporate debt." },
          { title: "Contract Negotiation", description: "Strike abusive clauses regarding delay penalties and indexation adjustments (INCC)." }
        ],
        documents: ["Developer's standard purchase contract", "Memorial de Incorporação", "INCC indexation schedule"],
        timeline: "3 to 5 business days for contract review.",
        faqs: [
          { question: "What happens if the builder delays delivery?", answer: "Brazilian Law 13.786/2018 grants a 180-day grace period, after which contractual fines and rescission rights apply." }
        ]
      },
      {
        id: "residency-by-investment-golden-visa",
        slug: "residency-by-investment-golden-visa",
        title: "Residency by Investment (Golden Visa)",
        shortDescription: "Harmonizing your real estate purchase with your Brazilian immigration visa for a seamless dual transaction.",
        categorySlug: "real-estate",
        categoryTitle: "Real Estate Legal Services",
        eligibility: ["Acquisitions meeting R$ 700k or R$ 1M thresholds with BACEN compliance."],
        steps: [
          { title: "Targeted Property Identification", description: "Verify qualifying property status." },
          { title: "Closing & Central Bank Filing", description: "Direct international capital transfer." },
          { title: "Residency Dossier Submission", description: "Submit deed to immigration authorities." }
        ],
        documents: ["Matrícula", "Escritura", "BACEN foreign exchange vouchers"],
        timeline: "Concurrent with property closing.",
        faqs: [{ question: "Can commercial properties qualify?", answer: "Yes, both residential and commercial properties qualify." }]
      },
      {
        id: "real-estate-due-diligence",
        slug: "real-estate-due-diligence",
        title: "Real Estate Due Diligence",
        shortDescription: "Exhaustive legal, tax, judicial, and environmental verification of Brazilian property and sellers.",
        categorySlug: "real-estate",
        categoryTitle: "Real Estate Legal Services",
        eligibility: ["Foreign individuals or corporate buyers."],
        steps: [
          { title: "Property Title History", description: "30-year chain of title analysis." },
          { title: "Judicial Search on Sellers", description: "Labor courts, federal courts, state courts, and execution registries." },
          { title: "Formal Due Diligence Opinion", description: "Issuance of binding legal risk certificate." }
        ],
        documents: ["Certidão Vintenária", "Certidões de Distribuidores Cíveis e Criminais"],
        timeline: "5 to 7 business days.",
        faqs: [{ question: "Why is a labor search necessary?", answer: "In Brazil, unpaid labor claims can attach to real estate sold by indebted company owners." }]
      },
      {
        id: "holding-entity-structures-llc",
        slug: "holding-entity-structures-llc",
        title: "Holding & Entity Structures (LLC)",
        shortDescription: "Forming Brazilian SPEs, LLCs, or patrimonial holding companies for asset shielding, inheritance planning, and rental tax minimization.",
        categorySlug: "real-estate",
        categoryTitle: "Real Estate Legal Services",
        eligibility: ["Investors holding multiple Brazilian properties or significant rental portfolios."],
        steps: [
          { title: "Corporate Drafting", description: "Draft Contrato Social of a Brazilian Sociedade Limitada." },
          { title: "Foreign Shareholder CPF/CNPJ", description: "Register foreign parent entity or individuals with Federal Revenue." },
          { title: "Property Contribution", description: "Transfer properties into corporate equity tax-neutrally." }
        ],
        documents: ["Contrato Social", "Corporate CNPJ", "BACEN RDE-IED records"],
        timeline: "3 to 6 weeks.",
        faqs: [{ question: "What is the tax benefit?", answer: "Corporate rental income can be taxed as low as 11.33% to 14.53% vs up to 27.5% individual personal tax." }]
      },
      {
        id: "real-estate-disputes",
        slug: "real-estate-disputes",
        title: "Real Estate Disputes",
        shortDescription: "Litigation and mediation for property boundary disputes, title fraud, broken contracts, and construction defects.",
        categorySlug: "real-estate",
        categoryTitle: "Real Estate Legal Services",
        eligibility: ["Foreign owners facing property disputes in Brazil."],
        steps: [
          { title: "Extrajudicial Notification", description: "Formal cartório legal notice." },
          { title: "Emergency Injunction (Liminar)", description: "File urgent protective measures in Brazilian civil court." },
          { title: "Substantive Lawsuit", description: "Prosecute or defend through trial and appeal." }
        ],
        documents: ["Contracts, communications, deed records, photos/surveys"],
        timeline: "Immediate injunctive relief; trial timelines vary.",
        faqs: [{ question: "Can a foreigner sue in Brazil without living there?", answer: "Yes, by appointing an attorney via consular power of attorney." }]
      },
      {
        id: "selling-repatriation",
        slug: "selling-repatriation",
        title: "Selling & Repatriation",
        shortDescription: "Guidance on selling Brazilian property, calculating Ganho de Capital (capital gains tax), and legally wiring proceeds abroad.",
        categorySlug: "real-estate",
        categoryTitle: "Real Estate Legal Services",
        eligibility: ["Foreign owners selling Brazilian real estate and sending funds home."],
        steps: [
          { title: "Sales Contract Structuring", description: "Draft protective sales agreement in BRL or foreign currency equivalents." },
          { title: "Capital Gains Tax Declaration", description: "Calculate non-resident Ganho de Capital and generate DARF tax vouchers." },
          { title: "BACEN Currency Remittance Approval", description: "Submit closing deed to foreign exchange bank to wire funds worldwide." }
        ],
        documents: ["Purchase deed & sale deed", "DARF payment slip", "Bank exchange contract"],
        timeline: "1 to 2 weeks post-sale.",
        faqs: [{ question: "What is the capital gains rate for non-residents?", answer: "Rates range from 15% to 22.5% depending on profit brackets." }]
      }
    ]
  },
  {
    id: "banking-money",
    slug: "banking-money",
    title: "Banking & Money Transfers",
    iconName: "currency_exchange",
    description: "Opening non-resident Brazilian bank accounts, setting up secure escrow facilities, and navigating Central Bank FX compliance.",
    subpages: [
      {
        id: "money-transfer-to-brazil",
        slug: "money-transfer-to-brazil",
        title: "Money Transfer to Brazil",
        shortDescription: "Compliant foreign exchange routing under Central Bank (BACEN) rules for property purchases and investments.",
        categorySlug: "banking-money",
        categoryTitle: "Banking & Money Transfers",
        eligibility: ["International investors transferring funds into Brazil."],
        steps: [
          { title: "Compliance Document Approval", description: "Submit source of wealth and underlying legal contracts to Brazilian FX desk." },
          { title: "FX Rate Lock", description: "Lock commercial spot exchange rates." },
          { title: "Direct Settlement", description: "Funds credited directly to notary, seller, or escrow." }
        ],
        documents: ["Source of Funds", "Purchase Agreement", "CPF registration"],
        timeline: "24 to 72 hours for exchange clearance.",
        faqs: [{ question: "What tax applies to money transfers into Brazil?", answer: "IOF (Tax on Financial Operations) is typically 0.38% to 1.1%." }]
      },
      {
        id: "bank-account-guide",
        slug: "bank-account-guide",
        title: "Bank Account Guide",
        shortDescription: "Comprehensive regulatory roadmap for domestic and international accounts in Brazil.",
        categorySlug: "banking-money",
        categoryTitle: "Banking & Money Transfers",
        eligibility: ["Foreign residents and non-resident investors."],
        steps: [
          { title: "Account Type Selection", description: "Determine resident vs CDE non-resident account." },
          { title: "Dossier Submission", description: "Prepare certified identity and proof of address." }
        ],
        documents: ["Passport, CPF, Brazilian address or tax agent"],
        timeline: "1 to 3 weeks.",
        faqs: [{ question: "Can a tourist open a bank account in Brazil?", answer: "Standard accounts require residency; non-residents require a specialized CDE account." }]
      },
      {
        id: "escrow-services",
        slug: "escrow-services",
        title: "Escrow Services",
        shortDescription: "Independent third-party legal fiduciary holding of purchase funds until all contractual conditions are met.",
        categorySlug: "banking-money",
        categoryTitle: "Banking & Money Transfers",
        eligibility: ["Buyers and sellers in high-value Brazilian transactions."],
        steps: [
          { title: "Escrow Agreement Drafting", description: "Define milestone release triggers." },
          { title: "Deposit Holding", description: "Segregated fiduciary holding." },
          { title: "Disbursement", description: "Release upon title verification." }
        ],
        documents: ["Escrow Contract, Matrícula check"],
        timeline: "Customized to transaction terms.",
        faqs: [{ question: "Why use escrow in Brazil?", answer: "It eliminates counterparty risk where sellers demand deposits before final deed signing." }]
      },
      {
        id: "fgts-withdrawal",
        slug: "fgts-withdrawal",
        title: "FGTS Withdrawal",
        shortDescription: "Assisting Brazilian citizens and former residents living abroad in recovering accumulated FGTS severance funds.",
        categorySlug: "banking-money",
        categoryTitle: "Banking & Money Transfers",
        eligibility: ["Individuals with accumulated balance in Caixa Econômica Federal."],
        steps: [
          { title: "Balance Audit", description: "Pull official FGTS statement." },
          { title: "Statutory Ground Verification", description: "Overseas residency for 3+ years or retirement." },
          { title: "Fund Remittance", description: "Transfer directly to your overseas account." }
        ],
        documents: ["CTPS (Work Card), Overseas Residence Certificate, RG/CPF"],
        timeline: "3 to 6 weeks.",
        faqs: [{ question: "Can I withdraw if I live abroad?", answer: "Yes, 3 consecutive years without formal CLT employment qualifies for withdrawal." }]
      },
      {
        id: "bank-account-service",
        slug: "bank-account-service",
        title: "Bank Account Service (CDE Account)",
        shortDescription: "Legal representation to establish a non-resident bank account (Conta de Domiciliado no Exterior).",
        categorySlug: "banking-money",
        categoryTitle: "Banking & Money Transfers",
        eligibility: ["Non-resident foreigners with assets in Brazil."],
        steps: [
          { title: "Bank Partner Selection", description: "Identify authorized financial institutions." },
          { title: "Compliance Package", description: "Assemble FATCA/CRS and BACEN compliance documents." },
          { title: "Account Activation", description: "Full digital banking setup." }
        ],
        documents: ["Passport, CPF, Proof of Foreign Address, Tax Return"],
        timeline: "2 to 4 weeks.",
        faqs: [{ question: "Do CDE accounts have higher maintenance fees?", answer: "Yes, banks charge higher compliance fees for non-resident accounts." }]
      }
    ]
  },
  {
    id: "estate-planning",
    slug: "estate-planning",
    title: "Estate Planning",
    iconName: "history_edu",
    description: "Multi-jurisdictional estate structures, Brazilian wills, living wills, and powers of attorney protecting cross-border assets.",
    subpages: [
      {
        id: "lifetime-estate-planning",
        slug: "lifetime-estate-planning",
        title: "Lifetime Estate Planning",
        shortDescription: "Proactive structuring of family assets to minimize Brazilian inheritance tax (ITCMD) and prevent future litigation.",
        categorySlug: "estate-planning",
        categoryTitle: "Estate Planning",
        eligibility: ["Individuals and families owning Brazilian real estate, corporate quotas, or capital."],
        steps: [
          { title: "Asset Inventory & Cross-Border Mapping", description: "Review assets across jurisdictions." },
          { title: "Donation with Usufruct (Doação com Usufruto)", description: "Transfer bare ownership to heirs while reserving full lifetime control and income." },
          { title: "Protective Clauses", description: "Incorporate inalienability (inalienabilidade) and impenhorabilidade protections." }
        ],
        documents: ["Asset Deeds, Marriage Certs, Family Registry"],
        timeline: "3 to 6 weeks.",
        faqs: [{ question: "What is Usufruto Vitalício?", answer: "It allows parents to transfer property title to children while retaining complete right to occupy and rent it for life." }]
      },
      {
        id: "international-estate-planning",
        slug: "international-estate-planning",
        title: "International Estate Planning",
        shortDescription: "Coordinating Brazilian wills with overseas trusts, foundations, and common-law estate structures.",
        categorySlug: "estate-planning",
        categoryTitle: "Estate Planning",
        eligibility: ["High-net-worth clients with assets in Brazil and overseas."],
        steps: [
          { title: "Harmonization Audit", description: "Ensure overseas trusts do not conflict with Brazil's mandatory forced heirship rules." },
          { title: "Separate Brazilian Will", description: "Draft a dedicated Brazilian public will strictly addressing Brazilian situs property." }
        ],
        documents: ["Foreign Will/Trust, Brazilian Property Registries"],
        timeline: "4 to 8 weeks.",
        faqs: [{ question: "Does Brazil recognize foreign trusts?", answer: "Recent tax reforms recognize offshore entities, but real estate in Brazil requires domestic Brazilian legal planning." }]
      },
      {
        id: "last-will-testament",
        slug: "last-will-testament",
        title: "Last Will & Testament (Testamento Público)",
        shortDescription: "Drafting and executing a formal public will before a Brazilian notary ensuring your wishes are upheld.",
        categorySlug: "estate-planning",
        categoryTitle: "Estate Planning",
        eligibility: ["Any individual of sound mind owning Brazilian assets."],
        steps: [
          { title: "Legítima Calculation", description: "Calculate the 50% reserved portion for necessary heirs and the 50% freely disposable quota." },
          { title: "Notary Execution", description: "Execute testamento público before Cartório de Notas with two witnesses." }
        ],
        documents: ["Passport, CPF, List of Brazilian Assets"],
        timeline: "1 to 2 weeks.",
        faqs: [{ question: "Can I disinherit a child in Brazil?", answer: "Under Brazilian Civil Code, necessary heirs (children, spouse, parents) are entitled to 50% unless legally ungrateful." }]
      },
      {
        id: "living-will",
        slug: "living-will",
        title: "Living Will (Diretivas Antecipadas de Vontade)",
        shortDescription: "Legally binding medical healthcare directives expressing treatment wishes during incapacitation.",
        categorySlug: "estate-planning",
        categoryTitle: "Estate Planning",
        eligibility: ["Residents and visitors in Brazil."],
        steps: [
          { title: "Directive Formulation", description: "Detail medical parameters with counsel." },
          { title: "Public Deed Registration", description: "Register at Cartório de Notas." }
        ],
        documents: ["ID, CPF, Medical preferences statement"],
        timeline: "3 to 5 business days.",
        faqs: [{ question: "Is a living will legally valid in Brazil?", answer: "Yes, under Federal Medical Council Resolution 1.995/2012." }]
      },
      {
        id: "medical-power-of-attorney",
        slug: "medical-power-of-attorney",
        title: "Medical Power of Attorney",
        shortDescription: "Appointing a trusted proxy to make healthcare decisions in Brazilian hospitals if you become incapacitated.",
        categorySlug: "estate-planning",
        categoryTitle: "Estate Planning",
        eligibility: ["Any international client in Brazil."],
        steps: [
          { title: "Proxy Designation", description: "Draft specific medical authority mandate." },
          { title: "Public Notarization", description: "Execute public instrument." }
        ],
        documents: ["Principal and Proxy Passports/CPFs"],
        timeline: "2 to 4 business days.",
        faqs: [{ question: "Can my foreign spouse be my proxy?", answer: "Yes, with a valid passport and Brazilian CPF." }]
      },
      {
        id: "financial-power-of-attorney",
        slug: "financial-power-of-attorney",
        title: "Financial Power of Attorney (Procuração Pública)",
        shortDescription: "Comprehensive notarized power of attorney enabling trusted representatives to manage assets, bank accounts, and transactions.",
        categorySlug: "estate-planning",
        categoryTitle: "Estate Planning",
        eligibility: ["Foreign individuals managing affairs remotely."],
        steps: [
          { title: "Custom Powers Drafting", description: "Specify banking, real estate, or administrative authorities." },
          { title: "Consular or Cartório Execution", description: "Sign at Brazilian Consulate abroad or local Cartório." }
        ],
        documents: ["Passports, CPFs, specific powers list"],
        timeline: "3 to 7 business days.",
        faqs: [{ question: "Can the power of attorney have an expiration date?", answer: "Yes, powers of attorney can be customized with explicit expiration dates." }]
      }
    ]
  },
  {
    id: "inheritance-probates",
    slug: "inheritance-probates",
    title: "Inheritance and Probates",
    iconName: "account_balance",
    description: "Representing foreign heirs and executing judicial and extrajudicial probate proceedings (Inventário) across Brazilian courts and cartórios.",
    subpages: [
      {
        id: "probate-process-brazil",
        slug: "probate-process-brazil",
        title: "The Probate Process in Brazil (Inventário)",
        shortDescription: "Guiding international families through Inventário Judicial or Cartório Extrajudicial probate to transfer title of Brazilian assets.",
        categorySlug: "inheritance-probates",
        categoryTitle: "Inheritance and Probates",
        eligibility: ["Heirs of individuals who passed away owning assets located in Brazil."],
        steps: [
          { title: "Jurisdiction & Forum Choice", description: "Determine if eligible for rapid extrajudicial probate (all heirs of age and agreement, no dispute)." },
          { title: "Asset & Debt Compilation", description: "Pull official title deeds, bank balance inquiries, and tax certidões." },
          { title: "ITCMD State Tax Payment", description: "File tax assessment with state revenue department and remit inheritance tax (typically 4% to 8%)." },
          { title: "Deed of Partition (Escritura de Partilha)", description: "Execute public deed transferring assets directly to heirs." }
        ],
        documents: [
          "Death Certificate (Apostilled if foreign)",
          "Deceased's CPF and Birth/Marriage Certificates",
          "Heirs' Passports, CPFs, and Proof of Kinship",
          "Property Matrículas and Bank Statements"
        ],
        timeline: "1 to 3 months for extrajudicial cartório; 12+ months for contested judicial cases.",
        faqs: [
          { question: "Is there a deadline to open probate in Brazil?", answer: "Yes, Brazilian Civil Procedure requires opening probate within 60 days of death to avoid a state tax fine." }
        ]
      },
      {
        id: "can-foreigners-inherit-property",
        slug: "can-foreigners-inherit-property",
        title: "Can Foreigners Inherit Property in Brazil?",
        shortDescription: "Complete legal analysis confirming foreign nationals' constitutional rights to inherit Brazilian assets and land.",
        categorySlug: "inheritance-probates",
        categoryTitle: "Inheritance and Probates",
        eligibility: ["Non-resident foreigners named as heirs or intestate successors."],
        steps: [
          { title: "CPF Issuance for Foreign Heirs", description: "Register every foreign heir with Brazilian Receita Federal." },
          { title: "Representation by Power of Attorney", description: "Appoint counsel so foreign heirs do not need to travel to Brazil." },
          { title: "Title Transfer & RGI Record", description: "Record inheritance on the property title." }
        ],
        documents: ["Foreign heir passports, apostilled birth/marriage records, CPF"],
        timeline: "4 to 8 weeks.",
        faqs: [{ question: "Do foreign heirs have the same rights as Brazilian heirs?", answer: "Yes! Article 5 of the Brazilian Constitution guarantees property and inheritance rights equally to foreigners." }]
      },
      {
        id: "transfer-inherited-funds-abroad",
        slug: "transfer-inherited-funds-abroad",
        title: "Transfer Inherited Funds Abroad",
        shortDescription: "Legally repatriating Brazilian inheritance proceeds to overseas bank accounts under Central Bank (BACEN) compliance.",
        categorySlug: "inheritance-probates",
        categoryTitle: "Inheritance and Probates",
        eligibility: ["Foreign heirs who have liquidated Brazilian estate assets."],
        steps: [
          { title: "Escritura de Partilha Review", description: "Provide closing probate deed to foreign exchange compliance desk." },
          { title: "ITCMD Tax Clearance", description: "Prove full payment of inheritance duties." },
          { title: "International Wire Remittance", description: "Send proceeds directly to your home bank account in USD, EUR, GBP, etc." }
        ],
        documents: ["Escritura de Partilha, ITCMD receipt, Overseas bank routing details"],
        timeline: "1 to 2 weeks.",
        faqs: [{ question: "Is there an export tax on sending inheritance out of Brazil?", answer: "No, inheritance transfers are generally exempt from income tax, subject only to standard IOF exchange tax." }]
      },
      {
        id: "foreign-heirs-who-cant-attend",
        slug: "foreign-heirs-who-cant-attend",
        title: "Foreign Heirs Who Can't Attend",
        shortDescription: "Full remote probate representation: complete the entire Brazilian inheritance process without stepping foot in Brazil.",
        categorySlug: "inheritance-probates",
        categoryTitle: "Inheritance and Probates",
        eligibility: ["Heirs living outside Brazil unable to travel."],
        steps: [
          { title: "Consular Power of Attorney", description: "Execute tailored procuração pública at your nearest Brazilian Consulate or via e-Notariado." },
          { title: "Legal Representation", description: "Our lawyers sign all petitions, tax documents, and cartório deeds on your behalf." },
          { title: "Asset Liquidation & Remittance", description: "Coordinate property sales and wire net funds to your home account." }
        ],
        documents: ["Consular POA, apostilled identity documents"],
        timeline: "Remote coordination takes only days to initiate.",
        faqs: [{ question: "Can e-Notariado be used from abroad?", answer: "Yes, if the heir has a Brazilian CPF and valid digital certificate." }]
      },
      {
        id: "do-i-need-a-local-attorney",
        slug: "do-i-need-a-local-attorney",
        title: "Do I Need a Local Attorney for Brazilian Probate?",
        shortDescription: "Why Brazilian statutory law strictly mandates licensed Brazilian attorney (OAB) representation for all probates.",
        categorySlug: "inheritance-probates",
        categoryTitle: "Inheritance and Probates",
        eligibility: ["All parties navigating estate administration in Brazil."],
        steps: [
          { title: "Legal Requirement", description: "Article 610 of the Brazilian Civil Procedure Code requires lawyer intervention even in extrajudicial notarial probates." },
          { title: "Direct OAB Representation", description: "Attorney Erica Montarini Gaspani personally represents your interest." }
        ],
        documents: ["Case engagement agreement, OAB protocol"],
        timeline: "Immediate.",
        faqs: [{ question: "Can a notary do the probate without a lawyer?", answer: "No. By law, cartórios cannot draft an Escritura de Inventário without a licensed Brazilian attorney signing." }]
      },
      {
        id: "inheritance-disputes-litigation",
        slug: "inheritance-disputes-litigation",
        title: "Inheritance Disputes & Litigation",
        shortDescription: "Aggressive legal defense in contested probates, asset hiding (sonegação), disinheritance claims, and fraudulent wills.",
        categorySlug: "inheritance-probates",
        categoryTitle: "Inheritance and Probates",
        eligibility: ["Heirs facing contested estates or excluded from succession."],
        steps: [
          { title: "Asset Discovery Action", description: "Court-ordered bank account sweeps via SISBAJUD." },
          { title: "Injunction & Freeze", description: "Obtain preliminary injunction blocking sale of disputed real estate." },
          { title: "Judicial Partition", description: "Trial before Vara de Sucessões." }
        ],
        documents: ["Proof of relationship, previous title records, probate case number"],
        timeline: "Depends on judicial docket.",
        faqs: [{ question: "What is an Ação de Sonegação?", answer: "A lawsuit to strip an heir of their share if they maliciously hid estate assets." }]
      },
      {
        id: "brazils-forced-heirship",
        slug: "brazils-forced-heirship",
        title: "Brazil's Forced Heirship (A Legítima)",
        shortDescription: "Understanding how Brazilian statutory rules allocate 50% of your estate to protected necessary heirs.",
        categorySlug: "inheritance-probates",
        categoryTitle: "Inheritance and Probates",
        eligibility: ["Property owners planning estates involving Brazilian assets."],
        steps: [
          { title: "Heir Classification", description: "Identify descendants, ascendants, and surviving spouse." },
          { title: "Disposable Quota Planning", description: "Maximize your 50% free quota for specific beneficiaries." }
        ],
        documents: ["Estate calculation dossier"],
        timeline: "1 to 2 weeks for strategic audit.",
        faqs: [{ question: "Does Brazilian law apply to Brazilian real estate owned by a foreigner?", answer: "Yes! Under Article 10 of LINDB, real estate located in Brazil is governed strictly by Brazilian succession law." }]
      },
      {
        id: "search-for-wills-assets",
        slug: "search-for-wills-assets",
        title: "Search for Wills & Assets (CENSEC & Registry Searches)",
        shortDescription: "National registry searches across Brazil to uncover lost bank balances, undisclosed real estate, and registered wills.",
        categorySlug: "inheritance-probates",
        categoryTitle: "Inheritance and Probates",
        eligibility: ["Heirs seeking clarity on what assets a deceased relative owned in Brazil."],
        steps: [
          { title: "CENSEC Central Will Search", description: "Query the National Notarial College database for registered wills." },
          { title: "Real Estate Property Sweep (ONR)", description: "Query all 27 state real estate registries for properties registered under deceased's CPF." },
          { title: "Comprehensive Asset Audit Report", description: "Deliver unified portfolio dossier." }
        ],
        documents: ["Death certificate and Deceased's CPF"],
        timeline: "7 to 15 business days.",
        faqs: [{ question: "Can you find bank accounts?", answer: "Yes, once judicial probate or an authorized extrajudicial protocol is opened." }]
      }
    ]
  },
  {
    id: "recognition",
    slug: "recognition",
    title: "Recognition (STJ Homologation)",
    iconName: "verified",
    description: "Legal representation before the Superior Court of Justice (STJ) in Brasília to validate foreign judgments, divorces, and arbitral awards.",
    subpages: [
      {
        id: "foreign-divorce-recognition",
        slug: "foreign-divorce-recognition",
        title: "Foreign Divorce Recognition (Homologação de Divórcio)",
        shortDescription: "Validate a foreign divorce decree in Brazil either via expedited direct Cartório averbação or STJ court homologation.",
        categorySlug: "recognition",
        categoryTitle: "Recognition",
        eligibility: ["Brazilians or foreigners married to Brazilians divorced outside of Brazil."],
        steps: [
          { title: "Pure vs Qualified Divorce Review", description: "Consensual pure divorce without child custody/alimony can be registered directly at Cartório; contested or qualified divorces require STJ approval." },
          { title: "Apostille & Sworn Translation", description: "Certify foreign divorce decree and finality certificate." },
          { title: "Filing in Brasília (STJ)", description: "Lodge homologation action before the Superior Court of Justice." },
          { title: "Carta de Sentença & Marriage Registry Update", description: "Update Brazilian marriage record to divorced status." }
        ],
        documents: ["Foreign Divorce Decree with Proof of Finality (Trânsito em Julgado)", "Marriage Certificate", "Passports and CPFs"],
        timeline: "2 to 4 weeks for direct Cartório; 3 to 6 months for STJ court homologation.",
        faqs: [{ question: "Can I remarry in Brazil before homologation?", answer: "No, under Brazilian law you remain legally married until the foreign divorce is officially recognized." }]
      },
      {
        id: "foreign-marriage-recognition",
        slug: "foreign-marriage-recognition",
        title: "Foreign Marriage Recognition",
        shortDescription: "Formally registering marriages celebrated abroad at Cartório do 1º Ofício to secure civil and residency rights.",
        categorySlug: "recognition",
        categoryTitle: "Recognition",
        eligibility: ["Couples married outside of Brazil where at least one spouse is Brazilian or a resident."],
        steps: [
          { title: "Consular Registration (if applicable)", description: "Register at Brazilian Consulate abroad or proceed directly in Brazil." },
          { title: "Cartório do 1º Ofício Transcrição", description: "Transcribe marriage certificate into Libro E of the civil registry." },
          { title: "Issuance of Brazilian Certidão de Casamento", description: "Receive domestic Brazilian marriage certificate." }
        ],
        documents: ["Foreign Marriage Certificate", "Apostille", "Sworn Translation", "Birth certificates of both spouses"],
        timeline: "1 to 2 weeks.",
        faqs: [{ question: "What property regime applies to foreign marriages?", answer: "If no prenuptial agreement was recorded, Brazilian law generally applies partial community of property (comunhão parcial)." }]
      },
      {
        id: "foreign-judgment-recognition",
        slug: "foreign-judgment-recognition",
        title: "Foreign Judgment Recognition (HDF)",
        shortDescription: "Homologating civil, commercial, and financial foreign court judgments before the STJ in Brasília for execution in Brazil.",
        categorySlug: "recognition",
        categoryTitle: "Recognition",
        eligibility: ["Corporations or individuals holding a final court judgment rendered by a foreign court."],
        steps: [
          { title: "Due Process & Finality Audit", description: "Verify regular service of process and unappealable final judgment (trânsito em julgado)." },
          { title: "STJ Legal Action", description: "Lodge Homologação de Decisão Estrangeira (HDE) before the STJ Special Court." },
          { title: "Federal Court Execution (Cumprimento de Sentença)", description: "Enforce judgment and seize Brazilian assets." }
        ],
        documents: ["Certified Foreign Judgment", "Proof of Proper Service", "Apostille and Sworn Translation"],
        timeline: "6 to 12 months.",
        faqs: [{ question: "Can the STJ re-examine the merits of the foreign case?", answer: "No! The STJ strictly examines procedural validity, public policy, and national sovereignty without retrying the facts." }]
      },
      {
        id: "service-of-process",
        slug: "service-of-process",
        title: "Service of Process in Brazil",
        shortDescription: "Serving international subpoenas, summonses, and legal notices on defendants and witnesses residing in Brazil.",
        categorySlug: "recognition",
        categoryTitle: "Recognition",
        eligibility: ["Foreign law firms and corporate litigants requiring lawful service in Brazil."],
        steps: [
          { title: "Treaty Pathway Determination", description: "Inter-American Convention vs Hague Service Convention vs Letters Rogatory." },
          { title: "Ministry of Justice Submission", description: "File with the Central Authority (DRCI)." },
          { title: "Judicial Officer Service", description: "Federal court bailiff delivers formal notice with proof of service." }
        ],
        documents: ["Letter Rogatory or Hague Request Form, Complaint, Portuguese translation"],
        timeline: "3 to 6 months depending on federal court jurisdiction.",
        faqs: [{ question: "Does Brazil accept informal mail service?", answer: "No, Brazil filed a formal reservation under the Hague Convention against direct service by postal channels." }]
      },
      {
        id: "arbitral-award-recognition",
        slug: "arbitral-award-recognition",
        title: "Arbitral Award Recognition (New York Convention)",
        shortDescription: "Enforcing international commercial arbitration awards in Brazil under the 1958 New York Convention.",
        categorySlug: "recognition",
        categoryTitle: "Recognition",
        eligibility: ["Parties holding international arbitration awards (ICC, LCIA, AAA, etc.) against Brazilian parties."],
        steps: [
          { title: "Award & Agreement Review", description: "Verify arbitration clause and authenticated final award." },
          { title: "STJ Homologation Action", description: "File under Articles 37-40 of Brazilian Arbitration Act." },
          { title: "Asset Execution", description: "Attach bank accounts and commercial assets." }
        ],
        documents: ["Original Arbitral Award", "Arbitration Agreement", "Sworn Translations"],
        timeline: "4 to 9 months.",
        faqs: [{ question: "Is Brazil arbitration-friendly?", answer: "Yes! Brazil's STJ has a proven track record of upholding international arbitral awards with near-zero merit intervention." }]
      },
      {
        id: "letters-rogatory",
        slug: "letters-rogatory",
        title: "Letters Rogatory (Cartas Rogatórias)",
        shortDescription: "Executing foreign judicial requests for evidence taking, deposition, and asset freezes in Brazil.",
        categorySlug: "recognition",
        categoryTitle: "Recognition",
        eligibility: ["Foreign judges and international tribunals requiring judicial cooperation."],
        steps: [
          { title: "Central Authority Ingestion", description: "Review by Ministry of Justice." },
          { title: "Exequatur Grant by STJ", description: "Judicial exequatur authorizing execution." },
          { title: "Federal Court Compliance", description: "Execution by federal judge." }
        ],
        documents: ["Court order, Letters Rogatory, Certified translations"],
        timeline: "4 to 8 months.",
        faqs: [{ question: "What is an Exequatur?", answer: "The formal order issued by the President of the STJ commanding Brazilian courts to execute the foreign request." }]
      }
    ]
  },
  {
    id: "litigation",
    slug: "litigation",
    title: "Litigation & Dispute Resolution",
    iconName: "gavel",
    description: "Trial and appellate representation in Brazilian federal and state courts, international arbitration, and commercial disputes.",
    subpages: [
      {
        id: "business-litigation",
        slug: "business-litigation",
        title: "Business Litigation",
        shortDescription: "Resolving shareholder disputes, breach of contract, commercial fraud, and unfair competition across Brazilian civil courts.",
        categorySlug: "litigation",
        categoryTitle: "Litigation",
        eligibility: ["Foreign corporations and shareholders with commercial conflicts in Brazil."],
        steps: [
          { title: "Pre-Litigation Demand & Risk Assessment", description: "Serve formal Notificação Extrajudicial." },
          { title: "Urgent Injunctions (Tutela de Urgência)", description: "Freeze disputed assets or obtain document inspection within 48 hours." },
          { title: "Merits Trial & Appeals", description: "Prosecute through State Court of Appeals (TJ) and Superior Courts (STJ/STF)." }
        ],
        documents: ["Commercial Contracts, Corporate Contrato Social, Financial audits"],
        timeline: "Injunctive relief in days; trial 12 to 24 months.",
        faqs: [{ question: "Can foreign corporations sue in Brazil?", answer: "Yes, represented by a licensed Brazilian attorney under a valid Power of Attorney." }]
      },
      {
        id: "real-estate-litigation",
        slug: "real-estate-litigation",
        title: "Real Estate Litigation",
        shortDescription: "Defending property titles, resolving construction abandonment, illegal possession (reintegração de posse), and escrow breaches.",
        categorySlug: "litigation",
        categoryTitle: "Litigation",
        eligibility: ["Property owners facing title challenges, non-paying buyers, or unauthorized squatters."],
        steps: [
          { title: "Site & Title Audit", description: "Verify boundaries and police reports." },
          { title: "Possessory Action Filing", description: "Lodge Ação de Reintegração de Posse with immediate injunction." },
          { title: "Enforcement by Police Bailiff", description: "Court-directed recovery of property." }
        ],
        documents: ["Matrícula, Tax receipts, Trespass evidence"],
        timeline: "Immediate injunctive motion; full case 6 to 18 months.",
        faqs: [{ question: "What is Usucapião?", answer: "Adverse possession. Quick legal action is vital to prevent unauthorized occupants from claiming title." }]
      },
      {
        id: "inheritance-disputes",
        slug: "inheritance-disputes",
        title: "Inheritance Disputes",
        shortDescription: "Litigating contested wills, excluded foreign heirs, and concealment of estate assets across Brazilian probate courts.",
        categorySlug: "litigation",
        categoryTitle: "Litigation",
        eligibility: ["Heirs facing estate exclusion or unfair asset distribution."],
        steps: [
          { title: "Legal Standing Verification", description: "Prove succession rights." },
          { title: "Judicial Contest Filing", description: "File contestation in Vara de Família e Sucessões." }
        ],
        documents: ["Proof of lineage, disputed wills, estate filings"],
        timeline: "12 to 24 months.",
        faqs: [{ question: "Can a foreign will be challenged in Brazil?", answer: "Yes, if it infringes upon the mandatory 50% Legítima reserved for necessary heirs." }]
      },
      {
        id: "consumer-defense",
        slug: "consumer-defense",
        title: "Consumer Defense (Código de Defesa do Consumidor)",
        shortDescription: "Protecting international consumers and business entities against unfair trade practices and abusive clauses.",
        categorySlug: "litigation",
        categoryTitle: "Litigation",
        eligibility: ["Individuals or enterprises facing consumer law claims in Brazil."],
        steps: [
          { title: "Consumer Code Analysis", description: "Evaluate strict liability provisions under CDC." },
          { title: "Procon & Court Defense", description: "Administrative and judicial response." }
        ],
        documents: ["Consumer agreements, communications, invoices"],
        timeline: "3 to 12 months.",
        faqs: [{ question: "Is Brazilian consumer law strict?", answer: "Yes, Brazil's CDC is one of the world's most protective consumer statutes." }]
      },
      {
        id: "international-arbitration",
        slug: "international-arbitration",
        title: "International Arbitration",
        shortDescription: "Representation in commercial disputes before CAM-CCBC, AMCHAM, ICC, and leading arbitral institutions.",
        categorySlug: "litigation",
        categoryTitle: "Litigation",
        eligibility: ["Parties bound by arbitration agreements."],
        steps: [
          { title: "Notice of Arbitration", description: "Commence proceedings under institutional rules." },
          { title: "Tribunal Formation", description: "Select neutral arbitrators." },
          { title: "Hearing & Award", description: "Present oral arguments and secure enforceable award." }
        ],
        documents: ["Commercial Contracts, Arbitration Clause, Pleadings"],
        timeline: "12 to 18 months.",
        faqs: [{ question: "Are arbitral awards public in Brazil?", answer: "Arbitration proceedings in Brazil are strictly confidential by default." }]
      },
      {
        id: "mediation",
        slug: "mediation",
        title: "Mediation & Alternative Dispute Resolution",
        shortDescription: "Structured, cost-effective negotiation and private dispute settlement preserving commercial relationships.",
        categorySlug: "litigation",
        categoryTitle: "Litigation",
        eligibility: ["Parties seeking amicable out-of-court settlement."],
        steps: [
          { title: "Mediation Agreement", description: "Establish terms of confidentiality." },
          { title: "Facilitated Sessions", description: "Bilingual negotiation sessions." },
          { title: "Binding Settlement Execution", description: "Register settlement as extrajudicial title." }
        ],
        documents: ["Draft mediation protocol"],
        timeline: "2 to 6 weeks.",
        faqs: [{ question: "Is a mediated agreement enforceable in court?", answer: "Yes, signed settlements function as enforceable extrajudicial titles under CPC." }]
      },
      {
        id: "personal-injury",
        slug: "personal-injury",
        title: "Personal Injury & Cross-Border Tort",
        shortDescription: "Legal representation for foreign nationals injured in Brazil due to transport accidents, medical malpractice, or premises liability.",
        categorySlug: "litigation",
        categoryTitle: "Litigation",
        eligibility: ["Foreign tourists, expatriates, or business travelers injured in Brazil."],
        steps: [
          { title: "Evidence & Medical Records Preservation", description: "Collect hospital charts, police BO reports, and witness statements." },
          { title: "Damages Quantification", description: "Calculate moral damages (dano moral), material losses, and lost international earnings." },
          { title: "Litigation or Settlement", description: "Direct negotiation with insurers or trial." }
        ],
        documents: ["Medical reports, Police Boletim de Ocorrência, Proof of lost earnings"],
        timeline: "6 to 18 months.",
        faqs: [{ question: "Can foreign plaintiffs recover moral damages in Brazil?", answer: "Yes, Brazilian courts regularly award compensation for pain, suffering, and aesthetic damages." }]
      }
    ]
  },
  {
    id: "debt-collection",
    slug: "debt-collection",
    title: "Debt Collection",
    iconName: "receipt_long",
    description: "Assertive, compliant commercial debt recovery, official cartório protests, and judicial asset executions across Brazil.",
    subpages: [
      {
        id: "statute-of-limitations-on-debts",
        slug: "statute-of-limitations-on-debts",
        title: "Statute of Limitations on Debts (Prescrição)",
        shortDescription: "Navigating Brazil's strict debt prescription windows (typically 1 to 5 years under the Civil Code).",
        categorySlug: "debt-collection",
        categoryTitle: "Debt Collection",
        eligibility: ["Creditors holding Brazilian commercial debts, promissory notes, or invoices."],
        steps: [
          { title: "Limitation Window Calculation", description: "Audit date of default under Article 206 of the Brazilian Civil Code." },
          { title: "Interruption of Prescription", description: "Serve formal judicial notification to stop the clock running." }
        ],
        documents: ["Invoices, Promissory Notes, Service Contracts"],
        timeline: "Immediate statute analysis.",
        faqs: [{ question: "How long does a creditor have to sue on an invoice in Brazil?", answer: "Typically 5 years for collection of liquid contractual debt, or 3 years for bills of exchange." }]
      },
      {
        id: "consumer-vs-commercial-collection",
        slug: "consumer-vs-commercial-collection",
        title: "Consumer vs Commercial Collection",
        shortDescription: "Strategic separation between high-stake B2B commercial debt litigation and consumer recovery compliance.",
        categorySlug: "debt-collection",
        categoryTitle: "Debt Collection",
        eligibility: ["Overseas businesses with unpaid Brazilian clients."],
        steps: [
          { title: "Contract Analysis", description: "Assess whether debt qualifies as an Executable Title (Título Executivo Extrajudicial)." },
          { title: "Fast-Track Ação de Execução", description: "Direct asset attachment bypassing preliminary evidentiary trial." }
        ],
        documents: ["Signed contracts with two witnesses, invoices (Duplicatas)"],
        timeline: "Execution filing takes 1 to 2 weeks.",
        faqs: [{ question: "Why do contracts need two witnesses in Brazil?", answer: "Two witness signatures turn a private contract into a Título Executivo, allowing immediate bank account freezes without a multi-year trial." }]
      },
      {
        id: "official-protests-protesto",
        slug: "official-protests-protesto",
        title: "Official Protests (Cartório de Protesto)",
        shortDescription: "Filing formal protests at Brazilian notaries, directly freezing the debtor's credit and blocking banking lines across Brazil.",
        categorySlug: "debt-collection",
        categoryTitle: "Debt Collection",
        eligibility: ["Creditors holding unpaid notes, contracts, or dishonored checks."],
        steps: [
          { title: "Electronic Protest Submission", description: "Submit debt instrument to Cartório de Protesto de Títulos." },
          { title: "3-Day Notary Payment Ultimatum", description: "Cartório issues legal demand; failure to pay results in immediate national credit blacklisting (SERASA/SPC)." }
        ],
        documents: ["Promissory notes, Duplicatas, Protest petition"],
        timeline: "3 to 5 business days.",
        faqs: [{ question: "Is Cartório Protest effective?", answer: "Highly effective — Brazilian companies cannot obtain bank financing or bidding rights while under protest." }]
      },
      {
        id: "contingency-basis",
        slug: "contingency-basis",
        title: "Contingency Basis Recovery (No Win, No Fee)",
        shortDescription: "Evaluating commercial debt claims for performance-based recovery structures aligned with your bottom line.",
        categorySlug: "debt-collection",
        categoryTitle: "Debt Collection",
        eligibility: ["Commercial debts exceeding minimum claim thresholds."],
        steps: [
          { title: "Debtor Solvency Investigation", description: "Verify debtor owns identifiable Brazilian real estate, vehicles, or commercial revenues." },
          { title: "Engagement Structuring", description: "Contingency fee agreement." }
        ],
        documents: ["Debt documentation, Debtor CNPJ/CPF"],
        timeline: "Asset investigation in 3 to 5 business days.",
        faqs: [{ question: "Do you offer pure contingency?", answer: "We offer hybrid and contingency arrangements for high-solvency commercial portfolios." }]
      }
    ]
  },
  {
    id: "paraguay-immigration",
    slug: "paraguay-immigration",
    title: "Paraguay Immigration & Corporate",
    iconName: "travel_explore",
    description: "Regional Mercosur cross-border migration, Paraguay Cedula residency, 0% foreign tax territorial regime, and Maquila corporate structures.",
    subpages: [
      {
        id: "paraguay-national-id",
        slug: "paraguay-national-id",
        title: "Paraguay National ID (Cédula de Identidad)",
        shortDescription: "Securing Paraguayan legal permanent residency and national ID card under the streamlined Mercosur and immigration law.",
        categorySlug: "paraguay-immigration",
        categoryTitle: "Paraguay Immigration",
        eligibility: [
          "Foreign individuals seeking South American residency.",
          "Clean criminal record in country of origin.",
          "Apostilled birth certificate."
        ],
        steps: [
          { title: "Document Apostille & Legalization", description: "Prepare foreign vital certificates." },
          { title: "In-Person Filing in Asunción", description: "Attend Migraciones with legal escort." },
          { title: "Radicación & Cédula Collection", description: "Obtain residency card and national ID." }
        ],
        documents: ["Passport, Apostilled Police Clearance, Birth Certificate"],
        timeline: "60 to 90 days.",
        faqs: [{ question: "Does Paraguay tax foreign income?", answer: "No! Paraguay has a strict territorial tax system where foreign-sourced income is taxed at 0%." }]
      },
      {
        id: "paraguay-investor-pass",
        slug: "paraguay-investor-pass",
        title: "Paraguay Investor Pass (SUACE)",
        shortDescription: "Expedited residency for foreign entrepreneurs and investors under the Unified System for Company Opening and Closing (SUACE).",
        categorySlug: "paraguay-immigration",
        categoryTitle: "Paraguay Immigration",
        eligibility: ["Entrepreneurs committing capital or business establishment in Paraguay."],
        steps: [
          { title: "SUACE Project Evaluation", description: "Submit business plan to Ministry of Industry and Commerce." },
          { title: "Expedited Investor Card", description: "Bypass standard queues with priority issuance." }
        ],
        documents: ["Business plan, Capital proof, Passports"],
        timeline: "30 to 45 days.",
        faqs: [{ question: "What is the minimum investment for SUACE?", answer: "SUACE streamlines business formation with low capital hurdles compared to other jurisdictions." }]
      },
      {
        id: "company-formation",
        slug: "company-formation",
        title: "Company Formation in Paraguay (S.A. & S.R.L.)",
        shortDescription: "Incorporating Paraguayan corporate entities to leverage regional Mercosur trade, flat 10% corporate tax, and low energy costs.",
        categorySlug: "paraguay-immigration",
        categoryTitle: "Paraguay Immigration",
        eligibility: ["International businesses establishing South American hubs."],
        steps: [
          { title: "Bylaws & Notary Deed", description: "Draft company charter (Estatuto Social)." },
          { title: "RUC Tax ID & Bank Account", description: "Register with Tributación and open operational bank account." }
        ],
        documents: ["Shareholder IDs, Company Name reservation"],
        timeline: "3 to 5 weeks.",
        faqs: [{ question: "What is the corporate tax rate in Paraguay?", answer: "Paraguay operates a flat 10% corporate tax (IRE) and 10% VAT (IVA) — among the lowest in the Americas." }]
      },
      {
        id: "corporate-and-ma",
        slug: "corporate-and-ma",
        title: "Corporate and M&A in Paraguay",
        shortDescription: "Cross-border mergers, acquisitions, joint ventures, and agribusiness investments throughout Paraguay.",
        categorySlug: "paraguay-immigration",
        categoryTitle: "Paraguay Immigration",
        eligibility: ["Corporations acquiring assets, agricultural holdings, or shares."],
        steps: [
          { title: "Commercial Due Diligence", description: "Audit corporate records and land titles." },
          { title: "Transaction Closing", description: "Execute Share Purchase Agreement (SPA)." }
        ],
        documents: ["Due Diligence dossiers, Financials, SPAs"],
        timeline: "Custom project schedule.",
        faqs: [{ question: "Can foreigners own agricultural land in Paraguay?", answer: "Yes, with specific border zone exemptions." }]
      },
      {
        id: "tax-and-accounting",
        slug: "tax-and-accounting",
        title: "Tax and Accounting Services in Paraguay",
        shortDescription: "Navigating Paraguay's territorial tax benefits, international dividend repatriation, and monthly filings.",
        categorySlug: "paraguay-immigration",
        categoryTitle: "Paraguay Immigration",
        eligibility: ["Residents and companies registered in Paraguay."],
        steps: [
          { title: "Tax Residency Certificate (Certificado de Residencia Fiscal)", description: "Prove fiscal residency to foreign tax authorities." },
          { title: "Periodic Compliance", description: "Filing IRE, IRP, and IVA declarations." }
        ],
        documents: ["Cédula, RUC, Invoices"],
        timeline: "Ongoing.",
        faqs: [{ question: "How do I prove tax residency in Paraguay?", answer: "By obtaining the official Tax Residency Certificate issued by the Subsecretaría de Estado de Tributación (SET)." }]
      },
      {
        id: "maquila-regime",
        slug: "maquila-regime",
        title: "Maquila Regime (Ley 1064/97)",
        shortDescription: "Setting up manufacturing and export operations paying only a 1% unified tax rate with tariff-free export into Brazil and Mercosur.",
        categorySlug: "paraguay-immigration",
        categoryTitle: "Paraguay Immigration",
        eligibility: ["Industrial, assembly, and service export businesses."],
        steps: [
          { title: "Maquila Program Approval", description: "File application with National Council of Maquila Export Industries (CNIME)." },
          { title: "Facility Setup & Import", description: "Import machinery and raw materials 100% duty-free." }
        ],
        documents: ["Industrial manufacturing plan, Corporate charter"],
        timeline: "60 to 90 days for government decree.",
        faqs: [{ question: "Why do Brazilian companies use the Maquila regime?", answer: "Because labor, energy, and tax costs in Paraguay are drastically lower, while finished goods enter Brazil tariff-free under Mercosur rules." }]
      },
      {
        id: "tenders-and-concessions",
        slug: "tenders-and-concessions",
        title: "Tenders and Concessions in Paraguay",
        shortDescription: "Legal representation for foreign contractors bidding on infrastructure, energy, and government procurement contracts.",
        categorySlug: "paraguay-immigration",
        categoryTitle: "Paraguay Immigration",
        eligibility: ["International engineering, logistics, and energy firms."],
        steps: [
          { title: "DNCP Registration", description: "Register with the National Directorate of Public Procurement." },
          { title: "Bidding Proposal Audit", description: "Ensure compliance with statutory tender specifications." }
        ],
        documents: ["Corporate credentials, Bank guarantees, Technical dossiers"],
        timeline: "Aligned with public tender deadlines.",
        faqs: [{ question: "Can foreign companies bid directly?", answer: "Foreign companies can bid directly or via local consortia." }]
      }
    ]
  },
  {
    id: "others",
    slug: "others",
    title: "Others (Cross-Border Specialized)",
    iconName: "more_horiz",
    description: "International contracts, specialized US & Europe immigration coordination, and cross-border non-resident tax services.",
    subpages: [
      {
        id: "us-europe-immigration",
        slug: "us-europe-immigration",
        title: "US & Europe Immigration (EB-2 NIW, E-2, Golden Visas)",
        shortDescription: "Strategic counsel coordinating inbound and outbound immigration between Brazil, the United States, and European jurisdictions.",
        categorySlug: "others",
        categoryTitle: "Others",
        eligibility: ["Expatriates and international investors seeking cross-continental mobility."],
        steps: [
          { title: "Jurisdictional Assessment", description: "Evaluate dual-track immigration opportunities." },
          { title: "Dossier Preparation", description: "Assemble cross-border petitions." }
        ],
        documents: ["International credentials, business plans"],
        timeline: "Varies by country.",
        faqs: [{ question: "Do you assist Brazilians relocating to the US or Europe?", answer: "Yes, we coordinate with accredited international partner counsel in Washington and European capitals." }]
      },
      {
        id: "international-contracts",
        slug: "international-contracts",
        title: "International Contracts",
        shortDescription: "Drafting bilingual (English/Portuguese) commercial agreements with cross-border dispute resolution and choice of law clauses.",
        categorySlug: "others",
        categoryTitle: "Others",
        eligibility: ["Multinational enterprises, cross-border service providers, and foreign vendors."],
        steps: [
          { title: "Risk & Jurisdiction Structuring", description: "Select governing law (Brazilian, English, or New York law) and dispute forums." },
          { title: "Bilingual Contract Drafting", description: "Side-by-side English/Portuguese execution." }
        ],
        documents: ["Draft contracts, term sheets"],
        timeline: "3 to 7 business days.",
        faqs: [{ question: "Can a contract in Brazil be written in English?", answer: "Yes, but for Brazilian legal enforcement, a sworn Portuguese translation or bilingual text is required." }]
      },
      {
        id: "tax-services",
        slug: "tax-services",
        title: "Tax Services & Non-Resident CPF",
        shortDescription: "Obtaining and regularizing CPF numbers for foreigners, filing non-resident declarations, and capital gains tax (DARF) compliance.",
        categorySlug: "others",
        categoryTitle: "Others",
        eligibility: ["Foreigners requiring Brazilian Tax IDs or tax declarations."],
        steps: [
          { title: "Direct CPF Generation", description: "Expedited foreign CPF registration with Receita Federal." },
          { title: "Definitive Exit Declaration (DSDP)", description: "Formal notification of non-residency status." }
        ],
        documents: ["Passport, Proof of Address"],
        timeline: "24 to 72 hours for CPF.",
        faqs: [{ question: "Does getting a CPF make me a Brazilian tax resident?", answer: "No! A CPF is simply a registration number required to buy property, open bank accounts, or invest in Brazil." }]
      }
    ]
  }
];

export function findCategoryBySlug(slug: string): ServiceCategory | undefined {
  return SERVICES_DATA.find((cat) => cat.slug === slug);
}

export function findSubpageBySlugs(categorySlug: string, subpageSlug: string): { category: ServiceCategory; subpage: Subpage } | undefined {
  const category = findCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const subpage = category.subpages.find((sub) => sub.slug === subpageSlug);
  if (!subpage) return undefined;
  return { category, subpage };
}
