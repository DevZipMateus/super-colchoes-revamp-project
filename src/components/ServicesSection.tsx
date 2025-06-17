
import { Clock, Home, Ruler, Shield, Truck, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Clock,
      title: "Horário Flexível",
      description: "Atendimento personalizado, inclusive fora do horário comercial mediante agendamento.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Home,
      title: "Atendimento Domiciliar",
      description: "Levamos nossos produtos até você sem custo adicional para avaliação.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Ruler,
      title: "Medidas Especiais",
      description: "Fabricamos colchões sob medida para suas necessidades específicas.",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Shield,
      title: "Garantia Estendida",
      description: "Todos nossos produtos possuem garantia de qualidade e durabilidade.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Truck,
      title: "Entrega Grátis",
      description: "Entrega gratuita em Santa Maria e região com prazo reduzido.",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: CreditCard,
      title: "Facilidades de Pagamento",
      description: "Parcelamos em até 12x sem juros ou 20% de desconto à vista.",
      color: "text-teal-600",
      bgColor: "bg-teal-100"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Nossos <span className="text-red-600">Serviços</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos serviços diferenciados para garantir a melhor experiência na compra do seu colchão
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group h-full">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto border border-red-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Atendimento Diferenciado há 39 Anos
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Sua satisfação é nossa prioridade. Entre em contato e descubra como podemos ajudá-lo a ter o sono dos sonhos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const phoneNumber = "5555991630055";
                  const message = "Olá! Gostaria de saber mais sobre os serviços da SuperColchões.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <img src="/lovable-uploads/ab271b32-cd91-484c-97ce-567483a1d65b.png" alt="WhatsApp" className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </button>
              <button 
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Ver Localização
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
