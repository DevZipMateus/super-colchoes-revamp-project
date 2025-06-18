
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5555991630055";
    const message = "Olá! Gostaria de saber mais sobre os colchões da SuperColchões.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Especialistas em sono há mais de 39 anos, oferecendo os melhores colchões para toda a família.
              </p>
            </div>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://www.facebook.com/supercolchoesumaescolhainteligente" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:opacity-60 transition-colors" style={{ backgroundColor: '#2cf96a' }}>
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.instagram.com/super_colchoes/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:opacity-60 transition-colors" style={{ backgroundColor: '#2cf96a' }}>
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCtNbeMmIUFsQ8jSULkOYIcQ" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:opacity-60 transition-colors" style={{ backgroundColor: '#2cf96a' }}>
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <button onClick={handleWhatsAppClick} className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <img src="/lovable-uploads/ab271b32-cd91-484c-97ce-567483a1d65b.png" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Produtos</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-800 hover:opacity-40 transition-colors text-sm sm:text-base">Colchões Ortopédicos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-800 hover:opacity-40 transition-colors text-sm sm:text-base">Memory Foam</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-800 hover:opacity-40 transition-colors text-sm sm:text-base">Pocket Spring</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-800 hover:opacity-40 transition-colors text-sm sm:text-base">Linha Econômica</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-800 hover:opacity-40 transition-colors text-sm sm:text-base">Acessórios</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contato</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer hover:text-green-800 hover:opacity-40 transition-colors" onClick={handleWhatsAppClick}>
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#0DA456' }} />
                <span className="text-gray-300 text-sm sm:text-base">(55) 3221-8035</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer hover:text-green-400 transition-colors" onClick={handleWhatsAppClick}>
                <img src="/lovable-uploads/ab271b32-cd91-484c-97ce-567483a1d65b.png" alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">(55) 99163-0055</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer hover:text-green-800 hover:opacity-40 transition-colors" onClick={handleWhatsAppClick}>
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#0DA456' }} />
                <span className="text-gray-300 text-sm sm:text-base break-all">supercolchoes@yahoo.com.br</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#0DA456' }} />
                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Rua Riachuelo, 224<br />
                  Esq. Tuiuti<br />
                  Santa Maria, RS<br />
                  CEP 97050-010
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">© 2025 SuperColchões. Todos os direitos reservados.</p>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-green-800 hover:opacity-40 transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-green-800 hover:opacity-40 transition-colors">Termos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-green-800 hover:opacity-40 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
