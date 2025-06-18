
import { Shield, Award, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-textPrimary mb-6">
            Sobre Nós
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-sm">
                <img 
                  src="/lovable-uploads/d97b8f3d-8edf-451b-8d23-af08e762a597.png" 
                  alt="Colchão de molas Maxspring Multimoleio" 
                  className="w-full h-auto rounded-lg shadow-lg" 
                />
              </div>
            </div>
            
            <div className="text-left space-y-4">
              <p className="text-base text-textSecondary leading-relaxed">
                Há <span className="font-bold text-primary">39 anos</span> cuidando do bem-estar e qualidade de vida de nossos clientes. 
                A <span className="font-bold text-primary">Super Colchões</span> investe em produtos de alta qualidade, requinte e conforto.
              </p>
              
              <p className="text-base text-textSecondary leading-relaxed">
                Pioneira no ramo de colchões em <span className="font-bold text-textPrimary">Santa Maria-RS</span>, 
                dispomos de produtos multimarcas, atendimento diferenciado e exclusivo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-14 h-14 mx-auto bg-secondary rounded-full flex items-center justify-center">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-base text-textPrimary">39 Anos</h3>
              <p className="text-sm text-textSecondary">de experiência no mercado</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-14 h-14 mx-auto bg-secondary rounded-full flex items-center justify-center">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-base text-textPrimary">Qualidade</h3>
              <p className="text-sm text-textSecondary">produtos de alta qualidade</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-14 h-14 mx-auto bg-secondary rounded-full flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-base text-textPrimary">Atendimento</h3>
              <p className="text-sm text-textSecondary">diferenciado e exclusivo</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-14 h-14 mx-auto bg-secondary rounded-full flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-base text-textPrimary">Confiança</h3>
              <p className="text-sm text-textSecondary">pioneira em Santa Maria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
