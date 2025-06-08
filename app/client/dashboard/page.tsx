"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Dumbbell,
  Trophy,
  BarChart3,
  Apple,
  Users,
  Flame,
  Droplets,
} from "lucide-react"
import Link from "next/link"

export default function ClientDashboard() {
  const stats = [
    {
      title: "Treinos Concluídos",
      value: "12",
      description: "+2 desde a semana passada",
      icon: Target,
      trend: "+16%",
    },
    {
      title: "Tempo Total",
      value: "18h",
      description: "+3h desde a semana passada",
      icon: Clock,
      trend: "+20%",
    },
    {
      title: "Sequência Atual",
      value: "7 dias",
      description: "Melhor sequência: 14 dias",
      icon: Calendar,
      trend: "50%",
    },
    {
      title: "Progresso Mensal",
      value: "85%",
      description: "Meta: 20 treinos/mês",
      icon: TrendingUp,
      trend: "+5%",
    },
  ]

  const todayStats = [
    { label: "Calorias", value: "1,250", target: "1,800", progress: 69, icon: Flame },
    { label: "Água", value: "1.2L", target: "2.0L", progress: 60, icon: Droplets },
    { label: "Proteínas", value: "85g", target: "120g", progress: 70, icon: Apple },
    { label: "Treino", value: "60%", target: "100%", progress: 60, icon: Dumbbell },
  ]

  const upcomingActivities = [
    {
      title: "Treino A - Peito e Tríceps",
      time: "18:00 - 19:30",
      type: "workout",
      trainer: "João Carlos",
      location: "Academia Fitness",
    },
    {
      title: "Consulta Nutricional",
      time: "Amanhã, 10:00",
      type: "nutrition",
      trainer: "Dra. Ana Silva",
      location: "Consultório",
    },
    {
      title: "Aula de Spinning",
      time: "Quinta, 19:00",
      type: "class",
      trainer: "Prof. Carlos",
      location: "Academia Fitness",
    },
    {
      title: "Avaliação Física",
      time: "Sexta, 14:00",
      type: "assessment",
      trainer: "Prof. Roberto",
      location: "Academia Fitness",
    },
  ]

  const goals = [
    { name: "Perder 5kg", progress: 60, target: "2kg restantes", color: "bg-red-500" },
    { name: "Treinar 4x por semana", progress: 75, target: "3/4 esta semana", color: "bg-blue-500" },
    { name: "Beber 2L de água por dia", progress: 40, target: "Média: 1.2L/dia", color: "bg-cyan-500" },
    { name: "Ganhar massa muscular", progress: 30, target: "1.5kg em 3 meses", color: "bg-green-500" },
  ]

  const recentWorkouts = [
    { name: "Treino A - Peito e Tríceps", date: "Hoje", duration: "60 min", intensity: "Alta", completed: true },
    { name: "Treino B - Costas e Bíceps", date: "Há 2 dias", duration: "55 min", intensity: "Média", completed: true },
    { name: "Cardio - HIIT", date: "Há 3 dias", duration: "30 min", intensity: "Alta", completed: true },
    { name: "Treino C - Pernas", date: "Há 5 dias", duration: "70 min", intensity: "Alta", completed: true },
  ]

  const activeChallenges = [
    { name: "30 Dias de Treino", progress: 70, reward: "500 pontos + Badge", daysLeft: 9 },
    { name: "Desafio Cardio", progress: 45, reward: "300 pontos", daysLeft: 15 },
    { name: "Desafio Água", progress: 30, reward: "200 pontos", daysLeft: 20 },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "workout":
        return <Dumbbell className="h-4 w-4" />
      case "nutrition":
        return <Apple className="h-4 w-4" />
      case "class":
        return <Users className="h-4 w-4" />
      case "assessment":
        return <BarChart3 className="h-4 w-4" />
      default:
        return <Calendar className="h-4 w-4" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "workout":
        return "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
      case "nutrition":
        return "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
      case "class":
        return "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400"
      case "assessment":
        return "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400"
      default:
        return "bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-400"
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Painel</h1>
        <p className="text-muted-foreground">Bem-vindo(a) de volta, Maria!</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Today's Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Progresso de Hoje</CardTitle>
          <CardDescription>Acompanhe suas metas diárias</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {todayStats.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.progress}%</span>
                </div>
                <Progress value={item.progress} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  {item.value} / {item.target}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="workouts">Treinos</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrição</TabsTrigger>
          <TabsTrigger value="challenges">Desafios</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Chart Area */}
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Progresso Mensal</CardTitle>
                <CardDescription>Evolução dos seus treinos e metas</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted" />
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Activities */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Próximas Atividades</CardTitle>
                <CardDescription>Seus compromissos agendados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingActivities.map((activity, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}
                      >
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.trainer} • {activity.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Goals */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Metas Atuais</CardTitle>
                <CardDescription>Seu progresso até agora</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {goals.map((goal, i) => (
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

            {/* Recent Workouts */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Últimos Treinos</CardTitle>
                <CardDescription>Seus treinos recentes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentWorkouts.map((workout, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{workout.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {workout.date} • {workout.duration} • {workout.intensity}
                        </p>
                      </div>
                      <Badge variant={workout.completed ? "default" : "secondary"}>
                        {workout.completed ? "Concluído" : "Pendente"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Active Challenges */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Desafios Ativos</CardTitle>
                <CardDescription>Participe e ganhe recompensas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeChallenges.map((challenge, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{challenge.name}</p>
                        <Badge variant="outline">{challenge.daysLeft} dias</Badge>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{challenge.progress}% concluído</span>
                        <span>{challenge.reward}</span>
                      </div>
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
              <CardTitle>Treino Atual</CardTitle>
              <CardDescription>Continue de onde parou</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Treino A - Peito e Tríceps</span>
                  <span>60% concluído</span>
                </div>
                <Progress value={60} />
              </div>
              <div className="flex gap-2">
                <Link href="/client/current-training" className="flex-1">
                  <Button className="w-full">Continuar Treino</Button>
                </Link>
                <Link href="/client/workouts">
                  <Button variant="outline">Ver Todos</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Próximos Treinos</CardTitle>
              <CardDescription>Sua programação da semana</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "Treino B - Costas e Bíceps", date: "Amanhã, 08:00", trainer: "João Carlos" },
                { name: "Treino C - Pernas", date: "Quinta, 08:00", trainer: "João Carlos" },
                { name: "Cardio - HIIT", date: "Sexta, 07:00", trainer: "João Carlos" },
              ].map((workout, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{workout.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {workout.date} • {workout.trainer}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutrition" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Plano Alimentar de Hoje</CardTitle>
              <CardDescription>Acompanhe suas refeições</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold">1,250</div>
                  <div className="text-sm text-muted-foreground">Calorias consumidas</div>
                  <div className="text-xs text-muted-foreground">Meta: 1,800 kcal</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">85g</div>
                  <div className="text-sm text-muted-foreground">Proteínas</div>
                  <div className="text-xs text-muted-foreground">Meta: 120g</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1.2L</div>
                  <div className="text-sm text-muted-foreground">Água</div>
                  <div className="text-xs text-muted-foreground">Meta: 2.0L</div>
                </div>
              </div>
              <Link href="/client/nutrition">
                <Button className="w-full">Ver Plano Completo</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="challenges" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Desafios Disponíveis</CardTitle>
              <CardDescription>Participe e ganhe pontos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <Trophy className="mx-auto h-16 w-16 text-muted" />
                <h3 className="mt-4 text-lg font-medium">850 Pontos Acumulados</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Participe de desafios e ganhe pontos para trocar por recompensas.
                </p>
                <Link href="/client/challenges">
                  <Button className="mt-4">Ver Todos os Desafios</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
