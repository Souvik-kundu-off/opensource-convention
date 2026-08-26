import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, X, ExternalLink } from 'lucide-react';
import { departmentTeams } from '../data/team';
import { CoverflowCarousel } from "../components/ui/coverflow-carousel.tsx";

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeDeptIndex, setActiveDeptIndex] = useState(0);

  const departmentEntries = Object.entries(departmentTeams);

  // Close modal on Escape key
  useEffect(() => {
    if (!selectedMember) return;
    const onKey = (e) => { if (e.key === 'Escape') setSelectedMember(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedMember]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedMember ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedMember]);

  const departmentSlides = departmentEntries.map(([key, team]) => ({
    src: team.members[0]?.photo ?? '',
    alt: `${team.title} team`,
    title: team.title,
    subtitle: team.description,
  }));

  const [activeKey, activeTeam] = departmentEntries[activeDeptIndex] || departmentEntries[0];
  const activeLabelNumber = String(activeDeptIndex + 1).padStart(2, '0');

  return (
    <div className="relative bg-gradient-to-b from-[#0a1208] via-[#080d07] to-black min-h-screen text-white pt-24 pb-20 overflow-hidden">

      {/* Tech Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(86, 214, 75, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(86, 214, 75, 0.1) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* Decorative ambient glowing blur spots */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-container mx-auto px-6 xl:px-8 relative z-10">

        {/* Navigation & Header */}
        <div className="flex flex-col items-center text-center space-y-6 mb-8">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs font-mono text-brand-green border border-brand-green/20 bg-brand-green/5 hover:bg-brand-green/15 px-4 py-2 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(86,214,75,0.05)] hover:shadow-[0_0_25px_rgba(86,214,75,0.15)]"
          >
            <ArrowLeft size={14} />
            <span>RETURN_TO_HQ</span>
          </a>

          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-green/30 bg-brand-green/5 text-[11px] font-mono text-green-300 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              DEPARTMENTS // DIRECTORY
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              Meet the <span className="text-brand-green font-black uppercase">Force</span> behind OpenSourceCon
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Click on any department card in the carousel to inspect its specialized squad and team members.
            </p>
          </div>

          {/* Department Coverflow Carousel */}
          <div className="w-full max-w-4xl mx-auto">
            <CoverflowCarousel
              slides={departmentSlides}
              showCaption
              showNavigation
              showPagination
              onSelect={(index) => setActiveDeptIndex(index)}
              onCardClick={(index) => setActiveDeptIndex(index)}
              className="my-4"
            />
          </div>
        </div>

        {/* Active Department Details Card */}
        <div className="max-w-4xl mx-auto mt-4 mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white/[0.015] backdrop-blur-md border border-white/10 p-6 sm:p-8 hover:border-white/15 hover:bg-white/[0.025] transition-all duration-500 shadow-2xl"
              style={{ borderTop: `2px solid ${activeTeam.color}60` }}
            >
              {/* Tactical corner coordinate marks */}
              <div className="absolute top-3 left-3 font-mono text-[9px] text-white/20 select-none">+</div>
              <div className="absolute top-3 right-3 font-mono text-[9px] text-white/20 select-none">+</div>
              <div className="absolute bottom-3 left-3 font-mono text-[9px] text-white/20 select-none">+</div>
              <div className="absolute bottom-3 right-3 font-mono text-[9px] text-white/20 select-none">+</div>

              {/* Team Info Panel */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="font-mono text-[11px] text-white/50 uppercase tracking-widest block font-bold">
                    DEPT // {activeLabelNumber} &bull; ACTIVE UNIT
                  </span>
                  <span
                    className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider"
                    style={{
                      backgroundColor: `${activeTeam.color}15`,
                      color: activeTeam.color,
                      border: `1px solid ${activeTeam.color}35`
                    }}
                  >
                    ONLINE
                  </span>
                </div>
                <div className="space-y-2">
                  <h3
                    className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight transition-colors duration-300"
                    style={{ color: activeTeam.color }}
                  >
                    {activeTeam.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
                    {activeTeam.description}
                  </p>
                </div>
              </div>

              {/* Members grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 relative z-10">
                {activeTeam.members.map((member, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300 group/member cursor-pointer"
                    onClick={() => setSelectedMember({ ...member, teamTitle: activeTeam.title, teamColor: activeTeam.color })}
                  >
                    {/* Avatar */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover/member:border-white/40 transition-all duration-300 bg-black/40 mb-3 shadow-inner relative">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale-[15%] group-hover/member:grayscale-0 group-hover/member:scale-110 transition-all duration-500"
                      />
                      {/* Zoom hint */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/member:bg-black/40 transition-all duration-300">
                        <span className="text-white text-xl opacity-0 group-hover/member:opacity-100 transition-opacity duration-300 font-bold">⊕</span>
                      </div>
                    </div>

                    {/* Name & role */}
                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                        {member.name}
                      </h4>
                      <p className="text-xs font-medium text-gray-400 leading-normal">
                        {member.role}
                      </p>
                    </div>

                    {/* LinkedIn */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 text-white/40 hover:text-brand-green transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom colour glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1.5 transition-all duration-500 opacity-40 group-hover:opacity-80"
                style={{ backgroundColor: activeTeam.color, boxShadow: `0 0 24px 6px ${activeTeam.color}` }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Photo Modal Lightbox ── */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedMember(null)}
            />

            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.82, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 20 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
            >
              <div
                className="pointer-events-auto relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0d130b]"
                style={{
                  boxShadow: `0 0 0 1px ${selectedMember.teamColor}20, 0 40px 80px rgba(0,0,0,0.8), 0 0 60px ${selectedMember.teamColor}10`
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                  aria-label="Close"
                >
                  <X size={15} />
                </button>

                {/* Photo */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    initial={{ scale: 1.12 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d130b] via-[#0d130b]/10 to-transparent" />

                  {/* Team tag inside photo */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-md backdrop-blur-sm"
                      style={{
                        backgroundColor: `${selectedMember.teamColor}18`,
                        color: selectedMember.teamColor,
                        border: `1px solid ${selectedMember.teamColor}35`,
                      }}
                    >
                      {selectedMember.teamTitle.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-7 pt-3 pb-7">
                  <div
                    className="w-10 h-[3px] rounded-full mb-4"
                    style={{ backgroundColor: selectedMember.teamColor }}
                  />
                  <h2 className="font-heading font-extrabold text-2xl text-white tracking-tight leading-tight">
                    {selectedMember.name}
                  </h2>
                  <p className="text-sm text-gray-400 mt-1 mb-5">{selectedMember.role}</p>

                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105"
                      style={{
                        backgroundColor: `${selectedMember.teamColor}15`,
                        color: selectedMember.teamColor,
                        border: `1px solid ${selectedMember.teamColor}30`,
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      View LinkedIn
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
