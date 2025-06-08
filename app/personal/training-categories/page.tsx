"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Plus, Edit, Trash2, Dumbbell } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function PersonalExerciseCategoriesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Categorias de Exercícios</h1>
        <p className="text-muted-foreground">Gerencie as categorias para organizar seus exercícios</p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar categorias..." className="pl-8 w-full md:w-80" />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="h-9">
              <Plus className="mr-2 h-4 w-4" />
              Criar Categoria
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Criar Nova Categoria</DialogTitle>
              <DialogDescription>Adicione uma nova categoria para organizar seus exercícios.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category-name" className="text-right">
                  Nome da Categoria
                </Label>
                <Input id="category-name" placeholder="Ex: Peito, Costas, etc." className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
              <Button type="submit">Cadastrar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {[
          {
            id: "C001",
            name: "Peito",
            exercisesCount: 12,
            createdBy: "platform",
          },
          {
            id: "C002",
            name: "Costas",
            exercisesCount: 15,
            createdBy: "platform",
          },
          {
            id: "C003",
            name: "Pernas",
            exercisesCount: 18,
            createdBy: "platform",
          },
          {
            id: "C004",
            name: "Ombros",
            exercisesCount: 10,
            createdBy: "platform",
          },
          {
            id: "C005",
            name: "Bíceps",
            exercisesCount: 8,
            createdBy: "platform",
          },
          {
            id: "C006",
            name: "Tríceps",
            exercisesCount: 7,
            createdBy: "platform",
          },
          {
            id: "C007",
            name: "Abdômen",
            exercisesCount: 14,
            createdBy: "platform",
          },
          {
            id: "C008",
            name: "Glúteos",
            exercisesCount: 9,
            createdBy: "platform",
          },
          {
            id: "C009",
            name: "Cardio",
            exercisesCount: 6,
            createdBy: "platform",
          },
          {
            id: "C010",
            name: "Funcional",
            exercisesCount: 11,
            createdBy: "platform",
          },
          {
            id: "C011",
            name: "Mobilidade",
            exercisesCount: 5,
            createdBy: "user",
          },
          {
            id: "C012",
            name: "Isometria",
            exercisesCount: 3,
            createdBy: "user",
          },
        ].map((category) => (
          <Card key={category.id} className="overflow-hidden">
            <CardHeader className="p-4 pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription>{category.exercisesCount} exercícios</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  {category.createdBy === "user" && (
                    <>
                      <Button variant="ghost" size="icon" title="Editar Categoria">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        title="Excluir Categoria"
                        className="text-red-500 hover:text-red-700 hover:bg-red-100"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-center gap-2 mt-2">
                <Badge variant={category.createdBy === "platform" ? "secondary" : "default"} className="text-xs">
                  {category.createdBy === "platform" ? "Plataforma" : "Personal"}
                </Badge>
              </div>
              <div className="mt-4 flex items-center">
                <Dumbbell className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">{category.exercisesCount} exercícios</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <div className="text-xs text-muted-foreground">
                {category.createdBy === "platform" ? "Criado pela plataforma" : "Criado por você"}
              </div>
              <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                Ver Exercícios
              </Button>
            </CardFooter>
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
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
