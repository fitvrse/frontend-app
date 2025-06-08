"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Info, HelpCircle, FileText, Copy, Trash2, Edit, GripVertical } from "lucide-react"
import { cn } from "@/lib/utils"

type AssessmentStep = "info" | "questions" | "files"
type QuestionType = "text" | "conditional" | "boolean" | "number" | "date" | "select"
type MediaType = "image" | "video" | "document" | "image_video" | "all"

interface Question {
  id: string
  text: string
  type: QuestionType
  required: boolean
}

interface MediaQuestion {
  id: string
  text: string
  type: MediaType
  required: boolean
}

interface CreateAssessmentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateAssessmentModal({ open, onOpenChange }: CreateAssessmentModalProps) {
  const [currentStep, setCurrentStep] = useState<AssessmentStep>("info")
  const [assessmentName, setAssessmentName] = useState("")
  const [nameError, setNameError] = useState("")
  const [questions, setQuestions] = useState<Question[]>([])
  const [mediaQuestions, setMediaQuestions] = useState<MediaQuestion[]>([])
  const [newQuestion, setNewQuestion] = useState("")
  const [newQuestionType, setNewQuestionType] = useState<QuestionType>("text")
  const [newQuestionRequired, setNewQuestionRequired] = useState(false)
  const [newMediaQuestion, setNewMediaQuestion] = useState("")
  const [newMediaType, setNewMediaType] = useState<MediaType>("image")
  const [newMediaRequired, setNewMediaRequired] = useState(false)
  const [draggedQuestionIndex, setDraggedQuestionIndex] = useState<number | null>(null)
  const [draggedMediaIndex, setDraggedMediaIndex] = useState<number | null>(null)

  const handleNextStep = () => {
    if (currentStep === "info") {
      if (!assessmentName.trim()) {
        setNameError("Informe um nome para a avaliação")
        return
      }
      setNameError("")
      setCurrentStep("questions")
    } else if (currentStep === "questions") {
      setCurrentStep("files")
    }
  }

  const handlePreviousStep = () => {
    if (currentStep === "questions") {
      setCurrentStep("info")
    } else if (currentStep === "files") {
      setCurrentStep("questions")
    }
  }

  const addQuestion = () => {
    if (!newQuestion.trim()) return

    const question: Question = {
      id: Date.now().toString(),
      text: newQuestion,
      type: newQuestionType,
      required: newQuestionRequired,
    }

    setQuestions([...questions, question])
    setNewQuestion("")
    setNewQuestionType("text")
    setNewQuestionRequired(false)
  }

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id))
  }

  const editQuestion = (id: string) => {
    const question = questions.find((q) => q.id === id)
    if (!question) return

    setNewQuestion(question.text)
    setNewQuestionType(question.type)
    setNewQuestionRequired(question.required)
    removeQuestion(id)
  }

  const duplicateQuestion = (id: string) => {
    const question = questions.find((q) => q.id === id)
    if (!question) return

    const newQuestion: Question = {
      ...question,
      id: Date.now().toString(),
    }

    setQuestions([...questions, newQuestion])
  }

  const handleQuestionDragStart = (e: React.DragEvent, index: number) => {
    setDraggedQuestionIndex(index)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleQuestionDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }

  const handleQuestionDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault()
    if (draggedQuestionIndex === null) return

    const newQuestions = [...questions]
    const draggedQuestion = newQuestions[draggedQuestionIndex]
    newQuestions.splice(draggedQuestionIndex, 1)
    newQuestions.splice(dropIndex, 0, draggedQuestion)

    setQuestions(newQuestions)
    setDraggedQuestionIndex(null)
  }

  // Media Questions Functions
  const addMediaQuestion = () => {
    if (!newMediaQuestion.trim()) return

    const mediaQuestion: MediaQuestion = {
      id: Date.now().toString(),
      text: newMediaQuestion,
      type: newMediaType,
      required: newMediaRequired,
    }

    setMediaQuestions([...mediaQuestions, mediaQuestion])
    setNewMediaQuestion("")
    setNewMediaType("image")
    setNewMediaRequired(false)
  }

  const removeMediaQuestion = (id: string) => {
    setMediaQuestions(mediaQuestions.filter((q) => q.id !== id))
  }

  const editMediaQuestion = (id: string) => {
    const question = mediaQuestions.find((q) => q.id === id)
    if (!question) return

    setNewMediaQuestion(question.text)
    setNewMediaType(question.type)
    setNewMediaRequired(question.required)
    removeMediaQuestion(id)
  }

  const duplicateMediaQuestion = (id: string) => {
    const question = mediaQuestions.find((q) => q.id === id)
    if (!question) return

    const newQuestion: MediaQuestion = {
      ...question,
      id: Date.now().toString(),
    }

    setMediaQuestions([...mediaQuestions, newQuestion])
  }

  const handleMediaDragStart = (e: React.DragEvent, index: number) => {
    setDraggedMediaIndex(index)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleMediaDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }

  const handleMediaDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault()
    if (draggedMediaIndex === null) return

    const newMediaQuestions = [...mediaQuestions]
    const draggedQuestion = newMediaQuestions[draggedMediaIndex]
    newMediaQuestions.splice(draggedMediaIndex, 1)
    newMediaQuestions.splice(dropIndex, 0, draggedQuestion)

    setMediaQuestions(newMediaQuestions)
    setDraggedMediaIndex(null)
  }

  const getQuestionTypeLabel = (type: QuestionType) => {
    switch (type) {
      case "text":
        return "Digite a resposta"
      case "conditional":
        return "Se sim digite a resposta / Não"
      case "boolean":
        return "Sim/Não"
      case "number":
        return "Número"
      case "date":
        return "Data"
      case "select":
        return "Seleção"
      default:
        return "Digite a resposta"
    }
  }

  const getMediaTypeLabel = (type: MediaType) => {
    switch (type) {
      case "image":
        return "Anexar Imagens ou Fotos"
      case "video":
        return "Anexar Vídeos"
      case "document":
        return "Anexar Documentos"
      case "image_video":
        return "Anexar Imagens ou Vídeos"
      case "all":
        return "Anexar Qualquer Arquivo"
      default:
        return "Anexar Imagens ou Fotos"
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[850px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Nova Avaliação Modelo</DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mt-4 mb-8">
          <div className="flex items-center flex-col">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border-2",
                currentStep === "info" || currentStep === "questions" || currentStep === "files"
                  ? "border-green-500 bg-green-50 text-green-500"
                  : "border-gray-300 text-gray-500",
              )}
            >
              <Info className="h-5 w-5" />
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">AVALIAÇÃO</div>
          </div>
          <div className="w-16 h-[2px] bg-gray-200 mt-[-20px]"></div>
          <div className="flex items-center flex-col">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border-2",
                currentStep === "questions" || currentStep === "files"
                  ? "border-green-500 bg-green-50 text-green-500"
                  : "border-gray-300 text-gray-500",
              )}
            >
              <HelpCircle className="h-5 w-5" />
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">PERGUNTAS</div>
          </div>
          <div className="w-16 h-[2px] bg-gray-200 mt-[-20px]"></div>
          <div className="flex items-center flex-col">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border-2",
                currentStep === "files"
                  ? "border-green-500 bg-green-50 text-green-500"
                  : "border-gray-300 text-gray-500",
              )}
            >
              <FileText className="h-5 w-5" />
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">FOTOS/ARQUIVOS</div>
          </div>
        </div>

        {/* Step 1: Assessment Info */}
        {currentStep === "info" && (
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                NOME
              </label>
              <Input
                id="name"
                value={assessmentName}
                onChange={(e) => setAssessmentName(e.target.value)}
                placeholder="Nome da avaliação"
                className="w-full"
              />
              {nameError && <p className="text-sm text-red-500 mt-1">{nameError}</p>}
            </div>
            <div className="flex justify-between mt-8">
              <Button variant="destructive" onClick={() => onOpenChange(false)}>
                Cancelar
              </Button>
              <Button onClick={handleNextStep} className="bg-blue-400 hover:bg-blue-500">
                Próximo Passo
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Questions */}
        {currentStep === "questions" && (
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-center">Informe as perguntas para o aluno</h2>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-5">
                <label className="block text-sm font-medium mb-1">PERGUNTA</label>
                <Input
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="Digite a pergunta"
                />
              </div>

              <div className="col-span-5">
                <label className="block text-sm font-medium mb-1">TIPO DE RESPOSTA</label>
                <Select value={newQuestionType} onValueChange={(value) => setNewQuestionType(value as QuestionType)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text">Digite a resposta</SelectItem>
                    <SelectItem value="conditional">Se sim digite a resposta / Não</SelectItem>
                    <SelectItem value="boolean">Sim/Não</SelectItem>
                    <SelectItem value="number">Número</SelectItem>
                    <SelectItem value="date">Data</SelectItem>
                    <SelectItem value="select">Seleção</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">OBRIGATORIEDADE</label>
                <div className="flex items-center justify-center h-10">
                  <Switch
                    checked={newQuestionRequired}
                    onCheckedChange={setNewQuestionRequired}
                    className="data-[state=checked]:bg-green-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button onClick={addQuestion} className="bg-blue-400 hover:bg-blue-500">
                Adicionar
              </Button>
            </div>

            {questions.length > 0 && (
              <div className="border rounded-md">
                {questions.map((question, index) => (
                  <div
                    key={question.id}
                    draggable
                    onDragStart={(e) => handleQuestionDragStart(e, index)}
                    onDragOver={handleQuestionDragOver}
                    onDrop={(e) => handleQuestionDrop(e, index)}
                    className="p-4 border-b last:border-b-0 cursor-move hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <GripVertical className="h-4 w-4 text-gray-400" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{index + 1}</span>
                            <span className="font-medium">{question.text}</span>
                          </div>
                          <div className="text-sm text-gray-500 mt-1">{getQuestionTypeLabel(question.type)}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => editQuestion(question.id)}
                          className="h-8 w-8 rounded-full"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => duplicateQuestion(question.id)}
                          className="h-8 w-8 rounded-full"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeQuestion(question.id)}
                          className="h-8 w-8 rounded-full text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Button variant="secondary" onClick={handlePreviousStep}>
                Voltar
              </Button>
              <Button onClick={handleNextStep} className="bg-blue-400 hover:bg-blue-500">
                Próximo Passo
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Media Questions */}
        {currentStep === "files" && (
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-center">Requisite fotos ou arquivos para o aluno (opcional)</h2>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-5">
                <label className="block text-sm font-medium mb-1">REQUISIÇÃO</label>
                <Input
                  value={newMediaQuestion}
                  onChange={(e) => setNewMediaQuestion(e.target.value)}
                  placeholder="Ex.: Por favor tire uma foto de..."
                />
              </div>

              <div className="col-span-5">
                <label className="block text-sm font-medium mb-1">TIPO DE RESPOSTA</label>
                <Select value={newMediaType} onValueChange={(value) => setNewMediaType(value as MediaType)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecionar tipo de resposta" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="image">Anexar Imagens ou Fotos</SelectItem>
                    <SelectItem value="video">Anexar Vídeos</SelectItem>
                    <SelectItem value="document">Anexar Documentos</SelectItem>
                    <SelectItem value="image_video">Anexar Imagens ou Vídeos</SelectItem>
                    <SelectItem value="all">Anexar Qualquer Arquivo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">OBRIGATORIEDADE</label>
                <div className="flex items-center justify-center h-10">
                  <Switch
                    checked={newMediaRequired}
                    onCheckedChange={setNewMediaRequired}
                    className="data-[state=checked]:bg-green-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button onClick={addMediaQuestion} className="bg-blue-400 hover:bg-blue-500">
                Adicionar
              </Button>
            </div>

            {mediaQuestions.length > 0 && (
              <div className="border rounded-md">
                {mediaQuestions.map((question, index) => (
                  <div
                    key={question.id}
                    draggable
                    onDragStart={(e) => handleMediaDragStart(e, index)}
                    onDragOver={handleMediaDragOver}
                    onDrop={(e) => handleMediaDrop(e, index)}
                    className="p-4 border-b last:border-b-0 cursor-move hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <GripVertical className="h-4 w-4 text-gray-400" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{index + 1}</span>
                            <span className="font-medium">{question.text}</span>
                          </div>
                          <div className="text-sm text-gray-500 mt-1">{getMediaTypeLabel(question.type)}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => editMediaQuestion(question.id)}
                          className="h-8 w-8 rounded-full"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => duplicateMediaQuestion(question.id)}
                          className="h-8 w-8 rounded-full"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeMediaQuestion(question.id)}
                          className="h-8 w-8 rounded-full text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Button variant="secondary" onClick={handlePreviousStep}>
                Voltar
              </Button>
              <Button className="bg-green-500 hover:bg-green-600">Finalizar</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
