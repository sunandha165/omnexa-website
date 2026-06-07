import { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, MessageCircle, Mail, Calendar, Send } from 'lucide-react';

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

const channels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    desc: 'Fastest response',
    action: 'Chat Now',
    href: 'https://wa.me/919999999999',
    bg: '#25D366',
    text: '#FFFFFF',
  },
  {
    icon: Mail,
    label: 'Email',
    desc: 'hello@omnexa.in',
    action: 'Send Email',
    href: 'mailto:hello@omnexa.in',
    bg: '#0A0A0A',
    text: '#FFFFFF',
  },
  {
    icon: Calendar,
    label: 'Book a Call',
    desc: '30-min discovery call',
    action: 'Schedule',
    href: '#',
    bg: '#F2F2F2',
    text: '#0A0A0A',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', budget: '' });
  const [submitted, setSubmitted] = useState(false);
  useRevealOnScroll(sectionRef);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-white" ref={sectionRef}>
      <div className="section-container">
        {/* Hero headline */}
        <div className="text-center mb-20">
          <div className="label-tag mb-6 reveal justify-center">
            <span className="w-6 h-px bg-omnexa-graphite" />
            Get In Touch
          </div>
          <h2 className="text-5xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tight leading-none text-omnexa-black mb-6 reveal reveal-delay-1">
            Let's Build
            <br />
            <span className="text-omnexa-gray">Something</span>
            <br />
            Extraordinary.
          </h2>
          <p className="text-base text-omnexa-graphite max-w-lg mx-auto leading-relaxed reveal reveal-delay-2">
            Ready to transform your digital presence? Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Channels */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {channels.map((channel, i) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 rounded-2xl border border-omnexa-border hover:border-omnexa-graphite hover:shadow-card transition-all duration-300 reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: channel.bg }}
              >
                <channel.icon size={20} color={channel.text} strokeWidth={2} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-omnexa-black">{channel.label}</div>
                <div className="text-xs text-omnexa-gray mt-0.5">{channel.desc}</div>
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-omnexa-graphite opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                {channel.action}
                <ArrowUpRight size={12} strokeWidth={2.5} />
              </div>
            </a>
          ))}
        </div>

        {/* Contact form */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Form */}
          <div className="reveal">
            {submitted ? (
              <div className="bg-omnexa-black rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <Send size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We've received your project brief. Expect a response within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-omnexa-graphite tracking-wide mb-2 block uppercase">
                      Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3.5 rounded-xl border border-omnexa-border bg-omnexa-soft-white text-sm text-omnexa-black placeholder-omnexa-gray focus:outline-none focus:border-omnexa-graphite transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-omnexa-graphite tracking-wide mb-2 block uppercase">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-omnexa-border bg-omnexa-soft-white text-sm text-omnexa-black placeholder-omnexa-gray focus:outline-none focus:border-omnexa-graphite transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-omnexa-graphite tracking-wide mb-2 block uppercase">
                    Company / Brand
                  </label>
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your company name"
                    className="w-full px-4 py-3.5 rounded-xl border border-omnexa-border bg-omnexa-soft-white text-sm text-omnexa-black placeholder-omnexa-gray focus:outline-none focus:border-omnexa-graphite transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-omnexa-graphite tracking-wide mb-2 block uppercase">
                    Project Budget
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-omnexa-border bg-omnexa-soft-white text-sm text-omnexa-black focus:outline-none focus:border-omnexa-graphite transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select budget range</option>
                    <option value="25k-50k">₹25,000 – ₹50,000</option>
                    <option value="50k-1l">₹50,000 – ₹1,00,000</option>
                    <option value="1l-3l">₹1,00,000 – ₹3,00,000</option>
                    <option value="3l-5l">₹3,00,000 – ₹5,00,000</option>
                    <option value="5l+">₹5,00,000+</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-omnexa-graphite tracking-wide mb-2 block uppercase">
                    Project Brief *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full px-4 py-3.5 rounded-xl border border-omnexa-border bg-omnexa-soft-white text-sm text-omnexa-black placeholder-omnexa-gray focus:outline-none focus:border-omnexa-graphite transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-4">
                  Send Project Brief
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </button>
              </form>
            )}
          </div>

          {/* Right: Info */}
          <div className="space-y-8 reveal reveal-delay-2">
            <div>
              <h3 className="text-2xl font-black text-omnexa-black mb-4 tracking-tight">
                What Happens Next?
              </h3>
              {[
                { step: '01', text: 'We review your brief within 24 hours' },
                { step: '02', text: 'Discovery call to align on goals and vision' },
                { step: '03', text: 'Custom proposal & project timeline' },
                { step: '04', text: 'Kickoff and we start building' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 py-4 border-b border-omnexa-border last:border-0">
                  <span className="text-xs font-black text-omnexa-gray tracking-widest flex-shrink-0 w-7">{item.step}</span>
                  <span className="text-sm text-omnexa-graphite leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-omnexa-soft-white rounded-2xl p-7 border border-omnexa-border">
              <div className="text-xs font-semibold text-omnexa-gray tracking-widest uppercase mb-4">Typical Project Range</div>
              <div className="space-y-2">
                {[
                  { service: 'Website Design + Dev', range: '₹60K – ₹2L' },
                  { service: 'Brand Identity', range: '₹25K – ₹75K' },
                  { service: 'SEO + Marketing', range: '₹20K – ₹60K/mo' },
                  { service: 'Full Digital Suite', range: '₹2L – ₹10L' },
                ].map((item) => (
                  <div key={item.service} className="flex justify-between items-center py-2 border-b border-omnexa-border last:border-0">
                    <span className="text-sm text-omnexa-graphite">{item.service}</span>
                    <span className="text-sm font-bold text-omnexa-black">{item.range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
