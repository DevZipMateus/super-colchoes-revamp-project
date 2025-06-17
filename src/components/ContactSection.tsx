
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleWhatsAppClick = () => {
    const phoneNumber = "5555991630055";
    const message = "Olá! Gostaria de saber mais sobre os colchões da SuperColchões.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirecionar para WhatsApp com os dados do formulário
    const message = `Olá! Meu nome é ${formData.name}. ${formData.message}`;
    const phoneNumber = "5555991630055";
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
      bgColor: "bg-blue-50"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(55) 99163-0055",
      subtitle: "Atendimento rápido e personalizado",
      color: "text-green-600",
      bgColor: "bg-green-50",
      highlight: true
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "supercolchoes@yahoo.com.br",
      subtitle: "Respondemos em até 4 horas",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Seg a Sex: 8h às 18h",
      subtitle: "Sábado: 8h às 17h",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="contato" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Fale <span className="text-red-600">Conosco</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar você a encontrar o colchão perfeito. 
            Entre em contato conosco e receba atendimento especializado.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className="shadow-2xl border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Send className="w-6 h-6" />
                  Solicite um Orçamento
                </CardTitle>
                <p className="opacity-90">
                  Preencha os dados abaixo e nossa equipe entrará em contato
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Nome Completo *</label>
                      <Input 
                        placeholder="Seu nome completo" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Telefone / WhatsApp *</label>
                      <Input 
                        placeholder="(55) 99999-9999" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">E-mail</label>
                    <Input 
                      type="email" 
                      placeholder="seu@email.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Mensagem</label>
                    <Textarea 
                      placeholder="Conte-nos sobre suas necessidades, tamanho do colchão, preferências..." 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Quero falar com um especialista
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    * Campos obrigatórios. Responderemos em até 2 horas úteis.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index} 
                    className={`shadow-lg border-0 hover:shadow-xl transition-all duration-300 cursor-pointer ${info.highlight ? 'ring-2 ring-green-500 transform hover:scale-105' : ''}`}
                    onClick={info.highlight ? handleWhatsAppClick : undefined}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${info.bgColor}`}>
                          <IconComponent className={`w-7 h-7 ${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-lg mb-1">{info.title}</h4>
                          <p className={`font-semibold mb-1 ${info.color} text-lg`}>
                            {info.content}
                          </p>
                          <p className="text-gray-600 text-sm">{info.subtitle}</p>
                        </div>
                        {info.highlight && (
                          <div className="text-green-600 font-semibold text-sm bg-green-100 px-3 py-1 rounded-full">
                            Preferencial
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* WhatsApp Highlight Card */}
              <Card className="shadow-xl border-0 bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-2xl transition-shadow cursor-pointer" onClick={handleWhatsAppClick}>
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                      <img src="/lovable-uploads/ab271b32-cd91-484c-97ce-567483a1d65b.png" alt="WhatsApp" className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl mb-3">Atendimento WhatsApp</h3>
                      <p className="mb-6 opacity-90 text-lg">
                        Fale diretamente com nossos especialistas pelo WhatsApp. 
                        Atendimento rápido e personalizado!
                      </p>
                      <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6">
                        <img src="/lovable-uploads/ab271b32-cd91-484c-97ce-567483a1d65b.png" alt="WhatsApp" className="w-5 h-5 mr-2" />
                        Chamar no WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Location Map */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <MapPin className="w-8 h-8 text-red-600 inline-block mr-2" />
                Nossa Localização
              </h3>
              <p className="text-gray-600">
                Venha nos visitar! Estamos localizados no centro de Santa Maria-RS
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.076666666667!2d-53.80666668885498!3d-29.68444998202286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9501d57f7b7b7b7b%3A0x1234567890abcdef!2sRua%20Riachuelo%2C%20224%20-%20Centro%2C%20Santa%20Maria%20-%20RS%2C%2097050-010!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Localização Super Colchões"
              />
            </div>
            
            <div className="text-center mt-6 space-y-2">
              <p className="text-lg font-semibold text-gray-800">
                📍 Rua Riachuelo, 224 - Esq. Tuiuti
              </p>
              <p className="text-gray-600">
                Santa Maria, RS - CEP 97050-010
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
