import { Heart, MapPin, Users } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Users,
    title: 'Lideradas por mujeres',
    description: 'Un equipo de empresarias apasionadas por el cuidado y la belleza.',
  },
  {
    icon: MapPin,
    title: 'Negocio local de Chía',
    description: 'Orgullosamente ubicadas en el corazón de Pinares, Chía.',
  },
  {
    icon: Heart,
    title: 'Atención cercana',
    description: 'Cada cliente recibe un servicio personalizado y cálido.',
  },
];

function About() {
  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-cream-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/6899544/pexels-photo-6899544.jpeg?auto=compress&cs=tinysrgb&h=900&w=1100"
                alt="Recepción acogedora de Bella Imagen Peluquería"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-lg px-6 py-4 border border-gold-200">
              <p className="font-display text-2xl font-semibold text-gold-600">+60</p>
              <p className="font-body text-xs text-ink-600">Opiniones felices</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="font-body text-sm font-semibold uppercase tracking-widest text-gold-600">
              Sobre Nosotros
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 mt-3 mb-5">
              Un negocio local destacado en Chía
            </h2>
            <p className="font-body text-base text-ink-600 leading-relaxed mb-8">
              Bella Imagen Peluquería es un negocio local destacado, liderado por mujeres
              empresarias en Chía, dedicado a realzar la belleza natural de cada persona que nos
              visita. Combinamos técnica, calidez y productos de calidad para que cada visita se
              sienta como un momento solo para ti.
            </p>

            <div className="space-y-5">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full bg-primary-200 text-ink-900">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-body text-base font-semibold text-ink-900">
                        {item.title}
                      </p>
                      <p className="font-body text-sm text-ink-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
