import { Briefcase } from 'lucide-react';
import Button from '../components/ui/Button';
import { RiArrowRightLine } from 'react-icons/ri';

// ─── Slot data ────────────────────────────────────────────────────────────────

const diamondSlot = {
  label: 'Diamond Sponsor Slot',
  sub: 'Become our diamond partner',
};

const goldSlots = [
  { label: 'Gold Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Gold Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Gold Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Gold Sponsor Slot', sub: 'Showcase your brand' },
];

const silverSlots = [
  { label: 'Silver Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Silver Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Silver Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Silver Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Silver Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Silver Sponsor Slot', sub: 'Showcase your brand' },
];

const bronzeSlots = [
  { label: 'Bronze Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Bronze Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Bronze Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Bronze Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Bronze Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Bronze Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Bronze Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Bronze Sponsor Slot', sub: 'Showcase your brand' },
];

// ─── Tier divider label ───────────────────────────────────────────────────────

function TierLabel({ name }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex-1 h-px bg-gray-300" />
      <span className="font-mono text-xs font-bold tracking-[0.2em] text-gray-500 select-none whitespace-nowrap">
        {'( '}{name}{' )'}
      </span>
      <div className="flex-1 h-px bg-gray-300" />
    </div>
  );
}

// ─── Green corner accent (top-left bookmark flag) ─────────────────────────────

function GreenCornerFlag() {
  return (
    <div
      className="absolute top-0 left-0 w-[28px] h-[34px] z-10"
      aria-hidden="true"
      style={{
        background: '#56D64B',
        clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
        borderRadius: '0 0 2px 2px',
      }}
    />
  );
}

// ─── SVG Wave Liquid Fill ─────────────────────────────────────────────────────

function WaveLiquid() {
  return (
    <div className="sponsor-liquid-wrap" aria-hidden="true">
      {/* Rising liquid tank — translates up on card hover */}
      <div className="sponsor-liquid-tank">
        {/* Back wave (slower, more transparent) */}
        <div className="sponsor-wave-track sponsor-wave-back-track">
          <svg
            viewBox="0 0 800 55"
            preserveAspectRatio="none"
            style={{ display: 'block', width: '200%', height: '100%' }}
          >
            <path
              d="M0,28 C80,5 160,50 240,28 C320,5 400,50 480,28 C560,5 640,50 720,28 C760,17 780,35 800,28 L800,55 L0,55 Z"
              fill="rgba(126,217,86,0.6)"
            />
          </svg>
        </div>
        {/* Front wave (faster, fully opaque) */}
        <div className="sponsor-wave-track sponsor-wave-front-track">
          <svg
            viewBox="0 0 800 55"
            preserveAspectRatio="none"
            style={{ display: 'block', width: '200%', height: '100%' }}
          >
            <path
              d="M0,34 C60,10 140,52 220,30 C300,8 380,48 460,28 C540,8 620,52 700,32 C740,22 770,42 800,34 L800,55 L0,55 Z"
              fill="#56D64B"
            />
          </svg>
        </div>
        {/* Solid green body below the waves */}
        <div className="sponsor-liquid-body" />
      </div>
    </div>
  );
}

// ─── Slot Card ────────────────────────────────────────────────────────────────

function SlotCard({ slot, size = 'md' }) {
  const scrollToCTA = () =>
    document.getElementById('sponsor-cta')?.scrollIntoView({ behavior: 'smooth' });

  const sizeCls = {
    xl: 'rounded-[20px] p-6',
    md: 'rounded-[18px] p-5',
    sm: 'rounded-[16px] p-4',
    xs: 'rounded-[14px] p-3',
  }[size];

  const plusCls = {
    xl: 'w-10 h-10 text-base',
    md: 'w-9 h-9 text-sm',
    sm: 'w-8 h-8 text-sm',
    xs: 'w-7 h-7 text-xs',
  }[size];

  const gapCls = {
    xl: 'gap-3',
    md: 'gap-2.5',
    sm: 'gap-2',
    xs: 'gap-1.5',
  }[size];

  const labelCls = {
    xl: 'text-[13px]',
    md: 'text-[11px]',
    sm: 'text-[10px]',
    xs: 'text-[9px]',
  }[size];

  const subCls = {
    xl: 'text-[11px]',
    md: 'text-[9.5px]',
    sm: 'text-[9px]',
    xs: 'text-[8px]',
  }[size];

  return (
    <div
      onClick={scrollToCTA}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && scrollToCTA()}
      className={`sponsor-card relative bg-white border border-gray-200 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden w-full h-full ${sizeCls}`}
    >
      {/* ── SVG Wave Liquid ── */}
      <WaveLiquid />

      {/* Green bookmark flag */}
      <GreenCornerFlag />

      {/* Content – sits above the liquid via z-index */}
      <div className={`sponsor-card-content ${gapCls}`}>
        <div
          className={`sponsor-plus rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-300 font-mono font-bold ${plusCls}`}
        >
          +
        </div>
        <div className="text-center leading-tight">
          <span className={`sponsor-label font-heading font-extrabold text-gray-500 transition-colors duration-300 block ${labelCls}`}>
            {slot.label}
          </span>
          <span className={`sponsor-sub font-medium text-gray-400 transition-colors duration-300 block mt-0.5 ${subCls}`}>
            {slot.sub}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: '#F2F2EA' }}
    >
      {/* Subtle dot-grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          {/* Pill tag */}
          <div className="inline-flex items-center gap-1.5 px-4 py-[6px] rounded-full border border-green-400/50 bg-green-50 text-[11px] font-bold tracking-widest text-green-700 uppercase">
            <span className="w-[7px] h-[7px] rounded-full bg-green-500 inline-block" />
            Sponsors
          </div>

          {/* Headline */}
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight text-gray-900">
            Backed by those who believe
            <br />
            in{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #22C55E 0%, #7ED956 100%)',
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
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl mx-auto">
            Our sponsors help us keep the event accessible to everyone. Join us in supporting
            Bengal's largest community-driven developer conference.
          </p>
        </div>

        {/* ── Tiers ── */}
        <div className="max-w-4xl mx-auto space-y-14">

          {/* DIAMOND */}
          <div>
            <TierLabel name="DIAMOND" />
            <div className="mx-auto max-w-2xl">
              <SlotCard slot={diamondSlot} size="xl" />
            </div>
          </div>

          {/* GOLD — 2×2 grid */}
          <div>
            <TierLabel name="GOLD" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {goldSlots.map((slot, i) => (
                <div key={i} className="aspect-[5/3]">
                  <SlotCard slot={slot} size="md" />
                </div>
              ))}
            </div>
          </div>

          {/* SILVER — 3×2 grid */}
          <div>
            <TierLabel name="SILVER" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {silverSlots.map((slot, i) => (
                <div key={i} className="aspect-[5/4]">
                  <SlotCard slot={slot} size="sm" />
                </div>
              ))}
            </div>
          </div>

          {/* BRONZE — 4×2 grid */}
          <div>
            <TierLabel name="BRONZE" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {bronzeSlots.map((slot, i) => (
                <div key={i} className="aspect-[4/3]">
                  <SlotCard slot={slot} size="xs" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Sponsor Us CTA ── */}
        <div
          id="sponsor-cta"
          className="mt-20 pt-14 flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <h4 className="font-heading font-extrabold text-3xl md:text-4xl text-gray-900 mb-3">
            Interested in partnering with us?
          </h4>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-xl">
            Join forces with Bengal's biggest open source gathering. Download our sponsorship
            prospectus to discover opportunities to showcase your brand to 500+ top developers.
          </p>
          <Button
            href="https://drive.google.com/file/d/1RVrIZV0d6UskRM9k62cOlUU1A3J2pBg4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="py-3.5 px-10 text-[15px] font-bold rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all"
            icon={RiArrowRightLine}
            iconPosition="right"
          >
            Sponsor Us
          </Button>
        </div>

      </div>
    </section>
  );
}
