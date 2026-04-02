import { Clock, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-8 h-8 text-amber-400" />
              <span className="text-xl font-bold text-white">TimeTravel Agency</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your premier gateway to temporal exploration. Licensed and certified by the International Temporal Authority.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Destinations</a></li>
              <li><a href="#booking" className="hover:text-amber-400 transition-colors">Book Now</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Time Paradox Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>info@timetravel.agency</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+1 (555) TIME-123</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Temporal Hub, Geneva</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-gray-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-gray-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-gray-900" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-500">Certified by:</p>
              <p className="text-sm text-amber-400 font-semibold">International Temporal Authority</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 TimeTravel Agency. All rights reserved across all timelines.
          </p>
        </div>
      </div>
    </footer>
  );
}
