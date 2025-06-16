
import Header from '@/components/Header';
import ProductsSection from '@/components/ProductsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductsSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Products;
