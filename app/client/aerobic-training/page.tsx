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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Play, BarChart, Bike, MonitorIcon as Running, Heart, Plus, Dumbbell } from "lucide-react"

interface AerobicTraining {
  id: string
  title: string
  type: string
  duration: string
  calories: number
  distance?: string
  intensity: string
  date: string
  completed: boolean
  progress?: number
  heartRate?: string
  prescribed?: boolean
}

export default function AerobicTrainingPage() {
  const [activeTab, setActiveTab] = useState("prescribed")

  const prescribedTrainings: AerobicTraining[] = [
    {
      id: "1",
      title: "Corrida Intervalada",
      type: "Corrida",
      duration: "30 min",
      calories: 350,
      distance: "5 km",
      intensity: "Alta",
      date: "18/05/2025",
      completed: false,
      prescribed: true,
    },
    {
      id: "2",
      title: "Ciclismo Moderado",
      type: "Ciclismo",
      duration: "45 min",
      calories: 400,
      distance: "15 km",
      intensity: "Moderada",
      date: "20/05/2025",
      completed: false,
      prescribed: true,
    },
    {
      id: "3",
      title: "Caminhada Rápida",
      type: "Caminhada",
      duration: "60 min",
      calories: 300,
      distance: "6 km",
      intensity: "Moderada",
      date: "22/05/2025",
      completed: false,
      prescribed: true,
    },
  ]

  const myTrainings: AerobicTraining[] = [
    {
      id: "4",
      title: "Corrida no Parque",
      type: "Corrida",
      duration: "25 min",
      calories: 280,
      distance: "4 km",
      intensity: "Moderada",
      date: "15/05/2025",
      completed: true,
      progress: 100,
      heartRate: "145-165 bpm",
    },
    {
      id: "5",
      title: "Esteira Intervalada",
      type: "Esteira",
      duration: "20 min",
      calories: 220,
      distance: "3 km",
      intensity: "Alta",
      date: "16/05/2025",
      completed: true,
      progress: 100,
      heartRate: "150-170 bpm",
    },
  ]

  const getExerciseIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "corrida":
        return <Running className="h-5 w-5" />
      case "ciclismo":
        return <Bike className="h-5 w-5" />
      case "caminhada":
        return <Running className="h-5 w-5" />
      case "esteira":
        return <Running className="h-5 w-5" />
      default:
        return <Dumbbell className="h-5 w-5" />
    }
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Treino Aeróbico</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Iniciar Treino
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Iniciar Novo Treino Aeróbico</DialogTitle>
              <DialogDescription>Configure seu treino aeróbico personalizado.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Nome do Treino</Label>
                <Input id="title" placeholder="Ex: Corrida no Parque" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Tipo de Exercício</Label>
                <Select>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Selecione o tipo de exercício" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corrida">Corrida</SelectItem>
                    <SelectItem value="caminhada">Caminhada</SelectItem>
                    <SelectItem value="ciclismo">Ciclismo</SelectItem>
                    <SelectItem value="esteira">Esteira</SelectItem>
                    <SelectItem value="eliptico">Elíptico</SelectItem>
                    <SelectItem value="natacao">Natação</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duração Planejada</Label>
                  <Input id="duration" placeholder="Ex: 30 min" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="distance">Distância (opcional)</Label>
                  <Input id="distance" placeholder="Ex: 5 km" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="intensity">Intensidade</Label>
                <Select>
                  <SelectTrigger id="intensity">
                    <SelectValue placeholder="Selecione a intensidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baixa">Baixa</SelectItem>
                    <SelectItem value="moderada">Moderada</SelectItem>
                    <SelectItem value="alta">Alta</SelectItem>
                    <SelectItem value="muito-alta">Muito Alta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes">Observações (opcional)</Label>
                <Input id="notes" placeholder="Adicione observações sobre o treino" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Iniciar Treino</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="prescribed" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="prescribed">Treinos Prescritos</TabsTrigger>
          <TabsTrigger value="my">Meus Treinos</TabsTrigger>
        </TabsList>

        <TabsContent value="prescribed" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prescribedTrainings.map((training) => (
              <Card key={training.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {getExerciseIcon(training.type)}
                        {training.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Calendar className="h-4 w-4" />
                        {training.date}
                      </CardDescription>
                    </div>
                    <Badge variant={training.completed ? "success" : "outline"}>
                      {training.completed ? "Concluído" : "Pendente"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Tipo</span>
                      <span className="font-medium">{training.type}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Duração</span>
                      <span className="font-medium">{training.duration}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Calorias</span>
                      <span className="font-medium">{training.calories} kcal</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Intensidade</span>
                      <span className="font-medium">{training.intensity}</span>
                    </div>
                  </div>
                  {training.distance && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <BarChart className="h-4 w-4" />
                      <span>Distância: {training.distance}</span>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="default">
                    <Play className="h-4 w-4 mr-2" />
                    Iniciar Treino
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myTrainings.map((training) => (
              <Card key={training.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {getExerciseIcon(training.type)}
                        {training.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Calendar className="h-4 w-4" />
                        {training.date}
                      </CardDescription>
                    </div>
                    <Badge variant="success">Concluído</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Tipo</span>
                      <span className="font-medium">{training.type}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Duração</span>
                      <span className="font-medium">{training.duration}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Calorias</span>
                      <span className="font-medium">{training.calories} kcal</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Intensidade</span>
                      <span className="font-medium">{training.intensity}</span>
                    </div>
                  </div>
                  {training.distance && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <BarChart className="h-4 w-4" />
                      <span>Distância: {training.distance}</span>
                    </div>
                  )}
                  {training.heartRate && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Heart className="h-4 w-4" />
                      <span>Freq. Cardíaca: {training.heartRate}</span>
                    </div>
                  )}
                  <div className="mt-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progresso</span>
                      <span>{training.progress}%</span>
                    </div>
                    <Progress value={training.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Ver Detalhes
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
