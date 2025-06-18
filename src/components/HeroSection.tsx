
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const HeroSection = () => {
  const phoneNumber = "5555991630055";
  const message = "Olá! Gostaria de saber mais sobre os colchões da SuperColchões.";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMapClick = () => {
    const mapSection = document.getElementById('mapa');
    if (mapSection) {
      mapSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden w-full">
      <div className="relative z-10 w-full max-w-full px-4 py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-center min-h-[calc(100vh-theme(spacing.24))] sm:min-h-[calc(100vh-theme(spacing.32))] lg:min-h-[75vh]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center w-full max-w-full">
              
              {/* Text Content */}
              <div className="text-center lg:text-left space-y-4 sm:space-y-6 order-2 lg:order-1 w-full max-w-full">
                
                {/* Main Heading */}
                <div className="space-y-2 sm:space-y-3 w-full">
                  <h1 className="font-bold leading-tight text-gray-900 w-full">
                    <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-950 mb-2 break-words">
                      SuperColchões
                    </span>
                    <span className="block text-sm sm:text-base md:text-lg lg:text-xl text-zinc-950 leading-relaxed break-words">
                      Especialista em Colchões há mais de{' '}
                      <span style={{ color: '#000000' }} className="font-extrabold text-gray-950">20 anos</span>
                    </span>
                  </h1>
                </div>

                {/* Promotional Cards */}
                <div className="w-full my-6 sm:my-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-full">
                    <div className="bg-white/95 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[80px] sm:min-h-[75px] md:min-h-[85px] flex flex-col justify-center items-center text-center w-full">
                      <div className="text-lg sm:text-lg md:text-xl font-bold mb-1" style={{ color: '#0DA456' }}>12x</div>
                      <div className="text-xs sm:text-xs md:text-sm font-semibold text-gray-800 leading-tight">sem juros</div>
                    </div>
                    
                    <div className="bg-white/95 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[80px] sm:min-h-[75px] md:min-h-[85px] flex flex-col justify-center items-center text-center w-full">
                      <div className="text-lg sm:text-lg md:text-xl font-bold mb-1" style={{ color: '#0DA456' }}>20%</div>
                      <div className="text-xs sm:text-xs md:text-sm font-semibold text-gray-800 leading-tight">desconto à vista</div>
                    </div>
                    
                    <div className="bg-white/95 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[80px] sm:min-h-[75px] md:min-h-[85px] flex flex-col justify-center items-center text-center w-full">
                      <div className="text-lg sm:text-lg md:text-xl font-bold mb-1" style={{ color: '#0DA456' }}>15%</div>
                      <div className="text-xs sm:text-xs md:text-sm font-semibold text-gray-800 leading-tight text-center">desconto a prazo<br className="hidden sm:block" /><span className="sm:hidden"> </span>em até 5x</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full max-w-full">
                  <Button size="lg" onClick={handleWhatsAppClick} className="text-white text-sm sm:text-base px-6 py-3 shadow-lg w-full sm:w-auto hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#0DA456' }}>
                    <span className="flex items-center justify-center font-semibold whitespace-nowrap">
                      Fale no WhatsApp
                    </span>
                  </Button>
                  
                  <Button size="lg" onClick={handleMapClick} className="text-gray-800 text-sm sm:text-base px-6 py-3 shadow-lg w-full sm:w-auto hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#E0F4EA' }}>
                    <span className="flex items-center justify-center font-semibold gap-2 whitespace-nowrap">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      Como Chegar
                    </span>
                  </Button>
                </div>
              </div>

              {/* Image Content */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2 w-full max-w-full">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  <img src="/lovable-uploads/18ae5d91-1183-484e-bc91-d42131af2ab9.png" alt="Colchão Dreams com base ajustável" className="w-full h-auto object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-500 max-w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
