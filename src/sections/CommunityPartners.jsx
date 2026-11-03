import { openKonfHub } from '../utils/konfhub';

const partners = [
  { name: 'CNCG Delhi', logo: '/images/community-partners/cncg-delhi.jpg' },
  { name: 'CNCG Kolkata', logo: '/images/community-partners/CNCG Kolkata.png' },
  { name: 'CNCG Lucknow', logo: '/images/community-partners/CNCG Lucknow.png' },
  { name: 'CNCG Hyderabad', logo: '/images/community-partners/CNCG Hyderabad.png' },
  { name: 'Women in Cloud Native', logo: '/images/community-partners/Women in Cloud Native.jpeg' },
  { name: 'Kolkata IT Hub', logo: '/images/community-partners/Kolkata IT Hub.jpeg' },
  { name: 'From Dev to Ops', logo: '/images/community-partners/from dev to ops.png' },
  { name: 'Kolkata Calling', logo: '/images/community-partners/Kolkata Calling.png' },
  { name: 'DEVCONF India', logo: '/images/community-partners/devconf-in-inverse.png' },
  { name: 'Flutter Kolkata', logo: '/images/community-partners/flutter_kolkata.png' },
  { name: 'Global Azure Kolkata', logo: '/images/community-partners/global-azure-kolkata.jpeg' },
  { name: 'React Kolkata', logo: '/images/community-partners/React Kolkata.png' },
  { name: 'Litmus', logo: '/images/community-partners/litmus.png' },
  { name: 'Kolkata WordPress', logo: '/images/community-partners/kolkata wordpress.png' },
  { name: 'Developers Kolkata', logo: '/images/community-partners/developers kolkata.png' },
  { name: 'CodeRush X', logo: '/images/community-partners/CodeRush X.png' },
  { name: 'GDGOC TMSL', logo: '/images/community-partners/GDGOC TMSL.jpg' },
  { name: 'GDGOC AOT', logo: '/images/community-partners/GDGOC AOT.png' },
  { name: 'GDGOC MSIT', logo: '/images/community-partners/GDGOC MSIT.png' },
  { name: 'FIEM ACM Student Chapter', logo: '/images/community-partners/FIEM ACM Student Chapter.jpg' },
  { name: 'RightSignal', logo: '/images/community-partners/RightSignal.jpeg' },
  { name: 'Bug Busters', logo: '/images/community-partners/bug busters.png' },
];

// ─── Green Flower / Blossom Icon ──────────────────────────────────────────────

function GreenFlowerIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="2.2" />
      <rect x="10.6" y="2.5" width="2.8" height="6.5" rx="1.4" />
      <rect x="10.6" y="15" width="2.8" height="6.5" rx="1.4" />
      <rect x="2.5" y="10.6" width="6.5" height="2.8" rx="1.4" />
      <rect x="15" y="10.6" width="6.5" height="2.8" rx="1.4" />
      <circle cx="6.5" cy="6.5" r="1.6" />
      <circle cx="17.5" cy="6.5" r="1.6" />
      <circle cx="6.5" cy="17.5" r="1.6" />
      <circle cx="17.5" cy="17.5" r="1.6" />
    </svg>
  );
}

// ─── Community Partners Section ───────────────────────────────────────────────

export default function CommunityPartners() {
  return (
    <section
      id="community"
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ backgroundColor: '#F2F2EA' }}
    >
      {/* Top accent green line */}
      <div className="w-full max-w-xl mx-auto h-[2.5px] bg-[#56D64B] rounded-full mb-12" />

      {/* Subtle dot-grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-green-600/30 bg-white/70 shadow-2xs">
            <GreenFlowerIcon className="w-3.5 h-3.5 text-[#2BA834]" />
            <span className="font-heading font-extrabold text-[11px] tracking-wider text-gray-900 uppercase">
              OUR PARTNERS
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[46px] font-bold leading-[1.18] tracking-tight text-gray-900">
            Communities that
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
              POWER US
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed max-w-xl mx-auto">
            Open Source Con India is built on the shoulders of amazing developer communities. Meet
            the partners helping us grow the ecosystem in Kolkata and beyond.
          </p>
        </div>

        {/* ── Partner Cards Grid (4 columns on desktop) ── */}
        <div className="max-w-4xl mx-auto mb-14">
          {/* Main 20 cards in 4 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {partners.slice(0, 20).map((partner, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200/80 rounded-2xl p-4 aspect-[4/3] sm:aspect-square flex flex-col items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-green-300/80 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-full flex-1 flex items-center justify-center p-2">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-[64px] max-w-[120px] object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="font-heading font-medium text-[10px] sm:text-[11px] text-gray-600 group-hover:text-gray-900 transition-colors text-center px-1 truncate w-full select-none">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          {/* Last 2 cards centered */}
          <div className="flex justify-center gap-4 sm:gap-5 mt-4 sm:mt-5">
            {partners.slice(20).map((partner, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200/80 rounded-2xl p-4 aspect-[4/3] sm:aspect-square w-[calc(50%-0.5rem)] sm:w-[calc(25%-0.95rem)] flex flex-col items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-green-300/80 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-full flex-1 flex items-center justify-center p-2">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-[64px] max-w-[120px] object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="font-heading font-medium text-[10px] sm:text-[11px] text-gray-600 group-hover:text-gray-900 transition-colors text-center px-1 truncate w-full select-none">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Featured Partners (Ticketing & Digital Credentials) ── */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Official Ticketing Partner */}
          <div>
            <span className="font-mono font-bold text-[10px] text-gray-700 tracking-wider uppercase mb-2 block select-none">
              OFFICIAL TICKETING PARTNER
            </span>
            <div
              onClick={openKonfHub}
              className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-green-300/80 transition-all duration-300 cursor-pointer flex items-center gap-5 group"
            >
              <div className="w-24 sm:w-28 h-16 flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/community-partners/Konfhub.png"
                  alt="KonfHub"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-heading font-extrabold text-[15px] text-gray-900 group-hover:text-green-600 transition-colors">
                  KonfHub
                </h4>
                <p className="text-[11px] text-gray-500 leading-snug mt-1">
                  Powering seamless event registration, ticketing, and check-ins for Open Source Con
                  India 2026.
                </p>
              </div>
            </div>
          </div>

          {/* Digital Credentials Partner */}
          <div>
            <span className="font-mono font-bold text-[10px] text-gray-700 tracking-wider uppercase mb-2 block select-none">
              DIGITAL CREDENTIALS PARTNER
            </span>
            <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-green-300/80 transition-all duration-300 flex items-center gap-5 group">
              <div className="w-24 sm:w-28 h-16 flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/community-partners/CertDirectory Credentials.png"
                  alt="CertDirectory"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-heading font-extrabold text-[15px] text-gray-900">
                  CertDirectory
                </h4>
                <p className="text-[11px] text-gray-500 leading-snug mt-1">
                  Issuing verifiable, tamper-proof digital certificates &amp; achievement badges for
                  all Open Source Con India 2026 attendees, speakers, and volunteers.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom accent green line */}
        <div className="w-full max-w-xl mx-auto h-[2.5px] bg-[#56D64B] rounded-full mt-16" />

      </div>
    </section>
  );
}
