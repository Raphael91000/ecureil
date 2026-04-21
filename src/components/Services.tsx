import { Scissors, TreePine, Wind, Shovel, Sprout, Shield } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Scissors,
    title: 'Élagage d\'arbres',
    description: 'Taille raisonnée pour alléger la couronne, supprimer les branches mortes et équilibrer la silhouette.',
  },
  {
    icon: TreePine,
    title: 'Abattage d\'arbres',
    description: 'Abattage sécurisé, directionnel ou par démontage en hauteur pour les zones contraintes.',
  },
  {
    icon: Wind,
    title: 'Taille de haies',
    description: 'Taille précise de haies, buis et arbustes ornementaux pour des bordures nettes et une végétation saine.',
  },
  {
    icon: Shovel,
    title: 'Entretien de jardins',
    description: 'Désherbage, débroussaillage, tonte et remise en état. Votre espace vert impeccable toute l\'année.',
  },
  {
    icon: Sprout,
    title: 'Création d\'espaces verts',
    description: 'Plantation, création de massifs, pose de gazon — aménagement paysager sur mesure.',
  },
  {
    icon: Shield,
    title: 'Débroussaillage',
    description: 'Nettoyage de terrains envahis, dans le respect des obligations légales (OPF).',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-dark py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-accent/50 mb-3">
            Ce que nous faisons
          </p>
          <h2 className="font-heading text-5xl lg:text-6xl font-bold text-accent">
            Nos <span className="italic font-light">prestations</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-accent/10 border border-accent/10 rounded-2xl overflow-hidden">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-dark p-8 hover:bg-accent/5 transition-colors duration-300"
            >
              <service.icon size={22} className="text-accent mb-5" />
              <h3 className="font-heading text-xl font-semibold text-accent mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-light/50 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
