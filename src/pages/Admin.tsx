import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { User } from "@supabase/supabase-js";
import ExperienceForm from "@/components/admin/ExperienceForm";
import ExperienceList from "@/components/admin/ExperienceList";
import { LogOut, Home } from "lucide-react";

const Admin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user) {
        navigate("/auth");
        return;
      }

      setUser(session.user);

      // Check if user is admin
      const { data: roles, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (error) throw error;

      if (!roles) {
        toast.error("No tienes permisos de administrador");
        navigate("/");
        return;
      }

      setIsAdmin(true);
    } catch (error: any) {
      console.error('Error checking auth:', error);
      toast.error("Error al verificar permisos");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
    toast.success("Sesión cerrada");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Panel de Administración</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate("/")} size="sm">
              <Home className="w-4 h-4 mr-2" />
              Inicio
            </Button>
            <Button variant="outline" onClick={handleLogout} size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>
                {editingId ? "Editar Experiencia" : "Nueva Experiencia"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ExperienceForm 
                editingId={editingId}
                onSuccess={() => setEditingId(null)}
                onCancel={() => setEditingId(null)}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experiencias Registradas</CardTitle>
            </CardHeader>
            <CardContent>
              <ExperienceList 
                onEdit={setEditingId}
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Admin;
