import { useState, useEffect } from 'react';
import { MapPin, Calendar, Train, Plane } from 'lucide-react';

// ─── Headphone SVG ─────────────────────────────────────────────────────────────

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

// ─── Transit Card ───────────────────────────────────────────────────────────────

function TransitCard({ icon: Icon, label, detail }) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl px-5 py-5 flex flex-col items-start gap-2 hover:-translate-y-1 hover:shadow-md transition-all duration-300 overflow-hidden group">
      {/* Top green accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#22C55E] via-[#56D64B] to-[#7ED956]/30" />

      {/* Icon chip */}
      <div className="w-9 h-9 rounded-xl bg-green-50 border border-green-200 text-[#22C55E] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon size={17} strokeWidth={2} />
      </div>

      <div>
        <p className="font-mono font-bold text-[10px] tracking-[0.18em] uppercase text-gray-500 mb-0.5">
          {label}
        </p>
        <p className="text-[12px] text-gray-600 leading-snug font-medium">
          {detail}
        </p>
      </div>
    </div>
  );
}

// ─── Main Section ───────────────────────────────────────────────────────────────

export default function Venue() {
  const [cardView, setCardView] = useState('map'); // 'map' | 'photo'
  const [isHovered, setIsHovered] = useState(false);

  // Auto-toggle every 20 s when not hovered
  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(
      () => setCardView((v) => (v === 'map' ? 'photo' : 'map')),
      20000,
    );
    return () => clearInterval(id);
  }, [isHovered]);

  return (
    <section
      id="venue"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: '#F2F2EA' }}
    >
      {/* Dot-grid background */}
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
        <div className="text-center max-w-xl mx-auto mb-10 space-y-4">
          {/* Pill */}
          <div className="inline-flex items-center gap-1.5 px-4 py-[6px] rounded-full border border-green-400/50 bg-green-50 text-[11px] font-bold tracking-widest text-green-700 uppercase">
            <span className="w-[7px] h-[7px] rounded-full bg-green-500 inline-block animate-pulse" />
            Venue
          </div>

          {/* Headline */}
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight text-gray-900">
            The Heart of Bengal
            <br />
            is our{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #22C55E 0%, #7ED956 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              className="uppercase font-extrabold underline decoration-[3px] underline-offset-[5px]"
              style={{
                background: 'linear-gradient(90deg, #22C55E 0%, #7ED956 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textDecorationColor: '#22C55E',
              }}
            >
              Stage
            </span>
          </h2>
        </div>

        {/* ── Action Buttons ── */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <a
            href="https://www.google.com/maps/place/Dhono+Dhanyo+Auditorium/@22.530292,88.337091,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#22C55E] text-white text-[13px] font-bold hover:bg-[#1aaa52] transition-colors shadow-sm"
          >
            View Map Location
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=OpenSourceCon+India+2026&dates=20261205T090000/20261205T180000&details=Bengal%27s+biggest+open+source+gathering.&location=Dhono+Dhanyo+Auditorium%2C+Alipore%2C+Kolkata"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#22C55E] text-[#22C55E] bg-white text-[13px] font-bold hover:bg-green-50 transition-colors shadow-sm"
          >
            Add to calendar
            <span aria-hidden="true" className="text-base">📅</span>
          </a>
        </div>

        {/* ── Main Map / Photo Card ── */}
        <div
          className="max-w-3xl mx-auto mb-6 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Headphone badge — top-left, overlapping */}
          <div className="absolute -top-4 -left-4 z-20 w-11 h-11 rounded-full bg-white border-2 border-gray-200 shadow-md flex items-center justify-center">
            <HeadphoneIcon className="text-gray-500" />
          </div>

          {/* Card */}
          <div className="bg-white border border-gray-200 rounded-[24px] overflow-hidden shadow-md">

            {/* Map / Photo viewport */}
            <div className="relative w-full h-[280px] sm:h-[360px] overflow-hidden">

              {/* Toggle tabs — top right */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-[3px] shadow-sm">
                <button
                  onClick={() => setCardView('map')}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                    cardView === 'map'
                      ? 'bg-gray-900 text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  Map View
                </button>
                <button
                  onClick={() => setCardView('photo')}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                    cardView === 'photo'
                      ? 'bg-gray-900 text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  Venue Photo
                </button>
              </div>

              {/* MAP panel */}
              <div
                className={`absolute inset-0 transition-all duration-700 ${
                  cardView === 'map' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.974416174677!2d88.3370905752157!3d22.530292079471927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027746475abbcd%3A0x97ab4cf0c716e313!2sDhono%20Dhanyo%20Auditorium!5e0!3m2!1sen!2sin!4v1721034660000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map – Dhono Dhanyo Auditorium"
                />
              </div>

              {/* PHOTO panel */}
              <div
                className={`absolute inset-0 transition-all duration-700 ${
                  cardView === 'photo' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src="/images/venue.jpg"
                  alt="Dhono Dhanyo Auditorium"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#56D64B]/15 border border-[#56D64B]/30 text-[#56D64B] text-[10px] font-bold uppercase tracking-wider mb-2">
                    Conch-Shell Architecture
                  </span>
                  <h4 className="text-white font-heading font-extrabold text-xl leading-tight">
                    Dhono Dhanyo Auditorium
                  </h4>
                  <p className="text-gray-300 text-xs mt-1 max-w-lg">
                    Spanning 4.5 acres with a seating capacity of 2,000+, featuring structural steel design and advanced acoustics.
                  </p>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="border-t border-gray-100 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

              {/* Venue address */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-[#22C55E]" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-heading font-extrabold text-[13px] text-gray-900 leading-tight">
                    Dhono Dhanyo Auditorium
                  </p>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                    Alipore, Kolkata, West Bengal
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0">
                  <Calendar size={14} className="text-[#22C55E]" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-heading font-extrabold text-[13px] text-gray-900 leading-tight">
                    05th December 2026
                  </p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">
                    Full Day Event
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Transit Cards ── */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <TransitCard
            icon={Train}
            label="Metro Link"
            detail="Netaji Bhavan / Kalighat (~2.5 km)"
          />
          <TransitCard
            icon={Train}
            label="Railway"
            detail="Sealdah (~7 km) / Howrah (~8.5 km)"
          />
          <TransitCard
            icon={Plane}
            label="Airport"
            detail="Kolkata Airport [CCU] (~22 km)"
          />
        </div>

      </div>
    </section>
  );
}
