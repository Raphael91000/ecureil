import { Phone, MapPin, Clock } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Notre approche', href: '#processus' },
  { label: 'Avis clients', href: '#avis' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Élagage d\'arbres',
  'Abattage d\'arbres',
  'Taille de haies',
  'Entretien de jardins',
  'Création d\'espaces verts',
  'Débroussaillage',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl select-none">🐿️</span>
              <span className="font-heading text-lg font-semibold text-accent">
                Ecureil Elagage
              </span>
            </div>
            <p className="font-body text-sm text-light/50 leading-relaxed mb-6">
              Paysagiste professionnel en Haute-Vienne. Élagage, abattage, taille et entretien de jardins avec soin et expertise.
            </p>
            <a
              href="tel:+33664825814"
              className="inline-flex items-center gap-2 text-accent font-body font-semibold text-sm hover:text-light transition-colors"
            >
              <Phone size={14} />
              +33 6 64 82 58 14
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-accent/60 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm text-light/50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-accent/60 mb-5">
              Prestations
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="font-body text-sm text-light/50">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-accent/60 mb-5">
              Nous trouver
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-sm text-light/70">Traspont</p>
                  <p className="font-body text-sm text-light/50">87240 Saint-Laurent-les-Églises</p>
                  <p className="font-body text-sm text-light/50">France</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={14} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-sm text-light/70">Lundi – Vendredi</p>
                  <p className="font-body text-sm text-light/50">8h00 – 18h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-accent/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-light/30">
            © {new Date().getFullYear()} Ecureil Elagage. Tous droits réservés.
          </p>
          <p className="font-body text-xs text-light/30">
            Traspont, 87240 Saint-Laurent-les-Églises
          </p>
        </div>
      </div>
    </footer>
  );
}
