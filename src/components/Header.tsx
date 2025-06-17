
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = () => {
    const phoneNumber = "5555991630055";
    const message = "Olá! Gostaria de saber mais sobre os colchões da SuperColchões.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/748faed7-8409-4ca0-a866-967259247f21.png" 
                alt="SuperColchões" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')} 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 flex items-center gap-2" 
              onClick={handleContactClick}
            >
              <Phone className="w-4 h-4" />
              Fale Conosco
            </Button>
          </div>

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
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2 text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2 text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')} 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2 text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2 text-left"
              >
                Contato
              </button>
              <Button 
                className="bg-red-600 hover:bg-red-700 w-full mt-4 flex items-center justify-center gap-2" 
                onClick={handleContactClick}
              >
                <Phone className="w-4 h-4" />
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
