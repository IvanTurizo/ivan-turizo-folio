import { Github, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Personal Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Ivan Turizo</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Desarrollador Frontend apasionado por crear experiencias web excepcionales. 
              Siempre aprendiendo y creciendo en el mundo del desarrollo.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/IvanTurizo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:turizoivan22@gmail.com"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:3117643702"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Mí
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Habilidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Email:</strong><br />
                turizoivan22@gmail.com
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Teléfono:</strong><br />
                +57 311 764 3702
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Ubicación:</strong><br />
                Cartagena, Colombia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Ivan Turizo. Todos los derechos reservados.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Hecho con <Heart size={14} className="text-red-500" /> y mucho código
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;