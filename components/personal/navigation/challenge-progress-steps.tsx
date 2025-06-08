"use client"

import { CheckCircle, User, Settings, FileText } from "lucide-react"

interface ChallengeProgressStepsProps {
  currentStep: number
}

export function ChallengeProgressSteps({ currentStep }: ChallengeProgressStepsProps) {
  const steps = [
    { id: 1, name: "Acessos", icon: User },
    { id: 2, name: "Configuração", icon: Settings },
    { id: 3, name: "Conteúdos", icon: FileText },
  ]

  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center w-full max-w-2xl">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isCompleted = currentStep > step.id
          const isCurrent = currentStep === step.id

          return (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 ${
                    isCompleted
                      ? "border-green-500 bg-green-500 text-white"
                      : isCurrent
                        ? "border-green-500 bg-white text-green-500"
                        : "border-gray-300 bg-white text-gray-400"
                  }`}
                >
                  {isCompleted ? <CheckCircle className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
                </div>
                <span
                  className={`text-sm font-medium uppercase ${
                    isCompleted || isCurrent ? "text-green-500" : "text-gray-400"
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && <div className="w-full h-0.5 bg-gray-200 mx-4 mt-[-20px]"></div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
