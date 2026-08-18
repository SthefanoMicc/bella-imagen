import { Star } from 'lucide-react';

type Review = {
  name: string;
  badge: string;
  isLocalGuide: boolean;
  comment: string;
  initial: string;
  color: string;
};

const REVIEWS: Review[] = [
  {
    name: 'Carolina Acosta',
    badge: '2 opiniones',
    isLocalGuide: false,
    comment:
      'Es el mejor salón de Chía, excelente atención, son expertos en el cuidado y color del cabello, recomendado 100%.',
    initial: 'C',
    color: 'bg-primary-300',
  },
  {
    name: 'Franklin Camacho',
    badge: 'Local Guide · 121 opiniones',
    isLocalGuide: true,
    comment:
      'Es un salón de belleza tradicional, atendido por un par de señoras muy amables. Ideal para los que no nos gustan los sitios de extranjeros.',
    initial: 'F',
    color: 'bg-gold-400',
  },
  {
    name: 'Juan Camilo Aponte S',
    badge: 'Local Guide · 103 opiniones',
    isLocalGuide: true,
    comment: 'Magnífica atención y servicio. Servicios: Cortes de cabello, Pedicura y Manicura.',
    initial: 'J',
    color: 'bg-primary-400',
  },
  {
    name: 'Hernando Velandia',
    badge: 'Local Guide · 320 opiniones',
    isLocalGuide: true,
    comment:
      'Amable la atención, la dedicación a sus clientes y la calidad de su trabajo son muy buenas.',
    initial: 'H',
    color: 'bg-gold-500',
  },
  {
    name: 'Paola Andrea',
    badge: 'Local Guide · 20 opiniones',
    isLocalGuide: true,
    comment: 'Excelente servicio, personal atento y respetuoso. Lo recomiendo.',
    initial: 'P',
    color: 'bg-primary-500',
  },
  {
    name: 'Allieth Colmenares',
    badge: 'Local Guide · 39 opiniones',
    isLocalGuide: true,
    comment:
      'Excelente servicio, todos los protocolos de bioseguridad activados. Muy profesionales.',
    initial: 'A',
    color: 'bg-gold-400',
  },
];

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/Bella+Imagen+Peluqueria+Chia';

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex flex-col rounded-2xl bg-white border border-primary-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`flex items-center justify-center w-11 h-11 rounded-full ${review.color} text-ink-900 font-display text-lg font-semibold shrink-0`}
        >
          {review.initial}
        </span>
        <div className="min-w-0">
          <p className="font-body text-sm font-semibold text-ink-900 truncate">{review.name}</p>
          {review.isLocalGuide ? (
            <p className="flex items-center gap-1 font-body text-xs text-ink-500 truncate">
              <svg viewBox="0 0 24 24" className="w-3 h-3 shrink-0" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M3 17v-3.5h6V17H3zm9 0v-3.5h9V17h-9zM3 11.5V8h12v3.5H3zm15 0V8h3v3.5h-3z"
                />
              </svg>
              {review.badge}
            </p>
          ) : (
            <p className="font-body text-xs text-ink-500 truncate">{review.badge}</p>
          )}
        </div>
      </div>

      <div className="flex text-gold-400 mb-3" aria-label="5 de 5 estrellas">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>

      <p className="font-body text-sm text-ink-700 leading-relaxed">"{review.comment}"</p>
    </article>
  );
}

function Reviews() {
  return (
    <section id="opiniones" className="py-20 sm:py-28 bg-cream-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="font-body text-sm font-semibold uppercase tracking-widest text-gold-600">
              Testimonios
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 mt-3 mb-4">
              Opiniones de nuestros clientes en Google Maps
            </h2>
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl font-semibold text-ink-900">4.7</span>
              <div>
                <div className="flex text-gold-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="font-body text-xs text-ink-500 mt-1">Calificación en Google Maps</p>
              </div>
            </div>
          </div>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white border border-primary-200 px-5 py-3 font-body text-sm font-semibold text-ink-800 shadow-sm hover:bg-primary-50 hover:border-gold-300 hover:shadow-md transition-all duration-200 self-start sm:self-auto"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
              <path fill="#4285F4" d="M3 17v-3.5h6V17H3zm9 0v-3.5h9V17h-9zM3 11.5V8h12v3.5H3zm15 0V8h3v3.5h-3z" />
            </svg>
            Ver más en Google Maps
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
