"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface Student {
  id: string
  name: string
  avatar: string
  goal: string
  status: boolean
}

interface WorkoutAssignmentModalProps {
  isOpen: boolean
  onClose: () => void
  onAssign: (studentIds: string[]) => void
  workoutName: string
  students: Student[]
}

export function WorkoutAssignmentModal({
  isOpen,
  onClose,
  onAssign,
  workoutName,
  students,
}: WorkoutAssignmentModalProps) {
  const [selectedStudents, setSelectedStudents] = useState<string[]>([])

  const handleStudentToggle = (studentId: string) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId) ? prev.filter((id) => id !== studentId) : [...prev, studentId],
    )
  }

  const handleAssign = () => {
    onAssign(selectedStudents)
    setSelectedStudents([])
    onClose()
  }

  const activeStudents = students.filter((student) => student.status)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Atribuir Treino</DialogTitle>
          <DialogDescription>Selecione os alunos para receber o treino: {workoutName}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Alunos Ativos ({activeStudents.length})</Label>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const allIds = activeStudents.map((s) => s.id)
                setSelectedStudents(selectedStudents.length === allIds.length ? [] : allIds)
              }}
            >
              {selectedStudents.length === activeStudents.length ? "Desmarcar Todos" : "Selecionar Todos"}
            </Button>
          </div>

          <ScrollArea className="h-[300px] w-full border rounded-md p-4">
            <div className="space-y-3">
              {activeStudents.map((student) => (
                <div key={student.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={student.id}
                    checked={selectedStudents.includes(student.id)}
                    onCheckedChange={() => handleStudentToggle(student.id)}
                  />
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                    <AvatarFallback>{student.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{student.name}</p>
                    <Badge variant="outline" className="text-xs">
                      {student.goal}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {selectedStudents.length > 0 && (
            <div className="text-sm text-muted-foreground">{selectedStudents.length} aluno(s) selecionado(s)</div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleAssign} disabled={selectedStudents.length === 0}>
            Atribuir Treino
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
