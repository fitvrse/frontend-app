"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Package, Plus, Edit, Trash2, DollarSign, Clock } from "lucide-react"

export default function PersonalStorePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Loja</h1>
        <p className="text-muted-foreground">Gerencie sua loja e produtos/serviços</p>
      </div>

      <Tabs defaultValue="store" className="space-y-4">
        <TabsList>
          <TabsTrigger value="store" className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            Detalhes da Loja
          </TabsTrigger>
          <TabsTrigger value="products" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            Produtos/Serviços
          </TabsTrigger>
        </TabsList>

        <TabsContent value="store" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Loja</CardTitle>
              <CardDescription>Configure os detalhes da sua loja online</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="store-name">Nome da Loja</Label>
                  <Input id="store-name" placeholder="Nome da sua loja" defaultValue="Fitness Pro Shop" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-url">URL da Loja</Label>
                  <Input id="store-url" placeholder="url-da-loja" defaultValue="fitness-pro-shop" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="store-description">Descrição</Label>
                <Textarea
                  id="store-description"
                  placeholder="Descreva sua loja"
                  defaultValue="Produtos e serviços de alta qualidade para seus objetivos fitness. Suplementos, acessórios e planos de treinamento personalizados."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="store-email">Email de Contato</Label>
                  <Input
                    id="store-email"
                    type="email"
                    placeholder="email@exemplo.com"
                    defaultValue="contato@fitnesspro.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-phone">Telefone de Contato</Label>
                  <Input id="store-phone" placeholder="(00) 00000-0000" defaultValue="(11) 99999-8888" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="store-active" defaultChecked />
                <Label htmlFor="store-active">Loja ativa</Label>
              </div>

              <Button>Salvar Alterações</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configurações de Pagamento</CardTitle>
              <CardDescription>Configure as opções de pagamento da sua loja</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Métodos de Pagamento Aceitos</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="payment-credit" defaultChecked />
                    <Label htmlFor="payment-credit">Cartão de Crédito</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="payment-debit" defaultChecked />
                    <Label htmlFor="payment-debit">Cartão de Débito</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="payment-pix" defaultChecked />
                    <Label htmlFor="payment-pix">Pix</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="payment-boleto" />
                    <Label htmlFor="payment-boleto">Boleto</Label>
                  </div>
                </div>
              </div>

              <Button>Salvar Configurações</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Produtos e Serviços</h2>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Produto/Serviço
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                id: "P001",
                name: "Consulta de Avaliação Física",
                type: "Serviço",
                price: 150.0,
                duration: "60 min",
                description: "Avaliação física completa incluindo medidas antropométricas e testes de aptidão.",
              },
              {
                id: "P002",
                name: "Pacote de Treinos Personalizados",
                type: "Serviço",
                price: 300.0,
                duration: "1 mês",
                description: "Plano de treino personalizado com acompanhamento semanal.",
              },
              {
                id: "P003",
                name: "Whey Protein Premium",
                type: "Produto",
                price: 120.0,
                description: "Suplemento proteico de alta qualidade, embalagem com 900g.",
              },
              {
                id: "P004",
                name: "Kit de Elásticos de Resistência",
                type: "Produto",
                price: 85.0,
                description: "Conjunto com 5 elásticos de diferentes resistências para treino em casa.",
              },
              {
                id: "P005",
                name: "Consultoria Nutricional",
                type: "Serviço",
                price: 180.0,
                duration: "45 min",
                description: "Consultoria nutricional personalizada com plano alimentar.",
              },
              {
                id: "P006",
                name: "Luvas de Treino",
                type: "Produto",
                price: 45.0,
                description: "Luvas de alta qualidade para proteção das mãos durante o treino.",
              },
            ].map((product) => (
              <Card key={product.id}>
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">{product.name}</CardTitle>
                      <CardDescription>
                        <Badge variant={product.type === "Serviço" ? "default" : "secondary"} className="mt-1">
                          {product.type}
                        </Badge>
                      </CardDescription>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="font-medium">R$ {product.price.toFixed(2)}</span>
                    </div>
                    {product.duration && (
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm">{product.duration}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
