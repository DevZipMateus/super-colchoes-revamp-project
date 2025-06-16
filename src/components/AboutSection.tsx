import { Shield, Award, Users, Clock, Truck, Phone } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            <span className="text-red-600">Sobre</span>
          </h2>
          
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

          {/* Espaço para imagem */}
          <div className="mt-12">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg h-80 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl font-bold">SC</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Super Colchões</h3>
                <p className="text-gray-600 px-4">
                  Espaço para imagem da loja ou equipe
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
