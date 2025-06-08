"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Search, Info, Eye, Users, Download, Copy, Trash2 } from "lucide-react"

interface WorkoutSelectionSectionProps {
  selectedWorkouts: any[]
  onUpdate: (workouts: any[]) => void
}

const mockWorkouts = [
  {
    id: "1",
    name: "Hipertrofia - Membros Superiores",
  },
  {
    id: "2",
    name: "Cardio HIIT",
  },
  {
    id: "3",
    name: "Treino de Pernas",
  },
  {
    id: "4",
    name: "Yoga Matinal",
  },
  {
    id: "5",
    name: "Treino Funcional",
  },
]

export function WorkoutSelectionSection({ selectedWorkouts, onUpdate }: WorkoutSelectionSectionProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredWorkouts = mockWorkouts.filter((workout) =>
    workout.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleWorkoutToggle = (workout: any, checked: boolean) => {
    if (checked) {
      onUpdate([...selectedWorkouts, workout])
    } else {
      onUpdate(selectedWorkouts.filter((w) => w.id !== workout.id))
    }
  }

  const isWorkoutSelected = (workoutId: string) => {
    return selectedWorkouts.some((w) => w.id === workoutId)
  }

  const handleAction = (action: string, workout: any) => {
    console.log(`Action ${action} on workout:`, workout)
    // Implementar ações específicas aqui
    switch (action) {
      case "info":
        alert(`Informações sobre: ${workout.name}`)
        break
      case "view":
        alert(`Visualizando: ${workout.name}`)
        break
      case "users":
        alert(`Gerenciando usuários para: ${workout.name}`)
        break
      case "download":
        alert(`Baixando: ${workout.name}`)
        break
      case "copy":
        alert(`Copiando: ${workout.name}`)
        break
      case "delete":
        if (confirm(`Deseja realmente excluir: ${workout.name}?`)) {
          alert(`Treino excluído: ${workout.name}`)
        }
        break
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar treinos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Treinos
        </Button>
      </div>

      {selectedWorkouts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Treinos Selecionados ({selectedWorkouts.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {selectedWorkouts.map((workout) => (
                <Badge
                  key={workout.id}
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => handleWorkoutToggle(workout, false)}
                >
                  {workout.name} ×
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Lista de Treinos Disponíveis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12"></TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredWorkouts.map((workout) => (
                  <TableRow key={workout.id}>
                    <TableCell>
                      <Checkbox
                        checked={isWorkoutSelected(workout.id)}
                        onCheckedChange={(checked) => handleWorkoutToggle(workout, checked as boolean)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{workout.name}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleAction("info", workout)}>
                          <Info className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleAction("view", workout)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleAction("users", workout)}>
                          <Users className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleAction("download", workout)}>
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleAction("copy", workout)}>
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleAction("delete", workout)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
