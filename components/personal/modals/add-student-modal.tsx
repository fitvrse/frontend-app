"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Plus, Mail } from "lucide-react"

interface AddStudentModalProps {
  isOpen: boolean
  onClose: () => void
  onRegister: () => void
  onInvite: () => void
}

export function AddStudentModal({ isOpen, onClose, onRegister, onInvite }: AddStudentModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Aluno</DialogTitle>
          <DialogDescription>Escolha como deseja adicionar um novo aluno ao seu sistema.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4 py-4">
          <Button onClick={onRegister} className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            Cadastrar Aluno
          </Button>
          <Button variant="outline" onClick={onInvite} className="w-full">
            <Mail className="mr-2 h-4 w-4" />
            Convidar Aluno
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
