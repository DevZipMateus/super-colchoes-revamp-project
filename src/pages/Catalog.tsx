
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Catalog = () => {
  const products = [
    {
      id: 1,
      name: "Colchão Premium com Base",
      description: "Colchão de alta qualidade com base moderna, ideal para quartos contemporâneos.",
      image: "/lovable-uploads/b164854d-8791-4e19-a096-161109fab2ed.png"
    },
    {
      id: 2,
      name: "Colchões Castor Embalados",
      description: "Linha completa de colchões Castor com embalagem protetora, garantindo qualidade e higiene.",
      image: "/lovable-uploads/7ca22c37-9491-430e-9316-2082153f8c53.png"
    },
    {
      id: 3,
      name: "Conjunto Sofá e Poltrona",
      description: "Conjunto confortável de sofá e poltrona em couro sintético, perfeito para salas de estar.",
      image: "/lovable-uploads/ac1fdbd5-6d36-4fb4-9d34-07eed80a2ece.png"
    },
    {
      id: 4,
      name: "Colchão Castor Decorativo",
      description: "Colchão com design elegante e acabamento diferenciado da marca Castor.",
      image: "/lovable-uploads/3454c7b6-72de-4195-abee-c7114a53d681.png"
    },
    {
      id: 5,
      name: "Colchão com Tecnologia Avançada",
      description: "Colchão com tecnologia de ponta, oferecendo máximo conforto e suporte para o corpo.",
      image: "/lovable-uploads/b1841956-fcda-497a-b674-719a06586e4b.png"
    },
    {
      id: 6,
      name: "Colchão Ortopédico Premium",
      description: "Colchão ortopédico com design especial para proporcionar melhor qualidade do sono.",
      image: "/lovable-uploads/7ecfcfe2-e8a0-4f1d-8d36-79f29ce33450.png"
    },
    {
      id: 7,
      name: "Travesseiro Infantil Koala",
      description: "Travesseiro especial para crianças com design divertido e materiais hipoalergênicos.",
      image: "/lovable-uploads/4ea5bcb1-68d1-4c8e-bf38-6f2fd561cdbd.png"
    },
    {
      id: 8,
      name: "Colchão Padrão Floral",
      description: "Colchão com estampa floral delicada, combinando conforto e beleza para o quarto.",
      image: "/lovable-uploads/58a4ef51-b8f8-483a-bf2a-e169548674db.png"
    },
    {
      id: 9,
      name: "Colchão Box Premium",
      description: "Colchão tipo box com excelente suporte e durabilidade, ideal para uso diário.",
      image: "/lovable-uploads/57d21732-6c5c-4a1c-bf8f-74c9ae6029f1.png"
    },
    {
      id: 10,
      name: "Conjunto Castor Completo",
      description: "Conjunto completo da marca Castor com colchão, travesseiros e acessórios coordenados.",
      image: "/lovable-uploads/46370e64-de6f-4bfe-b37c-27aa129eb636.png"
    }
  ];

  const handleWhatsAppClick = (productName: string) => {
    const phoneNumber = "5555991630055";
    const message = `Olá! Gostaria de solicitar um orçamento para o produto: ${productName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link 
                to="/" 
                className="inline-flex items-center text-red-600 hover:text-red-700 mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao início
              </Link>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Catálogo <span className="text-red-600">Completo</span>
              </h1>
              <p className="text-xl text-gray-600 mt-4">
                Todos os nossos produtos para o seu conforto e bem-estar
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardHeader className="p-0">
                  <div className="bg-gray-100 h-48 rounded-t-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 space-y-3 flex-1">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-[3rem]">
                    {product.name}
                  </h3>
                  
                  {/* Espaço para descrição editável */}
                  <div className="min-h-[4rem] p-3 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                    <p className="text-gray-600 text-sm italic">
                      {product.description}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      * Descrição editável manualmente
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => handleWhatsAppClick(product.name)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
