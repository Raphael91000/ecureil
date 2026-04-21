import { Phone, MapPin, Hammer } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Prise de contact',
    description:
      'Contactez-nous par téléphone ou via le formulaire. Nous vous répondons rapidement pour comprendre votre projet et fixer les premières orientations.',
    detail: 'Réponse sous 24h garantie',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Visite sur site',
    description:
      'Nous nous déplaçons gratuitement chez vous pour évaluer la situation, analyser les arbres et espaces concernés, et vous remettre un devis détaillé et transparent.',
    detail: 'Devis gratuit et sans engagement',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Réalisation des travaux',
    description:
      'Une fois le devis accepté, nous planifions l\'intervention à votre convenance. Notre équipe intervient avec le matériel adapté, dans le respect de votre propriété et de l\'environnement.',
    detail: 'Nettoyage du chantier inclus',
  },
];

export default function Process() {
  return (
    <section id="processus" className="section-light py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-dark/50 mb-4">
            Comment ça se passe ?
          </p>
          <h2 className="font-heading text-5xl lg:text-6xl font-bold text-heading-light">
            Simple,{' '}
            <span className="italic font-light">rapide</span>
            {' '}& efficace
          </h2>
          <p className="font-body text-dark/60 mt-4 max-w-xl mx-auto leading-relaxed text-base">
            Trois étapes claires pour transformer votre espace vert sans stress ni mauvaise surprise.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-16 left-[16.666%] right-[16.666%] h-px bg-gradient-to-r from-transparent via-dark/20 to-transparent" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center lg:px-6">
                  {/* Circle */}
                  <div className="relative mb-8">
                    <div className="w-32 h-32 rounded-full bg-dark flex items-center justify-center shadow-xl shadow-dark/20 relative z-10">
                      <step.icon size={40} className="text-accent" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-light border-2 border-dark flex items-center justify-center font-heading text-xs font-bold text-dark z-20">
                      {i + 1}
                    </span>
                  </div>

                  {/* Step number label */}
                  <span className="font-heading text-6xl font-bold text-dark/10 leading-none mb-3 -mt-4">
                    {step.number}
                  </span>

                  <h3 className="font-heading text-2xl font-semibold text-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-dark/60 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <span className="inline-block font-body text-xs font-semibold text-dark bg-dark/10 px-4 py-1.5 rounded-full tracking-wide">
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
