
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

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
      subtitle: "Atendimento de Segunda a Sábado",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(55) 99163-0055",
      subtitle: "Atendimento rápido e personalizado",
      highlight: true,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "supercolchoes@yahoo.com.br",
      subtitle: "Respondemos em até 4 horas",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta: 8h às 18h",
      subtitle: "Sábado: 8h às 17h",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section id="contato" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Fale <span className="text-red-600">Conosco</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar você a encontrar o colchão perfeito. 
            Entre em contato conosco e receba atendimento especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index} 
                    className={`hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer ${info.highlight ? 'ring-2 ring-green-200' : ''}`}
                    onClick={info.highlight ? handleWhatsAppClick : undefined}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full ${info.bgColor} flex items-center justify-center`}>
                          <IconComponent className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm">{info.title}</h3>
                          <p className={`font-bold text-base ${info.highlight ? 'text-green-600' : 'text-gray-800'}`}>{info.content}</p>
                          <p className="text-sm text-gray-600">{info.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Quick Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 flex items-center">
                <img src="/lovable-uploads/ab271b32-cd91-484c-97ce-567483a1d65b.png" alt="WhatsApp" className="w-6 h-6 mr-2" />
                Solicite um Orçamento
              </CardTitle>
              <p className="text-gray-600 text-sm">
                Preencha os dados e nossa equipe entrará em contato
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Nome Completo *</label>
                <Input placeholder="Seu nome completo" className="border-gray-300 focus:border-red-500" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Telefone</label>
                <Input placeholder="(55) 99999-9999" className="border-gray-300 focus:border-red-500" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Mensagem</label>
                <Textarea 
                  placeholder="Conte-nos sobre suas necessidades..." 
                  rows={3} 
                  className="border-gray-300 focus:border-red-500" 
                />
              </div>
              
              <Button className="w-full bg-red-600 hover:bg-red-700 text-base py-3" onClick={handleWhatsAppClick}>
                Enviar Solicitação
              </Button>
              
              <p className="text-xs text-gray-600 text-center">
                * Campos obrigatórios. Responderemos em até 2 horas úteis.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Location Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nossa Localização
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Endereço</p>
                    <p className="text-gray-600">Rua Riachuelo, 224 - Esq. Tuiuti</p>
                    <p className="text-gray-600">Santa Maria, RS - CEP 97050-010</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Funcionamento</p>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábado: 8h às 17h</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-6 p-4 bg-blue-50 rounded-lg">
                <strong>Dica:</strong> Venha nos visitar! Temos uma grande variedade de colchões 
                para você testar e escolher o ideal para suas necessidades.
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.076666666667!2d-53.80666668885498!3d-29.68444998202286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9501d57f7b7b7b7b%3A0x1234567890abcdef!2sRua%20Riachuelo%2C%20224%20-%20Centro%2C%20Santa%20Maria%20-%20RS%2C%2097050-010!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Localização Super Colchões" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWithMap;
