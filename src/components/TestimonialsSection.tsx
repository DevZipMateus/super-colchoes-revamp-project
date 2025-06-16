
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      date: "Há 2 meses",
      rating: 5,
      text: "Excelente atendimento! Comprei um colchão Ortobom e estou muito satisfeita. A entrega foi rápida e o produto chegou em perfeitas condições. Recomendo a SuperColchões!"
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro, RJ",
      date: "Há 1 mês",
      rating: 5,
      text: "Melhor loja de colchões que já conheci. Variedade incrível de marcas e preços justos. O vendedor foi muito atencioso e me ajudou a escolher o colchão ideal para minhas necessidades."
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte, MG",
      date: "Há 3 semanas",
      rating: 5,
      text: "Comprei um colchão King Koil e estou dormindo muito melhor. A qualidade é excelente e o prazo de entrega foi cumprido. Voltarei a comprar com certeza!"
    },
    {
      name: "Carlos Oliveira",
      location: "Brasília, DF",
      date: "Há 1 semana",
      rating: 5,
      text: "Atendimento nota 10! Precisava trocar meu colchão urgente e eles conseguiram entregar no mesmo dia. Produto de qualidade e preço justo. Super recomendo!"
    },
    {
      name: "Fernanda Lima",
      location: "Salvador, BA",
      date: "Há 2 semanas",
      rating: 5,
      text: "Excelente experiência de compra. Site fácil de navegar, muitas opções de pagamento e entrega grátis. O colchão Castor que comprei é maravilhoso!"
    },
    {
      name: "Roberto Mendes",
      location: "Porto Alegre, RS",
      date: "Há 1 mês",
      rating: 5,
      text: "Já é a segunda vez que compro na SuperColchões. Sempre produtos de qualidade, preços competitivos e atendimento diferenciado. Parabéns pela seriedade!"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            O que nossos <span className="text-red-600">Clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 50.000 clientes satisfeitos em todo o Brasil. Confira alguns depoimentos reais:
          </p>
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.8/5</span>
            <span className="text-gray-600">baseado em 12.543 avaliações</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-red-600" />
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex items-center space-x-3">
                    {/* Espaço para foto do cliente */}
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
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
            Junte-se aos milhares de clientes satisfeitos!
          </p>
          <div className="bg-green-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Garantia de Satisfação 100%
            </h3>
            <p className="text-green-700">
              Se não ficar satisfeito com seu colchão em até 30 dias, 
              devolvemos seu dinheiro sem questionamentos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
