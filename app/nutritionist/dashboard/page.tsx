import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Users,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  Clock,
  Activity,
  ArrowRight,
  Apple,
} from "lucide-react"

export default function NutritionistDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Bem-vindo(a) de volta, Ana Nutricionista!</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Pacientes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+4</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Mensal</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 6.800</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+15%</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Retenção</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">88%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
              <span className="text-red-500">-2%</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consultas Semanais</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+2</span> desde a semana passada
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="patients">Pacientes</TabsTrigger>
          <TabsTrigger value="meal-plans">Planos Alimentares</TabsTrigger>
          <TabsTrigger value="schedule">Agenda</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Desempenho Mensal</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted" />
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Próximas Consultas</CardTitle>
                <CardDescription>Hoje, {new Date().toLocaleDateString("pt-BR")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Mariana Costa", time: "09:00 - 10:00" },
                    { name: "Felipe Mendes", time: "11:00 - 12:00" },
                    { name: "Camila Rocha", time: "14:30 - 15:30" },
                    { name: "Lucas Ferreira", time: "16:00 - 17:00" },
                    { name: "Beatriz Santos", time: "18:00 - 19:00" },
                  ].map((session, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{session.name}</p>
                        <p className="text-xs text-muted-foreground">{session.time}</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Pacientes em Destaque</CardTitle>
                <CardDescription>Melhor progresso este mês</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Mariana Costa", progress: "Perda de 4kg" },
                    { name: "Felipe Mendes", progress: "Redução de 8% de gordura corporal" },
                    { name: "Camila Rocha", progress: "Normalização de glicemia" },
                  ].map((patient, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{patient.name}</p>
                        <p className="text-xs text-muted-foreground">{patient.progress}</p>
                      </div>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Planos Alimentares Populares</CardTitle>
                <CardDescription>Mais utilizados este mês</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Low Carb - Emagrecimento", count: 8 },
                    { name: "Hiperproteico - Ganho Muscular", count: 6 },
                    { name: "Detox - Desintoxicação", count: 5 },
                    { name: "Mediterrâneo - Saúde Geral", count: 4 },
                  ].map((plan, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{plan.name}</p>
                        <p className="text-xs text-muted-foreground">{plan.count} pacientes</p>
                      </div>
                      <Apple className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Renovações Próximas</CardTitle>
                <CardDescription>Pacotes a vencer nos próximos 15 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Beatriz Santos", date: "Em 2 dias", plan: "Plano Trimestral" },
                    { name: "Lucas Ferreira", date: "Em 5 dias", plan: "Plano Mensal" },
                    { name: "Camila Rocha", date: "Em 10 dias", plan: "Pacote de 6 consultas" },
                  ].map((renewal, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{renewal.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {renewal.date} - {renewal.plan}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Renovar
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="patients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Meus Pacientes</CardTitle>
              <CardDescription>Gerencie seus pacientes e acompanhe seu progresso</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Users className="mx-auto h-16 w-16 text-muted" />
                <h3 className="mt-4 text-lg font-medium">Lista de Pacientes</h3>
                <p className="mt-2 text-sm text-muted-foreground">Visualize, adicione e gerencie seus pacientes.</p>
                <Button className="mt-4" asChild>
                  <Link href="/nutritionist/patients">Ver Todos os Pacientes</Link>
                </Button>
                <Button className="mt-2" variant="outline" asChild>
                  <Link href="/nutritionist/assessments">Avaliações Nutricionais</Link>
                </Button>
                <Button className="mt-2" variant="outline" asChild>
                  <Link href="/nutritionist/progress">Acompanhar Progresso</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="meal-plans" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Planos Alimentares</CardTitle>
              <CardDescription>Crie e gerencie planos alimentares para seus pacientes</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Apple className="mx-auto h-16 w-16 text-muted" />
                <h3 className="mt-4 text-lg font-medium">Biblioteca de Planos</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Crie, edite e atribua planos alimentares personalizados.
                </p>
                <Button className="mt-4" asChild>
                  <Link href="/nutritionist/meal-plans">Gerenciar Planos</Link>
                </Button>
                <Button className="mt-2" variant="outline" asChild>
                  <Link href="/nutritionist/foods">Biblioteca de Alimentos</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Agenda</CardTitle>
              <CardDescription>Gerencie suas consultas e compromissos</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Calendar className="mx-auto h-16 w-16 text-muted" />
                <h3 className="mt-4 text-lg font-medium">Calendário de Consultas</h3>
                <p className="mt-2 text-sm text-muted-foreground">Visualize e gerencie sua agenda de atendimentos.</p>
                <Button className="mt-4" asChild>
                  <Link href="/nutritionist/schedule">Ver Agenda Completa</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
