"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Plus, Search, Edit, Trash2, Target, Users } from "lucide-react"
import Link from "next/link"
import { ChallengeEditModal } from "@/components/personal/modals/challenge-edit-modal"

interface Challenge {
  id: string
  name: string
  category: string
  type: "created" | "collaborator"
  createdBy: string
  participants: number
  startDate: string
  endDate: string
  status: "active" | "completed" | "upcoming"
}

const mockChallenges: Challenge[] = [
  {
    id: "1",
    name: "Desafio 30 Dias de Treino",
    category: "Fitness",
    type: "created",
    createdBy: "Você",
    participants: 25,
    startDate: "2024-01-01",
    endDate: "2024-01-30",
    status: "active",
  },
  {
    id: "2",
    name: "Queima de Gordura Intensiva",
    category: "Perda de Peso",
    type: "created",
    createdBy: "Você",
    participants: 18,
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    status: "active",
  },
  {
    id: "3",
    name: "Alimentação Saudável 21 Dias",
    category: "Nutrição",
    type: "collaborator",
    createdBy: "Dra. Maria Silva",
    participants: 42,
    startDate: "2024-01-10",
    endDate: "2024-01-31",
    status: "active",
  },
  {
    id: "4",
    name: "Hipertrofia Muscular",
    category: "Musculação",
    type: "created",
    createdBy: "Você",
    participants: 15,
    startDate: "2024-02-01",
    endDate: "2024-03-01",
    status: "upcoming",
  },
  {
    id: "5",
    name: "Detox Completo",
    category: "Nutrição",
    type: "collaborator",
    createdBy: "Dr. João Santos",
    participants: 33,
    startDate: "2023-12-15",
    endDate: "2024-01-05",
    status: "completed",
  },
  {
    id: "6",
    name: "Resistência Cardiovascular",
    category: "Cardio",
    type: "created",
    createdBy: "Você",
    participants: 22,
    startDate: "2024-01-20",
    endDate: "2024-02-20",
    status: "active",
  },
]

const categories = ["Todos", "Fitness", "Perda de Peso", "Nutrição", "Musculação", "Cardio"]
const statusOptions = ["Todos", "Ativo", "Concluído", "Próximo"]

export default function ChallengesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedStatus, setSelectedStatus] = useState("Todos")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null)

  const filteredChallenges = mockChallenges.filter((challenge) => {
    const matchesSearch = challenge.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || challenge.category === selectedCategory
    const matchesStatus =
      selectedStatus === "Todos" ||
      (selectedStatus === "Ativo" && challenge.status === "active") ||
      (selectedStatus === "Concluído" && challenge.status === "completed") ||
      (selectedStatus === "Próximo" && challenge.status === "upcoming")

    return matchesSearch && matchesCategory && matchesStatus
  })

  const totalPages = Math.ceil(filteredChallenges.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedChallenges = filteredChallenges.slice(startIndex, startIndex + itemsPerPage)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="default" className="bg-green-500">
            Ativo
          </Badge>
        )
      case "completed":
        return <Badge variant="secondary">Concluído</Badge>
      case "upcoming":
        return <Badge variant="outline">Próximo</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    return type === "created" ? (
      <Badge variant="default" className="bg-blue-500">
        Criado por você
      </Badge>
    ) : (
      <Badge variant="outline" className="border-orange-500 text-orange-600">
        Colaborador
      </Badge>
    )
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Desafios</h2>
          <p className="text-muted-foreground">Gerencie seus desafios e participe como colaborador</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Gerenciar Desafios
          </CardTitle>
          <CardDescription>
            Crie novos desafios para seus alunos e colabore em desafios de nutricionistas
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filtros e Busca */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar desafios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="w-full md:w-auto" asChild>
              <Link href="/personal/create-challenge">
                <Plus className="mr-2 h-4 w-4" />
                Criar Desafio
              </Link>
            </Button>
          </div>

          {/* Tabela de Desafios */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome do Desafio</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Participantes</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedChallenges.map((challenge) => (
                  <TableRow key={challenge.id}>
                    <TableCell className="font-medium">{challenge.name}</TableCell>
                    <TableCell>{getTypeBadge(challenge.type)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        {challenge.participants}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm" onClick={() => setSelectedChallenge(challenge)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        {challenge.type === "created" && (
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="mt-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        if (currentPage > 1) setCurrentPage(currentPage - 1)
                      }}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>

                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1
                    if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                      return (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault()
                              setCurrentPage(page)
                            }}
                            isActive={currentPage === page}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    } else if (page === currentPage - 2 || page === currentPage + 2) {
                      return (
                        <PaginationItem key={page}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      )
                    }
                    return null
                  })}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                      }}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </CardContent>
      </Card>
      <ChallengeEditModal
        challenge={selectedChallenge}
        isOpen={!!selectedChallenge}
        onClose={() => setSelectedChallenge(null)}
      />
    </div>
  )
}
