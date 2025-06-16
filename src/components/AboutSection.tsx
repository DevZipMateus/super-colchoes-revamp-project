
import { Shield, Truck, CreditCard, Users, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Garantia Estendida",
      description: "Todos os nossos colchões vêm com garantia de até 10 anos, garantindo sua tranquilidade."
    },
    {
      icon: Truck,
      title: "Entrega Grátis",
      description: "Entregamos gratuitamente em toda a região metropolitana de São Paulo."
    },
    {
      icon: CreditCard,
      title: "Parcelamento",
      description: "Parcele em até 12x sem juros no cartão de crédito ou PIX com desconto."
    },
    {
      icon: Users,
      title: "Atendimento Especializado",
      description: "Nossa equipe está pronta para ajudar você a escolher o colchão ideal."
    },
    {
      icon: Award,
      title: "Qualidade Certificada",
      description: "Produtos certificados pelo INMETRO com os mais altos padrões de qualidade."
    },
    {
      icon: Clock,
      title: "Atendimento 24/7",
      description: "Suporte online disponível 24 horas por dia, 7 dias por semana."
    }
  ];

  const stats = [
    { number: "10+", label: "Anos de Experiência" },
    { number: "50k+", label: "Colchões Vendidos" },
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "24h", label: "Suporte Online" }
  ];

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Por que escolher a <span className="text-red-600">SuperColchões</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especialistas em sono há mais de uma década, oferecendo produtos de qualidade superior com o melhor atendimento do mercado.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <feature.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* About text */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Nossa História</h3>
              <p className="text-gray-600 leading-relaxed">
                Fundada em 2013, a SuperColchões nasceu com a missão de proporcionar noites de sono reparadoras para toda a família. Começamos como uma pequena loja familiar e hoje somos referência em qualidade e atendimento.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Trabalhamos apenas com as melhores marcas e tecnologias do mercado, garantindo que cada cliente encontre o colchão perfeito para suas necessidades específicas.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Produtos certificados e de alta qualidade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Atendimento personalizado e especializado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Compromisso com a satisfação do cliente</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl font-bold">SC</span>
                </div>
                <h4 className="text-2xl font-bold text-green-800">SuperColchões</h4>
                <p className="text-green-700">Especialistas em Sono desde 2013</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
