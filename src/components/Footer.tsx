
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">SuperColchões</h3>
              <p className="text-gray-300 leading-relaxed">
                Especialistas em sono há mais de 10 anos, oferecendo os melhores colchões para toda a família.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Produtos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Colchões Ortopédicos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Memory Foam</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Pocket Spring</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Linha Econômica</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Acessórios</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Entrega Grátis</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Montagem</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Garantia Estendida</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Troca Facilitada</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Financiamento</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">contato@supercolchoes.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Rua das Flores, 123<br />
                  Centro - São Paulo, SP<br />
                  CEP 01000-000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 SuperColchões. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Termos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
