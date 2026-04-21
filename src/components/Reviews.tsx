import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Marie-Claire B.',
    location: 'Saint-Laurent-les-Églises',
    rating: 5,
    text: 'Travail remarquable ! L\'équipe est venue élaguer nos vieux chênes en périphérie de la maison. Résultat impeccable, chantier laissé propre. Je recommande sans hésiter Ecureil Elagage.',
    date: 'Octobre 2024',
    avatar: 'M',
  },
  {
    name: 'Jean-Pierre M.',
    location: 'Limoges',
    rating: 5,
    text: 'Devis rapide, intervention dans les délais, prix très correct. Nos haies de thuyas n\'avaient jamais été aussi belles. Professionnels du début à la fin.',
    date: 'Septembre 2024',
    avatar: 'J',
  },
  {
    name: 'Sophie D.',
    location: 'Ambazac',
    rating: 5,
    text: 'Abattage d\'un grand pin trop proche de la maison réalisé avec une précision remarquable. L\'équipe a travaillé en toute sécurité malgré la difficulté du chantier. Parfait.',
    date: 'Août 2024',
    avatar: 'S',
  },
  {
    name: 'François T.',
    location: 'Châteauneuf-la-Forêt',
    rating: 5,
    text: 'Excellente entreprise ! Entretien annuel de notre jardin confié à Ecureil Elagage depuis 3 ans. Sérieux, ponctuel et passionné par leur métier.',
    date: 'Juillet 2024',
    avatar: 'F',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-accent fill-accent' : 'text-accent/30'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="avis" className="section-dark py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-accent/60 mb-4">
            Témoignages
          </p>
          <h2 className="font-heading text-5xl lg:text-6xl font-bold text-heading-dark">
            Ce que disent{' '}
            <span className="italic font-light">nos clients</span>
          </h2>
          <p className="font-body text-light/60 mt-4 max-w-xl mx-auto leading-relaxed text-base">
            La satisfaction de nos clients est notre plus belle récompense. Voici ce qu'ils partagent de leur expérience avec Ecureil Elagage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="relative bg-light/5 border border-accent/10 rounded-2xl p-8 hover:border-accent/30 transition-colors"
            >
              <Quote
                size={36}
                className="text-accent/20 absolute top-6 right-6"
              />

              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-heading text-lg font-semibold text-accent flex-shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-body font-semibold text-accent text-sm">{review.name}</p>
                  <p className="font-body text-xs text-light/50">{review.location}</p>
                </div>
              </div>

              <StarRating rating={review.rating} />

              <p className="font-body text-sm text-light/70 leading-relaxed mt-4 mb-5">
                "{review.text}"
              </p>

              <p className="font-body text-xs text-light/40 tracking-wide">{review.date}</p>
            </div>
          ))}
        </div>

        {/* Average rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-accent/10 border border-accent/20 rounded-full px-8 py-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="text-accent fill-accent" />
              ))}
            </div>
            <span className="font-heading text-2xl font-bold text-accent">5.0</span>
            <span className="font-body text-sm text-light/60">· Note moyenne · 120+ avis</span>
          </div>
        </div>
      </div>
    </section>
  );
}
