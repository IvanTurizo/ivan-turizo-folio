import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code2, Users, Trophy } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Estudiante de Ingeniería",
      description: "Cursando Ingeniería de Software en la Universidad de Cartagena"
    },
    {
      icon: Code2,
      title: "Desarrollador Frontend",
      description: "Especializado en React y tecnologías web modernas"
    },
    {
      icon: Users,
      title: "Colaborativo",
      description: "Me encanta trabajar en equipo y aprender de otros desarrolladores"
    },
    {
      icon: Trophy,
      title: "En Crecimiento",
      description: "Constantemente mejorando mis habilidades y conocimientos"
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Sobre <span className="text-primary">Mí</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Tengo <span className="text-primary font-semibold">22 años</span> y soy un apasionado por el mundo del desarrollo web. 
            Me gusta interactuar con las personas de este entorno que me puedan brindar 
            conocimiento para cada día mejorar como desarrollador.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <Card key={index} className="skill-card text-center p-8 h-full group hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <highlight.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="project-card p-10 lg:p-12">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">Mi Filosofía</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Creo firmemente en el aprendizaje continuo y la colaboración. 
                    El desarrollo web no es solo escribir código, sino crear soluciones 
                    que mejoren la vida de las personas.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Mi objetivo es convertirme en un desarrollador full-stack competente, 
                    contribuir a proyectos significativos y ayudar a otros en su camino 
                    de aprendizaje, tal como otros me han ayudado a mí.
                  </p>
                </div>
                
                <div className="space-y-5">
                  <div className="flex items-center gap-4 group">
                    <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-foreground text-lg font-medium">Aprendizaje constante</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-foreground text-lg font-medium">Código limpio y mantenible</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-foreground text-lg font-medium">Colaboración en equipo</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-foreground text-lg font-medium">Experiencia de usuario excepcional</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-foreground text-lg font-medium">Innovación y creatividad</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;