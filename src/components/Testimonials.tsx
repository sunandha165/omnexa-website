import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "OMNEXA didn't just build us a website — they built us a growth engine. Our leads tripled in the first 60 days.",
    name: 'Aryan Kapoor',
    title: 'Founder & CEO',
    company: 'TechStack India',
    rating: 5,
  },
  {
    quote: "The level of design sophistication they brought to our brand was something we'd only seen from agencies charging 10x more.",
    name: 'Priya Sharma',
    title: 'CMO',
    company: 'NovaBrands',
    rating: 5,
  },
  {
    quote: "Within 4 months, we went from page 3 to #1 for our most competitive keyword. The SEO work was transformational.",
    name: 'Rohit Mehta',
    title: 'Co-Founder',
    company: 'GrowthOS',
    rating: 5,
  },
  {
    quote: "They understand business, not just design. Every decision was rooted in strategy. That's rare.",
    name: 'Sneha Patel',
    title: 'Head of Marketing',
    company: 'ScaleX Ventures',
    rating: 5,
  },
  {
    quote: "OMNEXA delivered our entire digital ecosystem — website, brand, social — in 3 weeks. The quality was exceptional.",
    name: 'Dev Nair',
    title: 'CEO',
    company: 'Launchpad.io',
    rating: 5,
  },
];

function useRevealOnScroll(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  useRevealOnScroll(sectionRef);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section className="section-padding bg-omnexa-soft-white" ref={sectionRef}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Header */}
          <div>
            <div className="label-tag mb-6 reveal">
              <span className="w-6 h-px bg-omnexa-graphite" />
              Client Stories
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight text-omnexa-black mb-8 reveal reveal-delay-1">
              Don't Take
              <br />
              Our Word.
              <br />
              <span className="text-omnexa-gray">Take Theirs.</span>
            </h2>

            {/* Navigation */}
            <div className="flex items-center gap-4 reveal reveal-delay-2">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-omnexa-border hover:bg-omnexa-black hover:border-omnexa-black hover:text-white text-omnexa-graphite transition-all duration-300 flex items-center justify-center"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-omnexa-border hover:bg-omnexa-black hover:border-omnexa-black hover:text-white text-omnexa-graphite transition-all duration-300 flex items-center justify-center"
              >
                <ChevronRight size={18} />
              </button>
              <span className="text-sm text-omnexa-gray ml-2">
                {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>

            {/* All testimonials mini list */}
            <div className="mt-10 space-y-2 reveal reveal-delay-3">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 border ${
                    i === active
                      ? 'bg-omnexa-black border-omnexa-black'
                      : 'bg-transparent border-transparent hover:border-omnexa-border hover:bg-white'
                  }`}
                >
                  <div className={`text-xs font-semibold ${i === active ? 'text-white' : 'text-omnexa-graphite'}`}>
                    {t.name}
                    <span className={`ml-2 font-normal ${i === active ? 'text-white/60' : 'text-omnexa-gray'}`}>
                      — {t.company}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Active testimonial */}
          <div className="reveal reveal-delay-2">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-card">
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#0A0A0A" className="text-omnexa-black" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl font-bold text-omnexa-black leading-snug mb-8 tracking-tight">
                "{current.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-4 pt-6 border-t border-omnexa-border">
                <div className="w-12 h-12 rounded-full bg-omnexa-black flex items-center justify-center text-white text-sm font-black flex-shrink-0">
                  {current.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-bold text-omnexa-black">{current.name}</div>
                  <div className="text-xs text-omnexa-gray mt-0.5">{current.title}, {current.company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
