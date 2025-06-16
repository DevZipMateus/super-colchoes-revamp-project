
import { Button } from '@/components/ui/button';
import { Star, Shield, Truck, CreditCard } from 'lucide-react';
const HeroSection = () => {
  const phoneNumber = "5555991630055";
  const message = "Olá! Gostaria de saber mais sobre os colchões da SuperColchões.";
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <section className="relative min-h-screen bg-transparent overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100" style={{
      backgroundImage: "url('/lovable-uploads/ce28e2ee-777e-43e4-b5b2-9ae17424306e.png')"
    }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center space-y-8 max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight drop-shadow-lg text-neutral-900">
                <span className="text-[#ee1010]">SuperColchões</span>
                <br />
                Especialista em Colchões há mais de <span className="text-[#19a50f]">20 anos</span>
              </h1>
            </div>

            {/* Promotional Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-green-200">
                <div className="text-2xl font-bold text-green-600 mb-2">12x</div>
                <div className="text-lg font-semibold text-gray-800">sem juros</div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-red-200">
                <div className="text-2xl font-bold text-red-600 mb-2">20%</div>
                <div className="text-lg font-semibold text-gray-800">de desconto à vista</div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-blue-200">
                <div className="text-2xl font-bold text-blue-600 mb-2">15%</div>
                <div className="text-lg font-semibold text-gray-800">de desconto a prazo em até 5x</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 shadow-lg">
                Fale no WhatsApp
              </Button>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg space-y-2">
              <p className="text-lg font-semibold text-gray-800">
                📍 Rua Riachuelo, 224 - Esq. Tuiuti, Santa Maria, RS
              </p>
              <p className="text-gray-600">
                📞 (55) 3221-8035 | 📱 (55) 99163-0055
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
