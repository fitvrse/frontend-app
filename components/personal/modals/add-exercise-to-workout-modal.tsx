"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { List, Settings, Plus } from "lucide-react"
import { CreateExerciseModal } from "./create-exercise-modal"

interface AddExerciseToWorkoutModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onExerciseAdded: () => void
}

export function AddExerciseToWorkoutModal({ open, onOpenChange, onExerciseAdded }: AddExerciseToWorkoutModalProps) {
  const [step, setStep] = useState<"exercise" | "parameters">("exercise")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedExercise, setSelectedExercise] = useState("")
  const [mediaType, setMediaType] = useState("video")
  const [series, setSeries] = useState("")
  const [exerciseType, setExerciseType] = useState("repetitions")
  const [repetitions, setRepetitions] = useState("")
  const [suggestedWeight, setSuggestedWeight] = useState("")
  const [velocity, setVelocity] = useState("")
  const [rest, setRest] = useState("")
  const [observations, setObservations] = useState("")
  const [showPeriodization, setShowPeriodization] = useState(false)
  const [isCreateExerciseModalOpen, setIsCreateExerciseModalOpen] = useState(false)
  const [hours, setHours] = useState("")
  const [minutes, setMinutes] = useState("")
  const [seconds, setSeconds] = useState("")

  const categories = ["Triceps", "Bíceps", "Peito", "Costas", "Pernas", "Ombros"]
  const exercises = {
    Triceps: ["PCD - Tríceps testa 1 halter", "Tríceps pulley", "Tríceps francês"],
    Bíceps: ["Rosca direta", "Rosca alternada", "Rosca martelo"],
    Peito: ["Supino reto", "Supino inclinado", "Crucifixo"],
    Costas: ["Puxada frontal", "Remada baixa", "Pullover"],
    Pernas: ["Agachamento", "Leg press", "Extensora"],
    Ombros: ["Desenvolvimento", "Elevação lateral", "Elevação frontal"],
  }

  const velocities = ["Lenta", "Moderada", "Rápida", "Explosiva"]

  const handleNextStep = () => {
    if (selectedCategory && selectedExercise) {
      setStep("parameters")
    }
  }

  const handlePreviousStep = () => {
    setStep("exercise")
  }

  const handleAddExercise = () => {
    // Validar campos obrigatórios
    const isRepetitionsValid = exerciseType === "repetitions" && repetitions
    const isTimeValid = exerciseType === "time" && minutes

    if (series && (isRepetitionsValid || isTimeValid) && rest) {
      onExerciseAdded()
      onOpenChange(false)
      // Reset form
      setStep("exercise")
      setSelectedCategory("")
      setSelectedExercise("")
      setSeries("")
      setRepetitions("")
      setHours("")
      setMinutes("")
      setSeconds("")
      setSuggestedWeight("")
      setVelocity("")
      setRest("")
      setObservations("")
      setShowPeriodization(false)
    }
  }

  const handleCreateExercise = () => {
    setIsCreateExerciseModalOpen(true)
  }

  const handleExerciseCreated = () => {
    console.log("Novo exercício criado com sucesso!")
    // Aqui você pode atualizar a lista de exercícios disponíveis
    // Por exemplo, fazer uma nova busca na API ou atualizar o estado global
  }

  const characterCount = observations.length

  const isFormValid =
    series && rest && ((exerciseType === "repetitions" && repetitions) || (exerciseType === "time" && minutes))

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[850px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Adicionar exercício ao treino</DialogTitle>
          </DialogHeader>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center w-full max-w-md">
              <div
                className={`flex flex-col items-center flex-1 ${
                  step === "exercise" ? "text-green-500" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 ${
                    step === "exercise" ? "border-green-500 bg-white" : "border-gray-300 bg-white"
                  }`}
                >
                  <List className={`h-6 w-6 ${step === "exercise" ? "text-green-500" : "text-gray-400"}`} />
                </div>
                <span className="text-sm font-medium uppercase">Exercício</span>
              </div>

              <div className="w-full h-0.5 bg-gray-200 mx-4"></div>

              <div
                className={`flex flex-col items-center flex-1 ${
                  step === "parameters" ? "text-green-500" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 ${
                    step === "parameters" ? "border-green-500 bg-white" : "border-gray-300 bg-white"
                  }`}
                >
                  <Settings className={`h-6 w-6 ${step === "parameters" ? "text-green-500" : "text-gray-400"}`} />
                </div>
                <span className="text-sm font-medium uppercase">Parâmetros</span>
              </div>
            </div>
          </div>

          {step === "exercise" ? (
            <div className="space-y-6">
              <div className="flex justify-end">
                <Button onClick={handleCreateExercise} className="bg-orange-500 hover:bg-orange-600">
                  <Plus className="mr-2 h-4 w-4" />
                  Criar Exercício
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase">Selecione uma categoria</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase">Selecione um exercício</label>
                  <Select value={selectedExercise} onValueChange={setSelectedExercise} disabled={!selectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedCategory &&
                        exercises[selectedCategory as keyof typeof exercises]?.map((exercise) => (
                          <SelectItem key={exercise} value={exercise}>
                            {exercise}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium uppercase">Mídia</label>
                <RadioGroup value={mediaType} onValueChange={setMediaType} className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="video" id="video" />
                    <Label htmlFor="video" className="text-orange-500 font-medium">
                      ESCOLHER VÍDEO
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="show-video"
                        checked={mediaType === "video"}
                        onCheckedChange={(checked) => {
                          if (checked) setMediaType("video")
                        }}
                      />
                      <Label htmlFor="show-video" className="text-sm">
                        Ver Vídeo
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="show-gif"
                        checked={mediaType === "gif"}
                        onCheckedChange={(checked) => {
                          if (checked) setMediaType("gif")
                        }}
                      />
                      <Label htmlFor="show-gif" className="text-sm">
                        Ver GIF
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="bg-red-500 text-white hover:bg-red-600"
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleNextStep}
                  disabled={!selectedCategory || !selectedExercise}
                  className="bg-green-500 hover:bg-green-600"
                >
                  Próximo Passo
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-6">
                  {/* Campo Séries - menor */}
                  <div className="space-y-2 w-32">
                    <div className="flex items-center">
                      <label className="text-sm font-medium uppercase">Séries</label>
                      <span className="text-red-500 ml-1">*</span>
                    </div>
                    <Input type="number" value={series} onChange={(e) => setSeries(e.target.value)} placeholder="0" />
                    {!series && <p className="text-xs text-red-500">Você deve informar a quantidade de séries</p>}
                  </div>

                  {/* Opções de Tipo de Execução - lado a lado */}
                  <div className="space-y-2 flex-1">
                    <label className="text-sm font-medium uppercase">Tipo de Execução</label>
                    <RadioGroup value={exerciseType} onValueChange={setExerciseType} className="flex gap-6">
                      {/* Opção Repetições */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="repetitions" id="repetitions" />
                          <Label htmlFor="repetitions" className="text-sm">
                            Repetições
                          </Label>
                        </div>
                        <Input
                          type="number"
                          value={repetitions}
                          onChange={(e) => setRepetitions(e.target.value)}
                          placeholder="0"
                          disabled={exerciseType !== "repetitions"}
                          className={`w-20 ${exerciseType !== "repetitions" ? "opacity-50" : ""}`}
                        />
                      </div>

                      {/* Opção Tempo */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="time" id="time" />
                          <Label htmlFor="time" className="text-sm">
                            Tempo
                          </Label>
                        </div>
                        <div className="flex gap-1">
                          <Input
                            type="number"
                            value={hours}
                            onChange={(e) => setHours(e.target.value)}
                            placeholder="HH"
                            min="0"
                            max="23"
                            disabled={exerciseType !== "time"}
                            className={`w-24 text-xs ${exerciseType !== "time" ? "opacity-50" : ""}`}
                          />
                          <Input
                            type="number"
                            value={minutes}
                            onChange={(e) => setMinutes(e.target.value)}
                            placeholder="MM"
                            min="0"
                            max="59"
                            disabled={exerciseType !== "time"}
                            className={`w-24 text-xs ${exerciseType !== "time" ? "opacity-50" : ""}`}
                          />
                          <Input
                            type="number"
                            value={seconds}
                            onChange={(e) => setSeconds(e.target.value)}
                            placeholder="SS"
                            min="0"
                            max="59"
                            disabled={exerciseType !== "time"}
                            className={`w-24 text-xs ${exerciseType !== "time" ? "opacity-50" : ""}`}
                          />
                        </div>
                      </div>
                    </RadioGroup>

                    {/* Mensagens de validação */}
                    {exerciseType === "repetitions" && !repetitions && (
                      <p className="text-xs text-red-500">Você deve informar a quantidade de repetições</p>
                    )}
                    {exerciseType === "time" && !minutes && (
                      <p className="text-xs text-red-500">Você deve informar pelo menos os minutos</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase">Carga sugerida total</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={suggestedWeight}
                      onChange={(e) => setSuggestedWeight(e.target.value)}
                      placeholder="0"
                    />
                    <span className="absolute right-3 top-2.5 text-sm text-gray-500">KG</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase">Velocidade</label>
                  <Select value={velocity} onValueChange={setVelocity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecionar Velocidade" />
                    </SelectTrigger>
                    <SelectContent>
                      {velocities.map((vel) => (
                        <SelectItem key={vel} value={vel}>
                          {vel}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <label className="text-sm font-medium uppercase">Descanso</label>
                    <span className="text-red-500 ml-1">*</span>
                  </div>
                  <div className="relative">
                    <Input type="number" value={rest} onChange={(e) => setRest(e.target.value)} placeholder="0" />
                    <span className="absolute right-3 top-2.5 text-sm text-gray-500">segundos</span>
                  </div>
                  {!rest && <p className="text-xs text-red-500">Você deve informar o intervalo</p>}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium uppercase">Observações</label>
                </div>
                <Textarea
                  placeholder="Você pode escrever observações sobre este exercício"
                  className="min-h-[100px]"
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                  maxLength={500}
                />
                <div className="text-xs text-right text-muted-foreground">{characterCount}/500 caracteres</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium uppercase">Exibir periodizações?</label>
                  <Switch checked={showPeriodization} onCheckedChange={setShowPeriodization} />
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={handlePreviousStep}>
                  Voltar
                </Button>
                <Button
                  onClick={handleAddExercise}
                  disabled={!isFormValid}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Exercício
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal de Criar Exercício */}
      <CreateExerciseModal
        open={isCreateExerciseModalOpen}
        onOpenChange={setIsCreateExerciseModalOpen}
        onExerciseCreated={handleExerciseCreated}
      />
    </>
  )
}
