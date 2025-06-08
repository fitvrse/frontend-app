"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Plus, Edit, Trash2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function PersonalGroupsPage() {
  const [selectedStudents, setSelectedStudents] = useState<string[]>([])

  const handleStudentSelection = (studentId: string) => {
    if (selectedStudents.includes(studentId)) {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId))
    } else {
      setSelectedStudents([...selectedStudents, studentId])
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Grupos</h1>
        <p className="text-muted-foreground">Gerencie grupos de alunos para treinos coletivos</p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar grupos..." className="pl-8 w-full md:w-80" />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="h-9">
              <Plus className="mr-2 h-4 w-4" />
              Criar Grupo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Novo Grupo</DialogTitle>
              <DialogDescription>Crie um novo grupo e adicione alunos para treinos coletivos.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="group-name" className="text-right">
                  Nome do Grupo
                </Label>
                <Input id="group-name" placeholder="Ex: Turma Hipertrofia" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Alunos</Label>
                <div className="col-span-3 space-y-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Buscar alunos..." className="pl-8" />
                  </div>
                  <ScrollArea className="h-[200px] border rounded-md p-2">
                    {[
                      { id: "1", name: "Carlos Silva", avatar: "CS" },
                      { id: "2", name: "Ana Oliveira", avatar: "AO" },
                      { id: "3", name: "Pedro Santos", avatar: "PS" },
                      { id: "4", name: "Juliana Lima", avatar: "JL" },
                      { id: "5", name: "Roberto Alves", avatar: "RA" },
                      { id: "6", name: "Fernanda Costa", avatar: "FC" },
                      { id: "7", name: "Marcos Oliveira", avatar: "MO" },
                      { id: "8", name: "Carla Santos", avatar: "CS" },
                    ].map((student) => (
                      <div key={student.id} className="flex items-center space-x-2 py-2">
                        <Checkbox
                          id={`student-${student.id}`}
                          checked={selectedStudents.includes(student.id)}
                          onCheckedChange={() => handleStudentSelection(student.id)}
                        />
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg" alt={student.name} />
                          <AvatarFallback>{student.avatar}</AvatarFallback>
                        </Avatar>
                        <Label htmlFor={`student-${student.id}`} className="cursor-pointer">
                          {student.name}
                        </Label>
                      </div>
                    ))}
                  </ScrollArea>
                  <div className="text-sm text-muted-foreground">{selectedStudents.length} alunos selecionados</div>
                </div>
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
            id: "G001",
            name: "Turma Hipertrofia",
            members: 8,
            createdAt: "10/01/2023",
            students: [
              { name: "Carlos Silva", avatar: "CS" },
              { name: "Roberto Alves", avatar: "RA" },
              { name: "Marcos Oliveira", avatar: "MO" },
            ],
          },
          {
            id: "G002",
            name: "Grupo Emagrecimento",
            members: 12,
            createdAt: "15/02/2023",
            students: [
              { name: "Ana Oliveira", avatar: "AO" },
              { name: "Fernanda Costa", avatar: "FC" },
              { name: "Carla Santos", avatar: "CS" },
            ],
          },
          {
            id: "G003",
            name: "Turma Funcional",
            members: 6,
            createdAt: "05/03/2023",
            students: [
              { name: "Pedro Santos", avatar: "PS" },
              { name: "Juliana Lima", avatar: "JL" },
            ],
          },
          {
            id: "G004",
            name: "Grupo Força",
            members: 5,
            createdAt: "20/03/2023",
            students: [
              { name: "Carlos Silva", avatar: "CS" },
              { name: "Roberto Alves", avatar: "RA" },
            ],
          },
          {
            id: "G005",
            name: "Turma Iniciantes",
            members: 10,
            createdAt: "01/04/2023",
            students: [
              { name: "Juliana Lima", avatar: "JL" },
              { name: "Carla Santos", avatar: "CS" },
            ],
          },
        ].map((group) => (
          <Card key={group.id} className="overflow-hidden">
            <CardHeader className="p-4 pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{group.name}</CardTitle>
                  <CardDescription>{group.members} membros</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon" title="Editar Grupo">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Editar Grupo</DialogTitle>
                        <DialogDescription>Modifique as informações do grupo.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-group-name" className="text-right">
                            Nome do Grupo
                          </Label>
                          <Input id="edit-group-name" defaultValue={group.name} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right">Alunos</Label>
                          <div className="col-span-3 space-y-2">
                            <div className="relative">
                              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input placeholder="Buscar alunos..." className="pl-8" />
                            </div>
                            <ScrollArea className="h-[200px] border rounded-md p-2">
                              {group.students.map((student, i) => (
                                <div key={i} className="flex items-center space-x-2 py-2">
                                  <Checkbox id={`edit-student-${i}`} defaultChecked />
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder.svg" alt={student.name} />
                                    <AvatarFallback>{student.avatar}</AvatarFallback>
                                  </Avatar>
                                  <Label htmlFor={`edit-student-${i}`} className="cursor-pointer">
                                    {student.name}
                                  </Label>
                                </div>
                              ))}
                            </ScrollArea>
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="button" variant="outline">
                          Cancelar
                        </Button>
                        <Button type="submit">Atualizar</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="ghost"
                    size="icon"
                    title="Excluir Grupo"
                    className="text-red-500 hover:text-red-700 hover:bg-red-100"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="mt-2 text-sm text-muted-foreground">Criado em {group.createdAt}</div>
              <div className="mt-4">
                <div className="text-sm font-medium mb-2">Membros:</div>
                <div className="flex -space-x-2 overflow-hidden">
                  {group.students.map((student, i) => (
                    <Avatar key={i} className="h-8 w-8 border-2 border-background">
                      <AvatarImage src="/placeholder.svg" alt={student.name} />
                      <AvatarFallback>{student.avatar}</AvatarFallback>
                    </Avatar>
                  ))}
                  {group.members > 3 && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
                      +{group.members - 3}
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <Badge variant="outline" className="text-xs">
                  {group.members} alunos
                </Badge>
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                  Ver Detalhes
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
