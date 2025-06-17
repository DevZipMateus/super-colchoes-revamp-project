
import { Award, Users, Heart, Target } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: Award,
      number: "39",
      label: "Anos de Experiência",
      color: "text-green-600 opacity-60"
    },
    {
      icon: Users,
      number: "10mil+",
      label: "Clientes Atendidos",
      color: "text-green-600"
    },
    {
      icon: Heart,
      number: "100%",
      label: "Satisfação",
      color: "text-blue-600"
    },
    {
      icon: Target,
      number: "#1",
      label: "em Santa Maria",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              <span className="text-green-600 opacity-60">Sobre</span> Nós
            </h2>
            <div className="w-24 h-1 bg-green-600 opacity-60 mx-auto mb-6"></div>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Conheça nossa história e compromisso com a qualidade do seu sono
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="space-y-6">
              <div className="text-xl lg:text-2xl text-black leading-relaxed space-y-6">
                <p>
                  Há <span className="font-bold text-green-600 opacity-60">39 anos</span> cuidando do bem-estar e qualidade de vida de nossos clientes. 
                  A <span className="font-bold text-green-600 opacity-60">Super Colchões</span> investe em produtos de alta qualidade, requinte e conforto.
                </p>
                
                <p>
                  Pioneira no ramo de colchões em <span className="font-bold text-green-600">Santa Maria-RS</span>, 
                  dispomos de produtos multimarcas, atendimento diferenciado e exclusivo.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600 opacity-60">
                <h3 className="text-xl font-bold text-black mb-3">Nossa Missão</h3>
                <p className="text-black">
                  Proporcionar noites de sono reparador através de produtos de qualidade superior, 
                  atendimento personalizado e preços justos para toda a família.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-8 shadow-xl">
                <img 
                  src="/lovable-uploads/a9be3ebc-fc37-40a1-9713-fbe84abea87e.png" 
                  alt="Super Colchões - Uma escolha inteligente" 
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-600 opacity-60 rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-600 rounded-full opacity-10"></div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-')}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-black font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
