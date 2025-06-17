
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
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            O que nossos <span className="text-gray-950" style={{ color: '#2cf96a' }}>Clientes</span> dizem
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-950">
            Depoimentos reais de clientes satisfeitos com nossos produtos e atendimento
          </p>
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0/5</span>
            <span className="text-gray-600">baseado em avaliações reais</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6" style={{ color: '#2cf96a' }} />
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-lg" style={{ color: '#2cf96a' }}>
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.reviews}</p>
                      <p className="text-xs text-gray-500">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Junte-se aos nossos clientes satisfeitos!
          </p>
          <div className="rounded-2xl p-8 max-w-2xl mx-auto bg-[#2cf96a]/20">
            <h3 className="text-2xl font-bold mb-4 text-gray-950" style={{ color: '#2cf96a' }}>
              Garantia de Satisfação 100%
            </h3>
            <p className="text-gray-950">
              Se não ficar satisfeito com seu colchão, oferecemos garantia e suporte completo para sua satisfação!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
