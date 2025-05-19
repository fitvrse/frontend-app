import { CalendarIcon, ClockIcon, UsersIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PersonalSchedulePage() {
  // Dados simulados de agendamentos
  const appointments = [
    {
      id: 1,
      studentName: "Carlos Silva",
      time: "08:00 - 09:00",
      type: "Treino Funcional",
      status: "confirmed",
    },
    {
      id: 2,
      studentName: "Mariana Costa",
      time: "10:30 - 11:30",
      type: "Musculação",
      status: "confirmed",
    },
    {
      id: 3,
      studentName: "Pedro Alves",
      time: "14:00 - 15:00",
      type: "Avaliação Física",
      status: "pending",
    },
    {
      id: 4,
      studentName: "Juliana Mendes",
      time: "16:30 - 17:30",
      type: "Treino Personalizado",
      status: "confirmed",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Agenda</h1>
          <p className="text-muted-foreground">Gerencie seus horários e compromissos com alunos</p>
        </div>
        <Button className="bg-[#1b4040] hover:bg-[#143030]">
          <CalendarIcon className="mr-2 h-4 w-4" />
          Novo Agendamento
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Calendário</CardTitle>
            <CardDescription>Visualize e gerencie seus compromissos</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" className="rounded-md border" />
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hoje</CardTitle>
              <CardDescription>Quinta-feira, 8 de Maio</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">Todos</TabsTrigger>
                  <TabsTrigger value="confirmed">Confirmados</TabsTrigger>
                  <TabsTrigger value="pending">Pendentes</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-start p-3 border rounded-lg">
                      <div className="mr-3 mt-1">
                        <ClockIcon className="h-5 w-5 text-[#1b4040]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{appointment.studentName}</h4>
                          <Badge
                            variant={appointment.status === "confirmed" ? "default" : "outline"}
                            className={
                              appointment.status === "confirmed" ? "bg-[#abd904] hover:bg-[#9bc304] text-black" : ""
                            }
                          >
                            {appointment.status === "confirmed" ? "Confirmado" : "Pendente"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{appointment.time}</p>
                        <p className="text-sm">{appointment.type}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="confirmed" className="space-y-4">
                  {appointments
                    .filter((a) => a.status === "confirmed")
                    .map((appointment) => (
                      <div key={appointment.id} className="flex items-start p-3 border rounded-lg">
                        <div className="mr-3 mt-1">
                          <ClockIcon className="h-5 w-5 text-[#1b4040]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{appointment.studentName}</h4>
                            <Badge className="bg-[#abd904] hover:bg-[#9bc304] text-black">Confirmado</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{appointment.time}</p>
                          <p className="text-sm">{appointment.type}</p>
                        </div>
                      </div>
                    ))}
                </TabsContent>
                <TabsContent value="pending" className="space-y-4">
                  {appointments
                    .filter((a) => a.status === "pending")
                    .map((appointment) => (
                      <div key={appointment.id} className="flex items-start p-3 border rounded-lg">
                        <div className="mr-3 mt-1">
                          <ClockIcon className="h-5 w-5 text-[#1b4040]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{appointment.studentName}</h4>
                            <Badge variant="outline">Pendente</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{appointment.time}</p>
                          <p className="text-sm">{appointment.type}</p>
                        </div>
                      </div>
                    ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estatísticas</CardTitle>
              <CardDescription>Resumo da sua agenda</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <UsersIcon className="h-5 w-5 mr-2 text-[#1b4040]" />
                  <span>Total de alunos hoje</span>
                </div>
                <span className="font-bold">4</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2 text-[#1b4040]" />
                  <span>Horas de treino</span>
                </div>
                <span className="font-bold">4h</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2 text-[#1b4040]" />
                  <span>Próxima semana</span>
                </div>
                <span className="font-bold">12 sessões</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
