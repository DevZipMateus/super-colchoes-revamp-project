
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ShoppingCart, Eye } from 'lucide-react';

const ProductCatalog = () => {
  const products = [
    {
      id: 1,
      name: "Colchão Magnético Castor",
      description: "", // Espaço para descrição
      price: "", // Espaço para preço
      image: "" // Espaço para imagem
    },
    {
      id: 2,
      name: "Pillow TOP 138, 158 e 193 cm",
      description: "",
      price: "",
      image: ""
    },
    {
      id: 3,
      name: "Sofá‑cama 155x220 cm aberto",
      description: "",
      price: "",
      image: ""
    },
    {
      id: 4,
      name: "Tecido em malha 3D",
      description: "",
      price: "",
      image: ""
    },
    {
      id: 5,
      name: "Travesseiro Nasa cervical",
      description: "",
      price: "",
      image: ""
    },
    {
      id: 6,
      name: "Conjunto box maxspring",
      description: "",
      price: "",
      image: ""
    },
    {
      id: 7,
      name: "Linha exclusiva Castor",
      description: "",
      price: "",
      image: ""
    },
    {
      id: 8,
      name: "Sofá‑cama e Poltrona reclinável",
      description: "",
      price: "",
      image: ""
    },
    {
      id: 9,
      name: "Colchões de espuma ortopédicos",
      description: "",
      price: "",
      image: ""
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Catálogo <span className="text-red-600">Super Colchões</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossa linha completa de produtos para o seu conforto e bem-estar
          </p>
        </div>

        {/* Carrossel para telas maiores */}
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                    <CardHeader className="p-0">
                      {/* Espaço reservado para imagem */}
                      <div className="bg-gray-100 h-64 rounded-t-lg flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <span className="text-gray-600 text-sm font-medium">IMG</span>
                          </div>
                          <p className="text-sm">Imagem do produto</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-[3.5rem]">
                        {product.name}
                      </h3>
                      
                      {/* Espaço reservado para descrição */}
                      <div className="min-h-[4rem]">
                        <p className="text-gray-500 text-sm italic">
                          Descrição será adicionada aqui
                        </p>
                      </div>
                      
                      {/* Espaço reservado para preço */}
                      <div className="min-h-[2rem]">
                        <p className="text-gray-500 text-sm italic">
                          Preço será adicionado aqui
                        </p>
                      </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0 space-y-2">
                      <div className="w-full space-y-2">
                        <Button className="w-full bg-red-600 hover:bg-red-700">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Comprar
                        </Button>
                        <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50">
                          <Eye className="w-4 h-4 mr-2" />
                          Ver mais
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>

        {/* Grid para telas menores */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader className="p-0">
                {/* Espaço reservado para imagem */}
                <div className="bg-gray-100 h-48 rounded-t-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-gray-600 text-xs font-medium">IMG</span>
                    </div>
                    <p className="text-xs">Imagem do produto</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 space-y-3">
                <h3 className="text-base font-bold text-gray-900 line-clamp-2 min-h-[2.5rem]">
                  {product.name}
                </h3>
                
                {/* Espaço reservado para descrição */}
                <div className="min-h-[3rem]">
                  <p className="text-gray-500 text-xs italic">
                    Descrição será adicionada aqui
                  </p>
                </div>
                
                {/* Espaço reservado para preço */}
                <div className="min-h-[1.5rem]">
                  <p className="text-gray-500 text-xs italic">
                    Preço será adicionado aqui
                  </p>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0 space-y-2">
                <div className="w-full space-y-2">
                  <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                    <ShoppingCart className="w-3 h-3 mr-2" />
                    Comprar
                  </Button>
                  <Button size="sm" variant="outline" className="w-full border-gray-300 hover:bg-gray-50">
                    <Eye className="w-3 h-3 mr-2" />
                    Ver mais
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
