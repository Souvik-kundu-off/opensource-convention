import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.19, 1, 0.22, 1];

const faqs = [
  {
    q: "Is there a registration fee for the conference?",
    a: "The regular tickets will cost around ₹1000 but we have early bird discounts!"
  },
  {
    q: "Will meals be provided?",
    a: "Yes, lunch and tea/coffee will be provided during the event."
  },
  {
    q: "Can I bring my laptop?",
    a: "Yes, we encourage you to bring your laptop for the hands-on workshops."
  },
  {
    q: "Do I need to be an expert to attend?",
    a: "Not at all! We have sessions ranging from beginner to advanced levels. Everyone is welcome."
  }
];

// ─── Green Flower / Asterisk SVG Icon ─────────────────────────────────────────

function GreenFlowerIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Center core */}
      <circle cx="12" cy="12" r="2.2" />
      {/* 4 cardinal petals */}
      <rect x="10.6" y="2.5" width="2.8" height="6.5" rx="1.4" />
      <rect x="10.6" y="15" width="2.8" height="6.5" rx="1.4" />
      <rect x="2.5" y="10.6" width="6.5" height="2.8" rx="1.4" />
      <rect x="15" y="10.6" width="6.5" height="2.8" rx="1.4" />
      {/* 4 diagonal leaf nodes */}
      <circle cx="6.5" cy="6.5" r="1.6" />
      <circle cx="17.5" cy="6.5" r="1.6" />
      <circle cx="6.5" cy="17.5" r="1.6" />
      <circle cx="17.5" cy="17.5" r="1.6" />
    </svg>
  );
}

// ─── FAQ Section Component ───────────────────────────────────────────────────

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: '#F2F2EA' }}
    >
      {/* Subtle dot grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Info & CTA */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* FAQ Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-green-600/30 bg-white/70 shadow-2xs">
              <GreenFlowerIcon className="w-4 h-4 text-[#2BA834]" />
              <span className="font-heading font-extrabold text-[12px] tracking-wider text-gray-900 uppercase">
                FAQ
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[46px] font-bold leading-[1.18] tracking-tight text-gray-900">
              Got questions?
              <br />
              We've got the
              <br />
              <span
                className="uppercase font-extrabold tracking-wide"
                style={{
                  background: 'linear-gradient(90deg, #22C55E 0%, #56D64B 50%, #7ED956 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                ANSWERS
              </span>
            </h2>

            {/* Subtitle paragraph */}
            <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed max-w-sm">
              Find answers to common questions about attending the Open Source Conference Kolkata.
            </p>

            {/* Contact Us button */}
            <div className="pt-2">
              <a
                href="mailto:opensourceconkol@gmail.com"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-[#1E3E34] hover:bg-[#173028] text-white font-medium text-[14px] tracking-wide shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-gray-200/80 bg-white transition-all duration-300 overflow-hidden shadow-2xs hover:border-green-400/50 hover:shadow-sm"
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                      className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left focus:outline-none transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <GreenFlowerIcon className="w-[18px] h-[18px] text-[#2BA834] flex-shrink-0" />
                        <span className="font-heading font-medium text-[15px] text-gray-800 tracking-tight leading-snug">
                          {faq.q}
                        </span>
                      </div>

                      <ChevronDown
                        size={18}
                        className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-gray-700' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-4 pt-1 border-t border-gray-100">
                            <p className="text-gray-600 text-[14px] leading-relaxed pl-8">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
