import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  ArrowDown,
  ArrowUp,
  CreditCard,
  DollarSign,
  Download,
  Gift,
  Plus,
  QrCode,
  RefreshCw,
  Search,
  Wallet,
} from "lucide-react"

export default function ClientWalletPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Carteira</h1>
        <p className="text-muted-foreground">Gerencie seus pagamentos e saldo</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Disponível</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 250,00</div>
            <p className="text-xs text-muted-foreground">Atualizado em 15/05/2023</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pontos Acumulados</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">850</div>
            <p className="text-xs text-muted-foreground">Equivalente a R$ 85,00 em descontos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximo Pagamento</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 120,00</div>
            <p className="text-xs text-muted-foreground">Vencimento em 10/06/2023</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Economia Total</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 180,00</div>
            <p className="text-xs text-muted-foreground">Com descontos e promoções</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Button className="md:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Fundos
        </Button>
        <Button variant="outline" className="md:w-auto">
          <ArrowUp className="mr-2 h-4 w-4" />
          Transferir
        </Button>
        <Button variant="outline" className="md:w-auto">
          <QrCode className="mr-2 h-4 w-4" />
          Pagar com QR Code
        </Button>
        <Button variant="outline" className="md:w-auto">
          <Download className="mr-2 h-4 w-4" />
          Extrato
        </Button>
      </div>

      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Transações</TabsTrigger>
          <TabsTrigger value="payments">Pagamentos</TabsTrigger>
          <TabsTrigger value="rewards">Recompensas</TabsTrigger>
          <TabsTrigger value="methods">Métodos de Pagamento</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Histórico de Transações</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative w-60">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Buscar transações..." className="pl-8" />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filtrar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as transações</SelectItem>
                      <SelectItem value="in">Entradas</SelectItem>
                      <SelectItem value="out">Saídas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "TX123456",
                    date: "15/05/2023",
                    description: "Depósito via Pix",
                    amount: "R$ 200,00",
                    type: "in",
                  },
                  {
                    id: "TX123455",
                    date: "10/05/2023",
                    description: "Pagamento - Academia Fitness Center",
                    amount: "R$ 120,00",
                    type: "out",
                  },
                  {
                    id: "TX123454",
                    date: "05/05/2023",
                    description: "Reembolso - Aula cancelada",
                    amount: "R$ 50,00",
                    type: "in",
                  },
                  {
                    id: "TX123453",
                    date: "01/05/2023",
                    description: "Compra de Suplementos",
                    amount: "R$ 85,00",
                    type: "out",
                  },
                  {
                    id: "TX123452",
                    date: "25/04/2023",
                    description: "Bônus - Desafio concluído",
                    amount: "R$ 30,00",
                    type: "in",
                  },
                  {
                    id: "TX123451",
                    date: "20/04/2023",
                    description: "Sessão com Personal Trainer",
                    amount: "R$ 80,00",
                    type: "out",
                  },
                  {
                    id: "TX123450",
                    date: "15/04/2023",
                    description: "Depósito via Cartão",
                    amount: "R$ 300,00",
                    type: "in",
                  },
                  {
                    id: "TX123449",
                    date: "10/04/2023",
                    description: "Pagamento - Academia Fitness Center",
                    amount: "R$ 120,00",
                    type: "out",
                  },
                ].map((transaction, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === "in" ? "bg-green-100 dark:bg-green-900" : "bg-red-100 dark:bg-red-900"
                        }`}
                      >
                        {transaction.type === "in" ? (
                          <ArrowDown className="h-5 w-5 text-green-600 dark:text-green-400" />
                        ) : (
                          <ArrowUp className="h-5 w-5 text-red-600 dark:text-red-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {transaction.date} • {transaction.id}
                        </p>
                      </div>
                    </div>
                    <div className={`font-medium ${transaction.type === "in" ? "text-green-600" : "text-red-600"}`}>
                      {transaction.type === "in" ? "+" : "-"}
                      {transaction.amount}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver Todas as Transações
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pagamentos Programados</CardTitle>
              <CardDescription>Visualize e gerencie seus pagamentos futuros</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    description: "Mensalidade - Academia Fitness Center",
                    amount: "R$ 120,00",
                    dueDate: "10/06/2023",
                    status: "Pendente",
                    recurrence: "Mensal",
                  },
                  {
                    description: "Pacote de Sessões - Personal Trainer",
                    amount: "R$ 400,00",
                    dueDate: "15/06/2023",
                    status: "Pendente",
                    recurrence: "Trimestral",
                  },
                  {
                    description: "Consulta - Nutricionista",
                    amount: "R$ 150,00",
                    dueDate: "20/06/2023",
                    status: "Pendente",
                    recurrence: "Mensal",
                  },
                ].map((payment, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{payment.description}</p>
                      <p className="text-sm text-muted-foreground">
                        Vencimento: {payment.dueDate} • {payment.recurrence}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">{payment.status}</Badge>
                      <p className="font-medium">{payment.amount}</p>
                      <Button variant="outline" size="sm">
                        Pagar Agora
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pagamentos Recentes</CardTitle>
              <CardDescription>Histórico dos últimos pagamentos realizados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    description: "Mensalidade - Academia Fitness Center",
                    amount: "R$ 120,00",
                    date: "10/05/2023",
                    method: "Cartão de Crédito",
                    status: "Pago",
                  },
                  {
                    description: "Aula de Spinning",
                    amount: "R$ 50,00",
                    date: "05/05/2023",
                    method: "Saldo da Carteira",
                    status: "Pago",
                  },
                  {
                    description: "Consulta - Nutricionista",
                    amount: "R$ 150,00",
                    date: "20/04/2023",
                    method: "Pix",
                    status: "Pago",
                  },
                  {
                    description: "Mensalidade - Academia Fitness Center",
                    amount: "R$ 120,00",
                    date: "10/04/2023",
                    method: "Cartão de Crédito",
                    status: "Pago",
                  },
                ].map((payment, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{payment.description}</p>
                      <p className="text-sm text-muted-foreground">
                        {payment.date} • {payment.method}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-green-600">
                        {payment.status}
                      </Badge>
                      <p className="font-medium">{payment.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rewards" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Programa de Pontos</CardTitle>
              <CardDescription>Acumule pontos e troque por recompensas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold">850</div>
                    <div className="text-sm text-muted-foreground">pontos</div>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-medium">Seu Nível: Prata</h3>
                  <p className="text-sm text-muted-foreground">
                    Faltam 150 pontos para atingir o nível Ouro e desbloquear recompensas exclusivas.
                  </p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progresso para o próximo nível</span>
                      <span>850/1000</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Recompensas Disponíveis</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { name: "Desconto de 10% na mensalidade", points: 1000, type: "Desconto" },
                    { name: "1 Sessão com Personal Trainer", points: 800, type: "Serviço" },
                    { name: "Kit de Suplementos", points: 1500, type: "Produto" },
                    { name: "Avaliação Nutricional", points: 600, type: "Serviço" },
                    { name: "Camiseta Exclusiva", points: 500, type: "Produto" },
                    { name: "Aula Coletiva Grátis", points: 300, type: "Serviço" },
                  ].map((reward, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="font-medium">{reward.name}</div>
                        <div className="text-sm text-muted-foreground">{reward.type}</div>
                      </div>
                      <Button variant="outline" size="sm" disabled={reward.points > 850}>
                        {reward.points} pts
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Como Ganhar Pontos</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { action: "Check-in na academia", points: "5 pts/dia" },
                    { action: "Completar treino", points: "10 pts/treino" },
                    { action: "Participar de aula coletiva", points: "15 pts/aula" },
                    { action: "Completar desafio", points: "50-200 pts" },
                    { action: "Indicar amigo", points: "100 pts/indicação" },
                    { action: "Avaliação física mensal", points: "30 pts/avaliação" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 border rounded-lg">
                      <div className="font-medium">{item.action}</div>
                      <div className="text-sm text-primary">{item.points}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="methods" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Métodos de Pagamento</CardTitle>
              <CardDescription>Gerencie seus cartões e métodos de pagamento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-8 bg-muted rounded flex items-center justify-center">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Expira em 12/2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>Padrão</Badge>
                    <Button variant="ghost" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-8 bg-muted rounded flex items-center justify-center">
                      <Wallet className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Pix</p>
                      <p className="text-sm text-muted-foreground">maria@exemplo.com</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Editar
                  </Button>
                </div>
                <Button variant="outline" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Método de Pagamento
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Pagamento</CardTitle>
              <CardDescription>Gerencie suas preferências de pagamento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="default-method">Método de Pagamento Padrão</Label>
                <Select defaultValue="card">
                  <SelectTrigger id="default-method">
                    <SelectValue placeholder="Selecione um método" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="card">Cartão de Crédito (•••• 4242)</SelectItem>
                    <SelectItem value="pix">Pix</SelectItem>
                    <SelectItem value="wallet">Saldo da Carteira</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="auto-reload">Recarga Automática</Label>
                <Select defaultValue="disabled">
                  <SelectTrigger id="auto-reload">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="disabled">Desativado</SelectItem>
                    <SelectItem value="100">R$ 100 quando o saldo for menor que R$ 50</SelectItem>
                    <SelectItem value="200">R$ 200 quando o saldo for menor que R$ 100</SelectItem>
                    <SelectItem value="500">R$ 500 quando o saldo for menor que R$ 200</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Switch id="auto-pay" />
                  <Label htmlFor="auto-pay">Pagamento Automático</Label>
                </div>
                <p className="text-sm text-muted-foreground">Pagar automaticamente mensalidades e assinaturas</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Switch id="payment-notifications" defaultChecked />
                  <Label htmlFor="payment-notifications">Notificações de Pagamento</Label>
                </div>
                <p className="text-sm text-muted-foreground">Receber alertas sobre pagamentos e vencimentos</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Salvar Preferências</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
