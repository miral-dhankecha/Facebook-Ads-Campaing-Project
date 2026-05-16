import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Facebook, ArrowUpRight } from 'lucide-react';
import { LOGO_URL } from '../mock/mock';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 mt-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-16 pb-8">
        {/* Big brand row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-14 border-b border-white/5">
          <div>
            <div className="flex items-center gap-4">
              <img src={LOGO_URL} alt="F.L.Y" className="h-14 w-14 rounded-sm" />
              <div>
                <div className="font-display text-white text-3xl md:text-4xl font-black tracking-tight">F.L.Y</div>
                <div className="text-xs tracking-[0.3em] text-white/50 uppercase">Entertainment</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-white/60 text-sm leading-relaxed">
              F.L.Y Entertainment is a Seoul-based music and artist company building the next generation of global pop — one sky at a time.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 text-white text-2xl md:text-3xl font-display font-bold hover:text-[var(--fly-orange)] transition-colors"
          >
            Let&apos;s build the future of pop
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 group-hover:border-[var(--fly-orange)] group-hover:bg-[var(--fly-orange)] group-hover:text-black transition-colors">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <FooterCol
            title="Company"
            links={[
              { to: '/about', label: 'About' },
              { to: '/careers', label: 'Careers' },
              { to: '/news', label: 'Newsroom' },
              { to: '/contact', label: 'Contact' },
            ]}
          />
          <FooterCol
            title="Artists"
            links={[
              { to: '/artists', label: 'ASCEND' },
              { to: '/artists', label: 'SKYLINE' },
              { to: '/artists', label: 'NOVA' },
              { to: '/artists', label: 'Trainees' },
            ]}
          />
          <FooterCol
            title="Platforms"
            links={[
              { to: '#', label: 'F.L.Y Shop' },
              { to: '#', label: 'Fan Community' },
              { to: '#', label: 'Global Store' },
              { to: '#', label: 'Audition' },
            ]}
          />
          <div>
            <h4 className="text-white/50 text-[11px] tracking-[0.25em] uppercase mb-5">Follow</h4>
            <div className="flex flex-wrap gap-3">
              {[Instagram, Youtube, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-black hover:bg-[var(--fly-orange)] hover:border-[var(--fly-orange)] transition-colors"
                  aria-label={`social-${i}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="text-white/50 text-[11px] tracking-[0.25em] uppercase mb-3">Newsletter</h4>
              <form
                onSubmit={(e) => { e.preventDefault(); e.currentTarget.reset(); alert('Subscribed!'); }}
                className="flex items-center border border-white/15 rounded-full overflow-hidden focus-within:border-[var(--fly-orange)] transition-colors"
              >
                <input
                  type="email"
                  required
                  placeholder="you@domain.com"
                  className="bg-transparent text-sm px-4 py-2.5 text-white placeholder:text-white/40 flex-1 outline-none"
                />
                <button type="submit" className="bg-[var(--fly-orange)] text-black px-4 py-2.5 text-xs font-bold tracking-wider uppercase">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-white/40">
          <div>© {new Date().getFullYear()} F.L.Y ENTERTAINMENT. ALL RIGHTS RESERVED.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-white/50 text-[11px] tracking-[0.25em] uppercase mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((l, i) => (
          <li key={i}>
            <Link to={l.to} className="text-white/80 text-sm hover:text-[var(--fly-orange)] transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
