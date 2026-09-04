import { motion } from "framer-motion";

/**
 * Small wrapper that fades + slides children into view as the user
 * scrolls. Keeps animation config consistent across the whole site.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as = "div",
}) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
