import { useState } from 'react';
import { CAREERS } from '../mock/mock';
import { Search, MapPin, Briefcase, ArrowRight } from 'lucide-react';

export default function Careers() {
  const [q, setQ] = useState('');
  const [dept, setDept] = useState('ALL');

  const depts = ['ALL', ...Array.from(new Set(CAREERS.map((c) => c.dept)))];
  const list = CAREERS.filter((c) => {
    const matchDept = dept === 'ALL' || c.dept === dept;
    const matchQ = !q || c.title.toLowerCase().includes(q.toLowerCase()) || c.location.toLowerCase().includes(q.toLowerCase());
    return matchDept && matchQ;
  });

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-10 bg-[var(--fly-aqua)]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--fly-aqua)] font-semibold">Careers at F.L.Y</span>
          </div>
          <h1 className="font-display font-black text-white text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-0.03em] max-w-6xl">
            Build the future of <span className="text-gradient-orange">pop</span> with us.
          </h1>
          <p className="mt-8 max-w-xl text-white/65">We&apos;re hiring across music, tech, design and business. Every role shapes the next song the world sings along to.</p>
        </div>
      </section>

      {/* SEARCH */}
      <section className="pb-8">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 flex flex-col lg:flex-row gap-4">
          <div className="flex-1 flex items-center gap-3 px-5 h-14 rounded-full border border-white/10 bg-[var(--fly-ink)] focus-within:border-[var(--fly-orange)] transition-colors">
            <Search size={16} className="text-white/50" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search roles or cities..."
              className="bg-transparent outline-none text-white placeholder:text-white/40 w-full"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {depts.map((d) => (
              <button
                key={d}
                onClick={() => setDept(d)}
                className={`px-4 h-12 rounded-full text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors border ${
                  dept === d ? 'bg-white text-black border-white' : 'border-white/15 text-white/70 hover:text-white hover:border-white/40'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="pb-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="border-t border-white/5">
            {list.map((c) => (
              <a key={c.id} href="#" className="group block border-b border-white/5 py-6 md:py-7 px-2 hover:bg-white/[0.02] transition-colors">
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                  <div className="md:w-32 text-[10px] tracking-[0.25em] uppercase text-[var(--fly-orange)] font-semibold">{c.dept}</div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-[var(--fly-orange)] transition-colors">{c.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-white/55">
                      <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> {c.location}</span>
                      <span className="inline-flex items-center gap-1.5"><Briefcase size={12} /> {c.type}</span>
                    </div>
                  </div>
                  <span className="h-11 w-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 group-hover:bg-[var(--fly-orange)] group-hover:text-black group-hover:border-[var(--fly-orange)] transition-colors self-start md:self-auto">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            ))}
            {list.length === 0 && (
              <div className="py-16 text-center text-white/50">No roles match your search. Try another keyword.</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
