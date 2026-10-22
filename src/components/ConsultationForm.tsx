import React, { useState } from 'react';
import { Send, CheckCircle2, User, Mail, Phone, Scale, Globe, Languages, CalendarClock } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ConsultationFormProps {
  id?: string;
  title?: string;
  subtitle?: string;
  presetService?: string;
  theme?: 'light' | 'card';
  compact?: boolean;
  /** 'full' adds the country, language and availability fields used on the consultation page */
  variant?: 'standard' | 'full';
  /** Optional page-specific question, e.g. family relationship or planned investment */
  extraField?: { label: string; placeholder?: string; options?: string[] };
}

const SERVICE_GROUPS: { label: string; options: string[] }[] = [
  {
    label: 'Immigration & Nationality',
    options: [
      'Brazilian Visas & Residence Permits',
      'Digital Nomad Visa (VITEM XIV)',
      'Property Investor Visa (Golden Visa)',
      'Marriage Permanent Residency',
      'Brazilian Naturalization & Citizenship',
      'Paraguay Residency & Mercosur'
    ]
  },
  {
    label: 'Real Estate & Wealth',
    options: [
      'Real Estate Purchase Due Diligence',
      'Remote Property Acquisition (Power of Attorney)',
      'Off-Plan (Na Planta) Property Contract Review',
      'Holding & Entity Structures (LLC)',
      'Property Disputes & Title Defense'
    ]
  },
  {
    label: 'Banking, Succession & Courts',
    options: [
      'Cross-Border Money Transfers & CDE Accounts',
      'International Inheritance & Brazilian Probate',
      'Foreign Divorce Recognition (Homologação STJ)',
      'Foreign Judgment Recognition',
      'Commercial Litigation & Arbitration',
      'Commercial Debt Collection & Protest',
      'Non-Resident Brazilian Tax (CPF / DARF)'
    ]
  }
];

const LEGAL_MATTERS = [
  'Immigration & Citizenship',
  'Business & Corporate Law',
  'Real Estate',
  'Tax & Non-Resident Matters',
  'Inheritance',
  'Litigation',
  'Other'
];

const LANGUAGES = ['English', 'Portuguese', 'Spanish', 'Italian', 'French', 'Arabic with interpreter'];

const inputClass =
  'w-full bg-[#f3f3f5] pl-9 pr-3 py-2.5 rounded-lg border border-[#c5c6ce] text-sm text-[#1a1c1d] placeholder:text-[#75777e] focus:outline-none focus:border-[#775a19] focus:bg-white transition-colors';
const selectClass =
  'w-full bg-[#f3f3f5] px-3 py-2.5 rounded-lg border border-[#c5c6ce] text-sm text-[#1a1c1d] focus:outline-none focus:border-[#775a19] focus:bg-white';
const labelClass = 'block text-[11px] font-semibold text-[#44474d] uppercase tracking-wider mb-1';

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  id = 'consultation-form',
  title = 'Request Legal Consultation',
  subtitle = 'Tell us about your legal matter and we will contact you with the next steps',
  presetService = '',
  compact = false,
  variant = 'standard',
  extraField
}) => {
  const isFull = variant === 'full';
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    country: '',
    language: 'English',
    service: presetService || '',
    message: '',
    availability: '',
    extra: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // A preset coming from a page that is not in the standard list still needs a matching option
  const presetIsListed =
    !presetService ||
    (isFull ? LEGAL_MATTERS : SERVICE_GROUPS.flatMap((g) => g.options)).includes(presetService);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const lines = [
      `Hello Caspani Lawyers, my name is ${formData.fullName}. I would like to request a consultation about: ${formData.service || 'Legal Services'}.`,
      `Email: ${formData.email}`,
      `WhatsApp: ${formData.countryCode} ${formData.phone}`,
      isFull && formData.country ? `Country of residence: ${formData.country}` : '',
      isFull ? `Preferred language: ${formData.language}` : '',
      isFull && formData.availability ? `Availability: ${formData.availability}` : '',
      extraField && formData.extra ? `${extraField.label}: ${formData.extra}` : '',
      `Details: ${formData.message}`
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/5541998247700?text=${text}`, '_blank');
  };

  if (submitted) {
    return (
      <div className="bg-white text-[#1a1c1d] rounded-xl p-6 lg:p-8 shadow-2xl border border-[#c5a059]/40 text-center animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#f3ede0] text-[#775a19] mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-9 h-9 text-[#775a19]" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#0f1e36] mb-2">One Last Step</h3>
        <p className="text-[#44474d] text-sm leading-relaxed mb-6">
          Thank you, <strong className="text-[#0f1e36]">{formData.fullName}</strong>. Send your request to our office via WhatsApp below. We will reply with appointment availability, professional fees and payment instructions.
        </p>

        <div className="p-4 bg-[#f9f9fb] rounded-lg border border-[#e2e2e4] mb-6 text-left text-xs text-[#44474d] space-y-1">
          <p><strong className="text-[#0f1e36]">Legal Matter:</strong> {formData.service || 'Brazilian Legal Consultation'}</p>
          <p><strong className="text-[#0f1e36]">WhatsApp:</strong> {formData.countryCode} {formData.phone}</p>
          <p><strong className="text-[#0f1e36]">Email:</strong> {formData.email}</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleWhatsAppRedirect}
            type="button"
            className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-4 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-[18px] h-[18px]" />
            <span>Send My Request via WhatsApp</span>
          </button>
          <button
            onClick={() => setSubmitted(false)}
            type="button"
            className="text-xs text-[#775a19] hover:underline"
          >
            Edit My Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className={`bg-white text-[#1a1c1d] rounded-xl ${compact ? 'p-5' : 'p-6 lg:p-8'} shadow-2xl border border-[#c5a059]/30 relative`}>
      <div className="flex items-start justify-between mb-4 pb-3 border-b border-[#e8e8ea]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Scale className="w-5 h-5 text-[#775a19]" />
            <h3 className="font-serif text-xl lg:text-2xl font-semibold text-[#0f1e36]">{title}</h3>
          </div>
          <p className="text-xs text-[#44474d]">{subtitle}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={labelClass} htmlFor={`${id}-fullName`}>
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-4 h-4 text-[#75777e]" />
            <input
              id={`${id}-fullName`}
              required
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Enter your full name"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor={`${id}-email`}>
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-4 h-4 text-[#75777e]" />
            <input
              id={`${id}-email`}
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email address"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="sm:col-span-1">
            <label className={labelClass} htmlFor={`${id}-countryCode`}>
              Country Code
            </label>
            <select
              id={`${id}-countryCode`}
              value={formData.countryCode}
              onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
              className="w-full bg-[#f3f3f5] px-2 py-2.5 rounded-lg border border-[#c5c6ce] text-sm text-[#1a1c1d] focus:outline-none focus:border-[#775a19] focus:bg-white"
            >
              <option value="+1">US/CA (+1)</option>
              <option value="+44">UK (+44)</option>
              <option value="+55">BR (+55)</option>
              <option value="+33">FR (+33)</option>
              <option value="+49">DE (+49)</option>
              <option value="+39">IT (+39)</option>
              <option value="+34">ES (+34)</option>
              <option value="+351">PT (+351)</option>
              <option value="+971">UAE (+971)</option>
              <option value="+212">MA (+212)</option>
              <option value="+595">PY (+595)</option>
              <option value="+41">CH (+41)</option>
              <option value="+61">AU (+61)</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor={`${id}-phone`}>
              WhatsApp Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-4 h-4 text-[#75777e]" />
              <input
                id={`${id}-phone`}
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Include country code"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {isFull && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className={labelClass} htmlFor={`${id}-country`}>
                Country of Residence *
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-3 w-4 h-4 text-[#75777e]" />
                <input
                  id={`${id}-country`}
                  required
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="Select your country"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className={labelClass} htmlFor={`${id}-language`}>
                Preferred Language *
              </label>
              <div className="relative">
                <Languages className="absolute left-3 top-3 w-4 h-4 text-[#75777e] pointer-events-none" />
                <select
                  id={`${id}-language`}
                  required
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  className={`${selectClass} pl-9`}
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        <div>
          <label className={labelClass} htmlFor={`${id}-service`}>
            Legal Matter *
          </label>
          <select
            id={`${id}-service`}
            required
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className={selectClass}
          >
            <option value="" disabled>Select your legal matter</option>
            {!presetIsListed && <option value={presetService}>{presetService}</option>}
            {isFull
              ? LEGAL_MATTERS.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))
              : SERVICE_GROUPS.map((group) => (
                  <optgroup key={group.label} label={group.label}>
                    {group.options.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </optgroup>
                ))}
          </select>
        </div>

        {extraField && (
          <div>
            <label className={labelClass} htmlFor={`${id}-extra`}>
              {extraField.label}
            </label>
            {extraField.options ? (
              <select
                id={`${id}-extra`}
                value={formData.extra}
                onChange={(e) => setFormData({ ...formData, extra: e.target.value })}
                className={selectClass}
              >
                <option value="">{extraField.placeholder ?? 'Select an option'}</option>
                {extraField.options.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                id={`${id}-extra`}
                type="text"
                value={formData.extra}
                onChange={(e) => setFormData({ ...formData, extra: e.target.value })}
                placeholder={extraField.placeholder}
                className="w-full bg-[#f3f3f5] px-3 py-2.5 rounded-lg border border-[#c5c6ce] text-sm text-[#1a1c1d] placeholder:text-[#75777e] focus:outline-none focus:border-[#775a19] focus:bg-white transition-colors"
              />
            )}
          </div>
        )}

        <div>
          <label className={labelClass} htmlFor={`${id}-message`}>
            Brief Description of Your Case{isFull ? ' *' : ''}
          </label>
          <textarea
            id={`${id}-message`}
            required={isFull}
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Describe your legal matter and objectives."
            className="w-full bg-[#f3f3f5] p-3 rounded-lg border border-[#c5c6ce] text-sm text-[#1a1c1d] placeholder:text-[#75777e] focus:outline-none focus:border-[#775a19] focus:bg-white transition-colors"
          />
        </div>

        {isFull && (
          <div>
            <label className={labelClass} htmlFor={`${id}-availability`}>
              Preferred Consultation Date & Time
            </label>
            <div className="relative">
              <CalendarClock className="absolute left-3 top-3 w-4 h-4 text-[#75777e]" />
              <input
                id={`${id}-availability`}
                type="text"
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                placeholder="Indicate your availability and time zone."
                className={inputClass}
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-[#fed488] hover:bg-[#775a19] text-[#785a1a] hover:text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span>Submit Consultation Request</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
