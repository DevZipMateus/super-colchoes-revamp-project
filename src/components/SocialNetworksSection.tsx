
import { Facebook, Instagram, Youtube } from 'lucide-react';

const SocialNetworksSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-textPrimary mb-3">
            Nossas Redes Sociais
          </h2>
          <p className="text-base text-textSecondary max-w-2xl mx-auto">
            Siga-nos nas redes sociais e fique por dentro das novidades, promoções e dicas para um sono melhor!
          </p>
        </div>

        <div className="flex justify-center items-center gap-8">
          <a
            href="https://www.facebook.com/supercolchoesumaescolhainteligente"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-3 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Facebook className="w-7 h-7 text-white" />
            </div>
            <span className="text-base font-semibold text-textPrimary">Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/super_colchoes/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-3 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <span className="text-base font-semibold text-textPrimary">Instagram</span>
          </a>

          <a
            href="https://www.youtube.com/channel/UCtNbeMmIUFsQ8jSULkOYIcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-3 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Youtube className="w-7 h-7 text-white" />
            </div>
            <span className="text-base font-semibold text-textPrimary">YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialNetworksSection;
