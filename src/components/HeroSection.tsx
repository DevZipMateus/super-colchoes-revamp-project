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
  return <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Content - Otimizado para diferentes resoluções */}
      <div className="relative z-10 container mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 max-w-7xl">
        <div className="flex items-center justify-center min-h-[calc(100vh-theme(spacing.32))] sm:min-h-[calc(100vh-theme(spacing.40))] lg:min-h-[80vh] xl:min-h-[85vh] 2xl:min-h-[90vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center w-full">
            
            {/* Text Content - Melhorado para 1920x1080 */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-6 md:space-y-8 xl:space-y-10 2xl:space-y-12 order-2 lg:order-1">
              
              {/* Main Heading */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4 xl:space-y-6">
                <h1 className="font-bold leading-tight text-gray-900">
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-zinc-950 mb-2 xl:mb-4">
                    SuperColchões
                  </span>
                  <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-zinc-950 leading-relaxed">
                    Especialista em Colchões há mais de{' '}
                    <span style={{
                    color: '#000000'
                  }} className="font-extrabold text-gray-950">20 anos</span>
                  </span>
                </h1>
              </div>

              {/* Promotional Cards - Responsivos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-6 2xl:gap-8 my-6 sm:my-8 md:my-10 lg:my-12 xl:my-16">
                <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-1 sm:mb-2" style={{
                  color: '#0DA456'
                }}>12x</div>
                  <div className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-semibold text-gray-800">sem juros</div>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-1 sm:mb-2" style={{
                  color: '#0DA456'
                }}>20%</div>
                  <div className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-semibold text-gray-800">de desconto à vista</div>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 rounded-xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-1 sm:mb-2" style={{
                  color: '#0DA456'
                }}>15%</div>
                  <div className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-semibold text-gray-800">de desconto a prazo em até 5x</div>
                </div>
              </div>

              {/* CTA Buttons - Otimizado com dois botões lado a lado */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-2 sm:px-4 md:px-0">
                <Button size="lg" onClick={handleWhatsAppClick} className="text-white text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl px-6 sm:px-8 md:px-10 xl:px-12 2xl:px-16 py-3 sm:py-4 md:py-5 xl:py-6 2xl:py-8 shadow-lg flex-1 sm:flex-none hover:scale-105 transition-all duration-300" style={{
                backgroundColor: '#0DA456'
              }}>
                  <span className="flex items-center justify-center font-semibold">
                    Fale no WhatsApp
                  </span>
                </Button>
                
                <Button size="lg" onClick={handleMapClick} className="text-gray-800 text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl px-6 sm:px-8 md:px-10 xl:px-12 2xl:px-16 py-3 sm:py-4 md:py-5 xl:py-6 2xl:py-8 shadow-lg flex-1 sm:flex-none hover:scale-105 transition-all duration-300" style={{
                backgroundColor: '#E0F4EA'
              }}>
                  <span className="flex items-center justify-center font-semibold gap-2">
                    <MapPin className="w-4 h-4 xl:w-5 xl:h-5" />
                    Como Chegar
                  </span>
                </Button>
              </div>

              {/* Contact Info - Melhorado */}
              
            </div>

            {/* Image Content - Responsivo */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl">
                <img src="/lovable-uploads/18ae5d91-1183-484e-bc91-d42131af2ab9.png" alt="Colchão Dreams com base ajustável" className="w-full h-auto object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;