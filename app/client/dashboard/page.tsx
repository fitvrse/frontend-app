import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, Activity, ArrowRight, Dumbbell, Apple, Trophy, Heart } from "lucide-react"

export default function ClientDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Bem-vindo(a) de volta, Maria Aluna!</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Treinos Realizados</CardTitle>
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+3</span> desde a semana passada
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calorias Queimadas</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.320</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+15%</span> desde a semana passada
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progresso da Meta</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+5%</span> desde a semana passada
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pontos Acumulados</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">850</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+120</span> desde a semana passada
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="workouts">Treinos</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrição</TabsTrigger>
          <TabsTrigger value="challenges">Desafios</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Progresso Mensal</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted" />
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Próximas Atividades</CardTitle>
                <CardDescription>Hoje, {new Date().toLocaleDateString("pt-BR")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Treino de Musculação", time: "18:00 - 19:30", type: "workout" },
                    { name: "Consulta com Nutricionista", time: "Amanhã, 10:00", type: "nutrition" },
                    { name: "Aula de Spinning", time: "Quinta, 19:00", type: "workout" },
                    { name: "Avaliação Física", time: "Sexta, 14:00", type: "assessment" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        {activity.type === "workout" ? (
                          <Dumbbell className="h-4 w-4 text-primary" />
                        ) : activity.type === "nutrition" ? (
                          <Apple className="h-4 w-4 text-primary" />
                        ) : (
                          <Activity className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{activity.name}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
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
                <CardTitle>Metas Atuais</CardTitle>
                <CardDescription>Seu progresso até agora</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Perder 5kg", progress: 60, target: "2kg restantes" },
                    { name: "Treinar 4x por semana", progress: 75, target: "3/4 esta semana" },
                    { name: "Beber 2L de água por dia", progress: 40, target: "Média: 1.2L/dia" },
                  ].map((goal, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{goal.name}</p>
                        <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">{goal.target}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Últimos Treinos</CardTitle>
                <CardDescription>Seus treinos recentes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Treino A - Peito e Tríceps", date: "Hoje", intensity: "Alta" },
                    { name: "Treino B - Costas e Bíceps", date: "Há 2 dias", intensity: "Média" },
                    { name: "Cardio - HIIT", date: "Há 3 dias", intensity: "Alta" },
                    { name: "Treino C - Pernas", date: "Há 5 dias", intensity: "Alta" },
                  ].map((workout, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{workout.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {workout.date} • Intensidade: {workout.intensity}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Desafios Ativos</CardTitle>
                <CardDescription>Participe e ganhe recompensas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "30 Dias de Treino", progress: 70, reward: "200 pontos" },
                    { name: "Desafio Cardio", progress: 45, reward: "Badge exclusivo" },
                    { name: "Desafio Água", progress: 30, reward: "100 pontos" },
                  ].map((challenge, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{challenge.name}</p>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {challenge.reward}
                        </span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">{challenge.progress}% concluído</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="workouts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Meus Treinos</CardTitle>
              <CardDescription>Visualize e acompanhe seus treinos</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Dumbbell className="mx-auto h-16 w-16 text-muted" />
                <h3 className="mt-4 text-lg font-medium">Treinos Personalizados</h3>
                <p className="mt-2 text-sm text-muted-foreground">Acesse seus treinos e acompanhe seu progresso.</p>
                <Button className="mt-4" asChild>
                  <Link href="/client/workouts">Ver Meus Treinos</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="nutrition" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Minha Nutrição</CardTitle>
              <CardDescription>Visualize e acompanhe seu plano alimentar</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Apple className="mx-auto h-16 w-16 text-muted" />
                <h3 className="mt-4 text-lg font-medium">Plano Alimentar</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Acesse seu plano alimentar e registre suas refeições.
                </p>
                <Button className="mt-4" asChild>
                  <Link href="/client/nutrition">Ver Meu Plano Alimentar</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="challenges" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Desafios</CardTitle>
              <CardDescription>Participe de desafios e ganhe recompensas</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Trophy className="mx-auto h-16 w-16 text-muted" />
                <h3 className="mt-4 text-lg font-medium">Desafios Disponíveis</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Participe de desafios e ganhe pontos e recompensas.
                </p>
                <Button className="mt-4" asChild>
                  <Link href="/client/challenges">Ver Desafios</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
