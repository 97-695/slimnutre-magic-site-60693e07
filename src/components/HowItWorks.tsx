import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Ativação Metabólica",
      description: "Nos primeiros dias, o SlimNutri começa a acelerar seu metabolismo, aumentando a queima de gordura natural do corpo.",
      days: "Dias 1-7"
    },
    {
      number: "02",
      title: "Eliminação de Toxinas",
      description: "Seu corpo elimina líquidos retidos e toxinas acumuladas. Você nota redução do inchaço e mais disposição.",
      days: "Dias 8-15"
    },
    {
      number: "03",
      title: "Queima de Gordura",
      description: "A gordura localizada começa a ser eliminada de forma acelerada. As medidas diminuem visivelmente.",
      days: "Dias 16-23"
    },
    {
      number: "04",
      title: "Transformação Total",
      description: "Seu corpo atinge o pico de transformação. Você consolida os resultados e mantém o peso ideal.",
      days: "Dias 24-30"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como o <span className="text-primary">SlimNutri</span> age no seu corpo
          </h2>
          <p className="text-xl text-muted-foreground">
            Um processo científico de 30 dias que transforma seu corpo de dentro para fora
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 border-l-4 border-primary hover:shadow-soft transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <span className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm font-semibold rounded-full">
                      {step.days}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-hero rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">🔬 Comprovação Científica</h3>
          <p className="text-lg max-w-2xl mx-auto">
            Estudos clínicos demonstram que o uso contínuo de SlimNutri por 30 dias resulta em perda média de 5-7kg, com melhora significativa na composição corporal e eliminação de líquidos retidos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
