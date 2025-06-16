
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, ShoppingCart } from 'lucide-react';

const ProductsSection = () => {
  const brands = [
    "Ortobom", "Castor", "Gazin", "Herval", "King Koil", 
    "Sealy", "Simmons", "Serta", "Tempur", "Probel"
  ];

  const categories = [
    {
      name: "Colchões Solteiro",
      description: "Ideais para quartos infantis e de hóspedes",
      priceRange: "A partir de R$ 299",
      image: "solteiro"
    },
    {
      name: "Colchões Casal",
      description: "Conforto para o casal, diversas tecnologias",
      priceRange: "A partir de R$ 599",
      image: "casal"
    },
    {
      name: "Colchões Queen",
      description: "Mais espaço e conforto para o seu descanso",
      priceRange: "A partir de R$ 899",
      image: "queen"
    },
    {
      name: "Colchões King",
      description: "O máximo em espaço e luxo",
      priceRange: "A partir de R$ 1.299",
      image: "king"
    },
    {
      name: "Colchões Ortopédicos",
      description: "Tratamento para coluna e articulações",
      priceRange: "A partir de R$ 799",
      image: "ortopedico"
    },
    {
      name: "Colchões de Molas",
      description: "Tecnologia de molas ensacadas e bonnell",
      priceRange: "A partir de R$ 699",
      image: "molas"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Nossos <span className="text-red-600">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Trabalhamos com as melhores marcas do mercado nacional e internacional. 
            Mais de 500 modelos em estoque para pronta entrega.
          </p>
        </div>

        {/* Marcas que vendemos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Marcas que Trabalhamos</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                {/* Espaço para logo da marca */}
                <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-600 font-bold text-sm">{brand}</span>
                </div>
                <p className="text-sm font-medium text-gray-800">{brand}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categorias de produtos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-0 shadow-lg">
              <CardHeader className="p-0">
                {/* Espaço para imagem da categoria */}
                <div className="bg-gradient-to-br from-green-100 to-green-200 h-48 rounded-t-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-lg font-bold">IMG</span>
                    </div>
                    <p className="text-green-700 font-medium">{category.image}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                <CardTitle className="text-xl font-bold text-gray-900">
                  {category.name}
                </CardTitle>
                <p className="text-gray-600">{category.description}</p>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.8/5</span>
                </div>
                <p className="text-2xl font-bold text-red-600">{category.priceRange}</p>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Ver Modelos
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
