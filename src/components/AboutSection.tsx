
import { Shield, Award, Users, Clock, Truck, Phone } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: "20+", label: "Anos de Experiência" },
    { number: "50k+", label: "Clientes Atendidos" },
    { number: "500+", label: "Modelos em Estoque" },
    { number: "15+", label: "Marcas Parceiras" }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Garantia Estendida",
      description: "Garantia de até 20 anos nos colchões, uma das maiores do mercado brasileiro."
    },
    {
      icon: Truck,
      title: "Entrega Grátis",
      description: "Entregamos gratuitamente em todo o Brasil, com prazos diferenciados para cada região."
    },
    {
      icon: Award,
      title: "Melhores Marcas",
      description: "Trabalhamos apenas com as marcas mais reconhecidas e confiáveis do mercado."
    },
    {
      icon: Users,
      title: "Atendimento Especializado",
      description: "Equipe treinada para ajudar você a escolher o colchão ideal para suas necessidades."
    },
    {
      icon: Clock,
      title: "Pronta Entrega",
      description: "Mais de 500 modelos em estoque para entrega imediata em todo o Brasil."
    },
    {
      icon: Phone,
      title: "Suporte Completo",
      description: "Atendimento pré e pós-venda para garantir sua total satisfação."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Por que escolher a <span className="text-red-600">SuperColchões</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Há mais de 20 anos no mercado, somos especialistas em sono e bem-estar. 
            Trabalhamos com as melhores marcas nacionais e importadas para oferecer 
            a você a melhor experiência em descanso.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefícios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <benefit.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Nossa História */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Nossa História</h3>
              <p className="text-gray-600 leading-relaxed">
                A SuperColchões nasceu em 2003 com o objetivo de democratizar o acesso a colchões de qualidade. 
                Começamos como uma pequena loja em São Paulo e hoje atendemos todo o Brasil.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa missão é proporcionar noites de sono reparadoras para toda a família brasileira, 
                oferecendo produtos de qualidade com preços justos e atendimento diferenciado.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Mais de 15 marcas parceiras</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Entrega em todo o território nacional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Atendimento personalizado para cada cliente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Garantia estendida de até 20 anos</span>
                </div>
              </div>
            </div>
            
            {/* Espaço para imagem da empresa */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl font-bold">SC</span>
                </div>
                <h4 className="text-2xl font-bold text-green-800">SuperColchões</h4>
                <p className="text-green-700 px-4">
                  Imagem da nossa loja / equipe / história aqui
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
