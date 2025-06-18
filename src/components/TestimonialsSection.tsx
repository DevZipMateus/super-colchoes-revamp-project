import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ExternalLink } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Hemely Cassol",
      reviews: "1 avaliação",
      date: "2 meses atrás",
      rating: 5,
      text: "Minha experiência com a compra do meu novo colchão foi muito boa. Saí da loja exatamente com aquilo que procurava, além de receber no mesmo dia 😁. Realmente indico a Super Colchões, o ambiente é familiar, o vendedor tem conhecimento do seu produto e te indica exatamente o que tu precisa, além disso a qualidade é garantida. 🙌🏼"
    }, {
      name: "Valeria Etges Rodrigues de Souza",
      reviews: "7 avaliações·1 foto",
      date: "4 meses atrás",
      rating: 5,
      text: "Quando somos bem atendidos, com gentileza, simpatia, tem muitas risadas junto haha. A gente se torna fiel à loja. Somos clientes há um tempo, e sempre foi assim, lugar onde somos bem tratados, a gente volta, nem que for para dar um oizinho. Desta última compra, que foi colchão, acabamos levando o protetor junto, pelo fato do Adroaldo nos falar da importância, e assim ele é, com sua experiência, conhecimento e sabedoria, nos mostra o que vai ser bom."
    }, {
      name: "Valério V. Soares Leal",
      reviews: "13 avaliações·1 foto",
      date: "2 meses atrás",
      rating: 5,
      text: "Excelente, mesmo comprando à distância, pois estava em férias, fui muito bem atendido, comprei e recebi o que realmente havia solicitado, preço, condições de pagamento e recebimento tudo conforme o combinado. Com certeza recomendo esse estabelecimento."
    }, {
      name: "Giovani Souza",
      reviews: "9 avaliações",
      date: "2 meses atrás",
      rating: 5,
      text: "Excelente como sempre. Adquiri um Colchão King com baú. Baú espaçoso e materiais de primeira linha. Colchão muito confortável. Recomendo 100%. A durabilidade dos produtos são incríveis. Produtos da Super Colchões são de extrema qualidade. Vale muito a pena."
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-8 mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900">
            O que nossos <span className="text-gray-950" style={{color: '#000000'}}>Clientes</span> dizem
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-gray-950 leading-relaxed px-4">
            Depoimentos reais de clientes satisfeitos com nossos produtos e atendimento
          </p>
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-4 mt-4 sm:mt-6 lg:mt-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">5.0/5</span>
            <span className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl">baseado em avaliações reais</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 max-w-6xl xl:max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-4 sm:p-6 lg:p-8 xl:p-10 space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" style={{color: '#000000'}} />
                </div>
                
                <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base lg:text-lg xl:text-xl">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-3 sm:pt-4 lg:pt-6">
                  <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-base sm:text-lg lg:text-xl xl:text-2xl" style={{color: '#000000'}}>
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg xl:text-xl truncate">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-600">{testimonial.reviews}</p>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-500">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 lg:mt-16 xl:mt-20">
          <Button
            onClick={() => window.open('https://www.google.com/search?q=super+colch%C3%B5es&oq=super+colch%C3%B5es&aqs=chrome..69i57j35i39j0i22i30l3j69i60j69i61l2.4320j1j4&sourceid=chrome&ie=UTF-8#lrd=0x9503cb6afb0b59b3:0x5e1f0cbaa2dfe89,1,,,', '_blank')}
            className="mb-6 sm:mb-8 lg:mb-12 flex items-center gap-2 text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-3 sm:py-4 mx-auto"
          >
            Ver mais comentários
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>

          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-4 sm:mb-6 lg:mb-8 px-4">
            Junte-se aos nossos clientes satisfeitos!
          </p>
          <div className="rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 max-w-xl sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto bg-[#e0f4ea]">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 text-gray-950" style={{color: '#000000'}}>
              Garantia de Satisfação 100%
            </h3>
            <p className="text-gray-950 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              Se não ficar satisfeito com seu colchão, oferecemos garantia e suporte completo para sua satisfação!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
