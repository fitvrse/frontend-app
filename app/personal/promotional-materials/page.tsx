"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Download, Share2, Edit, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function PromotionalMaterialsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Materiais Promocionais</h1>
        <p className="text-muted-foreground">
          Acesse materiais de apoio para promover seus serviços e engajar seus alunos
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar materiais..." className="pl-8 w-full md:w-80" />
        </div>
      </div>

      <Tabs defaultValue="social" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="social">Redes Sociais</TabsTrigger>
          <TabsTrigger value="editable">Editáveis</TabsTrigger>
          <TabsTrigger value="extras">Extras</TabsTrigger>
        </TabsList>

        {/* Redes Sociais */}
        <TabsContent value="social" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                id: "SM001",
                title: "Dicas de Nutrição",
                description: "Posts sobre alimentação saudável para compartilhar com seus alunos",
                image: "/placeholder.svg?height=200&width=300",
                format: "Instagram",
                category: "Nutrição",
              },
              {
                id: "SM002",
                title: "Benefícios do Treino",
                description: "Série de posts sobre os benefícios da atividade física regular",
                image: "/placeholder.svg?height=200&width=300",
                format: "Facebook",
                category: "Motivação",
              },
              {
                id: "SM003",
                title: "Exercícios em Casa",
                description: "Imagens de exercícios que podem ser feitos em casa",
                image: "/placeholder.svg?height=200&width=300",
                format: "Instagram",
                category: "Treino",
              },
              {
                id: "SM004",
                title: "Frases Motivacionais",
                description: "Frases para motivar seus alunos a continuarem treinando",
                image: "/placeholder.svg?height=200&width=300",
                format: "Instagram Stories",
                category: "Motivação",
              },
              {
                id: "SM005",
                title: "Antes e Depois",
                description: "Templates para mostrar a evolução dos seus alunos",
                image: "/placeholder.svg?height=200&width=300",
                format: "Instagram",
                category: "Resultados",
              },
              {
                id: "SM006",
                title: "Dicas de Treino",
                description: "Posts com dicas para melhorar a performance nos treinos",
                image: "/placeholder.svg?height=200&width=300",
                format: "Facebook",
                category: "Treino",
              },
            ].map((material) => (
              <Card key={material.id} className="overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={material.image || "/placeholder.svg"}
                    alt={material.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{material.title}</CardTitle>
                    <Badge variant="outline">{material.format}</Badge>
                  </div>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <Badge variant="secondary">{material.category}</Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" title="Visualizar">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Compartilhar">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Baixar">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex items-center justify-center mt-4">
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
        </TabsContent>

        {/* Editáveis */}
        <TabsContent value="editable" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                id: "ED001",
                title: "Planilha de Treino",
                description: "Template editável para criar planilhas de treino personalizadas",
                image: "/placeholder.svg?height=200&width=300",
                format: "PowerPoint",
                category: "Treino",
              },
              {
                id: "ED002",
                title: "Ficha de Avaliação",
                description: "Modelo de ficha de avaliação física completa",
                image: "/placeholder.svg?height=200&width=300",
                format: "Word",
                category: "Avaliação",
              },
              {
                id: "ED003",
                title: "Plano Alimentar",
                description: "Template para criar planos alimentares para seus alunos",
                image: "/placeholder.svg?height=200&width=300",
                format: "Excel",
                category: "Nutrição",
              },
              {
                id: "ED004",
                title: "Cartão de Visita",
                description: "Modelo editável de cartão de visita profissional",
                image: "/placeholder.svg?height=200&width=300",
                format: "Photoshop",
                category: "Marketing",
              },
              {
                id: "ED005",
                title: "Contrato de Prestação",
                description: "Modelo de contrato para prestação de serviços",
                image: "/placeholder.svg?height=200&width=300",
                format: "Word",
                category: "Administrativo",
              },
              {
                id: "ED006",
                title: "Flyer Promocional",
                description: "Template para criar flyers promocionais para seus serviços",
                image: "/placeholder.svg?height=200&width=300",
                format: "Illustrator",
                category: "Marketing",
              },
            ].map((material) => (
              <Card key={material.id} className="overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={material.image || "/placeholder.svg"}
                    alt={material.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{material.title}</CardTitle>
                    <Badge variant="outline">{material.format}</Badge>
                  </div>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <Badge variant="secondary">{material.category}</Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" title="Editar">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Baixar">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex items-center justify-center mt-4">
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
        </TabsContent>

        {/* Extras */}
        <TabsContent value="extras" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                id: "EX001",
                title: "E-book: Nutrição Esportiva",
                description: "Guia completo sobre nutrição para praticantes de atividade física",
                image: "/placeholder.svg?height=200&width=300",
                format: "PDF",
                category: "Nutrição",
              },
              {
                id: "EX002",
                title: "Vídeo: Técnicas de Treino",
                description: "Vídeo explicativo sobre técnicas corretas de execução de exercícios",
                image: "/placeholder.svg?height=200&width=300",
                format: "MP4",
                category: "Treino",
              },
              {
                id: "EX003",
                title: "Podcast: Motivação",
                description: "Episódio de podcast sobre como manter a motivação nos treinos",
                image: "/placeholder.svg?height=200&width=300",
                format: "MP3",
                category: "Motivação",
              },
              {
                id: "EX004",
                title: "Infográfico: Músculos",
                description: "Infográfico detalhado sobre os principais grupos musculares",
                image: "/placeholder.svg?height=200&width=300",
                format: "PDF",
                category: "Anatomia",
              },
              {
                id: "EX005",
                title: "Calculadora: Calorias",
                description: "Ferramenta para calcular necessidades calóricas diárias",
                image: "/placeholder.svg?height=200&width=300",
                format: "Excel",
                category: "Nutrição",
              },
              {
                id: "EX006",
                title: "Guia: Suplementação",
                description: "Guia completo sobre suplementação para diferentes objetivos",
                image: "/placeholder.svg?height=200&width=300",
                format: "PDF",
                category: "Nutrição",
              },
            ].map((material) => (
              <Card key={material.id} className="overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={material.image || "/placeholder.svg"}
                    alt={material.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{material.title}</CardTitle>
                    <Badge variant="outline">{material.format}</Badge>
                  </div>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <Badge variant="secondary">{material.category}</Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" title="Visualizar">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Baixar">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex items-center justify-center mt-4">
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
