import { useCallback, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Trend = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const TRENDS: Trend[] = [
  {
    title: 'Bob Texturizado',
    description:
      'Elegante y fácil de peinar, ideal para el clima fresco y aportar volumen natural.',
    image:
      'https://images.pexels.com/photos/5301009/pexels-photo-5301009.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    alt: 'Mujer con corte bob texturizado moderno',
  },
  {
    title: 'Capas Largas & Curtain Bangs',
    description:
      'Aporta movimiento y enmarca el rostro con versatilidad para el día a día.',
    image:
      'https://images.pexels.com/photos/2246289/pexels-photo-2246289.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    alt: 'Mujer con capas largas y flequillo cortina',
  },
  {
    title: 'Clavicut Sofisticado',
    description:
      'El equilibrio perfecto entre versatilidad y sofisticación para un look profesional.',
    image:
      'https://images.pexels.com/photos/10483489/pexels-photo-10483489.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    alt: 'Mujer con corte a la altura de la clavícula',
  },
  {
    title: 'Pixie Moderno',
    description:
      'Arriesgado, fresco y con mucha personalidad para resaltar tus facciones.',
    image:
      'https://images.pexels.com/photos/7826204/pexels-photo-7826204.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    alt: 'Mujer con corte pixie moderno',
  },
  {
    title: 'Shaggy Chic',
    description: 'Capas desfiladas con estilo desenfadado y textura juvenil.',
    image:
      'https://images.pexels.com/photos/37987757/pexels-photo-37987757.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    alt: 'Mujer con corte shaggy medio y capas desfiladas',
  },
];

function TrendsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(TRENDS.length - 1, index));
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.children[clamped] as HTMLElement | undefined;
    if (card) {
      scroller.scrollTo({ left: card.offsetLeft - scroller.offsetLeft, behavior: 'smooth' });
    }
    setActiveIndex(clamped);
  }, []);

  const scrollByCard = useCallback(
    (direction: 1 | -1) => {
      scrollToIndex(activeIndex + direction);
    },
    [activeIndex, scrollToIndex],
  );

  const onScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const cards = Array.from(scroller.children) as HTMLElement[];
    const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft - scroller.offsetLeft + card.clientWidth / 2;
      const dist = Math.abs(cardCenter - scrollerCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  };

  return (
    <section id="tendencias" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="font-body text-sm font-semibold uppercase tracking-widest text-gold-600">
              Inspiración
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 mt-3">
              Estilos que Inspiran
            </h2>
            <p className="font-body text-base text-ink-600 mt-3 leading-relaxed">
              Tendencias en cortes pensadas para la mujer chiana y bogotana.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => scrollByCard(-1)}
              disabled={activeIndex === 0}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-primary-200 bg-white text-ink-800 shadow-sm hover:bg-primary-50 hover:border-gold-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => scrollByCard(1)}
              disabled={activeIndex === TRENDS.length - 1}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-primary-200 bg-white text-ink-800 shadow-sm hover:bg-primary-50 hover:border-gold-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-5 sm:px-8 pb-2 max-w-6xl mx-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {TRENDS.map((trend) => (
          <article
            key={trend.title}
            className="snap-center shrink-0 w-[78vw] sm:w-[340px] lg:w-[300px] rounded-2xl overflow-hidden bg-cream-50 border border-primary-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-[360px] sm:h-[380px] overflow-hidden">
              <img
                src={trend.image}
                alt={trend.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
              <h3 className="absolute bottom-4 left-5 right-5 font-display text-xl font-semibold text-white drop-shadow">
                {trend.title}
              </h3>
            </div>
            <p className="font-body text-sm text-ink-600 leading-relaxed p-5">{trend.description}</p>
          </article>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-6 flex justify-center gap-2">
        {TRENDS.map((trend, i) => (
          <button
            key={trend.title}
            type="button"
            aria-label={`Ir a ${trend.title}`}
            onClick={() => scrollToIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'w-8 bg-gold-400' : 'w-2 bg-primary-200 hover:bg-primary-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default TrendsCarousel;
