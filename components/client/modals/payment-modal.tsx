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
import { Separator } from "@/components/ui/separator"
import { CreditCard } from "lucide-react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  onPayment: (paymentData: PaymentData) => void
  invoice: {
    number: string
    professional: string
    amount: number
  }
}

interface PaymentData {
  cardNumber: string
  expiryDate: string
  cvc: string
  cardName: string
}

export function PaymentModal({ isOpen, onClose, onPayment, invoice }: PaymentModalProps) {
  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardName: "",
  })

  const handleSubmit = () => {
    onPayment(paymentData)
    setPaymentData({
      cardNumber: "",
      expiryDate: "",
      cvc: "",
      cardName: "",
    })
    onClose()
  }

  const formatAmount = (amount: number) => {
    return amount.toFixed(2).replace(".", ",")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Pagar Fatura</DialogTitle>
          <DialogDescription>
            {invoice.number} - {invoice.professional}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex justify-between font-medium">
            <span>Valor total:</span>
            <span>R$ {formatAmount(invoice.amount)}</span>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="card-number">Número do cartão</Label>
              <Input
                id="card-number"
                placeholder="0000 0000 0000 0000"
                value={paymentData.cardNumber}
                onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Validade</Label>
                <Input
                  id="expiry"
                  placeholder="MM/AA"
                  value={paymentData.expiryDate}
                  onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  id="cvc"
                  placeholder="123"
                  value={paymentData.cvc}
                  onChange={(e) => setPaymentData({ ...paymentData, cvc: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Nome no cartão</Label>
              <Input
                id="name"
                placeholder="Nome completo"
                value={paymentData.cardName}
                onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })}
              />
            </div>
          </div>
        </div>
        <DialogFooter className="flex justify-between sm:justify-between">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit}>
            <CreditCard className="h-4 w-4 mr-2" />
            Pagar R$ {formatAmount(invoice.amount)}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
