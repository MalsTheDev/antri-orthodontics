import { MapPinned, X } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

const Clinic = () => {
  const [lightbox, setLightbox] = useState(null);

  const closeLightbox = () => setLightbox(null);

  const images = ['/xwros/1.jpg', '/xwros/2.jpg', '/xwros/3.jpg', '/xwros/4.jpg'];

  return (
    <div className="flex flex-col section-pattern">
      <SEO 
        title="Το Ιατρείο μας"
        description="Γνωρίστε την ορθοδοντικό Άντρη Κοντοπούλου και περιηγηθείτε στους σύγχρονους χώρους των ιατρείων μας σε Λαμία και Μακρακώμη."
        url="/clinic"
      />
      {/* Doctor Section */}
      <section className="pt-12 md:pt-24 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-blue-50 h-125">
                <img
                  src="/doctor.jpg"
                  alt="Clinic interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 md:-right-6 bg-blue-600 text-white p-4 md:p-8 rounded-2xl shadow-xl max-w-70">
                <div className="text-sm font-bold uppercase tracking-widest mb-1">Δρ. ΚΟΝΤΟΠΟΥΛΟΥ</div>
                <div className="text-2xl font-black">ΑΝΤΡΗ</div>
                <div className="mt-2 pt-2 md:mt-4 md:pt-4 border-t border-blue-500/30 text-xs font-medium opacity-80">
                  Ειδική Ορθοδοντικός (MS)
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest">
                Η Ορθοδοντικός μας
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
                Επιστημονική Κατάρτιση & <span className="text-blue-500">Προσωπική Φροντίδα</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Η Δρ. Κοντοπούλου Άντρη συνδυάζει μακροχρόνια εκπαίδευση με εξατομικευμένη προσέγγιση, προσφέροντας ασφαλή και σύγχρονη ορθοδοντική φροντίδα.
              </p>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-blue-50">
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    <span className="font-semibold text-blue-900">1989–1995</span> – Οδοντιατρική Σχολή, Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης
                    <br />
                    <span className="font-semibold text-blue-900">1996–1999</span> – Ορθοδοντική, Semmelweis University (Tel Aviv, Ισραήλ)
                    <br />
                    <span className="font-semibold text-blue-900">1999–Σήμερα</span> – Ιδιωτικό ιατρείο στη Λαμία (παιδιά & ενήλικες)
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-blue-50">
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Η πολιτική του ιατρείου μας είναι η παροχή υψηλού επιπέδου εξατομικευμένης θεραπείας, εστιασμένη στην ασφάλεια και στην επιστημονική τεκμηρίωση.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Εφαρμόζουμε σύγχρονες μεθόδους με στόχο το καλύτερο αποτέλεσμα για κάθε ασθενή.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Ο Χώρος μας</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Τα ιατρεία μας στη Λαμία και τη Μακρακώμη είναι εξοπλισμένα με τεχνολογία αιχμής, δημιουργώντας ένα ευχάριστο και ασφαλές περιβάλλον για εσάς.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setLightbox(img)}
                className="relative rounded-3xl overflow-hidden shadow-xl group h-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                <img
                  src={img}
                  alt={`Clinic view ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/25 via-transparent to-transparent" />
              </button>
            ))}
          </div>

          {lightbox && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              role="dialog"
              aria-modal="true"
              onClick={closeLightbox}
            >
              <button
                type="button"
                className="absolute top-6 right-6 text-white bg-black/40 rounded-full p-2 hover:bg-black/60 focus:outline-none focus:ring-4 focus:ring-blue-300"
                onClick={closeLightbox}
                aria-label="Close image"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={lightbox}
                alt="Clinic view full"
                className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl"
              />
            </div>
          )}

          <div className="mt-16 flex flex-col md:flex-row justify-center gap-12">
            <div className="flex items-center gap-4">
              <MapPinned className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-blue-900">Λαμία</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPinned className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-blue-900">Μακρακώμη</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clinic;
