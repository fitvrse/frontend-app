import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  AwardIcon,
  ClipboardIcon,
  InstagramIcon,
  FacebookIcon,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function PersonalProfilePage() {
  // Dados simulados do perfil
  const profile = {
    name: "João Carlos",
    avatar: "/placeholder.svg?height=120&width=120",
    title: "Personal Trainer",
    specialties: ["Hipertrofia", "Emagrecimento", "Funcional"],
    bio: "Personal Trainer certificado com mais de 8 anos de experiência. Especialista em transformação corporal e treinamento funcional. Formado em Educação Física pela UFRJ com pós-graduação em Fisiologia do Exercício.",
    email: "joao.carlos@exemplo.com",
    phone: "(21) 98765-4321",
    location: "Rio de Janeiro, RJ",
    certifications: [
      { name: "CREF 012345-G/RJ", year: "2015" },
      { name: "Especialização em Treinamento Funcional", year: "2017" },
      { name: "Certificação em Nutrição Esportiva", year: "2019" },
    ],
    experience: [
      { position: "Personal Trainer", company: "Academia Elite", period: "2018 - Presente" },
      { position: "Instrutor de Musculação", company: "Fitness Center", period: "2015 - 2018" },
    ],
    social: {
      instagram: "@joaocarlos.personal",
      facebook: "joaocarlos.personal",
    },
    stats: {
      students: 18,
      sessions: 245,
      rating: 4.8,
    },
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Meu Perfil</h1>
        <p className="text-muted-foreground">Gerencie suas informações profissionais e visibilidade</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-32 w-32 mb-4">
                <AvatarImage src={profile.avatar || "/placeholder.svg"} alt={profile.name} />
                <AvatarFallback>{profile.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <p className="text-muted-foreground">{profile.title}</p>

              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {profile.specialties.map((specialty, index) => (
                  <Badge key={index} className="bg-[#1b4040] hover:bg-[#143030]">
                    {specialty}
                  </Badge>
                ))}
              </div>

              <div className="w-full mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <MailIcon className="h-5 w-5 text-[#1b4040]" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-[#1b4040]" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPinIcon className="h-5 w-5 text-[#1b4040]" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <InstagramIcon className="h-5 w-5 text-[#1b4040]" />
                  <span>{profile.social.instagram}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FacebookIcon className="h-5 w-5 text-[#1b4040]" />
                  <span>{profile.social.facebook}</span>
                </div>
              </div>

              <Button className="w-full mt-6 bg-[#1b4040] hover:bg-[#143030]">Editar Perfil</Button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Button asChild>
                  <Link href="/personal/students">Gerenciar Alunos</Link>
                </Button>
                <Button asChild>
                  <Link href="/personal/workouts">Gerenciar Treinos</Link>
                </Button>
                <Button asChild>
                  <Link href="/personal/reports">Ver Relatórios</Link>
                </Button>
                <Button asChild>
                  <Link href="/personal/settings">Configurações</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Estatísticas</CardTitle>
              <CardDescription>Resumo da sua atividade profissional</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <UserIcon className="h-8 w-8 text-[#1b4040] mb-2" />
                  <span className="text-2xl font-bold">{profile.stats.students}</span>
                  <span className="text-sm text-muted-foreground">Alunos Ativos</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <ClipboardIcon className="h-8 w-8 text-[#1b4040] mb-2" />
                  <span className="text-2xl font-bold">{profile.stats.sessions}</span>
                  <span className="text-sm text-muted-foreground">Sessões Realizadas</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <AwardIcon className="h-8 w-8 text-[#1b4040] mb-2" />
                  <span className="text-2xl font-bold">{profile.stats.rating}</span>
                  <span className="text-sm text-muted-foreground">Avaliação Média</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="about">
            <TabsList className="mb-4">
              <TabsTrigger value="about">Sobre</TabsTrigger>
              <TabsTrigger value="certifications">Certificações</TabsTrigger>
              <TabsTrigger value="experience">Experiência</TabsTrigger>
            </TabsList>

            <TabsContent value="about">
              <Card>
                <CardHeader>
                  <CardTitle>Sobre Mim</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{profile.bio}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certifications">
              <Card>
                <CardHeader>
                  <CardTitle>Certificações e Formação</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {profile.certifications.map((cert, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                        <AwardIcon className="h-5 w-5 mt-1 text-[#1b4040]" />
                        <div>
                          <h4 className="font-medium">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">{cert.year}</p>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      Adicionar Certificação
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience">
              <Card>
                <CardHeader>
                  <CardTitle>Experiência Profissional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {profile.experience.map((exp, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                        <div className="h-2 w-2 mt-2 rounded-full bg-[#1b4040]"></div>
                        <div>
                          <h4 className="font-medium">{exp.position}</h4>
                          <p className="text-sm">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.period}</p>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      Adicionar Experiência
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
