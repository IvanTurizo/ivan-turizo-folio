import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

interface ExperienceFormProps {
  editingId: string | null;
  onSuccess: () => void;
  onCancel: () => void;
}

const ExperienceForm = ({ editingId, onSuccess, onCancel }: ExperienceFormProps) => {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    description: "",
    start_date: "",
    end_date: "",
    is_current: false,
    technologies: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editingId) {
      fetchExperience();
    } else {
      resetForm();
    }
  }, [editingId]);

  const fetchExperience = async () => {
    try {
      const { data, error } = await supabase
        .from('professional_experiences')
        .select('*')
        .eq('id', editingId)
        .single();

      if (error) throw error;

      setFormData({
        company: data.company,
        position: data.position,
        description: data.description || "",
        start_date: data.start_date,
        end_date: data.end_date || "",
        is_current: data.is_current,
        technologies: data.technologies?.join(", ") || "",
      });
    } catch (error: any) {
      toast.error("Error al cargar la experiencia");
    }
  };

  const resetForm = () => {
    setFormData({
      company: "",
      position: "",
      description: "",
      start_date: "",
      end_date: "",
      is_current: false,
      technologies: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const technologies = formData.technologies
        .split(",")
        .map(t => t.trim())
        .filter(t => t.length > 0);

      const payload = {
        company: formData.company,
        position: formData.position,
        description: formData.description || null,
        start_date: formData.start_date,
        end_date: formData.is_current ? null : formData.end_date || null,
        is_current: formData.is_current,
        technologies: technologies.length > 0 ? technologies : null,
      };

      if (editingId) {
        const { error } = await supabase
          .from('professional_experiences')
          .update(payload)
          .eq('id', editingId);

        if (error) throw error;
        toast.success("Experiencia actualizada");
      } else {
        const { error } = await supabase
          .from('professional_experiences')
          .insert(payload);

        if (error) throw error;
        toast.success("Experiencia creada");
      }

      resetForm();
      onSuccess();
    } catch (error: any) {
      toast.error(error.message || "Error al guardar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="company">Empresa *</Label>
        <Input
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="position">Cargo *</Label>
        <Input
          id="position"
          value={formData.position}
          onChange={(e) => setFormData({ ...formData, position: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="start_date">Fecha Inicio *</Label>
          <Input
            id="start_date"
            type="date"
            value={formData.start_date}
            onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="end_date">Fecha Fin</Label>
          <Input
            id="end_date"
            type="date"
            value={formData.end_date}
            onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
            disabled={formData.is_current}
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="is_current"
          checked={formData.is_current}
          onCheckedChange={(checked) => 
            setFormData({ ...formData, is_current: checked, end_date: checked ? "" : formData.end_date })
          }
        />
        <Label htmlFor="is_current">Trabajo actual</Label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="technologies">Tecnologías (separadas por comas)</Label>
        <Input
          id="technologies"
          value={formData.technologies}
          onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
          placeholder="React, Node.js, MongoDB"
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={loading} className="flex-1">
          {loading ? "Guardando..." : editingId ? "Actualizar" : "Crear"}
        </Button>
        {editingId && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
        )}
      </div>
    </form>
  );
};

export default ExperienceForm;
