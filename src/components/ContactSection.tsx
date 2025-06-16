
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 99999-9999",
      subtitle: "Segunda a Sábado, 8h às 18h"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@supercolchoes.com",
      subtitle: "Respondemos em até 2 horas"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua das Flores, 123 - Centro",
      subtitle: "São Paulo, SP - CEP 01000-000"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Seg a Sex: 8h às 18h",
      subtitle: "Sáb: 8h às 14h - Dom: Fechado"
    }
  ];

  return (
    <section id="contato" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Entre em <span className="text-red-600">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar você a encontrar o colchão perfeito. Entre em contato conosco e tire todas as suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <MessageCircle className="w-6 h-6 text-red-600 mr-2" />
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nome Completo</label>
                  <Input placeholder="Seu nome completo" className="border-gray-300 focus:border-red-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Telefone</label>
                  <Input placeholder="(11) 99999-9999" className="border-gray-300 focus:border-red-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">E-mail</label>
                <Input type="email" placeholder="seu@email.com" className="border-gray-300 focus:border-red-500" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Assunto</label>
                <Input placeholder="Como podemos ajudar?" className="border-gray-300 focus:border-red-500" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Mensagem</label>
                <Textarea 
                  placeholder="Conte-nos mais sobre sua necessidade..." 
                  rows={5}
                  className="border-gray-300 focus:border-red-500"
                />
              </div>
              
              <Button className="w-full bg-red-600 hover:bg-red-700 text-lg py-3">
                Enviar Mensagem
              </Button>
              
              <p className="text-sm text-gray-600 text-center">
                Responderemos sua mensagem em até 2 horas úteis
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{info.title}</h3>
                      <p className="text-red-600 font-medium mb-1">{info.content}</p>
                      <p className="text-gray-600 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* WhatsApp CTA */}
            <Card className="shadow-lg border-0 bg-green-50 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">WhatsApp</h3>
                    <p className="text-gray-600 mb-4">
                      Fale conosco agora mesmo pelo WhatsApp e receba atendimento imediato!
                    </p>
                    <Button className="bg-green-500 hover:bg-green-600 text-white">
                      Conversar no WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
