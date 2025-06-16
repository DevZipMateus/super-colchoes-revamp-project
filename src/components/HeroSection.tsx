
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
    <section className="relative min-h-screen bg-transparent overflow-hidden">
      {/* Background Image - Responsivo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: "url('/lovable-uploads/ce28e2ee-777e-43e4-b5b2-9ae17424306e.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-20">
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center space-y-6 sm:space-y-8 max-w-4xl w-full">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-lg text-red-600">
                <span className="text-[#ee1010]">SuperColchões</span>
                <br />
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  Especialista em Colchões há mais de{' '}
                  <span className="text-[#19a50f]">20 anos</span>
                </span>
              </h1>
            </div>

            {/* Promotional Information - Melhor responsividade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-8 sm:my-12 px-2 sm:px-0">
              <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border-2 border-green-200">
                <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">12x</div>
                <div className="text-base sm:text-lg font-semibold text-gray-800">sem juros</div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border-2 border-red-200">
                <div className="text-xl sm:text-2xl font-bold text-red-600 mb-2">20%</div>
                <div className="text-base sm:text-lg font-semibold text-gray-800">de desconto à vista</div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border-2 border-blue-200 sm:col-span-2 lg:col-span-1">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">15%</div>
                <div className="text-base sm:text-lg font-semibold text-gray-800">de desconto a prazo em até 5x</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick} 
                className="bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg w-full sm:w-auto"
              >
                Fale no WhatsApp
              </Button>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg space-y-2 mx-2 sm:mx-0">
              <p className="text-base sm:text-lg font-semibold text-gray-800">
                📍 Rua Riachuelo, 224 - Esq. Tuiuti, Santa Maria, RS
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                📞 (55) 3221-8035 | 📱 (55) 99163-0055
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
