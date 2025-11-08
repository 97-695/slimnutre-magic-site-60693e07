import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import productImage from "@/assets/slimnutri-product.jpeg";

const Hero = () => {
  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              ✨ Fórmula Natural Comprovada
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Elimine até <span className="text-accent">7kg em 30 dias</span> de forma natural
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              SlimNutri acelera seu metabolismo, elimina a retenção de líquidos e ajuda você a conquistar o corpo dos seus sonhos sem efeito sanfona.
            </p>
            
            <div className="space-y-3">
              {[
                "Acelera o metabolismo naturalmente",
                "Elimina inchaço e retenção de líquidos",
                "Reduz medidas de forma saudável",
                "100% natural e sem efeitos colaterais"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={scrollToOrder}
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-full shadow-glow transition-all hover:scale-105"
              >
                Quero Emagrecer Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 rounded-full backdrop-blur-sm"
              >
                Saiba Mais
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-6 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center">
                    👤
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold">+10.000 clientes satisfeitos</div>
                <div className="text-white/70">⭐⭐⭐⭐⭐ 4.9/5.0 Avaliação</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-2xl opacity-50 animate-pulse" />
            <img 
              src={productImage} 
              alt="SlimNutri - Agente Metabólico para Emagrecimento" 
              className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
