import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 360);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-lg text-white bg-gradient-to-br from-blue-600 to-cyan-500 transition-transform duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-blue-200/60 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
