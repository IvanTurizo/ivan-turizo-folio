import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "turizoivan22@gmail.com",
      href: "mailto:turizoivan22@gmail.com",
      description: "Para oportunidades laborales o colaboraciones"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+57 311 764 3702",
      href: "tel:3117643702",
      description: "Disponible para llamadas de lunes a viernes"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Cartagena, Colombia",
      href: "#",
      description: "Universidad de Cartagena"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      url: "https://github.com/IvanTurizo",
      description: "Mis proyectos y código"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      url: "#",
      description: "Red profesional"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      url: "https://wa.me/573117643702",
      description: "Mensaje directo"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¡Hablemos!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estoy siempre abierto a nuevas oportunidades, colaboraciones y conversaciones 
            sobre desarrollo web. No dudes en contactarme.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-primary">Información de Contacto</h3>
            
            {contactMethods.map((method, index) => (
              <Card key={index} className="skill-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-lg mb-1">{method.title}</h4>
                      <a 
                        href={method.href}
                        className="text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        {method.value}
                      </a>
                      <p className="text-muted-foreground text-sm mt-1">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-primary">Conectemos</h3>
            
            <Card className="project-card p-8">
              <CardContent className="p-0 text-center">
                <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
                <h4 className="text-xl font-bold mb-4">¿Tienes un proyecto en mente?</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Me encantaría saber más sobre tu proyecto y cómo puedo ayudarte. 
                  Envíame un mensaje y conversemos sobre las posibilidades.
                </p>
                <Button
                  size="lg"
                  className="primary-gradient hover:opacity-90 text-white w-full mb-4"
                  asChild
                >
                  <a href="mailto:turizoivan22@gmail.com" className="flex items-center justify-center gap-2">
                    <Mail size={20} />
                    Enviar Email
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                  asChild
                >
                  <a href="https://wa.me/573117643702" className="flex items-center justify-center gap-2">
                    <MessageCircle size={20} />
                    WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="grid grid-cols-1 gap-4">
              <h4 className="font-semibold text-lg text-center">Sígueme en:</h4>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-primary/5"
                >
                  <social.icon className="w-6 h-6 text-primary" />
                  <div>
                    <span className="font-medium">{social.title}</span>
                    <p className="text-muted-foreground text-sm">{social.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Card className="project-card p-8 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">¿Listo para trabajar juntos?</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Estoy disponible para oportunidades freelance, prácticas profesionales 
                o cualquier proyecto interesante que puedas tener.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="primary-gradient hover:opacity-90 text-white px-8"
                  asChild
                >
                  <a href="mailto:turizoivan22@gmail.com">
                    Iniciar Conversación
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
                  asChild
                >
                  <a href="https://github.com/IvanTurizo" target="_blank" rel="noopener noreferrer">
                    Ver Mi Trabajo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;