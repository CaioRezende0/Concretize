import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // WhatsApp number for Concretize Engenharia
  const phoneNumber = '5519982535257';
  const message = 'Olá! Gostaria de solicitar um orçamento com a Concretize Engenharia.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.a
            id="whatsapp-tooltip"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mr-3 bg-white text-slate-800 text-xs font-bold py-2.5 px-4 rounded-full shadow-lg border border-slate-100 hidden sm:flex items-center gap-2 whitespace-nowrap hover:text-[#25D366] transition-colors duration-200"
          >
            <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
            Fale Conosco no WhatsApp
          </motion.a>
        )}
      </AnimatePresence>

      <motion.a
        id="whatsapp-floating-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 1.5 
        }}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-shadow duration-300 group cursor-pointer"
      >
        {/* Pulsing Outer Rings */}
        <span className="absolute -inset-0.5 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-10 animate-pulse pointer-events-none" />

        {/* Dynamic icon inside */}
        <MessageCircle className="w-7 h-7 fill-white/10 group-hover:rotate-12 transition-transform duration-300" />
      </motion.a>
    </div>
  );
}
