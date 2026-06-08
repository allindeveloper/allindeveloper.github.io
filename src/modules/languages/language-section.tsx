import { Globe, MessageCircle } from "lucide-react";
import { portfolioConfig } from "../../constants/data";
import { motion, type Variants } from "framer-motion";
import { SectionTitle } from "../../components/section/section-title";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const LanguageSection = () => {

    const getFlag = (code: string) =>
        code
            .toUpperCase()
            .replace(/./g, (char) =>
                String.fromCodePoint(127397 + char.charCodeAt(0))
            );
    return (
        <section id="language" className="mb-24">
            <SectionTitle>
                <span className="flex items-center gap-2">
                    <Globe size={28} className="text-sky-500" /> Languages
                </span>
            </SectionTitle>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/50 rounded-2xl p-6 border border-sky-100"
            >
                <div className="flex flex-wrap gap-3">
                    {portfolioConfig.languages.map((lang, i) => (
                        <motion.span
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 items-center rounded-full bg-sky-100 text-sky-700 text-sm font-medium"
                        >
                            <span className="mr-1">{getFlag(lang.code)}</span>
                            {lang.name}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};