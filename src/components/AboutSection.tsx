import { motion } from "framer-motion";
import { Code, Lightbulb, Rocket } from "lucide-react";

const cards = [
  {
    icon: Code,
    title: "Développement",
    desc: "Je code avec passion en utilisant les technologies web modernes comme React, Node.js et TypeScript.",
  },
  {
    icon: Lightbulb,
    title: "Apprentissage",
    desc: "En tant que débutant motivé, j'apprends chaque jour et je repousse constamment mes limites.",
  },
  {
    icon: Rocket,
    title: "Ambition",
    desc: "Mon objectif est de créer des solutions digitales qui ont un impact réel et positif.",
  },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="section-padding section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-highlight mb-2">À propos</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Qui suis-je ?
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed mb-12">
            Je suis McMBAYE, un développeur Full-Stack débutant passionné par la création d'applications web. 
            Curieux et autodidacte, je suis en constante évolution pour maîtriser les technologies modernes 
            et livrer des projets de qualité. En dehors du code, je m'intéresse au design, à la technologie 
            et à tout ce qui touche à l'innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-shadow"
            >
              <card.icon className="text-highlight mb-4" size={28} />
              <h3 className="font-heading font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
