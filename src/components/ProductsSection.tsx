
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Colchão Ortopédico Premium",
      price: "R$ 1.299,00",
      originalPrice: "R$ 2.598,00",
      rating: 4.9,
      reviews: 156,
      image: "premium",
      features: ["Espuma NASA", "Anti-ácaro", "Garantia 10 anos"],
      bestseller: true
    },
    {
      id: 2,
      name: "Colchão Memory Foam Luxo",
      price: "R$ 1.899,00",
      originalPrice: "R$ 3.798,00",
      rating: 4.8,
      reviews: 203,
      image: "memory",
      features: ["Memory Foam", "Regulagem térmica", "Base eucalipto"],
      bestseller: false
    },
    {
      id: 3,
      name: "Colchão Pocket Spring Elite",
      price: "R$ 2.499,00",
      originalPrice: "R$ 4.998,00",
      rating: 4.9,
      reviews: 89,
      image: "pocket",
      features: ["Molas ensacadas", "7 zonas de conforto", "Tecido bamboo"],
      bestseller: false
    },
    {
      id: 4,
      name: "Colchão Casal Econômico",
      price: "R$ 699,00",
      originalPrice: "R$ 1.398,00",
      rating: 4.6,
      reviews: 324,
      image: "economico",
      features: ["D33 Alta qualidade", "Anti-fungos", "Garantia 5 anos"],
      bestseller: false
    }
  ];

  return (
    <section id="produtos" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Nossos <span className="text-red-600">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossa linha completa de colchões desenvolvidos com tecnologia de ponta para garantir o melhor descanso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="p-0 relative">
                <div className="bg-gradient-to-br from-green-100 to-green-200 h-48 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <span className="text-white text-lg font-bold">SC</span>
                    </div>
                    <p className="text-green-700 font-medium">{product.image}</p>
                  </div>
                  {product.bestseller && (
                    <Badge className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 hover:bg-yellow-500">
                      Mais Vendido
                    </Badge>
                  )}
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </CardTitle>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="text-sm text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-red-600">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <p className="text-sm text-green-600 font-medium">ou 12x de R$ {(parseInt(product.price.replace(/[^\d]/g, '')) / 12).toFixed(0)}</p>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-red-600 hover:bg-red-700 group">
                  <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Comprar Agora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
