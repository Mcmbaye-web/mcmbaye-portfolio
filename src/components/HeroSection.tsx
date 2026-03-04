import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/mcmbaye.jpeg";

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center section-padding pt-28"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Développeur Full-Stack
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            Salut, je suis{" "}
            <span className="text-highlight">McMBAYE</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
            Développeur passionné, je conçois des expériences web modernes et intuitives. Bienvenue dans mon univers digital.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projets"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border font-medium text-sm hover:bg-secondary transition-colors"
            >
              Me contacter
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Decorative animated ring */}
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-highlight/20 via-secondary to-highlight/10 blur-sm"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            {/* Decorative dots */}
            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-highlight/10"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-highlight/15"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            {/* Image container with faded borders */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-border/40 shadow-[0_20px_60px_-15px_hsl(var(--highlight)/0.15)]">
              <img
                src={heroImage}
                alt="McMBAYE - Développeur Full-Stack"
                className="w-full h-full object-cover"
              />
              {/* Soft gradient overlay on edges */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_10px_hsl(var(--background)/0.3)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#apropos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
