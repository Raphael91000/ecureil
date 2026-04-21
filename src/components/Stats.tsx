import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  { value: 850, suffix: '+', label: 'Jardins réalisés', description: "Chaque espace unique, traité avec soin et expertise" },
  { value: 15, suffix: 'ans', label: "D'expérience", description: "Un savoir-faire transmis et perfectionné au fil des ans" },
  { value: 98, suffix: '%', label: 'Clients satisfaits', description: "La qualité de notre travail parle d'elle-même" },
  { value: 60, suffix: '+', label: 'Espèces maîtrisées', description: "Des feuillus aux résineux, nous connaissons vos arbres" },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, duration, start]);

  return count;
}

function StatCard({ stat, animate }: { stat: StatItem; animate: boolean }) {
  const count = useCountUp(stat.value, 1800, animate);

  return (
    <div className="text-center px-6 py-10 group">
      <div className="flex items-end justify-center gap-1 mb-3">
        <span className="font-heading text-7xl font-bold text-dark leading-none">
          {count}
        </span>
        <span className="font-heading text-3xl font-semibold text-dark/60 mb-3">
          {stat.suffix}
        </span>
      </div>
      <h3 className="font-body text-sm font-700 tracking-widest uppercase text-dark mb-2">
        {stat.label}
      </h3>
      <p className="font-body text-xs text-dark/60 max-w-[160px] mx-auto leading-relaxed">
        {stat.description}
      </p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="section-light py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-dark/50 mb-4">
            Nos chiffres
          </p>
          <h2 className="font-heading text-5xl lg:text-6xl font-bold text-heading-light">
            Des résultats qui{' '}
            <span className="italic font-light">parlent</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-dark/10 border border-dark/10 rounded-2xl overflow-hidden">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}
