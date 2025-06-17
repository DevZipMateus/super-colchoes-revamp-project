
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PromoImageSection from '@/components/PromoImageSection';
import AboutSection from '@/components/AboutSection';
import ImageSection from '@/components/ImageSection';
import ServicesSection from '@/components/ServicesSection';
import ProductCatalog from '@/components/ProductCatalog';
import TestimonialsSection from '@/components/TestimonialsSection';
import MapSection from '@/components/MapSection';
import ContactWithMap from '@/components/ContactWithMap';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PromoImageSection />
        <AboutSection />
        <ImageSection />
        <ServicesSection />
        <ProductCatalog />
        <TestimonialsSection />
        <MapSection />
        <ContactWithMap />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
