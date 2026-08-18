import { useEffect, useState } from 'react';
import { Menu, Scissors, X } from 'lucide-react';
import { WHATSAPP_CTA_URL } from '@/data/salon';

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Tendencias', href: '#tendencias' },
  { label: 'Reservar', href: '#reserva' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Ubicación', href: '#ubicacion' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/40 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#top" className="flex items-center gap-2 shrink-0">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-300 text-ink-900">
              <Scissors size={18} strokeWidth={2} />
            </span>
            <span className="font-display text-xl sm:text-2xl font-semibold text-ink-900 tracking-tight">
              Bella Imagen
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-ink-700 hover:text-gold-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gold-400 px-5 py-2.5 font-body text-sm font-semibold text-ink-900 shadow-sm hover:bg-gold-500 hover:shadow-md transition-all duration-200"
            >
              Agendar Cita
            </a>
          </div>

          <button
            type="button"
            aria-label="Abrir menú"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-ink-800 hover:bg-primary-100 transition-colors"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-sm border-t border-primary-100 shadow-lg">
          <div className="flex flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-base font-medium text-ink-700 py-2.5 hover:text-gold-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gold-400 px-5 py-3 font-body text-sm font-semibold text-ink-900 shadow-sm hover:bg-gold-500 transition-colors"
            >
              Agendar Cita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
