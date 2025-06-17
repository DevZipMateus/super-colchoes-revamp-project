
import { Shield, Award, Users, Clock, Truck, Phone } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            <span className="text-green-800 opacity-40">Sobre</span>
          </h2>
          
          <div className="text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-6">
            <p>
              Há <span className="font-bold text-green-800 opacity-40">39 anos</span> cuidando do bem-estar e qualidade de vida de nossos clientes. 
              A <span className="font-bold text-green-800 opacity-40">Super Colchões</span> investe em produtos de alta qualidade, requinte e conforto.
            </p>
            
            <p>
              Pioneira no ramo de colchões em <span className="font-bold text-green-600">Santa Maria-RS</span>, 
              dispomos de produtos multimarcas, atendimento diferenciado e exclusivo.
            </p>
          </div>

          {/* Espaço para imagem */}
          <div className="mt-12">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
