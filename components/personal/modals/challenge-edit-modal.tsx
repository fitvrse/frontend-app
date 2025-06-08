"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X } from "lucide-react"
import { ChallengeStepOne } from "@/components/personal/forms/challenge-step-one"
import { ChallengeStepTwo } from "@/components/personal/forms/challenge-step-two"
import { ChallengeStepThree } from "@/components/personal/forms/challenge-step-three"

interface Challenge {
  id: string
  name: string
  category: string
  type: "created" | "collaborator"
  createdBy: string
  participants: number
  startDate: string
  endDate: string
  status: "active" | "completed" | "upcoming"
}

interface ChallengeEditModalProps {
  challenge: Challenge | null
  isOpen: boolean
  onClose: () => void
}

export function ChallengeEditModal({ challenge, isOpen, onClose }: ChallengeEditModalProps) {
  const [challengeData, setChallengeData] = useState({
    // Step 1 - Acessos
    name: "",
    description: "",
    selectedGroups: [],
    selectedStudents: [],

    // Step 2 - Configuração
    isPaid: false,
    hasPointSystem: false,
    pointSystemValue: 0,
    hasCollaborators: false,
    collaborators: [],
    startDate: "",
    endDate: "",
    coverImage: null,
    selectedPlan: "",

    // Step 3 - Conteúdos
    presentationVideo: {
      enabled: false,
      title: "",
      externalLink: "",
      cta: "saiba-mais",
      description: "",
      videoFile: null,
      videoLink: "",
      mediaType: "link",
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
      mediaType: "link",
    },
  })

  useEffect(() => {
    if (challenge) {
      // Populate form with challenge data
      setChallengeData({
        name: challenge.name,
        description: `Descrição do desafio ${challenge.name}`,
        selectedGroups: [],
        selectedStudents: [],
        isPaid: false,
        hasPointSystem: false,
        pointSystemValue: 0,
        hasCollaborators: false,
        collaborators: [],
        startDate: challenge.startDate,
        endDate: challenge.endDate,
        coverImage: null,
        selectedPlan: "",
        presentationVideo: {
          enabled: false,
          title: "",
          externalLink: "",
          cta: "saiba-mais",
          description: "",
          videoFile: null,
          videoLink: "",
          mediaType: "link",
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
          mediaType: "link",
        },
      })
    }
  }, [challenge])

  const handleCancel = () => {
    onClose()
  }

  const handleSave = () => {
    // Implementar lógica de salvamento
    console.log("Salvar alterações do desafio", challengeData)
    onClose()
  }

  const updateChallengeData = (data: any) => {
    setChallengeData((prev) => ({ ...prev, ...data }))
  }

  if (!challenge) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[850px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-xl font-semibold">Editar Desafio: {challenge.name}</DialogTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <Tabs defaultValue="acessos" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="acessos">Acessos</TabsTrigger>
            <TabsTrigger value="configuracao">Configuração</TabsTrigger>
            <TabsTrigger value="conteudos">Conteúdos</TabsTrigger>
          </TabsList>

          <TabsContent value="acessos" className="space-y-4">
            <ChallengeStepOne
              data={challengeData}
              onUpdate={updateChallengeData}
              onNext={() => {}}
              onCancel={handleCancel}
              isModal={true}
            />
            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600">
                Salvar
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="configuracao" className="space-y-4">
            <ChallengeStepTwo
              data={challengeData}
              onUpdate={updateChallengeData}
              onNext={() => {}}
              onPrevious={() => {}}
              isModal={true}
            />
            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600">
                Salvar
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="conteudos" className="space-y-4">
            <ChallengeStepThree
              data={challengeData}
              onUpdate={updateChallengeData}
              onPrevious={() => {}}
              onPublish={handleSave}
              isEditing={true}
              isModal={true}
            />
            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600">
                Salvar
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
