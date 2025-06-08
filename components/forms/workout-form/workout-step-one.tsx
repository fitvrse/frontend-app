"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle } from "lucide-react"

interface WorkoutStepOneProps {
  formData: {
    type: string
    name: string
    notes: string
  }
  onFormDataChange: (data: any) => void
  onNext: () => void
  onCancel: () => void
}

export function WorkoutStepOne({ formData, onFormDataChange, onNext, onCancel }: WorkoutStepOneProps) {
  const handleInputChange = (field: string, value: string) => {
    onFormDataChange({ ...formData, [field]: value })
  }

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="workout-type">TREINO PERSONALIZADO</Label>
          <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="personalizado">Personalizado</SelectItem>
              <SelectItem value="template">Template</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="workout-name">
            NOME <span className="text-red-500">*</span>
          </Label>
          <Input
            id="workout-name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Digite o nome do treino"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="workout-notes">OBSERVAÇÕES</Label>
            <div className="flex items-center gap-1 bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
              <AlertTriangle className="h-3 w-3" />
              NÃO UTILIZE EMOJIS EX: 😀
            </div>
          </div>
          <Textarea
            id="workout-notes"
            value={formData.notes}
            onChange={(e) => handleInputChange("notes", e.target.value)}
            placeholder="Você pode escrever observações sobre este treino"
            rows={4}
            maxLength={500}
          />
          <div className="text-sm text-muted-foreground text-right">{formData.notes.length}/500 caracteres</div>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <Button variant="destructive" onClick={onCancel}>
            Cancelar
          </Button>
          <Button onClick={onNext} disabled={!formData.name.trim()}>
            Próximo Passo
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
