import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface Experience {
  id: string;
  company: string;
  position: string;
  description: string | null;
  start_date: string;
  end_date: string | null;
  is_current: boolean;
  technologies: string[] | null;
}

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperiences();

    // Subscribe to realtime changes
    const channel = supabase
      .channel('experiences-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'professional_experiences'
        },
        () => {
          fetchExperiences();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchExperiences = async () => {
    try {
      const { data, error } = await supabase
        .from('professional_experiences')
        .select('*')
        .order('start_date', { ascending: false });

      if (error) throw error;
      setExperiences(data || []);
    } catch (error) {
      console.error('Error fetching experiences:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string) => {
    return format(new Date(date), 'MMM yyyy', { locale: es });
  };

  if (loading) {
    return (
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experiencia Profesional</h2>
            <p className="text-muted-foreground">Cargando...</p>
          </div>
        </div>
      </section>
    );
  }

  if (experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experiencia Profesional</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi trayectoria profesional en el desarrollo de software
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      {exp.position}
                    </CardTitle>
                    <p className="text-lg font-semibold text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {formatDate(exp.start_date)} - {exp.is_current ? 'Actualidad' : exp.end_date ? formatDate(exp.end_date) : 'Presente'}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {exp.description && (
                  <p className="text-muted-foreground mb-4 whitespace-pre-line">
                    {exp.description}
                  </p>
                )}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
