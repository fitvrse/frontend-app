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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Plus } from "lucide-react"

interface AddFundsModalProps {
  isOpen: boolean
  onClose: () => void
  onAddFunds: (amount: number, method: string) => void
}

export function AddFundsModal({ isOpen, onClose, onAddFunds }: AddFundsModalProps) {
  const [amount, setAmount] = useState("")
  const [method, setMethod] = useState("pix")

  const predefinedAmounts = [50, 100, 200, 500]

  const handleSubmit = () => {
    const numericAmount = Number.parseFloat(amount)
    if (numericAmount > 0) {
      onAddFunds(numericAmount, method)
      setAmount("")
      setMethod("pix")
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Adicionar Fundos</DialogTitle>
          <DialogDescription>Escolha o valor e método de pagamento</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Valores Rápidos</Label>
            <div className="grid grid-cols-2 gap-2">
              {predefinedAmounts.map((value) => (
                <Button key={value} variant="outline" onClick={() => setAmount(value.toString())} className="h-12">
                  R$ {value}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-amount">Valor Personalizado</Label>
            <Input
              id="custom-amount"
              type="number"
              placeholder="0,00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Método de Pagamento</Label>
            <RadioGroup value={method} onValueChange={setMethod}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pix" id="pix" />
                <Label htmlFor="pix">PIX (Instantâneo)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Cartão de Crédito</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="boleto" id="boleto" />
                <Label htmlFor="boleto">Boleto Bancário</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} disabled={!amount || Number.parseFloat(amount) <= 0}>
            <Plus className="h-4 w-4 mr-2" />
            Adicionar R$ {amount || "0,00"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
