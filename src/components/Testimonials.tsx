import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      age: 32,
      weight: "Perdeu 8kg",
      text: "Incrível! Em 30 dias eliminei 8kg e meu corpo desinchOU completamente. Uso roupas que não cabiam há anos. SlimNutri mudou minha vida!",
      rating: 5
    },
    {
      name: "Juliana Costa",
      age: 28,
      weight: "Perdeu 6kg",
      text: "Sempre lutei contra a retenção de líquidos. Com SlimNutri, eliminei o inchaço em poucos dias e emagreci sem passar fome. Recomendo muito!",
      rating: 5
    },
    {
      name: "Patricia Oliveira",
      age: 45,
      weight: "Perdeu 9kg",
      text: "Depois dos 40 ficou impossível emagrecer. SlimNutri acelerou meu metabolismo e consegui eliminar 9kg em um mês. Estou me sentindo 10 anos mais jovem!",
      rating: 5
    },
    {
      name: "Amanda Santos",
      age: 35,
      weight: "Perdeu 7kg",
      text: "Já tentei várias dietas e nada funcionava. SlimNutri foi diferente - emagreci de forma saudável e sem efeito sanfona. Muito feliz com os resultados!",
      rating: 5
    },
    {
      name: "Carla Ferreira",
      age: 41,
      weight: "Perdeu 10kg",
      text: "Resultado surpreendente! Perdi 10kg, eliminei medidas da barriga e das coxas. Minha autoestima está lá em cima. SlimNutri é sensacional!",
      rating: 5
    },
    {
      name: "Renata Lima",
      age: 29,
      weight: "Perdeu 5kg",
      text: "Estava sempre inchada e com o corpo pesado. Em 3 semanas com SlimNutri já senti diferença enorme. Emagreci e me sinto muito mais disposta!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mais de <span className="text-primary">10.000 mulheres</span> já transformaram seus corpos
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossas clientes estão dizendo sobre o SlimNutri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.age} anos • {testimonial.weight}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full">
            <span className="text-4xl font-bold text-primary">4.9/5.0</span>
            <div className="text-left">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Baseado em +10.000 avaliações</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
