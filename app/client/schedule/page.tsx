import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Apple, ChevronLeft, ChevronRight, Dumbbell, MoreHorizontal, Plus, User, Users } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ClientSchedulePage() {
  // Simulated current date
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  // Days of the week
  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

  // Generate dates for the week view
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(currentYear, currentMonth, currentDay - currentDate.getDay() + i)
    return {
      date: date.getDate(),
      day: daysOfWeek[date.getDay()],
      isToday: date.getDate() === currentDay && date.getMonth() === currentMonth && date.getFullYear() === currentYear,
    }
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Agenda</h1>
        <p className="text-muted-foreground">Gerencie seus treinos, consultas e compromissos</p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Semana anterior</span>
          </Button>
          <Button variant="outline" className="font-medium">
            Maio 2023
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Próxima semana</span>
          </Button>
          <Button variant="outline" className="hidden md:flex">
            Hoje
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Select defaultValue="week">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Visualização" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Dia</SelectItem>
              <SelectItem value="week">Semana</SelectItem>
              <SelectItem value="month">Mês</SelectItem>
              <SelectItem value="agenda">Agenda</SelectItem>
            </SelectContent>
          </Select>
          <Button size="sm" className="h-9">
            <Plus className="mr-2 h-4 w-4" />
            Agendar
          </Button>
        </div>
      </div>

      <Tabs defaultValue="week" className="space-y-4">
        <TabsList>
          <TabsTrigger value="week">Semana</TabsTrigger>
          <TabsTrigger value="upcoming">Próximos</TabsTrigger>
          <TabsTrigger value="past">Histórico</TabsTrigger>
        </TabsList>
        <TabsContent value="week" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-base">
                Semana de {weekDates[0].date} a {weekDates[6].date} de Maio
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-7 border-b">
                {weekDates.map((day, i) => (
                  <div key={i} className={`text-center py-2 ${day.isToday ? "bg-primary/10" : ""}`}>
                    <div className="text-sm font-medium">{day.day}</div>
                    <div className={`text-2xl ${day.isToday ? "text-primary font-bold" : ""}`}>{day.date}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 min-h-[500px]">
                {weekDates.map((day, i) => (
                  <div key={i} className={`border-r last:border-r-0 ${day.isToday ? "bg-primary/5" : ""}`}>
                    {i === 1 && (
                      <div className="p-2 border-b">
                        <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md">
                          <div className="flex items-center gap-2">
                            <Dumbbell className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Treino</span>
                          </div>
                          <div className="text-sm mt-1">18:00 - 19:30</div>
                          <div className="text-sm font-medium mt-1">Treino A - Peito e Tríceps</div>
                        </div>
                      </div>
                    )}
                    {i === 2 && (
                      <div className="p-2 border-b">
                        <div className="bg-green-100 dark:bg-green-900 p-2 rounded-md">
                          <div className="flex items-center gap-2">
                            <Apple className="h-4 w-4 text-green-600 dark:text-green-400" />
                            <span className="text-sm font-medium text-green-600 dark:text-green-400">Nutrição</span>
                          </div>
                          <div className="text-sm mt-1">10:00 - 11:00</div>
                          <div className="text-sm font-medium mt-1">Consulta com Dra. Mariana</div>
                        </div>
                      </div>
                    )}
                    {i === 4 && (
                      <div className="p-2 border-b">
                        <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-md">
                          <div className="flex items-center gap-2">
                            <Dumbbell className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Aula</span>
                          </div>
                          <div className="text-sm mt-1">19:00 - 20:00</div>
                          <div className="text-sm font-medium mt-1">Aula de Spinning</div>
                        </div>
                      </div>
                    )}
                    {i === 5 && (
                      <div className="p-2 border-b">
                        <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded-md">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                            <span className="text-sm font-medium text-orange-600 dark:text-orange-400">Avaliação</span>
                          </div>
                          <div className="text-sm mt-1">14:00 - 15:00</div>
                          <div className="text-sm font-medium mt-1">Avaliação Física</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Próximos Compromissos</CardTitle>
              <CardDescription>Seus próximos treinos, consultas e aulas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    title: "Treino A - Peito e Tríceps",
                    type: "workout",
                    date: "Segunda, 15 de Maio",
                    time: "18:00 - 19:30",
                    with: "Personal João Silva",
                    location: "Academia Fitness Center",
                  },
                  {
                    title: "Consulta Nutricional",
                    type: "nutrition",
                    date: "Terça, 16 de Maio",
                    time: "10:00 - 11:00",
                    with: "Dra. Mariana Costa",
                    location: "Consultório - Sala 302",
                  },
                  {
                    title: "Aula de Spinning",
                    type: "class",
                    date: "Quinta, 18 de Maio",
                    time: "19:00 - 20:00",
                    with: "Instrutor Carlos",
                    location: "Academia Fitness Center - Sala 2",
                  },
                  {
                    title: "Avaliação Física",
                    type: "assessment",
                    date: "Sexta, 19 de Maio",
                    time: "14:00 - 15:00",
                    with: "Prof. Roberto",
                    location: "Academia Fitness Center - Sala de Avaliação",
                  },
                  {
                    title: "Treino B - Costas e Bíceps",
                    type: "workout",
                    date: "Segunda, 22 de Maio",
                    time: "18:00 - 19:30",
                    with: "Personal João Silva",
                    location: "Academia Fitness Center",
                  },
                ].map((appointment, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        appointment.type === "workout"
                          ? "bg-blue-100 dark:bg-blue-900"
                          : appointment.type === "nutrition"
                            ? "bg-green-100 dark:bg-green-900"
                            : appointment.type === "class"
                              ? "bg-purple-100 dark:bg-purple-900"
                              : "bg-orange-100 dark:bg-orange-900"
                      }`}
                    >
                      {appointment.type === "workout" ? (
                        <Dumbbell className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      ) : appointment.type === "nutrition" ? (
                        <Apple className="h-5 w-5 text-green-600 dark:text-green-400" />
                      ) : appointment.type === "class" ? (
                        <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      ) : (
                        <User className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-base font-medium">{appointment.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {appointment.date} • {appointment.time}
                          </p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Ações</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                            <DropdownMenuItem>Remarcar</DropdownMenuItem>
                            <DropdownMenuItem>Adicionar Lembrete</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Cancelar</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Com: </span>
                        {appointment.with}
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Local: </span>
                        {appointment.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="past" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Compromissos</CardTitle>
              <CardDescription>Seus compromissos anteriores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    title: "Treino C - Pernas",
                    type: "workout",
                    date: "Sexta, 12 de Maio",
                    time: "18:00 - 19:30",
                    with: "Personal João Silva",
                    status: "Concluído",
                  },
                  {
                    title: "Cardio - HIIT",
                    type: "workout",
                    date: "Quarta, 10 de Maio",
                    time: "19:00 - 19:30",
                    with: "Personal João Silva",
                    status: "Concluído",
                  },
                  {
                    title: "Treino B - Costas e Bíceps",
                    type: "workout",
                    date: "Segunda, 8 de Maio",
                    time: "18:00 - 19:30",
                    with: "Personal João Silva",
                    status: "Concluído",
                  },
                  {
                    title: "Consulta Nutricional",
                    type: "nutrition",
                    date: "Sexta, 5 de Maio",
                    time: "10:00 - 11:00",
                    with: "Dra. Mariana Costa",
                    status: "Concluído",
                  },
                  {
                    title: "Treino A - Peito e Tríceps",
                    type: "workout",
                    date: "Quarta, 3 de Maio",
                    time: "18:00 - 19:30",
                    with: "Personal João Silva",
                    status: "Concluído",
                  },
                ].map((appointment, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        appointment.type === "workout"
                          ? "bg-blue-100 dark:bg-blue-900"
                          : appointment.type === "nutrition"
                            ? "bg-green-100 dark:bg-green-900"
                            : appointment.type === "class"
                              ? "bg-purple-100 dark:bg-purple-900"
                              : "bg-orange-100 dark:bg-orange-900"
                      }`}
                    >
                      {appointment.type === "workout" ? (
                        <Dumbbell className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      ) : appointment.type === "nutrition" ? (
                        <Apple className="h-5 w-5 text-green-600 dark:text-green-400" />
                      ) : appointment.type === "class" ? (
                        <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      ) : (
                        <User className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-base font-medium">{appointment.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {appointment.date} • {appointment.time}
                          </p>
                        </div>
                        <Badge variant="outline">{appointment.status}</Badge>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Com: </span>
                        {appointment.with}
                      </div>
                    </div>
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
