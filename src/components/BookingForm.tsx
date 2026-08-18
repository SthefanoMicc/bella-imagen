import { useMemo, useState } from 'react';
import { Calendar, Check, Clock, MessageCircle, User } from 'lucide-react';
import { WHATSAPP_FLOAT_URL } from '@/data/salon';

const SERVICES = [
  'Corte & Cepillado',
  'Colorimetría / Balayage',
  'Tratamiento Capilar',
  'Manicura / Pedicura',
  'Cita de Valoración',
];

const TIME_SLOTS = [
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
  '4:45 PM',
  '5:00 PM',
  '5:30 PM',
];

const WEEKDAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

function formatDateLabel(value: string): string {
  if (!value) return '';
  const [y, m, d] = value.split('-').map(Number);
  if (!y || !m || !d) return value;
  const date = new Date(y, m - 1, d);
  const weekday = WEEKDAYS[(date.getDay() + 6) % 6];
  return `${weekday}, ${d}/${m}/${y}`;
}

function BookingForm() {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const whatsappUrl = useMemo(() => {
    if (!name.trim() || !service || !date || !time) return '';
    const message =
      `Hola Bella Imagen, deseo agendar una cita.\n` +
      `- Nombre: ${name.trim()}\n` +
      `- Servicio: ${service}\n` +
      `- Fecha: ${formatDateLabel(date)}\n` +
      `- Hora: ${time}\n` +
      `Por favor confirmen la disponibilidad.`;
    return `${WHATSAPP_FLOAT_URL}?text=${encodeURIComponent(message)}`;
  }, [name, service, date, time]);

  const isValid = Boolean(name.trim() && service && date && time);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || !whatsappUrl) return;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reserva" className="py-20 sm:py-28 bg-cream-100">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <span className="font-body text-sm font-semibold uppercase tracking-widest text-gold-600">
            Agenda
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 mt-3 mb-3">
            Reserva tu Cita
          </h2>
          <p className="font-body text-base text-ink-600 leading-relaxed max-w-xl mx-auto">
            Completa tus datos y confirma directamente por WhatsApp. Te responderemos con la
            disponibilidad lo antes posible.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white border border-primary-100 shadow-lg p-6 sm:p-9 space-y-7"
        >
          <div>
            <label
              htmlFor="booking-name"
              className="flex items-center gap-2 font-body text-sm font-semibold text-ink-900 mb-2"
            >
              <User size={16} className="text-gold-600" />
              Nombre completo
            </label>
            <input
              id="booking-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. María González"
              className="w-full rounded-xl border border-primary-200 bg-cream-50 px-4 py-3 font-body text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:border-gold-400 transition-all"
              required
            />
          </div>

          <div>
            <label
              htmlFor="booking-service"
              className="block font-body text-sm font-semibold text-ink-900 mb-2"
            >
              Servicio de interés
            </label>
            <select
              id="booking-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full rounded-xl border border-primary-200 bg-cream-50 px-4 py-3 font-body text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:border-gold-400 transition-all"
              required
            >
              <option value="" disabled>
                Selecciona un servicio
              </option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="booking-date"
              className="flex items-center gap-2 font-body text-sm font-semibold text-ink-900 mb-2"
            >
              <Calendar size={16} className="text-gold-600" />
              Selección de día
            </label>
            <input
              id="booking-date"
              type="date"
              value={date}
              min={today}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-primary-200 bg-cream-50 px-4 py-3 font-body text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:border-gold-400 transition-all"
              required
            />
            <p className="font-body text-xs text-ink-500 mt-2">
              Atendemos de lunes a sábado.
            </p>
          </div>

          <div>
            <label className="flex items-center gap-2 font-body text-sm font-semibold text-ink-900 mb-3">
              <Clock size={16} className="text-gold-600" />
              Selección de hora
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
              {TIME_SLOTS.map((slot) => {
                const selected = time === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={`flex items-center justify-center gap-1 rounded-lg px-2 py-2.5 font-body text-xs font-medium border transition-all duration-200 ${
                      selected
                        ? 'bg-gold-400 border-gold-400 text-ink-900 shadow-sm'
                        : 'bg-cream-50 border-primary-200 text-ink-700 hover:bg-primary-50 hover:border-gold-300'
                    }`}
                  >
                    {selected && <Check size={12} strokeWidth={3} />}
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-body text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 hover:bg-[#20bd5a] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all duration-200"
          >
            <MessageCircle size={20} strokeWidth={2} />
            Confirmar Cita por WhatsApp
          </button>

          {!isValid && (
            <p className="font-body text-xs text-ink-500 text-center">
              Completa todos los campos para habilitar el envío.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
