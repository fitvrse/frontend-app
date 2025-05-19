"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  ImageIcon,
  FileSpreadsheet,
  FileIcon as FilePdf,
  Calendar,
  Download,
  Share2,
  Plus,
  Building,
  User,
  Apple,
  MoreVertical,
  Trash,
  Eye,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface File {
  id: string
  name: string
  type: "pdf" | "image" | "spreadsheet" | "document"
  size: string
  date: string
  sharedBy?: string
  sharedWith?: string[]
  category?: string
}

export default function MyFilesPage() {
  const [activeTab, setActiveTab] = useState("my")

  const myFiles: File[] = [
    {
      id: "1",
      name: "Meu Plano de Treino.pdf",
      type: "pdf",
      size: "2.4 MB",
      date: "15/05/2025",
      sharedWith: ["Carlos Silva"],
      category: "Treino",
    },
    {
      id: "2",
      name: "Progresso Físico.jpg",
      type: "image",
      size: "1.8 MB",
      date: "10/05/2025",
      category: "Progresso",
    },
    {
      id: "3",
      name: "Diário Alimentar.xlsx",
      type: "spreadsheet",
      size: "1.2 MB",
      date: "12/05/2025",
      sharedWith: ["Ana Nutricionista"],
      category: "Nutrição",
    },
  ]

  const gymFiles: File[] = [
    {
      id: "4",
      name: "Contrato de Matrícula.pdf",
      type: "pdf",
      size: "1.5 MB",
      date: "01/05/2025",
      sharedBy: "Academia Fitness",
    },
    {
      id: "5",
      name: "Regulamento Interno.pdf",
      type: "pdf",
      size: "0.8 MB",
      date: "01/05/2025",
      sharedBy: "Academia Fitness",
    },
  ]

  const personalFiles: File[] = [
    {
      id: "6",
      name: "Plano de Treino - Hipertrofia.pdf",
      type: "pdf",
      size: "3.2 MB",
      date: "08/05/2025",
      sharedBy: "Carlos Silva",
    },
    {
      id: "7",
      name: "Guia de Exercícios.pdf",
      type: "pdf",
      size: "5.6 MB",
      date: "08/05/2025",
      sharedBy: "Carlos Silva",
    },
    {
      id: "8",
      name: "Análise Postural.jpg",
      type: "image",
      size: "2.1 MB",
      date: "10/05/2025",
      sharedBy: "Carlos Silva",
    },
  ]

  const nutritionistFiles: File[] = [
    {
      id: "9",
      name: "Plano Alimentar.pdf",
      type: "pdf",
      size: "1.8 MB",
      date: "05/05/2025",
      sharedBy: "Ana Nutricionista",
    },
    {
      id: "10",
      name: "Lista de Compras.pdf",
      type: "pdf",
      size: "0.5 MB",
      date: "05/05/2025",
      sharedBy: "Ana Nutricionista",
    },
    {
      id: "11",
      name: "Receitas Saudáveis.pdf",
      type: "pdf",
      size: "4.2 MB",
      date: "07/05/2025",
      sharedBy: "Ana Nutricionista",
    },
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FilePdf className="h-10 w-10 text-red-500" />
      case "image":
        return <ImageIcon className="h-10 w-10 text-blue-500" />
      case "spreadsheet":
        return <FileSpreadsheet className="h-10 w-10 text-green-500" />
      case "document":
        return <FileText className="h-10 w-10 text-yellow-500" />
      default:
        return <FileText className="h-10 w-10" />
    }
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Meus Arquivos</h1>
      </div>

      <Tabs defaultValue="my" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="my" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Meus Arquivos
          </TabsTrigger>
          <TabsTrigger value="gym" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            Academia
          </TabsTrigger>
          <TabsTrigger value="personal" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Personal Trainer
          </TabsTrigger>
          <TabsTrigger value="nutritionist" className="flex items-center gap-2">
            <Apple className="h-4 w-4" />
            Nutricionista
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my" className="space-y-4">
          <div className="flex justify-end mb-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Adicionar Arquivo
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Adicionar Novo Arquivo</DialogTitle>
                  <DialogDescription>Faça upload de um arquivo para sua biblioteca pessoal.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="file">Arquivo</Label>
                    <Input id="file" type="file" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nome do Arquivo (opcional)</Label>
                    <Input id="name" placeholder="Ex: Meu Plano de Treino" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="category">Categoria</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="treino">Treino</SelectItem>
                        <SelectItem value="nutricao">Nutrição</SelectItem>
                        <SelectItem value="progresso">Progresso</SelectItem>
                        <SelectItem value="avaliacao">Avaliação</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Descrição (opcional)</Label>
                    <Input id="description" placeholder="Breve descrição do arquivo" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Fazer Upload</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="bg-white rounded-lg border">
            <div className="grid grid-cols-12 p-4 border-b font-medium text-sm">
              <div className="col-span-6">Nome</div>
              <div className="col-span-2">Tamanho</div>
              <div className="col-span-3">Data</div>
              <div className="col-span-1"></div>
            </div>

            {myFiles.map((file) => (
              <div key={file.id} className="grid grid-cols-12 p-4 border-b items-center hover:bg-muted/50">
                <div className="col-span-6 flex items-center gap-3">
                  {getFileIcon(file.type)}
                  <div>
                    <p className="font-medium">{file.name}</p>
                    {file.category && (
                      <Badge variant="outline" className="mt-1">
                        {file.category}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="col-span-2 text-sm text-muted-foreground">{file.size}</div>
                <div className="col-span-3 text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {file.date}
                </div>
                <div className="col-span-1 flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>Visualizar</span>
                      </DropdownMenuItem>
                      <Dialog>
                        <DialogTrigger asChild>
                          <DropdownMenuItem className="flex items-center gap-2" onSelect={(e) => e.preventDefault()}>
                            <Share2 className="h-4 w-4" />
                            <span>Compartilhar</span>
                          </DropdownMenuItem>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Compartilhar Arquivo</DialogTitle>
                            <DialogDescription>Selecione com quem deseja compartilhar este arquivo.</DialogDescription>
                          </DialogHeader>
                          <div className="py-4">
                            <Label htmlFor="share-with">Compartilhar com</Label>
                            <Select>
                              <SelectTrigger id="share-with" className="mt-2">
                                <SelectValue placeholder="Selecione um profissional" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="carlos">Carlos Silva (Personal)</SelectItem>
                                <SelectItem value="ana">Ana Nutricionista</SelectItem>
                                <SelectItem value="academia">Academia Fitness</SelectItem>
                              </SelectContent>
                            </Select>

                            {file.sharedWith && file.sharedWith.length > 0 && (
                              <div className="mt-4">
                                <Label>Já compartilhado com</Label>
                                <div className="mt-2 space-y-2">
                                  {file.sharedWith.map((person, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center justify-between p-2 bg-muted rounded-md"
                                    >
                                      <span>{person}</span>
                                      <Button variant="ghost" size="icon">
                                        <Trash className="h-4 w-4 text-red-500" />
                                      </Button>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                          <DialogFooter>
                            <Button type="submit">Compartilhar</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="flex items-center gap-2 text-red-500">
                        <Trash className="h-4 w-4" />
                        <span>Excluir</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="gym" className="space-y-4">
          <div className="bg-white rounded-lg border">
            <div className="grid grid-cols-12 p-4 border-b font-medium text-sm">
              <div className="col-span-6">Nome</div>
              <div className="col-span-2">Tamanho</div>
              <div className="col-span-3">Data</div>
              <div className="col-span-1"></div>
            </div>

            {gymFiles.map((file) => (
              <div key={file.id} className="grid grid-cols-12 p-4 border-b items-center hover:bg-muted/50">
                <div className="col-span-6 flex items-center gap-3">
                  {getFileIcon(file.type)}
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">Compartilhado por: {file.sharedBy}</p>
                  </div>
                </div>
                <div className="col-span-2 text-sm text-muted-foreground">{file.size}</div>
                <div className="col-span-3 text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {file.date}
                </div>
                <div className="col-span-1 flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>Visualizar</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="personal" className="space-y-4">
          <div className="bg-white rounded-lg border">
            <div className="grid grid-cols-12 p-4 border-b font-medium text-sm">
              <div className="col-span-6">Nome</div>
              <div className="col-span-2">Tamanho</div>
              <div className="col-span-3">Data</div>
              <div className="col-span-1"></div>
            </div>

            {personalFiles.map((file) => (
              <div key={file.id} className="grid grid-cols-12 p-4 border-b items-center hover:bg-muted/50">
                <div className="col-span-6 flex items-center gap-3">
                  {getFileIcon(file.type)}
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">Compartilhado por: {file.sharedBy}</p>
                  </div>
                </div>
                <div className="col-span-2 text-sm text-muted-foreground">{file.size}</div>
                <div className="col-span-3 text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {file.date}
                </div>
                <div className="col-span-1 flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>Visualizar</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="nutritionist" className="space-y-4">
          <div className="bg-white rounded-lg border">
            <div className="grid grid-cols-12 p-4 border-b font-medium text-sm">
              <div className="col-span-6">Nome</div>
              <div className="col-span-2">Tamanho</div>
              <div className="col-span-3">Data</div>
              <div className="col-span-1"></div>
            </div>

            {nutritionistFiles.map((file) => (
              <div key={file.id} className="grid grid-cols-12 p-4 border-b items-center hover:bg-muted/50">
                <div className="col-span-6 flex items-center gap-3">
                  {getFileIcon(file.type)}
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">Compartilhado por: {file.sharedBy}</p>
                  </div>
                </div>
                <div className="col-span-2 text-sm text-muted-foreground">{file.size}</div>
                <div className="col-span-3 text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {file.date}
                </div>
                <div className="col-span-1 flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>Visualizar</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
