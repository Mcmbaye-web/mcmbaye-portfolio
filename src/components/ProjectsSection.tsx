import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description: "Mon site portfolio développé avec React et Tailwind CSS pour présenter mes projets et compétences.",
    tags: ["React", "Tailwind", "TypeScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Application de Tâches",
    description: "Une application de gestion de tâches avec fonctionnalités CRUD et stockage local.",
    tags: ["React", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Landing Page E-commerce",
    description: "Une page d'accueil responsive pour un site e-commerce fictif avec design moderne.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "API REST Blog",
    description: "Un backend d'API REST pour un blog avec Node.js, Express et MongoDB.",
    tags: ["Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
];

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("Tous");

  const filtered =
    filter === "Tous"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projets" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-highlight mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            Mes Projets
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["Tous", ...allTags].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:bg-accent"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group rounded-xl overflow-hidden border border-border bg-background hover:shadow-xl transition-shadow"
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                          <Github size={18} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
