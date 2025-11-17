import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como devo tomar o SlimNutri?",
      answer: "Tome 2 cápsulas por dia, preferencialmente 30 minutos antes das principais refeições (almoço e jantar). Não exceda a dose recomendada."
    },
    {
      question: "Em quanto tempo verei resultados?",
      answer: "Os primeiros resultados são visíveis já na primeira semana, com redução do inchaço. A transformação completa acontece em 30 dias de uso contínuo, com perda média de 5-7kg."
    },
    {
      question: "O SlimNutri tem efeitos colaterais?",
      answer: "Não. SlimNutri é feito com ingredientes 100% naturais e não possui contraindicações. É seguro e aprovado pela ANVISA."
    },
    {
      question: "Preciso fazer dieta?",
      answer: "Não é obrigatório, mas uma alimentação balanceada potencializa os resultados. O SlimNutri acelera o metabolismo mesmo sem dietas restritivas."
    },
    {
      question: "Gestantes podem usar?",
      answer: "Não recomendamos o uso durante gestação ou amamentação. Consulte seu médico antes de iniciar qualquer suplementação."
    },
    {
      question: "O produto tem garantia?",
      answer: "Sim! Oferecemos 30 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro."
    },
    {
      question: "Como funciona a entrega?",
      answer: "A entrega é feita pelos Correios ou transportadora. O prazo varia de 5 a 15 dias úteis dependendo da região. Pacotes com 3+ potes têm frete grátis."
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre o SlimNutri
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg px-6 border border-border"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
