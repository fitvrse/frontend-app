"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, Search, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ChallengeStepOneProps {
  data: any
  onUpdate: (data: any) => void
  onNext: () => void
  onCancel: () => void
}

const mockGroups = [
  { id: "1", name: "Grupo Iniciantes", students: 15 },
  { id: "2", name: "Grupo Intermediário", students: 12 },
  { id: "3", name: "Grupo Avançado", students: 8 },
  { id: "4", name: "Grupo Feminino", students: 20 },
]

const mockStudents = [
  { id: "1", name: "Ana Silva", group: "Grupo Iniciantes" },
  { id: "2", name: "Carlos Santos", group: "Grupo Iniciantes" },
  { id: "3", name: "Maria Oliveira", group: "Grupo Intermediário" },
  { id: "4", name: "João Costa", group: "Grupo Intermediário" },
  { id: "5", name: "Paula Lima", group: "Grupo Avançado" },
  { id: "6", name: "Pedro Alves", group: "Grupo Avançado" },
  { id: "7", name: "Lucia Ferreira", group: "Grupo Feminino" },
  { id: "8", name: "Carla Mendes", group: "Grupo Feminino" },
]

export function ChallengeStepOne({ data, onUpdate, onNext, onCancel }: ChallengeStepOneProps) {
  const [groupSearch, setGroupSearch] = useState("")
  const [studentSearch, setStudentSearch] = useState("")
  const [selectedGroups, setSelectedGroups] = useState<any[]>(data.selectedGroups || [])
  const [selectedStudents, setSelectedStudents] = useState<any[]>(data.selectedStudents || [])

  const filteredGroups = mockGroups.filter(
    (group) =>
      group.name.toLowerCase().includes(groupSearch.toLowerCase()) && !selectedGroups.some((g) => g.id === group.id),
  )

  const filteredStudents = mockStudents.filter(
    (student) =>
      student.name.toLowerCase().includes(studentSearch.toLowerCase()) &&
      !selectedStudents.some((s) => s.id === student.id),
  )

  const addGroup = (group: any) => {
    const newSelectedGroups = [...selectedGroups, group]
    setSelectedGroups(newSelectedGroups)
    onUpdate({ selectedGroups: newSelectedGroups })
    setGroupSearch("")
  }

  const removeGroup = (groupId: string) => {
    const newSelectedGroups = selectedGroups.filter((g) => g.id !== groupId)
    setSelectedGroups(newSelectedGroups)
    onUpdate({ selectedGroups: newSelectedGroups })
  }

  const addStudent = (student: any) => {
    const newSelectedStudents = [...selectedStudents, student]
    setSelectedStudents(newSelectedStudents)
    onUpdate({ selectedStudents: newSelectedStudents })
    setStudentSearch("")
  }

  const removeStudent = (studentId: string) => {
    const newSelectedStudents = selectedStudents.filter((s) => s.id !== studentId)
    setSelectedStudents(newSelectedStudents)
    onUpdate({ selectedStudents: newSelectedStudents })
  }

  const handleNext = () => {
    if (!data.name || !data.description) {
      alert("Por favor, preencha o nome e a descrição do desafio.")
      return
    }
    onNext()
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nome do Desafio *</Label>
          <Input
            id="name"
            placeholder="Digite o nome do desafio"
            value={data.name || ""}
            onChange={(e) => onUpdate({ name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descrição *</Label>
          <Textarea
            id="description"
            placeholder="Descreva o objetivo e detalhes do desafio"
            value={data.description || ""}
            onChange={(e) => onUpdate({ description: e.target.value })}
            rows={4}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Selecionar Grupos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar grupos..."
                value={groupSearch}
                onChange={(e) => setGroupSearch(e.target.value)}
                className="pl-8"
              />
            </div>

            {groupSearch && filteredGroups.length > 0 && (
              <div className="border rounded-md max-h-40 overflow-y-auto">
                <ul className="py-1">
                  {filteredGroups.map((group) => (
                    <li
                      key={group.id}
                      className="px-3 py-2 hover:bg-muted cursor-pointer flex justify-between items-center"
                      onClick={() => addGroup(group)}
                    >
                      <span>{group.name}</span>
                      <span className="text-xs text-muted-foreground">{group.students} alunos</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedGroups.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedGroups.map((group) => (
                  <Badge key={group.id} variant="secondary" className="flex items-center gap-1">
                    {group.name}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => removeGroup(group.id)} />
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5" />
              Selecionar Alunos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar alunos..."
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                className="pl-8"
              />
            </div>

            {studentSearch && filteredStudents.length > 0 && (
              <div className="border rounded-md max-h-40 overflow-y-auto">
                <ul className="py-1">
                  {filteredStudents.map((student) => (
                    <li
                      key={student.id}
                      className="px-3 py-2 hover:bg-muted cursor-pointer flex justify-between items-center"
                      onClick={() => addStudent(student)}
                    >
                      <span>{student.name}</span>
                      <span className="text-xs text-muted-foreground">{student.group}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedStudents.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedStudents.map((student) => (
                  <Badge key={student.id} variant="secondary" className="flex items-center gap-1">
                    {student.name}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => removeStudent(student.id)} />
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button onClick={handleNext}>Avançar</Button>
      </div>
    </div>
  )
}
