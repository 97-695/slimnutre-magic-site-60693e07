import { Card } from "@/components/ui/card";
import { Droplets, Zap, TrendingDown, Shield, Clock, Heart } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Acelera o Metabolismo",
      description: "Fórmula exclusiva que aumenta sua queima calórica natural, fazendo você emagrecer mesmo em repouso."
    },
    {
      icon: Droplets,
      title: "Elimina Retenção de Líquidos",
      description: "Desincha rapidamente, eliminando até 3kg de líquidos retidos nos primeiros dias."
    },
    {
      icon: TrendingDown,
      title: "Redução de Medidas",
      description: "Diminua centímetros da cintura, quadril e coxas de forma visível em poucas semanas."
    },
    {
      icon: Shield,
      title: "100% Natural e Seguro",
      description: "Fórmula com ingredientes naturais, sem contraindicações e aprovada por especialistas."
    },
    {
      icon: Clock,
      title: "Resultados Rápidos",
      description: "Primeiros resultados em 7 dias. Transformação completa em 30 dias de uso contínuo."
    },
    {
      icon: Heart,
      title: "Sem Efeito Sanfona",
      description: "Emagreça de forma saudável e sustentável, mantendo o peso ideal a longo prazo."
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que <span className="text-primary">SlimNutri</span> é diferente?
          </h2>
          <p className="text-xl text-muted-foreground">
            A ciência comprovou: nosso agente metabólico age de forma inteligente no seu corpo, atacando as causas reais do ganho de peso.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
