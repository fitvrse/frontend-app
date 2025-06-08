"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Clock, ChefHat } from "lucide-react"

interface MealPlan {
  id: string
  name: string
  description: string
  duration: string
  calories: number
  patients: number
  type: "weight-loss" | "weight-gain" | "maintenance" | "sports"
  createdAt: string
}

interface MealPlanCardProps {
  mealPlan: MealPlan
  onEdit?: (mealPlan: MealPlan) => void
  onView?: (mealPlan: MealPlan) => void
  onDuplicate?: (mealPlan: MealPlan) => void
}

export function MealPlanCard({ mealPlan, onEdit, onView, onDuplicate }: MealPlanCardProps) {
  const getTypeLabel = (type: string) => {
    const labels = {
      "weight-loss": "Emagrecimento",
      "weight-gain": "Ganho de Peso",
      maintenance: "Manutenção",
      sports: "Esportivo",
    }
    return labels[type as keyof typeof labels] || type
  }

  const getTypeColor = (type: string) => {
    const colors = {
      "weight-loss": "destructive",
      "weight-gain": "default",
      maintenance: "secondary",
      sports: "outline",
    }
    return colors[type as keyof typeof colors] || "secondary"
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{mealPlan.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{mealPlan.description}</p>
          </div>
          <Badge variant={getTypeColor(mealPlan.type) as any}>{getTypeLabel(mealPlan.type)}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <ChefHat className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{mealPlan.calories} kcal/dia</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{mealPlan.duration}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{mealPlan.patients} pacientes</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{mealPlan.createdAt}</span>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" onClick={() => onView?.(mealPlan)}>
              Visualizar
            </Button>
            <Button variant="outline" size="sm" onClick={() => onEdit?.(mealPlan)}>
              Editar
            </Button>
            <Button variant="outline" size="sm" onClick={() => onDuplicate?.(mealPlan)}>
              Duplicar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
