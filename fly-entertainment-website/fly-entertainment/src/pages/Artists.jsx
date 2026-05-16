import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Play } from 'lucide-react';
import { ARTISTS, GROUPS, VIDEOS } from '../mock/mock';
import VideoModal from '../components/VideoModal';

export default function Artists() {
  const [filter, setFilter] = useState('ALL');
  const [activeVideo, setActiveVideo] = useState(null);

  const shown = filter === 'ALL' ? ARTISTS : ARTISTS.filter((a) => a.position.toLowerCase().includes(filter.toLowerCase()));

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative pt-36 pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-10 bg-[var(--fly-orange)]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--fly-orange)] font-semibold">F.L.Y Artists</span>
          </div>
          <h1 className="font-display font-black text-white text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-0.03em]">
            Meet the <span className="text-gradient-aqua">stars.</span>
          </h1>
          <p className="mt-6 max-w-xl text-white/65">Three acts. One mission. Discover the artists redefining the sound of F.L.Y.</p>
        </div>
      </section>

      {/* GROUPS */}
      <section className="pb-8">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {GROUPS.map((g) => (
            <div key={g.id} className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-neutral-900 border border-white/5">
              <img src={g.image} alt={g.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-white/60">Members</div>
                    <div className="font-display font-black text-white text-3xl">{g.members}</div>
                  </div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-white/60">Debut {g.debut}</span>
                </div>
                <div>
                  <div className="h-[3px] w-12 mb-4" style={{ background: g.accent }} />
                  <h3 className="font-display font-black text-5xl md:text-6xl tracking-tight">{g.name}</h3>
                  <p className="mt-2 text-white/70 text-sm">{g.tagline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBERS GRID */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--fly-aqua)] mb-3">ASCEND — Members</div>
              <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight">7 members, 7 skies.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['ALL', 'Vocal', 'Rapper', 'Dancer'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 h-9 rounded-full text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors border ${
                    filter === f ? 'bg-[var(--fly-orange)] text-black border-[var(--fly-orange)]' : 'border-white/15 text-white/70 hover:text-white hover:border-white/40'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {shown.map((a) => (
              <Link to={`/artists/${a.id}`} key={a.id} className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-neutral-900 border border-white/5 hover:border-white/20 transition-colors">
                <img src={a.image} alt={a.stageName} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="h-[3px] w-10 mb-3" style={{ background: a.color }} />
                  <div className="font-display font-black text-white text-2xl leading-none tracking-tight">{a.stageName}</div>
                  <div className="text-[10px] text-white/70 tracking-[0.2em] uppercase mt-2">{a.role}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOGRAPHY */}
      <section className="py-20 bg-[var(--fly-ink)] border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-[var(--fly-purple)]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--fly-purple)] font-semibold">Discography</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight">Latest releases.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {VIDEOS.map((v) => (
              <button key={v.id} onClick={() => setActiveVideo(v)} className="group text-left relative overflow-hidden rounded-lg aspect-video bg-neutral-900 border border-white/5 hover:border-[var(--fly-orange)]/60 transition-colors">
                <img src={v.thumb} alt={v.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[var(--fly-orange)] group-hover:border-[var(--fly-orange)] group-hover:text-black transition-colors">
                    <Play size={18} fill="currentColor" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-[11px] text-[var(--fly-aqua)] tracking-[0.2em] uppercase">{v.artist}</div>
                  <div className="font-display font-bold text-white text-base mt-1 line-clamp-1">{v.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </main>
  );
}
