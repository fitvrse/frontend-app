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
import { Badge } from "@/components/ui/badge"

export default function NutritionistPatientsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Pacientes</h1>
        <p className="text-muted-foreground">Gerencie seus pacientes e acompanhe seu progresso</p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar pacientes..." className="pl-8 w-full md:w-80" />
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
              <DropdownMenuItem>Tipo de dieta</DropdownMenuItem>
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
            Adicionar Paciente
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="active">Ativos</TabsTrigger>
          <TabsTrigger value="progress">Progresso</TabsTrigger>
          <TabsTrigger value="plans">Planos Alimentares</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Todos os Pacientes</CardTitle>
                <CardDescription>Total: 24 pacientes</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Paciente</TableHead>
                    <TableHead>Objetivo</TableHead>
                    <TableHead>Plano Alimentar</TableHead>
                    <TableHead>Início</TableHead>
                    <TableHead>Progresso</TableHead>
                    <TableHead>Próxima Consulta</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Mariana Costa",
                      avatar: "MC",
                      goal: "Emagrecimento",
                      plan: "Low Carb",
                      startDate: "10/01/2023",
                      progress: 75,
                      nextConsult: "Hoje, 09:00",
                    },
                    {
                      name: "Felipe Mendes",
                      avatar: "FM",
                      goal: "Ganho Muscular",
                      plan: "Hiperproteico",
                      startDate: "15/02/2023",
                      progress: 60,
                      nextConsult: "Amanhã, 11:00",
                    },
                    {
                      name: "Camila Rocha",
                      avatar: "CR",
                      goal: "Saúde Geral",
                      plan: "Mediterrâneo",
                      startDate: "05/03/2023",
                      progress: 85,
                      nextConsult: "Hoje, 14:30",
                    },
                    {
                      name: "Lucas Ferreira",
                      avatar: "LF",
                      goal: "Controle Glicêmico",
                      plan: "Low Carb",
                      startDate: "20/03/2023",
                      progress: 40,
                      nextConsult: "Quinta, 16:00",
                    },
                    {
                      name: "Beatriz Santos",
                      avatar: "BS",
                      goal: "Emagrecimento",
                      plan: "Cetogênica",
                      startDate: "01/04/2023",
                      progress: 55,
                      nextConsult: "Sexta, 18:00",
                    },
                    {
                      name: "Rodrigo Lima",
                      avatar: "RL",
                      goal: "Performance",
                      plan: "Hiperproteico",
                      startDate: "15/04/2023",
                      progress: 65,
                      nextConsult: "Hoje, 18:00",
                    },
                    {
                      name: "Juliana Martins",
                      avatar: "JM",
                      goal: "Intolerâncias",
                      plan: "Sem Glúten",
                      startDate: "01/05/2023",
                      progress: 30,
                      nextConsult: "Amanhã, 09:30",
                    },
                    {
                      name: "Gabriel Oliveira",
                      avatar: "GO",
                      goal: "Vegano",
                      plan: "Vegano",
                      startDate: "10/05/2023",
                      progress: 15,
                      nextConsult: "Quinta, 10:00",
                    },
                  ].map((patient, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/placeholder.svg" alt={patient.name} />
                            <AvatarFallback>{patient.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="font-medium">{patient.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>{patient.goal}</TableCell>
                      <TableCell>{patient.plan}</TableCell>
                      <TableCell>{patient.startDate}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={patient.progress} className="h-2 w-16" />
                          <span className="text-sm">{patient.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{patient.nextConsult}</TableCell>
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
                            <DropdownMenuItem>Prescrever Dieta</DropdownMenuItem>
                            <DropdownMenuItem>Agendar Consulta</DropdownMenuItem>
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
              <CardTitle>Pacientes Ativos</CardTitle>
              <CardDescription>Pacientes com consultas agendadas para esta semana</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    name: "Mariana Costa",
                    avatar: "MC",
                    goal: "Emagrecimento",
                    plan: "Low Carb",
                    nextConsult: "Hoje, 09:00",
                    lastConsult: "Há 2 semanas",
                    notes: "Dificuldade em manter dieta nos finais de semana. Revisar opções de refeições.",
                  },
                  {
                    name: "Camila Rocha",
                    avatar: "CR",
                    goal: "Saúde Geral",
                    plan: "Mediterrâneo",
                    nextConsult: "Hoje, 14:30",
                    lastConsult: "Há 1 mês",
                    notes: "Exames recentes mostram melhora nos níveis de colesterol. Manter plano atual.",
                  },
                  {
                    name: "Rodrigo Lima",
                    avatar: "RL",
                    goal: "Performance",
                    plan: "Hiperproteico",
                    nextConsult: "Hoje, 18:00",
                    lastConsult: "Há 3 semanas",
                    notes: "Aumentar proteína pós-treino. Revisar suplementação.",
                  },
                  {
                    name: "Felipe Mendes",
                    avatar: "FM",
                    goal: "Ganho Muscular",
                    plan: "Hiperproteico",
                    nextConsult: "Amanhã, 11:00",
                    lastConsult: "Há 2 semanas",
                    notes: "Progresso consistente. Ajustar calorias para fase de bulking.",
                  },
                  {
                    name: "Juliana Martins",
                    avatar: "JM",
                    goal: "Intolerâncias",
                    plan: "Sem Glúten",
                    nextConsult: "Amanhã, 09:30",
                    lastConsult: "Há 3 semanas",
                    notes: "Sintomas melhorando. Testar reintrodução gradual de alguns alimentos.",
                  },
                ].map((patient, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12 border">
                      <AvatarImage src="/placeholder.svg" alt={patient.name} />
                      <AvatarFallback>{patient.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-base font-medium">{patient.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {patient.goal} • {patient.plan} • Próxima consulta: {patient.nextConsult}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Detalhes
                        </Button>
                      </div>
                      <p className="text-sm">
                        <span className="text-muted-foreground">Última consulta: </span>
                        {patient.lastConsult}
                      </p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">Notas: </span>
                        {patient.notes}
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
              <CardTitle>Progresso dos Pacientes</CardTitle>
              <CardDescription>Acompanhamento de evolução</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  {
                    name: "Mariana Costa",
                    avatar: "MC",
                    goal: "Emagrecimento",
                    startWeight: "78kg",
                    currentWeight: "72kg",
                    bmi: "27.5 → 25.3",
                    bloodSugar: "Normal",
                    trend: "down",
                  },
                  {
                    name: "Felipe Mendes",
                    avatar: "FM",
                    goal: "Ganho Muscular",
                    startWeight: "70kg",
                    currentWeight: "75kg",
                    bmi: "22.1 → 23.7",
                    bloodSugar: "Normal",
                    trend: "up",
                  },
                  {
                    name: "Camila Rocha",
                    avatar: "CR",
                    goal: "Saúde Geral",
                    startWeight: "65kg",
                    currentWeight: "63kg",
                    bmi: "24.2 → 23.5",
                    bloodSugar: "Melhorou",
                    trend: "down",
                  },
                ].map((patient, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border">
                          <AvatarImage src="/placeholder.svg" alt={patient.name} />
                          <AvatarFallback>{patient.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{patient.name}</p>
                          <p className="text-sm text-muted-foreground">Objetivo: {patient.goal}</p>
                        </div>
                      </div>
                      <div
                        className={`flex items-center ${patient.trend === "down" ? "text-green-500" : "text-blue-500"}`}
                      >
                        {patient.trend === "down" ? (
                          <ChevronDown className="mr-1 h-5 w-5" />
                        ) : (
                          <ChevronUp className="mr-1 h-5 w-5" />
                        )}
                        <span className="font-medium">
                          {patient.trend === "down" ? "Perda de peso" : "Ganho de peso"}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Peso Inicial</p>
                        <p className="text-sm font-medium">{patient.startWeight}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Peso Atual</p>
                        <p className="text-sm font-medium">{patient.currentWeight}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">IMC</p>
                        <p className="text-sm font-medium">{patient.bmi}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Glicemia</p>
                        <p className="text-sm font-medium">{patient.bloodSugar}</p>
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
        <TabsContent value="plans" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Planos Alimentares Ativos</CardTitle>
              <CardDescription>Planos atualmente em uso pelos pacientes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    name: "Mariana Costa",
                    avatar: "MC",
                    plan: "Low Carb - Emagrecimento",
                    calories: "1800 kcal/dia",
                    macros: "P: 30% | C: 30% | G: 40%",
                    startDate: "10/01/2023",
                    endDate: "10/07/2023",
                    adherence: 85,
                  },
                  {
                    name: "Felipe Mendes",
                    avatar: "FM",
                    plan: "Hiperproteico - Ganho Muscular",
                    calories: "2500 kcal/dia",
                    macros: "P: 40% | C: 40% | G: 20%",
                    startDate: "15/02/2023",
                    endDate: "15/08/2023",
                    adherence: 90,
                  },
                  {
                    name: "Camila Rocha",
                    avatar: "CR",
                    plan: "Mediterrâneo - Saúde Geral",
                    calories: "2000 kcal/dia",
                    macros: "P: 25% | C: 50% | G: 25%",
                    startDate: "05/03/2023",
                    endDate: "05/09/2023",
                    adherence: 95,
                  },
                  {
                    name: "Lucas Ferreira",
                    avatar: "LF",
                    plan: "Low Carb - Controle Glicêmico",
                    calories: "1900 kcal/dia",
                    macros: "P: 30% | C: 25% | G: 45%",
                    startDate: "20/03/2023",
                    endDate: "20/06/2023",
                    adherence: 75,
                  },
                  {
                    name: "Beatriz Santos",
                    avatar: "BS",
                    plan: "Cetogênica - Emagrecimento",
                    calories: "1700 kcal/dia",
                    macros: "P: 25% | C: 5% | G: 70%",
                    startDate: "01/04/2023",
                    endDate: "01/07/2023",
                    adherence: 80,
                  },
                ].map((patient, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12 border">
                      <AvatarImage src="/placeholder.svg" alt={patient.name} />
                      <AvatarFallback>{patient.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-base font-medium">{patient.name}</p>
                          <p className="text-sm font-medium text-primary">{patient.plan}</p>
                        </div>
                        <Badge variant="outline">Adesão: {patient.adherence}%</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Calorias: </span>
                          {patient.calories}
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Macros: </span>
                          {patient.macros}
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Período: </span>
                          {patient.startDate} a {patient.endDate}
                        </div>
                      </div>
                      <div className="flex justify-between mt-3">
                        <Button variant="outline" size="sm">
                          Ver Detalhes
                        </Button>
                        <Button size="sm">Editar Plano</Button>
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
