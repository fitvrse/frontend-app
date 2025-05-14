import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BadgeCheck,
  Calendar,
  ChevronRight,
  Instagram,
  MapPin,
  MessageSquare,
  Star,
  PhoneIcon as WhatsApp,
} from "lucide-react"

export default function ProfessionalsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Meus Profissionais</h1>
        <p className="text-muted-foreground">
          Gerencie os profissionais que você contratou e tenha acesso rápido aos seus perfis.
        </p>
      </div>

      <Tabs defaultValue="academies" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="academies">Academias</TabsTrigger>
          <TabsTrigger value="personal">Personal Trainers</TabsTrigger>
          <TabsTrigger value="nutritionist">Nutricionistas</TabsTrigger>
        </TabsList>

        {/* Academias */}
        <TabsContent value="academies" className="space-y-6">
          <div className="bg-muted/40 border rounded-lg p-4 flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-medium">Plano Gratuito</h3>
              <p className="text-sm text-muted-foreground">
                Você pode contratar 1 academia no plano gratuito. Faça upgrade para contratar mais.
              </p>
            </div>
            <Button variant="default">Liberar Mais Academias</Button>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-16 w-16 border-2 border-primary/10">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Academia Fitness Plus" />
                      <AvatarFallback>FP</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle>Academia Fitness Plus</CardTitle>
                        <BadgeCheck className="h-5 w-5 text-primary" />
                      </div>
                      <CardDescription>Academia de musculação e atividades coletivas</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.8</span>
                    <span className="text-sm text-muted-foreground">(124)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-3">
                  <p className="text-sm">
                    Academia completa com equipamentos modernos, oferecendo musculação, aulas coletivas, natação e
                    treinamento funcional. Ambiente climatizado e profissionais qualificados.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Av. Paulista, 1000 - São Paulo
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> Aberto 6h às 23h
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 pt-0 sm:flex-row">
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://instagram.com/fitnessplus" target="_blank">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://wa.me/5511999999999" target="_blank">
                      <WhatsApp className="h-4 w-4" />
                      <span className="sr-only">WhatsApp</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="/client/chat?id=academy-1">
                      <MessageSquare className="h-4 w-4" />
                      <span className="sr-only">Chat</span>
                    </Link>
                  </Button>
                </div>
                <div className="flex gap-2 ml-auto">
                  <Button variant="default" asChild>
                    <Link href="/client/search/academy/1">
                      Ver Perfil Completo
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Personal Trainers */}
        <TabsContent value="personal" className="space-y-6">
          <div className="bg-muted/40 border rounded-lg p-4 flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-medium">Plano Gratuito</h3>
              <p className="text-sm text-muted-foreground">
                Você pode contratar 1 personal trainer no plano gratuito. Faça upgrade para contratar mais.
              </p>
            </div>
            <Button variant="default">Liberar Mais Personal Trainers</Button>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-16 w-16 border-2 border-primary/10">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" alt="João Carlos" />
                      <AvatarFallback>JC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle>João Carlos</CardTitle>
                        <BadgeCheck className="h-5 w-5 text-primary" />
                      </div>
                      <CardDescription>Especialista em hipertrofia e emagrecimento</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.9</span>
                    <span className="text-sm text-muted-foreground">(87)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-3">
                  <p className="text-sm">
                    Personal trainer com mais de 10 anos de experiência, especializado em hipertrofia, emagrecimento e
                    reabilitação. Formado em Educação Física com pós-graduação em Fisiologia do Exercício.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary">Hipertrofia</Badge>
                    <Badge variant="secondary">Emagrecimento</Badge>
                    <Badge variant="secondary">Reabilitação</Badge>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Atende em domicílio e academias
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> Disponível seg-sex, 6h às 21h
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 pt-0 sm:flex-row">
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://instagram.com/joaocarlos.personal" target="_blank">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://wa.me/5511999999999" target="_blank">
                      <WhatsApp className="h-4 w-4" />
                      <span className="sr-only">WhatsApp</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="/client/chat?id=personal-1">
                      <MessageSquare className="h-4 w-4" />
                      <span className="sr-only">Chat</span>
                    </Link>
                  </Button>
                </div>
                <div className="flex gap-2 ml-auto">
                  <Button variant="default" asChild>
                    <Link href="/client/professional-profile">
                      Ver Perfil Completo
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Nutricionistas */}
        <TabsContent value="nutritionist" className="space-y-6">
          <div className="bg-muted/40 border rounded-lg p-4 flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-medium">Plano Gratuito</h3>
              <p className="text-sm text-muted-foreground">
                Você pode contratar 1 nutricionista no plano gratuito. Faça upgrade para contratar mais.
              </p>
            </div>
            <Button variant="default">Liberar Mais Nutricionistas</Button>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-16 w-16 border-2 border-primary/10">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Ana Paula Silva" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle>Ana Paula Silva</CardTitle>
                        <BadgeCheck className="h-5 w-5 text-primary" />
                      </div>
                      <CardDescription>Nutricionista esportiva e funcional</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.7</span>
                    <span className="text-sm text-muted-foreground">(56)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-3">
                  <p className="text-sm">
                    Nutricionista com foco em nutrição esportiva e funcional. Especialista em elaboração de planos
                    alimentares personalizados para atletas e praticantes de atividade física, visando melhora de
                    performance e composição corporal.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary">Nutrição Esportiva</Badge>
                    <Badge variant="secondary">Emagrecimento</Badge>
                    <Badge variant="secondary">Suplementação</Badge>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Atendimento presencial e online
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> Disponível ter-sáb, 8h às 18h
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 pt-0 sm:flex-row">
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://instagram.com/anapaula.nutri" target="_blank">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://wa.me/5511999999999" target="_blank">
                      <WhatsApp className="h-4 w-4" />
                      <span className="sr-only">WhatsApp</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="/client/chat?id=nutritionist-1">
                      <MessageSquare className="h-4 w-4" />
                      <span className="sr-only">Chat</span>
                    </Link>
                  </Button>
                </div>
                <div className="flex gap-2 ml-auto">
                  <Button variant="default" asChild>
                    <Link href="/client/search/nutritionist/1">
                      Ver Perfil Completo
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
