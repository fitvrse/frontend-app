"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, Dumbbell, TrendingUp, Play, User } from "lucide-react"
import Link from "next/link"

export default function ClientWorkoutsPage() {
  const todayWorkout = {
    title: "Treino A - Peito e Tríceps",
    description: "Segunda-feira, " + new Date().toLocaleDateString("pt-BR"),
    duration: "60 min",
    exercises: 6,
    difficulty: "Intermediário",
    trainer: "João Carlos",
    progress: 0,
    schedule: "Seg, Qua, Sex",
  }

  const weekWorkouts = [
    {
      day: "Segunda-feira",
      name: "Treino A - Peito e Tríceps",
      trainer: "João Carlos",
      exercises: "6 exercícios",
      duration: "60 min",
      completed: true,
      progress: 100,
    },
    {
      day: "Terça-feira",
      name: "Treino B - Costas e Bíceps",
      trainer: "João Carlos",
      exercises: "6 exercícios",
      duration: "60 min",
      completed: false,
      progress: 0,
    },
    {
      day: "Quarta-feira",
      name: "Descanso Ativo",
      trainer: "João Carlos",
      exercises: "Alongamento",
      duration: "30 min",
      completed: false,
      progress: 0,
    },
    {
      day: "Quinta-feira",
      name: "Treino C - Pernas",
      trainer: "João Carlos",
      exercises: "7 exercícios",
      duration: "70 min",
      completed: false,
      progress: 0,
    },
    {
      day: "Sexta-feira",
      name: "Treino D - Ombros e Abdômen",
      trainer: "João Carlos",
      exercises: "6 exercícios",
      duration: "55 min",
      completed: false,
      progress: 0,
    },
    {
      day: "Sábado",
      name: "Cardio - HIIT",
      trainer: "João Carlos",
      exercises: "Circuito",
      duration: "30 min",
      completed: false,
      progress: 0,
    },
    {
      day: "Domingo",
      name: "Descanso",
      trainer: "-",
      exercises: "-",
      duration: "-",
      completed: false,
      progress: 0,
    },
  ]

  const workoutHistory = [
    {
      date: "10/05/2023",
      name: "Treino B - Costas e Bíceps",
      duration: "55 min",
      intensity: "Alta",
      completed: "100%",
      calories: 320,
    },
    {
      date: "08/05/2023",
      name: "Treino A - Peito e Tríceps",
      duration: "62 min",
      intensity: "Média",
      completed: "100%",
      calories: 280,
    },
    {
      date: "07/05/2023",
      name: "Cardio - HIIT",
      duration: "30 min",
      intensity: "Alta",
      completed: "100%",
      calories: 250,
    },
    {
      date: "05/05/2023",
      name: "Treino C - Pernas",
      duration: "70 min",
      intensity: "Alta",
      completed: "100%",
      calories: 380,
    },
    {
      date: "03/05/2023",
      name: "Treino B - Costas e Bíceps",
      duration: "58 min",
      intensity: "Média",
      completed: "83%",
      calories: 240,
    },
  ]

  const exerciseProgress = [
    {
      name: "Supino Reto",
      current: "20kg",
      start: "15kg",
      progress: 33,
      trend: "up",
      improvement: "+5kg",
    },
    {
      name: "Agachamento",
      current: "40kg",
      start: "25kg",
      progress: 60,
      trend: "up",
      improvement: "+15kg",
    },
    {
      name: "Levantamento Terra",
      current: "50kg",
      start: "35kg",
      progress: 43,
      trend: "up",
      improvement: "+15kg",
    },
    {
      name: "Remada Curvada",
      current: "25kg",
      start: "18kg",
      progress: 39,
      trend: "up",
      improvement: "+7kg",
    },
    {
      name: "Desenvolvimento",
      current: "15kg",
      start: "12kg",
      progress: 25,
      trend: "up",
      improvement: "+3kg",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Meus Treinos</h1>
        <p className="text-muted-foreground">Visualize e acompanhe seus treinos</p>
      </div>

      {/* Today's Workout Card */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Treino de Hoje</CardTitle>
          <CardDescription>{todayWorkout.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">{todayWorkout.title}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{todayWorkout.duration}</span>
                </div>
                <div className="flex items-center">
                  <Dumbbell className="mr-1 h-4 w-4" />
                  <span>{todayWorkout.difficulty}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{todayWorkout.schedule}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Este treino foca em desenvolver força e hipertrofia nos músculos do peito e tríceps. Lembre-se de
                aquecer adequadamente antes de iniciar.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4" />
                <span>Personal Trainer: {todayWorkout.trainer}</span>
              </div>
            </div>
            <div className="w-full md:w-auto flex flex-col gap-2">
              <Link href="/client/current-training" className="w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto">
                  <Play className="h-4 w-4 mr-2" />
                  Iniciar Treino
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full md:w-auto">
                Ver Detalhes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="week" className="space-y-4">
        <TabsList>
          <TabsTrigger value="week">Treinos da Semana</TabsTrigger>
          <TabsTrigger value="history">Histórico</TabsTrigger>
          <TabsTrigger value="progress">Progresso</TabsTrigger>
        </TabsList>

        <TabsContent value="week" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Programação Semanal</CardTitle>
              <CardDescription>Seus treinos programados para esta semana</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weekWorkouts.map((workout, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="min-w-[120px]">
                      <div className="font-medium">{workout.day}</div>
                      <Badge variant={workout.completed ? "default" : "secondary"} className="mt-1">
                        {workout.completed ? "Concluído" : "Pendente"}
                      </Badge>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="font-medium">{workout.name}</div>
                      <div className="text-sm text-muted-foreground">Personal: {workout.trainer}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Dumbbell className="mr-1 h-4 w-4" />
                        <span className="mr-4">{workout.exercises}</span>
                        <Clock className="mr-1 h-4 w-4" />
                        <span>{workout.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {workout.progress > 0 && <div className="text-sm text-muted-foreground">{workout.progress}%</div>}
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Treinos</CardTitle>
              <CardDescription>Seus treinos realizados recentemente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {workoutHistory.map((workout, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="min-w-[100px] text-sm">
                      <div className="font-medium">{workout.date}</div>
                      <Badge variant="outline" className="mt-1">
                        {workout.completed}
                      </Badge>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="font-medium">{workout.name}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        <span className="mr-4">{workout.duration}</span>
                        <TrendingUp className="mr-1 h-4 w-4" />
                        <span className="mr-4">Intensidade: {workout.intensity}</span>
                        <span>{workout.calories} kcal</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Progresso dos Exercícios</CardTitle>
              <CardDescription>Evolução da carga nos principais exercícios</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {exerciseProgress.map((exercise, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{exercise.name}</div>
                      <div className="text-sm flex items-center gap-2">
                        <span className="text-muted-foreground">Inicial:</span>
                        <span>{exercise.start}</span>
                        <ArrowRight className="h-3 w-3" />
                        <span className="text-muted-foreground">Atual:</span>
                        <span className="font-medium">{exercise.current}</span>
                        <Badge variant="outline" className="text-green-600">
                          {exercise.improvement}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Progress value={exercise.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Progresso: {exercise.progress}%</span>
                        <span className="text-green-500 flex items-center">↑ Melhorando</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
