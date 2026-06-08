import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { useRef } from "react";

interface Company {
  name: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  location: string;
}

export const CompanyCard = ({ company, index }: { company: Company; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -12px rgba(0,0,0,0.1)" }}
      className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-sky-100"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
        <div>
          <h3 className="text-xl font-bold text-slate-800">{company.name}</h3>
          <p className="text-sky-600 font-semibold">{company.role}</p>
          <div className="flex items-center gap-2 mt-1 text-sm text-slate-500">
            <MapPin size={14} /> {company.location}
          </div>
        </div>
        <span className="text-sm text-slate-500 bg-sky-50 px-3 py-1 rounded-full">{company.period}</span>
      </div>
      <p className="text-slate-600 mb-4 leading-relaxed">{company.description}</p>
      <div className="flex flex-wrap gap-2">
        {company.technologies.map((tech: string) => (
          <span key={tech} className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full font-medium">{tech}</span>
        ))}
      </div>
    </motion.div>
  );
};