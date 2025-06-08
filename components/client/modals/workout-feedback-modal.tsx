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
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Star } from "lucide-react"

interface WorkoutFeedbackModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (feedback: WorkoutFeedback) => void
  workoutName: string
}

interface WorkoutFeedback {
  rating: number
  difficulty: string
  feedback: string
}

export function WorkoutFeedbackModal({ isOpen, onClose, onSubmit, workoutName }: WorkoutFeedbackModalProps) {
  const [rating, setRating] = useState(0)
  const [difficulty, setDifficulty] = useState("")
  const [feedback, setFeedback] = useState("")

  const handleSubmit = () => {
    onSubmit({
      rating,
      difficulty,
      feedback,
    })

    // Reset form
    setRating(0)
    setDifficulty("")
    setFeedback("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Avaliação do Treino</DialogTitle>
          <DialogDescription>Como foi seu treino: {workoutName}?</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Avaliação Geral</Label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} type="button" onClick={() => setRating(star)} className="p-1">
                  <Star className={`h-6 w-6 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Dificuldade</Label>
            <RadioGroup value={difficulty} onValueChange={setDifficulty}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="facil" id="facil" />
                <Label htmlFor="facil">Fácil</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="moderado" id="moderado" />
                <Label htmlFor="moderado">Moderado</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dificil" id="dificil" />
                <Label htmlFor="dificil">Difícil</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="muito-dificil" id="muito-dificil" />
                <Label htmlFor="muito-dificil">Muito Difícil</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="feedback">Comentários (opcional)</Label>
            <Textarea
              id="feedback"
              placeholder="Como se sentiu durante o treino? Alguma observação?"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={3}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Pular
          </Button>
          <Button onClick={handleSubmit} disabled={rating === 0 || !difficulty}>
            Enviar Avaliação
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
