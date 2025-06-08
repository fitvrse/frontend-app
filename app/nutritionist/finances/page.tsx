import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const data = [
  {
    id: "728ed52f",
    date: "2023-09-21",
    customer: "Lula Balistreri",
    amount: "$79.69",
    status: "pending",
  },
  {
    id: "404094a3",
    date: "2023-09-14",
    customer: "Katrina Crona",
    amount: "$67.95",
    status: "delivered",
  },
  {
    id: "0b369ca5",
    date: "2023-09-14",
    customer: "Adrienne Jast",
    amount: "$93.22",
    status: "delivered",
  },
]

export default function FinancesPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold">Finanças</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">Visão Geral</h3>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
          <p className="text-gray-500">Gráfico de Overview</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Receita Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$23,456</div>
            <p className="text-sm text-muted-foreground">Comparado com $21,500 no mês passado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Despesas Totais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,789</div>
            <p className="text-sm text-muted-foreground">Comparado com $11,200 no mês passado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lucro Líquido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$10,667</div>
            <p className="text-sm text-muted-foreground">Comparado com $10,300 no mês passado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Novos Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-sm text-muted-foreground">Comparado com 38 no mês passado</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <Button>Exportar Relatório</Button>
        <Button variant="outline" asChild>
          <Link href="/nutritionist/reports">Relatórios Detalhados</Link>
        </Button>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Vendas Recentes</h2>
        <div className="space-y-8">
          {data.map((sale) => (
            <div key={sale.id} className="flex items-center p-4 bg-white rounded-lg shadow">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">
                  {sale.customer
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{sale.customer}</p>
                <p className="text-sm text-gray-500">{sale.date}</p>
              </div>
              <div className="ml-auto font-medium">
                <span className="text-sm">{sale.amount}</span>
                <div className={`text-xs ${sale.status === "delivered" ? "text-green-600" : "text-yellow-600"}`}>
                  {sale.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
