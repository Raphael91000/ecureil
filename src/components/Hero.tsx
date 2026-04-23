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
            Wiss Elagage sublime vos espaces verts avec expertise et passion.
          </p>

          <p className="font-body text-xs text-accent/40 mb-10 tracking-widest uppercase">
            32 La Grande Rue · 27800 Boisney · Lun–Ven 9h–17h
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <a
              href="tel:+33604472696"
              className="flex items-center gap-2.5 bg-accent text-dark px-7 py-3.5 rounded-full font-body font-semibold text-sm hover:bg-light transition-all duration-200 hover:scale-105"
            >
              <Phone size={15} />
              +33 6 04 47 26 96
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="flex items-center gap-2.5 border border-accent/40 text-accent px-7 py-3.5 rounded-full font-body font-semibold text-sm hover:bg-accent/10 transition-all duration-200"
            >
              <Calendar size={15} />
              Demander un devis
            </button>
          </div>

          {/* Google Reviews */}
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-accent text-accent" />
              ))}
            </div>
            <span className="font-body text-sm font-semibold text-accent">5,0</span>
            <span className="font-body text-xs text-light/50">·</span>
            <span className="font-body text-xs text-light/50">120+ avis</span>
            <span className="font-body text-xs text-light/50">·</span>
            <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-body text-xs text-light/50">Google</span>
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
                    <p className="font-heading text-accent font-semibold text-base leading-tight">Wiss Elagage</p>
                    <p className="font-body text-light/40 text-xs mt-0.5">Artisan paysagiste certifié</p>
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
