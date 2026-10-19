import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  /** Index opened on first render; -1 keeps every item closed */
  defaultOpen?: number;
}

/** Single-expand FAQ accordion */
export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items, defaultOpen = 0 }) => {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`bg-white rounded-xl border transition-colors ${
              isOpen ? 'border-[#c5a059] shadow-md' : 'border-[#e2e2e4] shadow-xs'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer"
            >
              <span className="font-serif text-base font-bold text-[#0f1e36]">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#775a19] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 -mt-1 text-sm text-[#44474d] leading-relaxed">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};
