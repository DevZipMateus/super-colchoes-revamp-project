
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactWithMap = () => {
  const phoneNumber = "5555991630055";
  const message = "Olá! Gostaria de saber mais sobre os colchões da SuperColchões.";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone Fixo",
      content: "(55) 3221-8035",
      subtitle: "Atendimento de Segunda a Sábado"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      content: "(55) 99163-0055",
      subtitle: "Atendimento rápido e personalizado",
      highlight: true
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "supercolchoes@yahoo.com.br",
      subtitle: "Respondemos em até 4 horas"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Riachuelo, 224 - Esq. Tuiuti",
      subtitle: "Santa Maria, RS - CEP 97050-010"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-32 bg-white" id="contato">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 sm:space-y-6 xl:space-y-8 mb-12 sm:mb-16 xl:mb-20 2xl:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900">
            Fale <span className="text-gray-950" style={{ color: '#000000' }}>Conosco</span>
          </h2>
          <p className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-4 text-gray-950 leading-relaxed">
            Estamos aqui para ajudar você a encontrar o colchão perfeito. 
            Entre em contato conosco e receba atendimento especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 2xl:gap-20">
          {/* Formulário de Contato */}
          <Card className="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300" style={{ backgroundColor: '#E0F4EA' }}>
            <CardHeader className="p-6 xl:p-8 2xl:p-10">
              <CardTitle className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl text-gray-900 flex items-center">
                <img src="/lovable-uploads/ab271b32-cd91-484c-97ce-567483a1d65b.png" alt="WhatsApp" className="w-5 sm:w-6 xl:w-8 2xl:w-10 h-5 sm:h-6 xl:h-8 2xl:h-10 mr-2 xl:mr-3" />
                Solicite um Orçamento
              </CardTitle>
              <p className="text-gray-600 text-sm sm:text-base xl:text-lg 2xl:text-xl">
                Preencha os dados abaixo e nossa equipe entrará em contato
              </p>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 xl:space-y-8 p-6 xl:p-8 2xl:p-10 pt-0">
              <div className="space-y-2 xl:space-y-3">
                <label className="text-sm xl:text-base 2xl:text-lg font-medium text-gray-700">Nome Completo *</label>
                <Input 
                  placeholder="Seu nome completo" 
                  className="border-gray-300 h-10 xl:h-12 2xl:h-14 text-sm xl:text-base 2xl:text-lg"
                  style={{ borderColor: '#000000', '--tw-ring-color': '#000000' } as React.CSSProperties}
                />
              </div>
              
              <div className="space-y-2 xl:space-y-3">
                <label className="text-sm xl:text-base 2xl:text-lg font-medium text-gray-700">Mensagem</label>
                <Textarea 
                  placeholder="Conte-nos sobre suas necessidades, orçamento, preferências..." 
                  rows={4} 
                  className="border-gray-300 text-sm xl:text-base 2xl:text-lg"
                  style={{ borderColor: '#000000', '--tw-ring-color': '#000000' } as React.CSSProperties}
                />
              </div>
              
              <Button 
                className="w-full text-base sm:text-lg xl:text-xl 2xl:text-2xl py-3 xl:py-4 2xl:py-5 hover:scale-105 transition-all duration-300" 
                style={{ backgroundColor: '#2cf96a' }}
                onClick={handleWhatsAppClick}
              >
                Enviar Solicitação
              </Button>
              
              <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-gray-600 text-center">
                * Campos obrigatórios. Responderemos em até 2 horas úteis.
              </p>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-4 sm:space-y-6 xl:space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={index} 
                  className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 cursor-pointer p-4 sm:p-6 xl:p-8 2xl:p-10 hover:scale-105"
                  style={{ backgroundColor: '#E0F4EA' }}
                  onClick={handleWhatsAppClick}
                >
                  <div className="flex items-center space-x-4 xl:space-x-6">
                    <div className="w-12 h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 rounded-full flex items-center justify-center bg-white">
                      <IconComponent className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10" style={{ color: '#0DA456' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base xl:text-lg 2xl:text-xl">{info.title}</h3>
                      <p className="font-bold text-sm sm:text-base xl:text-lg 2xl:text-xl text-gray-800">{info.content}</p>
                      <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-gray-600">{info.subtitle}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWithMap;
