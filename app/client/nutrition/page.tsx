import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Apple, ArrowRight, Calendar, Camera, CheckCircle2, Clock, Droplets, Flame, Utensils } from "lucide-react"

export default function ClientNutritionPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Minha Nutrição</h1>
        <p className="text-muted-foreground">Visualize e acompanhe seu plano alimentar</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Calorias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,250 / 1,800</div>
            <Progress value={69} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-1">69% da meta diária</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Água</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2L / 2.0L</div>
            <Progress value={60} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-1">60% da meta diária</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Macronutrientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-sm font-medium">Proteínas</div>
                <div className="text-lg font-bold">85g</div>
                <Progress value={70} className="h-2 mt-1" />
              </div>
              <div>
                <div className="text-sm font-medium">Carbos</div>
                <div className="text-lg font-bold">120g</div>
                <Progress value={60} className="h-2 mt-1" />
              </div>
              <div>
                <div className="text-sm font-medium">Gorduras</div>
                <div className="text-lg font-bold">45g</div>
                <Progress value={75} className="h-2 mt-1" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Plano Alimentar Atual</CardTitle>
          <CardDescription>Low Carb - Emagrecimento</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Detalhes do Plano</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Flame className="mr-1 h-4 w-4" />
                  <span>1800 kcal/dia</span>
                </div>
                <div className="flex items-center">
                  <Apple className="mr-1 h-4 w-4" />
                  <span>Low Carb</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>Iniciado há 3 semanas</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Este plano foi desenvolvido para promover emagrecimento saudável, com foco em alimentos de baixo índice
                glicêmico e alto teor proteico.
              </p>
              <p className="text-sm font-medium">Nutricionista: Ana Paula Silva</p>
            </div>
            <div className="w-full md:w-auto flex gap-2">
              <Button variant="outline" size="sm" className="w-full md:w-auto">
                <Droplets className="mr-2 h-4 w-4" />
                Registrar Água
              </Button>
              <Button size="sm" className="w-full md:w-auto">
                <Camera className="mr-2 h-4 w-4" />
                Registrar Refeição
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="today" className="space-y-4">
        <TabsList>
          <TabsTrigger value="today">Hoje</TabsTrigger>
          <TabsTrigger value="plan">Plano Completo</TabsTrigger>
          <TabsTrigger value="history">Histórico</TabsTrigger>
        </TabsList>
        <TabsContent value="today" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Café da Manhã",
                time: "06:00 - 08:00",
                calories: "350 kcal",
                items: ["2 ovos mexidos", "1 fatia de pão integral", "1 colher de manteiga", "Café preto sem açúcar"],
                completed: true,
              },
              {
                name: "Lanche da Manhã",
                time: "10:00",
                calories: "150 kcal",
                items: ["1 maçã", "12 amêndoas"],
                completed: true,
              },
              {
                name: "Almoço",
                time: "12:00 - 13:00",
                calories: "550 kcal",
                items: [
                  "150g de frango grelhado",
                  "2 colheres de arroz integral",
                  "Salada verde à vontade",
                  "1 colher de azeite",
                ],
                completed: false,
              },
              {
                name: "Lanche da Tarde",
                time: "16:00",
                calories: "200 kcal",
                items: ["1 iogurte natural", "1 colher de granola", "5 morangos"],
                completed: false,
              },
              {
                name: "Jantar",
                time: "19:00 - 20:00",
                calories: "450 kcal",
                items: ["150g de peixe assado", "Legumes grelhados", "1 batata doce pequena"],
                completed: false,
              },
              {
                name: "Ceia",
                time: "22:00",
                calories: "100 kcal",
                items: ["Chá de camomila", "1 colher de gelatina sem açúcar"],
                completed: false,
              },
            ].map((meal, i) => (
              <Card key={i} className={meal.completed ? "bg-muted/50" : ""}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{meal.name}</CardTitle>
                    {meal.completed && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                  </div>
                  <CardDescription className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {meal.time}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Flame className="mr-1 h-3 w-3" />
                      {meal.calories}
                    </div>
                    <ul className="space-y-1 list-disc pl-4">
                      {meal.items.map((item, j) => (
                        <li key={j} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant={meal.completed ? "outline" : "default"} size="sm" className="w-full">
                    {meal.completed ? "Concluído" : "Registrar"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="plan" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Plano Alimentar Completo</CardTitle>
              <CardDescription>Detalhes do seu plano alimentar semanal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { day: "Segunda-feira", variation: "Padrão" },
                  { day: "Terça-feira", variation: "Padrão" },
                  { day: "Quarta-feira", variation: "Treino Intenso" },
                  { day: "Quinta-feira", variation: "Padrão" },
                  { day: "Sexta-feira", variation: "Treino Intenso" },
                  { day: "Sábado", variation: "Flexível" },
                  { day: "Domingo", variation: "Flexível" },
                ].map((day, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="min-w-[120px] text-sm">
                      <div className="font-medium">{day.day}</div>
                      <div className="text-xs text-muted-foreground">{day.variation}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Nutricionista: Ana Paula Silva</div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm font-medium">Café da Manhã</div>
                          <div className="text-xs text-muted-foreground">350 kcal</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Almoço</div>
                          <div className="text-xs text-muted-foreground">550 kcal</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Jantar</div>
                          <div className="text-xs text-muted-foreground">450 kcal</div>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Histórico Alimentar</CardTitle>
              <CardDescription>Seus registros alimentares recentes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    date: "10/05/2023",
                    calories: "1750 kcal",
                    water: "1.8L",
                    compliance: "95%",
                    meals: 6,
                  },
                  {
                    date: "09/05/2023",
                    calories: "1820 kcal",
                    water: "2.0L",
                    compliance: "100%",
                    meals: 6,
                  },
                  {
                    date: "08/05/2023",
                    calories: "1900 kcal",
                    water: "1.5L",
                    compliance: "90%",
                    meals: 5,
                  },
                  {
                    date: "07/05/2023",
                    calories: "2100 kcal",
                    water: "1.2L",
                    compliance: "80%",
                    meals: 5,
                  },
                  {
                    date: "06/05/2023",
                    calories: "1780 kcal",
                    water: "1.9L",
                    compliance: "98%",
                    meals: 6,
                  },
                ].map((day, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="min-w-[100px] text-sm">
                      <div className="font-medium">{day.date}</div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="text-base font-medium">{day.calories}</div>
                        <div className="text-sm text-muted-foreground">Aderência: {day.compliance}</div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Droplets className="mr-1 h-4 w-4" />
                        <span className="mr-4">{day.water}</span>
                        <Utensils className="mr-1 h-4 w-4" />
                        <span>{day.meals} refeições</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
