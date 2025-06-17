
import { Shield, Award, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Sobre a <span className="text-red-600">SuperColchões</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-6">
                <p>
                  Há <span className="font-bold text-red-600">39 anos</span> cuidando do bem-estar e qualidade de vida de nossos clientes. 
                  A <span className="font-bold text-red-600">Super Colchões</span> investe em produtos de alta qualidade, requinte e conforto.
                </p>
                
                <p>
                  Pioneira no ramo de colchões em <span className="font-bold text-green-600">Santa Maria-RS</span>, 
                  dispomos de produtos multimarcas, atendimento diferenciado e exclusivo.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-red-600 mb-2">39+</div>
                  <div className="text-gray-600 font-medium">Anos de Experiência</div>
                </div>
                
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
                  <div className="text-gray-600 font-medium">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="grid gap-6">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Qualidade Garantida</h3>
                    <p className="text-gray-600 text-sm">Produtos de alta qualidade com garantia e certificação.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tradição e Confiança</h3>
                    <p className="text-gray-600 text-sm">Quase 4 décadas servindo Santa Maria com excelência.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Atendimento Personalizado</h3>
                    <p className="text-gray-600 text-sm">Consultoria especializada para cada necessidade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seal image */}
          <div className="flex justify-center mt-12">
            <div className="w-full max-w-md">
              <img 
                alt="38 Anos de Credibilidade - SuperColchões" 
                className="w-full h-auto object-contain max-h-40" 
                loading="lazy" 
                src="https://static.wixstatic.com/media/f290ed_1d61da28b1574418847382223f81bda6~mv2.jpg/v1/fill/w_229,h_211,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SELO%2038%20ANOS_edited.jpg" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
