
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const MapSection = () => {
  const handleDirectionsClick = () => {
    const mapsUrl = "https://www.google.com/maps/place/Rua+Riachuelo,+224+-+Centro,+Santa+Maria+-+RS,+97050-010";
    window.open(mapsUrl, '_blank');
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 2xl:gap-20">
          {/* Mapa do Google */}
          <div className="w-full">
            <Card className="shadow-xl border-0 overflow-hidden h-full">
              <CardContent className="p-0 h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.8547!2d-53.8078!3d-29.6842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQxJzAzLjEiUyA1M8KwNDgnMjguMSJX!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr&q=Rua+Riachuelo,+224,+Santa+Maria,+RS" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '400px' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  className="w-full h-full min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] 2xl:min-h-[700px]" 
                  title="Localização SuperColchões" 
                />
              </CardContent>
            </Card>
          </div>

          {/* Informações de Localização */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-black text-xl sm:text-2xl">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#E0F4EA' }}>
                    <MapPin className="w-6 h-6" style={{ color: '#0DA456' }} />
                  </div>
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black text-base sm:text-lg leading-relaxed">
                  Rua Riachuelo, 224<br />
                  Centro, Santa Maria - RS<br />
                  CEP: 97050-010
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-black text-xl sm:text-2xl">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#E0F4EA' }}>
                    <Clock className="w-6 h-6" style={{ color: '#0DA456' }} />
                  </div>
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-black text-base sm:text-lg">
                  <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
                  <p><strong>Sábado:</strong> 8h às 17h</p>
                  <p><strong>Domingo:</strong> Fechado</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-black text-xl sm:text-2xl">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#E0F4EA' }}>
                    <Navigation className="w-6 h-6" style={{ color: '#0DA456' }} />
                  </div>
                  Como Chegar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black text-base sm:text-lg mb-4 leading-relaxed">
                  Localizada no coração do centro de Santa Maria, nossa loja é de fácil acesso por transporte público ou veículo próprio.
                </p>
                <button
                  onClick={handleDirectionsClick}
                  className="w-full px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: '#0DA456' }}
                >
                  Abrir no Google Maps
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
