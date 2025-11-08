const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">SlimNutri</h3>
            <p className="text-background/80 leading-relaxed">
              O agente metabólico que transforma seu corpo de forma natural e saudável.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#benefits" className="hover:text-primary transition-colors">Benefícios</a></li>
              <li><a href="#order" className="hover:text-primary transition-colors">Comprar</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-background/80">
              <li>📧 contato@slimnutri.com.br</li>
              <li>📱 WhatsApp: (11) 99999-9999</li>
              <li>🕐 Seg-Sex: 9h às 18h</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p className="mb-2">
            © 2024 SlimNutri. Todos os direitos reservados.
          </p>
          <p className="text-xs">
            ANVISA: Este produto não substitui uma alimentação equilibrada e deve ser consumido com orientação de nutricionista ou médico. 
            Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
