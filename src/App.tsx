import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Destinations />
      <Booking />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
