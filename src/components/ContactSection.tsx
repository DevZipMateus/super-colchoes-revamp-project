
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5555991630055";
    const message = "Olá! Gostaria de saber mais sobre os colchões da SuperColchões.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      content: "(55) 99163-0055",
      subtitle: "Atendimento de Segunda a Sábado",
      highlight: true,
      isWhatsApp: true
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
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 8h às 18h",
      subtitle: "Sábado: 8h às 14h"
    }
  ];

  const cities = [
    "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", 
    "Brasília", "Fortaleza", "Recife", "Porto Alegre", "Curitiba", "Goiânia"
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Fale <span className="text-red-600">Conosco</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar você a encontrar o colchão perfeito. 
            Entre em contato conosco e receba atendimento especializado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Formulário de Contato */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <img src="/lovable-uploads/95170b76-0f76-439e-9a3e-8f066ecf1a0b.png" alt="WhatsApp" className="w-6 h-6 mr-2" />
                Solicite um Orçamento
              </CardTitle>
              <p className="text-gray-600">
                Preencha os dados abaixo e nossa equipe entrará em contato
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nome Completo *</label>
                  <Input placeholder="Seu nome completo" className="border-gray-300 focus:border-red-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Telefone / WhatsApp *</label>
                  <Input placeholder="(55) 99999-9999" className="border-gray-300 focus:border-red-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">E-mail</label>
                <Input type="email" placeholder="seu@email.com" className="border-gray-300 focus:border-red-500" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Cidade</label>
                  <Input placeholder="Sua cidade" className="border-gray-300 focus:border-red-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Tamanho do Colchão</label>
                  <Input placeholder="Ex: Casal, Queen, King..." className="border-gray-300 focus:border-red-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Mensagem</label>
                <Textarea 
                  placeholder="Conte-nos sobre suas necessidades, orçamento, preferências..." 
                  rows={4}
                  className="border-gray-300 focus:border-red-500"
                />
              </div>
              
              <Button className="w-full bg-red-600 hover:bg-red-700 text-lg py-3" onClick={handleWhatsAppClick}>
                Enviar Solicitação
              </Button>
              
              <p className="text-sm text-gray-600 text-center">
                * Campos obrigatórios. Responderemos em até 2 horas úteis.
              </p>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className={`shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer ${info.highlight ? 'bg-green-50 border-green-200' : ''}`} onClick={info.isWhatsApp ? handleWhatsAppClick : undefined}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${info.highlight ? 'bg-green-500' : 'bg-green-100'}`}>
                      {info.isWhatsApp ? (
                        <img src="/lovable-uploads/95170b76-0f76-439e-9a3e-8f066ecf1a0b.png" alt="WhatsApp" className="w-6 h-6" />
                      ) : (
                        <info.icon className={`w-6 h-6 ${info.highlight ? 'text-white' : 'text-green-600'}`} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{info.title}</h3>
                      <p className={`font-medium mb-1 ${info.highlight ? 'text-green-700 text-lg' : 'text-red-600'}`}>
                        {info.content}
                      </p>
                      <p className="text-gray-600 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* WhatsApp Destaque */}
            <Card className="shadow-lg border-0 bg-green-600 text-white hover:shadow-xl transition-shadow cursor-pointer" onClick={handleWhatsAppClick}>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                    <img src="/lovable-uploads/95170b76-0f76-439e-9a3e-8f066ecf1a0b.png" alt="WhatsApp" className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Atendimento WhatsApp</h3>
                    <p className="mb-4 opacity-90">
                      Fale diretamente com nossos especialistas pelo WhatsApp. 
                      Atendimento rápido e personalizado!
                    </p>
                    <Button className="bg-white text-green-600 hover:bg-gray-100 flex items-center">
                      <img src="/lovable-uploads/95170b76-0f76-439e-9a3e-8f066ecf1a0b.png" alt="WhatsApp" className="w-4 h-4 mr-2" />
                      Chamar no WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Cidades que Atendemos */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Principais Cidades que Atendemos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {cities.map((city, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="font-medium text-gray-800">{city}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            E muitas outras cidades em todo o Brasil!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
