import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { RecentSales } from "@/components/recent-sales"
import { Search } from "@/components/search"
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

const FinancesPage = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold">Finanças</h1>
        <Search />
      </div>

      <Overview />

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

      {/* Ações */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <Button>Exportar Relatório</Button>
        <Button variant="outline" asChild>
          <Link href="/nutritionist/reports">Relatórios Detalhados</Link>
        </Button>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Vendas Recentes</h2>
        <RecentSales />
      </div>
    </div>
  )
}

export default FinancesPage
