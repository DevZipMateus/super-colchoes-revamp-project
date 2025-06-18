
import { Shield, Award, Users, Clock, Truck, Phone } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Sobre
          </h2>
          
          {/* Layout dividido: imagem à esquerda, texto à direita */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Imagem à esquerda */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md">
                <img 
                  src="/lovable-uploads/d97b8f3d-8edf-451b-8d23-af08e762a597.png" 
                  alt="Colchão de molas Maxspring Multimoleio" 
                  className="w-full h-auto rounded-lg shadow-lg" 
                />
              </div>
            </div>
            
            {/* Texto à direita */}
            <div className="text-left space-y-6">
              <div className="text-xl text-text-primary leading-relaxed space-y-6">
                <p>
                  Há <span className="font-bold text-primary">39 anos</span> cuidando do bem-estar e qualidade de vida de nossos clientes. 
                  A <span className="font-bold text-primary">Super Colchões</span> investe em produtos de alta qualidade, requinte e conforto.
                </p>
                
                <p>
                  Pioneira no ramo de colchões em <span className="font-bold text-text-primary">Santa Maria-RS</span>, 
                  dispomos de produtos multimarcas, atendimento diferenciado e exclusivo.
                </p>
              </div>
            </div>
          </div>

          {/* Seção de valores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-text-primary">39 Anos</h3>
              <p className="text-text-secondary">de experiência no mercado</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-text-primary">Qualidade</h3>
              <p className="text-text-secondary">produtos de alta qualidade</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-text-primary">Atendimento</h3>
              <p className="text-text-secondary">diferenciado e exclusivo</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-text-primary">Confiança</h3>
              <p className="text-text-secondary">pioneira em Santa Maria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
