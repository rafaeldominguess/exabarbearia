"use client";

import { motion } from "framer-motion";

const directions = {
  up: { y: 34 },
  down: { y: -34 },
  left: { x: -48 },
  right: { x: 48 },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
