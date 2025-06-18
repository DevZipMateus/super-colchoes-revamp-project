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
  return <header className="bg-white shadow-lg sticky top-0 z-50 w-full max-w-full overflow-x-hidden">
      {/* Top bar - Responsive */}
      <div className="text-white py-2 sm:py-3 hidden sm:block w-full" style={{
      backgroundColor: '#3b3f3c'
    }}>
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl w-full">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 lg:space-x-6 xl:space-x-8">
              <div className="flex items-center">
                <Phone className="w-3 sm:w-4 lg:w-5 xl:w-6 h-3 sm:h-4 lg:h-5 xl:h-6 mr-1 lg:mr-2 flex-shrink-0" />
                <span className="font-medium whitespace-nowrap">(55) 3221-8035</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-3 sm:w-4 lg:w-5 xl:w-6 h-3 sm:h-4 lg:h-5 xl:h-6 mr-1 lg:mr-2 flex-shrink-0" />
                <span className="hidden md:inline font-medium">supercolchoes@yahoo.com.br</span>
                <span className="md:hidden font-medium">contato@supercolchoes</span>
              </div>
            </div>
            <div className="flex items-center mt-2 lg:mt-0">
              <MapPin className="w-3 sm:w-4 lg:w-5 xl:w-6 h-3 sm:h-4 lg:h-5 xl:h-6 mr-1 lg:mr-2 flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">Santa Maria, RS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header - Fully responsive */}
      <div className="w-full max-w-7xl mx-auto px-4 py-3 sm:py-4 lg:py-5 xl:py-6">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img src="/lovable-uploads/748faed7-8409-4ca0-a866-967259247f21.png" alt="SuperColchões" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20 w-auto transition-all duration-300 max-w-full object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation - Responsive spacing */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8 flex-shrink-0">
            <Link to="/" className="text-gray-700 hover:text-green-800 hover:opacity-40 transition-colors font-medium text-sm xl:text-base 2xl:text-lg hover:scale-105 transition-transform whitespace-nowrap">
              Início
            </Link>
            
            <Link to="/catalogo" className="text-gray-700 hover:text-green-800 hover:opacity-40 transition-colors font-medium text-sm xl:text-base 2xl:text-lg hover:scale-105 transition-transform whitespace-nowrap">
              Catálogo
            </Link>
            <a href="#sobre" className="text-gray-700 hover:text-green-800 hover:opacity-40 transition-colors font-medium text-sm xl:text-base 2xl:text-lg hover:scale-105 transition-transform whitespace-nowrap">
              Sobre
            </a>
            <a href="#contato" className="text-gray-700 hover:text-green-800 hover:opacity-40 transition-colors font-medium text-sm xl:text-base 2xl:text-lg hover:scale-105 transition-transform whitespace-nowrap">
              Contato
            </a>
            <Button className="text-sm xl:text-base 2xl:text-lg px-3 xl:px-4 2xl:px-6 py-2 xl:py-3 flex items-center hover:scale-105 transition-all duration-300 whitespace-nowrap flex-shrink-0" style={{
            backgroundColor: '#3b3f3c'
          }} onClick={handleWhatsAppClick}>
              <img src="/lovable-uploads/ab271b32-cd91-484c-97ce-567483a1d65b.png" alt="WhatsApp" className="w-4 xl:w-5 2xl:w-6 h-4 xl:h-5 2xl:h-6 mr-2 flex-shrink-0" />
              <span className="hidden xl:inline">Fale Conosco</span>
              <span className="xl:hidden">Contato</span>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors flex-shrink-0">
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Improved */}
        {isMenuOpen && <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 w-full">
            <div className="flex flex-col space-y-3 pt-4 w-full">
              <Link to="/" className="text-gray-700 hover:text-green-800 hover:opacity-40 transition-colors font-medium py-2 text-sm sm:text-base w-full" onClick={toggleMenu}>
                Início
              </Link>
              <a href="#produtos" className="text-gray-700 hover:text-green-800 hover:opacity-40 transition-colors font-medium py-2 text-sm sm:text-base w-full" onClick={toggleMenu}>
                Produtos
              </a>
              <Link to="/catalogo" className="text-gray-700 hover:text-green-800 hover:opacity-40 transition-colors font-medium py-2 text-sm sm:text-base w-full" onClick={toggleMenu}>
                Catálogo
              </Link>
              <a href="#contato" className="text-gray-700 hover:text-green-800 hover:opacity-40 transition-colors font-medium py-2 text-sm sm:text-base w-full" onClick={toggleMenu}>
                Contato
              </a>
              <Button className="w-full mt-4 text-sm sm:text-base flex items-center justify-center" style={{
            backgroundColor: '#3b3f3c'
          }} onClick={handleWhatsAppClick}>
                <img src="/lovable-uploads/ab271b32-cd91-484c-97ce-567483a1d65b.png" alt="WhatsApp" className="w-4 h-4 mr-2 flex-shrink-0" />
                Fale Conosco
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;