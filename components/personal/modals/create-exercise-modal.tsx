"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

interface CreateExerciseModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onExerciseCreated?: () => void
}

export function CreateExerciseModal({ open, onOpenChange, onExerciseCreated }: CreateExerciseModalProps) {
  const [category, setCategory] = useState("")
  const [exerciseName, setExerciseName] = useState("")

  const handleSubmit = () => {
    // Aqui iria a lógica para salvar o exercício
    // Por exemplo, chamada de API ou atualização de estado global

    // Fechar o modal e limpar os campos
    onOpenChange(false)
    setCategory("")
    setExerciseName("")

    // Notificar o componente pai que um exercício foi criado
    if (onExerciseCreated) {
      onExerciseCreated()
    }
  }

  const handleCancel = () => {
    onOpenChange(false)
    setCategory("")
    setExerciseName("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Criar Novo Exercício</DialogTitle>
          <DialogDescription>Adicione um novo exercício à sua biblioteca.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="exercise-category" className="text-right">
              Categoria
            </Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecionar categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="peito">Peito</SelectItem>
                <SelectItem value="costas">Costas</SelectItem>
                <SelectItem value="pernas">Pernas</SelectItem>
                <SelectItem value="ombros">Ombros</SelectItem>
                <SelectItem value="biceps">Bíceps</SelectItem>
                <SelectItem value="triceps">Tríceps</SelectItem>
                <SelectItem value="abdomen">Abdômen</SelectItem>
                <SelectItem value="gluteos">Glúteos</SelectItem>
                <SelectItem value="cardio">Cardio</SelectItem>
                <SelectItem value="funcional">Funcional</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="exercise-name" className="text-right">
              Nome
            </Label>
            <Input
              id="exercise-name"
              placeholder="Nome do exercício"
              className="col-span-3"
              value={exerciseName}
              onChange={(e) => setExerciseName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label className="text-right pt-2">Vídeo</Label>
            <div className="col-span-3 space-y-2">
              <Tabs defaultValue="link" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="link">Link do YouTube</TabsTrigger>
                  <TabsTrigger value="upload">Upload de Vídeo</TabsTrigger>
                </TabsList>
                <TabsContent value="link" className="space-y-2">
                  <Input placeholder="https://youtube.com/..." />
                  <p className="text-xs text-muted-foreground">Cole o link do vídeo do YouTube</p>
                </TabsContent>
                <TabsContent value="upload" className="space-y-2">
                  <Input type="file" />
                  <p className="text-xs text-muted-foreground">MP4, MOV ou AVI (max. 50MB)</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label className="text-right pt-2">GIF</Label>
            <div className="col-span-3 space-y-2">
              <Tabs defaultValue="link" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="link">Link do GIF</TabsTrigger>
                  <TabsTrigger value="upload">Upload de GIF</TabsTrigger>
                </TabsList>
                <TabsContent value="link" className="space-y-2">
                  <Input placeholder="https://exemplo.com/gif.gif" />
                  <p className="text-xs text-muted-foreground">Cole o link do arquivo GIF</p>
                </TabsContent>
                <TabsContent value="upload" className="space-y-2">
                  <Input type="file" accept="image/gif" />
                  <p className="text-xs text-muted-foreground">GIF (max. 10MB)</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type="submit" onClick={handleSubmit} disabled={!category || !exerciseName}>
            Cadastrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
