import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { ADDRESS, MAP_EMBED_URL, PHONE_DISPLAY, WHATSAPP_CTA_URL } from '@/data/salon';

function LocationContact() {
  return (
    <section id="ubicacion" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mx-auto text-center mb-14">
          <span className="font-body text-sm font-semibold uppercase tracking-widest text-gold-600">
            Visítanos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 mt-3">
            Ubicación, horarios y contacto
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-start gap-4 rounded-2xl bg-cream-50 border border-primary-100 p-6">
              <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full bg-primary-300 text-ink-900">
                <MapPin size={20} strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-body text-base font-semibold text-ink-900 mb-1">Dirección</p>
                <p className="font-body text-sm text-ink-600 leading-relaxed">{ADDRESS}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-cream-50 border border-primary-100 p-6">
              <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full bg-primary-300 text-ink-900">
                <Clock size={20} strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-body text-base font-semibold text-ink-900 mb-1">Horarios</p>
                <p className="font-body text-sm text-ink-600 leading-relaxed">
                  Lunes a Sábado, abierto hasta las 7:00 p. m.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-cream-50 border border-primary-100 p-6">
              <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full bg-primary-300 text-ink-900">
                <Phone size={20} strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-body text-base font-semibold text-ink-900 mb-1">Teléfono</p>
                <p className="font-body text-sm text-ink-600 leading-relaxed">{PHONE_DISPLAY}</p>
              </div>
            </div>

            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-body text-sm font-semibold text-white shadow-md hover:bg-[#20bd5a] hover:shadow-lg transition-all duration-200"
            >
              <MessageCircle size={18} strokeWidth={2} />
              Escríbenos por WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg border border-primary-100 min-h-[360px]">
            <iframe
              title="Ubicación de Bella Imagen Peluquería en Chía"
              src={MAP_EMBED_URL}
              className="w-full h-full min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationContact;
