
const PaymentMethodsSection = () => {
  const paymentMethods = [
    {
      name: "Hipercard",
      image: "/lovable-uploads/ccc0dd64-e4e3-4eed-91f7-6199f812efe4.png"
    },
    {
      name: "Verde Card",
      image: "/lovable-uploads/8898e867-b978-4053-8db6-194dc7a8a27f.png"
    },
    {
      name: "Banri Compras",
      image: "/lovable-uploads/895f69e9-291b-4690-979d-1e4949372814.png"
    },
    {
      name: "American Express",
      image: "/lovable-uploads/1fdf1465-92a5-421d-9cbe-ebe36ae44e80.png"
    },
    {
      name: "Elo",
      image: "/lovable-uploads/9656ea9f-7bc1-4b20-a000-bedc96232eb1.png"
    },
    {
      name: "MasterCard",
      image: "/lovable-uploads/832515c4-a810-430e-b9f5-b1a0853ec0d3.png"
    },
    {
      name: "Visa",
      image: "/lovable-uploads/087ad569-8dd1-48f7-8941-72190eac78f2.png"
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-gray-50 w-full max-w-full overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Formas de Pagamento
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Aceitamos diversas formas de pagamento para sua comodidade
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-lg shadow-sm p-3 sm:p-4 hover:shadow-md transition-shadow duration-300"
              style={{ minWidth: '80px', minHeight: '50px' }}
            >
              <img
                src={method.image}
                alt={method.name}
                className="h-6 sm:h-8 md:h-10 w-auto object-contain max-w-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodsSection;
