import { motion } from "framer-motion";
import heroImage from "@/assets/mcmbaye.jpeg";

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center section-padding pt-28"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text + Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-highlight/30 bg-highlight/5 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-highlight">
              Disponible pour nouveaux projets
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            Développeur{" "}
            <span className="text-highlight">Full-Stack</span>
            <br />
            & Passionné.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
            Développeur passionné, je conçois des expériences web modernes et intuitives. Bienvenue dans mon univers digital.
          </p>

          {/* Terminal / Code block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-xl border border-border bg-card overflow-hidden shadow-sm max-w-lg"
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/50">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-muted-foreground font-mono">
                ~/mcmbaye/profile
              </span>
            </div>
            {/* Code content */}
            <div className="p-5 font-mono text-sm leading-relaxed">
              <p>
                <span className="text-highlight">const</span>{" "}
                <span className="text-foreground font-semibold">user</span>{" "}
                <span className="text-muted-foreground">=</span> {"{"}
              </p>
              <p className="pl-6">
                <span className="text-muted-foreground">name:</span>{" "}
                <span className="text-green-600 dark:text-green-400">"McMBAYE"</span>,
              </p>
              <p className="pl-6">
                <span className="text-muted-foreground">role:</span>{" "}
                <span className="text-green-600 dark:text-green-400">"Développeur Full-Stack"</span>,
              </p>
              <p className="pl-6">
                <span className="text-muted-foreground">stack:</span>{" "}
                <span className="text-foreground">["React", "Node.js", "TypeScript"]</span>,
              </p>
              <p className="pl-6">
                <span className="text-muted-foreground">location:</span>{" "}
                <span className="text-green-600 dark:text-green-400">"Sénégal"</span>
              </p>
              <p>{"}"};</p>
              <p className="mt-2">
                <span className="text-muted-foreground animate-pulse">_</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Photo card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-80 md:w-[420px]">
            {/* Image with rounded corners */}
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_hsl(var(--highlight)/0.15)]">
              <img
                src={heroImage}
                alt="McMBAYE - Développeur Full-Stack"
                className="w-full h-[400px] md:h-[500px] object-cover object-top"
              />
              {/* Gradient overlay at top */}
              <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-transparent to-transparent rounded-2xl" />
            </div>

            {/* Name overlay card */}
            <div className="absolute top-4 left-4 right-4">
              <h3 className="text-lg font-heading font-bold text-white">
                McMBAYE
              </h3>
              <p className="text-sm text-white/80">
                Développeur Full-Stack
              </p>
              <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white/90">Disponible pour nouveaux projets</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
