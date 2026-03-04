import { motion } from "framer-motion";
import { MessageCircle, Instagram, Music } from "lucide-react";

const socials = [
  { icon: MessageCircle, href: "https://wa.me/", label: "WhatsApp", color: "hover:text-green-500" },
  { icon: Instagram, href: "https://instagram.com/mcmbaye7", label: "Instagram", color: "hover:text-pink-500" },
  { icon: Music, href: "https://youtube.com", label: "YouTube", color: "hover:text-red-500" },
];

const SocialSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3"
    >
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className={`p-2.5 rounded-xl bg-card border border-border text-muted-foreground ${s.color} transition-colors shadow-sm`}
        >
          <s.icon size={18} />
        </a>
      ))}
    </motion.div>
  );
};

export default SocialSidebar;
