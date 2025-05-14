import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  Camera,
  ChevronDown,
  ChevronUp,
  Dumbbell,
  LineChart,
  Ruler,
  Scale,
  TrendingDown,
  TrendingUp,
} from "lucide-react"

export default function ClientProgressPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Meu Progresso</h1>
        <p className="text-muted-foreground">Acompanhe sua evolução física e de desempenho</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Peso Atual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold">72.5 kg</div>
              <div className="flex items-center text-green-500 text-sm">
                <ArrowDown className="h-4 w-4 mr-1" />
                <span>2.3 kg</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Desde o início (há 2 meses)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">% de Gordura</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold">18.2%</div>
              <div className="flex items-center text-green-500 text-sm">
                <ArrowDown className="h-4 w-4 mr-1" />
                <span>3.5%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Desde o início (há 2 meses)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Massa Muscular</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold">32.8 kg</div>
              <div className="flex items-center text-green-500 text-sm">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>1.2 kg</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Desde o início (há 2 meses)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">IMC</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold">24.1</div>
              <div className="flex items-center text-green-500 text-sm">
                <ArrowDown className="h-4 w-4 mr-1" />
                <span>0.8</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Normal (18.5 - 24.9)</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="measurements">Medidas</TabsTrigger>
          <TabsTrigger value="strength">Força</TabsTrigger>
          <TabsTrigger value="photos">Fotos</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Evolução do Peso</CardTitle>
                <CardDescription>Últimos 2 meses</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-muted" />
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Composição Corporal</CardTitle>
                <CardDescription>Distribuição atual</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted" />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Metas Atuais</CardTitle>
                <CardDescription>Seu progresso até agora</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Perder 5kg", progress: 46, target: "2.7kg restantes", trend: "down" },
                    { name: "Reduzir % de gordura para 15%", progress: 60, target: "3.2% restantes", trend: "down" },
                    { name: "Aumentar massa muscular em 3kg", progress: 40, target: "1.8kg restantes", trend: "up" },
                  ].map((goal, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{goal.name}</p>
                        <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{goal.target}</span>
                        <span className={goal.trend === "down" ? "text-green-500" : "text-blue-500"}>
                          {goal.trend === "down" ? (
                            <TrendingDown className="h-3 w-3 inline" />
                          ) : (
                            <TrendingUp className="h-3 w-3 inline" />
                          )}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Últimas Avaliações</CardTitle>
                <CardDescription>Histórico de medições</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "10/05/2023", weight: "72.5 kg", fat: "18.2%", muscle: "32.8 kg" },
                    { date: "10/04/2023", weight: "73.8 kg", fat: "19.5%", muscle: "32.2 kg" },
                    { date: "10/03/2023", weight: "74.8 kg", fat: "21.7%", muscle: "31.6 kg" },
                  ].map((assessment, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{assessment.date}</p>
                        <div className="flex gap-2 text-xs text-muted-foreground">
                          <span className="flex items-center">
                            <Scale className="h-3 w-3 mr-1" />
                            {assessment.weight}
                          </span>
                          <span className="flex items-center">
                            <ChevronDown className="h-3 w-3 mr-1" />
                            {assessment.fat}
                          </span>
                          <span className="flex items-center">
                            <ChevronUp className="h-3 w-3 mr-1" />
                            {assessment.muscle}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Detalhes
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Frequência de Treino</CardTitle>
                <CardDescription>Últimas 4 semanas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { week: "Esta semana", days: 3, target: 5, status: "Em andamento" },
                    { week: "Semana passada", days: 4, target: 5, status: "Concluído" },
                    { week: "Há 2 semanas", days: 5, target: 5, status: "Concluído" },
                    { week: "Há 3 semanas", days: 3, target: 5, status: "Concluído" },
                  ].map((week, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{week.week}</span>
                        <span className="text-muted-foreground">
                          {week.days}/{week.target} dias
                        </span>
                      </div>
                      <Progress value={(week.days / week.target) * 100} className="h-2" />
                      <div className="text-xs text-muted-foreground text-right">{week.status}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="measurements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Medidas Corporais</CardTitle>
              <CardDescription>Evolução das suas medidas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { name: "Braço (direito)", current: "35.2 cm", start: "33.5 cm", change: "+1.7 cm", trend: "up" },
                  { name: "Peito", current: "98.5 cm", start: "100.2 cm", change: "-1.7 cm", trend: "down" },
                  { name: "Cintura", current: "82.3 cm", start: "87.5 cm", change: "-5.2 cm", trend: "down" },
                  { name: "Quadril", current: "95.8 cm", start: "98.2 cm", change: "-2.4 cm", trend: "down" },
                  { name: "Coxa (direita)", current: "58.5 cm", start: "56.8 cm", change: "+1.7 cm", trend: "up" },
                  {
                    name: "Panturrilha (direita)",
                    current: "38.2 cm",
                    start: "37.5 cm",
                    change: "+0.7 cm",
                    trend: "up",
                  },
                ].map((measurement, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Ruler className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{measurement.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Inicial: {measurement.start} → Atual: {measurement.current}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`flex items-center ${
                        measurement.trend === "down" ? "text-green-500" : "text-blue-500"
                      }`}
                    >
                      {measurement.trend === "down" ? (
                        <ArrowDown className="mr-1 h-4 w-4" />
                      ) : (
                        <ArrowUp className="mr-1 h-4 w-4" />
                      )}
                      <span>{measurement.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="strength" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Progresso de Força</CardTitle>
              <CardDescription>Evolução da carga nos principais exercícios</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { name: "Supino Reto", current: "20kg", start: "15kg", change: "+5kg", trend: "up", percentage: 33 },
                  { name: "Agachamento", current: "40kg", start: "25kg", change: "+15kg", trend: "up", percentage: 60 },
                  {
                    name: "Levantamento Terra",
                    current: "50kg",
                    start: "35kg",
                    change: "+15kg",
                    trend: "up",
                    percentage: 43,
                  },
                  {
                    name: "Remada Curvada",
                    current: "25kg",
                    start: "18kg",
                    change: "+7kg",
                    trend: "up",
                    percentage: 39,
                  },
                  {
                    name: "Desenvolvimento",
                    current: "15kg",
                    start: "12kg",
                    change: "+3kg",
                    trend: "up",
                    percentage: 25,
                  },
                ].map((exercise, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Dumbbell className="h-4 w-4 text-primary" />
                        </div>
                        <div className="font-medium">{exercise.name}</div>
                      </div>
                      <div className="text-blue-500 flex items-center">
                        <ArrowUp className="mr-1 h-4 w-4" />
                        <span>{exercise.change}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Inicial: {exercise.start}</span>
                        <span>Atual: {exercise.current}</span>
                      </div>
                      <Progress value={exercise.percentage} className="h-2" />
                      <div className="text-xs text-muted-foreground text-right">{exercise.percentage}% de aumento</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="photos" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Fotos de Progresso</CardTitle>
                  <CardDescription>Compare sua evolução visual</CardDescription>
                </div>
                <Button>
                  <Camera className="mr-2 h-4 w-4" />
                  Adicionar Foto
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Comparação</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                        <Camera className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="text-sm text-center">10/03/2023</div>
                    </div>
                    <div className="space-y-2">
                      <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                        <Camera className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="text-sm text-center">10/05/2023</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Histórico de Fotos</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="space-y-1">
                        <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                          <Camera className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div className="text-xs text-center">{`${10 - i * 2}/05/2023`}</div>
                      </div>
                    ))}
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
