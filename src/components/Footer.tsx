import { motion } from "framer-motion";

const Footer = () => (
  <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
    <p className="text-sm text-muted-foreground">
      © 2026 McMBAYE — Tous droits réservés
    </p>
    <p className="text-sm text-muted-foreground flex items-center gap-1">
      Construit avec
      <motion.span
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5 }}
        className="inline-block text-red-500"
      >
        ❤️
      </motion.span>
      passion
    </p>
  </footer>
);

export default Footer;
