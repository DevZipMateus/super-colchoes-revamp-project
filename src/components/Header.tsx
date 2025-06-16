import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5555991630055";
    const message = "Olá! Gostaria de saber mais sobre os colchões da SuperColchões.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>(55) 3221-8035</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <span>supercolchoes@yahoo.com.br</span>
              </div>
            </div>
            <div className="flex items-center mt-2 sm:mt-0">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Santa Maria, RS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/748faed7-8409-4ca0-a866-967259247f21.png" 
                alt="SuperColchões" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Início</Link>
            <a href="#produtos" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Produtos</a>
            <Link to="/catalogo" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Catálogo</Link>
            <a href="#sobre" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Sobre</a>
            <a href="#contato" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contato</a>
            <Button className="bg-red-600 hover:bg-red-700" onClick={handleWhatsAppClick}>
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">Início</Link>
              <a href="#produtos" className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">Produtos</a>
              <Link to="/catalogo" className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">Catálogo</Link>
              <a href="#sobre" className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">Contato</a>
              <Button className="bg-red-600 hover:bg-red-700 w-full mt-4" onClick={handleWhatsAppClick}>
                Fale Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
