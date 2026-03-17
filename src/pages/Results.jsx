import { ArrowRightLeft } from 'lucide-react';

const CaseCard = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-blue-50 shadow-md transition-all hover:shadow-xl">
      <div className="grid grid-cols-2 gap-0.5 bg-blue-100">
        <div className="relative h-62.5 md:h-87.5 overflow-hidden">
          <img
            src={item.before}
            alt="Πριν"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 py-2 bg-black/40 backdrop-blur-sm text-center">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Πριν</span>
          </div>
        </div>
        <div className="relative h-62.5 md:h-87.5 overflow-hidden">
          <img
            src={item.after}
            alt="Μετά"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 py-2 bg-blue-600/70 backdrop-blur-sm text-center">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Μετά</span>
          </div>
        </div>
      </div>

      <div className="p-8 bg-white border-t border-blue-50">
        <h3 className="text-xl font-bold text-blue-900 leading-tight">{item.title}</h3>
        <p className="text-[11px] font-black uppercase tracking-widest text-blue-400 mt-1">{item.category}</p>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">Ολοκληρωμένη Θεραπεία</span>
        </div>
      </div>
    </div>
  );
};

const Results = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Αποκατάσταση Σύγκλεισης',
      category: 'Ορθοδοντική Ενηλίκων',
      before: '/before-after/1before.jpg',
      after: '/before-after/1after.jpg'
    },
    {
      id: 2,
      title: 'Διόρθωση Συνωστισμού',
      category: 'Ορθοδοντική Παιδιών',
      before: '/before-after/2before.jpg',
      after: '/before-after/2after.jpg'
    },
    {
      id: 3,
      title: 'Κλείσιμο διαστημάτων μετά από εξαγωγές μονίμων δοντιών',
      category: 'Αισθητική Ορθοδοντική',
      before: '/before-after/3before.jpg',
      after: '/before-after/3after.jpg'
    },
    {
      id: 4,
      title: 'Ευθυγράμμιση Τόξου',
      category: 'Straight Wire Technique',
      before: '/before-after/4before.jpg',
      after: '/before-after/4after.jpg'
    },
    {
      id: 5,
      title: 'Βελτίωση Χαμόγελου',
      category: 'Invisalign',
      before: '/before-after/5before.jpg',
      after: '/before-after/5after.jpg'
    },
    {
      id: 6,
      title: 'Προληπτική Παρέμβαση',
      category: 'Προληπτική Ορθοδοντική',
      before: '/before-after/6before.jpg',
      after: '/before-after/6after.jpg'
    }
  ];

  return (
    <div className="flex flex-col py-12 md:py-24 bg-white section-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tight">
            Αποτελέσματα <span className="text-blue-500 underline decoration-blue-200 decoration-8 underline-offset-8">Θεραπειών</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto pt-4">
            Δείτε την εντυπωσιακή μεταμόρφωση των ασθενών μας μέσα από πραγματικά περιστατικά του ιατρείου.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {galleryItems.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>

        {/* <div className="mt-20 p-10 rounded-3xl border-2 border-dashed border-blue-100 bg-blue-50/30 text-center">
          <p className="text-sm text-blue-800 leading-relaxed font-semibold max-w-2xl mx-auto">
            * Σημείωση: Τα αποτελέσματα είναι ενδεικτικά και διαφέρουν ανάλογα με την ανατομία και τις ανάγκες κάθε ασθενούς.
            Επισκεφθείτε μας για μια δωρεάν πρώτη εκτίμηση.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Results;
