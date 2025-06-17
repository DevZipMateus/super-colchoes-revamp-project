
import { Shield, Award, Users, Clock, Truck, Phone } from 'lucide-react';
const AboutSection = () => {
  return <section className="py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center space-y-6 sm:space-y-8 xl:space-y-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 xl:mb-12">
            <span className="text-zinc-950" style={{
            color: '#000000'
          }}>Sobre</span>
          </h2>
          
          {/* Layout dividido: imagem à esquerda, texto à direita */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 2xl:gap-16 items-center">
            {/* Imagem à esquerda */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md xl:max-w-lg 2xl:max-w-xl">
                <img src="/lovable-uploads/d97b8f3d-8edf-451b-8d23-af08e762a597.png" alt="Colchão de molas Maxspring Multimoleio" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>
            
            {/* Texto à direita */}
            <div className="text-left space-y-6 xl:space-y-8">
              <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-700 leading-relaxed space-y-6 sm:space-y-8 xl:space-y-10">
                <p className="text-zinc-950">
                  Há <span className="font-bold text-gray-950" style={{
                  color: '#000000'
                }}>39 anos</span> cuidando do bem-estar e qualidade de vida de nossos clientes. 
                  A <span className="font-bold text-gray-950" style={{
                  color: '#000000'
                }}>Super Colchões</span> investe em produtos de alta qualidade, requinte e conforto.
                </p>
                
                <p className="text-gray-950">
                  Pioneira no ramo de colchões em <span className="font-bold text-gray-950">Santa Maria-RS</span>, 
                  dispomos de produtos multimarcas, atendimento diferenciado e exclusivo.
                </p>
              </div>
            </div>
          </div>

          {/* Seção de valores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 xl:gap-10 2xl:gap-12 mt-12 xl:mt-16 2xl:mt-20">
            <div className="text-center space-y-3 xl:space-y-4">
              <div className="w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12" style={{ color: '#0DA456' }} />
              </div>
              <h3 className="font-bold text-lg xl:text-xl 2xl:text-2xl text-gray-900">39 Anos</h3>
              <p className="text-sm xl:text-base 2xl:text-lg text-gray-600">de experiência no mercado</p>
            </div>

            <div className="text-center space-y-3 xl:space-y-4">
              <div className="w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 mx-auto rounded-full flex items-center justify-center bg-[#e0f4ea]">
                <Award className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12" style={{ color: '#0DA456' }} />
              </div>
              <h3 className="font-bold text-lg xl:text-xl 2xl:text-2xl text-gray-900">Qualidade</h3>
              <p className="text-sm xl:text-base 2xl:text-lg text-gray-600">produtos de alta qualidade</p>
            </div>

            <div className="text-center space-y-3 xl:space-y-4">
              <div className="w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 mx-auto rounded-full flex items-center justify-center bg-[#e0f4ea]">
                <Users className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12" style={{ color: '#0DA456' }} />
              </div>
              <h3 className="font-bold text-lg xl:text-xl 2xl:text-2xl text-gray-900">Atendimento</h3>
              <p className="text-sm xl:text-base 2xl:text-lg text-gray-600">diferenciado e exclusivo</p>
            </div>

            <div className="text-center space-y-3 xl:space-y-4">
              <div className="w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 mx-auto rounded-full flex items-center justify-center bg-[#e0f4ea]">
                <Shield className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12" style={{ color: '#0DA456' }} />
              </div>
              <h3 className="font-bold text-lg xl:text-xl 2xl:text-2xl text-gray-900">Confiança</h3>
              <p className="text-sm xl:text-base 2xl:text-lg text-gray-600">pioneira em Santa Maria</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
