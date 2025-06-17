
import { Button } from '@/components/ui/button';
import { Star, Shield, Truck, CreditCard } from 'lucide-react';

const HeroSection = () => {
  const phoneNumber = "5555991630055";
  const message = "Olá! Gostaria de saber mais sobre os colchões da SuperColchões.";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="flex items-center justify-center min-h-[calc(100vh-theme(spacing.32))] sm:min-h-[calc(100vh-theme(spacing.40))] lg:min-h-[80vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center max-w-7xl w-full">
            
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
              
              {/* Main Heading */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <h1 className="font-bold leading-tight text-gray-900">
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-zinc-950 mb-2">
                    SuperColchões
                  </span>
                  <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-zinc-950 leading-relaxed">
                    Especialista em Colchões há mais de{' '}
                    <span className="font-extrabold text-red-600">20 anos</span>
                  </span>
                </h1>
              </div>

              {/* Promotional Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-6 my-6 sm:my-8 md:my-10 lg:my-12">
                <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-shadow">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-600 mb-1 sm:mb-2">12x</div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">sem juros</div>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl shadow-lg border-2 border-red-200 hover:shadow-xl transition-shadow">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-1 sm:mb-2">20%</div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">de desconto à vista</div>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">15%</div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">de desconto a prazo em até 5x</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start px-2 sm:px-4 md:px-0">
                <Button 
                  size="lg" 
                  onClick={handleWhatsAppClick} 
                  className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 shadow-lg w-full sm:w-auto max-w-sm hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    Fale no WhatsApp
                  </span>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 shadow-lg space-y-2 sm:space-y-3 mx-2 sm:mx-4 md:mx-0 hover:shadow-xl transition-shadow">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 flex items-center justify-center lg:justify-start">
                  <span className="mr-2">📍</span>
                  <span className="text-center lg:text-left">Rua Riachuelo, 224 - Esq. Tuiuti, Santa Maria, RS</span>
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 text-xs sm:text-sm md:text-base text-gray-600">
                  <span className="flex items-center">
                    <span className="mr-1">📞</span>
                    (55) 3221-8035
                  </span>
                  <span className="hidden sm:inline">|</span>
                  <span className="flex items-center">
                    <span className="mr-1">📱</span>
                    (55) 99163-0055
                  </span>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <img 
                  src="/lovable-uploads/18ae5d91-1183-484e-bc91-d42131af2ab9.png" 
                  alt="Colchão Dreams com base ajustável" 
                  className="w-full h-auto object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
