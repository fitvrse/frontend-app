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
  Dumbbell,
} from "lucide-react"

export default function PersonalDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Bem-vindo(a) de volta, João Silva!</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Alunos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+3</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Mensal</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 5.400</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+12%</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Retenção</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+2%</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sessões Semanais</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
              <span className="text-red-500">-2</span> desde a semana passada
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="students">Alunos</TabsTrigger>
          <TabsTrigger value="workouts">Treinos</TabsTrigger>
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
                <CardTitle>Próximas Sessões</CardTitle>
                <CardDescription>Hoje, {new Date().toLocaleDateString("pt-BR")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Carlos Silva", time: "08:00 - 09:00" },
                    { name: "Ana Oliveira", time: "10:00 - 11:00" },
                    { name: "Pedro Santos", time: "14:00 - 15:00" },
                    { name: "Juliana Lima", time: "16:00 - 17:00" },
                    { name: "Roberto Alves", time: "18:00 - 19:00" },
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
                <CardTitle>Alunos em Destaque</CardTitle>
                <CardDescription>Melhor progresso este mês</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Ana Oliveira", progress: "Ganho de 3kg de massa muscular" },
                    { name: "Pedro Santos", progress: "Redução de 5% de gordura corporal" },
                    { name: "Juliana Lima", progress: "Aumento de 20kg no agachamento" },
                  ].map((student, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{student.name}</p>
                        <p className="text-xs text-muted-foreground">{student.progress}</p>
                      </div>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Treinos Populares</CardTitle>
                <CardDescription>Mais utilizados este mês</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Hipertrofia - Membros Superiores", count: 12 },
                    { name: "HIIT - Queima de Gordura", count: 10 },
                    { name: "Força - Full Body", count: 8 },
                    { name: "Resistência - Cardio", count: 6 },
                  ].map((workout, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{workout.name}</p>
                        <p className="text-xs text-muted-foreground">{workout.count} alunos</p>
                      </div>
                      <Dumbbell className="h-4 w-4 text-muted-foreground" />
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
                    { name: "Marcos Oliveira", date: "Em 3 dias", sessions: "Pacote de 10 sessões" },
                    { name: "Carla Santos", date: "Em 7 dias", sessions: "Mensal - 8 sessões" },
                    { name: "Rodrigo Lima", date: "Em 12 dias", sessions: "Pacote de 20 sessões" },
                  ].map((renewal, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{renewal.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {renewal.date} - {renewal.sessions}
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
        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Meus Alunos</CardTitle>
              <CardDescription>Gerencie seus alunos e acompanhe seu progresso</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Users className="mx-auto h-16 w-16 text-muted" />
                <h3 className="mt-4 text-lg font-medium">Lista de Alunos</h3>
                <p className="mt-2 text-sm text-muted-foreground">Visualize, adicione e gerencie seus alunos.</p>
                <Button className="mt-4" asChild>
                  <Link href="/personal/students">Ver Todos os Alunos</Link>
                </Button>
                <Button className="mt-2" variant="outline" asChild>
                  <Link href="/personal/progress">Acompanhar Progresso</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="workouts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Treinos</CardTitle>
              <CardDescription>Crie e gerencie treinos para seus alunos</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Dumbbell className="mx-auto h-16 w-16 text-muted" />
                <h3 className="mt-4 text-lg font-medium">Biblioteca de Treinos</h3>
                <p className="mt-2 text-sm text-muted-foreground">Crie, edite e atribua treinos personalizados.</p>
                <Button className="mt-4" asChild>
                  <Link href="/personal/workouts">Gerenciar Treinos</Link>
                </Button>
                <Button className="mt-2" variant="outline" asChild>
                  <Link href="/personal/exercises">Biblioteca de Exercícios</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Agenda</CardTitle>
              <CardDescription>Gerencie suas sessões e compromissos</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Calendar className="mx-auto h-16 w-16 text-muted" />
                <h3 className="mt-4 text-lg font-medium">Calendário de Sessões</h3>
                <p className="mt-2 text-sm text-muted-foreground">Visualize e gerencie sua agenda de atendimentos.</p>
                <Button className="mt-4" asChild>
                  <Link href="/personal/schedule">Ver Agenda Completa</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
