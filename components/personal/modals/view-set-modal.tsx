"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Edit, GripVertical } from "lucide-react"

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

interface ViewSetModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  setId: string
  exerciseSets: ExerciseSet[]
}

export function ViewSetModal({ open, onOpenChange, setId, exerciseSets }: ViewSetModalProps) {
  const currentSet = exerciseSets.find((set) => set.id === setId)

  if (!currentSet) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>{currentSet.name}</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="h-6 w-6 text-red-500 hover:text-red-700"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <p className="text-gray-600 mb-6">Edite os exercícios deste conjunto</p>

        <div className="space-y-4">
          {currentSet.exercises.map((exercise, index) => (
            <Card key={exercise.id} className="border border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{exercise.name}</h3>
                      <p className="text-sm text-gray-600">{exercise.category}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 border border-orange-500 text-orange-500 hover:bg-orange-50"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <GripVertical className="h-4 w-4 text-gray-400" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-4 bg-red-50 rounded-lg">
          <p className="text-sm text-red-600 text-center">
            Para adicionar, remover ou substituir exercícios dentro deste conjunto{" "}
            <span className="font-medium text-red-700">clique em gerenciar conjuntos</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
