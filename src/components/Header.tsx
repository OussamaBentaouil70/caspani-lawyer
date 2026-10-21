import React, { useState, useEffect, useRef } from 'react';
import { SERVICES_DATA, ServiceCategory } from '../data/servicesData';
import { ChevronDown, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>('real-estate');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Ordered list of category slugs matching user's requested order
  const orderedCategorySlugs = [
    'real-estate',
    'estate-planning',
    'inheritance-probates',
    'banking-money',
    'recognition',
    'litigation',
    'debt-collection',
    'brazil-immigration',
    'brazilian-citizenship',
    'paraguay-immigration',
    'others'
  ];

  const categoriesSorted = orderedCategorySlugs
    .map((slug) => SERVICES_DATA.find((c) => c.slug === slug))
    .filter((c): c is ServiceCategory => Boolean(c));

  const activeCategory =
    SERVICES_DATA.find((c) => c.slug === activeCategorySlug) ||
    categoriesSorted[0] ||
    SERVICES_DATA[0];

  const handleNavClick = (route: string) => {
    onNavigate(route);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnterDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const isServicesActive =
    currentRoute.startsWith('services') ||
    currentRoute.startsWith('category') ||
    currentRoute.startsWith('subpage');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f9fb]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(15,30,54,0.08)] border-b border-[#e2e2e4]">
      <div className="h-20 w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <img
            alt="Caspani Lawyers Emblem"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZIPBpyzQBr2CDPrPBazVrZm3-x-zYmrz02TgNVC2YLNOl2MjWeXgFqSrzH0dVrK38Dv6YA_Lu-aB8lnXcjKjqKvJ9xDpmgbpvuZ-a_GUZmhzcrssV5WslbdaZwx3xvZ--h47LK2i2R4-NebnB1UBa8KgJpWCTbtTd9gQ72Nw4wqVlkVLBno-dtmutuq3Kln4xl08b3pjZxkkJbs93lxHMvu0NrkKbNu8pKQn02bLoS6u1I4dFL_xp"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg lg:text-xl font-bold uppercase tracking-wider text-[#000412] leading-none group-hover:text-[#775a19] transition-colors">
              CASPANI LAWYERS
            </span>
            <span className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#775a19] mt-1">
              ADVOCACIA INTERNACIONAL
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links in Template Colors */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {/* Home */}
          <button
            onClick={() => handleNavClick('home')}
            className={`text-sm font-medium transition-colors cursor-pointer flex items-center py-2 ${
              currentRoute === 'home'
                ? 'text-[#775a19] border-b-2 border-[#775a19] font-bold'
                : 'text-[#44474d] hover:text-[#775a19]'
            }`}
          >
            Home
          </button>

          {/* Services with Hover/Click Dropdown Trigger */}
          <div
            className="relative h-full flex items-center"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnterDropdown}
            onMouseLeave={handleMouseLeaveDropdown}
          >
            <button
              onClick={() => handleNavClick('services')}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors cursor-pointer py-2 h-full ${
                isServicesActive || servicesDropdownOpen
                  ? 'text-[#775a19] border-b-2 border-[#775a19] font-bold'
                  : 'text-[#44474d] hover:text-[#775a19]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-[#775a19]' : 'text-[#75777e]'
                }`}
              />
            </button>

            {/* ========================================================
                THE DROPDOWN (Sovereign Juris Template Colors):
                Two white panels side-by-side with clickable category links
                on the left and clickable subpage links on the right
                ======================================================== */}
            {servicesDropdownOpen && (
              <div
                className="absolute left-0 top-full w-[650px] bg-white rounded-b-xl shadow-2xl border border-[#c5a059]/30 border-t-0 z-50 flex overflow-hidden animate-fadeIn text-[#1a1c1d]"
                style={{ top: '100%' }}
              >
                {/* LEFT PANEL: CATEGORIES LIST */}
                <div className="w-[285px] bg-[#f9f9fb] py-5 px-6 border-r border-[#e8e8ea] shrink-0">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#75777e] mb-3">
                    Categories ({categoriesSorted.length})
                  </span>
                  <div className="flex flex-col space-y-1.5">
                    {categoriesSorted.map((cat) => {
                      const isHoveredOrActive = cat.slug === activeCategorySlug;
                      return (
                        <div
                          key={cat.slug}
                          onMouseEnter={() => setActiveCategorySlug(cat.slug)}
                          className="group"
                        >
                          <button
                            onClick={() => handleNavClick(`category/${cat.slug}`)}
                            className={`w-full text-left text-[14px] leading-snug py-1.5 px-2 rounded-md transition-colors cursor-pointer flex items-center justify-between ${
                              isHoveredOrActive
                                ? 'bg-white text-[#775a19] font-bold shadow-xs border border-[#c5a059]/30'
                                : 'text-[#2D3142] hover:text-[#775a19] hover:bg-white/60 font-medium'
                            }`}
                          >
                            <span className="truncate pr-2">{cat.title}</span>
                            {isHoveredOrActive && (
                              <ChevronRight className="w-3.5 h-3.5 text-[#775a19] shrink-0" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#e8e8ea]">
                    <button
                      onClick={() => handleNavClick('services')}
                      className="text-xs font-bold text-[#775a19] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>All Services Overview</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* RIGHT PANEL: SUBPAGES FOR ACTIVE/HOVERED CATEGORY */}
                <div className="w-[365px] bg-white py-5 px-6 overflow-y-auto max-h-[490px]">
                  <div className="mb-3 pb-2 border-b border-[#e8e8ea] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19] block">
                        Practice Sub-Pages
                      </span>
                      <h4 className="font-serif text-sm font-bold text-[#0f1e36]">
                        {activeCategory.title}
                      </h4>
                    </div>
                    <button
                      onClick={() => handleNavClick(`category/${activeCategory.slug}`)}
                      className="text-[11px] font-bold text-[#775a19] hover:underline cursor-pointer"
                    >
                      View Category →
                    </button>
                  </div>

                  <div className="flex flex-col space-y-2 pt-1">
                    {activeCategory.subpages.map((sub) => (
                      <button
                        key={sub.slug}
                        onClick={() => handleNavClick(`subpage/${activeCategory.slug}/${sub.slug}`)}
                        className="text-left text-[13.5px] leading-snug text-[#2D3142] hover:text-[#775a19] hover:translate-x-1 transition-all cursor-pointer py-1 block"
                      >
                        {sub.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Who We Help */}
          <button
            onClick={() => handleNavClick('services')}
            className="text-sm font-medium text-[#44474d] hover:text-[#775a19] transition-colors cursor-pointer flex items-center gap-1 py-2"
          >
            <span>Who We Help</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#75777e]" />
          </button>

          {/* Resources */}
          <button
            onClick={() => handleNavClick('subpage/real-estate/15-step-buying-guide')}
            className="text-sm font-medium text-[#44474d] hover:text-[#775a19] transition-colors cursor-pointer flex items-center gap-1 py-2"
          >
            <span>Resources</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#75777e]" />
          </button>

          {/* Our Firm */}
          <button
            onClick={() => handleNavClick('our-firm')}
            className={`text-sm font-medium transition-colors cursor-pointer flex items-center gap-1 py-2 ${
              currentRoute === 'our-firm'
                ? 'text-[#775a19] border-b-2 border-[#775a19] font-bold'
                : 'text-[#44474d] hover:text-[#775a19]'
            }`}
          >
            <span>Our Firm</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#75777e]" />
          </button>

          {/* Contact */}
          <button
            onClick={() => handleNavClick('consultation')}
            className={`text-sm font-medium transition-colors cursor-pointer py-2 ${
              currentRoute === 'consultation'
                ? 'text-[#775a19] border-b-2 border-[#775a19] font-bold'
                : 'text-[#44474d] hover:text-[#775a19]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5541998247700"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat directly with attorney on WhatsApp"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider px-3.5 py-2 rounded-lg shadow-sm transition-colors"
          >
            <WhatsAppIcon className="w-[16px] h-[16px]" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => handleNavClick('consultation')}
            className="inline-flex items-center justify-center bg-[#fed488] text-[#785a1a] hover:bg-[#775a19] hover:text-white px-4 lg:px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors duration-200 shadow-sm cursor-pointer"
          >
            Get a Consultation
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0f1e36] hover:text-[#775a19] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#0f1e36]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (in Template Colors) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e2e2e4] max-h-[80vh] overflow-y-auto px-4 py-4 space-y-3 shadow-2xl text-[#1a1c1d]">
          <button
            onClick={() => handleNavClick('home')}
            className="w-full text-left py-2 text-sm font-bold uppercase text-[#0f1e36] border-b border-[#e8e8ea]"
          >
            Home
          </button>

          {/* Mobile Services Accordion */}
          <div className="border-b border-[#e8e8ea] pb-2">
            <div className="flex items-center justify-between py-2">
              <button
                onClick={() => handleNavClick('services')}
                className="text-sm font-bold uppercase text-[#775a19]"
              >
                Services (All Categories)
              </button>
            </div>

            <div className="pl-2 space-y-1 mt-1">
              {categoriesSorted.map((cat) => {
                const isExpanded = mobileExpandedCat === cat.slug;
                return (
                  <div key={cat.slug} className="border-l-2 border-[#e8e8ea] pl-2 py-1">
                    <button
                      onClick={() => setMobileExpandedCat(isExpanded ? null : cat.slug)}
                      className="w-full flex items-center justify-between text-xs font-medium text-[#44474d] py-1"
                    >
                      <span>{cat.title}</span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180 text-[#775a19]' : ''}`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="pl-2 pt-1 space-y-1 bg-[#f9f9fb] p-2 rounded">
                        <button
                          onClick={() => handleNavClick(`category/${cat.slug}`)}
                          className="w-full text-left text-[11px] font-bold text-[#775a19] py-0.5 underline block"
                        >
                          View {cat.title} Category Page
                        </button>
                        {cat.subpages.map((sub) => (
                          <button
                            key={sub.slug}
                            onClick={() => handleNavClick(`subpage/${cat.slug}/${sub.slug}`)}
                            className="w-full text-left text-[11px] text-[#44474d] hover:text-[#775a19] py-0.5 block truncate"
                          >
                            • {sub.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => handleNavClick('services')}
            className="w-full text-left py-2 text-sm font-medium text-[#0f1e36] border-b border-[#e8e8ea] flex items-center justify-between"
          >
            <span>Who We Help</span>
            <ChevronRight className="w-4 h-4 text-[#75777e]" />
          </button>

          <button
            onClick={() => handleNavClick('subpage/real-estate/15-step-buying-guide')}
            className="w-full text-left py-2 text-sm font-medium text-[#0f1e36] border-b border-[#e8e8ea] flex items-center justify-between"
          >
            <span>Resources</span>
            <ChevronRight className="w-4 h-4 text-[#75777e]" />
          </button>

          <button
            onClick={() => handleNavClick('our-firm')}
            className="w-full text-left py-2 text-sm font-medium text-[#0f1e36] border-b border-[#e8e8ea] flex items-center justify-between"
          >
            <span>Our Firm</span>
            <ChevronRight className="w-4 h-4 text-[#75777e]" />
          </button>

          <button
            onClick={() => handleNavClick('consultation')}
            className="w-full text-left py-2 text-sm font-medium text-[#0f1e36] border-b border-[#e8e8ea] flex items-center justify-between"
          >
            <span>Contact</span>
            <ChevronRight className="w-4 h-4 text-[#75777e]" />
          </button>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/5541998247700"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-[16px] h-[16px]" />
              <span>WhatsApp: +55 (41) 99824-7700</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
