import DestinationCard from './DestinationCard';
import { useEffect, useRef, useState } from 'react';

const destinations = [
  {
    title: 'Paris 1889',
    period: '19th Century',
    description: 'Witness the unveiling of the Eiffel Tower during the Exposition Universelle. Experience the elegance of the Belle Époque era.',
    imageUrl: 'https://images.pexels.com/photos/2082949/pexels-photo-2082949.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: 'Eiffel Tower • Belle Époque • Art Nouveau'
  },
  {
    title: 'Cretaceous Period',
    period: '65 Million Years Ago',
    description: 'Journey to the age of dinosaurs. Observe magnificent creatures in their natural habitat during Earth\'s most dramatic era.',
    imageUrl: 'https://images.pexels.com/photos/17811/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    highlights: 'Dinosaurs • Prehistoric World • Ancient Earth'
  },
  {
    title: 'Florence 1504',
    period: 'Renaissance',
    description: 'Walk the streets of Renaissance Florence. Meet Michelangelo as he completes the David, and witness the birth of modern art.',
    imageUrl: 'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: 'Michelangelo • Renaissance Art • Italian Masters'
  }
];

export default function Destinations() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="destinations"
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">Destinations</span>
          </h2>
          <p className="text-xl text-gray-400">Choose your era, live the adventure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <DestinationCard {...dest} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
