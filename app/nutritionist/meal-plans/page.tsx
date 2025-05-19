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
  Apple,
  Copy,
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

export default function NutritionistMealPlansPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Planos Alimentares</h1>
        <p className="text-muted-foreground">Crie e gerencie planos alimentares para seus pacientes</p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar planos alimentares..." className="pl-8 w-full md:w-80" />
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
              <DropdownMenuItem>Tipo de dieta</DropdownMenuItem>
              <DropdownMenuItem>Objetivo</DropdownMenuItem>
              <DropdownMenuItem>Calorias</DropdownMenuItem>
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
            Criar Plano
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todos os Planos</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="assigned">Atribuídos</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Todos os Planos Alimentares</CardTitle>
                <CardDescription>Total: 18 planos</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Objetivo</TableHead>
                    <TableHead>Calorias</TableHead>
                    <TableHead>Pacientes</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "D001",
                      name: "Low Carb - Emagrecimento",
                      type: "Low Carb",
                      goal: "Emagrecimento",
                      calories: "1800 kcal",
                      patients: 8,
                    },
                    {
                      id: "D002",
                      name: "Hiperproteico - Ganho Muscular",
                      type: "Hiperproteico",
                      goal: "Ganho Muscular",
                      calories: "2500 kcal",
                      patients: 6,
                    },
                    {
                      id: "D003",
                      name: "Detox - Desintoxicação",
                      type: "Detox",
                      goal: "Desintoxicação",
                      calories: "1500 kcal",
                      patients: 5,
                    },
                    {
                      id: "D004",
                      name: "Mediterrâneo - Saúde Geral",
                      type: "Mediterrâneo",
                      goal: "Saúde Geral",
                      calories: "2000 kcal",
                      patients: 4,
                    },
                    {
                      id: "D005",
                      name: "Cetogênica - Emagrecimento",
                      type: "Cetogênica",
                      goal: "Emagrecimento",
                      calories: "1700 kcal",
                      patients: 3,
                    },
                    {
                      id: "D006",
                      name: "DASH - Controle de Pressão",
                      type: "DASH",
                      goal: "Controle de Pressão",
                      calories: "1900 kcal",
                      patients: 2,
                    },
                    {
                      id: "D007",
                      name: "Vegetariana - Saúde Geral",
                      type: "Vegetariana",
                      goal: "Saúde Geral",
                      calories: "1800 kcal",
                      patients: 4,
                    },
                    {
                      id: "D008",
                      name: "Vegana - Ética e Saúde",
                      type: "Vegana",
                      goal: "Ética e Saúde",
                      calories: "1700 kcal",
                      patients: 3,
                    },
                    {
                      id: "D009",
                      name: "Paleo - Emagrecimento",
                      type: "Paleo",
                      goal: "Emagrecimento",
                      calories: "1900 kcal",
                      patients: 2,
                    },
                    {
                      id: "D010",
                      name: "Sem Glúten - Intolerância",
                      type: "Sem Glúten",
                      goal: "Intolerância",
                      calories: "1800 kcal",
                      patients: 1,
                    },
                  ].map((plan) => (
                    <TableRow key={plan.id}>
                      <TableCell className="font-medium">{plan.id}</TableCell>
                      <TableCell>
                        <div className="font-medium">{plan.name}</div>
                      </TableCell>
                      <TableCell>{plan.type}</TableCell>
                      <TableCell>{plan.goal}</TableCell>
                      <TableCell>{plan.calories}</TableCell>
                      <TableCell>{plan.patients}</TableCell>
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
                <CardTitle className="text-base">Templates de Planos</CardTitle>
                <CardDescription>Total: 12 templates</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Apple className="mx-auto h-16 w-16 text-muted" />
                  <h3 className="mt-4 text-lg font-medium">Templates de Planos</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Visualize e gerencie seus templates de planos alimentares reutilizáveis.
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
                <CardTitle className="text-base">Planos Atribuídos</CardTitle>
                <CardDescription>Total: 15 planos atribuídos</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Users className="mx-auto h-16 w-16 text-muted" />
                  <h3 className="mt-4 text-lg font-medium">Planos Atribuídos</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Visualize os planos alimentares atribuídos aos seus pacientes.
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
