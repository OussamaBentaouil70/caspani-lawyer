import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface TeamMember {
  name: string;
  role: string;
  detail: string;
  image: string;
}

interface TeamSliderProps {
  members: TeamMember[];
}

/** Horizontal scroll-snap carousel: swipe on touch devices, arrows and dots on all screens */
export const TeamSlider: React.FC<TeamSliderProps> = ({ members }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atEnd, setAtEnd] = useState(false);

  // Track which card is closest to the left edge so the dots stay in sync with swipes
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const left = track.scrollLeft;
      let nearest = 0;
      cards.forEach((card, i) => {
        if (Math.abs(card.offsetLeft - track.offsetLeft - left) < Math.abs(cards[nearest].offsetLeft - track.offsetLeft - left)) nearest = i;
      });
      setActive(nearest);
      setAtEnd(left + track.clientWidth >= track.scrollWidth - 4);
    };
    onScroll();
    track.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      track.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    const card = track?.children[Math.max(0, Math.min(index, members.length - 1))] as HTMLElement | undefined;
    if (track && card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {members.map((member) => (
          <article
            key={member.name}
            className="snap-start shrink-0 w-[82%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl overflow-hidden border border-[#e2e2e4] shadow-sm"
          >
            <div className="aspect-[4/5] bg-[#edeef0] overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
            <div className="p-5 border-t-4 border-[#e9c176]">
              <h3 className="font-serif text-xl font-bold text-[#0f1e36]">{member.name}</h3>
              <p className="text-sm font-semibold text-[#775a19] mt-1">{member.role}</p>
              <p className="text-xs text-[#5f6368] mt-1">{member.detail}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2" role="tablist" aria-label="Team members">
          {members.map((member, i) => (
            <button
              key={member.name}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Show ${member.name}`}
              onClick={() => scrollToCard(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${active === i ? 'w-8 bg-[#775a19]' : 'w-2 bg-[#c5c6ce] hover:bg-[#775a19]/60'}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous team member"
            onClick={() => scrollToCard(active - 1)}
            disabled={active === 0}
            className="w-10 h-10 rounded-full border border-[#c5c6ce] bg-white text-[#0f1e36] flex items-center justify-center hover:border-[#775a19] hover:text-[#775a19] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next team member"
            onClick={() => scrollToCard(active + 1)}
            disabled={atEnd}
            className="w-10 h-10 rounded-full bg-[#0f1e36] text-white flex items-center justify-center hover:bg-[#775a19] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
