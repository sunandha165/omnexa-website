import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import logo from '../assets/OMNEXA AGENCY LOGO.png';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-omnexa-border shadow-subtle'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={logo}
              alt="OMNEXA Agency"
              className="h-16 lg:h-18 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-omnexa-graphite hover:text-omnexa-black transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="btn-primary text-xs tracking-wide">
              Start a Project
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-omnexa-black"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col transition-all duration-500 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center">
            <img
              src={logo}
              alt="OMNEXA Agency"
              className="h-14 w-auto object-contain"
            />
          </a>

          <button
            onClick={() => setMenuOpen(false)}
            className="p-2"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center section-container gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-black tracking-tight py-3 text-omnexa-black border-b border-omnexa-border-light hover:pl-4 transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-8 w-fit"
          >
            Start a Project
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </>
  );
}