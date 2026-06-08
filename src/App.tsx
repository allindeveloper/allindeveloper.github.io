import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence, type Variants } from 'framer-motion';
import {
  GitBranch,
  Mail,
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
  Menu,
  X,
  Zap,
  Phone,
} from 'lucide-react';
import { LinkedinIcon } from './components/icons/linkedin-icon';
import { EducationCard } from './components/cards/education-card';
import { ProjectCard } from './components/cards/project-card';
import { CompanyCard } from './components/cards/company-card';
import { SkillBar } from './modules/skills/skill-bar';
import { SectionTitle } from './components/section/section-title';
import { portfolioConfig } from './constants/data';
import { LanguageSection } from './modules/languages/language-section';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-slate-600 hover:text-sky-600 font-medium transition-colors duration-200">
    {children}
  </a>
);

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div
      style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)" }}
      className="bg-linear-to-br from-sky-50 via-white to-blue-50 min-h-screen">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-sky-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-linear-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center">
              <Sparkles size={18} className="text-white" />
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight">{portfolioConfig.name.split(' ')[0]}</span>
          </motion.div>

          <div className="hidden md:flex gap-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-t border-sky-100"
            >
              <div className="flex flex-col gap-4 px-6 py-5">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-sky-600 font-medium">Home</a>
                <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-sky-600 font-medium">Skills</a>
                <a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-sky-600 font-medium">Education</a>
                <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-sky-600 font-medium">Experience</a>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-sky-600 font-medium">Projects</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-sky-600 font-medium">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <section id="home" ref={heroRef} className="mb-24 md:mb-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            className="text-center md:text-left md:flex md:justify-between md:items-center gap-12"
          >
            <div className="flex-1 space-y-5">
              <motion.div variants={fadeUp} className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold">
                👋 Welcome to my portfolio
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tight">
                <span className="bg-linear-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
                  {portfolioConfig.name}
                </span>
              </motion.h1>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-slate-700">
                {portfolioConfig.title}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0">
                {portfolioConfig.bio}
              </motion.p>
              <div className="flex flex-col sm:flex-row sm:justify-normal justify-center items-center gap-4 pt-4">
                <a
                  href={`mailto:${portfolioConfig.email}`}
                  className="w-52 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Mail size={18} /> Contact Me
                </a>

                <a
                  href={portfolioConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-52 border border-slate-300 hover:border-sky-400 text-slate-700 hover:text-sky-600 px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <GitBranch size={18} /> GitHub
                </a>

                <a
                  href={portfolioConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-52 border border-slate-300 hover:border-sky-400 text-slate-700 hover:text-sky-600 px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <LinkedinIcon size={18} /> LinkedIn
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="hidden md:flex items-center justify-center"
            >
              <div className="relative w-48 h-48 bg-linear-to-tr from-sky-200 to-sky-400 rounded-full flex items-center justify-center shadow-2xl">
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center text-5xl font-bold text-sky-600">
                  {portfolioConfig.avatarInitials}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-sky-500 p-2 rounded-full shadow-lg">
                  <Code2 size={20} className="text-white" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24">
          <SectionTitle>
            <span className="flex items-center gap-2">
              <Zap size={28} className="text-sky-500" /> Technical Skills
            </span>
          </SectionTitle>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* split skills into 2 columns */}
            <div className="space-y-2">
              {portfolioConfig.skills
                .slice(0, Math.ceil(portfolioConfig.skills.length / 2))
                .map((skill, idx) => (
                  <SkillBar key={skill.name} skill={skill} index={idx} />
                ))}
            </div>

            <div className="space-y-2">
              {portfolioConfig.skills
                .slice(Math.ceil(portfolioConfig.skills.length / 2))
                .map((skill, idx) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={idx + Math.ceil(portfolioConfig.skills.length / 2)}
                  />
                ))}
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-24">
          <SectionTitle>
            <span className="flex items-center gap-2"><GraduationCap size={28} className="text-sky-500" /> Academic Background</span>
          </SectionTitle>
          <div className="space-y-6">
            {portfolioConfig.education.map((edu, idx) => (
              <EducationCard key={edu.degree} education={edu} index={idx} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24">
          <SectionTitle>
            <span className="flex items-center gap-2"><Briefcase size={28} className="text-sky-500" /> Work Experience</span>
          </SectionTitle>
          <div className="space-y-6">
            {portfolioConfig.companies.map((company, idx) => (
              <CompanyCard key={company.name} company={company} index={idx} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <SectionTitle>
            <span className="flex items-center gap-2"><Sparkles size={28} className="text-sky-500" /> Featured Projects</span>
          </SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioConfig.projects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <LanguageSection />

        {/* Contact Section */}
        <section id="contact" className="pt-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-sky-600 to-sky-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Connect
            </h2>

            <p className="text-sky-50 mb-8 max-w-md mx-auto">
              Have a project in mind? Let's work together to create something amazing.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${portfolioConfig.email}`}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all px-6 py-3 rounded-full flex items-center gap-2 font-semibold"
              >
                <Mail size={20} /> Email
              </a>
              <a
                href={`tel:${portfolioConfig.phone}`}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all px-6 py-3 rounded-full flex items-center gap-2 font-semibold"
              >
                <Phone size={20} /> Call Me
              </a>
              <a
                href={portfolioConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all px-6 py-3 rounded-full flex items-center gap-2 font-semibold"
              >
                <LinkedinIcon size={20} /> LinkedIn
              </a>
              <a
                href={portfolioConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all px-6 py-3 rounded-full flex items-center gap-2 font-semibold"
              >
                <GitBranch size={20} /> GitHub
              </a>
            </div>
          </motion.div>

          <div className="text-center text-slate-400 text-sm mt-12">
            &copy; {new Date().getFullYear()} {portfolioConfig.name} — Built in Lagos, Nigeria
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;