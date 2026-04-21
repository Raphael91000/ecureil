import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Quelle est la meilleure période pour élaguer les arbres ?',
    answer: 'La période idéale dépend de l\'essence de l\'arbre. En règle générale, l\'élagage se pratique en dehors des périodes de fortes chaleurs et de gel, soit au printemps (après la feuillaison) ou en automne. Certains arbres comme les chênes ne doivent pas être taillés en période de sève montante. Nous vous conseillons lors de la visite sur site.',
  },
  {
    question: 'Êtes-vous assurés pour les travaux en hauteur ?',
    answer: 'Oui, Ecureil Elagage est entièrement couvert par une assurance responsabilité civile professionnelle adaptée aux travaux d\'élagage et d\'abattage. Nous pouvons vous fournir une attestation d\'assurance à tout moment sur demande.',
  },
  {
    question: 'Le devis est-il gratuit ?',
    answer: 'Absolument. Notre devis est toujours gratuit et sans engagement. Nous nous déplaçons sur place pour évaluer le chantier, vous conseiller et vous remettre une offre détaillée. Aucune mauvaise surprise sur la facture finale.',
  },
  {
    question: 'Que faites-vous des déchets verts après les travaux ?',
    answer: 'Nous assurons l\'évacuation complète des déchets verts (branches, troncs, feuilles) vers des filières de valorisation agréées. Le bois peut également être broyé sur place (broyat) et utilisé comme paillis dans votre jardin, selon votre préférence. Le chantier est laissé propre.',
  },
  {
    question: 'Intervenez-vous en cas d\'urgence (arbre tombé, tempête) ?',
    answer: 'Oui, nous proposons une intervention urgente pour les situations dangereuses : arbre tombé sur une habitation, branches menaçant une route ou une ligne électrique. Contactez-nous directement par téléphone pour une réponse rapide.',
  },
  {
    question: 'Dans quelle zone géographique intervenez-vous ?',
    answer: 'Nous intervenons principalement en Haute-Vienne (87) et dans les départements voisins de la Creuse et de la Corrèze. Pour les chantiers importants, nous pouvons nous déplacer sur une zone plus large. N\'hésitez pas à nous contacter pour en discuter.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-dark/15 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span className="font-heading text-sm font-semibold text-dark/30 w-6 flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-body font-semibold text-dark group-hover:text-dark/80 transition-colors text-base">
            {faq.question}
          </span>
        </div>
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-dark/20 flex items-center justify-center transition-all duration-300 group-hover:bg-dark/5">
          {open ? <Minus size={14} className="text-dark" /> : <Plus size={14} className="text-dark" />}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-400 ${
          open ? 'max-h-64 pb-6' : 'max-h-0'
        }`}
      >
        <p className="font-body text-sm text-dark/60 leading-relaxed pl-10">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-light py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-dark/50 mb-4">
            Questions fréquentes
          </p>
          <h2 className="font-heading text-5xl lg:text-6xl font-bold text-heading-light">
            Vous avez{' '}
            <span className="italic font-light">des questions ?</span>
          </h2>
          <p className="font-body text-dark/60 mt-4 max-w-xl mx-auto leading-relaxed text-base">
            Retrouvez les réponses aux questions les plus courantes. Pour tout autre renseignement, n'hésitez pas à nous appeler.
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-dark/10 px-8 py-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
