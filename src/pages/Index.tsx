
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ImageSection from '@/components/ImageSection';
import ServicesSection from '@/components/ServicesSection';
import SocialNetworksSection from '@/components/SocialNetworksSection';
import ProductCatalog from '@/components/ProductCatalog';
import TestimonialsSection from '@/components/TestimonialsSection';
import MapSection from '@/components/MapSection';
import ContactWithMap from '@/components/ContactWithMap';
import PaymentMethodsSection from '@/components/PaymentMethodsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full max-w-full">
        <HeroSection />
        <AboutSection />
        <ImageSection />
        <ServicesSection />
        <SocialNetworksSection />
        <ProductCatalog />
        <TestimonialsSection />
        <MapSection />
        <ContactWithMap />
        <PaymentMethodsSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
