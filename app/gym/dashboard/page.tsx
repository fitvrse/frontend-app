import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Users,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  Clock,
  Activity,
  ArrowRight,
} from "lucide-react"

export default function GymDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Bem-vindo(a) de volta, Academia Fitness!</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Alunos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+12%</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Mensal</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 42.500</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+8%</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Retenção</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
              <span className="text-red-500">-2%</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Frequência Média</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2 dias/semana</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+5%</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="analytics">Análises</TabsTrigger>
          <TabsTrigger value="reports">Relatórios</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Receita Mensal</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted" />
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Alunos Recentes</CardTitle>
                <CardDescription>5 novos alunos esta semana</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Carlos Silva", "Ana Oliveira", "Pedro Santos", "Juliana Lima", "Roberto Alves"].map((name, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{name}</p>
                        <p className="text-xs text-muted-foreground">
                          Inscrito há {i + 1} dia{i > 0 ? "s" : ""}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Horários de Pico</CardTitle>
                <CardDescription>Horários com maior frequência</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { time: "06:00 - 08:00", percentage: 85 },
                    { time: "12:00 - 14:00", percentage: 65 },
                    { time: "18:00 - 20:00", percentage: 95 },
                  ].map((slot, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{slot.time}</span>
                        </div>
                        <span className="font-medium">{slot.percentage}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: `${slot.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Aulas Mais Populares</CardTitle>
                <CardDescription>Baseado em inscrições</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Spinning", count: 42, trend: "up" },
                    { name: "Funcional", count: 38, trend: "up" },
                    { name: "Pilates", count: 27, trend: "down" },
                    { name: "Yoga", count: 21, trend: "up" },
                  ].map((course, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{course.name}</p>
                        <p className="text-xs text-muted-foreground">{course.count} alunos inscritos</p>
                      </div>
                      {course.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Mensalidades a Vencer</CardTitle>
                <CardDescription>Próximos 7 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Marcos Oliveira", date: "Hoje", value: "R$ 120" },
                    { name: "Carla Santos", date: "Amanhã", value: "R$ 150" },
                    { name: "Rodrigo Lima", date: "Em 3 dias", value: "R$ 120" },
                    { name: "Fernanda Costa", date: "Em 5 dias", value: "R$ 180" },
                  ].map((payment, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{payment.name}</p>
                        <p className="text-xs text-muted-foreground">Vence {payment.date}</p>
                      </div>
                      <div className="font-medium">{payment.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Análises Detalhadas</CardTitle>
              <CardDescription>Visualize métricas avançadas sobre sua academia</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="mx-auto h-16 w-16 text-muted" />
                <h3 className="mt-4 text-lg font-medium">Análises Detalhadas</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Visualize dados demográficos, tendências de frequência e mais.
                </p>
                <Button className="mt-4">Ver Análises Completas</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios</CardTitle>
              <CardDescription>Gere relatórios personalizados para sua academia</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="mx-auto h-16 w-16 text-muted" />
                <h3 className="mt-4 text-lg font-medium">Relatórios Personalizados</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Crie relatórios financeiros, de frequência, retenção e mais.
                </p>
                <Button className="mt-4">Gerar Relatório</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notificações</CardTitle>
              <CardDescription>Gerencie suas notificações e alertas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Novo aluno cadastrado", time: "Há 2 horas", read: false },
                  { title: "5 mensalidades vencendo hoje", time: "Há 5 horas", read: false },
                  { title: "Relatório mensal disponível", time: "Há 1 dia", read: true },
                  { title: "Manutenção de equipamento agendada", time: "Há 2 dias", read: true },
                  { title: "Novo personal trainer cadastrado", time: "Há 3 dias", read: true },
                ].map((notification, i) => (
                  <div
                    key={i}
                    className={`flex items-start space-x-4 rounded-md p-3 ${!notification.read ? "bg-primary/5" : ""}`}
                  >
                    <div className={`rounded-full p-1 ${!notification.read ? "bg-primary/10" : "bg-muted"}`}>
                      {!notification.read ? <div className="h-2 w-2 rounded-full bg-primary" /> : null}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className={`text-sm font-medium leading-none ${!notification.read ? "text-primary" : ""}`}>
                        {notification.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
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
