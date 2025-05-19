"use client"

import { useState } from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Calendar, CreditCard, Download, Eye, Filter, Receipt, Building2, Dumbbell, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Tipos
interface Invoice {
  id: string
  professionalType: "gym" | "personal" | "nutritionist"
  professionalName: string
  service: string
  amount: number
  dueDate: Date
  status: "pending" | "overdue" | "paid"
  invoiceNumber: string
  issuedDate: Date
  description: string
}

// Dados de exemplo
const invoices: Invoice[] = [
  {
    id: "1",
    professionalType: "gym",
    professionalName: "Academia Fitness Plus",
    service: "Mensalidade - Plano Premium",
    amount: 129.9,
    dueDate: new Date(2025, 4, 25),
    status: "pending",
    invoiceNumber: "INV-2025-0542",
    issuedDate: new Date(2025, 4, 15),
    description: "Mensalidade referente ao plano Premium com acesso ilimitado a todas as unidades e aulas coletivas.",
  },
  {
    id: "2",
    professionalType: "personal",
    professionalName: "Carlos Oliveira",
    service: "Pacote de 10 sessões",
    amount: 850.0,
    dueDate: new Date(2025, 4, 20),
    status: "overdue",
    invoiceNumber: "INV-2025-0123",
    issuedDate: new Date(2025, 4, 10),
    description: "Pacote de 10 sessões de treinamento personalizado com duração de 1 hora cada.",
  },
  {
    id: "3",
    professionalType: "nutritionist",
    professionalName: "Dra. Amanda Santos",
    service: "Consulta e Plano Alimentar",
    amount: 350.0,
    dueDate: new Date(2025, 4, 30),
    status: "pending",
    invoiceNumber: "INV-2025-0789",
    issuedDate: new Date(2025, 4, 18),
    description: "Consulta de acompanhamento e atualização do plano alimentar mensal.",
  },
  {
    id: "4",
    professionalType: "gym",
    professionalName: "Academia Fitness Plus",
    service: "Taxa de matrícula",
    amount: 99.9,
    dueDate: new Date(2025, 4, 15),
    status: "overdue",
    invoiceNumber: "INV-2025-0541",
    issuedDate: new Date(2025, 4, 5),
    description: "Taxa de matrícula para novos membros do plano Premium.",
  },
  {
    id: "5",
    professionalType: "personal",
    professionalName: "Carlos Oliveira",
    service: "Avaliação física",
    amount: 150.0,
    dueDate: new Date(2025, 5, 5),
    status: "pending",
    invoiceNumber: "INV-2025-0124",
    issuedDate: new Date(2025, 4, 25),
    description: "Avaliação física completa incluindo análise de composição corporal e testes de condicionamento.",
  },
  {
    id: "6",
    professionalType: "nutritionist",
    professionalName: "Dra. Amanda Santos",
    service: "Exames nutricionais",
    amount: 280.0,
    dueDate: new Date(2025, 5, 10),
    status: "pending",
    invoiceNumber: "INV-2025-0790",
    issuedDate: new Date(2025, 4, 28),
    description: "Pacote de exames nutricionais para análise de deficiências e intolerâncias alimentares.",
  },
]

// Componente principal
export default function InvoicesPage() {
  const [filter, setFilter] = useState<string>("all")
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null)
  const [paymentDialog, setPaymentDialog] = useState(false)

  // Filtrar faturas
  const filteredInvoices =
    filter === "all" ? invoices : invoices.filter((invoice) => invoice.professionalType === filter)

  // Agrupar por status
  const pendingInvoices = filteredInvoices.filter((invoice) => invoice.status === "pending")
  const overdueInvoices = filteredInvoices.filter((invoice) => invoice.status === "overdue")

  // Função para obter ícone do profissional
  const getProfessionalIcon = (type: string) => {
    switch (type) {
      case "gym":
        return <Building2 className="h-4 w-4 mr-1" />
      case "personal":
        return <Dumbbell className="h-4 w-4 mr-1" />
      case "nutritionist":
        return <Utensils className="h-4 w-4 mr-1" />
      default:
        return null
    }
  }

  // Função para obter nome do tipo de profissional
  const getProfessionalTypeName = (type: string) => {
    switch (type) {
      case "gym":
        return "Academia"
      case "personal":
        return "Personal Trainer"
      case "nutritionist":
        return "Nutricionista"
      default:
        return type
    }
  }

  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Faturas</h2>
        <p className="text-muted-foreground">Gerencie suas faturas pendentes e histórico de pagamentos.</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os profissionais</SelectItem>
              <SelectItem value="gym">Academia</SelectItem>
              <SelectItem value="personal">Personal Trainer</SelectItem>
              <SelectItem value="nutritionist">Nutricionista</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Exportar
        </Button>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pending">Pendentes ({pendingInvoices.length})</TabsTrigger>
          <TabsTrigger value="overdue">Atrasadas ({overdueInvoices.length})</TabsTrigger>
        </TabsList>

        {/* Faturas pendentes */}
        <TabsContent value="pending" className="space-y-4">
          {pendingInvoices.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Receipt className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center">Não há faturas pendentes no momento.</p>
              </CardContent>
            </Card>
          ) : (
            pendingInvoices.map((invoice) => (
              <Card key={invoice.id} className="overflow-hidden">
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {getProfessionalIcon(invoice.professionalType)}
                      <CardTitle className="text-lg">{invoice.professionalName}</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                      Pendente
                    </Badge>
                  </div>
                  <CardDescription>{invoice.service}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      Vencimento: {format(invoice.dueDate, "dd 'de' MMMM", { locale: ptBR })}
                    </div>
                    <div className="font-semibold">R$ {invoice.amount.toFixed(2).replace(".", ",")}</div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-4 pt-0 border-t">
                  <Button variant="ghost" size="sm" onClick={() => setSelectedInvoice(invoice)}>
                    <Eye className="h-4 w-4 mr-2" />
                    Detalhes
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => {
                      setSelectedInvoice(invoice)
                      setPaymentDialog(true)
                    }}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pagar
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </TabsContent>

        {/* Faturas atrasadas */}
        <TabsContent value="overdue" className="space-y-4">
          {overdueInvoices.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Receipt className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center">Não há faturas atrasadas no momento.</p>
              </CardContent>
            </Card>
          ) : (
            overdueInvoices.map((invoice) => (
              <Card key={invoice.id} className="overflow-hidden border-red-200">
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {getProfessionalIcon(invoice.professionalType)}
                      <CardTitle className="text-lg">{invoice.professionalName}</CardTitle>
                    </div>
                    <Badge variant="destructive">Atrasada</Badge>
                  </div>
                  <CardDescription>{invoice.service}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center text-sm text-red-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      Vencimento: {format(invoice.dueDate, "dd 'de' MMMM", { locale: ptBR })}
                    </div>
                    <div className="font-semibold">R$ {invoice.amount.toFixed(2).replace(".", ",")}</div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-4 pt-0 border-t">
                  <Button variant="ghost" size="sm" onClick={() => setSelectedInvoice(invoice)}>
                    <Eye className="h-4 w-4 mr-2" />
                    Detalhes
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => {
                      setSelectedInvoice(invoice)
                      setPaymentDialog(true)
                    }}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pagar agora
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>

      {/* Modal de detalhes da fatura */}
      {selectedInvoice && (
        <Dialog open={!!selectedInvoice && !paymentDialog} onOpenChange={(open) => !open && setSelectedInvoice(null)}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Detalhes da Fatura</DialogTitle>
              <DialogDescription>{selectedInvoice.invoiceNumber}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="font-medium">Profissional:</div>
                <div className="flex items-center">
                  {getProfessionalIcon(selectedInvoice.professionalType)}
                  <span>{selectedInvoice.professionalName}</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="font-medium">Tipo:</div>
                <div>{getProfessionalTypeName(selectedInvoice.professionalType)}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-medium">Serviço:</div>
                <div>{selectedInvoice.service}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-medium">Valor:</div>
                <div className="font-semibold">R$ {selectedInvoice.amount.toFixed(2).replace(".", ",")}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-medium">Data de emissão:</div>
                <div>{format(selectedInvoice.issuedDate, "dd/MM/yyyy")}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-medium">Data de vencimento:</div>
                <div className={selectedInvoice.status === "overdue" ? "text-red-500" : ""}>
                  {format(selectedInvoice.dueDate, "dd/MM/yyyy")}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="font-medium">Status:</div>
                <Badge
                  variant={selectedInvoice.status === "overdue" ? "destructive" : "outline"}
                  className={
                    selectedInvoice.status === "pending" ? "bg-yellow-50 text-yellow-700 border-yellow-200" : ""
                  }
                >
                  {selectedInvoice.status === "pending" ? "Pendente" : "Atrasada"}
                </Badge>
              </div>
              <Separator />
              <div>
                <div className="font-medium mb-2">Descrição:</div>
                <div className="text-sm text-muted-foreground">{selectedInvoice.description}</div>
              </div>
            </div>
            <DialogFooter className="flex justify-between sm:justify-between">
              <Button variant="outline" onClick={() => setSelectedInvoice(null)}>
                Fechar
              </Button>
              <Button onClick={() => setPaymentDialog(true)}>
                <CreditCard className="h-4 w-4 mr-2" />
                Pagar fatura
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Modal de pagamento */}
      {selectedInvoice && (
        <Dialog open={paymentDialog} onOpenChange={(open) => !open && setPaymentDialog(false)}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Pagar Fatura</DialogTitle>
              <DialogDescription>
                {selectedInvoice.invoiceNumber} - {selectedInvoice.professionalName}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex justify-between font-medium">
                <span>Valor total:</span>
                <span>R$ {selectedInvoice.amount.toFixed(2).replace(".", ",")}</span>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Número do cartão</Label>
                  <Input id="card-number" placeholder="0000 0000 0000 0000" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Validade</Label>
                    <Input id="expiry" placeholder="MM/AA" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Nome no cartão</Label>
                  <Input id="name" placeholder="Nome completo" />
                </div>
              </div>
            </div>
            <DialogFooter className="flex justify-between sm:justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  setPaymentDialog(false)
                  setSelectedInvoice(null)
                }}
              >
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  setPaymentDialog(false)
                  setSelectedInvoice(null)
                }}
              >
                Pagar R$ {selectedInvoice.amount.toFixed(2).replace(".", ",")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
