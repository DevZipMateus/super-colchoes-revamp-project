
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PromoImageSection from '@/components/PromoImageSection';
import AboutSection from '@/components/AboutSection';
import ImageSection from '@/components/ImageSection';
import ServicesSection from '@/components/ServicesSection';
import SocialNetworksSection from '@/components/SocialNetworksSection';
import ProductCatalog from '@/components/ProductCatalog';
import TestimonialsSection from '@/components/TestimonialsSection';
import MapSection from '@/components/MapSection';
import ContactWithMap from '@/components/ContactWithMap';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PromoImageSection />
        <AboutSection />
        <ImageSection />
        <ServicesSection />
        <SocialNetworksSection />
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
