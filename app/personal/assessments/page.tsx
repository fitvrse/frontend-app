"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy, Filter, Plus, Search, SlidersHorizontal, Trash2, Users } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { CreateAssessmentModal } from "@/components/personal/modals/create-assessment-modal"

export default function PersonalAssessmentsPage() {
  const [createModalOpen, setCreateModalOpen] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Avaliações</h1>
        <p className="text-muted-foreground">Crie e gerencie avaliações para seus alunos</p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar avaliações..." className="pl-8 w-full md:w-80" />
          </div>
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
              <DropdownMenuItem>Tipo de avaliação</DropdownMenuItem>
              <DropdownMenuItem>Data de criação</DropdownMenuItem>
              <DropdownMenuItem>Status</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Ordenar</span>
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button size="sm" className="h-9" onClick={() => setCreateModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Nova Avaliação
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Avaliações Criadas</CardTitle>
            <CardDescription>Total: 12 avaliações</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead className="text-center">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "A001",
                  name: "Avaliação Física Completa",
                  type: "Física",
                  createdAt: "10/01/2023",
                  status: "Ativa",
                },
                {
                  id: "A002",
                  name: "Avaliação Postural",
                  type: "Postural",
                  createdAt: "15/02/2023",
                  status: "Ativa",
                },
                {
                  id: "A003",
                  name: "Avaliação de Força",
                  type: "Desempenho",
                  createdAt: "05/03/2023",
                  status: "Ativa",
                },
                {
                  id: "A004",
                  name: "Anamnese Inicial",
                  type: "Anamnese",
                  createdAt: "20/03/2023",
                  status: "Ativa",
                },
                {
                  id: "A005",
                  name: "Avaliação de Flexibilidade",
                  type: "Flexibilidade",
                  createdAt: "01/04/2023",
                  status: "Inativa",
                },
                {
                  id: "A006",
                  name: "Avaliação de Composição Corporal",
                  type: "Composição",
                  createdAt: "15/04/2023",
                  status: "Ativa",
                },
                {
                  id: "A007",
                  name: "Avaliação Cardiovascular",
                  type: "Cardio",
                  createdAt: "01/05/2023",
                  status: "Ativa",
                },
                {
                  id: "A008",
                  name: "Avaliação de Progresso Trimestral",
                  type: "Progresso",
                  createdAt: "10/05/2023",
                  status: "Inativa",
                },
              ].map((assessment) => (
                <TableRow key={assessment.id}>
                  <TableCell>
                    <div className="font-medium">{assessment.name}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center space-x-1">
                      <Button variant="ghost" size="icon" title="Exportar para Alunos">
                        <Users className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Duplicar">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Excluir">
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

      <CreateAssessmentModal open={createModalOpen} onOpenChange={setCreateModalOpen} />
    </div>
  )
}
