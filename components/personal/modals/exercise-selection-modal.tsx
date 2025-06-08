"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Plus } from "lucide-react"

interface Exercise {
  id: string
  name: string
  muscleGroup: string
  equipment: string
  difficulty: string
}

interface ExerciseSelectionModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectExercise: (exercise: Exercise) => void
}

const mockExercises: Exercise[] = [
  { id: "1", name: "Supino Reto", muscleGroup: "Peito", equipment: "Barra", difficulty: "Intermediário" },
  { id: "2", name: "Agachamento", muscleGroup: "Pernas", equipment: "Barra", difficulty: "Básico" },
  { id: "3", name: "Puxada Frontal", muscleGroup: "Costas", equipment: "Máquina", difficulty: "Básico" },
  { id: "4", name: "Desenvolvimento", muscleGroup: "Ombros", equipment: "Halteres", difficulty: "Intermediário" },
  { id: "5", name: "Rosca Direta", muscleGroup: "Bíceps", equipment: "Halteres", difficulty: "Básico" },
  { id: "6", name: "Tríceps Testa", muscleGroup: "Tríceps", equipment: "Barra", difficulty: "Intermediário" },
]

export function ExerciseSelectionModal({ isOpen, onClose, onSelectExercise }: ExerciseSelectionModalProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string | null>(null)

  const muscleGroups = Array.from(new Set(mockExercises.map((ex) => ex.muscleGroup)))

  const filteredExercises = mockExercises.filter((exercise) => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesMuscleGroup = !selectedMuscleGroup || exercise.muscleGroup === selectedMuscleGroup
    return matchesSearch && matchesMuscleGroup
  })

  const handleSelectExercise = (exercise: Exercise) => {
    onSelectExercise(exercise)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Selecionar Exercício</DialogTitle>
          <DialogDescription>Escolha um exercício para adicionar ao treino</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar exercícios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedMuscleGroup === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedMuscleGroup(null)}
            >
              Todos
            </Button>
            {muscleGroups.map((group) => (
              <Button
                key={group}
                variant={selectedMuscleGroup === group ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedMuscleGroup(group)}
              >
                {group}
              </Button>
            ))}
          </div>

          <ScrollArea className="h-[400px] w-full border rounded-md p-4">
            <div className="space-y-3">
              {filteredExercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer"
                  onClick={() => handleSelectExercise(exercise)}
                >
                  <div className="space-y-1">
                    <h4 className="font-medium">{exercise.name}</h4>
                    <div className="flex gap-2">
                      <Badge variant="outline">{exercise.muscleGroup}</Badge>
                      <Badge variant="secondary">{exercise.equipment}</Badge>
                      <Badge variant="outline">{exercise.difficulty}</Badge>
                    </div>
                  </div>
                  <Button size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
