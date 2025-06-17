
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
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Fale <span className="text-green-800 opacity-40">Conosco</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Estamos aqui para ajudar você a encontrar o colchão perfeito. 
            Entre em contato conosco e receba atendimento especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Formulário de Contato */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-gray-900 flex items-center">
                <img src="/lovable-uploads/ab271b32-cd91-484c-97ce-567483a1d65b.png" alt="WhatsApp" className="w-5 sm:w-6 h-5 sm:h-6 mr-2" />
                Solicite um Orçamento
              </CardTitle>
              <p className="text-gray-600 text-sm sm:text-base">
                Preencha os dados abaixo e nossa equipe entrará em contato
              </p>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Nome Completo *</label>
                <Input placeholder="Seu nome completo" className="border-gray-300 focus:border-green-800 opacity-40" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Mensagem</label>
                <Textarea placeholder="Conte-nos sobre suas necessidades, orçamento, preferências..." rows={4} className="border-gray-300 focus:border-green-800 opacity-40" />
              </div>
              
              <Button className="w-full bg-green-800 opacity-40 hover:bg-green-800 hover:opacity-60 text-base sm:text-lg py-3" onClick={handleWhatsAppClick}>
                Enviar Solicitação
              </Button>
              
              <p className="text-xs sm:text-sm text-gray-600 text-center">
                * Campos obrigatórios. Responderemos em até 2 horas úteis.
              </p>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-4 sm:space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className={`shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer p-4 sm:p-6 ${info.highlight ? 'bg-green-50 border-green-200' : ''}`} onClick={handleWhatsAppClick}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${info.highlight ? 'bg-green-600' : 'bg-gray-100'}`}>
                      <IconComponent className={`w-6 h-6 ${info.highlight ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{info.title}</h3>
                      <p className={`font-bold text-sm sm:text-base ${info.highlight ? 'text-green-600' : 'text-gray-800'}`}>{info.content}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{info.subtitle}</p>
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* WhatsApp Destaque */}
            
          </div>
        </div>

        {/* Mapa do Google Maps */}
        <div className="bg-gray-50 rounded-2xl p-4 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-4 sm:mb-6">
            Nossa Localização
          </h3>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.076666666667!2d-53.80666668885498!3d-29.68444998202286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9501d57f7b7b7b7b%3A0x1234567890abcdef!2sRua%20Riachuelo%2C%20224%20-%20Centro%2C%20Santa%20Maria%20-%20RS%2C%2097050-010!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="300" 
              className="sm:h-[400px]" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Localização Super Colchões" 
            />
          </div>
          <div className="text-center mt-4 sm:mt-6 space-y-2">
            <p className="text-base sm:text-lg font-semibold text-gray-800">
              Rua Riachuelo, 224 - Esq. Tuiuti
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Santa Maria, RS - CEP 97050-010
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Venha nos visitar! Estamos esperando você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWithMap;
