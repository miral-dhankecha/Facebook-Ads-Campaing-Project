import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Play, Instagram, Music2 } from 'lucide-react';
import { ARTISTS, VIDEOS } from '../mock/mock';
import VideoModal from '../components/VideoModal';

export default function ArtistDetail() {
  const { id } = useParams();
  const artist = ARTISTS.find((a) => a.id === id);
  const [activeVideo, setActiveVideo] = useState(null);

  if (!artist) return <Navigate to="/artists" replace />;

  const idx = ARTISTS.findIndex((a) => a.id === id);
  const prev = ARTISTS[(idx - 1 + ARTISTS.length) % ARTISTS.length];
  const next = ARTISTS[(idx + 1) % ARTISTS.length];
  const mvs = VIDEOS.slice(0, 3);

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end pt-28">
        <div className="absolute inset-0">
          <img src={artist.image} alt={artist.stageName} className="w-full h-full object-cover animate-pan" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 pb-16 w-full">
          <Link to="/artists" className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-white/70 hover:text-white mb-8">
            <ArrowLeft size={14} /> All Artists
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[3px] w-12" style={{ background: artist.color }} />
            <span className="text-[11px] tracking-[0.3em] uppercase font-semibold" style={{ color: artist.color }}>ASCEND</span>
          </div>
          <h1 className="font-display font-black text-white leading-[0.85] tracking-[-0.04em] text-[72px] sm:text-[120px] md:text-[180px] lg:text-[220px]">
            {artist.stageName}
          </h1>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            <span>{artist.realName}</span>
            <span>•</span>
            <span>{artist.role}</span>
            <span>•</span>
            <span>{artist.birth}</span>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1 space-y-5">
            <Info label="Position" value={artist.position} />
            <Info label="Birth" value={artist.birth} />
            <Info label="MBTI" value={artist.mbti} />
            <Info label="Signature color">
              <span className="inline-flex items-center gap-3">
                <span className="h-4 w-4 rounded-full" style={{ background: artist.color }} />
                <span className="text-white font-semibold">{artist.color}</span>
              </span>
            </Info>
            <div className="pt-4 flex gap-2">
              <a href="#" className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-black hover:bg-[var(--fly-orange)] hover:border-[var(--fly-orange)] transition-colors"><Instagram size={15} /></a>
              <a href="#" className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-black hover:bg-[var(--fly-orange)] hover:border-[var(--fly-orange)] transition-colors"><Music2 size={15} /></a>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--fly-orange)] mb-3">About</div>
            <p className="font-display font-bold text-white text-2xl md:text-3xl leading-snug">{artist.bio}</p>
            <div className="mt-10">
              <div className="text-[11px] tracking-[0.3em] uppercase text-white/50 mb-4">Signature Tracks</div>
              <div className="flex flex-wrap gap-2">
                {artist.songs.map((s) => (
                  <span key={s} className="px-4 h-9 flex items-center rounded-full border border-white/15 text-sm text-white/80 hover:border-white/40 transition-colors">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVs */}
      <section className="py-20 bg-[var(--fly-ink)] border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight">Watch {artist.stageName} on stage.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {mvs.map((v) => (
              <button key={v.id} onClick={() => setActiveVideo(v)} className="group text-left relative overflow-hidden rounded-lg aspect-video bg-neutral-900 border border-white/5 hover:border-[var(--fly-orange)]/60 transition-colors">
                <img src={v.thumb} alt={v.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[var(--fly-orange)] group-hover:border-[var(--fly-orange)] group-hover:text-black transition-colors">
                    <Play size={18} fill="currentColor" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="font-display font-bold text-white text-base line-clamp-1">{v.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PREV/NEXT */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid grid-cols-2 gap-4">
          <Link to={`/artists/${prev.id}`} className="group p-6 md:p-8 rounded-lg border border-white/5 hover:border-white/20 bg-[var(--fly-ink)] transition-colors">
            <div className="text-[10px] tracking-[0.25em] uppercase text-white/40">Previous</div>
            <div className="mt-2 font-display font-black text-2xl md:text-4xl text-white group-hover:text-[var(--fly-orange)] transition-colors">{prev.stageName}</div>
          </Link>
          <Link to={`/artists/${next.id}`} className="group p-6 md:p-8 rounded-lg border border-white/5 hover:border-white/20 bg-[var(--fly-ink)] transition-colors text-right">
            <div className="text-[10px] tracking-[0.25em] uppercase text-white/40">Next</div>
            <div className="mt-2 font-display font-black text-2xl md:text-4xl text-white group-hover:text-[var(--fly-orange)] transition-colors">{next.stageName}</div>
          </Link>
        </div>
      </section>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </main>
  );
}

function Info({ label, value, children }) {
  return (
    <div className="pb-4 border-b border-white/5">
      <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">{label}</div>
      <div className="mt-1 text-white font-semibold">{value || children}</div>
    </div>
  );
}
