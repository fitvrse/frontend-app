"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Phone, Star, BadgeCheck } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfessionalProfilePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-32 w-32 mb-4">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Professional" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div className="flex items-center justify-center gap-2">
                  <h2 className="text-2xl font-bold">João Paulo Silva</h2>
                  <BadgeCheck className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground">Personal Trainer</p>
                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 text-sm text-muted-foreground">(32 avaliações)</span>
                </div>
              </div>

              {/* Especialidades e Contato movidos para cima dos botões */}
              <div className="mt-6">
                <h3 className="font-medium mb-2">Especialidades</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Musculação</Badge>
                  <Badge>Perda de peso</Badge>
                  <Badge>Hipertrofia</Badge>
                  <Badge>Funcional</Badge>
                  <Badge>Crossfit</Badge>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-2">Contato</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">(11) 98765-4321</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="text-sm">joao.silva@exemplo.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">São Paulo, SP</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button className="w-full">Enviar mensagem</Button>
                <Button className="w-full" variant="outline">
                  Agendar sessão
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Tabs defaultValue="sobre">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="sobre">Sobre</TabsTrigger>
              <TabsTrigger value="servicos">Serviços</TabsTrigger>
              <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
              <TabsTrigger value="galeria">Galeria</TabsTrigger>
            </TabsList>
            <TabsContent value="sobre">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Sobre João Paulo</h3>
                  <p className="text-muted-foreground mb-4">
                    Profissional com mais de 10 anos de experiência em treinamento personalizado. Especializado em
                    hipertrofia, emagrecimento e preparação física para atletas amadores.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Formado em Educação Física pela Universidade de São Paulo (USP), com especialização em Fisiologia do
                    Exercício e Nutrição Esportiva.
                  </p>
                  <h4 className="font-semibold mt-6 mb-2">Formação</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Bacharelado em Educação Física - USP (2010-2014)</li>
                    <li>Especialização em Fisiologia do Exercício - UNIFESP (2015-2016)</li>
                    <li>Certificação em Nutrição Esportiva - ACSM (2017)</li>
                  </ul>
                  <h4 className="font-semibold mt-6 mb-2">Certificações</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>CREF: 123456-G/SP</li>
                    <li>Certificação CrossFit Level 2</li>
                    <li>Especialista em Treinamento Funcional</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="servicos">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Serviços Oferecidos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold">Treinamento Personalizado</h4>
                      <p className="text-muted-foreground mt-2">
                        Sessões individuais focadas nos seus objetivos específicos.
                      </p>
                      <p className="font-medium mt-4">R$ 120,00 / sessão</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold">Consultoria Online</h4>
                      <p className="text-muted-foreground mt-2">
                        Acompanhamento remoto com planos de treino personalizados.
                      </p>
                      <p className="font-medium mt-4">R$ 300,00 / mês</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold">Avaliação Física Completa</h4>
                      <p className="text-muted-foreground mt-2">
                        Análise detalhada da composição corporal e condicionamento.
                      </p>
                      <p className="font-medium mt-4">R$ 150,00</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold">Pacote Trimestral</h4>
                      <p className="text-muted-foreground mt-2">12 sessões presenciais + acompanhamento online.</p>
                      <p className="font-medium mt-4">R$ 1.200,00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="avaliacoes">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Avaliações de Clientes</h3>
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <div className="flex items-center mb-2">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Cliente" />
                          <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Maria Costa</p>
                          <div className="flex">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Excelente profissional! Consegui atingir meus objetivos em apenas 3 meses de treino. Recomendo
                        muito!
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <div className="flex items-center mb-2">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Cliente" />
                          <AvatarFallback>RS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Rafael Santos</p>
                          <div className="flex">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Muito atencioso e conhecedor. Os treinos são desafiadores mas eficientes. Recomendo para quem
                        busca resultados.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Cliente" />
                          <AvatarFallback>LM</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Luciana Mendes</p>
                          <div className="flex">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        O João é um profissional excepcional! Além de montar treinos personalizados, ele me ajudou com
                        dicas de alimentação que fizeram toda diferença.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="galeria">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Galeria de Fotos</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                      <div key={index} className="aspect-square rounded-md overflow-hidden">
                        <img
                          src={`/placeholder.svg?height=300&width=300&text=Foto ${index}`}
                          alt={`Foto ${index}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
