import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: "Avanzado", icon: "🌐" },
        { name: "CSS3", level: "Avanzado", icon: "🎨" },
        { name: "JavaScript", level: "Intermedio", icon: "⚡" },
        { name: "React", level: "Intermedio", icon: "⚛️" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", level: "Intermedio", icon: "☕" },
        { name: "Node.js", level: "Básico", icon: "🟢" }
      ]
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", level: "Intermedio", icon: "📝" },
        { name: "GitHub", level: "Intermedio", icon: "🐙" },
        { name: "VS Code", level: "Avanzado", icon: "💻" },
        { name: "Figma", level: "Básico", icon: "🎯" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Avanzado":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermedio":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Básico":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Mis <span className="text-primary">Habilidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologías y herramientas que domino y con las que trabajo actualmente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="skill-card p-6 h-full">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${getLevelColor(skill.level)} border text-xs font-medium`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="project-card p-8 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4 text-primary">En Constante Aprendizaje</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Actualmente estoy expandiendo mis conocimientos en tecnologías como TypeScript, 
                Next.js, y explorando el mundo del desarrollo backend con Spring Boot y bases de datos.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="outline" className="text-primary border-primary/30 bg-primary/10">
                  TypeScript
                </Badge>
                <Badge variant="outline" className="text-primary border-primary/30 bg-primary/10">
                  Next.js
                </Badge>
                <Badge variant="outline" className="text-primary border-primary/30 bg-primary/10">
                  Spring Boot
                </Badge>
                <Badge variant="outline" className="text-primary border-primary/30 bg-primary/10">
                  PostgreSQL
                </Badge>
                <Badge variant="outline" className="text-primary border-primary/30 bg-primary/10">
                  Docker
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;