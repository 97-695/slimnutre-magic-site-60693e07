import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, Truck, CreditCard } from "lucide-react";
import productImage from "@/assets/slimnutri-product.jpeg";

const Order = () => {
  const packages = [
    {
      bottles: 1,
      title: "Tratamento de 30 Dias",
      description: "Ideal para começar",
      price: 197,
      oldPrice: 297,
      discount: 33,
      featured: false
    },
    {
      bottles: 3,
      title: "Tratamento de 90 Dias",
      description: "Mais vendido - Resultados garantidos",
      price: 397,
      oldPrice: 891,
      discount: 55,
      featured: true,
      bonus: "FRETE GRÁTIS"
    },
    {
      bottles: 5,
      title: "Tratamento de 150 Dias",
      description: "Melhor custo-benefício",
      price: 597,
      oldPrice: 1485,
      discount: 60,
      featured: false,
      bonus: "FRETE GRÁTIS + BRINDE ESPECIAL"
    }
  ];

  return (
    <section id="order" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground font-bold px-4 py-2">
            🔥 PROMOÇÃO POR TEMPO LIMITADO
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Escolha seu <span className="text-primary">pacote SlimNutri</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Quanto mais você investe na sua transformação, mais você economiza
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative p-6 ${pkg.featured ? 'border-primary border-2 shadow-glow scale-105' : 'border-border'}`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground font-bold px-4 py-2">
                    MAIS VENDIDO
                  </Badge>
                </div>
              )}

              <div className="text-center mb-6">
                <img src={productImage} alt="SlimNutri" className="w-32 h-32 mx-auto mb-4 object-contain" />
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-muted-foreground">{pkg.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl line-through text-muted-foreground">R$ {pkg.oldPrice}</span>
                  <Badge variant="destructive" className="text-sm">-{pkg.discount}%</Badge>
                </div>
                <div className="text-5xl font-bold text-primary mb-2">
                  R$ {pkg.price}
                </div>
                <div className="text-muted-foreground">
                  ou 12x de R$ {(pkg.price / 12).toFixed(2)}
                </div>
              </div>

              {pkg.bonus && (
                <div className="mb-4 p-3 bg-accent/10 rounded-lg text-center text-sm font-semibold text-accent-foreground">
                  🎁 {pkg.bonus}
                </div>
              )}

              <Button 
                className={`w-full py-6 text-lg font-bold rounded-full ${
                  pkg.featured 
                    ? 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow' 
                    : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                }`}
              >
                Comprar Agora
              </Button>

              <div className="mt-4 text-sm text-muted-foreground text-center">
                {pkg.bottles} {pkg.bottles === 1 ? 'pote' : 'potes'} • 60 cápsulas cada
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {[
            { icon: Shield, text: "Garantia de 30 dias" },
            { icon: Truck, text: "Entrega rápida e segura" },
            { icon: CreditCard, text: "Parcelamento sem juros" },
            { icon: Check, text: "Compra 100% segura" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>

        <Card className="p-8 bg-gradient-hero text-white max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">💯 Garantia de Satisfação Total</h3>
          <p className="text-lg text-center leading-relaxed">
            Você tem 30 dias para testar o SlimNutri. Se não ficar completamente satisfeito com os resultados, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Order;
