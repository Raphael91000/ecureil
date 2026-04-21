import { ChevronDown, Phone, Calendar } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-dark"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/75" />

      {/* Decorative lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent ml-12 hidden lg:block" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent mr-12 hidden lg:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-accent/40 rounded-full px-5 py-2 mb-8 bg-accent/10">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-body text-xs font-semibold text-accent tracking-[0.2em] uppercase">
            Paysagiste professionnel — Limousin
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold text-accent leading-tight mb-6">
          L'art de{' '}
          <span className="italic font-light">façonner</span>
          <br />
          votre nature
        </h1>

        <p className="font-body text-lg sm:text-xl text-light/80 max-w-2xl mx-auto mb-4 leading-relaxed font-300">
          Élagage, abattage, taille de haies et entretien de jardins. Depuis des
          années, Ecureil Elagage sublime vos espaces verts avec expertise et passion.
        </p>

        <p className="font-body text-sm text-accent/70 mb-12 tracking-widest uppercase">
          Traspont, 87240 Saint-Laurent-les-Églises &nbsp;·&nbsp; Lun–Ven 8h–18h
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+33664825814"
            className="flex items-center gap-3 bg-accent text-dark px-8 py-4 rounded-full font-body font-semibold text-base hover:bg-light transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20"
          >
            <Phone size={18} />
            +33 6 64 82 58 14
          </a>
          <button
            onClick={() => scrollTo('#contact')}
            className="flex items-center gap-3 border border-accent/60 text-accent px-8 py-4 rounded-full font-body font-semibold text-base hover:bg-accent/10 transition-all duration-300"
          >
            <Calendar size={18} />
            Demander un devis
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#stats')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-accent/50 hover:text-accent transition-colors animate-bounce"
        aria-label="Défiler"
      >
        <span className="font-body text-xs tracking-widest uppercase">Découvrir</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
