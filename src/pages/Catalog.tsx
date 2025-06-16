
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ShoppingCart, Eye, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Catalog = () => {
  const products = [
    {
      id: 1,
      name: "Colchão Magnético Castor",
      description: "Colchão com tecnologia magnética para melhor circulação sanguínea e relaxamento muscular.",
      price: "R$ 1.299,00",
      image: ""
    },
    {
      id: 2,
      name: "Pillow TOP 138, 158 e 193 cm",
      description: "Colchão com camada extra de conforto, disponível em diferentes tamanhos.",
      price: "R$ 899,00",
      image: ""
    },
    {
      id: 3,
      name: "Sofá‑cama 155x220 cm aberto",
      description: "Sofá-cama versátil e confortável para ambientes compactos.",
      price: "R$ 1.599,00",
      image: ""
    },
    {
      id: 4,
      name: "Tecido em malha 3D",
      description: "Colchão com tecnologia de malha 3D para melhor ventilação.",
      price: "R$ 749,00",
      image: ""
    },
    {
      id: 5,
      name: "Travesseiro Nasa cervical",
      description: "Travesseiro ortopédico com espuma viscoelástica para apoio cervical.",
      price: "R$ 199,00",
      image: ""
    },
    {
      id: 6,
      name: "Conjunto box maxspring",
      description: "Conjunto completo com colchão e base box spring de alta qualidade.",
      price: "R$ 2.199,00",
      image: ""
    },
    {
      id: 7,
      name: "Linha exclusiva Castor",
      description: "Colchões da linha premium Castor com materiais de primeira qualidade.",
      price: "R$ 1.799,00",
      image: ""
    },
    {
      id: 8,
      name: "Sofá‑cama e Poltrona reclinável",
      description: "Conjunto de sofá-cama com poltrona reclinável para máximo conforto.",
      price: "R$ 2.499,00",
      image: ""
    },
    {
      id: 9,
      name: "Colchões de espuma ortopédicos",
      description: "Colchões ortopédicos em espuma de alta densidade para melhor suporte.",
      price: "R$ 649,00",
      image: ""
    },
    {
      id: 10,
      name: "Colchão King Size Premium",
      description: "Colchão king size com molas ensacadas e pillow top integrado.",
      price: "R$ 3.299,00",
      image: ""
    },
    {
      id: 11,
      name: "Base Box Articulada",
      description: "Base box com sistema de articulação elétrica para maior conforto.",
      price: "R$ 1.899,00",
      image: ""
    },
    {
      id: 12,
      name: "Kit Travesseiros Bambu",
      description: "Conjunto de travesseiros com fibra de bambu antialérgica.",
      price: "R$ 299,00",
      image: ""
    }
  ];

  const handleWhatsAppClick = (productName: string) => {
    const phoneNumber = "5555991630055";
    const message = `Olá! Gostaria de saber mais sobre o produto: ${productName}`;
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
                  <div className="bg-gray-100 h-48 rounded-t-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-gray-600 text-xs font-medium">IMG</span>
                      </div>
                      <p className="text-xs">Imagem do produto</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 space-y-3 flex-1">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-[3rem]">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm line-clamp-3 min-h-[4rem]">
                    {product.description}
                  </p>
                  
                  <div className="pt-2">
                    <p className="text-2xl font-bold text-red-600">
                      {product.price}
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0 space-y-2">
                  <div className="w-full space-y-2">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700"
                      onClick={() => handleWhatsAppClick(product.name)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Comprar
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-300 hover:bg-gray-50"
                      onClick={() => handleWhatsAppClick(product.name)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ver mais
                    </Button>
                  </div>
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
