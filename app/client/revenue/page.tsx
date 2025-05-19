"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Textarea } from "@/components/ui/textarea"
import { Clock, Plus, ChefHat, Heart, Share2, Bookmark, User } from "lucide-react"

interface Recipe {
  id: string
  title: string
  description: string
  image: string
  prepTime: string
  author: string
  favorite?: boolean
  rating?: number
  shared?: boolean
}

export default function RevenuePage() {
  const [activeTab, setActiveTab] = useState("minhas")

  const myRecipes: Recipe[] = [
    {
      id: "1",
      title: "Salada de Quinoa com Legumes",
      description: "Uma salada nutritiva e refrescante com quinoa, pepino, tomate e ervas frescas.",
      image: "/placeholder.svg?height=150&width=250",
      prepTime: "15 min",
      author: "Você",
      favorite: true,
      rating: 4,
    },
    {
      id: "2",
      title: "Smoothie de Frutas Vermelhas",
      description: "Um smoothie energético com frutas vermelhas, banana e espinafre.",
      image: "/placeholder.svg?height=150&width=250",
      prepTime: "5 min",
      author: "Você",
      rating: 5,
    },
    {
      id: "3",
      title: "Wrap de Frango com Abacate",
      description: "Um wrap leve e saudável com frango grelhado, abacate e vegetais.",
      image: "/placeholder.svg?height=150&width=250",
      prepTime: "20 min",
      author: "Você",
      rating: 4,
    },
  ]

  const sharedRecipes: Recipe[] = [
    {
      id: "4",
      title: "Bowl de Açaí Proteico",
      description: "Um bowl de açaí com frutas, granola e whey protein para pós-treino.",
      image: "/placeholder.svg?height=150&width=250",
      prepTime: "10 min",
      author: "Ana Nutricionista",
      shared: true,
      rating: 5,
    },
    {
      id: "5",
      title: "Panqueca de Aveia e Banana",
      description: "Panquecas saudáveis feitas com aveia, banana e canela, sem açúcar refinado.",
      image: "/placeholder.svg?height=150&width=250",
      prepTime: "15 min",
      author: "Ana Nutricionista",
      shared: true,
      rating: 4,
    },
    {
      id: "6",
      title: "Sopa de Legumes com Frango",
      description: "Uma sopa nutritiva e reconfortante com legumes frescos e frango desfiado.",
      image: "/placeholder.svg?height=150&width=250",
      prepTime: "30 min",
      author: "Ana Nutricionista",
      shared: true,
      rating: 5,
    },
    {
      id: "7",
      title: "Muffin de Banana e Chocolate",
      description: "Muffins saudáveis feitos com banana, cacau e farinha integral.",
      image: "/placeholder.svg?height=150&width=250",
      prepTime: "25 min",
      author: "Ana Nutricionista",
      shared: true,
      rating: 4,
    },
  ]

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Receitas</h1>
      </div>

      <Tabs defaultValue="minhas" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="minhas">Minhas Receitas</TabsTrigger>
          <TabsTrigger value="compartilhadas">Receitas Compartilhadas</TabsTrigger>
        </TabsList>

        <TabsContent value="minhas" className="space-y-4">
          <div className="flex justify-end mb-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Adicionar Receita
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Adicionar Nova Receita</DialogTitle>
                  <DialogDescription>Preencha os detalhes da sua receita abaixo.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Título da Receita</Label>
                    <Input id="title" placeholder="Ex: Salada de Quinoa" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea id="description" placeholder="Descreva brevemente sua receita" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="prepTime">Tempo de Preparo</Label>
                      <Input id="prepTime" placeholder="Ex: 15 min" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="portions">Porções</Label>
                      <Input id="portions" placeholder="Ex: 2" type="number" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="ingredients">Ingredientes</Label>
                    <Textarea id="ingredients" placeholder="Liste os ingredientes, um por linha" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="instructions">Modo de Preparo</Label>
                    <Textarea id="instructions" placeholder="Descreva o passo a passo" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="image">Imagem (opcional)</Label>
                    <Input id="image" type="file" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Salvar Receita</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myRecipes.map((recipe) => (
              <Card key={recipe.id} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.title}
                    className="w-full h-40 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                  >
                    <Heart className={`h-5 w-5 ${recipe.favorite ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {recipe.prepTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">{recipe.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    {recipe.author}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compartilhadas" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sharedRecipes.map((recipe) => (
              <Card key={recipe.id} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-2 py-1 text-xs">
                    Compartilhado
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                  >
                    <Heart className={`h-5 w-5 ${recipe.favorite ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {recipe.prepTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">{recipe.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <ChefHat className="h-4 w-4 mr-1" />
                    {recipe.author}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
