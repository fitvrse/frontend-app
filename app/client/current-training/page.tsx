"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Play, Timer, ChevronLeft, ChevronRight, CheckCircle, Info } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Mock data para os exercícios
const workoutExercises = [
  {
    id: 1,
    name: "Escorpião Em Decúbito Dorsal",
    image: "/placeholder.svg?height=300&width=400",
    series: 1,
    repetitions: 12,
    rest: "10s",
    speed: "Lento",
    instructions: "Deite-se de costas e execute o movimento controlado",
  },
  {
    id: 2,
    name: "Supino Reto com Halteres",
    image: "/placeholder.svg?height=300&width=400",
    series: 3,
    repetitions: 12,
    rest: "60s",
    speed: "Moderado",
    instructions: "Mantenha os cotovelos alinhados e controle a descida",
  },
  {
    id: 3,
    name: "Flexão de Braço",
    image: "/placeholder.svg?height=300&width=400",
    series: 3,
    repetitions: 15,
    rest: "45s",
    speed: "Moderado",
    instructions: "Mantenha o corpo alinhado durante todo o movimento",
  },
  {
    id: 4,
    name: "Tríceps Testa",
    image: "/placeholder.svg?height=300&width=400",
    series: 3,
    repetitions: 10,
    rest: "60s",
    speed: "Lento",
    instructions: "Mantenha os cotovelos fixos e controle o movimento",
  },
  {
    id: 5,
    name: "Crucifixo com Halteres",
    image: "/placeholder.svg?height=300&width=400",
    series: 3,
    repetitions: 12,
    rest: "60s",
    speed: "Lento",
    instructions: "Abra os braços controladamente e sinta o alongamento",
  },
]

export default function CurrentTrainingPage() {
  const [currentExercise, setCurrentExercise] = useState(0)
  const [completedExercises, setCompletedExercises] = useState<number[]>([])
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [exerciseInfo, setExerciseInfo] = useState({
    series: "",
    repetitions: "",
    weight: "",
    restTime: "",
    feedback: "",
  })

  const nextExercise = () => {
    if (currentExercise < workoutExercises.length - 1) {
      setCurrentExercise(currentExercise + 1)
    }
  }

  const prevExercise = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1)
    }
  }

  const completeExercise = () => {
    if (!completedExercises.includes(currentExercise)) {
      setCompletedExercises([...completedExercises, currentExercise])
    }
    if (currentExercise < workoutExercises.length - 1) {
      nextExercise()
    }
  }

  const goToExercise = (index: number) => {
    setCurrentExercise(index)
  }

  const saveExerciseInfo = () => {
    // Here you would typically save to a database or state management
    console.log("Exercise info saved:", exerciseInfo)
    setIsInfoModalOpen(false)
    // Reset form
    setExerciseInfo({
      series: "",
      repetitions: "",
      weight: "",
      restTime: "",
      feedback: "",
    })
  }

  const currentExerciseData = workoutExercises[currentExercise]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Treino Atual</h1>
        <p className="text-muted-foreground">Acompanhe seu treino de hoje</p>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Treino A - Peito e Tríceps</h2>
          <p className="text-muted-foreground">Segunda-feira, {new Date().toLocaleDateString("pt-BR")}</p>
        </div>
        <Link href="/client/workouts">
          <Button variant="outline">Voltar aos Treinos</Button>
        </Link>
      </div>

      <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-700">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevExercise}
              disabled={currentExercise === 0}
              className="text-white hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div>
              <CardTitle className="text-white">Treino A - Peito e Tríceps</CardTitle>
              <CardDescription className="text-slate-300">
                Exercício {currentExercise + 1} de {workoutExercises.length}
              </CardDescription>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextExercise}
            disabled={currentExercise === workoutExercises.length - 1}
            className="text-white hover:bg-white/10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Exercise Card */}
          <div className="bg-black/50 rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-center text-white">{currentExerciseData.name}</h3>

            {/* Exercise Image/Video */}
            <div className="relative aspect-video bg-slate-700 rounded-xl overflow-hidden">
              <img
                src={currentExerciseData.image || "/placeholder.svg"}
                alt={currentExerciseData.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="rounded-full w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                  <Play className="h-6 w-6 text-white" />
                </Button>
              </div>
            </div>

            {/* Timer Button */}
            <div className="flex justify-center">
              <Button size="lg" className="rounded-full w-16 h-16 bg-orange-500 hover:bg-orange-600">
                <Timer className="h-6 w-6" />
              </Button>
            </div>

            {/* Exercise Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-white">{currentExerciseData.series}</div>
                <div className="text-sm text-slate-300">Séries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{currentExerciseData.repetitions}</div>
                <div className="text-sm text-slate-300">Repetições</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{currentExerciseData.rest}</div>
                <div className="text-sm text-slate-300">Descanso</div>
              </div>
            </div>

            {/* Speed */}
            <div className="text-center">
              <span className="text-slate-300">Velocidade </span>
              <span className="text-white font-bold">{currentExerciseData.speed}</span>
            </div>

            {/* Instructions */}
            <div className="text-center text-sm text-slate-300 bg-black/30 rounded-lg p-3">
              {currentExerciseData.instructions}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Dialog open={isInfoModalOpen} onOpenChange={setIsInfoModalOpen}>
              <DialogTrigger asChild>
                <Button variant="secondary" size="lg" className="flex-1 bg-slate-600 hover:bg-slate-500 text-white">
                  <Info className="h-4 w-4 mr-2" />
                  Registrar Infos
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Registrar Informações do Exercício</DialogTitle>
                  <DialogDescription>
                    Registre as informações sobre como você executou o exercício {currentExerciseData.name}.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="series">Séries Executadas</Label>
                      <Input
                        id="series"
                        type="number"
                        placeholder="Ex: 3"
                        value={exerciseInfo.series}
                        onChange={(e) => setExerciseInfo({ ...exerciseInfo, series: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="repetitions">Repetições</Label>
                      <Input
                        id="repetitions"
                        type="number"
                        placeholder="Ex: 12"
                        value={exerciseInfo.repetitions}
                        onChange={(e) => setExerciseInfo({ ...exerciseInfo, repetitions: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="weight">Peso (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        step="0.5"
                        placeholder="Ex: 20"
                        value={exerciseInfo.weight}
                        onChange={(e) => setExerciseInfo({ ...exerciseInfo, weight: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="restTime">Tempo de Descanso</Label>
                      <Input
                        id="restTime"
                        placeholder="Ex: 60s"
                        value={exerciseInfo.restTime}
                        onChange={(e) => setExerciseInfo({ ...exerciseInfo, restTime: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="feedback">Feedback do Exercício</Label>
                    <Textarea
                      id="feedback"
                      placeholder="Como foi a execução? Alguma dificuldade ou observação..."
                      value={exerciseInfo.feedback}
                      onChange={(e) => setExerciseInfo({ ...exerciseInfo, feedback: e.target.value })}
                      rows={3}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsInfoModalOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={saveExerciseInfo}>Salvar Informações</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button size="lg" onClick={completeExercise} className="flex-1 bg-orange-500 hover:bg-orange-600">
              {completedExercises.includes(currentExercise) ? (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Concluído
                </>
              ) : (
                <>
                  Finalizar
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </div>

          {/* Exercise Indicators */}
          <div className="flex justify-center gap-2">
            {workoutExercises.map((_, index) => (
              <button
                key={index}
                onClick={() => goToExercise(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentExercise
                    ? "bg-orange-500"
                    : completedExercises.includes(index)
                      ? "bg-green-500"
                      : "bg-slate-600"
                }`}
              />
            ))}
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300">Progresso do Treino</span>
              <span className="text-white">{Math.round(((currentExercise + 1) / workoutExercises.length) * 100)}%</span>
            </div>
            <Progress value={((currentExercise + 1) / workoutExercises.length) * 100} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
