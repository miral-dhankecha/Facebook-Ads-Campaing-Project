import { Link } from 'react-router-dom';
import { ArrowRight, Target, Sparkles, Globe2, Award } from 'lucide-react';
import { TIMELINE, SECTION_IMAGES, STATS } from '../mock/mock';

const VALUES = [
  { icon: Sparkles, title: 'Artistry First', text: 'Every song, every stage, every frame — we obsess over craft. Music that lasts is music that means something.' },
  { icon: Globe2, title: 'Global by Design', text: 'We build for the world. Our artists speak the universal language of pop without losing their roots.' },
  { icon: Target, title: 'Fan-Powered', text: 'Fans aren\'t an audience — they\'re co-creators. We build platforms that let them shape the story.' },
  { icon: Award, title: 'Sustainable Careers', text: 'We protect artists for the long run — mental health, wellness, and creative ownership are non-negotiable.' },
];

export default function About() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-end pt-32 pb-20">
        <div className="absolute inset-0">
          <img src={SECTION_IMAGES.office} alt="F.L.Y office" className="w-full h-full object-cover animate-pan" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 w-full">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-10 bg-[var(--fly-aqua)]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--fly-aqua)] font-semibold">About F.L.Y</span>
          </div>
          <h1 className="font-display font-black text-white text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-0.03em] max-w-5xl">
            Music that <span className="text-gradient-orange">lifts</span> the world.
          </h1>
          <p className="mt-8 max-w-2xl text-white/70 text-base md:text-lg">
            F.L.Y Entertainment is a global music and artist company headquartered in Seoul. We discover, develop and empower artists whose voices can move cultures.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--fly-orange)] font-semibold mb-4">Our Mission</div>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight leading-[0.95]">We exist to<br />make music<br /><span className="text-gradient-aqua">fly.</span></h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-white/75 text-base md:text-lg leading-relaxed">
            <p>
              F.L.Y stands for <span className="text-white font-semibold">Freedom. Love. You.</span> — three ideas that drive every decision we make. We believe the future of pop is borderless, fearless, and fiercely human.
            </p>
            <p>
              Since 2018, we&apos;ve built a company where producers, choreographers, engineers, filmmakers and artists work side by side — not in silos. The result: stages, stories and songs that scale from Seoul to São Paulo.
            </p>
            <p className="text-white">
              We’re not chasing trends. We&apos;re building the next one.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-white/5 bg-[var(--fly-ink)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i}>
              <div className="font-display font-black text-white text-4xl md:text-6xl tracking-tight"><span className="text-gradient-orange">{s.value}</span></div>
              <div className="mt-2 text-[11px] tracking-[0.25em] uppercase text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-[var(--fly-orange)]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--fly-orange)] font-semibold">Our Values</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight">What we stand for.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {VALUES.map((v, i) => (
              <div key={i} className="group relative p-8 md:p-10 bg-[var(--fly-ink)] border border-white/5 rounded-lg hover:border-[var(--fly-orange)]/50 transition-colors">
                <div className="h-12 w-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-[var(--fly-orange)] group-hover:bg-[var(--fly-orange)] group-hover:text-black transition-colors">
                  <v.icon size={22} />
                </div>
                <h3 className="mt-6 font-display font-bold text-2xl text-white">{v.title}</h3>
                <p className="mt-3 text-white/65 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-32 bg-[var(--fly-ink)] border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-[var(--fly-aqua)]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--fly-aqua)] font-semibold">Our Journey</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight">From studio to stadium.</h2>

          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <div key={i} className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 ${i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                    <div className="font-display font-black text-5xl md:text-6xl text-gradient-orange">{t.year}</div>
                    <h3 className="mt-3 font-display font-bold text-xl text-white">{t.title}</h3>
                    <p className="mt-2 text-white/60">{t.text}</p>
                  </div>
                  <div className="hidden md:block" />
                  <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-[var(--fly-orange)] border-4 border-black" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight">Want to work with us?</h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">From A&R to engineering, we&apos;re hiring across every department.</p>
          <Link to="/careers" className="mt-8 inline-flex items-center gap-3 h-12 px-7 rounded-full bg-white text-black text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-[var(--fly-orange)] transition-colors">
            See open roles <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
