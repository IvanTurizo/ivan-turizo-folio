import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Personal",
      description: "Mi portafolio personal desarrollado con React y Tailwind CSS. Incluye animaciones suaves, diseño responsive y secciones para mostrar mis habilidades y proyectos.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/IvanTurizo",
      demo: "#",
      featured: true
    },
    {
      title: "Aplicación Web con Java",
      description: "Proyecto académico desarrollado en Java utilizando conceptos de programación orientada a objetos y estructuras de datos fundamentales.",
      technologies: ["Java", "OOP", "Data Structures"],
      github: "https://github.com/IvanTurizo",
      featured: false
    },
    {
      title: "Landing Page Responsive",
      description: "Página de aterrizaje completamente responsive desarrollada con HTML5, CSS3 y JavaScript vanilla. Enfoque en performance y accesibilidad.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/IvanTurizo",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Mis <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Una colección de proyectos que muestran mis habilidades y pasión por el desarrollo web
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`project-card h-full ${project.featured ? 'lg:col-span-2 xl:col-span-1' : ''}`}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  {project.featured && (
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      Destacado
                    </Badge>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs bg-background/50 border-border/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={16} />
                        Código
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 primary-gradient hover:opacity-90 text-white"
                        asChild
                      >
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="project-card p-8 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <Github className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Más Proyectos en GitHub</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Visita mi perfil de GitHub para ver todos mis proyectos, contribuciones 
                y el código fuente de mis trabajos más recientes.
              </p>
              <Button
                size="lg"
                className="primary-gradient hover:opacity-90 text-white px-8 py-3"
                asChild
              >
                <a 
                  href="https://github.com/IvanTurizo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={20} />
                  Ver GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;