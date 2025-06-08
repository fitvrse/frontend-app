import { Heart, List } from "lucide-react"

interface WorkoutProgressStepsProps {
  currentStep: "treino" | "exercicios"
}

export function WorkoutProgressSteps({ currentStep }: WorkoutProgressStepsProps) {
  return (
    <div className="flex justify-center mb-10">
      <div className="flex items-center w-full max-w-md">
        <div
          className={`flex flex-col items-center flex-1 ${currentStep === "treino" ? "text-green-500" : "text-gray-400"}`}
        >
          <div
            className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-2
              ${currentStep === "treino" ? "border-green-500 bg-white" : "border-gray-300 bg-white"}`}
          >
            <Heart className={`h-8 w-8 ${currentStep === "treino" ? "text-green-500" : "text-gray-400"}`} />
          </div>
          <span className="text-sm font-medium uppercase">Treino</span>
        </div>

        <div className="w-full h-0.5 bg-gray-200 mx-4"></div>

        <div
          className={`flex flex-col items-center flex-1 ${currentStep === "exercicios" ? "text-green-500" : "text-gray-400"}`}
        >
          <div
            className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-2
              ${currentStep === "exercicios" ? "border-green-500 bg-white" : "border-gray-300 bg-white"}`}
          >
            <List className={`h-8 w-8 ${currentStep === "exercicios" ? "text-green-500" : "text-gray-400"}`} />
          </div>
          <span className="text-sm font-medium uppercase">Exercícios</span>
        </div>
      </div>
    </div>
  )
}
