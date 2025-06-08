"use client"

import { Button } from "@/components/ui/button"

interface ChallengeStepThreeProps {
  data: any
  onUpdate: (data: any) => void
  onPrevious: () => void
  onPublish: () => void
  isEditing?: boolean
}

export function ChallengeStepThree({
  data,
  onUpdate,
  onPrevious,
  onPublish,
  isEditing = false,
}: ChallengeStepThreeProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-semibold">Passo 3: Publicar Desafio</h3>
        <p className="text-sm text-muted-foreground">
          Confirme os detalhes do seu desafio e publique-o para a comunidade.
        </p>
      </div>

      {/* Display challenge details here */}
      <div>
        <p>Título: {data.title}</p>
        <p>Descrição: {data.description}</p>
        {/* Add more details as needed */}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrevious}>
          Voltar
        </Button>
        <Button onClick={onPublish} className="ml-auto">
          {isEditing ? "Salvar Alterações" : "Publicar"}
        </Button>
      </div>
    </div>
  )
}
