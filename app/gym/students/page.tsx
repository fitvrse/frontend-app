"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StudentCard } from "@/components/gym/cards/student-card"
import { DataTable } from "@/components/common/data-table"
import { StatsCard } from "@/components/common/stats-card"
import { Search, Users, UserPlus, TrendingUp, Calendar } from "lucide-react"
import type { Student } from "@/lib/types"

const mockStudents: Student[] = [
  {
    id: "1",
    name: "João Silva",
    email: "joao@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    goal: "Hipertrofia",
    startDate: "15/01/2024",
    frequency: "5x por semana",
    progress: 75,
    status: true,
  },
  {
    id: "2",
    name: "Maria Santos",
    email: "maria@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    goal: "Emagrecimento",
    startDate: "20/01/2024",
    frequency: "4x por semana",
    progress: 60,
    status: true,
  },
  {
    id: "3",
    name: "Pedro Costa",
    email: "pedro@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    goal: "Condicionamento",
    startDate: "10/01/2024",
    frequency: "3x por semana",
    progress: 45,
    status: false,
  },
]

const tableColumns = [
  {
    key: "name" as keyof Student,
    label: "Nome",
    render: (value: string, student: Student) => (
      <div className="flex items-center space-x-2">
        <div>
          <p className="font-medium">{value}</p>
          <p className="text-sm text-muted-foreground">{student.email}</p>
        </div>
      </div>
    ),
  },
  {
    key: "goal" as keyof Student,
    label: "Objetivo",
  },
  {
    key: "startDate" as keyof Student,
    label: "Data de Início",
  },
  {
    key: "progress" as keyof Student,
    label: "Progresso",
    render: (value: number) => `${value}%`,
  },
  {
    key: "status" as keyof Student,
    label: "Status",
    render: (value: boolean) => <Badge variant={value ? "default" : "secondary"}>{value ? "Ativo" : "Inativo"}</Badge>,
  },
]

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("cards")

  const filteredStudents = mockStudents.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.goal.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const activeStudents = mockStudents.filter((s) => s.status).length
  const totalStudents = mockStudents.length
  const averageProgress = Math.round(mockStudents.reduce((acc, s) => acc + s.progress, 0) / totalStudents)

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Alunos</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Novo Aluno
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Total de Alunos" value={totalStudents} icon={Users} trend={{ value: 12, isPositive: true }} />
        <StatsCard
          title="Alunos Ativos"
          value={activeStudents}
          icon={UserPlus}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Progresso Médio"
          value={`${averageProgress}%`}
          icon={TrendingUp}
          trend={{ value: 5, isPositive: true }}
        />
        <StatsCard title="Novos este Mês" value={15} icon={Calendar} trend={{ value: 20, isPositive: true }} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Alunos</CardTitle>
          <CardDescription>Visualize e gerencie todos os alunos da academia</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar alunos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="cards">Visualização em Cards</TabsTrigger>
              <TabsTrigger value="table">Visualização em Tabela</TabsTrigger>
            </TabsList>

            <TabsContent value="cards" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredStudents.map((student) => (
                  <StudentCard
                    key={student.id}
                    student={student}
                    onViewProfile={(student) => console.log("Ver perfil:", student)}
                    onViewProgress={(student) => console.log("Ver progresso:", student)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="table">
              <DataTable data={filteredStudents} columns={tableColumns} searchable={false} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
