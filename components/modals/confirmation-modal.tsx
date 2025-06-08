"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Trash2, CheckCircle, Info } from "lucide-react"

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description: string
  confirmText?: string
  cancelText?: string
  variant?: "default" | "destructive" | "success" | "warning"
}

export function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  variant = "default",
}: ConfirmationModalProps) {
  const getIcon = () => {
    switch (variant) {
      case "destructive":
        return <Trash2 className="h-6 w-6 text-red-500" />
      case "warning":
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />
      case "success":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      default:
        return <Info className="h-6 w-6 text-blue-500" />
    }
  }

  const getButtonVariant = () => {
    switch (variant) {
      case "destructive":
        return "destructive"
      default:
        return "default"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            {getIcon()}
            <DialogTitle>{title}</DialogTitle>
          </div>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            {cancelText}
          </Button>
          <Button variant={getButtonVariant()} onClick={onConfirm}>
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
