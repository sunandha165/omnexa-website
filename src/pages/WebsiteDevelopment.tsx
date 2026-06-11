import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiGlobe, FiLayers, FiCode, FiCpu } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Project assets
import grain from "../assets/projects/grain.png";
import Flair from "../assets/projects/Flair.png";
import ecommerce from "../assets/projects/ecommerce.png";
import blackwinter from "../assets/projects/blackwinter.png";
import organicF from "../assets/projects/organicF.jpg";
// --- 3D TILT CARD COMPONENT ---
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
}
const TiltCard: React.FC<TiltCardProps> = ({ children, className = "", depth = 15 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  // Motion values to track normalized coordinates (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Smooth springs for tilt rotations
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [depth, -depth]), { damping: 25, stiffness: 250 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-depth, depth]), { damping: 25, stiffness: 250 });
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate mouse position relative to center
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`relative transition-all duration-300 ${className}`}
    >
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};
// --- FLOATING BACKGROUND DECORATION ---
const FloatingOrbs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orb 1: Violet/Blue */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 dark:bg-[#6C47FF]/5 blur-[120px]"
      />
      {/* Orb 2: Coral/Orange */}
      <motion.div
        animate={{
          x: [0, -30, 50, 0],
          y: [0, 40, -50, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-orange-400/10 dark:bg-[#FF6B4A]/5 blur-[130px]"
      />
      {/* Orb 3: Cyan */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 50, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-400/5 dark:bg-cyan-500/5 blur-[100px]"
      />
    </div>
  );
};
// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};
export default function WebsiteDevelopment() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const heroImages = [
    { src: grain, alt: "SK Agri Needs", rot: -4, delay: 0 },
    { src: Flair, alt: "AFSPL", rot: 3, delay: 0.1 },
    { src: ecommerce, alt: "Ecommerce Platform", rot: -2, delay: 0.2 },
    { src: blackwinter, alt: "BlackWinter", rot: 5, delay: 0.3 },
  ];
  const projects = [
    {
      id: 1,
      title: "SK Agri Needs",
      desc: "Agriculture platform built to showcase products and generate inquiries.",
      img: grain,
      url: "https://skagrineeds.com/",
      type: "AGRICULTURE PLATFORM",
      icon: <FiGlobe className="w-5 h-5 text-emerald-500" />,
      color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20",
    },
    {
      id: 2,
      title: "AFSPL",
      desc: "FMCG distribution and brand showcase website.",
      img: Flair,
      url: "https://afsplcom.com/",
      type: "FMCG BRAND SHOWCASE",
      icon: <FiLayers className="w-5 h-5 text-indigo-500" />,
      color: "from-indigo-500/10 to-blue-500/10 border-indigo-500/20",
    },
    {
      id: 3,
      title: "Ecommerce Platform",
      desc: "Full-stack ecommerce with admin dashboard, authentication and order tracking.",
      img: ecommerce,
      url: "https://mern-ecommerce-blackwinter-ihug.vercel.app/",
      type: "MERN STACK",
      icon: <FiCode className="w-5 h-5 text-purple-500" />,
      color: "from-purple-500/10 to-pink-500/10 border-purple-500/20",
    },
    {
      id: 4,
      title: "BlackWinter",
      desc: "Premium WordPress website with custom branding.",
      img: blackwinter,
      url: "https://blackwinter.in/",
      type: "WORDPRESS",
      icon: <FiCpu className="w-5 h-5 text-amber-500" />,
      color: "from-amber-500/10 to-orange-500/10 border-amber-500/20",
    },
    {
      id: 5,
      title: "SS Narayana Organic Farming",
      desc: "Organic farming website designed to showcase sustainable agriculture and eco-friendly services.",
      img: organicF,
      url: "https://ss-narayana-organic-farming.vercel.app/",
      type: "SUSTAINABLE AGRICULTURE",
      icon: <FiGlobe className="w-5 h-5 text-green-500" />,
      color: "from-green-500/10 to-lime-500/10 border-green-500/20",
      
    },
  ];
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#0B0D1B] text-slate-800 dark:text-gray-300 transition-colors duration-300 overflow-x-hidden selection:bg-[#6C47FF]/20 selection:text-[#6C47FF]">
      <Navbar />
      <FloatingOrbs />
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center z-10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Context Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[#6C47FF]" />
                <p className="uppercase tracking-[0.25em] text-xs font-semibold text-slate-550 dark:text-gray-400 font-display">
                  Website Development
                </p>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black leading-[1.05] tracking-tight mb-6 text-slate-900 dark:text-white"
              >
                Websites That Turn <br />
                Visitors Into <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#6C47FF] via-[#4F46E5] to-[#FF6B4A]">
                  Customers
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-[#6C47FF] to-[#FF6B4A]"
                  />
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-slate-600 dark:text-gray-400 max-w-xl leading-relaxed mb-10 font-sans"
              >
                We build modern websites, ecommerce stores, and high-performance web applications that load in milliseconds, wow your users, and scale your business online.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                {/* Primary CTA */}
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(108, 71, 255, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-[#6C47FF] hover:bg-[#4F46E5] text-white rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-indigo-500/10 cursor-pointer transition-all duration-300"
                >
                  Start Project <FiArrowUpRight className="w-5 h-5" />
                </motion.button>
                {/* Secondary CTA */}
                <motion.button
                  whileHover={{ scale: 1.05, bg: "rgba(0,0,0,0.02)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const el = document.getElementById("featured-work");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 border border-slate-300 dark:border-gray-700 hover:border-[#6C47FF] dark:hover:border-[#6C47FF] hover:text-[#6C47FF] text-slate-700 dark:text-gray-300 rounded-full font-semibold cursor-pointer transition-all duration-300"
                >
                  View Work
                </motion.button>
              </motion.div>
            </motion.div>
            {/* Right Column: 3D Grid Images */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="grid grid-cols-2 gap-6 max-w-[500px] w-full relative z-10">
                {heroImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 70,
                      damping: 15,
                      delay: image.delay,
                    }}
                    className="relative"
                  >
                    <TiltCard depth={20} className="w-full">
                      <motion.div
                        animate={{
                          y: index % 2 === 0 ? [-8, 8, -8] : [8, -8, 8],
                        }}
                        transition={{
                          duration: 5 + index,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-gray-800/40 bg-white dark:bg-[#15172C] p-2 group hover:shadow-indigo-500/10 transition-shadow duration-300"
                      >
                        <div className="relative overflow-hidden rounded-2xl h-44 sm:h-52 w-full">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-xs font-semibold uppercase tracking-wider">
                              {image.alt}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
              {/* Decorative Blur Backing */}
              <div className="absolute w-[80%] h-[80%] bg-indigo-500/10 dark:bg-purple-500/5 rounded-full blur-3xl z-0 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
      {/* Featured Work Section */}
      <section id="featured-work" className="relative py-32 bg-slate-100/50 dark:bg-[#0B0D1B]/30 border-t border-slate-200/40 dark:border-gray-900/40 z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-1.5 mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B4A]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#6C47FF]" />
              <span className="font-display text-sm font-semibold tracking-wider text-[#6C47FF] dark:text-[#6C47FF] uppercase">
                Success Stories
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-display font-black text-slate-900 dark:text-white mb-6"
            >
              Featured Success Stories
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[3px] bg-[#FF6B4A] rounded-full"
            />
          </div>
          {/* Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, idx) => {
              const isFeatured = project.featured;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: isFeatured ? 0 : idx * 0.1 }}
                  className={`${isFeatured ? "lg:col-span-2" : ""}`}
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <TiltCard depth={isFeatured ? 6 : 12} className="h-full">
                    <div className={`h-full flex flex-col bg-white dark:bg-[#15172C] rounded-[24px] overflow-hidden border border-slate-200/60 dark:border-gray-800/40 shadow-lg hover:shadow-2xl transition-all duration-500 relative group`}>
                      
                      {/* Glow Accent Card Edge */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`}
                      />
                      {/* Card Content Layout */}
                      <div className={`relative z-10 flex flex-col ${isFeatured ? "lg:flex-row h-full" : "h-full"}`}>
                        
                        {/* Image Panel */}
                        <div className={`relative overflow-hidden ${isFeatured ? "lg:w-[50%] h-[280px] lg:h-auto" : "h-[240px]"} w-full`}>
                          <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          {/* Tech badge floating on image */}
                          <div className="absolute top-4 left-4 z-20">
                            <span className="px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                              {project.icon}
                              {project.type}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        </div>
                        {/* Text Details Panel */}
                        <div className={`p-8 flex flex-col justify-between flex-grow ${isFeatured ? "lg:w-[50%]" : "w-full"}`}>
                          <div>
                            {/* Project Badge Title */}
                            <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 dark:text-white mb-4 group-hover:text-[#6C47FF] transition-colors duration-300">
                              {project.title}
                            </h3>
                            {/* Description */}
                            <p className="text-slate-600 dark:text-gray-400 mb-8 font-sans leading-relaxed text-sm sm:text-base">
                              {project.desc}
                            </p>
                          </div>
                          {/* Link Button */}
                          <div className="border-t border-slate-100 dark:border-gray-800/60 pt-6">
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 text-[#6C47FF] dark:text-indigo-400 font-display font-bold group-hover:translate-x-1.5 transition-transform duration-300"
                            >
                              {project.type === "MERN STACK" ? "View Demo" : "Visit Website"}
                              <span className="relative flex items-center">
                                <FiArrowUpRight className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}