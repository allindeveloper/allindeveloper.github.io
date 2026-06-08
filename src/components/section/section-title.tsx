import { motion } from "framer-motion";

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="h-8 w-1 bg-linear-to-b from-sky-400 to-sky-600 rounded-full"></div>
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight"
    >
      {children}
    </motion.h2>
  </div>
);
