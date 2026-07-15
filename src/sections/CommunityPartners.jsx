import { ArrowRight, Users } from 'lucide-react';
import Button from '../components/ui/Button';

const partners = [
  { name: 'CNCG Delhi', logo: '/images/community-partners/cncg-delhi.jpg' },
  { name: 'Women in Cloud Native', logo: '/images/community-partners/Women in Cloud Native.jpeg' },
  { name: 'CertDirectory', logo: '/images/community-partners/CertDirectory Credentials.png' },
  { name: 'CNCG Lucknow', logo: '/images/community-partners/CNCG Lucknow.png' },
  { name: 'React Kolkata', logo: '/images/community-partners/React Kolkata.png' },
  { name: 'Kolkata IT Hub', logo: '/images/community-partners/Kolkata IT Hub.jpeg' },
  { name: 'From Dev to Ops', logo: '/images/community-partners/from dev to ops.png' },
  { name: 'Kolkata Calling', logo: '/images/community-partners/Kolkata Calling.png' },
  { name: 'DevConf India', logo: '/images/community-partners/devconf-in-inverse.png', darkBg: true },
  { name: 'Flutter Kolkata', logo: '/images/community-partners/flutter_kolkata.png' },
  { name: 'Global Azure Kolkata', logo: '/images/community-partners/global-azure-kolkata.jpeg' },
  { name: 'RightSignal', logo: '/images/community-partners/RightSignal.jpeg' },
  { name: 'GDGOC TMSL', logo: '/images/community-partners/GDGOC TMSL.jpg' },
  { name: 'CodeRush X', logo: '/images/community-partners/CodeRush X.png' },
  { name: 'FIEM ACM Student Chapter', logo: '/images/community-partners/FIEM ACM Student Chapter.jpg' },
  { name: 'GDGOC AOT', logo: '/images/community-partners/GDGOC AOT.png' },
];

export default function CommunityPartners() {
  return (
    <section id="community" className="py-20 lg:py-28 relative bg-gray-50 dark:bg-[#0B1020] overflow-hidden border-t border-gray-100 dark:border-white/5">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="section-tag inline-flex items-center gap-1.5 mx-auto">
            <span className="green-dot animate-pulse" />
            OUR PARTNERS
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.2]! tracking-tight text-dark dark:text-white">
            <span className="font-medium">Communities that</span>
            <br />
            <span className="text-gradient uppercase font-bold">POWER US</span>
          </h2>
          
          <p className="text-gray-secondary dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Open Source Con India is built on the shoulders of amazing developer communities. Meet the partners helping us grow the ecosystem in Kolkata and beyond.
          </p>
        </div>

        {/* Grid Layout for Partners */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {partners.map((partner, i) => (
              <div 
                key={i} 
                className="card flex flex-col items-center justify-center p-5 aspect-[4/3] hover:border-brand-green/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Logo Frame */}
                <div className={`h-[65%] w-full flex items-center justify-center rounded-xl overflow-hidden p-3 transition-all duration-300 ${
                  partner.darkBg 
                    ? 'bg-[#0a1208]/90 dark:bg-black/40 border border-brand-green/15 shadow-inner' 
                    : 'bg-transparent border border-transparent'
                }`}>
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Partner Name Label */}
                <span className="font-heading font-extrabold text-[11px] sm:text-xs text-gray-secondary dark:text-gray-400 group-hover:text-dark dark:group-hover:text-white transition-colors mt-3 text-center px-1 truncate w-full select-none">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div id="partner-cta" className="mt-24 mb-8 text-center max-w-3xl mx-auto border-t border-gray-200 dark:border-white/10 pt-16">
          <div className="w-16 h-16 mx-auto rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-6">
            <Users size={32} strokeWidth={1.5} />
          </div>
          <h4 className="font-heading font-bold text-3xl md:text-4xl text-dark dark:text-white mb-4">
            Interested in partnering with us?
          </h4>
          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Collaborate with India's largest community-led developer conference. Provide outreach support, register your campus group, or host local satellite meetups.
          </p>
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSe50iD7K4mf6JYTSou4sRreWsWXl1wGxV4Dsz-Ga9HoU7d5fg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="w-full sm:w-auto py-4 px-8 text-[15px] font-bold rounded-full transition-all flex items-center justify-center gap-2 mx-auto shadow-md hover:shadow-lg active:scale-95"
            icon={ArrowRight}
            iconPosition="right"
          >
            Register Community
          </Button>
        </div>

      </div>
    </section>
  );
}
