import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { ARTISTS, VIDEOS, NEWS, HERO_IMAGES, GROUPS, STATS, LOGO_URL } from '../mock/mock';
import VideoModal from '../components/VideoModal';

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="bg-[var(--fly-black)] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-end">
        <div className="absolute inset-0">
          {HERO_IMAGES.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ${i === heroIdx ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={src} alt="hero" className="w-full h-full object-cover animate-pan" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30" />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 pt-36 pb-20 md:pb-24 w-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-10 bg-[var(--fly-orange)]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--fly-orange)] font-semibold">F.L.Y Entertainment · Est. 2018</span>
          </div>
          <h1 className="font-display font-black text-white leading-[0.9] text-[48px] sm:text-[72px] md:text-[110px] lg:text-[140px] tracking-[-0.04em]">
            WE <span className="text-gradient-orange">FLY</span><br />
            HIGHER.
          </h1>
          <p className="mt-8 max-w-xl text-white/75 text-base md:text-lg leading-relaxed">
            Home of <span className="text-[var(--fly-aqua)] font-semibold">ASCEND</span>, <span className="text-[var(--fly-purple)] font-semibold">SKYLINE</span> and <span className="text-[var(--fly-orange)] font-semibold">NOVA</span>. A Seoul-based music and artist company reshaping global pop.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/artists"
              className="inline-flex items-center gap-3 h-12 pl-6 pr-2 rounded-full bg-white text-black text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-[var(--fly-orange)] transition-colors"
            >
              Meet The Artists
              <span className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center">
                <ArrowRight size={16} />
              </span>
            </Link>
            <button
              onClick={() => setActiveVideo(VIDEOS[0])}
              className="inline-flex items-center gap-3 h-12 px-5 rounded-full border border-white/25 text-white text-[12px] font-bold tracking-[0.2em] uppercase hover:border-[var(--fly-aqua)] hover:text-[var(--fly-aqua)] transition-colors"
            >
              <Play size={14} fill="currentColor" />
              Watch Latest MV
            </button>
          </div>

          {/* slide dots */}
          <div className="absolute bottom-10 right-5 sm:right-8 flex gap-2">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIdx(i)}
                aria-label={`slide-${i}`}
                className={`h-[3px] transition-all duration-300 ${i === heroIdx ? 'w-10 bg-[var(--fly-orange)]' : 'w-5 bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-white/5 bg-black overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-5">
          {Array.from({ length: 2 }).flatMap((_, loop) => (
            ['ASCEND WORLD TOUR 2025', 'NEW ALBUM — ALTITUDE', 'NOVA — SUPERNOVA OUT NOW', 'GLOBAL AUDITIONS OPEN', 'SKYLINE — MOONLIGHT FILM', 'F.L.Y SEOUL CAMPUS']
              .map((t, i) => (
                <span key={`${loop}-${i}`} className="mx-8 font-display font-black text-3xl md:text-5xl tracking-tight text-white/10 hover:text-[var(--fly-orange)] transition-colors">
                  {t} <span className="text-[var(--fly-orange)]">★</span>
                </span>
              ))
          ))}
        </div>
      </section>

      {/* FEATURED ARTIST GRID */}
      <section className="relative py-20 md:py-28 bg-grid">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <SectionHead kicker="Our Artists" title="The sky is ours." to="/artists" cta="View all artists" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {GROUPS.map((g) => (
              <Link key={g.id} to="/artists" className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-neutral-900 border border-white/5">
                <img src={g.image} alt={g.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] tracking-[0.25em] uppercase text-white/70">Debut {g.debut}</span>
                    <span className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                  <div>
                    <div className="h-[3px] w-10 mb-4" style={{ background: g.accent }} />
                    <h3 className="font-display font-black text-4xl md:text-5xl tracking-tight text-white">{g.name}</h3>
                    <p className="mt-2 text-white/70 text-sm">{g.tagline}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERS STRIP */}
      <section className="py-20 md:py-24 bg-black">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--fly-aqua)] mb-3">ASCEND — 7 Members</div>
              <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight">Seven voices.<br />One sky.</h2>
            </div>
            <Link to="/artists" className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/70 hover:text-white">
              All members <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {ARTISTS.map((a) => (
              <Link to={`/artists/${a.id}`} key={a.id} className="group relative overflow-hidden rounded-md aspect-[3/4] bg-neutral-900">
                <img src={a.image} alt={a.stageName} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="h-[2px] w-6 mb-2" style={{ background: a.color }} />
                  <div className="font-display font-black text-white text-lg leading-none">{a.stageName}</div>
                  <div className="text-[10px] text-white/60 tracking-wider uppercase mt-1">{a.position}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS / MV */}
      <section className="py-20 md:py-28 bg-[var(--fly-ink)] border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <SectionHead kicker="Music Videos" title="Watch the world we built." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {VIDEOS.slice(0, 6).map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveVideo(v)}
                className="group text-left relative overflow-hidden rounded-lg aspect-video bg-neutral-900 border border-white/5 hover:border-[var(--fly-orange)]/60 transition-colors"
              >
                <img src={v.thumb} alt={v.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[var(--fly-orange)] group-hover:border-[var(--fly-orange)] group-hover:text-black transition-colors">
                    <Play size={22} fill="currentColor" />
                  </span>
                </div>
                <div className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase bg-black/60 border border-white/15 text-white px-2 py-1 rounded">
                  {v.tag}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-[11px] text-[var(--fly-aqua)] tracking-[0.2em] uppercase">{v.artist}</div>
                  <div className="font-display font-bold text-white text-lg mt-1 line-clamp-1">{v.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/36675302/pexels-photo-36675302.jpeg" alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="font-display font-black text-white text-5xl md:text-7xl tracking-tight">
                  <span className="text-gradient-orange">{s.value}</span>
                </div>
                <div className="mt-3 text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS PREVIEW */}
      <section className="py-20 md:py-28 bg-black">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <SectionHead kicker="Newsroom" title="What's happening at F.L.Y." to="/news" cta="All stories" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {NEWS.slice(0, 3).map((n) => (
              <Link to="/news" key={n.id} className="group block bg-[var(--fly-ink)] border border-white/5 rounded-lg overflow-hidden hover:border-[var(--fly-orange)]/50 transition-colors">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase bg-[var(--fly-orange)] text-black font-bold px-2 py-1 rounded">{n.category}</span>
                </div>
                <div className="p-6">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-white/50">{n.date}</div>
                  <h3 className="mt-3 font-display font-bold text-white text-lg leading-tight line-clamp-2 group-hover:text-[var(--fly-orange)] transition-colors">{n.title}</h3>
                  <p className="mt-3 text-sm text-white/60 line-clamp-2">{n.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN / CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b10] via-[#0b0b10] to-black" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <img src={LOGO_URL} alt="F.L.Y" className="h-20 w-20 mx-auto rounded-sm" />
          <h2 className="mt-8 font-display font-black text-white text-4xl md:text-7xl tracking-tight leading-[0.95]">
            Join the <span className="text-gradient-aqua">next chapter</span><br />of pop.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-white/65">
            Auditioning artists, engineers, designers, and dreamers. If you believe music can move the world — we&apos;re hiring.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/careers" className="inline-flex items-center gap-3 h-12 px-7 rounded-full bg-[var(--fly-orange)] text-black text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors">
              View Careers <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-3 h-12 px-7 rounded-full border border-white/25 text-white text-[12px] font-bold tracking-[0.2em] uppercase hover:border-[var(--fly-aqua)] hover:text-[var(--fly-aqua)] transition-colors">
              Apply to Audition
            </Link>
          </div>
        </div>
      </section>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </main>
  );
}

function SectionHead({ kicker, title, to, cta }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="h-[1px] w-8 bg-[var(--fly-orange)]" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--fly-orange)] font-semibold">{kicker}</span>
        </div>
        <h2 className="font-display font-black text-white text-4xl md:text-6xl tracking-tight leading-[0.95]">{title}</h2>
      </div>
      {to && (
        <Link to={to} className="self-start md:self-auto inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-white/70 hover:text-[var(--fly-orange)] transition-colors">
          {cta} <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}
