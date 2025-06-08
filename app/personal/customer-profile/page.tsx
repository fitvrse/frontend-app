"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Activity,
  Calendar,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  Copy,
  Dumbbell,
  Edit,
  FileText,
  GripVertical,
  Info,
  MessageSquare,
  Plus,
  Trash2,
  Trophy,
  Users,
  FileDown,
  Save,
  Archive,
  BarChart2,
  Eye,
} from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function CustomerProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Cover and Profile */}
      <div className="relative">
        <div className="h-48 w-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg" />
        <div className="absolute -bottom-16 left-8 flex items-end">
          <Avatar className="h-32 w-32 border-4 border-background">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Carlos Silva" />
            <AvatarFallback className="text-4xl">CS</AvatarFallback>
          </Avatar>
        </div>
        <div className="absolute bottom-4 right-4">
          <Button variant="outline" className="bg-background">
            <Edit className="mr-2 h-4 w-4" />
            Editar Perfil
          </Button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Carlos Silva</h1>
          <p className="text-muted-foreground">Aluno desde Janeiro 2023</p>
        </div>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <Button variant="outline" size="sm">
            <MessageSquare className="mr-2 h-4 w-4" />
            Mensagem
          </Button>
          <Button size="sm">
            <Dumbbell className="mr-2 h-4 w-4" />
            Novo Treino
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="info" className="space-y-4">
        <TabsList className="grid grid-cols-3 md:grid-cols-7 lg:flex">
          <TabsTrigger value="info" className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            <span className="hidden md:inline">Informações</span>
          </TabsTrigger>
          <TabsTrigger value="workouts" className="flex items-center gap-2">
            <Dumbbell className="h-4 w-4" />
            <span className="hidden md:inline">Treinos</span>
          </TabsTrigger>
          <TabsTrigger value="assessments" className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4" />
            <span className="hidden md:inline">Avaliações</span>
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden md:inline">Documentos</span>
          </TabsTrigger>
          <TabsTrigger value="challenges" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            <span className="hidden md:inline">Desafios</span>
          </TabsTrigger>
          <TabsTrigger value="notes" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden md:inline">Anotações</span>
          </TabsTrigger>
          <TabsTrigger value="plan" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            <span className="hidden md:inline">Plano</span>
          </TabsTrigger>
        </TabsList>

        {/* Informações Tab */}
        <TabsContent value="info">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Informações Pessoais</h3>
                    <div className="mt-2 space-y-2">
                      <div className="grid grid-cols-3">
                        <span className="text-muted-foreground">Nome:</span>
                        <span className="col-span-2">Carlos Silva</span>
                      </div>
                      <div className="grid grid-cols-3">
                        <span className="text-muted-foreground">Email:</span>
                        <span className="col-span-2">carlos.silva@email.com</span>
                      </div>
                      <div className="grid grid-cols-3">
                        <span className="text-muted-foreground">Telefone:</span>
                        <span className="col-span-2">(11) 98765-4321</span>
                      </div>
                      <div className="grid grid-cols-3">
                        <span className="text-muted-foreground">Data de Nascimento:</span>
                        <span className="col-span-2">15/05/1990</span>
                      </div>
                      <div className="grid grid-cols-3">
                        <span className="text-muted-foreground">Idade:</span>
                        <span className="col-span-2">33 anos</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Dados de Contato</h3>
                    <div className="mt-2 space-y-2">
                      <div className="grid grid-cols-3">
                        <span className="text-muted-foreground">Endereço:</span>
                        <span className="col-span-2">Rua das Flores, 123</span>
                      </div>
                      <div className="grid grid-cols-3">
                        <span className="text-muted-foreground">Cidade:</span>
                        <span className="col-span-2">São Paulo</span>
                      </div>
                      <div className="grid grid-cols-3">
                        <span className="text-muted-foreground">CEP:</span>
                        <span className="col-span-2">01234-567</span>
                      </div>
                      <div className="grid grid-cols-3">
                        <span className="text-muted-foreground">Contato de Emergência:</span>
                        <span className="col-span-2">Maria Silva - (11) 98765-1234</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Objetivo e Progresso</h3>
                    <div className="mt-2 space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Objetivo Principal: Hipertrofia</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-muted-foreground">Frequência:</span>
                          <Badge className="ml-2">Alta</Badge>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Assiduidade:</span>
                          <Badge className="ml-2" variant="outline">
                            90%
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Metas:</span>
                        <ul className="mt-1 ml-5 list-disc text-sm">
                          <li>Ganhar 5kg de massa muscular</li>
                          <li>Reduzir percentual de gordura para 12%</li>
                          <li>Aumentar carga no supino para 100kg</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Dados Físicos</h3>
                    <div className="mt-2 space-y-2">
                      <div className="grid grid-cols-3">
                        <span className="text-muted-foreground">Altura:</span>
                        <span className="col-span-2">1,78 m</span>
                      </div>
                      <div className="grid grid-cols-3">
                        <span className="text-muted-foreground">Peso Atual:</span>
                        <span className="col-span-2">80 kg</span>
                      </div>
                      <div className="grid grid-cols-3">
                        <span className="text-muted-foreground">IMC:</span>
                        <span className="col-span-2">25.2 (Sobrepeso leve)</span>
                      </div>
                      <div className="grid grid-cols-3">
                        <span className="text-muted-foreground">% de Gordura:</span>
                        <span className="col-span-2">15%</span>
                      </div>
                      <div className="grid grid-cols-3">
                        <span className="text-muted-foreground">Restrições:</span>
                        <span className="col-span-2">Lesão antiga no joelho direito</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Treinos Tab */}
        <TabsContent value="workouts">
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="active" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="active" className="flex items-center gap-2">
                    <Dumbbell className="h-4 w-4" />
                    Treinos Ativos
                  </TabsTrigger>
                  <TabsTrigger value="archived" className="flex items-center gap-2">
                    <Archive className="h-4 w-4" />
                    Arquivados
                  </TabsTrigger>
                  <TabsTrigger value="evaluation" className="flex items-center gap-2">
                    <ClipboardList className="h-4 w-4" />
                    Avaliativos
                  </TabsTrigger>
                  <TabsTrigger value="calendar" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Calendário
                  </TabsTrigger>
                </TabsList>

                <div className="flex justify-end">
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Adicionar Treino
                  </Button>
                </div>

                <TabsContent value="active" className="space-y-4">
                  {[
                    {
                      order: 1,
                      name: "Treino A - Peito e Tríceps",
                      expiration: "30/06/2025",
                      active: true,
                    },
                    {
                      order: 2,
                      name: "Treino B - Costas e Bíceps",
                      expiration: "30/06/2025",
                      active: true,
                    },
                    {
                      order: 3,
                      name: "Treino C - Pernas",
                      expiration: "30/06/2025",
                      active: true,
                    },
                    {
                      order: 4,
                      name: "Treino D - Ombros e Abdômen",
                      expiration: "30/06/2025",
                      active: false,
                    },
                  ].map((workout) => (
                    <div key={workout.order} className="flex items-center border rounded-lg p-4">
                      <div className="flex items-center mr-4">
                        <GripVertical className="h-5 w-5 text-muted-foreground cursor-move" />
                        <span className="ml-2 font-medium">{workout.order}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{workout.name}</h3>
                        <p className="text-sm text-muted-foreground">Expira em: {workout.expiration}</p>
                      </div>
                      <div className="flex items-center gap-2 mr-4">
                        <Switch checked={workout.active} />
                        <Badge variant={workout.active ? "default" : "secondary"}>
                          {workout.active ? "Ativo" : "Inativo"}
                        </Badge>
                      </div>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon" title="Visualizar Treino">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Métricas">
                          <BarChart2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Exportar para Alunos">
                          <Users className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Salvar no Banco">
                          <Save className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Exportar para Desafio">
                          <Trophy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Duplicar">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Editar">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Exportar PDF">
                          <FileDown className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="archived" className="space-y-4">
                  <div className="flex items-center justify-center h-40 border rounded-lg">
                    <div className="text-center">
                      <Archive className="mx-auto h-10 w-10 text-muted-foreground" />
                      <h3 className="mt-2 text-lg font-medium">Treinos Arquivados</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Nenhum treino arquivado encontrado</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="evaluation" className="space-y-4">
                  <div className="flex items-center justify-center h-40 border rounded-lg">
                    <div className="text-center">
                      <ClipboardList className="mx-auto h-10 w-10 text-muted-foreground" />
                      <h3 className="mt-2 text-lg font-medium">Treinos Avaliativos</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Nenhum treino avaliativo encontrado</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="calendar" className="space-y-4">
                  <div className="flex items-center justify-center h-40 border rounded-lg">
                    <div className="text-center">
                      <Calendar className="mx-auto h-10 w-10 text-muted-foreground" />
                      <h3 className="mt-2 text-lg font-medium">Calendário de Execuções</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Visualize o histórico de execuções de treino</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Avaliações Tab */}
        <TabsContent value="assessments">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Avaliações do Aluno</h3>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Criar Avaliação
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  {
                    id: "A001",
                    name: "Avaliação Física Inicial",
                    date: "10/01/2023",
                    status: "Respondida",
                  },
                  {
                    id: "A002",
                    name: "Avaliação de Progresso Trimestral",
                    date: "10/04/2023",
                    status: "Respondida",
                  },
                  {
                    id: "A003",
                    name: "Avaliação de Composição Corporal",
                    date: "10/07/2023",
                    status: "Respondida",
                  },
                  {
                    id: "A004",
                    name: "Avaliação de Progresso Semestral",
                    date: "10/10/2023",
                    status: "Pendente",
                  },
                ].map((assessment) => (
                  <div key={assessment.id} className="flex items-center border rounded-lg p-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt={assessment.name} />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-medium">{assessment.name}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-muted-foreground">{assessment.date}</p>
                        <Badge variant={assessment.status === "Respondida" ? "default" : "secondary"}>
                          {assessment.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" title="Exportar para Alunos">
                        <Users className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Salvar no Banco">
                        <Save className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Duplicar">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Editar">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Excluir" className="text-red-500 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center mt-6">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documentos Tab */}
        <TabsContent value="documents">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Documentos do Aluno</h3>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Enviar Documento
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  {
                    id: "D001",
                    name: "Atestado Médico",
                    date: "15/01/2023",
                    type: "PDF",
                  },
                  {
                    id: "D002",
                    name: "Contrato de Treinamento",
                    date: "10/01/2023",
                    type: "PDF",
                  },
                  {
                    id: "D003",
                    name: "Exames Laboratoriais",
                    date: "20/02/2023",
                    type: "PDF",
                  },
                  {
                    id: "D004",
                    name: "Plano Alimentar",
                    date: "05/03/2023",
                    type: "PDF",
                  },
                ].map((document) => (
                  <div key={document.id} className="flex items-center border rounded-lg p-4">
                    <FileText className="h-10 w-10 mr-4 text-muted-foreground" />
                    <div className="flex-1">
                      <h3 className="font-medium">{document.name}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-muted-foreground">{document.date}</p>
                        <Badge variant="outline">{document.type}</Badge>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" title="Visualizar">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Excluir" className="text-red-500 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Desafios Tab */}
        <TabsContent value="challenges">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Desafios do Aluno</h3>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar a Desafio
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  {
                    id: "C001",
                    name: "Desafio 30 Dias - Hipertrofia",
                    period: "01/05/2023 - 30/05/2023",
                    status: true,
                  },
                  {
                    id: "C002",
                    name: "Desafio Queima de Gordura",
                    period: "01/07/2023 - 31/07/2023",
                    status: false,
                  },
                ].map((challenge) => (
                  <div key={challenge.id} className="flex items-center border rounded-lg p-4">
                    <Trophy className="h-10 w-10 mr-4 text-muted-foreground" />
                    <div className="flex-1">
                      <h3 className="font-medium">{challenge.name}</h3>
                      <p className="text-sm text-muted-foreground">{challenge.period}</p>
                    </div>
                    <div className="flex items-center gap-2 mr-4">
                      <Switch checked={challenge.status} />
                      <Badge variant={challenge.status ? "default" : "secondary"}>
                        {challenge.status ? "Ativo" : "Inativo"}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="icon" title="Visualizar Desafio">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Anotações Tab */}
        <TabsContent value="notes">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Anotações sobre o Aluno</h3>
              </div>

              <div className="space-y-4">
                <Textarea
                  placeholder="Adicione suas anotações sobre o aluno aqui..."
                  className="min-h-[200px]"
                  defaultValue="Carlos tem demonstrado grande progresso na hipertrofia dos membros superiores. Está seguindo o plano alimentar corretamente e tem frequência consistente. Precisa melhorar a execução do agachamento para evitar sobrecarga no joelho direito. Reclamou de dor lombar leve após o último treino de costas - ajustar carga na remada."
                />
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Salvar Anotações
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Plano Tab */}
        <TabsContent value="plan">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Plano do Aluno</h3>
                <Button size="sm" variant="outline">
                  <Edit className="mr-2 h-4 w-4" />
                  Alterar Plano
                </Button>
              </div>

              <div className="space-y-6">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-medium">Plano Premium</h4>
                      <p className="text-muted-foreground">Plano mensal com acesso a todos os recursos</p>
                    </div>
                    <Badge className="text-sm">Ativo</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Detalhes do Plano</h4>
                    <div className="mt-2 space-y-2">
                      <div className="grid grid-cols-2">
                        <span className="text-muted-foreground">Início:</span>
                        <span>10/01/2023</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="text-muted-foreground">Próxima Renovação:</span>
                        <span>10/06/2023</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="text-muted-foreground">Valor Mensal:</span>
                        <span>R$ 250,00</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="text-muted-foreground">Forma de Pagamento:</span>
                        <span>Cartão de Crédito</span>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Recursos Inclusos</h4>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center">
                        <ChevronUp className="h-4 w-4 text-green-500 mr-2" />
                        <span>Treinos Personalizados Ilimitados</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronUp className="h-4 w-4 text-green-500 mr-2" />
                        <span>Avaliações Físicas Mensais</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronUp className="h-4 w-4 text-green-500 mr-2" />
                        <span>Suporte via WhatsApp</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronUp className="h-4 w-4 text-green-500 mr-2" />
                        <span>Acesso a Desafios Exclusivos</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronDown className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-muted-foreground">Consultoria Nutricional</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
