import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { LOGO_URL } from '../mock/mock';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/artists', label: 'Artists' },
  { to: '/news', label: 'News' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-black/85 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={LOGO_URL}
            alt="F.L.Y"
            className="h-9 w-9 md:h-10 md:w-10 rounded-sm object-cover bg-black"
          />
          <div className="leading-none">
            <div className="font-display font-black text-white text-lg md:text-xl tracking-tight">F.L.Y</div>
            <div className="text-[10px] md:text-[11px] text-white/50 tracking-[0.25em] uppercase">Entertainment</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative text-[13px] tracking-[0.18em] uppercase font-semibold transition-colors ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{l.label}</span>
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-[var(--fly-orange)] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-colors"
          >
            <Search size={16} />
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center h-10 px-5 rounded-full bg-white text-black text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-[var(--fly-orange)] hover:text-black transition-colors"
          >
            Partner with us
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[80vh] border-t border-white/5' : 'max-h-0'
        } bg-black/95 backdrop-blur-md`}
      >
        <nav className="px-5 py-6 flex flex-col gap-1">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `py-3 px-3 rounded-md text-base font-semibold tracking-wide ${
                  isActive
                    ? 'bg-white/5 text-white border-l-2 border-[var(--fly-orange)]'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center justify-center h-11 px-5 rounded-full bg-white text-black text-xs font-semibold tracking-[0.2em] uppercase"
          >
            Partner with us
          </Link>
        </nav>
      </div>
    </header>
  );
}
