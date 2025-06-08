"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Calendar, Target, TrendingUp } from "lucide-react"
import type { Student } from "@/lib/types"

interface StudentCardProps {
  student: Student
  onViewProfile?: (student: Student) => void
  onViewProgress?: (student: Student) => void
}

export function StudentCard({ student, onViewProfile, onViewProgress }: StudentCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <Avatar className="h-10 w-10">
          <AvatarImage src={student.avatar || "/placeholder.svg"} />
          <AvatarFallback>
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <CardTitle className="text-sm font-medium">{student.name}</CardTitle>
          <p className="text-xs text-muted-foreground">{student.email}</p>
        </div>
        <Badge variant={student.status ? "default" : "secondary"} className="ml-auto">
          {student.status ? "Ativo" : "Inativo"}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Target className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Objetivo:</span>
            <span className="ml-1">{student.goal}</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Início:</span>
            <span className="ml-1">{student.startDate}</span>
          </div>
          <div className="flex items-center text-sm">
            <TrendingUp className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Progresso:</span>
            <span className="ml-1">{student.progress}%</span>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button variant="outline" size="sm" onClick={() => onViewProfile?.(student)}>
            Ver Perfil
          </Button>
          <Button variant="outline" size="sm" onClick={() => onViewProgress?.(student)}>
            Progresso
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
