
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductCatalog from '@/components/ProductCatalog';
import ContactWithMap from '@/components/ContactWithMap';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductCatalog />
        <ContactWithMap />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
