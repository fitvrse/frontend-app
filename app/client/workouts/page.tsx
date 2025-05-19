import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Calendar, Clock, Dumbbell, TrendingUp } from "lucide-react"
// Vamos adicionar o Link do Next.js nas importações
import Link from "next/link"

export default function ClientWorkoutsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Meus Treinos</h1>
        <p className="text-muted-foreground">Visualize e acompanhe seus treinos</p>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Treino de Hoje</CardTitle>
          <CardDescription>Segunda-feira, {new Date().toLocaleDateString("pt-BR")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Treino A - Peito e Tríceps</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>60 min</span>
                </div>
                <div className="flex items-center">
                  <Dumbbell className="mr-1 h-4 w-4" />
                  <span>Intermediário</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>Seg, Qua, Sex</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Este treino foca em desenvolver força e hipertrofia nos músculos do peito e tríceps. Lembre-se de
                aquecer adequadamente antes de iniciar.
              </p>
              <p className="text-sm font-medium">Personal Trainer: João Carlos</p>
            </div>
            <div className="w-full md:w-auto">
              {/* // Agora vamos modificar o botão "Ver Treino" para incluir o link para a página de current-training
              // Substitua o botão existente na linha que contém "Ver Treino" com o seguinte: */}
              <Link href="/client/current-training" className="w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto">
                  Ver Treino
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
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
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Treinos</CardTitle>
              <CardDescription>Seus treinos realizados recentemente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    date: "10/05/2023",
                    name: "Treino B - Costas e Bíceps",
                    duration: "55 min",
                    intensity: "Alta",
                    completed: "100%",
                  },
                  {
                    date: "08/05/2023",
                    name: "Treino A - Peito e Tríceps",
                    duration: "62 min",
                    intensity: "Média",
                    completed: "100%",
                  },
                  {
                    date: "07/05/2023",
                    name: "Cardio - HIIT",
                    duration: "30 min",
                    intensity: "Alta",
                    completed: "100%",
                  },
                  {
                    date: "05/05/2023",
                    name: "Treino C - Pernas",
                    duration: "70 min",
                    intensity: "Alta",
                    completed: "100%",
                  },
                  {
                    date: "03/05/2023",
                    name: "Treino B - Costas e Bíceps",
                    duration: "58 min",
                    intensity: "Média",
                    completed: "83%",
                  },
                ].map((workout, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="min-w-[100px] text-sm">
                      <div className="font-medium">{workout.date}</div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="text-base font-medium">{workout.name}</div>
                        <div className="text-sm text-muted-foreground">{workout.completed}</div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        <span className="mr-4">{workout.duration}</span>
                        <TrendingUp className="mr-1 h-4 w-4" />
                        <span>Intensidade: {workout.intensity}</span>
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
                {[
                  {
                    name: "Supino Reto",
                    current: "20kg",
                    start: "15kg",
                    progress: 33,
                    trend: "up",
                  },
                  {
                    name: "Agachamento",
                    current: "40kg",
                    start: "25kg",
                    progress: 60,
                    trend: "up",
                  },
                  {
                    name: "Levantamento Terra",
                    current: "50kg",
                    start: "35kg",
                    progress: 43,
                    trend: "up",
                  },
                  {
                    name: "Remada Curvada",
                    current: "25kg",
                    start: "18kg",
                    progress: 39,
                    trend: "up",
                  },
                  {
                    name: "Desenvolvimento",
                    current: "15kg",
                    start: "12kg",
                    progress: 25,
                    trend: "up",
                  },
                ].map((exercise, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{exercise.name}</div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Inicial: </span>
                        {exercise.start} <span className="mx-1">→</span>
                        <span className="text-muted-foreground">Atual: </span>
                        <span className="font-medium">{exercise.current}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Progress value={exercise.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Progresso: {exercise.progress}%</span>
                        <span className={exercise.trend === "up" ? "text-green-500" : "text-red-500"}>
                          {exercise.trend === "up" ? "↑" : "↓"} {exercise.trend === "up" ? "Melhorando" : "Diminuindo"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="week" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Treinos da Semana</CardTitle>
              <CardDescription>Programação de treinos para os próximos dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    day: "Segunda-feira",
                    name: "Treino A - Peito e Tríceps",
                    trainer: "João Carlos",
                    exercises: "6 exercícios",
                    duration: "60 min",
                    completed: true,
                  },
                  {
                    day: "Terça-feira",
                    name: "Treino B - Costas e Bíceps",
                    trainer: "João Carlos",
                    exercises: "6 exercícios",
                    duration: "60 min",
                    completed: false,
                  },
                  {
                    day: "Quarta-feira",
                    name: "Descanso Ativo",
                    trainer: "João Carlos",
                    exercises: "Alongamento",
                    duration: "30 min",
                    completed: false,
                  },
                  {
                    day: "Quinta-feira",
                    name: "Treino C - Pernas",
                    trainer: "João Carlos",
                    exercises: "7 exercícios",
                    duration: "70 min",
                    completed: false,
                  },
                  {
                    day: "Sexta-feira",
                    name: "Treino D - Ombros e Abdômen",
                    trainer: "João Carlos",
                    exercises: "6 exercícios",
                    duration: "55 min",
                    completed: false,
                  },
                  {
                    day: "Sábado",
                    name: "Cardio - HIIT",
                    trainer: "João Carlos",
                    exercises: "Circuito",
                    duration: "30 min",
                    completed: false,
                  },
                  {
                    day: "Domingo",
                    name: "Descanso",
                    trainer: "-",
                    exercises: "-",
                    duration: "-",
                    completed: false,
                  },
                ].map((workout, i) => (
                  <div key={i} className="flex items-start space-x-4 border-b pb-4 last:border-0 last:pb-0">
                    <div className="min-w-[120px] text-sm">
                      <div className="font-medium">{workout.day}</div>
                      <div className={`text-xs ${workout.completed ? "text-green-500" : "text-muted-foreground"}`}>
                        {workout.completed ? "Concluído" : "Pendente"}
                      </div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="font-medium">{workout.name}</div>
                      <div className="text-sm text-muted-foreground">Personal Trainer: {workout.trainer}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Dumbbell className="mr-1 h-4 w-4" />
                        <span className="mr-4">{workout.exercises}</span>
                        <Clock className="mr-1 h-4 w-4" />
                        <span>{workout.duration}</span>
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
      </Tabs>
    </div>
  )
}
