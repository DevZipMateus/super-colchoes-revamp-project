
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const phoneNumber = "5555991630055";
  const message = "Olá! Gostaria de saber mais sobre os colchões da SuperColchões.";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-20">
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center space-y-8 max-w-5xl w-full">
            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                <span className="block text-red-500 mb-4">SuperColchões</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal">
                  Especialista em Colchões há mais de{' '}
                  <span className="text-green-400 font-bold">20 anos</span>
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                Oferecemos os melhores colchões com qualidade, conforto e preços especiais para toda a família
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0 mt-12">
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick} 
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 w-full sm:w-auto"
              >
                <img src="/lovable-uploads/ab271b32-cd91-484c-97ce-567483a1d65b.png" alt="WhatsApp" className="w-5 h-5 mr-2" />
                Fale no WhatsApp
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4 shadow-2xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Produtos
              </Button>
            </div>

            {/* Key benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 px-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">12x</div>
                <div className="text-white font-medium">sem juros</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-red-400 mb-2">20%</div>
                <div className="text-white font-medium">desconto à vista</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">39</div>
                <div className="text-white font-medium">anos de experiência</div>
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20 mt-12">
              <p className="text-lg font-semibold text-white mb-2">
                📍 Rua Riachuelo, 224 - Esq. Tuiuti, Santa Maria, RS
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-blue-200">
                <span>📞 (55) 3221-8035</span>
                <span>📱 (55) 99163-0055</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
