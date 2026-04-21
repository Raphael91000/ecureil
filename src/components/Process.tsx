import { Phone, MapPin, Hammer, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Prise de contact',
    description: 'Appelez-nous ou remplissez le formulaire. Réponse sous 24h garantie.',
    detail: 'Gratuit & sans engagement',
  },
  {
    icon: MapPin,
    title: 'Visite sur site',
    description: 'On se déplace chez vous, on évalue, on vous remet un devis clair et détaillé.',
    detail: 'Déplacement offert',
  },
  {
    icon: Hammer,
    title: 'Réalisation',
    description: 'On intervient à votre convenance avec le bon matériel. Chantier propre en fin de journée.',
    detail: 'Nettoyage inclus',
  },
];

export default function Process() {
  return (
    <section id="processus" className="section-light py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-dark/40 mb-3">
            Comment ça se passe
          </p>
          <h2 className="font-heading text-5xl lg:text-6xl font-bold text-dark leading-tight">
            Simple, <span className="italic font-light">rapide</span> & efficace
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative group">
              <div className="bg-dark rounded-2xl p-8 h-full flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center">
                    <step.icon size={20} className="text-accent" />
                  </div>
                  <span className="font-heading text-8xl font-bold text-accent leading-none select-none">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-semibold text-accent mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-light/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-accent/60">
                  <ArrowRight size={13} />
                  <span className="font-body text-xs font-semibold tracking-wide uppercase">
                    {step.detail}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
