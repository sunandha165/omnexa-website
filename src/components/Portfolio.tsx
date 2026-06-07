import { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import afsplImg from "../assets/projects/Flair.png";
import skImg from "../assets/projects/grain.png";

const projects = [
  {
    id: 1,
    title: 'AFSPL FMCG Platform',
    category: 'Shopify Development',
    description: 'Custom Shopify platform built for AFSPL featuring 4 subsidiary brands under one scalable website with responsive design, SEO optimization, and seamless navigation.',
    tags: ['Shopify', 'UI/UX', 'SEO', 'Responsive'],
    image: afsplImg,
    liveUrl: 'https://afsplcom.com/',
    color: '#0A0A0A',
    textColor: '#FFFFFF',
    size: 'large',
    metric: '4 Brands • 1 Platform',
  },
  {
    id: 2,
    title: 'SK Agrineeds',
    category: 'Shopify Development',
    description: 'Modern Shopify website for an agricultural solutions company featuring responsive design, performance optimization, SEO-friendly architecture, and streamlined product discovery.',
    tags: ['Shopify', 'SEO', 'Responsive', 'Performance'],
    image: skImg,
    liveUrl: 'https://skagrineeds.com/',
    color: '#F2F2F2',
    textColor: '#0A0A0A',
    size: 'large',
    metric: 'SEO Optimized',
  },
];

function useRevealOnScroll(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    ref.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="portfolio" className="section-padding bg-omnexa-soft-white" ref={sectionRef}>
      <div className="section-container">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="label-tag mb-6 reveal">
              <span className="w-6 h-px bg-omnexa-graphite" />
              Our Work
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight text-omnexa-black reveal reveal-delay-1">
              Projects That
              <br />
              <span className="text-omnexa-gray">Move the Needle.</span>
            </h2>
          </div>
          <a href="#contact" className="btn-secondary reveal reveal-delay-2 whitespace-nowrap w-fit">
            View All Projects
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i * 0.07}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>

      </div>

      {activeProject && (
        <div
          className="lightbox-overlay"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-2xl mx-6 rounded-2xl overflow-hidden shadow-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="relative h-80">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-xs font-semibold tracking-widest uppercase mb-3 block text-white/70">
                  {activeProject.category}
                </span>
                <h3 className="text-3xl font-black tracking-tight text-white">
                  {activeProject.title}
                </h3>
                <div className="text-xl font-black mt-2 text-white/80">
                  {activeProject.metric}
                </div>
              </div>
            </div>

            <div className="bg-white p-8">
              <div className="flex flex-wrap gap-2 mb-5">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-omnexa-off-white text-omnexa-graphite px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-omnexa-graphite leading-relaxed mb-6">
                {activeProject.description}
              </p>
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs inline-flex items-center gap-2"
              >
                Visit Live Website
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </a>
            </div>

            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X size={16} />
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

function ProjectCard({
  project,
  delay,
  onClick,
}: {
  project: typeof projects[0];
  delay: number;
  onClick: () => void;
}) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover reveal"
      style={{ transitionDelay: `${delay}s`, backgroundColor: project.color }}
      onClick={onClick}
    >
      <div className="h-80 relative flex flex-col justify-between p-8">

        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-white/60">
            {project.category}
          </span>
        </div>

        <div className="relative z-10">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-black tracking-tight leading-tight mb-2 text-white">
            {project.title}
          </h3>
          <div className="text-sm font-bold text-white/70">
            {project.metric}
          </div>
        </div>

        <div className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 bg-white/20">
          <ArrowUpRight size={14} className="text-white" strokeWidth={2.5} />
        </div>

      </div>
    </div>
  );
}
