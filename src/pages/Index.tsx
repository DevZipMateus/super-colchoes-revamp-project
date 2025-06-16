
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import ContactWithMap from '@/components/ContactWithMap';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutSection />
        <ContactWithMap />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
