
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Truck, Shield, CreditCard, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5555991630055";
    const message = "Olá! Gostaria de solicitar um orçamento para colchões.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const brands = [
    "Ortobom", "Castor", "Gazin", "Herval", "King Koil", 
    "Sealy", "Simmons", "Serta", "Tempur", "Probel",
    "Parahyba", "Americanflex", "Plumatex", "Colchões Rio"
  ];

  const featuredProducts = [
    {
      name: "Colchão Ortobom Physical",
      category: "Ortopédico",
      size: "Casal 138x188cm",
      features: ["Molas Ensacadas", "Pillow Top", "Anti-ácaro"],
      rating: 4.8,
      reviews: 245,
      image: "ortobom-physical"
    },
    {
      name: "Colchão Castor Sleep Max",
      category: "Espuma Viscoelástica",
      size: "Queen 158x198cm",
      features: ["Viscoelástico", "7 Zonas de Conforto", "Termorregulador"],
      rating: 4.9,
      reviews: 187,
      image: "castor-sleep-max"
    },
    {
      name: "Colchão King Koil World Class",
      category: "Premium",
      size: "King 193x203cm",
      features: ["Molas Pocket", "Memory Foam", "Bordas Reforçadas"],
      rating: 5.0,
      reviews: 98,
      image: "king-koil-world"
    },
    {
      name: "Colchão Sealy Posturepedic",
      category: "Ortopédico Premium",
      size: "Casal 138x188cm",
      features: ["Tecnologia PostureTech", "Sistema de Zonas", "Antibacteriano"],
      rating: 4.7,
      reviews: 156,
      image: "sealy-posturepedic"
    }
  ];

  const categories = [
    {
      name: "Colchões Solteiro",
      description: "Ideais para quartos infantis e de hóspedes",
      sizes: ["88x188cm", "78x188cm"],
      image: "categoria-solteiro",
      products: 45
    },
    {
      name: "Colchões Casal",
      description: "Conforto para o casal, diversas tecnologias",
      sizes: ["138x188cm", "128x188cm"],
      image: "categoria-casal",
      products: 78
    },
    {
      name: "Colchões Queen",
      description: "Mais espaço e conforto para o seu descanso",
      sizes: ["158x198cm"],
      image: "categoria-queen",
      products: 65
    },
    {
      name: "Colchões King",
      description: "O máximo em espaço e luxo",
      sizes: ["193x203cm"],
      image: "categoria-king",
      products: 32
    },
    {
      name: "Colchões Ortopédicos",
      description: "Tratamento para coluna e articulações",
      sizes: ["Todos os tamanhos"],
      image: "categoria-ortopedico",
      products: 89
    },
    {
      name: "Colchões de Molas",
      description: "Tecnologia de molas ensacadas e bonnell",
      sizes: ["Todos os tamanhos"],
      image: "categoria-molas",
      products: 67
    },
    {
      name: "Colchões de Espuma",
      description: "Densidade alta, conforto e durabilidade",
      sizes: ["Todos os tamanhos"],
      image: "categoria-espuma",
      products: 54
    },
    {
      name: "Colchões Magnéticos",
      description: "Terapia magnética para melhor circulação",
      sizes: ["Casal, Queen, King"],
      image: "categoria-magnetico",
      products: 23
    }
  ];

  const benefits = [
    {
      icon: CreditCard,
      title: "12x sem juros",
      description: "Parcele em até 12x no cartão"
    },
    {
      icon: Truck,
      title: "Entrega Grátis",
      description: "Santa Maria e região"
    },
    {
      icon: Shield,
      title: "Garantia Estendida",
      description: "Até 10 anos de garantia"
    },
    {
      icon: Award,
      title: "20 Anos de Experiência",
      description: "Especialistas em sono"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Nossos <span className="text-red-600">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Trabalhamos com as melhores marcas do mercado nacional e internacional. 
            Mais de 500 modelos em estoque para pronta entrega em Santa Maria e região.
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Produtos em Destaque</h3>
            <Link to="/produtos">
              <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                Ver Todos os Produtos
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardHeader className="p-0">
                  {/* Espaço para imagem do produto */}
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                    <div className="text-center p-4">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-sm font-bold">IMG</span>
                      </div>
                      <p className="text-gray-700 font-medium text-sm">{product.image}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 space-y-3">
                  <div>
                    <Badge variant="outline" className="text-xs mb-2">
                      {product.category}
                    </Badge>
                    <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">
                      {product.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{product.size}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-sm"
                    onClick={handleWhatsAppClick}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Marcas que Trabalhamos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow group">
                {/* Espaço para logo da marca */}
                <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors">
                  <span className="text-gray-600 font-bold text-xs">{brand}</span>
                </div>
                <p className="text-sm font-medium text-gray-800">{brand}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Categorias de Produtos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardHeader className="p-0">
                  {/* Espaço para imagem da categoria */}
                  <div className="bg-gradient-to-br from-green-100 to-green-200 h-48 rounded-t-lg flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-lg font-bold">IMG</span>
                      </div>
                      <p className="text-green-700 font-medium">{category.image}</p>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-white text-gray-700">
                      {category.products} produtos
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 space-y-4">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {category.name}
                  </CardTitle>
                  <p className="text-gray-600">{category.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Tamanhos disponíveis:</p>
                    <div className="flex flex-wrap gap-1">
                      {category.sizes.map((size, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.8/5</span>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700"
                    onClick={handleWhatsAppClick}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Temos mais de 500 modelos em estoque. Entre em contato conosco e encontraremos o colchão perfeito para você!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/produtos">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
                Ver Catálogo Completo
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-red-200 text-red-600 hover:bg-red-50 text-lg px-8 py-4"
              onClick={handleWhatsAppClick}
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
