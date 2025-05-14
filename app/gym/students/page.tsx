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
import { Download, Filter, MoreHorizontal, Plus, Search, SlidersHorizontal, Users } from "lucide-react"

export default function GymStudentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Alunos</h1>
        <p className="text-muted-foreground">Gerencie os alunos da sua academia</p>
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
              <DropdownMenuItem>Status de pagamento</DropdownMenuItem>
              <DropdownMenuItem>Plano</DropdownMenuItem>
              <DropdownMenuItem>Data de cadastro</DropdownMenuItem>
              <DropdownMenuItem>Frequência</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Ordenar</span>
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button variant="outline" size="sm" className="h-9">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
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
          <TabsTrigger value="pending">Pendentes</TabsTrigger>
          <TabsTrigger value="inactive">Inativos</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Todos os Alunos</CardTitle>
                <CardDescription>Total: 245 alunos</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Plano</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Frequência</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "001",
                      name: "Carlos Silva",
                      plan: "Mensal",
                      status: "Ativo",
                      dueDate: "15/06/2023",
                      frequency: "Alta",
                    },
                    {
                      id: "002",
                      name: "Ana Oliveira",
                      plan: "Trimestral",
                      status: "Ativo",
                      dueDate: "22/08/2023",
                      frequency: "Média",
                    },
                    {
                      id: "003",
                      name: "Pedro Santos",
                      plan: "Anual",
                      status: "Ativo",
                      dueDate: "10/01/2024",
                      frequency: "Alta",
                    },
                    {
                      id: "004",
                      name: "Juliana Lima",
                      plan: "Mensal",
                      status: "Pendente",
                      dueDate: "05/06/2023",
                      frequency: "Baixa",
                    },
                    {
                      id: "005",
                      name: "Roberto Alves",
                      plan: "Semestral",
                      status: "Ativo",
                      dueDate: "18/11/2023",
                      frequency: "Média",
                    },
                    {
                      id: "006",
                      name: "Fernanda Costa",
                      plan: "Mensal",
                      status: "Inativo",
                      dueDate: "30/05/2023",
                      frequency: "Nenhuma",
                    },
                    {
                      id: "007",
                      name: "Marcos Oliveira",
                      plan: "Trimestral",
                      status: "Ativo",
                      dueDate: "12/07/2023",
                      frequency: "Alta",
                    },
                    {
                      id: "008",
                      name: "Carla Santos",
                      plan: "Mensal",
                      status: "Pendente",
                      dueDate: "08/06/2023",
                      frequency: "Média",
                    },
                    {
                      id: "009",
                      name: "Rodrigo Lima",
                      plan: "Anual",
                      status: "Ativo",
                      dueDate: "25/02/2024",
                      frequency: "Alta",
                    },
                    {
                      id: "010",
                      name: "Beatriz Ferreira",
                      plan: "Mensal",
                      status: "Ativo",
                      dueDate: "20/06/2023",
                      frequency: "Baixa",
                    },
                  ].map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.id}</TableCell>
                      <TableCell>
                        <div className="font-medium">{student.name}</div>
                      </TableCell>
                      <TableCell>{student.plan}</TableCell>
                      <TableCell>
                        <div
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            student.status === "Ativo"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : student.status === "Pendente"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                          }`}
                        >
                          {student.status}
                        </div>
                      </TableCell>
                      <TableCell>{student.dueDate}</TableCell>
                      <TableCell>
                        <div
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            student.frequency === "Alta"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : student.frequency === "Média"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                : student.frequency === "Baixa"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                          }`}
                        >
                          {student.frequency}
                        </div>
                      </TableCell>
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
                            <DropdownMenuItem>Renovar Plano</DropdownMenuItem>
                            <DropdownMenuItem>Enviar Mensagem</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Desativar</DropdownMenuItem>
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
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Alunos Ativos</CardTitle>
                <CardDescription>Total: 198 alunos</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Users className="mx-auto h-16 w-16 text-muted" />
                  <h3 className="mt-4 text-lg font-medium">Alunos Ativos</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Visualize todos os alunos com status ativo.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Alunos Pendentes</CardTitle>
                <CardDescription>Total: 27 alunos</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Users className="mx-auto h-16 w-16 text-muted" />
                  <h3 className="mt-4 text-lg font-medium">Alunos Pendentes</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Visualize todos os alunos com pagamento pendente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="inactive" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Alunos Inativos</CardTitle>
                <CardDescription>Total: 20 alunos</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Users className="mx-auto h-16 w-16 text-muted" />
                  <h3 className="mt-4 text-lg font-medium">Alunos Inativos</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Visualize todos os alunos com status inativo.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
