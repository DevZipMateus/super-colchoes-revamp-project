import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { MessageCircle, ArrowLeft, Edit2, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const Catalog = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Colchão Premium com Base",
      description: "Colchão de alta qualidade com base moderna, ideal para quartos contemporâneos.",
      image: "/lovable-uploads/b164854d-8791-4e19-a096-161109fab2ed.png"
    }, {
      id: 2,
      name: "Colchões Castor Embalados",
      description: "Linha completa de colchões Castor com embalagem protetora, garantindo qualidade e higiene.",
      image: "/lovable-uploads/7ca22c37-9491-430e-9316-2082153f8c53.png"
    }, {
      id: 3,
      name: "Conjunto Sofá e Poltrona",
      description: "Conjunto confortável de sofá e poltrona em couro sintético, perfeito para salas de estar.",
      image: "/lovable-uploads/ac1fdbd5-6d36-4fb4-9d34-07eed80a2ece.png"
    }, {
      id: 4,
      name: "Colchão Castor Decorativo",
      description: "Colchão com design elegante e acabamento diferenciado da marca Castor.",
      image: "/lovable-uploads/3454c7b6-72de-4195-abee-c7114a53d681.png"
    }, {
      id: 5,
      name: "Colchão com Tecnologia Avançada",
      description: "Colchão com tecnologia de ponta, oferecendo máximo conforto e suporte para o corpo.",
      image: "/lovable-uploads/b1841956-fcda-497a-b674-719a06586e4b.png"
    }, {
      id: 6,
      name: "Colchão Ortopédico Premium",
      description: "Colchão ortopédico com design especial para proporcionar melhor qualidade do sono.",
      image: "/lovable-uploads/7ecfcfe2-e8a0-4f1d-8d36-79f29ce33450.png"
    }, {
      id: 7,
      name: "Travesseiro Infantil Koala",
      description: "Travesseiro especial para crianças com design divertido e materiais hipoalergênicos.",
      image: "/lovable-uploads/4ea5bcb1-68d1-4c8e-bf38-6f2fd561cdbd.png"
    }, {
      id: 8,
      name: "Colchão Padrão Floral",
      description: "Colchão com estampa floral delicada, combinando conforto e beleza para o quarto.",
      image: "/lovable-uploads/58a4ef51-b8f8-483a-bf2a-e169548674db.png"
    }, {
      id: 9,
      name: "Colchão Box Premium",
      description: "Colchão tipo box com excelente suporte e durabilidade, ideal para uso diário.",
      image: "/lovable-uploads/57d21732-6c5c-4a1c-bf8f-74c9ae6029f1.png"
    }, {
      id: 10,
      name: "Conjunto Castor Completo",
      description: "Conjunto completo da marca Castor com colchão, travesseiros e acessórios coordenados.",
      image: "/lovable-uploads/46370e64-de6f-4bfe-b37c-27aa129eb636.png"
    }, {
      id: 11,
      name: "Colchão de Molas Ensacadas Individual - Modelo Branco",
      description: "Colchão com sistema de molas ensacadas individuais para máximo conforto e durabilidade.",
      image: "/lovable-uploads/f4a70ba3-652e-4872-b100-37b5db3ff1cb.png"
    }, {
      id: 12,
      name: "Colchão de Molas Ensacadas Individual - Modelo Preto",
      description: "Colchão com molas ensacadas individuais em design elegante preto e branco.",
      image: "/lovable-uploads/8b1ca3c8-d048-435f-b55e-b77d646a19c2.png"
    }, {
      id: 13,
      name: "Colchão de Molas Ensacadas Individual - Design Moderno",
      description: "Colchão com tecnologia de molas ensacadas para quarto com design contemporâneo.",
      image: "/lovable-uploads/63ff3097-9a4d-4789-9c3d-3a63cd97ee90.png"
    }, {
      id: 14,
      name: "Poltrona Reclinável de Couro",
      description: "Poltrona reclinável em couro sintético com sistema de relaxamento total.",
      image: "/lovable-uploads/4e39cad8-4d1c-4609-bf1e-06a1ffec10e4.png"
    }, {
      id: 15,
      name: "Travesseiro Real Látex",
      description: "Travesseiro em látex natural com espuma de látex para máximo conforto cervical.",
      image: "/lovable-uploads/7c24a28f-f6f9-4574-b21f-8481c9a7c407.png"
    }, {
      id: 16,
      name: "Colchão Branco Premium",
      description: "Colchão em tecido branco com design clean e materiais de alta qualidade.",
      image: "/lovable-uploads/83dc868b-773d-47af-855b-d83f477de236.png"
    }, {
      id: 17,
      name: "Colchão Decorativo com Estampa",
      description: "Colchão com estampa decorativa elegante, ideal para quartos sofisticados.",
      image: "/lovable-uploads/abddb981-a25c-4b71-aff7-af9ad8cc86c9.png"
    }, {
      id: 18,
      name: "Colchão Hauzestern Premium",
      description: "Colchão da marca Hauzestern com tecnologia avançada e design moderno.",
      image: "/lovable-uploads/0683a887-4f66-4c1a-b2c0-55dc01ce3bd0.png"
    }, {
      id: 19,
      name: "Colchão com Padrão Decorativo",
      description: "Colchão com belo padrão decorativo em relevo, combinando estilo e conforto.",
      image: "/lovable-uploads/c753105f-cf2b-464a-8a76-695055f94042.png"
    }, {
      id: 20,
      name: "Colchão Hauzestern Showroom",
      description: "Colchão premium da linha Hauzestern com design exclusivo para showroom.",
      image: "/lovable-uploads/774777ab-fc8e-4a4e-b795-c552d30e679f.png"
    }, {
      id: 21,
      name: "Colchão de Espuma Tradicional",
      description: "Colchão de espuma de alta densidade com acabamento tradicional em cinza.",
      image: "/lovable-uploads/86827002-069e-4585-b304-2a37bef41c73.png"
    }, {
      id: 22,
      name: "Conjunto Box com Cama Auxiliar",
      description: "Conjunto box completo com cama auxiliar deslizante, ideal para quartos de hóspedes.",
      image: "/lovable-uploads/ad8fbd13-ddaa-440a-8b9d-8cc4cecf8990.png"
    }, {
      id: 23,
      name: "Sofá-Cama Retrátil",
      description: "Sofá-cama em couro sintético com sistema retrátil e colchão confortável.",
      image: "/lovable-uploads/86de7038-061a-4374-b659-771e4789d4fc.png"
    }, {
      id: 24,
      name: "Box Baú Branco Compacto",
      description: "Base box baú em branco com sistema de abertura facilitada para armazenamento.",
      image: "/lovable-uploads/a7bc33a7-a2aa-40fe-a405-c97e01e87fba.png"
    }, {
      id: 25,
      name: "Box Baú Escuro com Sistema Hidráulico",
      description: "Box baú em tecido escuro com sistema hidráulico para maior durabilidade e facilidade de uso.",
      image: "/lovable-uploads/5427d1b7-3879-4911-acd5-92df35aadd35.png"
    }, {
      id: 26,
      name: "Poltrona Reclinável Bege",
      description: "Poltrona reclinável em couro sintético bege com mecanismo de relaxamento avançado.",
      image: "/lovable-uploads/acfcb05f-00a7-4b08-a338-ca8874b927ad.png"
    }, {
      id: 27,
      name: "Colchão de Molas Ensacadas Individuais Premium",
      description: "Colchão branco com sistema de molas ensacadas individuais e tecnologia avançada de conforto.",
      image: "/lovable-uploads/a6d06699-4209-4b0b-b13c-7ba9664879f2.png"
    }
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [tempValue, setTempValue] = useState("");

  const handleWhatsAppClick = (productName: string) => {
    const phoneNumber = "5555991630055";
    const message = `Olá! Gostaria de solicitar um orçamento para o produto: ${productName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const startEditing = (id: number, currentValue: string) => {
    setEditingId(id);
    setTempValue(currentValue);
  };

  const saveEdit = (id: number) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, description: tempValue } : product
    ));
    setEditingId(null);
    setTempValue("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTempValue("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link to="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-4">
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
            {products.map(product => (
              <Card key={product.id} className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardHeader className="p-0">
                  <div className="bg-gray-100 h-56 rounded-t-lg overflow-hidden flex items-center justify-center p-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 space-y-3 flex-1">
                  {/* Non-editable Title */}
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-[3rem]">
                    {product.name}
                  </h3>

                  {/* Editable Description */}
                  <div className="relative group">
                    {editingId === product.id ? (
                      <div className="flex items-start gap-2">
                        <textarea 
                          value={tempValue}
                          onChange={(e) => setTempValue(e.target.value)}
                          className="w-full text-gray-600 text-sm border border-gray-300 rounded px-2 py-1 resize-none"
                          rows={3}
                          autoFocus
                        />
                        <div className="flex flex-col gap-1">
                          <button 
                            onClick={() => saveEdit(product.id)}
                            className="p-1 text-green-600 hover:text-green-700"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={cancelEdit}
                            className="p-1 text-red-600 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start justify-between group">
                        <p className="text-gray-600 text-sm line-clamp-3 min-h-[4rem] flex-1">
                          {product.description}
                        </p>
                        <button 
                          onClick={() => startEditing(product.id, product.description)}
                          className="p-1 text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
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
