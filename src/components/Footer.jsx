import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-blue-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand/About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-900 uppercase tracking-wider">
              ΚΟΝΤΟΠΟΥΛΟΥ ΑΝΤΡΗ
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Εξειδικευμένο ορθοδοντικό ιατρείο για παιδιά και ενήλικες. Στόχος μας είναι το ομορφότερο χαμόγελό σας με τις πιο σύγχρονες μεθόδους.
            </p>
          </div>

          {/* Lamia Clinic */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-blue-600 uppercase">ΙΑΤΡΕΙΟ ΛΑΜΙΑΣ</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-blue-500 shrink-0 mt-0.5" />
                <span>Καποδιστρίου 16, Λαμία</span>
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                <a href="tel:2231051127" className="hover:text-blue-600">22310 51127</a>
              </li>
            </ul>
          </div>

          {/* Makrakomi Clinic */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-blue-600 uppercase">ΙΑΤΡΕΙΟ ΜΑΚΡΑΚΩΜΗΣ</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-blue-500 shrink-0 mt-0.5" />
                <span>Πλ. Δημοκρατίας 3, Μακρακώμη</span>
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                <a href="tel:2236023934" className="hover:text-blue-600">22360 23934</a>
              </li>
            </ul>
          </div>

          {/* Hours & Email */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-blue-600 uppercase">ΕΠΙΚΟΙΝΩΝΙΑ</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 text-sm">
                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                <span>Δε-Πα: 14:30 – 21:00</span>
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <Mail className="w-4 h-4 mr-2 text-blue-500" />
                <a href="mailto:acontop@gmail.com" className="hover:text-blue-600">acontop@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-blue-100 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <span className="text-sm text-gray-500">Θέλετε να κλείσετε ραντεβού;</span>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Επικοινωνήστε τώρα
            </a>
          </div>
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Ανθή Α. Κοντροπούλου. Mε επιφύλαξη παντός δικαιώματος.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
