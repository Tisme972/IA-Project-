import { Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Clock className="w-8 h-8 text-amber-400" />
            <span className="text-2xl font-bold text-white">TimeTravel Agency</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('destinations')}
              className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
            >
              Destinations
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
            >
              Book Now
            </button>
            <button
              onClick={() => scrollToSection('footer')}
              className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
