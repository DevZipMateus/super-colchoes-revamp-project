
import { Button } from '@/components/ui/button';
import { CheckCircle, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                O Melhor <span className="text-blue-600">Colchão</span> para o Seu <span className="text-blue-600">Conforto</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubra nossa linha premium de colchões ortopédicos, desenvolvidos com tecnologia avançada para garantir o melhor sono da sua vida.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Garantia de 10 anos</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Entrega grátis em toda São Paulo</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Parcelamento em até 12x sem juros</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">Mais de 10.000 clientes satisfeitos</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                Ver Produtos
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                Fale Conosco
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white text-2xl font-bold">SC</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Colchão Premium</h3>
                  <p className="text-gray-600">Tecnologia de ponta para o seu descanso</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold transform rotate-12">
              50% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
