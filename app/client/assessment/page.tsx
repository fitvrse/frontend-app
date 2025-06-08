"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Clipboard, FileText, Calendar, Download, Eye, Building, User, Apple } from "lucide-react"

interface Assessment {
  id: string
  title: string
  date: string
  type: string
  status: "pending" | "completed"
  professional: string
  description?: string
  formData?: Record<string, any>
}

export default function AssessmentPage() {
  const [activeTab, setActiveTab] = useState("gym")

  const gymAssessments: Assessment[] = [
    {
      id: "1",
      title: "Avaliação Física Inicial",
      date: "10/05/2025",
      type: "Física",
      status: "completed",
      professional: "Academia Fitness",
      description:
        "Avaliação física completa incluindo medidas antropométricas, composição corporal e testes de aptidão física.",
      formData: {
        peso: "75 kg",
        altura: "175 cm",
        imc: "24.5",
        percentualGordura: "18%",
        circunferencias: {
          braco: "32 cm",
          cintura: "80 cm",
          quadril: "95 cm",
        },
        pressaoArterial: "120/80 mmHg",
        frequenciaCardiaca: "68 bpm",
      },
    },
    {
      id: "2",
      title: "Avaliação de Progresso Trimestral",
      date: "18/05/2025",
      type: "Física",
      status: "pending",
      professional: "Academia Fitness",
      description: "Avaliação de acompanhamento para verificar o progresso após 3 meses de treino.",
    },
  ]

  const personalAssessments: Assessment[] = [
    {
      id: "3",
      title: "Avaliação de Força",
      date: "12/05/2025",
      type: "Desempenho",
      status: "completed",
      professional: "Carlos Silva",
      description: "Avaliação de força máxima e resistência muscular para defini������ão de cargas de treino.",
      formData: {
        supino: "80 kg",
        legPress: "200 kg",
        remada: "70 kg",
        agachamento: "100 kg",
        observacoes: "Bom equilíbrio entre grupos musculares. Foco em melhorar resistência de core.",
      },
    },
    {
      id: "4",
      title: "Avaliação Postural",
      date: "15/05/2025",
      type: "Postural",
      status: "completed",
      professional: "Carlos Silva",
      description: "Análise postural completa para identificar desequilíbrios e planejar correções.",
      formData: {
        desvios: "Leve escoliose, ombros protraídos",
        recomendacoes: "Exercícios de fortalecimento de core e mobilidade de ombros",
        observacoes: "Melhora significativa na postura desde a última avaliação",
      },
    },
  ]

  const nutritionistAssessments: Assessment[] = [
    {
      id: "5",
      title: "Avaliação Nutricional Inicial",
      date: "05/05/2025",
      type: "Nutricional",
      status: "completed",
      professional: "Ana Nutricionista",
      description: "Avaliação nutricional completa incluindo histórico alimentar e hábitos.",
      formData: {
        necessidadeCalorica: "2200 kcal/dia",
        distribuicaoMacros: "Proteínas: 30%, Carboidratos: 45%, Gorduras: 25%",
        restricoes: "Intolerância à lactose",
        suplementacaoRecomendada: "Whey protein isolado, Vitamina D",
        observacoes: "Baixa ingestão de vegetais e fibras. Consumo excessivo de alimentos processados.",
      },
    },
    {
      id: "6",
      title: "Avaliação de Composição Corporal",
      date: "20/05/2025",
      type: "Composição",
      status: "pending",
      professional: "Ana Nutricionista",
      description: "Avaliação de composição corporal por bioimpedância para ajuste do plano alimentar.",
    },
  ]

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Avaliações</h1>
      </div>

      <Tabs defaultValue="gym" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
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

        <TabsContent value="gym" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gymAssessments.map((assessment) => (
              <Card key={assessment.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        {assessment.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Calendar className="h-4 w-4" />
                        {assessment.date}
                      </CardDescription>
                    </div>
                    <Badge variant={assessment.status === "completed" ? "success" : "outline"}>
                      {assessment.status === "completed" ? "Concluída" : "Pendente"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{assessment.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Building className="h-4 w-4" />
                    <span>{assessment.professional}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  {assessment.status === "completed" ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full" variant="default">
                          <Eye className="h-4 w-4 mr-2" />
                          Ver Avaliação
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>{assessment.title}</DialogTitle>
                        </DialogHeader>
                        <div className="py-4">
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm">{assessment.date}</span>
                            </div>
                            <Badge variant="success">Concluída</Badge>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h3 className="font-medium mb-2">Dados Gerais</h3>
                              <div className="grid grid-cols-2 gap-4 bg-muted p-3 rounded-md">
                                <div>
                                  <p className="text-sm text-muted-foreground">Peso</p>
                                  <p className="font-medium">{assessment.formData?.peso}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Altura</p>
                                  <p className="font-medium">{assessment.formData?.altura}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">IMC</p>
                                  <p className="font-medium">{assessment.formData?.imc}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">% Gordura</p>
                                  <p className="font-medium">{assessment.formData?.percentualGordura}</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="font-medium mb-2">Circunferências</h3>
                              <div className="grid grid-cols-3 gap-4 bg-muted p-3 rounded-md">
                                <div>
                                  <p className="text-sm text-muted-foreground">Braço</p>
                                  <p className="font-medium">{assessment.formData?.circunferencias?.braco}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Cintura</p>
                                  <p className="font-medium">{assessment.formData?.circunferencias?.cintura}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Quadril</p>
                                  <p className="font-medium">{assessment.formData?.circunferencias?.quadril}</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="font-medium mb-2">Dados Clínicos</h3>
                              <div className="grid grid-cols-2 gap-4 bg-muted p-3 rounded-md">
                                <div>
                                  <p className="text-sm text-muted-foreground">Pressão Arterial</p>
                                  <p className="font-medium">{assessment.formData?.pressaoArterial}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Freq. Cardíaca</p>
                                  <p className="font-medium">{assessment.formData?.frequenciaCardiaca}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button variant="outline" className="gap-2">
                            <Download className="h-4 w-4" />
                            Baixar PDF
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button className="w-full" variant="outline">
                      <Clipboard className="h-4 w-4 mr-2" />
                      Preencher Formulário
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="personal" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalAssessments.map((assessment) => (
              <Card key={assessment.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        {assessment.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Calendar className="h-4 w-4" />
                        {assessment.date}
                      </CardDescription>
                    </div>
                    <Badge variant={assessment.status === "completed" ? "success" : "outline"}>
                      {assessment.status === "completed" ? "Concluída" : "Pendente"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{assessment.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4" />
                    <span>{assessment.professional}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  {assessment.status === "completed" ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full" variant="default">
                          <Eye className="h-4 w-4 mr-2" />
                          Ver Avaliação
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>{assessment.title}</DialogTitle>
                        </DialogHeader>
                        <div className="py-4">
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm">{assessment.date}</span>
                            </div>
                            <Badge variant="success">Concluída</Badge>
                          </div>

                          <div className="space-y-4">
                            {assessment.type === "Desempenho" ? (
                              <div>
                                <h3 className="font-medium mb-2">Testes de Força</h3>
                                <div className="grid grid-cols-2 gap-4 bg-muted p-3 rounded-md">
                                  <div>
                                    <p className="text-sm text-muted-foreground">Supino</p>
                                    <p className="font-medium">{assessment.formData?.supino}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">Leg Press</p>
                                    <p className="font-medium">{assessment.formData?.legPress}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">Remada</p>
                                    <p className="font-medium">{assessment.formData?.remada}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">Agachamento</p>
                                    <p className="font-medium">{assessment.formData?.agachamento}</p>
                                  </div>
                                </div>

                                <div className="mt-4">
                                  <h3 className="font-medium mb-2">Observações</h3>
                                  <div className="bg-muted p-3 rounded-md">
                                    <p>{assessment.formData?.observacoes}</p>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <h3 className="font-medium mb-2">Análise Postural</h3>
                                <div className="space-y-3 bg-muted p-3 rounded-md">
                                  <div>
                                    <p className="text-sm text-muted-foreground">Desvios Identificados</p>
                                    <p className="font-medium">{assessment.formData?.desvios}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">Recomendações</p>
                                    <p className="font-medium">{assessment.formData?.recomendacoes}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">Observações</p>
                                    <p className="font-medium">{assessment.formData?.observacoes}</p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button variant="outline" className="gap-2">
                            <Download className="h-4 w-4" />
                            Baixar PDF
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button className="w-full" variant="outline">
                      <Clipboard className="h-4 w-4 mr-2" />
                      Preencher Formulário
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="nutritionist" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionistAssessments.map((assessment) => (
              <Card key={assessment.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        {assessment.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Calendar className="h-4 w-4" />
                        {assessment.date}
                      </CardDescription>
                    </div>
                    <Badge variant={assessment.status === "completed" ? "success" : "outline"}>
                      {assessment.status === "completed" ? "Concluída" : "Pendente"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{assessment.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Apple className="h-4 w-4" />
                    <span>{assessment.professional}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  {assessment.status === "completed" ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full" variant="default">
                          <Eye className="h-4 w-4 mr-2" />
                          Ver Avaliação
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>{assessment.title}</DialogTitle>
                        </DialogHeader>
                        <div className="py-4">
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm">{assessment.date}</span>
                            </div>
                            <Badge variant="success">Concluída</Badge>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h3 className="font-medium mb-2">Necessidades Nutricionais</h3>
                              <div className="grid grid-cols-2 gap-4 bg-muted p-3 rounded-md">
                                <div>
                                  <p className="text-sm text-muted-foreground">Necessidade Calórica</p>
                                  <p className="font-medium">{assessment.formData?.necessidadeCalorica}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Distribuição de Macros</p>
                                  <p className="font-medium">{assessment.formData?.distribuicaoMacros}</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="font-medium mb-2">Recomendações</h3>
                              <div className="space-y-3 bg-muted p-3 rounded-md">
                                <div>
                                  <p className="text-sm text-muted-foreground">Restrições Alimentares</p>
                                  <p className="font-medium">{assessment.formData?.restricoes}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Suplementação Recomendada</p>
                                  <p className="font-medium">{assessment.formData?.suplementacaoRecomendada}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Observações</p>
                                  <p className="font-medium">{assessment.formData?.observacoes}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button variant="outline" className="gap-2">
                            <Download className="h-4 w-4" />
                            Baixar PDF
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button className="w-full" variant="outline">
                      <Clipboard className="h-4 w-4 mr-2" />
                      Preencher Formulário
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
