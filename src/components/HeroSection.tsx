
import { Button } from '@/components/ui/button';
import { Star, Shield, Truck, CreditCard } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                SuperColchões - Especialista em <span className="text-red-600">Colchões</span> há mais de <span className="text-green-600">20 anos</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Trabalhamos com as melhores marcas nacionais e importadas. Colchões Ortobom, Castor, Gazin, Herval, King Koil, Sealy, Simmons, Serta, Tempur e muito mais!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Garantia até 20 anos</span>
              </div>
              <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                <Truck className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Entrega Grátis</span>
              </div>
              <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                <CreditCard className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Parcelamos</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">Avaliação 4.8/5 - Mais de 50.000 clientes atendidos</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
                Ver Catálogo de Produtos
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-4">
                Fale pelo WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Espaço para imagem principal de colchão */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl font-bold">SC</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Imagem Principal</h3>
                <p className="text-gray-600">Colchão em destaque aqui</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg transform rotate-12 shadow-lg">
              OFERTAS!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
