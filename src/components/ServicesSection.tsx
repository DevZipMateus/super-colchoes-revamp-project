
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
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl font-bold text-text-primary">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          
          <p className="text-xl max-w-4xl mx-auto px-4 text-text-secondary leading-relaxed">
            Oferecemos serviços diferenciados para garantir a melhor experiência na compra do seu colchão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group h-full hover:scale-105">
                <CardHeader className="text-center pb-4 p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center flex-1 p-8 pt-0">
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <p className="text-2xl font-semibold mb-4 text-text-primary">
              Atendimento diferenciado há 38 anos
            </p>
            <p className="text-xl text-text-secondary leading-relaxed">
              Sua satisfação é nossa prioridade. Entre em contato e descubra como podemos ajudá-lo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
