import { ChevronDown, Phone, Calendar, Star } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden section-dark"
    >
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-1.5 mb-8 bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-body text-xs font-semibold text-accent tracking-[0.2em] uppercase">
              Paysagiste professionnel — Normandie
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-accent leading-[1.05] mb-6">
            L'art de{' '}
            <span className="italic font-light">façonner</span>
            <br />
            votre nature
          </h1>

          <p className="font-body text-base text-light/60 mb-3 leading-relaxed max-w-md">
            Élagage, abattage, taille de haies et entretien de jardins.
            Gaetan espaces verts sublime vos espaces verts avec expertise et passion.
          </p>

          <p className="font-body text-xs text-accent/40 mb-10 tracking-widest uppercase">
            32 La Grande Rue · 27800 Boisney · Lun–Ven 9h–17h
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <a
              href="tel:+33661006092"
              className="flex items-center gap-2.5 bg-accent text-dark px-7 py-3.5 rounded-full font-body font-semibold text-sm hover:bg-light transition-all duration-200 hover:scale-105"
            >
              <Phone size={15} />
              +33 6 61 00 60 92
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="flex items-center gap-2.5 border border-accent/40 text-accent px-7 py-3.5 rounded-full font-body font-semibold text-sm hover:bg-accent/10 transition-all duration-200"
            >
              <Calendar size={15} />
              Demander un devis
            </button>
          </div>
        </div>

        {/* Right: image card */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[360px]">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/30 to-transparent" />
            <div className="relative rounded-2xl overflow-hidden bg-dark">
              <img
                src="/ok.jpeg"
                alt="Ecureil Elagage — travaux paysagers"
                className="w-full h-[400px] object-cover opacity-90"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/95 via-dark/50 to-transparent px-5 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading text-accent font-semibold text-base leading-tight">Gaetan espaces verts</p>
                    <p className="font-body text-light/40 text-xs mt-0.5">Artisan paysagiste certifié</p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-accent text-dark text-[10px] font-body font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Expertise locale
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('#stats')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-accent/30 hover:text-accent/60 transition-colors animate-bounce"
        aria-label="Défiler"
      >
        <span className="font-body text-[10px] tracking-widest uppercase">Découvrir</span>
        <ChevronDown size={16} />
      </button>
    </section>
  );
}
