"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MealPlanCard } from "@/components/nutritionist/cards/meal-plan-card"
import { AddMealModal } from "@/components/nutritionist/modals/add-meal-modal"
import { StatsCard } from "@/components/common/stats-card"
import { Search, ChefHat, Users, Calendar, TrendingUp } from "lucide-react"

const mockMealPlans = [
  {
    id: "1",
    name: "Plano Emagrecimento Básico",
    description: "Plano focado em déficit calórico moderado",
    duration: "4 semanas",
    calories: 1500,
    patients: 12,
    type: "weight-loss" as const,
    createdAt: "15/01/2024",
  },
  {
    id: "2",
    name: "Ganho de Massa Muscular",
    description: "Plano hipercalórico para hipertrofia",
    duration: "8 semanas",
    calories: 2800,
    patients: 8,
    type: "weight-gain" as const,
    createdAt: "20/01/2024",
  },
  {
    id: "3",
    name: "Manutenção Atlética",
    description: "Plano balanceado para atletas",
    duration: "12 semanas",
    calories: 2200,
    patients: 5,
    type: "sports" as const,
    createdAt: "10/01/2024",
  },
]

export default function MealPlansPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredPlans = mockMealPlans.filter((plan) => {
    const matchesSearch =
      plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.description.toLowerCase().includes(searchTerm.toLowerCase())

    if (activeTab === "all") return matchesSearch
    return matchesSearch && plan.type === activeTab
  })

  const totalPlans = mockMealPlans.length
  const totalPatients = mockMealPlans.reduce((acc, plan) => acc + plan.patients, 0)
  const averageCalories = Math.round(mockMealPlans.reduce((acc, plan) => acc + plan.calories, 0) / totalPlans)

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Planos Alimentares</h2>
        <div className="flex items-center space-x-2">
          <AddMealModal onAddMeal={(meal) => console.log("Nova refeição:", meal)} />
          <Button>
            <ChefHat className="mr-2 h-4 w-4" />
            Novo Plano
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Total de Planos" value={totalPlans} icon={ChefHat} trend={{ value: 15, isPositive: true }} />
        <StatsCard title="Pacientes Ativos" value={totalPatients} icon={Users} trend={{ value: 8, isPositive: true }} />
        <StatsCard title="Média de Calorias" value={`${averageCalories} kcal`} icon={TrendingUp} />
        <StatsCard title="Novos este Mês" value={5} icon={Calendar} trend={{ value: 25, isPositive: true }} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Planos</CardTitle>
          <CardDescription>Crie e gerencie planos alimentares personalizados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar planos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="weight-loss">Emagrecimento</TabsTrigger>
              <TabsTrigger value="weight-gain">Ganho de Peso</TabsTrigger>
              <TabsTrigger value="maintenance">Manutenção</TabsTrigger>
              <TabsTrigger value="sports">Esportivo</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredPlans.map((plan) => (
                  <MealPlanCard
                    key={plan.id}
                    mealPlan={plan}
                    onEdit={(plan) => console.log("Editar plano:", plan)}
                    onView={(plan) => console.log("Ver plano:", plan)}
                    onDuplicate={(plan) => console.log("Duplicar plano:", plan)}
                  />
                ))}
              </div>

              {filteredPlans.length === 0 && (
                <div className="text-center py-8">
                  <ChefHat className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-2 text-sm font-semibold text-muted-foreground">Nenhum plano encontrado</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Tente ajustar os filtros ou criar um novo plano.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
