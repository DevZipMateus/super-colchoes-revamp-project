
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
      color: "#000000"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 sm:space-y-6 xl:space-y-8 mb-12 sm:mb-16 xl:mb-20 2xl:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-950">
            Nossos <span className="text-gray-950" style={{ color: '#000000' }}>Serviços</span>
          </h2>
          
          <p className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 text-gray-950 leading-relaxed">
            Oferecemos serviços diferenciados para garantir a melhor experiência na compra do seu colchão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10 2xl:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group h-full hover:scale-105">
                <CardHeader className="text-center pb-4 xl:pb-6 p-6 xl:p-8 2xl:p-10">
                  <div className={`w-14 sm:w-16 xl:w-20 2xl:w-24 h-14 sm:h-16 xl:h-20 2xl:h-24 mx-auto mb-4 xl:mb-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 sm:w-8 xl:w-10 2xl:w-12 h-7 sm:h-8 xl:h-10 2xl:h-12`} style={{ color: service.color }} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center flex-1 p-6 xl:p-8 2xl:p-10 pt-0">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base xl:text-lg 2xl:text-xl">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12 xl:mt-16 2xl:mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 xl:p-8 2xl:p-10 shadow-lg max-w-2xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
            <p className="text-base font-semibold mb-2 xl:mb-4 text-gray-950 sm:text-2xl xl:text-3xl 2xl:text-4xl">
              Atendimento diferenciado há 38 anos
            </p>
            <p className="text-sm text-gray-950 sm:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
              Sua satisfação é nossa prioridade. Entre em contato e descubra como podemos ajudá-lo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
