import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, User } from 'lucide-react';
import { RiArrowRightLine } from 'react-icons/ri';

// ─── Data ───────────────────────────────────────────────────────────────────

const featuredSpeakers = [
  {
    name: 'To Be Announced',
    role: 'Open Source Maintainer',
    company: 'Leading Tech Org',
    tags: ['Speaker', 'Maintainer'],
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'To Be Announced',
    role: 'Core Contributor',
    company: 'OSS Foundation',
    tags: ['Speaker', 'Contributor'],
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'To Be Announced',
    role: 'DevOps Architect',
    company: 'Global Scale Inc',
    tags: ['Speaker', 'Architect'],
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'To Be Announced',
    role: 'Web3 Lead Developer',
    company: 'Decentralized Protocol',
    tags: ['Speaker', 'Developer'],
    linkedin: 'https://linkedin.com',
  },
];

const featuredGuests = [
  {
    name: 'To Be Announced',
    role: 'Open Source Maintainer',
    company: 'Leading Tech Org',
    tags: ['Speaker', 'Maintainer'],
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'To Be Announced',
    role: 'Core Icon Maker',
    company: 'OSS Foundation',
    tags: ['Speaker', 'Contributor'],
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'To Be Announced',
    role: 'DevOps Architect',
    company: 'Global Scale Inc',
    tags: ['Speaker', 'Architect'],
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'To Be Announced',
    role: 'Web3 Lead Developer',
    company: 'Decentralized Protocol',
    tags: ['Speaker', 'Developer'],
    linkedin: 'https://linkedin.com',
  },
];

// ─── LinkedIn SVG ─────────────────────────────────────────────────────────────

function LinkedInIcon() {
  return (
    <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

// ─── Headphone Icon (SVG) ─────────────────────────────────────────────────────

function HeadphoneIcon({ className = '' }) {
  return (
    <svg
      className={`w-5 h-5 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

// ─── Speaker Card ─────────────────────────────────────────────────────────────

function SpeakerCard({ slot }) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-[24px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group w-full h-full">

      {/* Top info */}
      <div className="flex items-start justify-between px-5 pt-5 pb-3">
        <div className="min-w-0 pr-2 flex-1">
          <h4 className="font-heading font-extrabold text-[15px] text-gray-900 leading-snug">
            {slot.name}
          </h4>
          <p className="text-[11px] font-semibold text-gray-500 mt-0.5 leading-tight">
            {slot.role}
          </p>
          <p className="text-[10px] text-gray-400 font-medium mt-0.5">
            {slot.company}
          </p>
        </div>
        <a
          href={slot.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex-shrink-0 w-7 h-7 rounded-md bg-[#0077B5] text-white flex items-center justify-center hover:opacity-90 transition-opacity mt-0.5"
        >
          <LinkedInIcon />
        </a>
      </div>

      {/* Portrait area */}
      <div className="px-4 pb-3 flex-1">
        <div className="relative rounded-[16px] overflow-hidden bg-[#F9FAF8] border border-dashed border-gray-200 flex flex-col items-center justify-center aspect-[4/3] group-hover:bg-green-50/60 group-hover:border-green-300 transition-all duration-300">

          {/* Headphone – top left */}
          <div className="absolute top-3 left-3">
            <HeadphoneIcon className="text-gray-400 group-hover:text-[#56D64B] transition-colors duration-300" />
          </div>

          {/* User silhouette */}
          <User
            size={50}
            className="text-gray-300 group-hover:text-green-300 transition-colors duration-300 stroke-[1.2]"
          />

          {/* OSCon logo badge – bottom right */}
          <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white border border-[#56D64B] flex items-center justify-center p-[5px] shadow-sm">
            <img src="/images/logo.png" alt="logo" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Tag footer */}
      <div className="bg-gradient-to-r from-[#22C55E] to-[#7ED956] flex items-center justify-center gap-2 py-[10px] px-4 mt-auto">
        {slot.tags.map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-3 py-[4px] rounded-full bg-white/25 border border-white/20 text-white text-[10px] font-bold tracking-wide"
          >
            <span className="w-[5px] h-[5px] rounded-full bg-white inline-block flex-shrink-0" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Carousel Block ────────────────────────────────────────────────────────────

const VISIBLE = 3;

function CarouselBlock({ title, viewAllLabel, viewAllHref, slots }) {
  const [desktopIdx, setDesktopIdx] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);
  const touchX = useRef(null);

  const maxDesktop = Math.max(0, slots.length - VISIBLE);

  const prevDesktop = () => setDesktopIdx((i) => Math.max(0, i - 1));
  const nextDesktop = () => setDesktopIdx((i) => Math.min(maxDesktop, i + 1));

  const onTouchStart = (e) => { touchX.current = e.targetTouches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const diff = touchX.current - e.changedTouches[0].clientX;
    if (diff > 40) setMobileIdx((p) => (p + 1) % slots.length);
    if (diff < -40) setMobileIdx((p) => (p - 1 + slots.length) % slots.length);
    touchX.current = null;
  };

  const visible = slots.slice(desktopIdx, desktopIdx + VISIBLE);

  return (
    <div className="mb-14">

      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-heading text-[20px] font-extrabold text-gray-900 underline underline-offset-[5px] decoration-gray-900 decoration-[2.5px]">
          {title}
        </h3>
        <a
          href={viewAllHref}
          className="text-[12px] font-semibold text-gray-500 flex items-center gap-1 hover:text-[#22C55E] transition-colors"
        >
          {viewAllLabel}
          <RiArrowRightLine />
        </a>
      </div>

      {/* Arrow buttons (desktop) */}
      <div className="hidden sm:flex items-center justify-end gap-2 mb-5">
        <button
          onClick={prevDesktop}
          disabled={desktopIdx === 0}
          aria-label="Previous"
          className="w-9 h-9 rounded-full bg-[#56D64B] text-white flex items-center justify-center hover:bg-[#45c53c] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow"
        >
          <ArrowLeft size={15} strokeWidth={2.5} />
        </button>
        <button
          onClick={nextDesktop}
          disabled={desktopIdx >= maxDesktop}
          aria-label="Next"
          className="w-9 h-9 rounded-full bg-[#56D64B] text-white flex items-center justify-center hover:bg-[#45c53c] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow"
        >
          <ArrowRight size={15} strokeWidth={2.5} />
        </button>
      </div>

      {/* Desktop: 3-col grid */}
      <div className="hidden sm:grid grid-cols-3 gap-5">
        {visible.map((slot, i) => (
          <div key={i} className="min-h-[400px]">
            <SpeakerCard slot={slot} />
          </div>
        ))}
      </div>

      {/* Mobile: swipe stack */}
      <div
        className="sm:hidden relative h-[400px] overflow-visible"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {slots.map((slot, i) => {
          const offset = (i - mobileIdx + slots.length) % slots.length;
          let style = {};
          if (offset === 0) {
            style = { transform: 'translateX(0) scale(1)', opacity: 1, zIndex: 10 };
          } else if (offset === 1) {
            style = { transform: 'translateX(22%) scale(0.88)', opacity: 0.45, zIndex: 5 };
          } else if (offset === slots.length - 1) {
            style = { transform: 'translateX(-22%) scale(0.88)', opacity: 0.45, zIndex: 5 };
          } else {
            style = { opacity: 0, zIndex: 0, pointerEvents: 'none' };
          }
          return (
            <div
              key={i}
              className="absolute inset-0 transition-all duration-500 ease-out"
              style={style}
            >
              <SpeakerCard slot={slot} />
            </div>
          );
        })}
      </div>

      {/* Mobile dots */}
      <div className="flex sm:hidden items-center justify-center gap-2 mt-4">
        <button
          onClick={() => setMobileIdx((p) => (p - 1 + slots.length) % slots.length)}
          className="w-8 h-8 rounded-full border border-gray-300 bg-white text-gray-600 flex items-center justify-center"
          aria-label="Previous"
        >
          <ArrowLeft size={14} />
        </button>
        <div className="flex gap-1.5">
          {slots.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobileIdx(i)}
              className={`rounded-full transition-all duration-300 ${
                i === mobileIdx ? 'w-4 h-[6px] bg-[#56D64B]' : 'w-[6px] h-[6px] bg-gray-300'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setMobileIdx((p) => (p + 1) % slots.length)}
          className="w-8 h-8 rounded-full border border-gray-300 bg-white text-gray-600 flex items-center justify-center"
          aria-label="Next"
        >
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Speakers() {
  return (
    <section
      id="speakers"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: '#F2F2EA' }}
    >
      {/* Subtle dot-grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-8">

        {/* ── Page Header ── */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          {/* Pill */}
          <div className="inline-flex items-center gap-1.5 px-4 py-[6px] rounded-full border border-green-400/50 bg-green-50 text-[11px] font-bold tracking-widest text-green-700 uppercase">
            <span className="w-[7px] h-[7px] rounded-full bg-green-500 inline-block" />
            Speakers
          </div>

          {/* Headline */}
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight text-gray-900">
            Voices of the
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg,#22C55E 0%,#7ED956 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              className="uppercase font-extrabold"
            >
              Open{' '}
              <span
                className="underline decoration-[3px] underline-offset-[6px]"
                style={{ textDecorationColor: '#22C55E' }}
              >
                Source
              </span>
            </span>{' '}
            <span className="text-gray-900">World</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-[15px] leading-relaxed">
            We're curating an exceptional lineup of maintainers, engineers, and community leaders.
          </p>
        </div>

        {/* ── Featured Speakers ── */}
        <CarouselBlock
          title="Featured Speakers"
          viewAllLabel="View all speakers →"
          viewAllHref="#speakers"
          slots={featuredSpeakers}
        />

        {/* Divider */}
        <div className="border-t border-gray-200 mb-14" />

        {/* ── Featured Guests ── */}
        <CarouselBlock
          title="Featured Guests"
          viewAllLabel="View all guests →"
          viewAllHref="#speakers"
          slots={featuredGuests}
        />

      </div>
    </section>
  );
}
