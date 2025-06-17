
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Hemely Cassol",
      reviews: "1 avaliação",
      date: "2 meses atrás",
      rating: 5,
      text: "Minha experiência com a compra do meu novo colchão foi muito boa. Saí da loja exatamente com aquilo que procurava, além de receber no mesmo dia 😁. Realmente indico a Super Colchões, o ambiente é familiar, o vendedor tem conhecimento do seu produto e te indica exatamente o que tu precisa, além disso a qualidade é garantida. 🙌🏼"
    },
    {
      name: "Valeria Etges Rodrigues de Souza",
      reviews: "7 avaliações·1 foto",
      date: "4 meses atrás",
      rating: 5,
      text: "Quando somos bem atendidos, com gentileza, simpatia, tem muitas risadas junto haha. A gente se torna fiel à loja. Somos clientes há um tempo, e sempre foi assim, lugar onde somos bem tratados, a gente volta, nem que for para dar um oizinho. Desta última compra, que foi colchão, acabamos levando o protetor junto, pelo fato do Adroaldo nos falar da importância, e assim ele é, com sua experiência, conhecimento e sabedoria, nos mostra o que vai ser bom."
    },
    {
      name: "Valério V. Soares Leal",
      reviews: "13 avaliações·1 foto",
      date: "2 meses atrás",
      rating: 5,
      text: "Excelente, mesmo comprando à distância, pois estava em férias, fui muito bem atendido, comprei e recebi o que realmente havia solicitado, preço, condições de pagamento e recebimento tudo conforme o combinado. Com certeza recomendo esse estabelecimento."
    },
    {
      name: "Giovani Souza",
      reviews: "9 avaliações",
      date: "2 meses atrás",
      rating: 5,
      text: "Excelente como sempre. Adquiri um Colchão King com baú. Baú espaçoso e materiais de primeira linha. Colchão muito confortável. Recomendo 100%. A durabilidade dos produtos são incríveis. Produtos da Super Colchões são de extrema qualidade. Vale muito a pena."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 sm:space-y-6 xl:space-y-8 mb-12 sm:mb-16 xl:mb-20 2xl:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900">
            O que nossos <span className="text-gray-950" style={{ color: '#000000' }}>Clientes</span> dizem
          </h2>
          <p className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-gray-950 leading-relaxed">
            Depoimentos reais de clientes satisfeitos com nossos produtos e atendimento
          </p>
          <div className="flex items-center justify-center space-x-2 xl:space-x-4 mt-6 xl:mt-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900">5.0/5</span>
            <span className="text-gray-600 text-base xl:text-lg 2xl:text-xl">baseado em avaliações reais</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 xl:gap-10 2xl:gap-12 max-w-6xl xl:max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-6 xl:p-8 2xl:p-10 space-y-4 xl:space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10" style={{ color: '#000000' }} />
                </div>
                
                <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base xl:text-lg 2xl:text-xl">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4 xl:pt-6">
                  <div className="flex items-center space-x-3 xl:space-x-4">
                    <div className="w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-lg xl:text-xl 2xl:text-2xl" style={{ color: '#000000' }}>
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-base xl:text-lg 2xl:text-xl">{testimonial.name}</p>
                      <p className="text-sm xl:text-base 2xl:text-lg text-gray-600">{testimonial.reviews}</p>
                      <p className="text-xs xl:text-sm 2xl:text-base text-gray-500">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 xl:mt-16 2xl:mt-20">
          <p className="text-lg xl:text-xl 2xl:text-2xl text-gray-600 mb-6 xl:mb-8">
            Junte-se aos nossos clientes satisfeitos!
          </p>
          <div className="rounded-2xl p-8 xl:p-10 2xl:p-12 max-w-2xl xl:max-w-4xl 2xl:max-w-5xl mx-auto bg-[#00fe08]/40">
            <h3 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-4 xl:mb-6 text-gray-950" style={{ color: '#000000' }}>
              Garantia de Satisfação 100%
            </h3>
            <p className="text-gray-950 text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
              Se não ficar satisfeito com seu colchão, oferecemos garantia e suporte completo para sua satisfação!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
