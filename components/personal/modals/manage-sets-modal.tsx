"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { X, Edit, Trash2 } from "lucide-react"

interface Exercise {
  id: string
  name: string
  category: string
}

interface ExerciseSet {
  id: string
  name: string
  exercises: Exercise[]
}

interface ManageSetsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  exercises: Exercise[]
  exerciseSets: ExerciseSet[]
  onSetsUpdated: (sets: ExerciseSet[]) => void
}

export function ManageSetsModal({ open, onOpenChange, exercises, exerciseSets, onSetsUpdated }: ManageSetsModalProps) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [selectedExercises, setSelectedExercises] = useState<string[]>([])

  const handleAddSet = () => {
    setShowAddForm(true)
  }

  const handleCancel = () => {
    setShowAddForm(false)
    setSelectedExercises([])
  }

  const handleSaveSet = () => {
    if (selectedExercises.length >= 2) {
      const newSet: ExerciseSet = {
        id: `set${Date.now()}`,
        name: `Conjunto ${exerciseSets.length + 1}`,
        exercises: selectedExercises.map((exerciseId) => {
          const exercise = exercises.find((ex) => ex.id === exerciseId)
          return exercise || { id: exerciseId, name: "Exercício", category: "Categoria" }
        }),
      }

      onSetsUpdated([...exerciseSets, newSet])
      setShowAddForm(false)
      setSelectedExercises([])
    }
  }

  const handleDeleteSet = (setId: string) => {
    onSetsUpdated(exerciseSets.filter((set) => set.id !== setId))
  }

  const handleExerciseSelection = (exerciseId: string) => {
    setSelectedExercises((prev) => {
      if (prev.includes(exerciseId)) {
        return prev.filter((id) => id !== exerciseId)
      } else {
        return [...prev, exerciseId]
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Gerenciar Conjuntos</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="h-6 w-6 text-red-500 hover:text-red-700"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <p className="text-gray-600 mb-6">Associe diferentes exercícios para criar conjuntos biset e triset</p>

        <div className="flex justify-end mb-6">
          <Button onClick={handleAddSet} className="bg-orange-500 hover:bg-orange-600 text-white">
            + Adicionar Conjunto
          </Button>
        </div>

        {!showAddForm && exerciseSets.length === 0 && (
          <Card className="border-2 border-dashed border-gray-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-lg font-medium mb-2">Nenhum exercício associado.</h3>
              <p className="text-blue-600 cursor-pointer hover:underline" onClick={handleAddSet}>
                Adicione um novo conjunto!
              </p>
            </CardContent>
          </Card>
        )}

        {showAddForm && (
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">SELECIONE EXERCÍCIOS PARA SEREM INCLUÍDOS NESTE CONJUNTO</h3>

              <Select>
                <SelectTrigger className="mb-6">
                  <SelectValue placeholder="Selecionar Treinos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="treino1">Treino A</SelectItem>
                  <SelectItem value="treino2">Treino B</SelectItem>
                </SelectContent>
              </Select>

              <div className="space-y-3 mb-6">
                {exercises.map((exercise) => (
                  <div
                    key={exercise.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedExercises.includes(exercise.id)
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleExerciseSelection(exercise.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{exercise.name}</h4>
                        <p className="text-sm text-gray-600">{exercise.category}</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedExercises.includes(exercise.id)}
                        onChange={() => handleExerciseSelection(exercise.id)}
                        className="h-4 w-4"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={handleCancel} className="bg-red-500 text-white hover:bg-red-600">
                  Cancelar
                </Button>
                <Button
                  onClick={handleSaveSet}
                  disabled={selectedExercises.length < 2}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Salvar Conjunto
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Lista de conjuntos existentes */}
        {exerciseSets.map((set, index) => (
          <Card key={set.id} className="mb-4">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium">{set.name}</h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 border border-orange-500 text-orange-500">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 border border-orange-500 text-orange-500"
                    onClick={() => handleDeleteSet(set.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                {set.exercises.map((ex, i) => `${i + 1} - ${ex.name}`).join(" | ")}
              </p>
            </CardContent>
          </Card>
        ))}
      </DialogContent>
    </Dialog>
  )
}
