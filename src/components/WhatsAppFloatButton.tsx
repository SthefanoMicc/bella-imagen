import { MessageCircle } from 'lucide-react';
import { WHATSAPP_FLOAT_URL } from '@/data/salon';

function WhatsAppFloatButton() {
  return (
    <a
      href={WHATSAPP_FLOAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl animate-pulse-ring hover:scale-105 transition-transform duration-200"
    >
      <MessageCircle size={28} strokeWidth={2} />
    </a>
  );
}

export default WhatsAppFloatButton;
