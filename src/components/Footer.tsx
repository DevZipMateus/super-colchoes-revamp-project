
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5555991630055";
    const message = "Olá! Gostaria de saber mais sobre os colchões da SuperColchões.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-300 leading-relaxed">
                Especialistas em sono há mais de 39 anos, oferecendo os melhores colchões para toda a família.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/supercolchoesumaescolhainteligente" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-60 transition-colors" style={{ backgroundColor: '#2cf96a' }}>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/super_colchoes/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-60 transition-colors" style={{ backgroundColor: '#2cf96a' }}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCtNbeMmIUFsQ8jSULkOYIcQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-60 transition-colors" style={{ backgroundColor: '#2cf96a' }}>
                <Youtube className="w-5 h-5" />
              </a>
              <button onClick={handleWhatsAppClick} className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <img src="/lovable-uploads/ab271b32-cd91-484c-97ce-567483a1d65b.png" alt="WhatsApp" className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Produtos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-800 hover:opacity-40 transition-colors">Colchões Ortopédicos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-800 hover:opacity-40 transition-colors">Memory Foam</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-800 hover:opacity-40 transition-colors">Pocket Spring</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-800 hover:opacity-40 transition-colors">Linha Econômica</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-800 hover:opacity-40 transition-colors">Acessórios</a></li>
            </ul>
          </div>

          {/* Services */}
          

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 cursor-pointer hover:text-green-800 hover:opacity-40 transition-colors" onClick={handleWhatsAppClick}>
                <Phone className="w-5 h-5" style={{ color: '#0DA456' }} />
                <span className="text-gray-300">(55) 3221-8035</span>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer hover:text-green-400 transition-colors" onClick={handleWhatsAppClick}>
                <img src="/lovable-uploads/ab271b32-cd91-484c-97ce-567483a1d65b.png" alt="WhatsApp" className="w-5 h-5" />
                <span className="text-gray-300">(55) 99163-0055</span>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer hover:text-green-800 hover:opacity-40 transition-colors" onClick={handleWhatsAppClick}>
                <Mail className="w-5 h-5" style={{ color: '#0DA456' }} />
                <span className="text-gray-300">supercolchoes@yahoo.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1" style={{ color: '#0DA456' }} />
                <span className="text-gray-300">
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
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 SuperColchões. Todos os direitos reservados.</p>
            <div className="flex space-x-6 text-sm">
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
