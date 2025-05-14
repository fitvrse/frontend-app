import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Calendar, Clock, Gift, Medal, Star, Trophy, Users } from "lucide-react"

export default function ClientChallengesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Desafios</h1>
        <p className="text-muted-foreground">Participe de desafios e ganhe recompensas</p>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Desafio em Destaque</CardTitle>
          <CardDescription>Termina em 5 dias</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">30 Dias de Treino</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>25 dias restantes</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  <span>124 participantes</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="mr-1 h-4 w-4" />
                  <span>500 pontos</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Treine pelo menos 5 dias por semana durante 30 dias consecutivos e ganhe 500 pontos, além de um badge
                exclusivo para o seu perfil.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Seu progresso</span>
                  <span>5/30 dias (17%)</span>
                </div>
                <Progress value={17} className="h-2" />
              </div>
            </div>
            <div className="w-full md:w-auto">
              <Button size="lg" className="w-full md:w-auto">
                Ver Detalhes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Desafios Ativos</TabsTrigger>
          <TabsTrigger value="available">Disponíveis</TabsTrigger>
          <TabsTrigger value="completed">Concluídos</TabsTrigger>
          <TabsTrigger value="rewards">Recompensas</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "30 Dias de Treino",
                type: "Frequência",
                progress: 17,
                reward: "500 pontos + Badge",
                days: "25 dias restantes",
              },
              {
                name: "Desafio Cardio",
                type: "Atividade",
                progress: 45,
                reward: "300 pontos",
                days: "15 dias restantes",
              },
              {
                name: "Desafio Água",
                type: "Nutrição",
                progress: 30,
                reward: "200 pontos",
                days: "20 dias restantes",
              },
            ].map((challenge, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">{challenge.name}</CardTitle>
                      <CardDescription>{challenge.type}</CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      {challenge.days}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>{challenge.progress}%</span>
                    </div>
                    <Progress value={challenge.progress} className="h-2" />
                    <div className="flex items-center text-sm text-muted-foreground mt-4">
                      <Trophy className="mr-2 h-4 w-4" />
                      <span>Recompensa: {challenge.reward}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver Detalhes
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="available" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Desafio Proteína",
                type: "Nutrição",
                duration: "21 dias",
                reward: "250 pontos",
                participants: 87,
              },
              {
                name: "Maratona de Força",
                type: "Treino",
                duration: "14 dias",
                reward: "350 pontos + Desconto",
                participants: 65,
              },
              {
                name: "Desafio Flexibilidade",
                type: "Mobilidade",
                duration: "30 dias",
                reward: "400 pontos",
                participants: 42,
              },
              {
                name: "Desafio Sono",
                type: "Bem-estar",
                duration: "14 dias",
                reward: "200 pontos",
                participants: 103,
              },
              {
                name: "Desafio Meditação",
                type: "Mental",
                duration: "21 dias",
                reward: "250 pontos",
                participants: 56,
              },
              {
                name: "Desafio Vegetais",
                type: "Nutrição",
                duration: "14 dias",
                reward: "200 pontos",
                participants: 78,
              },
            ].map((challenge, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">{challenge.name}</CardTitle>
                      <CardDescription>{challenge.type}</CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      {challenge.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Trophy className="mr-2 h-4 w-4" />
                      <span>Recompensa: {challenge.reward}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="mr-2 h-4 w-4" />
                      <span>{challenge.participants} participantes</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Participar</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Desafios Concluídos</CardTitle>
              <CardDescription>Seus desafios concluídos e recompensas ganhas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    name: "7 Dias de Cardio",
                    date: "Abril 2023",
                    reward: "150 pontos",
                    result: "100% concluído",
                  },
                  {
                    name: "Desafio Proteína",
                    date: "Março 2023",
                    reward: "250 pontos + Badge",
                    result: "95% concluído",
                  },
                  {
                    name: "21 Dias Sem Açúcar",
                    date: "Fevereiro 2023",
                    reward: "300 pontos",
                    result: "90% concluído",
                  },
                  {
                    name: "Desafio Agachamento",
                    date: "Janeiro 2023",
                    reward: "200 pontos",
                    result: "100% concluído",
                  },
                ].map((challenge, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="min-w-[100px] text-sm">
                      <div className="font-medium">{challenge.date}</div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="text-base font-medium">{challenge.name}</div>
                        <div className="text-sm text-muted-foreground">{challenge.result}</div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Trophy className="mr-1 h-4 w-4" />
                        <span>Recompensa: {challenge.reward}</span>
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
        <TabsContent value="rewards" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Suas Conquistas</CardTitle>
                <CardDescription>Badges e troféus conquistados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "Madrugador", icon: Clock, description: "Treinou antes das 7h por 5 dias seguidos" },
                    { name: "Proteína Master", icon: Award, description: "Atingiu meta de proteína por 30 dias" },
                    { name: "Cardio King", icon: Medal, description: "Completou 50 sessões de cardio" },
                    { name: "Água Pura", icon: Star, description: "Bebeu 2L de água por 21 dias seguidos" },
                    { name: "Força Total", icon: Trophy, description: "Aumentou carga em todos os exercícios" },
                    { name: "Consistente", icon: Calendar, description: "Treinou 4x por semana por 2 meses" },
                  ].map((badge, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <badge.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-sm font-medium">{badge.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{badge.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recompensas Disponíveis</CardTitle>
                <CardDescription>Troque seus pontos por recompensas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Desconto de 10% na mensalidade", points: 1000, type: "Desconto" },
                    { name: "1 Sessão com Personal Trainer", points: 800, type: "Serviço" },
                    { name: "Kit de Suplementos", points: 1500, type: "Produto" },
                    { name: "Avaliação Nutricional", points: 600, type: "Serviço" },
                    { name: "Camiseta Exclusiva", points: 500, type: "Produto" },
                  ].map((reward, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <Gift className="mr-2 h-4 w-4 text-primary" />
                          <span className="font-medium">{reward.name}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{reward.type}</div>
                      </div>
                      <Button variant="outline" size="sm">
                        {reward.points} pts
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full text-center">
                  <div className="text-sm font-medium mb-2">Seus pontos atuais</div>
                  <div className="text-2xl font-bold">850 pontos</div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
