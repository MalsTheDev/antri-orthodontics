import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Ευχαριστούμε για το μήνυμά σας! Θα επικοινωνήσουμε μαζί σας σύντομα.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col py-24 bg-white section-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">Επικοινωνήστε <span className="text-blue-500">μαζί μας</span></h1>
          <p className="text-lg text-gray-500">
            Είμαστε εδώ για να απαντήσουμε σε κάθε σας ερώτηση και να προγραμματίσουμε το επόμενο ραντεβού σας.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-blue-900 uppercase text-sm tracking-widest">Λαμία</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Καποδιστρίου 16<br />Τηλ: <a href="tel:2231051127" className="font-bold hover:text-blue-600">22310 51127</a>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-blue-900 uppercase text-sm tracking-widest">Μακρακώμη</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Πλ. Δημοκρατίας 3<br />Τηλ: <a href="tel:2236023934" className="font-bold hover:text-blue-600">22360 23934</a>
                </p>
              </div>
            </div>

            <div className="space-y-8 pt-8 border-t border-slate-100">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-slate-50 rounded-2xl text-blue-500 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest mb-1">Ωράριο Λειτουργίας</h4>
                  <p className="text-gray-600">Δευτέρα – Παρασκευή: 14:30 – 21:00</p>
                  <p className="text-gray-400 text-sm italic">Σάββατο & Κυριακή: Κλειστά</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 bg-slate-50 rounded-2xl text-blue-500 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest mb-1">Email</h4>
                  <a href="mailto:acontop@gmail.com" className="text-blue-600 font-bold hover:underline">acontop@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Placeholder for Map */}
            <div className="aspect-video w-full rounded-3xl border border-blue-50 flex items-center justify-center relative overflow-hidden shadow-inner bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2040.9738997046024!2d22.434367932228266!3d38.90060496106594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135f51bfc376f0d1%3A0x9ddac5f808f1f6cd!2zzprOn86dzqTOn86gzp_Opc6bzp_OpSDOkc6dzqTOoc6XIC0gzpXOmc6UzpnOms6fzqMgzp_Ooc6Yzp_OlM6fzp3OpM6ZzprOn86jIM6bzpHOnM6ZzpE!5e0!3m2!1sel!2sgr!4v1773591004737!5m2!1sel!2sgr"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
                className='w-full h-full'
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-blue-50 relative">
            <div className="absolute top-0 right-0 p-8 text-blue-50 opacity-10">
              <Send className="w-40 h-40 transform -rotate-12" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-blue-900 mb-8">Στείλτε μας ένα μήνυμα</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Όνομα</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400"
                    placeholder="Πώς σας λένε;"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Τηλέφωνο</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400"
                      placeholder="Π.χ. 22310..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Μήνυμα</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400"
                    placeholder="Πώς μπορούμε να βοηθήσουμε;"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                  ΑΠΟΣΤΟΛΗ
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
