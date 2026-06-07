import { useRef, useEffect } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    desc: 'Deep-dive into your business, audience, competitors and objectives. We leave no stone unturned.',
    duration: '1–2 days',
  },
  {
    number: '02',
    title: 'Strategy',
    desc: 'A custom growth blueprint tailored to your market position and ambitious goals.',
    duration: '3–4 days',
  },
  {
    number: '03',
    title: 'Design',
    desc: 'Premium creative concepts that embody your brand and differentiate you from the market.',
    duration: '5–7 days',
  },
  {
    number: '04',
    title: 'Develop',
    desc: 'Engineering-grade implementation with performance, accessibility, and scalability baked in.',
    duration: '7–14 days',
  },
  {
    number: '05',
    title: 'Launch',
    desc: 'Meticulous QA, optimization, and a coordinated go-live that makes an impact from day one.',
    duration: '1–2 days',
  },
  {
    number: '06',
    title: 'Scale',
    desc: 'Ongoing optimization, data analysis and growth execution to keep compounding your results.',
    duration: 'Ongoing',
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

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="process" className="section-padding bg-omnexa-soft-white" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="label-tag mb-6 reveal justify-center">
            <span className="w-6 h-px bg-omnexa-graphite" />
            How We Work
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight text-omnexa-black mb-6 reveal reveal-delay-1">
            A Process Built
            <br />
            for Precision.
          </h2>
          <p className="text-base text-omnexa-graphite leading-relaxed reveal reveal-delay-2">
            Six stages. No guesswork. Every project follows a disciplined framework that consistently produces outstanding results.
          </p>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:block">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute top-7 left-0 right-0 h-px bg-omnexa-border" />
            <div className="grid grid-cols-6 gap-4 relative">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="relative group reveal"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Node */}
                  <div className="w-14 h-14 rounded-full border-2 border-omnexa-border bg-white flex items-center justify-center mb-6 group-hover:bg-omnexa-black group-hover:border-omnexa-black transition-all duration-300 relative z-10">
                    <span className="text-xs font-black text-omnexa-graphite group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-sm font-black text-omnexa-black mb-2 uppercase tracking-wider">{step.title}</h3>
                  <p className="text-xs text-omnexa-graphite leading-relaxed mb-3">{step.desc}</p>
                  <span className="text-xs font-semibold text-omnexa-gray bg-white px-2.5 py-1 rounded-full border border-omnexa-border">
                    {step.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex gap-6 pb-10 reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Line + node */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-omnexa-border bg-white flex items-center justify-center flex-shrink-0 relative z-10">
                  <span className="text-xs font-black text-omnexa-graphite">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 w-px bg-omnexa-border mt-2" />
                )}
              </div>
              {/* Content */}
              <div className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-base font-black text-omnexa-black uppercase tracking-wider">{step.title}</h3>
                  <span className="text-xs font-semibold text-omnexa-gray bg-omnexa-off-white px-2.5 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                <p className="text-sm text-omnexa-graphite leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
