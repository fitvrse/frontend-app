"use client"

import { useState, useEffect, useRef } from "react"
// Importar o ícone Play do lucide-react
import { Check, Clock, ChevronDown, ChevronUp, AlertCircle, Play, Pause, RefreshCw, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Tipos
// Modificar a interface Exercise para incluir videoThumbnail
interface Exercise {
  id: string
  name: string
  series: number
  repetitions: string
  weight: string
  restTime: number
  notes?: string
  completed: boolean
  videoThumbnail?: string
  sets: {
    id: number
    completed: boolean
    actualReps?: string
    actualWeight?: string
  }[]
}

interface Training {
  id: string
  title: string
  description: string
  trainer: string
  date: string
  exercises: Exercise[]
}

export default function CurrentTraining() {
  // Mock de dados do treino atual
  // Adicionar videoThumbnail aos exercícios no mock de dados
  const [training, setTraining] = useState<Training>({
    id: "1",
    title: "Treino A - Peito e Tríceps",
    description: "Foco em hipertrofia com alta intensidade",
    trainer: "Carlos Silva",
    date: "18/05/2025",
    exercises: [
      {
        id: "1",
        name: "Supino Reto com Barra",
        series: 4,
        repetitions: "10-12",
        weight: "60kg",
        restTime: 90,
        notes: "Manter cotovelos em 45° em relação ao corpo",
        completed: false,
        videoThumbnail: "/placeholder.svg?height=80&width=80",
        sets: Array.from({ length: 4 }, (_, i) => ({
          id: i + 1,
          completed: false,
          actualReps: "",
          actualWeight: "",
        })),
      },
      {
        id: "2",
        name: "Crucifixo com Halteres",
        series: 3,
        repetitions: "12-15",
        weight: "16kg",
        restTime: 60,
        notes: "Foco na contração do peito",
        completed: false,
        videoThumbnail: "/placeholder.svg?height=80&width=80",
        sets: Array.from({ length: 3 }, (_, i) => ({
          id: i + 1,
          completed: false,
          actualReps: "",
          actualWeight: "",
        })),
      },
      {
        id: "3",
        name: "Tríceps Corda",
        series: 4,
        repetitions: "12-15",
        weight: "25kg",
        restTime: 60,
        completed: false,
        videoThumbnail: "/placeholder.svg?height=80&width=80",
        sets: Array.from({ length: 4 }, (_, i) => ({
          id: i + 1,
          completed: false,
          actualReps: "",
          actualWeight: "",
        })),
      },
      {
        id: "4",
        name: "Tríceps Francês",
        series: 3,
        repetitions: "10-12",
        weight: "12kg",
        restTime: 60,
        notes: "Manter cotovelos próximos à cabeça",
        completed: false,
        videoThumbnail: "/placeholder.svg?height=80&width=80",
        sets: Array.from({ length: 3 }, (_, i) => ({
          id: i + 1,
          completed: false,
          actualReps: "",
          actualWeight: "",
        })),
      },
    ],
  })

  // Estado para controlar quais exercícios estão expandidos
  const [expandedExercises, setExpandedExercises] = useState<Record<string, boolean>>({})

  // Estado para o cronômetro geral do treino
  const [trainingTime, setTrainingTime] = useState(0)
  const [isTrainingTimerRunning, setIsTrainingTimerRunning] = useState(false)

  // Estado para o temporizador de descanso
  const [restTimerId, setRestTimerId] = useState<string | null>(null)
  const [restTimeRemaining, setRestTimeRemaining] = useState<Record<string, number>>({})

  // Refs para os intervalos
  const trainingTimerRef = useRef<NodeJS.Timeout | null>(null)
  const restTimerRef = useRef<Record<string, NodeJS.Timeout | null>>({})

  // Iniciar o cronômetro do treino automaticamente
  useEffect(() => {
    startTrainingTimer()

    return () => {
      if (trainingTimerRef.current) {
        clearInterval(trainingTimerRef.current)
      }

      // Limpar todos os temporizadores de descanso
      Object.values(restTimerRef.current || {}).forEach((timer) => {
        if (timer) clearInterval(timer)
      })
    }
  }, [])

  // Função para iniciar o cronômetro do treino
  const startTrainingTimer = () => {
    if (!isTrainingTimerRunning) {
      setIsTrainingTimerRunning(true)
      trainingTimerRef.current = setInterval(() => {
        setTrainingTime((prev) => prev + 1)
      }, 1000)
    }
  }

  // Função para pausar o cronômetro do treino
  const pauseTrainingTimer = () => {
    if (isTrainingTimerRunning && trainingTimerRef.current) {
      clearInterval(trainingTimerRef.current)
      setIsTrainingTimerRunning(false)
    }
  }

  // Função para resetar o cronômetro do treino
  const resetTrainingTimer = () => {
    if (trainingTimerRef.current) {
      clearInterval(trainingTimerRef.current)
    }
    setTrainingTime(0)
    setIsTrainingTimerRunning(false)
  }

  // Função para formatar o tempo em HH:MM:SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      secs.toString().padStart(2, "0"),
    ].join(":")
  }

  // Função para iniciar o temporizador de descanso
  const startRestTimer = (exerciseId: string, restTime: number) => {
    // Limpar temporizador anterior se existir
    if (restTimerRef.current[exerciseId]) {
      clearInterval(restTimerRef.current[exerciseId]!)
    }

    // Definir o tempo inicial
    setRestTimeRemaining((prev) => ({ ...prev, [exerciseId]: restTime }))
    setRestTimerId(exerciseId)

    // Iniciar o temporizador
    restTimerRef.current[exerciseId] = setInterval(() => {
      setRestTimeRemaining((prev) => {
        const newTime = (prev[exerciseId] || 0) - 1

        // Se o tempo acabou, limpar o intervalo
        if (newTime <= 0) {
          if (restTimerRef.current[exerciseId]) {
            clearInterval(restTimerRef.current[exerciseId]!)
            restTimerRef.current[exerciseId] = null
          }

          // Notificar o usuário
          toast({
            title: "Tempo de descanso finalizado!",
            description: "Você pode iniciar a próxima série agora.",
          })

          return { ...prev, [exerciseId]: 0 }
        }

        return { ...prev, [exerciseId]: newTime }
      })
    }, 1000)
  }

  // Função para alternar a expansão de um exercício
  const toggleExercise = (exerciseId: string) => {
    setExpandedExercises((prev) => ({
      ...prev,
      [exerciseId]: !prev[exerciseId],
    }))
  }

  // Função para marcar um exercício como iniciado/completado
  const toggleExerciseCompletion = (exerciseId: string) => {
    setTraining((prev) => ({
      ...prev,
      exercises: prev.exercises.map((ex) => (ex.id === exerciseId ? { ...ex, completed: !ex.completed } : ex)),
    }))

    // Se marcado como iniciado, expandir automaticamente
    if (!training.exercises.find((ex) => ex.id === exerciseId)?.completed) {
      setExpandedExercises((prev) => ({
        ...prev,
        [exerciseId]: true,
      }))
    }
  }

  // Função para marcar uma série como completada
  const toggleSetCompletion = (exerciseId: string, setId: number) => {
    setTraining((prev) => ({
      ...prev,
      exercises: prev.exercises.map((ex) =>
        ex.id === exerciseId
          ? {
              ...ex,
              sets: ex.sets.map((set) => (set.id === setId ? { ...set, completed: !set.completed } : set)),
            }
          : ex,
      ),
    }))

    // Iniciar temporizador de descanso automaticamente
    const exercise = training.exercises.find((ex) => ex.id === exerciseId)
    if (exercise) {
      startRestTimer(exerciseId, exercise.restTime)
    }
  }

  // Função para atualizar os valores reais de repetições e peso
  const updateSetValues = (exerciseId: string, setId: number, field: "actualReps" | "actualWeight", value: string) => {
    setTraining((prev) => ({
      ...prev,
      exercises: prev.exercises.map((ex) =>
        ex.id === exerciseId
          ? {
              ...ex,
              sets: ex.sets.map((set) => (set.id === setId ? { ...set, [field]: value } : set)),
            }
          : ex,
      ),
    }))
  }

  // Função para finalizar o treino
  const finishTraining = () => {
    // Aqui você pode adicionar a lógica para salvar o treino finalizado
    toast({
      title: "Treino finalizado com sucesso!",
      description: `Duração total: ${formatTime(trainingTime)}`,
    })

    // Resetar o cronômetro
    resetTrainingTimer()

    // Redirecionar ou mostrar resumo
    // router.push('/client/training-summary')
  }

  return (
    <div className="container mx-auto py-6 pb-24">
      <h1 className="text-3xl font-bold mb-6">Treino Atual</h1>

      {/* Informações do treino */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{training.title}</CardTitle>
          <CardDescription>{training.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Treinador</p>
              <p className="font-medium">{training.trainer}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Data</p>
              <p className="font-medium">{training.date}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de exercícios */}
      <div className="space-y-4 mb-24">
        {training.exercises.map((exercise) => (
          <Card
            key={exercise.id}
            className={`border-l-4 ${exercise.completed ? "border-l-green-500" : "border-l-gray-300"}`}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                {/* Modificar a renderização do exercício para incluir a thumbnail de vídeo */}
                {/* Dentro do CardHeader, modificar a div que contém o Checkbox e as informações do exercício */}
                <div className="flex items-center gap-3">
                  <Checkbox
                    id={`exercise-${exercise.id}`}
                    checked={exercise.completed}
                    onCheckedChange={() => toggleExerciseCompletion(exercise.id)}
                    className="h-5 w-5"
                  />
                  <div className="relative w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0 cursor-pointer">
                    <img
                      src={exercise.videoThumbnail || "/placeholder.svg"}
                      alt={`Demonstração de ${exercise.name}`}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <PlayCircle className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-xl">{exercise.name}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <span>{exercise.series} séries</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <span>{exercise.repetitions} reps</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <span>{exercise.weight}</span>
                      </Badge>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Badge
                            variant="secondary"
                            className="cursor-pointer flex items-center gap-1 hover:bg-secondary/80"
                          >
                            <Clock className="h-3 w-3" />
                            <span>{exercise.restTime}s descanso</span>
                          </Badge>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Temporizador de Descanso</DialogTitle>
                          </DialogHeader>
                          <div className="flex flex-col items-center justify-center py-4">
                            <div className="text-5xl font-bold mb-4">
                              {formatTime(restTimeRemaining[exercise.id] || exercise.restTime)}
                            </div>
                            <Button onClick={() => startRestTimer(exercise.id, exercise.restTime)} className="w-full">
                              Iniciar Descanso
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleExercise(exercise.id)}
                  className="p-2 hover:bg-muted rounded-full"
                >
                  {expandedExercises[exercise.id] ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </CardHeader>

            <Collapsible open={expandedExercises[exercise.id]}>
              <CollapsibleContent>
                <CardContent className="pt-0">
                  {exercise.notes && (
                    <div className="flex items-start gap-2 mb-4 p-3 bg-muted/50 rounded-md">
                      <AlertCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{exercise.notes}</p>
                    </div>
                  )}

                  <div className="space-y-3">
                    {exercise.sets.map((set) => (
                      <div key={set.id} className="p-3 border rounded-md">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Checkbox
                              id={`set-${exercise.id}-${set.id}`}
                              checked={set.completed}
                              onCheckedChange={() => toggleSetCompletion(exercise.id, set.id)}
                              className="h-5 w-5"
                            />
                            <p className="font-medium">Série {set.id}</p>
                          </div>

                          {set.completed && (
                            <Badge variant="success" className="bg-green-100 text-green-800 hover:bg-green-100">
                              <Check className="h-3 w-3 mr-1" />
                              Concluído
                            </Badge>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-2">
                          <div className="space-y-1">
                            <Label htmlFor={`reps-${exercise.id}-${set.id}`} className="text-xs">
                              Repetições realizadas
                            </Label>
                            <Input
                              id={`reps-${exercise.id}-${set.id}`}
                              type="text"
                              placeholder={exercise.repetitions}
                              value={set.actualReps || ""}
                              onChange={(e) => updateSetValues(exercise.id, set.id, "actualReps", e.target.value)}
                              className="h-8"
                            />
                          </div>
                          <div className="space-y-1">
                            <Label htmlFor={`weight-${exercise.id}-${set.id}`} className="text-xs">
                              Peso utilizado
                            </Label>
                            <Input
                              id={`weight-${exercise.id}-${set.id}`}
                              type="text"
                              placeholder={exercise.weight}
                              value={set.actualWeight || ""}
                              onChange={(e) => updateSetValues(exercise.id, set.id, "actualWeight", e.target.value)}
                              className="h-8"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Temporizador de descanso em andamento */}
                  {restTimerId === exercise.id && restTimeRemaining[exercise.id] > 0 && (
                    <div className="mt-4 p-3 bg-blue-50 text-blue-800 rounded-md flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        <span>Descanso: {formatTime(restTimeRemaining[exercise.id])}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => startRestTimer(exercise.id, exercise.restTime)}
                      >
                        Reiniciar
                      </Button>
                    </div>
                  )}
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>

      {/* Barra fixa inferior com cronômetro e botão de finalizar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t shadow-md p-4 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-1"></div>
          <div className="flex items-center gap-4 flex-1 justify-center">
            <div className="text-2xl font-bold tabular-nums">{formatTime(trainingTime)}</div>
            <div className="flex gap-2">
              {isTrainingTimerRunning ? (
                <Button variant="outline" size="icon" onClick={pauseTrainingTimer}>
                  <Pause className="h-4 w-4" />
                </Button>
              ) : (
                <Button variant="outline" size="icon" onClick={startTrainingTimer}>
                  <Play className="h-4 w-4" />
                </Button>
              )}
              <Button variant="outline" size="icon" onClick={resetTrainingTimer}>
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <Button size="lg" onClick={finishTraining} className="bg-green-600 hover:bg-green-700">
              Finalizar Treino
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
