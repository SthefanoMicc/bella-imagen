import { MessageCircle, Star } from 'lucide-react';
import { WHATSAPP_CTA_URL } from '@/data/salon';

function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7755207/pexels-photo-7755207.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1600"
          alt="Interior elegante de la peluquería"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-primary-100/70" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-gold-200 px-4 py-1.5 shadow-sm mb-6">
            <div className="flex text-gold-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="font-body text-xs sm:text-sm font-medium text-ink-700">
              4.7 · Más de 60 opiniones en Google
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-ink-900 mb-5">
            Resalta tu belleza natural en{' '}
            <span className="text-primary-600">Chía</span>
          </h1>

          <p className="font-body text-base sm:text-lg text-ink-600 leading-relaxed mb-8 max-w-xl">
            Especialistas en cuidado capilar, colorimetría, peinados y estética profesional.
          </p>

          <a
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-body text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 hover:bg-[#20bd5a] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageCircle size={20} strokeWidth={2} />
            Agendar Cita por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
