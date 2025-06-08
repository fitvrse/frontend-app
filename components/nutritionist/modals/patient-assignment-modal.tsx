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
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

interface Patient {
  id: string
  name: string
  avatar: string
  goal: string
  status: boolean
}

interface PatientAssignmentModalProps {
  isOpen: boolean
  onClose: () => void
  onAssign: (patientIds: string[], startDate: Date) => void
  mealPlanName: string
  patients: Patient[]
}

export function PatientAssignmentModal({
  isOpen,
  onClose,
  onAssign,
  mealPlanName,
  patients,
}: PatientAssignmentModalProps) {
  const [selectedPatients, setSelectedPatients] = useState<string[]>([])
  const [startDate, setStartDate] = useState<Date>()

  const handlePatientToggle = (patientId: string) => {
    setSelectedPatients((prev) =>
      prev.includes(patientId) ? prev.filter((id) => id !== patientId) : [...prev, patientId],
    )
  }

  const handleAssign = () => {
    if (startDate) {
      onAssign(selectedPatients, startDate)
      setSelectedPatients([])
      setStartDate(undefined)
      onClose()
    }
  }

  const activePatients = patients.filter((patient) => patient.status)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Atribuir Plano Alimentar</DialogTitle>
          <DialogDescription>Selecione os pacientes para receber o plano: {mealPlanName}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Data de Início</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP", { locale: ptBR }) : "Selecione uma data"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex items-center justify-between">
            <Label>Pacientes Ativos ({activePatients.length})</Label>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const allIds = activePatients.map((p) => p.id)
                setSelectedPatients(selectedPatients.length === allIds.length ? [] : allIds)
              }}
            >
              {selectedPatients.length === activePatients.length ? "Desmarcar Todos" : "Selecionar Todos"}
            </Button>
          </div>

          <ScrollArea className="h-[200px] w-full border rounded-md p-4">
            <div className="space-y-3">
              {activePatients.map((patient) => (
                <div key={patient.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={patient.id}
                    checked={selectedPatients.includes(patient.id)}
                    onCheckedChange={() => handlePatientToggle(patient.id)}
                  />
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={patient.avatar || "/placeholder.svg"} alt={patient.name} />
                    <AvatarFallback>{patient.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{patient.name}</p>
                    <Badge variant="outline" className="text-xs">
                      {patient.goal}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {selectedPatients.length > 0 && (
            <div className="text-sm text-muted-foreground">{selectedPatients.length} paciente(s) selecionado(s)</div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleAssign} disabled={selectedPatients.length === 0 || !startDate}>
            Atribuir Plano
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
