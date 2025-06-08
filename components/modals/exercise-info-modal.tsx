"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ExerciseInfoModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (data: ExerciseInfoData) => void
  exerciseName?: string
}

interface ExerciseInfoData {
  series: number
  repetitions: number
  weight: number
  restTime: string
  feedback: string
}

export function ExerciseInfoModal({ isOpen, onClose, onSave, exerciseName = "Exercício" }: ExerciseInfoModalProps) {
  const [formData, setFormData] = useState<ExerciseInfoData>({
    series: 0,
    repetitions: 0,
    weight: 0,
    restTime: "",
    feedback: "",
  })

  const handleSave = () => {
    onSave(formData)
    setFormData({
      series: 0,
      repetitions: 0,
      weight: 0,
      restTime: "",
      feedback: "",
    })
    onClose()
  }

  const handleCancel = () => {
    setFormData({
      series: 0,
      repetitions: 0,
      weight: 0,
      restTime: "",
      feedback: "",
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Registrar Informações</DialogTitle>
          <DialogDescription>Registre as informações do exercício: {exerciseName}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="series">Séries Executadas</Label>
              <Input
                id="series"
                type="number"
                min="0"
                value={formData.series}
                onChange={(e) => setFormData((prev) => ({ ...prev, series: Number.parseInt(e.target.value) || 0 }))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="repetitions">Repetições</Label>
              <Input
                id="repetitions"
                type="number"
                min="0"
                value={formData.repetitions}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, repetitions: Number.parseInt(e.target.value) || 0 }))
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="weight">Peso (kg)</Label>
              <Input
                id="weight"
                type="number"
                min="0"
                step="0.5"
                value={formData.weight}
                onChange={(e) => setFormData((prev) => ({ ...prev, weight: Number.parseFloat(e.target.value) || 0 }))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="restTime">Tempo de Descanso</Label>
              <Input
                id="restTime"
                placeholder="Ex: 1min 30s"
                value={formData.restTime}
                onChange={(e) => setFormData((prev) => ({ ...prev, restTime: e.target.value }))}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="feedback">Feedback do Exercício</Label>
            <Textarea
              id="feedback"
              placeholder="Como foi a execução do exercício? Alguma dificuldade ou observação?"
              value={formData.feedback}
              onChange={(e) => setFormData((prev) => ({ ...prev, feedback: e.target.value }))}
              rows={3}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>Salvar Informações</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
