
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5555991630055";
    const message = "Olá! Gostaria de saber mais sobre os colchões da SuperColchões.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src="/lovable-uploads/748faed7-8409-4ca0-a866-967259247f21.png" 
                alt="SuperColchões" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 leading-relaxed">
                Especialistas em sono há mais de 39 anos, oferecendo os melhores colchões 
                para toda a família com atendimento diferenciado e produtos de qualidade superior.
              </p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/supercolchoesumaescolhainteligente" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/super_colchoes/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCtNbeMmIUFsQ8jSULkOYIcQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <button 
                onClick={handleWhatsAppClick} 
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <img src="/lovable-uploads/ab271b32-cd91-484c-97ce-567483a1d65b.png" alt="WhatsApp" className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4 text-red-400">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')} 
                  className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')} 
                  className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')} 
                  className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')} 
                  className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4 text-red-400">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Colchões Ortopédicos</li>
              <li className="text-gray-300">Memory Foam</li>
              <li className="text-gray-300">Pocket Spring</li>
              <li className="text-gray-300">Medidas Especiais</li>
              <li className="text-gray-300">Entrega Gratuita</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4 text-red-400">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">(55) 3221-8035</span>
              </div>
              <div 
                className="flex items-center space-x-3 cursor-pointer hover:text-green-400 transition-colors" 
                onClick={handleWhatsAppClick}
              >
                <img src="/lovable-uploads/ab271b32-cd91-484c-97ce-567483a1d65b.png" alt="WhatsApp" className="w-5 h-5 flex-shrink-0" />
                <span className="text-gray-300">(55) 99163-0055</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">supercolchoes@yahoo.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Rua Riachuelo, 224<br />
                  Esq. Tuiuti<br />
                  Santa Maria, RS<br />
                  CEP 97050-010
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Seg a Sex: 8h às 18h<br />
                  Sábado: 8h às 17h
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 SuperColchões. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                39 anos de tradição em qualidade e conforto
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Termos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
