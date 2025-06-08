"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Dumbbell } from "lucide-react"

interface WorkoutCardProps {
  title: string
  description: string
  duration: string
  exercises: number
  difficulty: "Iniciante" | "Intermediário" | "Avan��ado"
  students?: number
  onEdit?: () => void
  onDelete?: () => void
  onView?: () => void
}

export function WorkoutCard({
  title,
  description,
  duration,
  exercises,
  difficulty,
  students,
  onEdit,
  onDelete,
  onView,
}: WorkoutCardProps) {
  const difficultyColors = {
    Iniciante: "bg-green-100 text-green-800",
    Intermediário: "bg-yellow-100 text-yellow-800",
    Avançado: "bg-red-100 text-red-800",
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          <Badge className={difficultyColors[difficulty]}>{difficulty}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Dumbbell className="h-4 w-4" />
            {exercises} exercícios
          </div>
          {students !== undefined && (
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {students} alunos
            </div>
          )}
        </div>
        <div className="flex gap-2">
          {onView && (
            <Button variant="outline" size="sm" onClick={onView}>
              Visualizar
            </Button>
          )}
          {onEdit && (
            <Button variant="outline" size="sm" onClick={onEdit}>
              Editar
            </Button>
          )}
          {onDelete && (
            <Button variant="destructive" size="sm" onClick={onDelete}>
              Excluir
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
