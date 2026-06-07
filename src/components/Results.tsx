import { useRef, useEffect, useState } from 'react';

const metrics = [
  { value: 342, suffix: '%', label: 'Average Traffic Growth', sublabel: 'Across SEO clients in 6 months' },
  { value: 4.2, suffix: 'Cr', prefix: '₹', label: 'Revenue Generated', sublabel: 'For clients in FY 2024–25' },
  { value: 98, suffix: '%', label: 'Client Retention Rate', sublabel: 'Partnerships that keep growing' },
  { value: 120, suffix: '+', label: 'Projects Delivered', sublabel: 'Across India and beyond' },
];

const chartData = [28, 42, 38, 58, 52, 72, 68, 88, 82, 95, 92, 100];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const isDecimal = !Number.isInteger(target);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal
        ? Math.round(eased * target * 10) / 10
        : Math.round(eased * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function MetricCard({ metric, index }: { metric: typeof metrics[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(metric.value, 2000, started);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="text-5xl lg:text-6xl font-black text-omnexa-black tracking-tight mb-2">
        {metric.prefix}
        {Number.isInteger(metric.value) ? count : count.toFixed(1)}
        {metric.suffix}
      </div>
      <div className="text-base font-semibold text-omnexa-black mb-1">{metric.label}</div>
      <div className="text-sm text-omnexa-gray">{metric.sublabel}</div>
    </div>
  );
}

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  const maxVal = Math.max(...chartData);

  return (
    <section id="results" className="section-padding bg-omnexa-black" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <div className="label-tag mb-6 reveal" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <span className="w-6 h-px bg-white/40" />
              <span className="text-white/40">The Numbers</span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight text-white reveal reveal-delay-1">
              Results That
              <br />
              Speak Louder.
            </h2>
          </div>
          <p className="text-sm text-white/40 max-w-xs leading-relaxed reveal reveal-delay-2">
            Every project is a commitment. These numbers reflect the trust our clients place in us and the outcomes we deliver.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20 pb-20 border-b border-white/10">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} />
          ))}
        </div>

        {/* Chart */}
        <div className="reveal reveal-delay-3">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-white text-sm font-semibold tracking-wide mb-1">Organic Traffic Growth</div>
              <div className="text-white/40 text-xs">Cumulative client portfolio — 2024</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-white/60 text-xs">Traffic index</span>
            </div>
          </div>

          <div className="relative h-48">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((line) => (
              <div
                key={line}
                className="absolute left-0 right-0 border-t border-white/5"
                style={{ bottom: `${line}%` }}
              />
            ))}

            {/* Bars */}
            <div className="absolute inset-x-0 bottom-0 flex items-end gap-1.5 h-full">
              {chartData.map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-sm bg-white/20 hover:bg-white/40 transition-all duration-300 relative group"
                    style={{ height: `${(val / maxVal) * 100}%` }}
                  >
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      +{val}%
                    </div>
                  </div>
                  <span className="text-white/30 text-xs hidden lg:block">{months[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
