import { Button } from "@/components/ui/button";
import { Github, Mail, Phone } from "lucide-react";
import ivanProfile from "@/assets/ivan-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <p className="text-primary text-lg font-medium mb-2">¡Hola! Soy</p>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
                Ivan Turizo
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
                Desarrollador Web Frontend
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Estudiante de Ingeniería de Software apasionado por crear experiencias web excepcionales. 
              Me especializo en React y tecnologías modernas, siempre buscando aprender y colaborar 
              con otros desarrolladores.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="primary-gradient hover:opacity-90 transition-opacity text-white font-semibold px-8 py-3 rounded-xl"
              >
                Ver Proyectos
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3 rounded-xl"
              >
                Contactarme
              </Button>
            </div>
            
            {/* Quick Contact */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <a 
                href="https://github.com/IvanTurizo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href="mailto:turizoivan22@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a 
                href="tel:3117643702"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={20} />
                <span>+57 311 764 3702</span>
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <img 
                src={ivanProfile} 
                alt="Ivan Turizo - Desarrollador Web"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary/20 shadow-2xl"
              />
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-background animate-bounce-gentle"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;