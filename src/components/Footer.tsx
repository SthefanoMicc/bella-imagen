import { Scissors } from 'lucide-react';
import { ADDRESS, PHONE_DISPLAY } from '@/data/salon';

function Footer() {
  return (
    <footer className="bg-ink-900 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-300 text-ink-900">
              <Scissors size={16} strokeWidth={2} />
            </span>
            <span className="font-display text-lg font-semibold text-white">Bella Imagen</span>
          </div>

          <p className="font-body text-sm text-ink-300 text-center">
            {ADDRESS} · {PHONE_DISPLAY}
          </p>

          <p className="font-body text-xs text-ink-400">
            © {new Date().getFullYear()} Bella Imagen Peluquería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
