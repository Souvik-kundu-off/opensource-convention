import { Newspaper } from 'lucide-react';

const mediaPartners = [
  {
    name: 'Wiki Kolkata',
    type: 'Media Partner',
    logo: '/images/community-partners/media-partners/Wiki Kolkata.png',
  },
  {
    name: 'Kube Events',
    type: 'Media Partner',
    logo: '/images/community-partners/media-partners/kube events.png',
  },
  {
    name: 'Prospera X',
    type: 'Media Partner',
    logo: '/images/community-partners/media-partners/Prospera X.png',
  },
];

export default function MediaPartners() {
  return (
    <section
      id="media"
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
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          {/* Pill */}
          <div className="inline-flex items-center gap-1.5 px-4 py-[6px] rounded-full border border-green-400/50 bg-green-50 text-[11px] font-bold tracking-widest text-green-700 uppercase">
            <span className="w-[7px] h-[7px] rounded-full bg-green-500 inline-block animate-pulse" />
            Media Partners
          </div>

          {/* Headline */}
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight text-gray-900">
            Voices amplifying
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #22C55E 0%, #7ED956 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              className="uppercase font-extrabold"
            >
              Our Reach
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl mx-auto">
            We collaborate with leading tech publications, podcasts, and media creators to broadcast
            the impact of Bengal's flagship open source convention.
          </p>
        </div>

        {/* ── Partner Cards ── */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {mediaPartners.map((partner, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-[20px] p-6 flex flex-col items-center justify-between gap-4 hover:-translate-y-1 hover:shadow-lg hover:border-green-300 transition-all duration-300 group"
            >
              {/* Logo area */}
              <div className="w-full flex items-center justify-center h-[80px]">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full border border-dashed border-green-400/40 flex items-center justify-center text-[#22C55E] bg-green-50">
                    <Newspaper size={22} />
                  </div>
                )}
              </div>

              {/* Name + type */}
              <div className="text-center">
                <p className="font-heading font-extrabold text-[14px] text-gray-900 group-hover:text-[#22C55E] transition-colors">
                  {partner.name}
                </p>
                <p className="text-[11px] text-gray-400 font-medium mt-0.5 uppercase tracking-wider">
                  {partner.type}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
