import { useState } from 'react';
import { NEWS } from '../mock/mock';
import { ArrowUpRight } from 'lucide-react';

const CATEGORIES = ['ALL', 'ARTIST', 'COMPANY', 'TOUR', 'MUSIC'];

export default function News() {
  const [cat, setCat] = useState('ALL');
  const items = cat === 'ALL' ? NEWS : NEWS.filter((n) => n.category === cat);
  const [featured, ...rest] = items;

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="pt-36 pb-12">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-10 bg-[var(--fly-orange)]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--fly-orange)] font-semibold">Newsroom</span>
          </div>
          <h1 className="font-display font-black text-white text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-0.03em]">Latest from F.L.Y.</h1>
        </div>
      </section>

      {/* FILTERS */}
      <section className="pb-8">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 h-10 rounded-full text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors border ${
                cat === c ? 'bg-[var(--fly-orange)] text-black border-[var(--fly-orange)]' : 'border-white/15 text-white/70 hover:text-white hover:border-white/40'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="pb-16">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <a href="#" className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
                <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase bg-[var(--fly-orange)] text-black font-bold px-3 py-1.5 rounded">{featured.category}</span>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.25em] uppercase text-white/50">{featured.date}</div>
                <h2 className="mt-4 font-display font-black text-3xl md:text-5xl tracking-tight leading-[1.05] text-white group-hover:text-[var(--fly-orange)] transition-colors">{featured.title}</h2>
                <p className="mt-5 text-white/65 text-lg">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-white/80 group-hover:text-[var(--fly-orange)] transition-colors">
                  Read story <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* LIST */}
      <section className="pb-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((n) => (
            <a key={n.id} href="#" className="group block bg-[var(--fly-ink)] border border-white/5 rounded-lg overflow-hidden hover:border-[var(--fly-orange)]/50 transition-colors">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase bg-black/70 border border-white/15 text-white px-2 py-1 rounded">{n.category}</span>
              </div>
              <div className="p-6">
                <div className="text-[11px] tracking-[0.2em] uppercase text-white/50">{n.date}</div>
                <h3 className="mt-3 font-display font-bold text-white text-lg leading-tight line-clamp-2 group-hover:text-[var(--fly-orange)] transition-colors">{n.title}</h3>
                <p className="mt-3 text-sm text-white/60 line-clamp-2">{n.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
