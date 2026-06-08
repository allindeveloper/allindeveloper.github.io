import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
}

export const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInViewport = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInViewport) setIsInView(true);
  }, [isInViewport]);
  
  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="mb-5"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="flex items-center gap-2 text-slate-700 font-medium">
          <Icon size={20} className="text-sky-600" /> {skill.name}
        </span>
        <span className="text-sm text-sky-600 font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-sky-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-sky-400 to-sky-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
};
