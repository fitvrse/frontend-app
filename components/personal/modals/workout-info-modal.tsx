"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface WorkoutInfoModalProps {
  isOpen: boolean
  onClose: () => void
  workout: {
    id: string
    name: string
    type: string
    level: string
    createdAt: string
    days: string[]
    category: string
    students: number
  }
}

export function WorkoutInfoModal({ isOpen, onClose, workout }: WorkoutInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{workout.name}</DialogTitle>
          <DialogDescription>Informações detalhadas do treino</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="text-sm font-medium">ID:</div>
            <div className="text-sm">{workout.id}</div>

            <div className="text-sm font-medium">Tipo:</div>
            <div className="text-sm">{workout.type}</div>

            <div className="text-sm font-medium">Nível:</div>
            <div className="text-sm">{workout.level}</div>

            <div className="text-sm font-medium">Criado em:</div>
            <div className="text-sm">{workout.createdAt}</div>

            <div className="text-sm font-medium">Dias da Semana:</div>
            <div className="text-sm flex flex-wrap gap-1">
              {workout.days.map((day, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {day}
                </Badge>
              ))}
            </div>

            <div className="text-sm font-medium">Categoria:</div>
            <div className="text-sm">
              <Badge variant="secondary">{workout.category}</Badge>
            </div>

            <div className="text-sm font-medium">Alunos:</div>
            <div className="text-sm">{workout.students}</div>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onClose}>
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
