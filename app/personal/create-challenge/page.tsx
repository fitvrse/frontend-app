"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { ChallengeProgressSteps } from "@/components/personal/navigation/challenge-progress-steps"
import { ChallengeStepOne } from "@/components/personal/forms/challenge-step-one"
import { ChallengeStepTwo } from "@/components/personal/forms/challenge-step-two"
import { ChallengeStepThree } from "@/components/personal/forms/challenge-step-three"

export default function CreateChallengePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [challengeData, setChallengeData] = useState({
    // Step 1 - Acessos
    name: "",
    description: "",
    selectedGroups: [],
    selectedStudents: [],

    // Step 2 - Configuração
    isPaid: false,
    hasPointSystem: false,
    pointSystemDescription: "",
    hasCollaborators: false,
    collaborators: [],
    startDate: "",
    endDate: "",
    coverImage: null,

    // Step 3 - Conteúdos
    presentationVideo: {
      enabled: false,
      title: "",
      externalLink: "",
      cta: "saiba-mais",
      description: "",
      videoFile: null,
      videoLink: "",
    },
    workouts: [],
    finalizationVideo: {
      enabled: false,
      title: "",
      externalLink: "",
      cta: "saiba-mais",
      description: "",
      videoFile: null,
      videoLink: "",
    },
  })

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleCancel = () => {
    // Implementar lógica de cancelamento
    console.log("Cancelar criação do desafio")
  }

  const handlePublish = () => {
    // Implementar lógica de publicação
    console.log("Publicar desafio", challengeData)
  }

  const updateChallengeData = (data: any) => {
    setChallengeData((prev) => ({ ...prev, ...data }))
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ChallengeStepOne
            data={challengeData}
            onUpdate={updateChallengeData}
            onNext={handleNext}
            onCancel={handleCancel}
          />
        )
      case 2:
        return (
          <ChallengeStepTwo
            data={challengeData}
            onUpdate={updateChallengeData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )
      case 3:
        return (
          <ChallengeStepThree
            data={challengeData}
            onUpdate={updateChallengeData}
            onPrevious={handlePrevious}
            onPublish={handlePublish}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Criar Desafio</h2>
          <p className="text-muted-foreground">Configure seu novo desafio para os alunos</p>
        </div>
      </div>

      <ChallengeProgressSteps currentStep={currentStep} />

      <Card>
        <CardHeader>
          <CardTitle>
            {currentStep === 1 && "Passo 1 - Acessos"}
            {currentStep === 2 && "Passo 2 - Configuração"}
            {currentStep === 3 && "Passo 3 - Conteúdos"}
          </CardTitle>
        </CardHeader>
        <CardContent>{renderCurrentStep()}</CardContent>
      </Card>
    </div>
  )
}
