import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Notre approche', href: '#processus' },
  { label: 'Avis clients', href: '#avis' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-dark shadow-lg shadow-dark/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group"
        >
          <span className="font-heading text-xl font-semibold text-accent tracking-wide">
            Gaetan espaces verts
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-body text-sm font-medium text-light/80 hover:text-accent transition-colors tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:+33661006092"
          className="hidden lg:flex items-center gap-2 bg-accent text-dark px-5 py-2.5 rounded-full font-body text-sm font-600 hover:bg-light transition-colors"
        >
          <Phone size={14} />
          <span className="font-semibold">+33 6 61 00 60 92</span>
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-accent"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-dark border-t border-accent/20 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-body text-sm font-medium text-light/80 hover:text-accent transition-colors py-1 tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+33661006092"
            className="flex items-center gap-2 text-accent font-semibold font-body text-sm mt-2"
          >
            <Phone size={14} />
            +33 6 61 00 60 92
          </a>
        </div>
      </div>
    </header>
  );
}
