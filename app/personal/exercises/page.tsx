"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Plus, Edit, Trash2, Copy, Play, ImageIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { CreateExerciseModal } from "@/components/personal/modals/create-exercise-modal"

export default function PersonalExercisesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const handleExerciseCreated = () => {
    console.log("Exercício criado com sucesso!")
    // Aqui você pode adicionar lógica para atualizar a lista de exercícios
    // Por exemplo, refetch dos dados ou atualização do estado local
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Exercícios</h1>
        <p className="text-muted-foreground">Gerencie sua biblioteca de exercícios</p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Selecionar categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as categorias</SelectItem>
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
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar exercícios..." className="pl-8 w-full md:w-80" />
          </div>
        </div>
        <Button size="sm" className="h-9" onClick={() => setIsCreateModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Criar Exercício
        </Button>
      </div>

      <div className="space-y-4">
        {[
          {
            id: "E001",
            name: "Supino Reto",
            category: "Peito",
            hasVideo: true,
            hasGif: true,
            createdBy: "platform",
          },
          {
            id: "E002",
            name: "Agachamento Livre",
            category: "Pernas",
            hasVideo: true,
            hasGif: true,
            createdBy: "platform",
          },
          {
            id: "E003",
            name: "Puxada Frontal",
            category: "Costas",
            hasVideo: true,
            hasGif: true,
            createdBy: "platform",
          },
          {
            id: "E004",
            name: "Desenvolvimento com Halteres",
            category: "Ombros",
            hasVideo: true,
            hasGif: false,
            createdBy: "platform",
          },
          {
            id: "E005",
            name: "Rosca Direta",
            category: "Bíceps",
            hasVideo: true,
            hasGif: true,
            createdBy: "user",
          },
          {
            id: "E006",
            name: "Tríceps Corda",
            category: "Tríceps",
            hasVideo: true,
            hasGif: true,
            createdBy: "user",
          },
          {
            id: "E007",
            name: "Abdominal Infra",
            category: "Abdômen",
            hasVideo: false,
            hasGif: true,
            createdBy: "user",
          },
          {
            id: "E008",
            name: "Elevação Pélvica",
            category: "Glúteos",
            hasVideo: true,
            hasGif: true,
            createdBy: "user",
          },
        ].map((exercise) => (
          <Card key={exercise.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">{exercise.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exercise.createdBy === "platform" ? "Criado pela plataforma" : "Criado por você"}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {exercise.createdBy === "platform" ? (
                    <Button variant="ghost" size="icon" title="Duplicar">
                      <Copy className="h-4 w-4" />
                    </Button>
                  ) : (
                    <>
                      <Button variant="ghost" size="icon" title="Editar">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Excluir" className="text-red-500 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline">{exercise.category}</Badge>
              </div>
              <div className="mt-4 flex justify-start gap-2">
                <Button variant="outline" size="sm" disabled={!exercise.hasVideo}>
                  <Play className="mr-2 h-4 w-4" />
                  Ver Vídeo
                </Button>
                <Button variant="outline" size="sm" disabled={!exercise.hasGif}>
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Ver GIF
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-center mt-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <CreateExerciseModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        onExerciseCreated={handleExerciseCreated}
      />
    </div>
  )
}
