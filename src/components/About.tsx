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
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Sobre <span className="text-primary">Mí</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tengo 22 años y soy un apasionado por el mundo del desarrollo web. 
            Me gusta interactuar con las personas de este entorno que me puedan brindar 
            conocimiento para cada día mejorar como desarrollador.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="skill-card text-center p-6 h-full">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="project-card p-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Mi Filosofía</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Creo firmemente en el aprendizaje continuo y la colaboración. 
                    El desarrollo web no es solo escribir código, sino crear soluciones 
                    que mejoren la vida de las personas.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Mi objetivo es convertirme en un desarrollador full-stack competente, 
                    contribuir a proyectos significativos y ayudar a otros en su journey 
                    de aprendizaje, tal como otros me han ayudado a mí.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Aprendizaje constante</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Código limpio y mantenible</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Colaboración en equipo</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Experiencia de usuario excepcional</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Innovación y creatividad</span>
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