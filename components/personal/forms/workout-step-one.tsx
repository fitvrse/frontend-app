"use client"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

interface WorkoutStepOneProps {
  workoutName: string
  setWorkoutName: (name: string) => void
  workoutType: string
  setWorkoutType: (type: string) => void
  workoutNotes: string
  setWorkoutNotes: (notes: string) => void
  onNext: () => void
}

export function WorkoutStepOne({
  workoutName,
  setWorkoutName,
  workoutType,
  setWorkoutType,
  workoutNotes,
  setWorkoutNotes,
  onNext,
}: WorkoutStepOneProps) {
  const characterCount = workoutNotes.length

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium uppercase">Treino Personalizado</label>
        <Select value={workoutType} onValueChange={setWorkoutType}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o tipo de treino" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="personalizado">Personalizado</SelectItem>
            <SelectItem value="hipertrofia">Hipertrofia</SelectItem>
            <SelectItem value="resistencia">Resistência</SelectItem>
            <SelectItem value="forca">Força</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center">
          <label className="text-sm font-medium uppercase">Nome</label>
          <span className="text-red-500 ml-1">*</span>
        </div>
        <Input placeholder="Nome do treino" value={workoutName} onChange={(e) => setWorkoutName(e.target.value)} />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium uppercase">Observações</label>
          <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-200">
            <AlertCircle className="h-3 w-3 mr-1" />
            NÃO UTILIZE EMOJIS EX: 😀
          </Badge>
        </div>
        <Textarea
          placeholder="Você pode escrever observações sobre este treino"
          className="min-h-[120px]"
          value={workoutNotes}
          onChange={(e) => setWorkoutNotes(e.target.value)}
          maxLength={500}
        />
        <div className="text-xs text-right text-muted-foreground">{characterCount}/500 caracteres</div>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <Link href="/personal/workouts">
          <Button variant="outline">Cancelar</Button>
        </Link>
        <Button onClick={onNext} className="bg-green-500 hover:bg-green-600">
          Próximo Passo
        </Button>
      </div>
    </div>
  )
}
