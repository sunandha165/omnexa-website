import { useRef, useEffect } from 'react';

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

const values = [
  { title: 'Precision', desc: 'We obsess over details most agencies overlook.' },
  { title: 'Velocity', desc: 'Speed without sacrificing quality is our standard.' },
  { title: 'Transparency', desc: 'You always know what we\'re doing and why.' },
  { title: 'Ownership', desc: 'We treat your business like it\'s our own.' },
];

const team = [
  { role: 'Creative Director', initial: 'AK', bg: '#0A0A0A' },
  { role: 'Tech Lead', initial: 'RV', bg: '#1A1A1A' },
  { role: 'SEO Strategist', initial: 'PS', bg: '#2A2A2A' },
  { role: 'Brand Designer', initial: 'MN', bg: '#111111' },
  { role: 'Growth Marketer', initial: 'SL', bg: '#161616' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="about" className="section-padding bg-white overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <div className="label-tag mb-6 reveal">
              <span className="w-6 h-px bg-omnexa-graphite" />
              Who We Are
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-black tracking-tight leading-tight text-omnexa-black mb-8 reveal reveal-delay-1">
              A Young Team.
              <br />
              <span className="text-omnexa-gray">Big Ideas.</span>
              <br />
              Real Results.
            </h2>
            <div className="space-y-5 reveal reveal-delay-2">
              <p className="text-base text-omnexa-graphite leading-relaxed">
                OMNEXA was born from a simple frustration: most agencies deliver mediocre work at premium prices. We decided to flip that.
              </p>
              <p className="text-base text-omnexa-graphite leading-relaxed">
                We're a tight-knit team of designers, developers, and strategists who believe that great digital work shouldn't be reserved for Fortune 500 companies.
              </p>
              <p className="text-base text-omnexa-graphite leading-relaxed">
                We build for ambitious founders, growing brands, and businesses that are serious about their digital future.
              </p>
            </div>

            {/* Team avatars */}
            <div className="flex items-center gap-4 mt-10 reveal reveal-delay-3">
              <div className="flex -space-x-3">
                {team.map((member, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: member.bg }}
                    title={member.role}
                  >
                    {member.initial}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-omnexa-black">The OMNEXA Team</div>
                <div className="text-xs text-omnexa-gray">10+ specialists, 1 vision</div>
              </div>
            </div>
          </div>

          {/* Right: Values */}
          <div className="space-y-4">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="group flex items-start gap-6 p-6 rounded-2xl border border-omnexa-border hover:border-omnexa-graphite transition-all duration-300 hover:bg-omnexa-soft-white cursor-default reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-omnexa-off-white group-hover:bg-omnexa-black flex items-center justify-center transition-colors duration-300">
                  <span className="text-xs font-black text-omnexa-graphite group-hover:text-white transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-omnexa-black mb-1.5">{value.title}</h3>
                  <p className="text-sm text-omnexa-graphite leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}

            {/* Quote block */}
            <div className="mt-8 p-8 bg-omnexa-black rounded-2xl reveal" style={{ transitionDelay: '0.4s' }}>
              <blockquote className="text-xl font-bold text-white leading-snug mb-4">
                "We don't build websites. We build digital business engines."
              </blockquote>
              <div className="text-white/50 text-sm">— OMNEXA Founding Principle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
