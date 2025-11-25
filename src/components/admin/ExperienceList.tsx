import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface Experience {
  id: string;
  company: string;
  position: string;
  start_date: string;
  end_date: string | null;
  is_current: boolean;
}

interface ExperienceListProps {
  onEdit: (id: string) => void;
}

const ExperienceList = ({ onEdit }: ExperienceListProps) => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperiences();

    // Subscribe to realtime changes
    const channel = supabase
      .channel('admin-experiences')
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

  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás seguro de eliminar esta experiencia?")) {
      return;
    }

    try {
      const { error } = await supabase
        .from('professional_experiences')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success("Experiencia eliminada");
    } catch (error: any) {
      toast.error("Error al eliminar");
    }
  };

  const formatDate = (date: string) => {
    return format(new Date(date), 'MMM yyyy', { locale: es });
  };

  if (loading) {
    return <p className="text-muted-foreground">Cargando...</p>;
  }

  if (experiences.length === 0) {
    return <p className="text-muted-foreground">No hay experiencias registradas</p>;
  }

  return (
    <div className="space-y-3">
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className="p-4 border rounded-lg hover:bg-accent/50 transition-colors"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold truncate">{exp.position}</h3>
              <p className="text-sm text-muted-foreground truncate">{exp.company}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {formatDate(exp.start_date)} - {exp.is_current ? 'Actualidad' : exp.end_date ? formatDate(exp.end_date) : 'Presente'}
              </p>
            </div>
            <div className="flex gap-1">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => onEdit(exp.id)}
              >
                <Edit className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleDelete(exp.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
