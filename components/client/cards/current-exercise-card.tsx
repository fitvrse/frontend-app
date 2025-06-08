"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Info, Play, Pause, RotateCcw } from "lucide-react"
import { ExerciseInfoModal } from "@/components/modals/exercise-info-modal"

interface Exercise {
  id: number
  name: string
  sets: string
  reps: string
  weight: string
  rest: string
  instructions: string[]
  muscleGroup: string
}

interface CurrentExerciseCardProps {
  exercise: Exercise
  currentIndex: number
  totalExercises: number
  onNext: () => void
  onPrevious: () => void
  onComplete: () => void
}

export function CurrentExerciseCard({
  exercise,
  currentIndex,
  totalExercises,
  onNext,
  onPrevious,
  onComplete,
}: CurrentExerciseCardProps) {
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [timer, setTimer] = useState(90)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)

  const handleSaveExerciseInfo = (data: any) => {
    console.log("Informações do exercício salvas:", data)
  }

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning)
  }

  const resetTimer = () => {
    setTimer(90)
    setIsTimerRunning(false)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const progress = ((currentIndex + 1) / totalExercises) * 100

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline">{exercise.muscleGroup}</Badge>
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} de {totalExercises}
            </span>
          </div>
          <CardTitle className="text-xl">{exercise.name}</CardTitle>
          <Progress value={progress} className="w-full mt-2" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Play className="h-16 w-16 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Demonstração do exercício</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-muted-foreground">Séries</p>
              <p className="text-lg font-semibold">{exercise.sets}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Repetições</p>
              <p className="text-lg font-semibold">{exercise.reps}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Peso</p>
              <p className="text-lg font-semibold">{exercise.weight}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Descanso</p>
              <p className="text-lg font-semibold">{exercise.rest}</p>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Instruções:</h4>
            <ul className="space-y-1">
              {exercise.instructions.map((instruction, index) => (
                <li key={index} className="text-sm flex items-start">
                  <span className="text-primary mr-2">{index + 1}.</span>
                  {instruction}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <h4 className="font-medium mb-2">Timer de Descanso</h4>
            <div className="text-3xl font-bold mb-3">{formatTime(timer)}</div>
            <div className="flex justify-center gap-2">
              <Button variant="outline" size="sm" onClick={toggleTimer}>
                {isTimerRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button variant="outline" size="sm" onClick={resetTimer}>
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button onClick={() => setIsInfoModalOpen(true)} className="w-full">
              <Info className="mr-2 h-4 w-4" />
              Registrar Infos
            </Button>
            <Button onClick={onComplete} variant="outline" className="w-full">
              Concluir Exercício
            </Button>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={onPrevious} disabled={currentIndex === 0}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Anterior
            </Button>
            <Button variant="outline" onClick={onNext} disabled={currentIndex === totalExercises - 1}>
              Próximo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <ExerciseInfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        onSave={handleSaveExerciseInfo}
        exerciseName={exercise.name}
      />
    </>
  )
}
