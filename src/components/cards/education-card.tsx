import { motion, useInView } from "framer-motion";
import { Calendar, GraduationCap, MapPin, Star } from "lucide-react";
import { useRef } from "react";

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
  location: string;
}


export const EducationCard = ({ education, index }: { education: Education; index: number }) => {
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
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap size={20} className="text-sky-500" />
            <h3 className="text-xl font-bold text-slate-800">{education.degree}</h3>
          </div>
          <p className="text-sky-600 font-semibold">{education.institution}</p>
          <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {education.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {education.location}
            </span>
          </div>
        </div>
      </div>
      <p className="text-slate-600 mb-3 leading-relaxed">{education.description}</p>
      <div className="flex flex-wrap gap-2">
        {education.achievements.map((achievement: string) => (
          <span key={achievement} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full font-medium flex items-center gap-1">
            <Star size={12} /> {achievement}
          </span>
        ))}
      </div>
    </motion.div>
  );
};