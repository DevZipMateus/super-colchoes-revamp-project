
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900">
            Como <span className="text-gray-950" style={{ color: '#0DA456' }}>Chegar</span>
          </h2>
          <p className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-4 text-gray-700 leading-relaxed">
            Visite nossa loja física no centro de Santa Maria. Estamos estrategicamente localizados para melhor atendê-lo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 2xl:gap-20">
          {/* Mapa do Google */}
          <div className="w-full">
            <Card className="shadow-xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.8547!2d-53.8078!3d-29.6842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQxJzAzLjEiUyA1M8KwNDgnMjguMSJX!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr&q=Rua+Riachuelo,+224,+Santa+Maria,+RS"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-80 xl:h-96 2xl:h-[480px]"
                  title="Localização SuperColchões"
                />
              </CardContent>
            </Card>
          </div>

          {/* Informações de Localização */}
          <div className="space-y-6 xl:space-y-8">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#E0F4EA' }}>
              <CardHeader className="p-6 xl:p-8">
                <CardTitle className="text-xl xl:text-2xl 2xl:text-3xl text-gray-900 flex items-center">
                  <MapPin className="w-6 h-6 xl:w-8 xl:h-8 mr-3" style={{ color: '#0DA456' }} />
                  Endereço Completo
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 xl:p-8 pt-0">
                <div className="space-y-4 xl:space-y-6">
                  <div>
                    <p className="text-lg xl:text-xl 2xl:text-2xl font-semibold text-gray-900">
                      Rua Riachuelo, 224 - Esq. Tuiuti
                    </p>
                    <p className="text-base xl:text-lg 2xl:text-xl text-gray-700">
                      Centro, Santa Maria - RS
                    </p>
                    <p className="text-base xl:text-lg 2xl:text-xl text-gray-700">
                      CEP: 97050-010
                    </p>
                  </div>
                  
                  <button
                    onClick={handleDirectionsClick}
                    className="w-full bg-white hover:bg-gray-50 border-2 text-gray-800 font-semibold py-3 xl:py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                    style={{ borderColor: '#0DA456' }}
                  >
                    <Navigation className="w-5 h-5 xl:w-6 xl:h-6 mr-2" style={{ color: '#0DA456' }} />
                    Abrir no Google Maps
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0" style={{ backgroundColor: '#E0F4EA' }}>
              <CardHeader className="p-6 xl:p-8">
                <CardTitle className="text-xl xl:text-2xl 2xl:text-3xl text-gray-900 flex items-center">
                  <Clock className="w-6 h-6 xl:w-8 xl:h-8 mr-3" style={{ color: '#0DA456' }} />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 xl:p-8 pt-0">
                <div className="space-y-3 xl:space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-base xl:text-lg 2xl:text-xl font-medium text-gray-700">Segunda à Sexta:</span>
                    <span className="text-base xl:text-lg 2xl:text-xl font-semibold text-gray-900">8h às 18h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base xl:text-lg 2xl:text-xl font-medium text-gray-700">Sábado:</span>
                    <span className="text-base xl:text-lg 2xl:text-xl font-semibold text-gray-900">8h às 14h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base xl:text-lg 2xl:text-xl font-medium text-gray-700">Domingo:</span>
                    <span className="text-base xl:text-lg 2xl:text-xl font-semibold text-red-600">Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0" style={{ backgroundColor: '#E0F4EA' }}>
              <CardContent className="p-6 xl:p-8">
                <div className="flex items-center space-x-4 xl:space-x-6">
                  <Phone className="w-8 h-8 xl:w-10 xl:h-10" style={{ color: '#0DA456' }} />
                  <div>
                    <p className="text-lg xl:text-xl 2xl:text-2xl font-semibold text-gray-900">
                      Telefone: (55) 3221-8035
                    </p>
                    <p className="text-base xl:text-lg 2xl:text-xl text-gray-700">
                      WhatsApp: (55) 99163-0055
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
