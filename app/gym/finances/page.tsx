import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  BarChart3,
  Calendar,
  Download,
  DollarSign,
  Filter,
  LineChart,
  PieChart,
  Plus,
  Search,
  SlidersHorizontal,
  TrendingDown,
  TrendingUp,
} from "lucide-react"

export default function GymFinancesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Financeiro</h1>
        <p className="text-muted-foreground">Gerencie as finanças da sua academia</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Mensal</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 42.500</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+8%</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Despesas Mensais</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 28.350</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
              <span className="text-red-500">+5%</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lucro Líquido</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 14.150</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+12%</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inadimplência</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 3.850</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingDown className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">-3%</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar transações..." className="pl-8 w-full md:w-80" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filtrar</span>
          </Button>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Ordenar</span>
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Select defaultValue="may">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione o mês" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jan">Janeiro 2023</SelectItem>
              <SelectItem value="feb">Fevereiro 2023</SelectItem>
              <SelectItem value="mar">Março 2023</SelectItem>
              <SelectItem value="apr">Abril 2023</SelectItem>
              <SelectItem value="may">Maio 2023</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="h-9">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button size="sm" className="h-9">
            <Plus className="mr-2 h-4 w-4" />
            Nova Transação
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="income">Receitas</TabsTrigger>
          <TabsTrigger value="expenses">Despesas</TabsTrigger>
          <TabsTrigger value="payments">Mensalidades</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Fluxo de Caixa</CardTitle>
                <CardDescription>Receitas vs Despesas (últimos 6 meses)</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-muted" />
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Distribuição de Receitas</CardTitle>
                <CardDescription>Por tipo de plano</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <PieChart className="h-16 w-16 text-muted" />
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Transações Recentes</CardTitle>
              <CardDescription>Últimas 10 transações</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Método</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      date: "15/05/2023",
                      description: "Mensalidade - Carlos Silva",
                      category: "Receita",
                      method: "Cartão de Crédito",
                      amount: "R$ 120,00",
                      type: "income",
                    },
                    {
                      date: "14/05/2023",
                      description: "Pagamento de Água",
                      category: "Despesa",
                      method: "Débito Automático",
                      amount: "R$ 450,00",
                      type: "expense",
                    },
                    {
                      date: "13/05/2023",
                      description: "Mensalidade - Ana Oliveira",
                      category: "Receita",
                      method: "Pix",
                      amount: "R$ 150,00",
                      type: "income",
                    },
                    {
                      date: "12/05/2023",
                      description: "Manutenção de Equipamentos",
                      category: "Despesa",
                      method: "Transferência",
                      amount: "R$ 850,00",
                      type: "expense",
                    },
                    {
                      date: "11/05/2023",
                      description: "Mensalidade - Pedro Santos",
                      category: "Receita",
                      method: "Boleto",
                      amount: "R$ 120,00",
                      type: "income",
                    },
                    {
                      date: "10/05/2023",
                      description: "Pagamento de Energia",
                      category: "Despesa",
                      method: "Débito Automático",
                      amount: "R$ 1.200,00",
                      type: "expense",
                    },
                    {
                      date: "09/05/2023",
                      description: "Mensalidade - Juliana Lima",
                      category: "Receita",
                      method: "Cartão de Crédito",
                      amount: "R$ 120,00",
                      type: "income",
                    },
                    {
                      date: "08/05/2023",
                      description: "Salários - Funcionários",
                      category: "Despesa",
                      method: "Transferência",
                      amount: "R$ 15.000,00",
                      type: "expense",
                    },
                    {
                      date: "07/05/2023",
                      description: "Mensalidade - Roberto Alves",
                      category: "Receita",
                      method: "Pix",
                      amount: "R$ 180,00",
                      type: "income",
                    },
                    {
                      date: "06/05/2023",
                      description: "Compra de Suplementos",
                      category: "Despesa",
                      method: "Cartão de Crédito",
                      amount: "R$ 2.500,00",
                      type: "expense",
                    },
                  ].map((transaction, i) => (
                    <TableRow key={i}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{transaction.category}</TableCell>
                      <TableCell>{transaction.method}</TableCell>
                      <TableCell className="text-right">
                        <span
                          className={
                            transaction.type === "income" ? "text-green-500 font-medium" : "text-red-500 font-medium"
                          }
                        >
                          {transaction.type === "income" ? "+" : "-"}
                          {transaction.amount}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="income" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Receitas</CardTitle>
              <CardDescription>Análise de receitas por categoria</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Mensalidades</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ 36.500</div>
                      <p className="text-xs text-muted-foreground">85% da receita total</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Matrículas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ 2.800</div>
                      <p className="text-xs text-muted-foreground">7% da receita total</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Aulas Extras</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ 1.950</div>
                      <p className="text-xs text-muted-foreground">5% da receita total</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Produtos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ 1.250</div>
                      <p className="text-xs text-muted-foreground">3% da receita total</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Despesas</CardTitle>
              <CardDescription>Análise de despesas por categoria</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Pessoal</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ 15.000</div>
                      <p className="text-xs text-muted-foreground">53% das despesas</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Aluguel</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ 5.500</div>
                      <p className="text-xs text-muted-foreground">19% das despesas</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Utilidades</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ 3.850</div>
                      <p className="text-xs text-muted-foreground">14% das despesas</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Manutenção</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ 4.000</div>
                      <p className="text-xs text-muted-foreground">14% das despesas</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Mensalidades</CardTitle>
                  <CardDescription>Status de pagamento dos alunos</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Maio 2023
                  </Button>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Registrar Pagamento
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Pagas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">198</div>
                      <p className="text-xs text-muted-foreground">81% dos alunos</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Pendentes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">27</div>
                      <p className="text-xs text-muted-foreground">11% dos alunos</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Atrasadas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">20</div>
                      <p className="text-xs text-muted-foreground">8% dos alunos</p>
                    </CardContent>
                  </Card>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Aluno</TableHead>
                      <TableHead>Plano</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Vencimento</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Método</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: "Carlos Silva",
                        plan: "Mensal",
                        amount: "R$ 120,00",
                        dueDate: "15/05/2023",
                        status: "Pago",
                        method: "Cartão de Crédito",
                      },
                      {
                        name: "Ana Oliveira",
                        plan: "Trimestral",
                        amount: "R$ 150,00",
                        dueDate: "13/05/2023",
                        status: "Pago",
                        method: "Pix",
                      },
                      {
                        name: "Pedro Santos",
                        plan: "Anual",
                        amount: "R$ 120,00",
                        dueDate: "11/05/2023",
                        status: "Pago",
                        method: "Boleto",
                      },
                      {
                        name: "Juliana Lima",
                        plan: "Mensal",
                        amount: "R$ 120,00",
                        dueDate: "05/06/2023",
                        status: "Pendente",
                        method: "Aguardando",
                      },
                      {
                        name: "Roberto Alves",
                        plan: "Semestral",
                        amount: "R$ 180,00",
                        dueDate: "07/05/2023",
                        status: "Pago",
                        method: "Pix",
                      },
                      {
                        name: "Fernanda Costa",
                        plan: "Mensal",
                        amount: "R$ 120,00",
                        dueDate: "30/04/2023",
                        status: "Atrasado",
                        method: "Aguardando",
                      },
                      {
                        name: "Marcos Oliveira",
                        plan: "Trimestral",
                        amount: "R$ 150,00",
                        dueDate: "12/05/2023",
                        status: "Pago",
                        method: "Cartão de Crédito",
                      },
                      {
                        name: "Carla Santos",
                        plan: "Mensal",
                        amount: "R$ 120,00",
                        dueDate: "08/06/2023",
                        status: "Pendente",
                        method: "Aguardando",
                      },
                      {
                        name: "Rodrigo Lima",
                        plan: "Anual",
                        amount: "R$ 120,00",
                        dueDate: "25/04/2023",
                        status: "Atrasado",
                        method: "Aguardando",
                      },
                      {
                        name: "Beatriz Ferreira",
                        plan: "Mensal",
                        amount: "R$ 120,00",
                        dueDate: "20/05/2023",
                        status: "Pago",
                        method: "Cartão de Crédito",
                      },
                    ].map((payment, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{payment.name}</TableCell>
                        <TableCell>{payment.plan}</TableCell>
                        <TableCell>{payment.amount}</TableCell>
                        <TableCell>{payment.dueDate}</TableCell>
                        <TableCell>
                          <div
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              payment.status === "Pago"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : payment.status === "Pendente"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                            }`}
                          >
                            {payment.status}
                          </div>
                        </TableCell>
                        <TableCell>{payment.method}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
