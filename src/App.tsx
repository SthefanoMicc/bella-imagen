import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import TrendsCarousel from '@/components/TrendsCarousel';
import BookingForm from '@/components/BookingForm';
import LocationContact from '@/components/LocationContact';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';
import WhatsAppFloatButton from '@/components/WhatsAppFloatButton';

function App() {
  return (
    <div className="min-h-screen bg-white font-body text-ink-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <TrendsCarousel />
        <BookingForm />
        <LocationContact />
        <Reviews />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}

export default App;
