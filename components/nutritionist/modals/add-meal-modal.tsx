"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from "lucide-react"

interface AddMealModalProps {
  onAddMeal?: (meal: any) => void
}

export function AddMealModal({ onAddMeal }: AddMealModalProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
    ingredients: "",
    preparation: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddMeal?.(formData)
    setFormData({
      name: "",
      type: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
      ingredients: "",
      preparation: "",
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Refeição
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Adicionar Refeição</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome da Refeição</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: Frango Grelhado com Batata Doce"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Tipo de Refeição</Label>
            <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cafe-manha">Café da Manhã</SelectItem>
                <SelectItem value="lanche-manha">Lanche da Manhã</SelectItem>
                <SelectItem value="almoco">Almoço</SelectItem>
                <SelectItem value="lanche-tarde">Lanche da Tarde</SelectItem>
                <SelectItem value="jantar">Jantar</SelectItem>
                <SelectItem value="ceia">Ceia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="calories">Calorias</Label>
              <Input
                id="calories"
                type="number"
                value={formData.calories}
                onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
                placeholder="Ex: 350"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="protein">Proteína (g)</Label>
              <Input
                id="protein"
                type="number"
                value={formData.protein}
                onChange={(e) => setFormData({ ...formData, protein: e.target.value })}
                placeholder="Ex: 25"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="carbs">Carboidratos (g)</Label>
              <Input
                id="carbs"
                type="number"
                value={formData.carbs}
                onChange={(e) => setFormData({ ...formData, carbs: e.target.value })}
                placeholder="Ex: 30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fat">Gorduras (g)</Label>
              <Input
                id="fat"
                type="number"
                value={formData.fat}
                onChange={(e) => setFormData({ ...formData, fat: e.target.value })}
                placeholder="Ex: 15"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ingredients">Ingredientes</Label>
            <Textarea
              id="ingredients"
              value={formData.ingredients}
              onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
              placeholder="Liste os ingredientes..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preparation">Modo de Preparo</Label>
            <Textarea
              id="preparation"
              value={formData.preparation}
              onChange={(e) => setFormData({ ...formData, preparation: e.target.value })}
              placeholder="Descreva o modo de preparo..."
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">Adicionar</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
