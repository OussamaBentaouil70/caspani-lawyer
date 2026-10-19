# CLAUDE.md — Caspani Lawyers Project Guide & Technical Architecture

This document provides a comprehensive operational and architectural manual for **Claude Code** (and any AI engineering assistant) working on the **Caspani Lawyers (Advocacia Internacional)** codebase. Read this file to understand the business domain, technical stack, routing model, design patterns, component conventions, and page layout rules.

---

## 1. Executive Summary & Domain Context

- **Firm Name**: Caspani Lawyers (Montarini & Caspani Advocacia Internacional)
- **Principal / Credential**: Licensed Brazilian Attorney — **OAB/PR 58.420** (Ordem dos Advogados do Brasil, Seccional do Paraná, Curitiba)
- **Practice Focus**: High-end boutique international law practice providing personalized legal counsel to foreign individuals, expatriates, international families, digital nomads, and cross-border investors navigating Brazilian law:
  - Brazil Immigration & Residence Authorizations (Migration Law No. 13,445/2017 & Decree No. 9,199/2017)
  - Brazilian Nationality, Dual Citizenship & Naturalization (EC No. 131/2023)
  - Real Estate Acquisitions, Due Diligence & RNM Investor Pathways
  - Non-Resident Tax & Corporate Structuring (Receita Federal / BACEN compliance)
- **Core User Archetypes**: Expatriate professionals, spouses of Brazilian citizens, parents of Brazilian children, digital nomads, retirees, corporate transferees, and high-net-worth foreign investors.

---

## 2. Technical Stack & Environment

| Layer | Technology | Details / Version |
|---|---|---|
| **Framework** | React 19 (`react`, `react-dom`) | Single Page Application (SPA), functional components with hooks |
| **Language** | TypeScript 7+ | Strict mode (`tsc --noEmit` runs as linter) |
| **Bundler & Dev Server** | Vite 8+ (`@vitejs/plugin-react`) | Port: `3000`, host `0.0.0.0` |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) | Integrated directly in Vite pipeline, `@import "tailwindcss";` |
| **Icons** | Lucide React (`lucide-react`) | Consistent vector legal, security, status, and navigation icons |
| **Animation** | Motion (`motion`) | Subtle UI state transitions and accordion reveals |
| **Fonts** | Google Fonts | `Playfair Display` (editorial serif headings), `Inter` (sans-serif body) |
| **Server** | Express (`express`, `tsx`) | Full-stack server proxy capable, static bundle serving |

### NPM Scripts
- `npm run dev`: Runs Vite dev server on port 3000 (`vite --port=3000 --host=0.0.0.0`)
- `npm run build`: Compiles production bundle with Vite (`vite build`)
- `npm run lint`: Runs TypeScript compiler without emit (`tsc --noEmit`) to validate types and syntax
- `npm run clean`: Cleans build artifacts (`rm -rf dist server.js`)

---

## 3. Directory Structure

```
.
├── CLAUDE.md                     # This file (project documentation for Claude Code)
├── index.html                    # HTML entry point (Playfair Display, Inter, SEO meta tags)
├── metadata.json                 # AI Studio applet metadata & capabilities
├── package.json                  # Dependencies & npm scripts
├── tsconfig.json                 # TypeScript compiler configuration
├── tsconfig.node.json            # Node-specific TS configuration
├── vite.config.ts                # Vite config with React & Tailwind CSS plugins
├── public/                       # Static public assets
└── src/
    ├── main.tsx                  # React entry point mounting to #root
    ├── index.css                 # Global CSS importing Tailwind CSS v4 & font declarations
    ├── App.tsx                   # Master SPA Router, Hash Synchronizer & Global Layout Wrapper
    ├── components/
    │   ├── Header.tsx            # Sticky navigation bar with multi-level category/subpage mega-dropdown
    │   ├── Footer.tsx            # Universal footer with full site links, OAB badges, disclaimers
    │   ├── ConsultationForm.tsx  # Universal consultation reservation form (WhatsApp & email intake)
    │   └── SubpageTemplate.tsx   # Dynamic fallback renderer for subpages driven by servicesData.ts
    ├── data/
    │   └── servicesData.ts       # Structured central catalog of all legal practice categories and subpages
    └── pages/
        ├── HomePage.tsx                     # Landing page with hero, practice areas, testimonials, firm credentials
        ├── ServicesIndexPage.tsx            # Full directory of all legal services (/services)
        ├── CategoryPage.tsx                 # Category-level index page (/category/:slug)
        ├── OurFirmPage.tsx                  # Firm profile, attorney biography, ethics, and Curitiba headquarters
        ├── GetConsultationPage.tsx          # Dedicated consultation booking page (/consultation)
        │
        │   /* Bespoke Legal Practice Subpages */
        ├── BrazilianCitizenshipPage.tsx     # /services/brazilian-citizenship/ (Main citizenship hub)
        ├── OneYearNaturalizationPage.tsx    # /services/brazilian-citizenship/one-year-naturalization/
        ├── OrdinaryNaturalizationPage.tsx   # /services/brazilian-citizenship/ordinary-naturalization/
        ├── MarriageResidencyPage.tsx        # /services/immigration/permanent-residency-marriage/
        ├── ChildResidencyPage.tsx           # /services/immigration/permanent-residency-childbirth/
        ├── DigitalNomadVisaPage.tsx         # /services/immigration/digital-nomad-visa/
        ├── RetirementVisaPage.tsx           # /services/immigration/retirement-visa/
        ├── BusinessInvestorVisaPage.tsx     # /services/immigration/company-investment-visa-brazil/
        ├── FamilyReunionVisaPage.tsx        # /services/immigration/family-reunion-visa/
        └── WorkVisasPage.tsx                # /services/immigration/work-visas-brazil/
```

---

## 4. SPA Routing & URL Architecture

The application operates as a client-side Single Page Application (SPA) driven by state and hash-history synchronization in `src/App.tsx`.

### URL Resolution Model
1. **Hash Synchronization**:
   - `window.location.hash` is monitored (`window.addEventListener('hashchange', ...)`).
   - Any path after `#` is stripped of leading/trailing slashes and matched in `currentRoute`.
   - Direct link navigation occurs via `handleNavigate(route: string)` which updates both React state and `window.location.hash = route`.
2. **Path Aliasing**:
   Every specialized subpage supports multiple alias routes to ensure zero broken links:
   - Modern clean URL: `services/<category-slug>/<page-slug>/`
   - Without trailing slash: `services/<category-slug>/<page-slug>`
   - Dropdown navigation path: `subpage/<category-slug>/<page-slug>`
3. **Route Priority in `App.tsx`**:
   1. Static named pages (`home`, `services`, `our-firm`, `consultation`).
   2. Dedicated subpage components (e.g. `OneYearNaturalizationPage`, `OrdinaryNaturalizationPage`, `ChildResidencyPage`, etc.).
   3. Hub/Category pages (e.g. `BrazilianCitizenshipPage`, `CategoryPage`).
   4. Generic subpage fallback (`subpage/*` resolved via `findSubpageBySlugs` rendering `SubpageTemplate`).
   5. Fallback: `HomePage`.

### Complete URL Mapping Table

| Public URL Path | Hash Route | Page Component | Practice Area |
|---|---|---|---|
| `/` | `home` | `HomePage` | Home / Firm Overview |
| `/services` | `services` | `ServicesIndexPage` | Full Directory of Legal Services |
| `/our-firm` | `our-firm` | `OurFirmPage` | Attorney Bio & Curitiba Office |
| `/consultation` | `consultation` | `GetConsultationPage` | Booking Portal |
| `/category/brazil-immigration` | `category/brazil-immigration` | `CategoryPage` | Immigration Category Hub |
| `/category/real-estate` | `category/real-estate` | `CategoryPage` | Real Estate Category Hub |
| `/category/taxation` | `category/taxation` | `CategoryPage` | Tax Law Category Hub |
| `/category/corporate` | `category/corporate` | `CategoryPage` | Corporate Law Category Hub |
| `/services/brazilian-citizenship/` | `services/brazilian-citizenship` | `BrazilianCitizenshipPage` | Citizenship & Nationality Hub |
| `/services/brazilian-citizenship/one-year-naturalization/` | `services/brazilian-citizenship/one-year-naturalization` | `OneYearNaturalizationPage` | Fast-Track Naturalization (Spouses & Parents) |
| `/services/brazilian-citizenship/ordinary-naturalization/` | `services/brazilian-citizenship/ordinary-naturalization` | `OrdinaryNaturalizationPage` | Standard 4-Year Naturalization |
| `/services/immigration/permanent-residency-marriage/` | `services/immigration/permanent-residency-marriage` | `MarriageResidencyPage` | Spousal Permanent Residency |
| `/services/immigration/permanent-residency-childbirth/` | `services/immigration/permanent-residency-childbirth` | `ChildResidencyPage` | Residency Through Brazilian Child |
| `/services/immigration/digital-nomad-visa/` | `services/immigration/digital-nomad-visa` | `DigitalNomadVisaPage` | Digital Nomad Visa (Resolution 45) |
| `/services/immigration/retirement-visa/` | `services/immigration/retirement-visa` | `RetirementVisaPage` | Retirement Residency (Resolution 40) |
| `/services/immigration/company-investment-visa-brazil/` | `services/immigration/company-investment-visa-brazil` | `BusinessInvestorVisaPage` | Company Investor Visa (Resolution 36) |
| `/services/immigration/family-reunion-visa/` | `services/immigration/family-reunion-visa` | `FamilyReunionVisaPage` | Family Reunion Visa (VITEM XI) |
| `/services/immigration/work-visas-brazil/` | `services/immigration/work-visas-brazil` | `WorkVisasPage` | Work Visas & MTE Authorization |

---

## 5. UI/UX Design System & Layout Constitution

The visual identity embodies a prestigious, trustworthy Brazilian international law firm: dignified, warm, authoritative, and strictly adhering to Brazilian Bar Association (OAB) advertising ethics (non-sensationalist, informative, and professional).

### Color Palette

| Token | Hex Code | Purpose |
|---|---|---|
| **Deep Primary Navy** | `#0f1e36` | Headings, hero backgrounds, primary buttons, header, dark cards |
| **Darkest Navy** | `#0b1526` | Vignettes, footers, high-contrast dark sections |
| **Warm Gold / Ochre** | `#775a19` | Accent text, active tabs, subheads, category markers, borders |
| **Light Gold / Brass** | `#e9c176` | Hero accent badges, icon fills, contrast highlights on navy |
| **Warm Sand Background** | `#f1efe7` | Pill tags, secondary icon backgrounds, subtle category badges |
| **Off-White Surface** | `#f8f9fa` / `#f9f9fb` | Alternating section backgrounds, input fields, cards |
| **Pure White** | `#ffffff` | Primary content cards, form containers, elevated modules |
| **Body Dark Grey** | `#1a1c1d` / `#2D3142` | Primary body typography (high legibility) |
| **Secondary Grey** | `#44474d` / `#5f6368` | Paragraphs, explanatory copy, helper text |
| **Border Greys** | `#c5c6ce` / `#e2e2e4` | Clean structural borders, form inputs |
| **WhatsApp Emerald** | `#25D366` / `#20ba59` | Direct WhatsApp messaging CTA |

### Typography
- **Headings (Serif)**: `'Playfair Display', Georgia, serif` — applied via `font-serif` class. Conveys legal heritage and academic authority.
- **Body & UI (Sans-Serif)**: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif` — applied globally. High legibility for statutory citations and form inputs.

---

## 6. Strict Page Layout Specifications ("Lform 3la liman" & "Image 3")

When creating or modifying legal practice subpages, the user has established a **strict layout doctrine** that MUST be maintained across every page:

### 1. Hero Section ("Lform 3la liman" — Form on the Right)
- **Background**: Deep Navy (`#0f1e36`) with a thematic architectural/landscape stock image at 20-30% opacity with horizontal vignette gradient.
- **Top Breadcrumbs**: Clear hierarchical path (`SERVICES > [CATEGORY] > [SUBPAGE]`).
- **Left Column (approx. 7 columns)**:
  - Regulatory statutory pill (e.g. `Article 65, Law No. 13,445/2017`).
  - `h1` in `font-serif`: Clear, keyword-rich title.
  - Subtitle in `#e9c176`: Clear value proposition.
  - 2-3 structured introductory paragraphs outlining the Brazilian legal reality.
  - Dual action CTAs: Anchor button to `#hero-consultation-card` and button to explore statutory requirements.
  - Trust credential badges: `OAB/PR 58.420`, `Specialized Practice Area`, `Multilingual`, `100% Confidential`.
- **Right Column (approx. 5 columns)**:
  - Floating high-contrast White Intake Card with `#e9c176` border.
  - Fieldset: Full Name, Email, Phone/WhatsApp (with country code), Category-specific dropdowns (residency duration, status, ties), Message textarea.
  - Submit CTA: Primary button + instant WhatsApp redirect option upon submission.
  - Confidentiality guarantee statement (OAB Code of Ethics).

### 2. Curated High-Definition Section Imagery
- **Every major content section** must include a curated, relevant high-resolution stock photograph with an overlay card summarizing key statutory takeaways.
- Images should reflect actual Brazilian legal reality: modern federal architecture in Brasília (Palácio da Justiça, Supremo Tribunal Federal), corporate offices in São Paulo / Curitiba, civil registry cartórios, consular documentation, or authentic family/workplace scenes.

### 3. Comprehensive Interactive FAQ Accordions
- Each subpage contains 12 to 22 detailed questions addressing statutory edge cases, physical presence rules, permissible travel absences, tax impacts, government processing times, and document legalization.
- Implemented as interactive single-expand accordions with Lucide chevron rotations.

### 4. Bottom Reservation Section ("Image 3" on the Left, Form on the Right)
- **Left Column (approx. 5 columns)**:
  - "Image 3": The flagship Brazilian landmark judicial/legal architecture photo (Brasília Supreme Court / Justice Palace) with a dark gradient overlay.
  - Badges on the image: `CASPANI LAWYERS • OAB/PR 58.420`, Practice Desk title, `Strict Confidentiality`, and `Direct Attorney Representation`.
  - Accompanying legal credential card explaining the licensed attorney registration with the Ordem dos Advogados do Brasil.
- **Right Column (approx. 7 columns)**:
  - Complete `<ConsultationForm presetService="[Page Name]" />` component.
- **Statutory Legal Notice Footer**:
  - Educational legal disclaimer reminding visitors that content is informative and official decisions are sovereign governmental prerogatives.

---

## 7. Central Data Catalog (`servicesData.ts`)

The file `src/data/servicesData.ts` contains the authoritative database of practice categories and subpages:

```typescript
export interface SubPageItem {
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
  subpages: SubPageItem[];
}
```

### Main Categories Defined:
1. `brazil-immigration`: Family Reunion, Marriage Permanent Residency, Childbirth/Child Residency, Digital Nomad Visa, Retirement Visa, Business Investor Visa, Work Visas.
2. `brazilian-citizenship`: One-Year Naturalization (Spouses & Parents), Ordinary Naturalization (4-Year), Extraordinary Naturalization (15-Year), Citizenship by Descent, Provisional Naturalization, Special Naturalization, Nationality Reacquisition (EC 131/2023).
3. `real-estate`: 15-Step Property Acquisition Guide, Rural Land Legal Restrictions, Due Diligence & Title Searches, Real Estate Investor Visa.
4. `taxation`: Non-Resident Tax Status (Saída Definitiva), CPF Regularization for Foreigners, Foreign Capital Registration (BACEN / RDE-ROF), Cross-Border Inheritance & ITCMD.
5. `corporate`: Starting a Business in Brazil (CNPJ), Foreign Corporate Ownership & Quotas, Legal Representative Appointment (Procurador Residente).
6. `dispute-resolution`: Judicial Asset Recovery, Contract Enforcement, Power of Attorney & Consular Apostilles.

---

## 8. Development & Coding Rules for Claude Code

When instructed to add a new page or modify an existing feature, follow these principles:

1. **Type Safety & Compilation**:
   - Always run `npm run lint` (`tsc --noEmit`) and `npm run build` after making modifications to ensure 0 TypeScript errors.
   - Import all icons from `lucide-react`. Ensure any new icon names exist in the library.
2. **ConsultationForm Props**:
   - `ConsultationForm` accepts:
     `presetService?: string`
     `title?: string`
     `subtitle?: string`
     `theme?: 'light' | 'card'`
     `compact?: boolean`
   - *Note*: Use `presetService`, NOT `servicePreset`.
3. **Route Registration Checklist for New Subpages**:
   When creating a new subpage:
   1. Create the page component in `src/pages/MyNewPage.tsx` adhering to the Hero + Sections + FAQ + Bottom Form structure.
   2. Export the component and import it in `src/App.tsx`.
   3. In `App.tsx`, register the routing check:
      ```tsx
      if (
        currentRoute === 'services/category-slug/my-new-page' ||
        currentRoute === 'services/category-slug/my-new-page/' ||
        currentRoute === 'subpage/category-slug/my-new-page' ||
        currentRoute === 'subpage/category-slug/my-new-page/'
      ) {
        return <MyNewPage onNavigate={handleNavigate} />;
      }
      ```
   4. Update relevant category hub pages (e.g. `BrazilianCitizenshipPage.tsx` or `CategoryPage.tsx`) so pathway cards and buttons navigate directly to the new subpage via `onNavigate('services/...')`.
   5. Verify that `document.title` and `meta[name="description"]` are updated in the component's `useEffect`.
4. **WhatsApp Dispatch Integration**:
   - Every intake form must format a pre-filled WhatsApp message URL:
     `https://wa.me/5541998247700?text=${encodedText}`
   - Official phone number: `+55 (41) 99824-7700`.
5. **No Hallucinated Bar Numbers**:
   - Always reference the legitimate credential: **OAB/PR 58.420**.
   - Firm location: Curitiba, Paraná, Brazil.

---

## 9. Contact & Institutional Data

- **Law Firm**: Caspani Lawyers — Advocacia Internacional
- **Bar License**: OAB/PR 58.420
- **Headquarters**: Curitiba, PR, Brazil
- **WhatsApp Concierge**: +55 41 99824-7700
- **Consultation Format**: Video appointments (Google Meet / Zoom) conducted internationally in English, Portuguese, Spanish, and French.
