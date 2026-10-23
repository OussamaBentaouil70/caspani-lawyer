import React, { useEffect, useState } from 'react';
import { CheckCircle2, Mail, CalendarCheck, Video, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface ThankYouPageProps {
  onNavigate: (route: string) => void;
}

// The scheduling steps after a request, as described on the Get a Consultation page
const NEXT_STEPS = [
  { icon: Mail, title: 'Receive Consultation Details', text: 'Our office will provide appointment availability, professional fees and payment instructions.' },
  { icon: CalendarCheck, title: 'Confirm Your Appointment', text: 'Your appointment will be confirmed once the consultation fee has been paid.' },
  { icon: Video, title: 'Meet Your Attorney Online', text: 'Attend your private consultation via Google Meet and discuss your legal options and next steps.' }
];

/** Shown at /thank-you after the consultation form was sent successfully (see ConsultationForm) */
export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onNavigate }) => {
  const [request, setRequest] = useState<{ name?: string; email?: string }>({});

  useEffect(() => {
    document.title = 'Thank You | Caspani Lawyers';
    // A confirmation page should not appear in search results
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, nofollow';
    document.head.appendChild(robots);
    try {
      setRequest(JSON.parse(sessionStorage.getItem('caspani-consultation') ?? '{}'));
    } catch {
      // No stored request (e.g. the page was opened directly): show the generic greeting
    }
    return () => robots.remove();
  }, []);

  const firstName = request.name?.trim().split(/\s+/)[0];

  return (
    <div className="w-full flex flex-col bg-[#f9f9fb]">
      <section className="relative w-full bg-[#0f1e36] text-white py-20 lg:py-28 overflow-hidden">
        <img
          src="/images/hero-rio.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e36]/95 via-[#0f1e36]/85 to-[#0f1e36]/55 pointer-events-none"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#775a19]/20 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#e9c176]/15 border border-[#e9c176]/50 mx-auto flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-[#e9c176]" />
          </div>
          <span className="block text-[12px] font-semibold tracking-[0.16em] uppercase text-[#e9c176] mb-4">Request received</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-5">
            Thank You{firstName ? `, ${firstName}` : ''}
          </h1>
          <p className="text-base sm:text-lg text-[#edeef0] leading-relaxed mb-3">
            Your consultation request has been sent to Caspani Lawyers | Advocacia Internacional. Our office will contact you with the next steps.
          </p>
          <p className="text-sm text-[#e9c176]">
            {request.email ? (
              <>
                A confirmation email is on its way to <strong className="text-white font-semibold">{request.email}</strong>.
              </>
            ) : (
              'A confirmation email is on its way to the address you provided.'
            )}
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="block text-[12px] font-semibold tracking-[0.08em] text-[#775a19] mb-3">WHAT HAPPENS NEXT</span>
            <h2 className="font-serif font-normal text-[30px] sm:text-[38px] leading-[1.15] text-[#0f1e36]">Your Next Steps</h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEXT_STEPS.map(({ icon: Icon, title, text }, index) => (
              <li key={title} className="bg-[#f8f9fa] border border-[#e2e2e4] border-t-2 border-t-[#775a19] p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-full bg-[#0f1e36] text-[#e9c176] font-serif flex items-center justify-center">{index + 1}</span>
                  <Icon className="w-5 h-5 text-[#775a19]" />
                </div>
                <h3 className="font-serif text-[20px] text-[#0f1e36] mb-2">{title}</h3>
                <p className="text-[15px] leading-relaxed text-[#44474d]">{text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/5541998247700"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <WhatsAppIcon className="w-[18px] h-[18px]" />
              <span>WhatsApp: +55 (41) 99824-7700</span>
            </a>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center justify-center gap-2 bg-[#0f1e36] hover:bg-[#775a19] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center justify-center bg-white hover:bg-[#f3f3f5] text-[#0f1e36] px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-[#c5c6ce] transition-colors cursor-pointer"
            >
              Back to Home
            </button>
          </div>
          <p className="mt-10 text-center text-[11px] text-[#75777e] max-w-2xl mx-auto leading-relaxed">
            All consultations are paid and subject to advance payment. Consultation fees are communicated before booking confirmation. Submitting a request does not establish an attorney-client relationship.
          </p>
        </div>
      </section>
    </div>
  );
};
