"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Calendar, Mail, Phone, Target, TrendingUp } from "lucide-react"

interface StudentDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  student: {
    id: string
    name: string
    email: string
    phone?: string
    avatar: string
    goal: string
    startDate: string
    plan: string
    status: string
    frequency: string
    progress: number
    dueDate: string
  }
}

export function StudentDetailsModal({ isOpen, onClose, student }: StudentDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Detalhes do Aluno</DialogTitle>
          <DialogDescription>Informações completas do aluno</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
              <AvatarFallback>{student.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{student.name}</h3>
              <Badge variant={student.status === "Ativo" ? "default" : "secondary"}>{student.status}</Badge>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{student.email}</span>
            </div>

            {student.phone && (
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{student.phone}</span>
              </div>
            )}

            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Objetivo: {student.goal}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Início: {student.startDate}</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Progresso</span>
                <span className="text-sm text-muted-foreground">{student.progress}%</span>
              </div>
              <Progress value={student.progress} className="h-2" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Plano:</span>
                <p className="text-muted-foreground">{student.plan}</p>
              </div>
              <div>
                <span className="font-medium">Frequência:</span>
                <p className="text-muted-foreground">{student.frequency}</p>
              </div>
            </div>

            <div className="p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Próximo Vencimento</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{student.dueDate}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
