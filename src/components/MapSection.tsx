import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
const MapSection = () => {
  const handleDirectionsClick = () => {
    const mapsUrl = "https://www.google.com/maps/place/Rua+Riachuelo,+224+-+Centro,+Santa+Maria+-+RS,+97050-010";
    window.open(mapsUrl, '_blank');
  };
  return <section className="py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-32 bg-gray-50" id="mapa">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 sm:space-y-6 xl:space-y-8 mb-12 sm:mb-16 xl:mb-20 2xl:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900">
            Como <span className="text-gray-950" style={{
            color: '#0DA456'
          }}>Chegar</span>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.8547!2d-53.8078!3d-29.6842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQxJzAzLjEiUyA1M8KwNDgnMjguMSJX!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr&q=Rua+Riachuelo,+224,+Santa+Maria,+RS" width="100%" height="400" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-80 xl:h-96 2xl:h-[480px]" title="Localização SuperColchões" />
              </CardContent>
            </Card>
          </div>

          {/* Informações de Localização */}
          
        </div>
      </div>
    </section>;
};
export default MapSection;