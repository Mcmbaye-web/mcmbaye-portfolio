import { motion } from "framer-motion";

type Skill = {
  name: string;
  level: number; // 0-100
  category: string;
};

const skills: Skill[] = [
  { name: "HTML / CSS", level: 80, category: "Frontend" },
  { name: "JavaScript", level: 70, category: "Frontend" },
  { name: "React", level: 60, category: "Frontend" },
  { name: "TypeScript", level: 50, category: "Frontend" },
  { name: "Tailwind CSS", level: 65, category: "Frontend" },
  { name: "Node.js", level: 55, category: "Backend" },
  { name: "Express", level: 50, category: "Backend" },
  { name: "MongoDB", level: 45, category: "Backend" },
  { name: "SQL", level: 40, category: "Backend" },
  { name: "Git / GitHub", level: 65, category: "Outils" },
  { name: "Figma", level: 50, category: "Outils" },
  { name: "VS Code", level: 80, category: "Outils" },
];

const categories = Array.from(new Set(skills.map((s) => s.category)));

const SkillsSection = () => {
  return (
    <section id="competences" className="section-padding section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-highlight mb-2">Compétences</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Mon Stack Technique
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
            >
              <h3 className="font-heading font-semibold text-lg mb-6">{cat}</h3>
              <div className="space-y-5">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-highlight"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
