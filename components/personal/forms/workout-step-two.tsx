"use client"

import { Button } from "@/components/ui/button"
import { Plus, List, Copy, Edit, Trash2, Save } from "lucide-react"

interface WorkoutStepTwoProps {
  onAddExercise: () => void
  onManageSets: () => void
  onPrevious: () => void
  onPublish: () => void
}

export function WorkoutStepTwo({ onAddExercise, onManageSets, onPrevious, onPublish }: WorkoutStepTwoProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 justify-end">
        <Button onClick={onAddExercise} className="bg-orange-500 hover:bg-orange-600">
          <Plus className="mr-2 h-4 w-4" />
          Exercício
        </Button>
        <Button onClick={onManageSets} variant="outline">
          <List className="mr-2 h-4 w-4" />
          Gerenciar Conjuntos
        </Button>
      </div>

      <div className="border rounded-full p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-3">
            <span className="text-gray-600 font-medium">1</span>
          </div>
          <div>
            <h3 className="font-medium">Rosca Alternada Com Halteres</h3>
            <p className="text-sm text-muted-foreground">Bíceps</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" title="Duplicar">
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Editar">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Excluir">
            <Trash2 className="h-4 w-4" />
          </Button>
          <div className="w-px h-6 bg-gray-200 mx-1"></div>
          <Button variant="ghost" size="icon" title="Reordenar">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 5H15M7 9H15M7 13H15M3 5H5M3 9H5M3 13H5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-8 pb-4">
        <p className="text-muted-foreground mb-4">
          Você precisa <span className="font-medium">publicar</span> este treino para que ele seja salvo
        </p>
        <div className="flex gap-4">
          <Button variant="outline" onClick={onPrevious}>
            Voltar
          </Button>
          <Button onClick={onPublish} className="bg-green-500 hover:bg-green-600">
            <Save className="mr-2 h-4 w-4" />
            Publicar
          </Button>
        </div>
      </div>
    </div>
  )
}
