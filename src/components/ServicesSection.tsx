
import { Clock, Home, Ruler } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Clock,
      title: "Horário exclusivo de atendimento",
      description: "Agende seu horário para atendimento, atendemos você mesmo fora do horário comercial. Agora sem fechar ao meio dia.",
      color: "text-blue-600"
    },
    {
      icon: Home,
      title: "Compre sem sair de casa!",
      description: "Você pode comprar sem sair de casa, nós iremos até você sem qualquer custo adicional.",
      color: "text-green-600"
    },
    {
      icon: Ruler,
      title: "Medidas especiais",
      description: "Tenha a cama dos seus sonhos! Traga suas ideias e faça uma cama sob-medida conosco.",
      color: "text-green-800 opacity-40"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Nossos <span className="text-green-800 opacity-40">Serviços</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4">
            Oferecemos serviços diferenciados para garantir a melhor experiência na compra do seu colchão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group h-full">
                <CardHeader className="text-center pb-4">
                  <div className={`w-14 sm:w-16 h-14 sm:h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 sm:w-8 h-7 sm:h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center flex-1">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg max-w-2xl mx-auto">
            <p className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
              Atendimento diferenciado há 38 anos
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Sua satisfação é nossa prioridade. Entre em contato e descubra como podemos ajudá-lo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
