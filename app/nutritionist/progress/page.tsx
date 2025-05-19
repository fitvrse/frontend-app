import { LineChart, BarChart, PieChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function PersonalProgressPage() {
  // Dados simulados de alunos
  const students = [
    {
      id: 1,
      name: "Carlos Silva",
      avatar: "/placeholder.svg?height=40&width=40",
      progress: 75,
      lastUpdate: "2 dias atrás",
      metrics: {
        weight: { current: 78, initial: 85, goal: 75 },
        bodyFat: { current: 18, initial: 22, goal: 15 },
        muscle: { current: 35, initial: 32, goal: 38 },
      },
    },
    {
      id: 2,
      name: "Mariana Costa",
      avatar: "/placeholder.svg?height=40&width=40",
      progress: 60,
      lastUpdate: "5 dias atrás",
      metrics: {
        weight: { current: 62, initial: 68, goal: 60 },
        bodyFat: { current: 24, initial: 28, goal: 22 },
        muscle: { current: 28, initial: 26, goal: 30 },
      },
    },
    {
      id: 3,
      name: "Pedro Alves",
      avatar: "/placeholder.svg?height=40&width=40",
      progress: 90,
      lastUpdate: "1 dia atrás",
      metrics: {
        weight: { current: 82, initial: 80, goal: 85 },
        bodyFat: { current: 14, initial: 16, goal: 12 },
        muscle: { current: 40, initial: 38, goal: 42 },
      },
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Progresso dos Alunos</h1>
        <p className="text-muted-foreground">Acompanhe a evolução e resultados dos seus alunos</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="individual">Progresso Individual</TabsTrigger>
            <TabsTrigger value="metrics">Métricas</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Média de Progresso</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">75%</div>
                  <p className="text-xs text-muted-foreground">+12% em relação ao mês anterior</p>
                  <div className="mt-4 h-[80px] flex items-center justify-center text-[#1b4040]">
                    <LineChart className="h-16 w-16" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Metas Atingidas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12/20</div>
                  <p className="text-xs text-muted-foreground">60% de sucesso</p>
                  <div className="mt-4 h-[80px] flex items-center justify-center text-[#1b4040]">
                    <BarChart className="h-16 w-16" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Distribuição de Foco</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3 áreas</div>
                  <p className="text-xs text-muted-foreground">Hipertrofia, Perda de Peso, Resistência</p>
                  <div className="mt-4 h-[80px] flex items-center justify-center text-[#1b4040]">
                    <PieChart className="h-16 w-16" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Alunos em Destaque</CardTitle>
                <CardDescription>Alunos com maior progresso recente</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-2 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                          <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">Atualizado {student.lastUpdate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-32">
                          <Progress value={student.progress} className="h-2" />
                        </div>
                        <span className="font-medium text-sm">{student.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="individual" className="space-y-6 mt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Progresso Individual</h2>
              <Select defaultValue="1">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Selecione um aluno" />
                </SelectTrigger>
                <SelectContent>
                  {students.map((student) => (
                    <SelectItem key={student.id} value={student.id.toString()}>
                      {student.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Perfil do Aluno</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={students[0].avatar || "/placeholder.svg"} alt={students[0].name} />
                      <AvatarFallback>{students[0].name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">{students[0].name}</h3>
                      <p className="text-muted-foreground">Objetivo: Hipertrofia</p>
                      <div className="flex gap-2 mt-1">
                        <Badge className="bg-[#1b4040] hover:bg-[#143030]">Intermediário</Badge>
                        <Badge className="bg-[#abd904] hover:bg-[#9bc304] text-black">Consistente</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Progresso Geral</span>
                        <span className="text-sm font-medium">{students[0].progress}%</span>
                      </div>
                      <Progress value={students[0].progress} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Data de Início</p>
                        <p className="text-sm">15/01/2023</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Frequência</p>
                        <p className="text-sm">4x por semana</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Treinos Concluídos</p>
                        <p className="text-sm">45 de 52</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Avaliações</p>
                        <p className="text-sm">3 realizadas</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Métricas Principais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Peso (kg)</span>
                        <span className="text-sm font-medium">
                          {students[0].metrics.weight.current}kg / Meta: {students[0].metrics.weight.goal}kg
                        </span>
                      </div>
                      <Progress
                        value={
                          ((students[0].metrics.weight.initial - students[0].metrics.weight.current) /
                            (students[0].metrics.weight.initial - students[0].metrics.weight.goal)) *
                          100
                        }
                        className="h-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Inicial: {students[0].metrics.weight.initial}kg
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Gordura Corporal (%)</span>
                        <span className="text-sm font-medium">
                          {students[0].metrics.bodyFat.current}% / Meta: {students[0].metrics.bodyFat.goal}%
                        </span>
                      </div>
                      <Progress
                        value={
                          ((students[0].metrics.bodyFat.initial - students[0].metrics.bodyFat.current) /
                            (students[0].metrics.bodyFat.initial - students[0].metrics.bodyFat.goal)) *
                          100
                        }
                        className="h-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Inicial: {students[0].metrics.bodyFat.initial}%
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Massa Muscular (%)</span>
                        <span className="text-sm font-medium">
                          {students[0].metrics.muscle.current}% / Meta: {students[0].metrics.muscle.goal}%
                        </span>
                      </div>
                      <Progress
                        value={
                          ((students[0].metrics.muscle.current - students[0].metrics.muscle.initial) /
                            (students[0].metrics.muscle.goal - students[0].metrics.muscle.initial)) *
                          100
                        }
                        className="h-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Inicial: {students[0].metrics.muscle.initial}%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="metrics" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Métricas Comparativas</CardTitle>
                <CardDescription>Compare o progresso entre diferentes alunos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Perda de Peso (kg)</h3>
                    <div className="space-y-3">
                      {students.map((student) => (
                        <div key={student.id} className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                            <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">{student.name}</span>
                              <span className="text-sm font-medium">
                                {student.metrics.weight.initial - student.metrics.weight.current}kg
                              </span>
                            </div>
                            <Progress
                              value={
                                ((student.metrics.weight.initial - student.metrics.weight.current) /
                                  (student.metrics.weight.initial - student.metrics.weight.goal)) *
                                100
                              }
                              className="h-2"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Redução de Gordura Corporal (%)</h3>
                    <div className="space-y-3">
                      {students.map((student) => (
                        <div key={student.id} className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                            <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">{student.name}</span>
                              <span className="text-sm font-medium">
                                {student.metrics.bodyFat.initial - student.metrics.bodyFat.current}%
                              </span>
                            </div>
                            <Progress
                              value={
                                ((student.metrics.bodyFat.initial - student.metrics.bodyFat.current) /
                                  (student.metrics.bodyFat.initial - student.metrics.bodyFat.goal)) *
                                100
                              }
                              className="h-2"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Ganho de Massa Muscular (%)</h3>
                    <div className="space-y-3">
                      {students.map((student) => (
                        <div key={student.id} className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                            <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">{student.name}</span>
                              <span className="text-sm font-medium">
                                {student.metrics.muscle.current - student.metrics.muscle.initial}%
                              </span>
                            </div>
                            <Progress
                              value={
                                ((student.metrics.muscle.current - student.metrics.muscle.initial) /
                                  (student.metrics.muscle.goal - student.metrics.muscle.initial)) *
                                100
                              }
                              className="h-2"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
