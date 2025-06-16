
const PromoImageSection = () => {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <img 
              src="/lovable-uploads/a9be3ebc-fc37-40a1-9713-fbe84abea87e.png" 
              alt="Super Colchões - Uma escolha inteligente" 
              className="w-full h-auto object-contain rounded-lg shadow-lg max-h-[300px] sm:max-h-[400px] lg:max-h-[500px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoImageSection;
