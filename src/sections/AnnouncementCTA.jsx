import { RiGithubFill, RiTwitterXFill, RiLinkedinBoxFill, RiInstagramFill, RiArrowRightLine } from 'react-icons/ri';

const socials = [
  { handle: 'OpenSourceConIN',       url: 'https://www.x.com/OpenSourceConIN',                              icon: RiTwitterXFill    },
  { handle: '@opensourceconindia',   url: 'https://www.instagram.com/opensourceconindia',                   icon: RiInstagramFill   },
  { handle: 'OpenSourceCon India',   url: 'https://www.linkedin.com/company/opensource-con-india',          icon: RiLinkedinBoxFill },
  { handle: 'opensourcecon',         url: 'https://github.com/globalazurekolkata-web/opensourcecon',         icon: RiGithubFill      },
];

// ─── Illustrated background built entirely with CSS gradients + inline SVG ───

function CTABackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[24px]" aria-hidden="true">

      {/* 1. Base dark-green ground */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg,#0b2409 0%,#0d2b0a 55%,#071504 100%)' }}
      />

      {/* 2. Central lime-green stage spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 72% 60% at 52% 18%, #5ecf3a 0%, #2e9c12 28%, transparent 68%)',
        }}
      />

      {/* 3. Secondary softer glow (depth) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 10%, #8dea5e88 0%, transparent 70%)',
        }}
      />

      {/* 4. SVG scene: columns + golden blob + crowd */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 900 400"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for columns */}
          <linearGradient id="colGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1a5c0a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0a2e05" stopOpacity="0.6" />
          </linearGradient>
          {/* Gradient for golden blob */}
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#c8a832" stopOpacity="0.85" />
            <stop offset="60%"  stopColor="#e4bc40" stopOpacity="0.7"  />
            <stop offset="100%" stopColor="#9c7e1e" stopOpacity="0.5"  />
          </linearGradient>
          {/* Crowd gradient: dark green at bottom */}
          <linearGradient id="crowdGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#071205" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#020b01" stopOpacity="1.0" />
          </linearGradient>
        </defs>

        {/* ── Architectural columns (right side) ── */}
        {[640, 700, 760, 810, 850].map((x, i) => (
          <rect
            key={i}
            x={x} y={0}
            width={i === 0 ? 28 : 20}
            height={280}
            fill="url(#colGrad)"
            rx="4"
            opacity={0.55 - i * 0.06}
          />
        ))}

        {/* ── Golden organic blob (right centre-top) ── */}
        <path
          d="M 780,10 C 840,-5 900,40 910,110 C 920,180 880,230 840,215 C 810,205 790,175 770,145 C 748,112 720,80 740,45 C 752,25 765,17 780,10 Z"
          fill="url(#goldGrad)"
        />
        {/* Second smaller golden accent */}
        <path
          d="M 850,50 C 880,30 920,55 915,95 C 910,128 880,140 862,125 C 845,112 840,88 848,68 Z"
          fill="#d4a020"
          opacity="0.5"
        />

        {/* ── Crowd silhouettes ── */}
        {/* Row 1: back crowd (smaller, lighter) */}
        <path
          d="M 0,290 Q 18,270 36,275 Q 50,260 65,268 Q 80,255 95,263 Q 110,250 125,260
             Q 140,248 155,257 Q 170,252 185,260 Q 200,250 215,258 Q 228,247 243,255
             Q 258,248 272,256 Q 286,250 300,258 Q 314,248 328,256 Q 342,250 356,258
             Q 370,247 384,256 Q 398,250 412,258 Q 426,248 440,256 Q 454,250 468,257
             Q 482,248 496,256 Q 510,250 524,257 Q 538,248 552,255 Q 566,250 580,258
             Q 594,248 608,255 Q 622,250 636,258 Q 650,248 664,255 Q 678,250 692,257
             Q 706,248 720,255 Q 734,249 748,256 Q 762,249 776,256 Q 790,250 804,257
             Q 818,249 832,256 Q 846,250 860,257 Q 874,249 888,256 L 900,258 L 900,400 L 0,400 Z"
          fill="#071205"
          opacity="0.7"
        />
        {/* Row 2: mid crowd */}
        <path
          d="M 0,320 Q 22,295 45,305 Q 60,285 80,296 Q 98,280 118,292
             Q 136,278 155,290 Q 172,278 190,288 Q 208,276 226,288
             Q 244,278 262,288 Q 278,276 296,288 Q 314,278 332,288
             Q 350,276 368,287 Q 385,277 403,287 Q 420,276 438,286
             Q 455,277 473,287 Q 490,276 508,286 Q 525,277 543,287
             Q 560,276 578,285 Q 595,277 613,285 Q 630,276 648,284
             Q 665,277 683,285 Q 700,276 718,284 Q 735,277 753,284
             Q 770,276 788,284 Q 805,277 823,284 Q 840,276 858,284
             Q 875,277 890,284 L 900,286 L 900,400 L 0,400 Z"
          fill="#050f04"
          opacity="0.85"
        />
        {/* Row 3: front crowd (darkest, tallest heads) */}
        <path
          d="M -10,355 Q 15,320 45,335 Q 70,310 100,328
             Q 128,308 158,326 Q 186,308 216,326
             Q 244,308 274,325 Q 302,308 332,324
             Q 360,308 390,323 Q 418,308 448,322
             Q 476,308 506,321 Q 534,308 564,321
             Q 592,308 622,320 Q 650,308 680,320
             Q 708,308 738,319 Q 766,308 796,318
             Q 824,308 854,318 Q 882,308 910,317
             L 910,400 L -10,400 Z"
          fill="#030a02"
        />

        {/* Dark vignette overlay on the bottom quarter */}
        <rect x="0" y="240" width="900" height="160" fill="url(#crowdGrad)" />

        {/* Left dark edge vignette */}
        <defs>
          <radialGradient id="leftVig" cx="0" cy="0.5" r="0.6" gradientUnits="objectBoundingBox">
            <stop offset="0%"  stopColor="#020b01" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="220" height="400" fill="url(#leftVig)" />

      </svg>

      {/* 5. Final top dark overlay so text pops */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(4,14,3,0.18) 0%, rgba(4,14,3,0.08) 30%, rgba(4,14,3,0.55) 75%, rgba(2,8,2,0.80) 100%)',
        }}
      />
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function AnnouncementCTA() {
  const openKonfHub = (e) => {
    if (e) e.preventDefault();
    const kBtn = document.querySelector('#konfhub-widget-trigger button, #konfhub-widget-trigger a');
    if (kBtn) kBtn.click();
    else window.open('https://konfhub.com/opensourcecon2026', '_blank');
  };

  return (
    <section className="py-12 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#F2F2EA' }}>
      {/* Page-level dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.045) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-8">

        {/* ── CTA Card ── */}
        <div className="relative rounded-[24px] overflow-hidden" style={{ minHeight: '380px' }}>

          {/* Illustrated CSS/SVG background */}
          <CTABackground />

          {/* Card content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 sm:py-20 gap-5 min-h-[380px]">

            {/* Pill */}
            <span
              className="inline-flex items-center px-5 py-1.5 rounded-md border border-white/25 text-white text-[12px] font-semibold tracking-wide"
              style={{ background: 'rgba(10,35,8,0.55)', backdropFilter: 'blur(6px)' }}
            >
              Registrations Open
            </span>

            {/* Heading */}
            <h2
              className="font-heading font-extrabold text-white uppercase leading-[0.95] tracking-tight"
              style={{
                fontSize: 'clamp(48px, 10vw, 96px)',
                textShadow: '0 2px 32px rgba(0,0,0,0.5)',
              }}
            >
              Register &amp;
              <br />
              Connect
            </h2>

            {/* Description */}
            <p className="text-white/65 text-[13px] sm:text-[14px] leading-relaxed max-w-md">
              Secure your pass today to join hands-on workshops, keynotes, and panels. Connect with
              our social handles below for live announcements and speaker releases!
            </p>

            {/* CTA Button */}
            <button
              onClick={openKonfHub}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-[13px] transition-all duration-200 active:scale-[0.97]"
              style={{
                background: '#56D64B',
                color: '#0a1f08',
                fontFamily: '"JetBrains Mono", monospace',
                boxShadow: '0 0 0 0 rgba(86,214,75,0)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 28px rgba(86,214,75,0.55)';
                e.currentTarget.style.background = '#6be45f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 0 rgba(86,214,75,0)';
                e.currentTarget.style.background = '#56D64B';
              }}
            >
              Book Your Tickets Now
            </button>
          </div>
        </div>

        {/* ── Social Links ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {socials.map((social) => (
            <a
              key={social.handle}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hover:scale-[1.03] active:scale-[0.98] shadow-md justify-center w-full !text-dark"
            >
              <social.icon size={19} />
              <span>{social.handle}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
