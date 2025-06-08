"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Upload, Users, Award, DollarSign, Search, X } from "lucide-react"

interface ChallengeStepTwoProps {
  data: any
  onUpdate: (data: any) => void
  onNext: () => void
  onPrevious: () => void
}

const mockPlans = [
  { id: "1", name: "Plano Básico", price: 29.9 },
  { id: "2", name: "Plano Premium", price: 49.9 },
  { id: "3", name: "Plano VIP", price: 99.9 },
  { id: "4", name: "Plano Empresarial", price: 199.9 },
]

export function ChallengeStepTwo({ data, onUpdate, onNext, onPrevious }: ChallengeStepTwoProps) {
  const [collaboratorInput, setCollaboratorInput] = useState("")
  const [planSearch, setPlanSearch] = useState("")
  const [selectedPlan, setSelectedPlan] = useState<any>(data.selectedPlan || null)

  const filteredPlans = mockPlans.filter((plan) => plan.name.toLowerCase().includes(planSearch.toLowerCase()))

  const addCollaborator = () => {
    if (collaboratorInput.trim()) {
      const newCollaborators = [...(data.collaborators || []), collaboratorInput.trim()]
      onUpdate({ collaborators: newCollaborators })
      setCollaboratorInput("")
    }
  }

  const removeCollaborator = (index: number) => {
    const newCollaborators = data.collaborators.filter((_: any, i: number) => i !== index)
    onUpdate({ collaborators: newCollaborators })
  }

  const selectPlan = (plan: any) => {
    setSelectedPlan(plan)
    onUpdate({ selectedPlan: plan })
    setPlanSearch("")
  }

  const removePlan = () => {
    setSelectedPlan(null)
    onUpdate({ selectedPlan: null })
  }

  const handleNext = () => {
    if (!data.startDate || !data.endDate) {
      alert("Por favor, defina as datas de início e término do desafio.")
      return
    }
    onNext()
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Tipo de Plano
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="paid-plan"
                checked={data.isPaid || false}
                onCheckedChange={(checked) => onUpdate({ isPaid: checked })}
              />
              <Label htmlFor="paid-plan">{data.isPaid ? "Plano Pago" : "Plano Gratuito"}</Label>
            </div>

            {data.isPaid && (
              <div className="space-y-4 mt-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar planos..."
                    value={planSearch}
                    onChange={(e) => setPlanSearch(e.target.value)}
                    className="pl-8"
                  />
                </div>

                {planSearch && filteredPlans.length > 0 && (
                  <div className="border rounded-md max-h-40 overflow-y-auto">
                    <ul className="py-1">
                      {filteredPlans.map((plan) => (
                        <li
                          key={plan.id}
                          className="px-3 py-2 hover:bg-muted cursor-pointer flex justify-between items-center"
                          onClick={() => selectPlan(plan)}
                        >
                          <span>{plan.name}</span>
                          <span className="font-medium">R$ {plan.price.toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedPlan && (
                  <div className="mt-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {selectedPlan.name} - R$ {selectedPlan.price.toFixed(2)}
                      <X className="h-3 w-3 cursor-pointer" onClick={removePlan} />
                    </Badge>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Sistema de Pontuação
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="point-system"
                checked={data.hasPointSystem || false}
                onCheckedChange={(checked) => onUpdate({ hasPointSystem: checked })}
              />
              <Label htmlFor="point-system">Ativar Sistema de Pontuação</Label>
            </div>
            {data.hasPointSystem && (
              <div className="space-y-2">
                <Label htmlFor="points">Pontos por Conclusão</Label>
                <Input
                  id="points"
                  type="number"
                  placeholder="Ex: 100"
                  value={data.points || ""}
                  onChange={(e) => onUpdate({ points: e.target.value })}
                  min="1"
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Colaboradores
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="has-collaborators"
              checked={data.hasCollaborators || false}
              onCheckedChange={(checked) => onUpdate({ hasCollaborators: checked })}
            />
            <Label htmlFor="has-collaborators">Enviar Solicitação para Colaboradores</Label>
          </div>
          {data.hasCollaborators && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Nome de usuário do profissional"
                  value={collaboratorInput}
                  onChange={(e) => setCollaboratorInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addCollaborator()}
                />
                <Button onClick={addCollaborator}>Adicionar</Button>
              </div>
              {data.collaborators && data.collaborators.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {data.collaborators.map((collaborator: string, index: number) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => removeCollaborator(index)}
                    >
                      {collaborator} ×
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Período do Desafio
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="start-date">Data de Início *</Label>
              <Input
                id="start-date"
                type="date"
                value={data.startDate || ""}
                onChange={(e) => onUpdate({ startDate: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-date">Data de Término *</Label>
              <Input
                id="end-date"
                type="date"
                value={data.endDate || ""}
                onChange={(e) => onUpdate({ endDate: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Capa do Desafio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">Clique para fazer upload da capa</p>
                <Button variant="outline" size="sm">
                  Selecionar Arquivo
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onPrevious}>
          Voltar
        </Button>
        <Button onClick={handleNext}>Avançar</Button>
      </div>
    </div>
  )
}
