"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WorkoutProgressSteps } from "@/components/personal/navigation/workout-progress-steps"
import { WorkoutStepOne } from "@/components/personal/forms/workout-step-one"
import { AddExerciseToWorkoutModal } from "@/components/personal/modals/add-exercise-to-workout-modal"
import { ManageSetsModal } from "@/components/personal/modals/manage-sets-modal"
import { ViewSetModal } from "@/components/personal/modals/view-set-modal"
import { Edit, Copy, Trash2, GripVertical } from "lucide-react"

interface Exercise {
  id: string
  name: string
  category: string
  sets?: number
  reps?: number
  weight?: number
}

interface ExerciseSet {
  id: string
  name: string
  exercises: Exercise[]
}

export default function WorkoutsDetailsPage() {
  const [step, setStep] = useState<"treino" | "exercicios">("treino")
  const [workoutName, setWorkoutName] = useState("")
  const [workoutType, setWorkoutType] = useState("personalizado")
  const [workoutNotes, setWorkoutNotes] = useState("")
  const [isAddExerciseModalOpen, setIsAddExerciseModalOpen] = useState(false)
  const [isManageSetsModalOpen, setIsManageSetsModalOpen] = useState(false)
  const [isViewSetModalOpen, setIsViewSetModalOpen] = useState(false)
  const [selectedSetId, setSelectedSetId] = useState<string>("")

  // Estado dos exercícios e conjuntos
  const [exercises, setExercises] = useState<Exercise[]>([
    {
      id: "1",
      name: "Flexão de punho com a barra 90°",
      category: "Antebraço",
      sets: 3,
      reps: 12,
      weight: 20,
    },
  ])

  const [exerciseSets, setExerciseSets] = useState<ExerciseSet[]>([
    {
      id: "set1",
      name: "Conjunto 1",
      exercises: [
        {
          id: "2",
          name: "Flexão de punho com a barra 90°",
          category: "Antebraço",
        },
        {
          id: "3",
          name: "Flexão de punho com a barra 90°",
          category: "Antebraço",
        },
      ],
    },
  ])

  const handleNextStep = () => {
    setStep("exercicios")
  }

  const handlePreviousStep = () => {
    setStep("treino")
  }

  const handleAddExercise = () => {
    setIsAddExerciseModalOpen(true)
  }

  const handleExerciseAdded = () => {
    console.log("Exercício adicionado com sucesso!")
    // Aqui você pode atualizar a lista de exercícios
  }

  const handleManageSets = () => {
    if (exercises.length + exerciseSets.reduce((acc, set) => acc + set.exercises.length, 0) < 2) {
      alert("É necessário ter pelo menos 2 exercícios para criar conjuntos")
      return
    }
    setIsManageSetsModalOpen(true)
  }

  const handleViewSet = (setId: string) => {
    setSelectedSetId(setId)
    setIsViewSetModalOpen(true)
  }

  const handlePublish = () => {
    alert("Treino publicado com sucesso!")
  }

  const canCreateSets = exercises.length + exerciseSets.reduce((acc, set) => acc + set.exercises.length, 0) >= 2

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Novo Treino</h1>
        <p className="text-muted-foreground">Crie um treino e adicione exercícios parametrizados</p>
      </div>

      <Card className="border-none shadow-md">
        <CardContent className="p-6">
          <WorkoutProgressSteps currentStep={step} />

          {step === "treino" ? (
            <WorkoutStepOne
              workoutName={workoutName}
              setWorkoutName={setWorkoutName}
              workoutType={workoutType}
              setWorkoutType={setWorkoutType}
              workoutNotes={workoutNotes}
              setWorkoutNotes={setWorkoutNotes}
              onNext={handleNextStep}
            />
          ) : (
            <div className="space-y-6">
              {/* Botões de ação */}
              <div className="flex justify-end gap-3">
                <Button onClick={handleAddExercise} className="bg-orange-500 hover:bg-orange-600 text-white">
                  + Exercício
                </Button>
                <Button
                  onClick={handleManageSets}
                  disabled={!canCreateSets}
                  className="bg-orange-500 hover:bg-orange-600 text-white disabled:bg-gray-300"
                  title={!canCreateSets ? "É necessário ter pelo menos 2 exercícios para criar conjuntos" : ""}
                >
                  Gerenciar Conjuntos
                </Button>
              </div>

              {/* Lista de Conjuntos */}
              {exerciseSets.map((set, index) => (
                <Card key={set.id} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <h3 className="font-medium text-lg">{set.name}</h3>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewSet(set.id)}
                        className="border-orange-500 text-orange-500 hover:bg-orange-50"
                      >
                        Visualizar {set.name}
                      </Button>
                    </div>

                    <div className="space-y-2 ml-11">
                      {set.exercises.map((exercise, exerciseIndex) => (
                        <div key={exercise.id} className="text-sm text-gray-600">
                          {exerciseIndex + 1} - {exercise.name}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Lista de Exercícios Individuais */}
              {exercises.map((exercise, index) => (
                <Card key={exercise.id} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium">
                          {exerciseSets.length + index + 1}
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
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 border border-orange-500 text-orange-500 hover:bg-orange-50"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 border border-orange-500 text-orange-500 hover:bg-orange-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <GripVertical className="h-4 w-4 text-gray-400" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Mensagem de publicação */}
              <div className="text-center py-6">
                <p className="text-gray-600 mb-4">
                  Você precisa <strong>publicar</strong> este treino para que ele seja salvo
                </p>

                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    onClick={handlePreviousStep}
                    className="bg-gray-500 text-white hover:bg-gray-600"
                  >
                    Voltar
                  </Button>
                  <Button onClick={handlePublish} className="bg-green-500 hover:bg-green-600 text-white">
                    Publicar
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modais */}
      <AddExerciseToWorkoutModal
        open={isAddExerciseModalOpen}
        onOpenChange={setIsAddExerciseModalOpen}
        onExerciseAdded={handleExerciseAdded}
      />

      <ManageSetsModal
        open={isManageSetsModalOpen}
        onOpenChange={setIsManageSetsModalOpen}
        exercises={exercises}
        exerciseSets={exerciseSets}
        onSetsUpdated={setExerciseSets}
      />

      <ViewSetModal
        open={isViewSetModalOpen}
        onOpenChange={setIsViewSetModalOpen}
        setId={selectedSetId}
        exerciseSets={exerciseSets}
      />
    </div>
  )
}
