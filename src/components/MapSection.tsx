
import { Card, CardContent } from '@/components/ui/card';

const MapSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-32 bg-gray-50" id="mapa">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 sm:space-y-6 xl:space-y-8 mb-12 sm:mb-16 xl:mb-20 2xl:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-black">
            Como <span className="text-black" style={{ color: '#0DA456' }}>Chegar</span>
          </h2>
          <p className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-4 text-black leading-relaxed">
            Visite nossa loja física no centro de Santa Maria. Estamos estrategicamente localizados para melhor atendê-lo.
          </p>
        </div>

        {/* Mapa do Google - Agora ocupando toda a largura */}
        <div className="w-full">
          <Card className="shadow-xl border-0 overflow-hidden h-full">
            <CardContent className="p-0 h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.8547!2d-53.8078!3d-29.6842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQxJzAzLjEiUyA1M8KwNDgnMjguMSJX!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr&q=Rua+Riachuelo,+224,+Santa+Maria,+RS" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '500px' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                className="w-full h-full min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px]" 
                title="Localização SuperColchões" 
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
