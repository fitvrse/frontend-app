"use client"

import type React from "react"

import { useState, useRef } from "react"
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
import { Upload, X, ImageIcon } from "lucide-react"

interface ImageUploadModalProps {
  isOpen: boolean
  onClose: () => void
  onUpload: (file: File, description?: string) => void
  title?: string
  description?: string
  acceptedTypes?: string
  maxSize?: number // in MB
}

export function ImageUploadModal({
  isOpen,
  onClose,
  onUpload,
  title = "Upload de Imagem",
  description = "Selecione uma imagem para fazer upload",
  acceptedTypes = "image/*",
  maxSize = 5,
}: ImageUploadModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [fileDescription, setFileDescription] = useState("")
  const [error, setError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`Arquivo muito grande. Tamanho máximo: ${maxSize}MB`)
      return
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Apenas arquivos de imagem são permitidos")
      return
    }

    setError("")
    setSelectedFile(file)

    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile, fileDescription)
      handleClose()
    }
  }

  const handleClose = () => {
    setSelectedFile(null)
    setPreview(null)
    setFileDescription("")
    setError("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    onClose()
  }

  const removeFile = () => {
    setSelectedFile(null)
    setPreview(null)
    setError("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="file-upload">Arquivo</Label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/50"
              >
                {preview ? (
                  <div className="relative w-full h-full">
                    <img
                      src={preview || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        removeFile()
                      }}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Clique para fazer upload</span> ou arraste e solte
                    </p>
                    <p className="text-xs text-muted-foreground">PNG, JPG ou GIF (MAX. {maxSize}MB)</p>
                  </div>
                )}
                <Input
                  ref={fileInputRef}
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept={acceptedTypes}
                  onChange={handleFileSelect}
                />
              </label>
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>

          {selectedFile && (
            <div className="space-y-2">
              <Label htmlFor="description">Descrição (opcional)</Label>
              <Input
                id="description"
                placeholder="Adicione uma descrição para a imagem..."
                value={fileDescription}
                onChange={(e) => setFileDescription(e.target.value)}
              />
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={handleUpload} disabled={!selectedFile}>
            <ImageIcon className="mr-2 h-4 w-4" />
            Fazer Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
