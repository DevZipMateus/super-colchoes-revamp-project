
import React from 'react';

const FloatingWhatsApp = () => {
  const phoneNumber = "5555991630055"; // WhatsApp number from the contact info
  const message = "Olá! Gostaria de saber mais sobre os colchões da SuperColchões.";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-pulse hover:animate-none"
      aria-label="Falar no WhatsApp"
    >
      <img 
        src="/lovable-uploads/95170b76-0f76-439e-9a3e-8f066ecf1a0b.png" 
        alt="WhatsApp" 
        className="w-10 h-10"
      />
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale conosco no WhatsApp
      </div>
    </button>
  );
};

export default FloatingWhatsApp;
