"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <motion.button
      type="button"
      aria-label="WhatsApp da EXA Barbearia"
      title="WhatsApp"
      initial={{ opacity: 0, scale: 0.7, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] z-40 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] outline-none ring-4 ring-[#25D366]/20"
    >
      <motion.span
        aria-hidden="true"
        animate={{ scale: [1, 1.16, 1], opacity: [0.55, 0, 0.55] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        className="absolute inset-0 rounded-full border-2 border-[#25D366]"
      />
      <FaWhatsapp aria-hidden="true" />
    </motion.button>
  );
}
