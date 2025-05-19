import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shell } from "@/components/shell"
import Link from "next/link"

export default function NutritionistProfilePage() {
  return (
    <Shell>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Perfil do Nutricionista</CardTitle>
            <CardDescription>Informações e configurações da sua conta.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Conteúdo do perfil aqui */}
            <p>Em breve...</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Acesso rápido às funcionalidades principais.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Botões de ações rápidas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Button asChild>
                <Link href="/nutritionist/patients">Gerenciar Pacientes</Link>
              </Button>
              <Button asChild>
                <Link href="/nutritionist/meal-plans">Gerenciar Planos</Link>
              </Button>
              <Button asChild>
                <Link href="/nutritionist/reports">Ver Relatórios</Link>
              </Button>
              <Button asChild>
                <Link href="/nutritionist/settings">Configurações</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Shell>
  )
}
