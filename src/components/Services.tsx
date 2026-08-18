import { Droplets, Hand, Palette, Scissors } from 'lucide-react';

const SERVICES = [
  {
    icon: Palette,
    title: 'Colorimetría y Balayage',
    description:
      'Técnicas de color a medida, mechas y balayage con productos de alta gama para un resultado natural y luminoso.',
  },
  {
    icon: Scissors,
    title: 'Corte y Peinado Profesional',
    description:
      'Cortes personalizados y peinados para toda ocasión, adaptados a la forma de tu rostro y tu estilo de vida.',
  },
  {
    icon: Droplets,
    title: 'Tratamientos Capilares e Hidratación',
    description:
      'Rituales de nutrición profunda, keratina y reparación para devolverle brillo y salud a tu cabello.',
  },
  {
    icon: Hand,
    title: 'Manicura y Pedicura Spa',
    description:
      'Cuidado integral de manos y pies en un ambiente relajante, con acabados impecables y duraderos.',
  },
];

function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mx-auto text-center mb-14">
          <span className="font-body text-sm font-semibold uppercase tracking-widest text-gold-600">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 mt-3">
            Todo lo que necesitas para lucir radiante
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-primary-100 bg-cream-50 p-7 hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-300 text-ink-900 mb-6 group-hover:bg-gold-400 transition-colors duration-300">
                  <Icon size={26} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-900 mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-ink-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
