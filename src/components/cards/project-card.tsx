import { motion, useInView } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { useRef } from "react";


interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
}

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-sky-100 group"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors">{project.title}</h3>
          <div className="flex gap-2">
            <a href={project.github} className="text-slate-400 hover:text-slate-700 transition-colors">
              <GitBranch size={18} />
            </a>
            <a href={project.link} className="text-slate-400 hover:text-sky-600 transition-colors">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
        <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-mono">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
