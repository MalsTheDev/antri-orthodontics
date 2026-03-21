// No icons used for a cleaner, more professional feel

import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from '../components/SEO';

const Services = () => {
  const serviceList = [
    {
      id: 'digital-impression',
      title: 'Ψηφιακή Αποτύπωση',
      description: 'Ψηφιακή αποτύπωση στόματος με 3D scanner για μελέτη, ψηφιακά εκμαγεία και σχεδιασμό μετακίνησης δοντιών.',
      tags: ['3D Scanner', 'Τεχνολογία'],
      video: '/3d.webm'
    },
    {
      id: 'pediatric',
      title: 'Ορθοδοντική Παιδιών',
      description: 'Εξειδικευμένη φροντίδα για την ομαλή ανάπτυξη των δοντιών και των γνάθων στα παιδιά.',
      tags: ['8-12 ετών', 'Πρόληψη']
    },
    {
      id: 'adult',
      title: 'Ορθοδοντική Ενηλίκων',
      description: 'Σύγχρονες μέθοδοι για ενήλικες που επιθυμούν ένα τέλειο χαμόγελο σε κάθε ηλικία.',
      tags: ['Διακριτικότητα', 'Αποτελεσματικότητα']
    },
    {
      id: 'preventive',
      title: 'Προληπτική Ορθοδοντική',
      description: 'Έγκαιρη παρέμβαση για την αποφυγή σοβαρότερων προβλημάτων στο μέλλον.',
      tags: ['Σημαντικό', 'Νωρίς']
    },
    {
      id: 'invisalign',
      title: 'Invisalign',
      description: 'Η αόρατη εναλλακτική στα σιδεράκια. Διάφανοι νάρθηκες για απόλυτη άνεση.',
      tags: ['Αόρατο', 'Αφαιρούμενο']
    },
    {
      id: 'lingual',
      title: 'Lingual Orthodontics',
      description: 'Εσωτερικά σιδεράκια που δεν φαίνονται καθόλου εξωτερικά.',
      tags: ['100% Κρυφό']
    },
    {
      id: 'splints',
      title: 'Εξατομικευμένοι Νάρθηκες',
      description: 'Ειδικά σχεδιασμένοι νάρθηκες για προστασία και σταθεροποίηση του αποτελέσματος.',
      tags: ['Προσαρμοσμένο']
    }
  ];

  return (
    <div className="flex flex-col py-12 section-pattern">
      <SEO 
        title="Υπηρεσίες & Θεραπείες"
        description="Ολοκληρωμένες ορθοδοντικές υπηρεσίες: Invisalign, γλωσσική ορθοδοντική, σιδεράκια για παιδιά και ενήλικες, ψηφιακή αποτύπωση."
        url="/services"
        keywords="Invisalign Λαμία, σιδεράκια, γλωσσική ορθοδοντική, ψηφιακή αποτύπωση, ορθοδοντική παίδων"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">Υπηρεσίες & <span className="text-blue-500">Θεραπείες</span></h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Προσφέρουμε ένα πλήρες φάσμα ορθοδοντικών λύσεων, χρησιμοποιώντας τεχνολογία αιχμής για να εξασφαλίσουμε την άνεση και το καλύτερο δυνατό αποτέλεσμα.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceList.map((service) => (
            <div key={service.id} className={`group relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-blue-50 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 ${service.video ? 'lg:col-span-2 flex flex-col md:flex-row gap-8 items-center' : ''}`}>
              <div className="absolute inset-0 bg-linear-to-br from-white/70 via-white/40 to-transparent pointer-events-none" />

              {service.video && (
                <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-blue-100 bg-slate-100 order-1 md:order-2">
                  <video
                    src={service.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-blue-900/20 to-transparent pointer-events-none" />
                </div>
              )}

              <div className={`relative z-10 ${service.video ? 'w-full md:w-1/2 order-2 md:order-1' : ''}`}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-slate-100 text-slate-500 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-black text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* Tech Focus */}
        <div className="mt-32 p-12 rounded-3xl bg-blue-900 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Straight Wire Orthodontics</h2>
            <p className="text-blue-100/80 leading-relaxed mb-8">
              Η κλασική αλλά εξελιγμένη μέθοδος για απόλυτη ακρίβεια στις κινήσεις των δοντιών, εξασφαλίζοντας σταθερά και υγιή αποτελέσματα.
            </p>
            <Link to="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
              Συζητήστε με την Ιατρό
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
