import { TrendingUpIcon, DownloadIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PersonalFinancesPage() {
  // Dados simulados de transações
  const transactions = [
    {
      id: 1,
      student: "Carlos Silva",
      amount: 250,
      date: "05/05/2023",
      status: "paid",
      type: "Mensalidade",
    },
    {
      id: 2,
      student: "Mariana Costa",
      amount: 300,
      date: "03/05/2023",
      status: "paid",
      type: "Pacote de 10 sessões",
    },
    {
      id: 3,
      student: "Pedro Alves",
      amount: 150,
      date: "10/05/2023",
      status: "pending",
      type: "Avaliação + Plano",
    },
    {
      id: 4,
      student: "Juliana Mendes",
      amount: 200,
      date: "01/05/2023",
      status: "paid",
      type: "Mensalidade",
    },
    {
      id: 5,
      student: "Roberto Gomes",
      amount: 180,
      date: "12/05/2023",
      status: "pending",
      type: "Sessão avulsa",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Finanças</h1>
          <p className="text-muted-foreground">Gerencie seus ganhos e acompanhe pagamentos</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <Button>Exportar Relatório</Button>
          <Button variant="outline" asChild>
            <Link href="/personal/reports">Relatórios Detalhados</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Receita Total (Maio)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 3.450,00</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUpIcon className="h-4 w-4 mr-1 text-green-500" />
              +12% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pagamentos Pendentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 780,00</div>
            <p className="text-xs text-muted-foreground">3 pagamentos aguardando</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Valor Médio por Aluno</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 230,00</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUpIcon className="h-4 w-4 mr-1 text-green-500" />
              +5% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Previsão (Próximo Mês)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 3.800,00</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUpIcon className="h-4 w-4 mr-1 text-green-500" />
              +10% em relação ao mês atual
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
          <div>
            <CardTitle>Transações</CardTitle>
            <CardDescription>Histórico de pagamentos e recebimentos</CardDescription>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Select defaultValue="may">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione o mês" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="may">Maio 2023</SelectItem>
                <SelectItem value="april">Abril 2023</SelectItem>
                <SelectItem value="march">Março 2023</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <DownloadIcon className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="paid">Pagos</TabsTrigger>
              <TabsTrigger value="pending">Pendentes</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="rounded-md border">
                <div className="grid grid-cols-5 p-4 font-medium border-b">
                  <div>Aluno</div>
                  <div>Tipo</div>
                  <div>Data</div>
                  <div>Valor</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="grid grid-cols-5 p-4 items-center">
                      <div>{transaction.student}</div>
                      <div>{transaction.type}</div>
                      <div>{transaction.date}</div>
                      <div>R$ {transaction.amount.toFixed(2)}</div>
                      <div>
                        <Badge
                          variant={transaction.status === "paid" ? "default" : "outline"}
                          className={transaction.status === "paid" ? "bg-[#abd904] hover:bg-[#9bc304] text-black" : ""}
                        >
                          {transaction.status === "paid" ? "Pago" : "Pendente"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="paid">
              <div className="rounded-md border">
                <div className="grid grid-cols-5 p-4 font-medium border-b">
                  <div>Aluno</div>
                  <div>Tipo</div>
                  <div>Data</div>
                  <div>Valor</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {transactions
                    .filter((t) => t.status === "paid")
                    .map((transaction) => (
                      <div key={transaction.id} className="grid grid-cols-5 p-4 items-center">
                        <div>{transaction.student}</div>
                        <div>{transaction.type}</div>
                        <div>{transaction.date}</div>
                        <div>R$ {transaction.amount.toFixed(2)}</div>
                        <div>
                          <Badge className="bg-[#abd904] hover:bg-[#9bc304] text-black">Pago</Badge>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pending">
              <div className="rounded-md border">
                <div className="grid grid-cols-5 p-4 font-medium border-b">
                  <div>Aluno</div>
                  <div>Tipo</div>
                  <div>Data</div>
                  <div>Valor</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {transactions
                    .filter((t) => t.status === "pending")
                    .map((transaction) => (
                      <div key={transaction.id} className="grid grid-cols-5 p-4 items-center">
                        <div>{transaction.student}</div>
                        <div>{transaction.type}</div>
                        <div>{transaction.date}</div>
                        <div>R$ {transaction.amount.toFixed(2)}</div>
                        <div>
                          <Badge variant="outline">Pendente</Badge>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
