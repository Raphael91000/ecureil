import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const services = [
  'Élagage d\'arbres',
  'Abattage d\'arbres',
  'Taille de haies',
  'Entretien de jardin',
  'Création d\'espaces verts',
  'Débroussaillage',
  'Autre',
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  const inputClass =
    'w-full bg-white/10 border border-accent/20 rounded-xl px-5 py-3.5 text-light placeholder:text-light/40 font-body text-sm focus:outline-none focus:border-accent/60 transition-colors';

  return (
    <section id="contact" className="section-dark py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-accent/60 mb-4">
            Parlons de votre projet
          </p>
          <h2 className="font-heading text-5xl lg:text-6xl font-bold text-heading-dark">
            Contactez-{' '}
            <span className="italic font-light">nous</span>
          </h2>
          <p className="font-body text-light/60 mt-4 max-w-xl mx-auto leading-relaxed text-base">
            Un projet, une question ? Envoyez-nous un message ou appelez-nous directement. Nous vous répondons sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-accent mb-6">
                Nos coordonnées
              </h3>
              <div className="space-y-5">
                <a
                  href="tel:+33661006092"
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center group-hover:bg-accent/25 transition-colors flex-shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-light/50 uppercase tracking-wider mb-0.5">Téléphone</p>
                    <p className="font-body font-semibold text-accent">+33 6 61 00 60 92</p>
                  </div>
                </a>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-light/50 uppercase tracking-wider mb-0.5">Adresse</p>
                    <p className="font-body font-semibold text-light/80">32 La Grande Rue</p>
                    <p className="font-body text-sm text-light/60">27800 Boisney, France</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-light/50 uppercase tracking-wider mb-0.5">Horaires</p>
                    <p className="font-body font-semibold text-light/80">Lundi – Vendredi</p>
                    <p className="font-body text-sm text-light/60">9h00 – 17h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google fiche */}
            <a
              href="https://www.google.com/maps/place/Gaetan+espaces+verts/@49.1511952,0.6465913,17z/data=!3m1!4b1!4m6!3m5!1s0x47e1a703cb9c473d:0x49d21e51f212437a!8m2!3d49.1511952!4d0.6465913!16s%2Fg%2F11f54rdznp?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-accent/15 bg-white/5 px-6 py-5 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors">
                <MapPin size={20} className="text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-body text-xs text-light/50 uppercase tracking-wider mb-0.5">Fiche Google</p>
                <p className="font-body font-semibold text-accent text-sm">Voir notre fiche Google Maps</p>
                <p className="font-body text-xs text-light/40">Avis clients · Itinéraire · Horaires</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent/40 group-hover:text-accent transition-colors flex-shrink-0">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-accent/15 rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
                <CheckCircle size={56} className="text-accent" />
                <h3 className="font-heading text-2xl font-semibold text-accent">
                  Message envoyé !
                </h3>
                <p className="font-body text-sm text-light/60 max-w-xs">
                  Merci pour votre demande. Nous vous recontacterons dans les plus brefs délais.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                  className="text-xs font-body text-accent/60 hover:text-accent underline transition-colors mt-2"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs text-light/60 block mb-2 tracking-wide uppercase">
                      Nom complet *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-light/60 block mb-2 tracking-wide uppercase">
                      Téléphone
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="06 12 34 56 78"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs text-light/60 block mb-2 tracking-wide uppercase">
                    E-mail *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jean@exemple.fr"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="font-body text-xs text-light/60 block mb-2 tracking-wide uppercase">
                    Prestation souhaitée
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" className="bg-dark">Choisir une prestation</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-dark">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs text-light/60 block mb-2 tracking-wide uppercase">
                    Votre message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Décrivez votre projet, la localisation, les arbres concernés..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 bg-accent text-dark py-4 rounded-xl font-body font-semibold text-base hover:bg-light transition-all duration-300 disabled:opacity-70"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Envoyer ma demande
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
