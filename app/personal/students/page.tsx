"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Filter,
  Plus,
  SlidersHorizontal,
  FileText,
  Dumbbell,
  FolderOpen,
  Users,
  MessageSquare,
  Trash2,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
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
import { SearchInput } from "@/components/common/search-input"
import { EmptyState } from "@/components/common/empty-state"
import { AddStudentModal } from "@/components/personal/modals/add-student-modal"
import { RegisterStudentModal } from "@/components/personal/modals/register-student-modal"

export default function PersonalStudentsPage() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  const handleAddStudent = () => {
    setShowAddModal(true)
  }

  const handleRegister = () => {
    setShowAddModal(false)
    setShowRegisterModal(true)
  }

  const handleInvite = () => {
    setShowAddModal(false)
    alert("Funcionalidade de convite seria implementada aqui")
  }

  const handleSubmitRegister = () => {
    setShowRegisterModal(false)
    alert("Aluno cadastrado com sucesso!")
  }

  const handleBackToAdd = () => {
    setShowRegisterModal(false)
    setShowAddModal(true)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Alunos</h1>
        <p className="text-muted-foreground">Gerencie seus alunos e acompanhe seu progresso</p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <SearchInput placeholder="Buscar alunos..." />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filtrar</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Objetivo</DropdownMenuItem>
              <DropdownMenuItem>Frequência</DropdownMenuItem>
              <DropdownMenuItem>Progresso</DropdownMenuItem>
              <DropdownMenuItem>Data de início</DropdownMenuItem>
              <DropdownMenuItem>Status (Ativo/Inativo)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Ordenar</span>
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button size="sm" className="h-9" onClick={handleAddStudent}>
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Aluno
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="active">Ativos</TabsTrigger>
          <TabsTrigger value="inactive">Inativos</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Todos os Alunos</CardTitle>
                <CardDescription>Total: 18 alunos</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Aluno</TableHead>
                    <TableHead>Início</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Carlos Silva",
                      avatar: "CS",
                      goal: "Hipertrofia",
                      startDate: "10/01/2023",
                      frequency: "Alta",
                      progress: 75,
                      status: true,
                    },
                    {
                      name: "Ana Oliveira",
                      avatar: "AO",
                      goal: "Emagrecimento",
                      startDate: "15/02/2023",
                      frequency: "Média",
                      progress: 60,
                      status: true,
                    },
                    {
                      name: "Pedro Santos",
                      avatar: "PS",
                      goal: "Condicionamento",
                      startDate: "05/03/2023",
                      frequency: "Alta",
                      progress: 85,
                      status: true,
                    },
                    {
                      name: "Juliana Lima",
                      avatar: "JL",
                      goal: "Reabilitação",
                      startDate: "20/03/2023",
                      frequency: "Baixa",
                      progress: 40,
                      status: false,
                    },
                    {
                      name: "Roberto Alves",
                      avatar: "RA",
                      goal: "Hipertrofia",
                      startDate: "01/04/2023",
                      frequency: "Média",
                      progress: 55,
                      status: true,
                    },
                    {
                      name: "Fernanda Costa",
                      avatar: "FC",
                      goal: "Emagrecimento",
                      startDate: "15/04/2023",
                      frequency: "Alta",
                      progress: 65,
                      status: true,
                    },
                    {
                      name: "Marcos Oliveira",
                      avatar: "MO",
                      goal: "Força",
                      startDate: "01/05/2023",
                      frequency: "Alta",
                      progress: 30,
                      status: false,
                    },
                    {
                      name: "Carla Santos",
                      avatar: "CS",
                      goal: "Tonificação",
                      startDate: "10/05/2023",
                      frequency: "Média",
                      progress: 15,
                      status: true,
                    },
                  ].map((student, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/placeholder.svg" alt={student.name} />
                            <AvatarFallback>{student.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="font-medium">{student.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>{student.startDate}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Switch checked={student.status} />
                          <Badge variant={student.status ? "default" : "secondary"}>
                            {student.status ? "Ativo" : "Inativo"}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-center space-x-1">
                          <Button variant="ghost" size="icon" title="Avaliações" asChild>
                            <a href="/personal/customer-profile">
                              <FileText className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button variant="ghost" size="icon" title="Treinos">
                            <Dumbbell className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Arquivos">
                            <FolderOpen className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Grupos">
                            <Users className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="WhatsApp">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            title="Excluir"
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-end p-4">
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
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Alunos Ativos</CardTitle>
                <CardDescription>Total: 14 alunos ativos</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <EmptyState
                icon={Users}
                title="Alunos Ativos"
                description="Visualize todos os seus alunos com status ativo."
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="inactive" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Alunos Inativos</CardTitle>
                <CardDescription>Total: 4 alunos inativos</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <EmptyState
                icon={Users}
                title="Alunos Inativos"
                description="Visualize todos os seus alunos com status inativo."
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <AddStudentModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onRegister={handleRegister}
        onInvite={handleInvite}
      />

      <RegisterStudentModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onBack={handleBackToAdd}
        onSubmit={handleSubmitRegister}
      />
    </div>
  )
}
