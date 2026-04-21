import { Scissors, TreePine, Wind, Shovel, Sprout, Shield } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    icon: Scissors,
    title: 'Élagage d\'arbres',
    description: 'Taille raisonnée et respectueuse de la physiologie de l\'arbre. Nous intervenons en hauteur pour alléger la couronne, supprimer les branches mortes et équilibrer la silhouette.',
    image: 'https://images.pexels.com/photos/1423580/pexels-photo-1423580.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: TreePine,
    title: 'Abattage d\'arbres',
    description: 'Abattage sécurisé, avec ou sans contraintes. Techniques d\'abattage directionnel ou par démontage en hauteur pour les arbres en zones contraintes.',
    image: 'https://images.pexels.com/photos/1093467/pexels-photo-1093467.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Wind,
    title: 'Taille de haies',
    description: 'Taille précise et régulière de vos haies, buis, charmilles et arbustes ornementaux. Un travail soigné pour des bordures nettes et une végétation saine.',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Shovel,
    title: 'Entretien de jardins',
    description: 'Désherbage, débroussaillage, tonte et remise en état de jardins. Nous prenons en charge l\'entretien régulier de votre espace vert pour qu\'il reste impeccable toute l\'année.',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Sprout,
    title: 'Création d\'espaces verts',
    description: 'Aménagement paysager sur mesure : plantation d\'arbres et arbustes, création de massifs, pose de gazon ou engazonnement pour sublimer votre propriété.',
    image: 'https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Shield,
    title: 'Débroussaillage',
    description: 'Intervention rapide pour nettoyer les terrains envahis par la végétation. Respect des obligations légales de débroussaillement (OPF) pour protéger votre propriété.',
    image: 'https://images.pexels.com/photos/4505170/pexels-photo-4505170.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-dark py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-accent/60 mb-4">
            Ce que nous faisons
          </p>
          <h2 className="font-heading text-5xl lg:text-6xl font-bold text-heading-dark">
            Nos{' '}
            <span className="italic font-light">prestations</span>
          </h2>
          <p className="font-body text-light/60 mt-4 max-w-xl mx-auto leading-relaxed text-base">
            Des interventions professionnelles pour tous vos projets paysagers,
            réalisées avec le matériel adapté et dans le respect de votre environnement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-accent/10 hover:border-accent/30 transition-all duration-500 bg-light/5"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                {/* Icon */}
                <div className="absolute bottom-4 left-5 w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                  <service.icon size={18} className="text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-accent mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-light/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
