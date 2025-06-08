"use client"

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
  Activity,
  Eye,
  Filter,
  Info,
  Plus,
  Search,
  SlidersHorizontal,
  Trash2,
  Trophy,
  Users,
  Heart,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function PersonalAerobicTrainingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Treinos Aeróbicos</h1>
        <p className="text-muted-foreground">Crie e gerencie treinos aeróbicos para seus alunos</p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar treinos aeróbicos..." className="pl-8 w-full md:w-80" />
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
              <DropdownMenuItem>Tipo de cardio</DropdownMenuItem>
              <DropdownMenuItem>Intensidade</DropdownMenuItem>
              <DropdownMenuItem>Duração</DropdownMenuItem>
              <DropdownMenuItem>Data de criação</DropdownMenuItem>
              <DropdownMenuItem>Objetivo</DropdownMenuItem>
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
            Criar Treino Aeróbico
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
                <CardTitle className="text-base">Todos os Treinos Aeróbicos</CardTitle>
                <CardDescription>Total: 16 treinos</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead className="text-center">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "C001",
                      name: "HIIT - Queima de Gordura",
                      type: "HIIT",
                      intensity: "Alta",
                      duration: "30 min",
                      createdAt: "10/01/2023",
                      days: ["Ter", "Qui"],
                      goal: "Emagrecimento",
                      students: 8,
                    },
                    {
                      id: "C002",
                      name: "Cardio Moderado - Esteira",
                      type: "Esteira",
                      intensity: "Média",
                      duration: "45 min",
                      createdAt: "15/02/2023",
                      days: ["Seg", "Qua", "Sex"],
                      goal: "Resistência",
                      students: 12,
                    },
                    {
                      id: "C003",
                      name: "Ciclismo Intervalado",
                      type: "Bicicleta",
                      intensity: "Alta",
                      duration: "40 min",
                      createdAt: "05/03/2023",
                      days: ["Ter", "Qui", "Sáb"],
                      goal: "Condicionamento",
                      students: 5,
                    },
                    {
                      id: "C004",
                      name: "Caminhada Leve",
                      type: "Caminhada",
                      intensity: "Baixa",
                      duration: "60 min",
                      createdAt: "20/03/2023",
                      days: ["Seg", "Qua", "Sex"],
                      goal: "Recuperação",
                      students: 7,
                    },
                    {
                      id: "C005",
                      name: "Corrida Intervalada",
                      type: "Corrida",
                      intensity: "Alta",
                      duration: "35 min",
                      createdAt: "01/04/2023",
                      days: ["Ter", "Qui"],
                      goal: "Emagrecimento",
                      students: 6,
                    },
                    {
                      id: "C006",
                      name: "Elíptico - Baixo Impacto",
                      type: "Elíptico",
                      intensity: "Média",
                      duration: "50 min",
                      createdAt: "15/04/2023",
                      days: ["Seg", "Sex"],
                      goal: "Resistência",
                      students: 9,
                    },
                    {
                      id: "C007",
                      name: "Remo Intervalado",
                      type: "Remo",
                      intensity: "Alta",
                      duration: "25 min",
                      createdAt: "01/05/2023",
                      days: ["Ter", "Qui", "Sáb"],
                      goal: "Condicionamento",
                      students: 4,
                    },
                    {
                      id: "C008",
                      name: "Cardio Misto",
                      type: "Misto",
                      intensity: "Média",
                      duration: "45 min",
                      createdAt: "10/05/2023",
                      days: ["Seg", "Qua", "Sex"],
                      goal: "Emagrecimento",
                      students: 3,
                    },
                  ].map((workout) => (
                    <TableRow key={workout.id}>
                      <TableCell>
                        <div className="font-medium">{workout.name}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-center space-x-1">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon" title="Informações">
                                <Info className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                              <DialogHeader>
                                <DialogTitle>{workout.name}</DialogTitle>
                                <DialogDescription>Informações detalhadas do treino aeróbico</DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="text-sm font-medium">ID:</div>
                                  <div className="text-sm">{workout.id}</div>

                                  <div className="text-sm font-medium">Tipo:</div>
                                  <div className="text-sm">{workout.type}</div>

                                  <div className="text-sm font-medium">Intensidade:</div>
                                  <div className="text-sm">
                                    <Badge
                                      variant={
                                        workout.intensity === "Alta"
                                          ? "destructive"
                                          : workout.intensity === "Média"
                                            ? "default"
                                            : "secondary"
                                      }
                                      className="text-xs"
                                    >
                                      {workout.intensity}
                                    </Badge>
                                  </div>

                                  <div className="text-sm font-medium">Duração:</div>
                                  <div className="text-sm">{workout.duration}</div>

                                  <div className="text-sm font-medium">Criado em:</div>
                                  <div className="text-sm">{workout.createdAt}</div>

                                  <div className="text-sm font-medium">Dias da Semana:</div>
                                  <div className="text-sm flex flex-wrap gap-1">
                                    {workout.days.map((day, i) => (
                                      <Badge key={i} variant="outline" className="text-xs">
                                        {day}
                                      </Badge>
                                    ))}
                                  </div>

                                  <div className="text-sm font-medium">Objetivo:</div>
                                  <div className="text-sm">
                                    <Badge variant="secondary">{workout.goal}</Badge>
                                  </div>

                                  <div className="text-sm font-medium">Alunos:</div>
                                  <div className="text-sm">{workout.students}</div>
                                </div>
                              </div>
                              <DialogFooter>
                                <Button type="button" variant="outline">
                                  Fechar
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          <Button variant="ghost" size="icon" title="Ver Detalhes">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Exportar para Alunos">
                            <Users className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Exportar para Desafio">
                            <Trophy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Duplicar">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Excluir">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-end p-4">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Templates de Treino Aeróbico</CardTitle>
                <CardDescription>Total: 10 templates</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Activity className="mx-auto h-16 w-16 text-muted" />
                  <h3 className="mt-4 text-lg font-medium">Templates de Treino Aeróbico</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Visualize e gerencie seus templates de treino aeróbico reutilizáveis.
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
                <CardTitle className="text-base">Treinos Aeróbicos Atribuídos</CardTitle>
                <CardDescription>Total: 12 treinos atribuídos</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Heart className="mx-auto h-16 w-16 text-muted" />
                  <h3 className="mt-4 text-lg font-medium">Treinos Aeróbicos Atribuídos</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Visualize os treinos aeróbicos atribuídos aos seus alunos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
