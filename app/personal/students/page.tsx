import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronDown, ChevronUp, Filter, MoreHorizontal, Plus, Search, SlidersHorizontal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function PersonalStudentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Alunos</h1>
        <p className="text-muted-foreground">Gerencie seus alunos e acompanhe seu progresso</p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar alunos..." className="pl-8 w-full md:w-80" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filtrar</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Objetivo</DropdownMenuItem>
              <DropdownMenuItem>Frequência</DropdownMenuItem>
              <DropdownMenuItem>Progresso</DropdownMenuItem>
              <DropdownMenuItem>Data de início</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Ordenar</span>
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button size="sm" className="h-9">
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Aluno
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="active">Ativos</TabsTrigger>
          <TabsTrigger value="progress">Progresso</TabsTrigger>
          <TabsTrigger value="goals">Metas</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Todos os Alunos</CardTitle>
                <CardDescription>Total: 18 alunos</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Aluno</TableHead>
                    <TableHead>Objetivo</TableHead>
                    <TableHead>Início</TableHead>
                    <TableHead>Frequência</TableHead>
                    <TableHead>Progresso</TableHead>
                    <TableHead>Próxima Sessão</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Carlos Silva",
                      avatar: "CS",
                      goal: "Hipertrofia",
                      startDate: "10/01/2023",
                      frequency: "Alta",
                      progress: 75,
                      nextSession: "Hoje, 18:00",
                    },
                    {
                      name: "Ana Oliveira",
                      avatar: "AO",
                      goal: "Emagrecimento",
                      startDate: "15/02/2023",
                      frequency: "Média",
                      progress: 60,
                      nextSession: "Amanhã, 10:00",
                    },
                    {
                      name: "Pedro Santos",
                      avatar: "PS",
                      goal: "Condicionamento",
                      startDate: "05/03/2023",
                      frequency: "Alta",
                      progress: 85,
                      nextSession: "Hoje, 14:00",
                    },
                    {
                      name: "Juliana Lima",
                      avatar: "JL",
                      goal: "Reabilitação",
                      startDate: "20/03/2023",
                      frequency: "Baixa",
                      progress: 40,
                      nextSession: "Quinta, 16:00",
                    },
                    {
                      name: "Roberto Alves",
                      avatar: "RA",
                      goal: "Hipertrofia",
                      startDate: "01/04/2023",
                      frequency: "Média",
                      progress: 55,
                      nextSession: "Sexta, 18:00",
                    },
                    {
                      name: "Fernanda Costa",
                      avatar: "FC",
                      goal: "Emagrecimento",
                      startDate: "15/04/2023",
                      frequency: "Alta",
                      progress: 65,
                      nextSession: "Hoje, 19:00",
                    },
                    {
                      name: "Marcos Oliveira",
                      avatar: "MO",
                      goal: "Força",
                      startDate: "01/05/2023",
                      frequency: "Alta",
                      progress: 30,
                      nextSession: "Amanhã, 07:00",
                    },
                    {
                      name: "Carla Santos",
                      avatar: "CS",
                      goal: "Tonificação",
                      startDate: "10/05/2023",
                      frequency: "Média",
                      progress: 15,
                      nextSession: "Quinta, 08:00",
                    },
                  ].map((student, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/placeholder.svg" alt={student.name} />
                            <AvatarFallback>{student.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="font-medium">{student.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>{student.goal}</TableCell>
                      <TableCell>{student.startDate}</TableCell>
                      <TableCell>
                        <div
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            student.frequency === "Alta"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : student.frequency === "Média"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          }`}
                        >
                          {student.frequency}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={student.progress} className="h-2 w-16" />
                          <span className="text-sm">{student.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{student.nextSession}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Ações</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
                            <DropdownMenuItem>Editar</DropdownMenuItem>
                            <DropdownMenuItem>Prescrever Treino</DropdownMenuItem>
                            <DropdownMenuItem>Agendar Sessão</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Remover</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Alunos Ativos</CardTitle>
              <CardDescription>Alunos com sessões agendadas para esta semana</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    name: "Carlos Silva",
                    avatar: "CS",
                    goal: "Hipertrofia",
                    nextSession: "Hoje, 18:00",
                    lastSession: "Há 2 dias",
                    notes: "Foco em peito e tríceps. Aumentar carga no supino.",
                  },
                  {
                    name: "Pedro Santos",
                    avatar: "PS",
                    goal: "Condicionamento",
                    nextSession: "Hoje, 14:00",
                    lastSession: "Há 3 dias",
                    notes: "Aumentar intensidade do cardio. Adicionar exercícios de core.",
                  },
                  {
                    name: "Fernanda Costa",
                    avatar: "FC",
                    goal: "Emagrecimento",
                    nextSession: "Hoje, 19:00",
                    lastSession: "Ontem",
                    notes: "Manter foco em HIIT. Revisar alimentação pré-treino.",
                  },
                  {
                    name: "Ana Oliveira",
                    avatar: "AO",
                    goal: "Emagrecimento",
                    nextSession: "Amanhã, 10:00",
                    lastSession: "Há 4 dias",
                    notes: "Aumentar séries de agachamento. Adicionar exercícios para glúteos.",
                  },
                  {
                    name: "Marcos Oliveira",
                    avatar: "MO",
                    goal: "Força",
                    nextSession: "Amanhã, 07:00",
                    lastSession: "Há 2 dias",
                    notes: "Foco em costas e bíceps. Testar novo exercício de remada.",
                  },
                ].map((student, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12 border">
                      <AvatarImage src="/placeholder.svg" alt={student.name} />
                      <AvatarFallback>{student.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-base font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {student.goal} • Próxima sessão: {student.nextSession}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Detalhes
                        </Button>
                      </div>
                      <p className="text-sm">
                        <span className="text-muted-foreground">Última sessão: </span>
                        {student.lastSession}
                      </p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">Notas: </span>
                        {student.notes}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Progresso dos Alunos</CardTitle>
              <CardDescription>Acompanhamento de evolução</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  {
                    name: "Carlos Silva",
                    avatar: "CS",
                    goal: "Hipertrofia",
                    startWeight: "75kg",
                    currentWeight: "80kg",
                    bodyFat: "18% → 15%",
                    strength: "+25% no supino",
                    trend: "up",
                  },
                  {
                    name: "Ana Oliveira",
                    avatar: "AO",
                    goal: "Emagrecimento",
                    startWeight: "68kg",
                    currentWeight: "63kg",
                    bodyFat: "28% → 24%",
                    strength: "+15% no agachamento",
                    trend: "down",
                  },
                  {
                    name: "Pedro Santos",
                    avatar: "PS",
                    goal: "Condicionamento",
                    startWeight: "82kg",
                    currentWeight: "80kg",
                    bodyFat: "20% → 18%",
                    strength: "+30% na resistência cardio",
                    trend: "up",
                  },
                ].map((student, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border">
                          <AvatarImage src="/placeholder.svg" alt={student.name} />
                          <AvatarFallback>{student.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">Objetivo: {student.goal}</p>
                        </div>
                      </div>
                      <div
                        className={`flex items-center ${student.trend === "down" ? "text-green-500" : "text-blue-500"}`}
                      >
                        {student.trend === "down" ? (
                          <ChevronDown className="mr-1 h-5 w-5" />
                        ) : (
                          <ChevronUp className="mr-1 h-5 w-5" />
                        )}
                        <span className="font-medium">
                          {student.trend === "down" ? "Emagrecimento" : "Ganho muscular"}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Peso Inicial</p>
                        <p className="text-sm font-medium">{student.startWeight}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Peso Atual</p>
                        <p className="text-sm font-medium">{student.currentWeight}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">% de Gordura</p>
                        <p className="text-sm font-medium">{student.bodyFat}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Força</p>
                        <p className="text-sm font-medium">{student.strength}</p>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progresso geral</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="goals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Metas dos Alunos</CardTitle>
              <CardDescription>Acompanhamento de objetivos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    name: "Carlos Silva",
                    avatar: "CS",
                    goals: [
                      { name: "Ganhar 5kg de massa muscular", progress: 80, deadline: "Em 2 meses" },
                      { name: "Aumentar supino para 100kg", progress: 70, deadline: "Em 3 meses" },
                      { name: "Reduzir % de gordura para 12%", progress: 60, deadline: "Em 4 meses" },
                    ],
                  },
                  {
                    name: "Ana Oliveira",
                    avatar: "AO",
                    goals: [
                      { name: "Perder 8kg", progress: 65, deadline: "Em 3 meses" },
                      { name: "Reduzir % de gordura para 20%", progress: 50, deadline: "Em 4 meses" },
                      { name: "Correr 5km sem parar", progress: 75, deadline: "Em 2 meses" },
                    ],
                  },
                  {
                    name: "Pedro Santos",
                    avatar: "PS",
                    goals: [
                      { name: "Melhorar resistência cardio", progress: 85, deadline: "Em 1 mês" },
                      { name: "Aumentar flexibilidade", progress: 60, deadline: "Em 3 meses" },
                      { name: "Reduzir tempo de 10km", progress: 70, deadline: "Em 2 meses" },
                    ],
                  },
                ].map((student, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage src="/placeholder.svg" alt={student.name} />
                        <AvatarFallback>{student.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="font-medium">{student.name}</div>
                    </div>
                    <div className="space-y-3 pl-12">
                      {student.goals.map((goal, j) => (
                        <div key={j} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{goal.name}</span>
                            <span className="text-muted-foreground">{goal.deadline}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Progress value={goal.progress} className="h-2 flex-1" />
                            <span className="text-sm">{goal.progress}%</span>
                          </div>
                        </div>
                      ))}
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
