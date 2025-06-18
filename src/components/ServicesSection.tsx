
import { Clock, Home, Ruler } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Clock,
      title: "Horário exclusivo de atendimento",
      description: "Agende seu horário para atendimento, atendemos você mesmo fora do horário comercial. Agora sem fechar ao meio dia.",
      color: "text-primary"
    },
    {
      icon: Home,
      title: "Compre sem sair de casa!",
      description: "Você pode comprar sem sair de casa, nós iremos até você sem qualquer custo adicional.",
      color: "text-primary"
    },
    {
      icon: Ruler,
      title: "Medidas especiais",
      description: "Tenha a cama dos seus sonhos! Traga suas ideias e faça uma cama sob-medida conosco.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl font-bold text-textPrimary">
            Nossos Serviços
          </h2>
          
          <p className="text-base text-textSecondary max-w-3xl mx-auto leading-relaxed">
            Oferecemos serviços diferenciados para garantir a melhor experiência na compra do seu colchão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group h-full hover:scale-105">
                <CardHeader className="text-center pb-3 p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-textPrimary leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center flex-1 p-6 pt-0">
                  <p className="text-textSecondary leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-textPrimary mb-3">
              Atendimento diferenciado há 39 anos
            </h3>
            <p className="text-base text-textSecondary leading-relaxed">
              Sua satisfação é nossa prioridade. Entre em contato e descubra como podemos ajudá-lo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
