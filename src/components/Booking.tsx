import { Calendar, MapPin, Users, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    travelers: '1'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking submitted! Our team will contact you shortly to finalize your journey through time.');
  };

  return (
    <section id="booking" className="py-24 px-6 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-400">Select your destination and embark on the adventure of multiple lifetimes</p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center space-x-2 text-gray-300 mb-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>Destination</span>
              </label>
              <select
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 border border-gray-600/50"
                required
              >
                <option value="">Select a destination</option>
                <option value="paris-1889">Paris 1889 - Belle Époque</option>
                <option value="cretaceous">Cretaceous Period - Age of Dinosaurs</option>
                <option value="florence-1504">Florence 1504 - Renaissance</option>
                <option value="egypt-2560bc">Ancient Egypt - Great Pyramid Construction</option>
                <option value="moon-1969">Moon Landing 1969</option>
                <option value="future-2150">Future 2150 - Space Colonies</option>
              </select>
            </div>

            <div>
              <label className="flex items-center space-x-2 text-gray-300 mb-2">
                <Calendar className="w-5 h-5 text-amber-400" />
                <span>Departure Date</span>
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 border border-gray-600/50"
                required
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-gray-300 mb-2">
                <Users className="w-5 h-5 text-amber-400" />
                <span>Number of Travelers</span>
              </label>
              <select
                value={formData.travelers}
                onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 border border-gray-600/50"
                required
              >
                <option value="1">1 Traveler</option>
                <option value="2">2 Travelers</option>
                <option value="3">3 Travelers</option>
                <option value="4">4 Travelers</option>
                <option value="5">5+ Travelers</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-gray-900 font-bold rounded-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-amber-500/50 flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Request Booking</span>
            </button>
          </form>

          <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
            <p className="text-amber-400 text-sm text-center">
              All bookings are subject to temporal authorization and paradox prevention protocols
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
