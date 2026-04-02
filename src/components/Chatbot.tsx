import { MessageCircle, X, Send } from 'lucide-react';
import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50 z-50 animate-slide-up">
          <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-gray-900" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Time Travel Assistant</h3>
                <p className="text-xs text-green-400">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 h-80 overflow-y-auto">
            <div className="bg-gray-700/50 rounded-lg p-3 mb-4">
              <p className="text-gray-300 text-sm">
                Welcome to TimeTravel Agency! How can I help you plan your journey through time today?
              </p>
            </div>
            <div className="text-center text-gray-500 text-xs">
              Ask me about destinations, safety protocols, or booking details
            </div>
          </div>

          <div className="p-4 border-t border-gray-700/50">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me about time travel..."
                className="flex-1 px-4 py-2 bg-gray-700/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 placeholder-gray-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    setMessage('');
                  }
                }}
              />
              <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-gray-900 rounded-lg hover:scale-105 transition-transform">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-amber-500 to-yellow-600 text-gray-900 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}
