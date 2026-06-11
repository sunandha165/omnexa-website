import { Link } from "react-router-dom";
import { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import webBg from '../assets/services/Website Development bg.png';
import seoBg from '../assets/services/SEO Optimization bg.png';
import marketingBg from '../assets/services/Digital Marketing.png';
import socialBg from '../assets/services/Social Media Marketing.png';
import brandBg from '../assets/services/Brand Strategy.png';
import automationBg from '../assets/services/AS.png';

const services = [
  {
  
    number: '01',
  slug: 'website-development',
  title: 'Website Development',
    description: 'Pixel-perfect, performance-optimized websites that convert visitors into customers. Built with modern tech stacks.',
    tags: ['React', 'Next.js', 'Framer Motion'],
   image: webBg,
    accent: 'bg-omnexa-black',
  },
  {
    
  number: '02',
  slug: 'seo-optimization',
  title: 'SEO Optimization',
  description: 'Data-driven SEO strategies that compound over time. From technical audits to content architecture.',
    tags: ['Technical SEO', 'Content Strategy', 'Link Building'],
    image: seoBg,
    accent: 'bg-omnexa-graphite',
  },
  {
    
  number: '03',
  slug: 'digital-marketing',
  title: 'Digital Marketing',

    description: 'Full-funnel digital marketing campaigns engineered for measurable ROI across every channel.',
    tags: ['Google Ads', 'Meta Ads', 'Analytics'],
    image: marketingBg,
    accent: 'bg-omnexa-black',
  },
  {
    
  number: '04',
  slug: 'social-media-marketing',
  title: 'Social Media Marketing',

    description: 'Strategic content and community building that transforms your social presence into a growth engine.',
    tags: ['Content Creation', 'Community', 'Paid Social'],
    image: socialBg,
    accent: 'bg-omnexa-graphite',
  },
  {
    
  number: '05',
  slug: 'brand-strategy',
  title: 'Brand Strategy',

    description: 'Premium brand identities that command respect. Visual systems, messaging, and positioning for serious companies.',
    tags: ['Identity Design', 'Messaging', 'Visual System'],
    image: brandBg,
    accent: 'bg-omnexa-black',
  },
  {
    
  number: '06',
  slug: 'automation-solutions',
  title: 'Automation Solutions',

    description: 'Intelligent automation that eliminates repetitive tasks, scales operations and multiplies team output.',
    tags: ['Workflow Automation', 'CRM', 'AI Integration'],
    image: automationBg,
    accent: 'bg-omnexa-graphite',
  },
];

function useRevealOnScroll(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    const elements = ref.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="services" className="section-padding bg-white" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="label-tag mb-6 reveal">
            <span className="w-6 h-px bg-omnexa-graphite" />
            What We Do
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight text-omnexa-black mb-6 reveal reveal-delay-1">
            Every Service.
            <br />
            <span className="text-omnexa-gray">Built to Scale.</span>
          </h2>
          <p className="text-base text-omnexa-graphite leading-relaxed reveal reveal-delay-2">
            We don't offer a menu of services. We architect digital systems that compound. Each capability works in concert with the others.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  return (
    <Link to={`/${service.slug}`}>
      <div
        className="group card-base card-hover cursor-pointer relative overflow-hidden reveal"
        style={{ transitionDelay: `${delay}s` }}
      >
        {/* Service Image */}
        <div className="relative h-52 overflow-hidden rounded-xl mb-6">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute top-4 right-4 text-white text-xs font-black tracking-widest">
            {service.number}
          </div>

          <div className="absolute bottom-4 left-4 text-white text-lg font-bold">
            {service.title}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-omnexa-black mb-3 tracking-tight">
          {service.title}
        </h3>

        <p className="text-sm text-omnexa-graphite leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-omnexa-graphite bg-omnexa-off-white px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1.5 text-xs font-semibold text-omnexa-black opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          Learn more
          <ArrowUpRight size={13} strokeWidth={2.5} />
        </div>

        {/* Hover line accent */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-omnexa-black group-hover:w-full transition-all duration-500" />
      </div>
    </Link>
  );
}