import { ArrowUpRight, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-omnexa-black text-white">
      {/* Top CTA band */}
      <div className="border-b border-white/10">
        <div className="section-container py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">
              Ready to grow?
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-white">
              Your Next Chapter Starts Here.
            </h2>
          </div>
          <a href="#contact" className="btn-primary flex-shrink-0 bg-white text-omnexa-black hover:bg-omnexa-soft-white">
            Start a Project
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <OmnexaLogoWhite />
              <span className="text-sm font-black tracking-[0.15em] uppercase">OMNEXA</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              Building digital systems that drive real, measurable growth for ambitious businesses across India.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-300"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">Services</div>
            <ul className="space-y-3">
              {['Website Development', 'SEO Optimization', 'Digital Marketing', 'Social Media', 'Brand Strategy', 'Automation'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">Company</div>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Work', href: '#portfolio' },
                { label: 'Process', href: '#process' },
                { label: 'Careers', href: '#' },
                { label: 'Blog', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">Contact</div>
            <ul className="space-y-3">
              <li className="text-sm text-white/50">hello@omnexa.in</li>
              <li className="text-sm text-white/50">+91 99999 99999</li>
              <li className="text-sm text-white/50 leading-relaxed">India, Remote-first</li>
              <li>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-sm text-white hover:text-white/70 transition-colors font-semibold mt-2">
                  Start a Project
                  <ArrowUpRight size={12} strokeWidth={2.5} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} OMNEXA. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <a key={link} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function OmnexaLogoWhite() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="11" height="11" rx="2" fill="white" />
      <rect x="15" y="2" width="11" height="11" rx="2" fill="white" opacity="0.5" />
      <rect x="2" y="15" width="11" height="11" rx="2" fill="white" opacity="0.5" />
      <rect x="15" y="15" width="11" height="11" rx="2" fill="white" />
    </svg>
  );
}
