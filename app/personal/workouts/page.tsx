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
import {
  Copy,
  Dumbbell,
  Filter,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Share,
  SlidersHorizontal,
  Trash2,
  Users,
} from "lucide-react"

export default function PersonalWorkoutsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Treinos</h1>
        <p className="text-muted-foreground">Crie e gerencie treinos para seus alunos</p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar treinos..." className="pl-8 w-full md:w-80" />
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
              <DropdownMenuItem>Tipo de treino</DropdownMenuItem>
              <DropdownMenuItem>Grupo muscular</DropdownMenuItem>
              <DropdownMenuItem>Nível de dificuldade</DropdownMenuItem>
              <DropdownMenuItem>Data de criação</DropdownMenuItem>
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
            Criar Treino
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todos os Treinos</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="assigned">Atribuídos</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Todos os Treinos</CardTitle>
                <CardDescription>Total: 24 treinos</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Nível</TableHead>
                    <TableHead>Duração</TableHead>
                    <TableHead>Alunos</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "T001",
                      name: "Hipertrofia - Membros Superiores",
                      type: "Força",
                      level: "Intermediário",
                      duration: "60 min",
                      students: 8,
                    },
                    {
                      id: "T002",
                      name: "HIIT - Queima de Gordura",
                      type: "Cardio",
                      level: "Avançado",
                      duration: "30 min",
                      students: 12,
                    },
                    {
                      id: "T003",
                      name: "Força - Full Body",
                      type: "Força",
                      level: "Iniciante",
                      duration: "45 min",
                      students: 5,
                    },
                    {
                      id: "T004",
                      name: "Resistência - Cardio",
                      type: "Cardio",
                      level: "Intermediário",
                      duration: "40 min",
                      students: 7,
                    },
                    {
                      id: "T005",
                      name: "Hipertrofia - Membros Inferiores",
                      type: "Força",
                      level: "Avançado",
                      duration: "70 min",
                      students: 6,
                    },
                    {
                      id: "T006",
                      name: "Funcional - Core",
                      type: "Funcional",
                      level: "Intermediário",
                      duration: "45 min",
                      students: 9,
                    },
                    {
                      id: "T007",
                      name: "Mobilidade e Flexibilidade",
                      type: "Mobilidade",
                      level: "Iniciante",
                      duration: "30 min",
                      students: 4,
                    },
                    {
                      id: "T008",
                      name: "Treino de Potência",
                      type: "Força",
                      level: "Avançado",
                      duration: "50 min",
                      students: 3,
                    },
                    {
                      id: "T009",
                      name: "Circuito Metabólico",
                      type: "Circuito",
                      level: "Intermediário",
                      duration: "35 min",
                      students: 10,
                    },
                    {
                      id: "T010",
                      name: "Recuperação Ativa",
                      type: "Recuperação",
                      level: "Iniciante",
                      duration: "25 min",
                      students: 2,
                    },
                  ].map((workout) => (
                    <TableRow key={workout.id}>
                      <TableCell className="font-medium">{workout.id}</TableCell>
                      <TableCell>
                        <div className="font-medium">{workout.name}</div>
                      </TableCell>
                      <TableCell>{workout.type}</TableCell>
                      <TableCell>{workout.level}</TableCell>
                      <TableCell>{workout.duration}</TableCell>
                      <TableCell>{workout.students}</TableCell>
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
                            <DropdownMenuItem>
                              <Pencil className="mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Copy className="mr-2 h-4 w-4" />
                              Duplicar
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Share className="mr-2 h-4 w-4" />
                              Atribuir
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Excluir
                            </DropdownMenuItem>
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
        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Templates de Treino</CardTitle>
                <CardDescription>Total: 15 templates</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Dumbbell className="mx-auto h-16 w-16 text-muted" />
                  <h3 className="mt-4 text-lg font-medium">Templates de Treino</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Visualize e gerencie seus templates de treino reutilizáveis.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="assigned" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Treinos Atribuídos</CardTitle>
                <CardDescription>Total: 18 treinos atribuídos</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Users className="mx-auto h-16 w-16 text-muted" />
                  <h3 className="mt-4 text-lg font-medium">Treinos Atribuídos</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Visualize os treinos atribuídos aos seus alunos.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
