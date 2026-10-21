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

/** Single-expand FAQ accordion laid out as divided rows */
export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items, defaultOpen = 0 }) => {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);

  return (
    <div className="border-b border-[#d9dbe0]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        return (
          <div key={item.question} className="border-t border-[#d9dbe0]">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="group w-full flex items-start justify-between gap-6 text-left py-5 cursor-pointer"
            >
              <span
                className={`font-serif text-[18px] leading-snug transition-colors ${
                  isOpen ? 'text-[#775a19]' : 'text-[#0f1e36] group-hover:text-[#775a19]'
                }`}
              >
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 mt-0.5 text-[#775a19] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div id={panelId} className="pb-6 pr-10 text-[15px] text-[#44474d] leading-[1.75] max-w-[68ch]">
                {item.answer.split(/(https:\/\/[^\s]+[^\s.,;)])/g).map((part, i) =>
                  part.startsWith('https://') ? (
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
                    part
                  )
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
