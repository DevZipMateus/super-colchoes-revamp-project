import { Button } from '@/components/ui/button';
import { Star, Shield, Truck, CreditCard } from 'lucide-react';
const HeroSection = () => {
  const phoneNumber = "5555991630055";
  const message = "Olá! Gostaria de saber mais sobre os colchões da SuperColchões.";
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{
      backgroundImage: "url('/lovable-uploads/ce28e2ee-777e-43e4-b5b2-9ae17424306e.png')"
    }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-red-600">SuperColchões</span>
                <br />
                Especialista em Colchões há mais de <span className="text-green-600">20 anos</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Trabalhamos com as melhores marcas nacionais e importadas. Colchões Ortobom, Castor, Gazin, Herval, King Koil, Sealy, Simmons, Serta, Tempur e muito mais!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              
              
            </div>

            

            <div className="flex flex-col sm:flex-row gap-4">
              
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 shadow-lg">
                Fale no WhatsApp
              </Button>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <p className="text-lg font-semibold text-gray-800">
                📍 Rua Riachuelo, 224 - Esq. Tuiuti, Santa Maria, RS
              </p>
              <p className="text-gray-600">
                📞 (55) 3221-8035 | 📱 (55) 99163-0055
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img src="/lovable-uploads/ce28e2ee-777e-43e4-b5b2-9ae17424306e.png" alt="Colchão Dreams - SuperColchões" className="max-w-full h-auto rounded-2xl shadow-2xl" />
              <div className="absolute -top-6 -right-6 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg transform rotate-12 shadow-lg">
                OFERTAS!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;