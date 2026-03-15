import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white section-pattern pt-12 md:pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Εξειδικευμένη Ορθοδοντική</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 tracking-tight leading-none">
                Το χαμόγελό σας, η <span className="text-blue-500">προτεραιότητά μας.</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Στο ορθοδοντικό ιατρείο της Αντρή Α. Κοντοπούλου, προσφέρουμε σύγχρονες λύσεις για παιδιά και ενήλικες, συνδυάζοντας την επιστημονική αρτιότητα με την προσωπική φροντίδα.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-2xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
                >
                  Κλείστε Ραντεβού
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-blue-700 bg-white border border-blue-100 rounded-2xl hover:bg-blue-50 transition-all shadow-sm"
                >
                  Επικοινωνήστε μαζί μας
                </Link>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 lg:col-span-6 relative animate-fade-in-up">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-blue-50 transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/xwros/4.jpg"
                  alt="Modern Orthodontic Clinic"
                  className="w-full h-125 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Focus: Preventive Orthodontics */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">
            Προληπτική Ορθοδοντική: Το Κλειδί για ένα Υγιές Χαμόγελο
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Η πρώτη επίσκεψη στον ορθοδοντικό πρέπει να γίνεται στην ηλικία των 7 ετών. Η έγκαιρη διάγνωση μπορεί να προλάβει σοβαρά προβλήματα και να μειώσει τον χρόνο θεραπείας στο μέλλον.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Έγκαιρη Διάγνωση', desc: 'Εντοπισμός προβλημάτων ανατολής και σύγκλεισης.' },
              { title: 'Καθοδηγούμενη Ανάπτυξη', desc: 'Σωστή διαμόρφωση των γνάθων στα παιδιά.' },
              { title: 'Λιγότερες Εξαγωγές', desc: 'Μείωση της ανάγκης για μελλοντικές εξαγωγές δοντιών.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-blue-100 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-24 bg-white section-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
                Ολοκληρωμένες Υπηρεσίες
              </h2>
              <p className="text-gray-600">
                Χρησιμοποιούμε τις πλέον σύγχρονες τεχνικές για να σας προσφέρουμε το αποτέλεσμα που ονειρεύεστε.
              </p>
            </div>
            <Link to="/services" className="text-blue-600 font-bold hover:underline">
              Όλες οι υπηρεσίες
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Ορθοδοντική Παιδιών', 'Ορθοδοντική Ενηλίκων', 'Invisalign', 'Γλωσσική Ορθοδοντική'].map((service, idx) => (
              <div key={idx} className="group relative p-8 rounded-3xl bg-white/70 border border-blue-100 shadow-lg hover:shadow-2xl transition-all backdrop-blur-sm">
                <div className="absolute inset-0 bg-linear-to-br from-white/60 via-white/30 to-transparent pointer-events-none rounded-3xl" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{service}</h3>
                  <p className="text-sm text-gray-500">Εξειδικευμένες λύσεις προσαρμοσμένες στις ανάγκες σας.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">Τι λένε οι ασθενείς μας</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Πραγματικές κριτικές από ανθρώπους που εμπιστεύτηκαν την ορθοδοντική τους φροντίδα στην Ανθή Κοντοπούλου.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Βίκη Στογιά',
                when: 'πριν από 3 μήνες',
                rating: 5,
                text: 'Είχα την ευτυχία να συνεργαστώ με την εξαίρετη ορθοδοντικό κα Κοντοπούλου Αντρη, βάζοντας σιδεράκια στην κόρη μου, με άριστα αποτελέσματα. Εκτός από καταρτισμένη γιατρό, είχαμε και άψογη συνεργασία, γιατί πάνω από όλα ήταν Άνθρωπος. Την ευχαριστώ πολύ!!!!!'
              },
              {
                name: 'Βασιλική Γκόφη',
                when: 'πριν από 3 μήνες',
                rating: 5,
                text: 'Μόνο όποιος με γνώριζε από παλιά μπορεί να καταλάβει τη θεαματική διαφορά στα δόντια μου. Ο δρόμος ήταν δύσκολος αλλά ο προορισμός άξιζε. Η γιατρός πάντα με υποστήριζε και με καθοδηγούσε κι όταν έπρεπε με πίεζε για το καλό μου. Έδινε λύσεις.'
              },
              {
                name: 'Olga Papakosta',
                when: 'πριν από 4 μήνες',
                rating: 5,
                text: 'Η εμπειρία μου μετράει πολλά χρόνια πριν όταν ήμουν πολύ νέα.. συνεργάστηκα με την κ. Κοντοπούλου τοποθετώντας σιδεράκια ένα χρόνο πριν τον γάμο μου.. η συνεργασία ήταν άψογη.. κ βέβαια στα χρόνια που ήρθαν ακολούθησαν κ τα δύο μου παιδιά.. το αποτέλεσμα εξαιρετικό.. την συστήνω ανεπιφύλακτα.'
              }
            ].map((review) => (
              <div key={review.name} className="bg-white p-8 rounded-3xl shadow-sm border border-blue-50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-bold text-blue-900">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.when}</p>
                  </div>
                  <div className="text-sm font-semibold text-amber-500">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)} <span className="text-xs text-gray-400">{review.rating}/5</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
