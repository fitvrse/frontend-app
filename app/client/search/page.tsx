import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ArrowRight,
  BadgeCheck,
  Filter,
  Heart,
  MapPin,
  MessageSquare,
  SearchIcon,
  SlidersHorizontal,
  Star,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ClientSearchPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Buscar</h1>
        <p className="text-muted-foreground">Encontre academias, personal trainers e nutricionistas</p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="relative w-full md:w-96">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar por nome, especialidade ou localização..." className="pl-8 w-full" />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filtrar
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Distância</DropdownMenuItem>
              <DropdownMenuItem>Avaliação</DropdownMenuItem>
              <DropdownMenuItem>Preço</DropdownMenuItem>
              <DropdownMenuItem>Serviços</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="sm">
            <MapPin className="mr-2 h-4 w-4" />
            Próximos
          </Button>
          <Button variant="outline" size="sm">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Ordenar
          </Button>
        </div>
      </div>

      <Tabs defaultValue="gyms" className="space-y-4">
        <TabsList>
          <TabsTrigger value="gyms">Academias</TabsTrigger>
          <TabsTrigger value="trainers">Personal Trainers</TabsTrigger>
          <TabsTrigger value="nutritionists">Nutricionistas</TabsTrigger>
          <TabsTrigger value="favorites">Favoritos</TabsTrigger>
        </TabsList>
        <TabsContent value="gyms" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Academia Fitness Center",
                rating: 4.8,
                reviews: 124,
                distance: "1.2 km",
                status: "Aberto",
                crowded: "Pouco movimentado",
                price: "$$",
                services: ["Musculação", "Crossfit", "Pilates", "Natação"],
                verified: true,
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Power Gym",
                rating: 4.5,
                reviews: 98,
                distance: "2.5 km",
                status: "Aberto",
                crowded: "Movimentado",
                price: "$",
                services: ["Musculação", "Funcional", "Spinning"],
                verified: false,
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Elite Training Center",
                rating: 4.9,
                reviews: 156,
                distance: "3.8 km",
                status: "Aberto",
                crowded: "Lotado",
                price: "$$$",
                services: ["Musculação", "Crossfit", "Boxe", "Yoga"],
                verified: true,
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Wellness Club",
                rating: 4.7,
                reviews: 87,
                distance: "4.2 km",
                status: "Aberto",
                crowded: "Pouco movimentado",
                price: "$$",
                services: ["Musculação", "Pilates", "Yoga", "Spa"],
                verified: false,
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Strong Academy",
                rating: 4.6,
                reviews: 112,
                distance: "5.0 km",
                status: "Fechado",
                crowded: "Fechado",
                price: "$$",
                services: ["Musculação", "Funcional", "Lutas", "Dança"],
                verified: true,
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Fit Life Gym",
                rating: 4.4,
                reviews: 76,
                distance: "5.5 km",
                status: "Aberto",
                crowded: "Movimentado",
                price: "$",
                services: ["Musculação", "Aeróbica", "Spinning"],
                verified: false,
                avatar: "/placeholder.svg?height=80&width=80",
              },
            ].map((gym, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage src={gym.avatar || "/placeholder.svg"} alt={gym.name} />
                        <AvatarFallback>{gym.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center">
                          <CardTitle className="text-base">{gym.name}</CardTitle>
                          {gym.verified && <BadgeCheck className="ml-1 h-4 w-4 text-primary" />}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardDescription className="flex items-center">
                    <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                    <span>{gym.rating}</span>
                    <span className="mx-1">•</span>
                    <span>{gym.reviews} avaliações</span>
                    <span className="mx-1">•</span>
                    <MapPin className="mx-1 h-3 w-3" />
                    <span>{gym.distance}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={gym.status === "Aberto" ? "default" : "secondary"} className="text-xs">
                      {gym.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {gym.crowded}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {gym.price}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {gym.services.map((service, j) => (
                      <Badge key={j} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contato
                  </Button>
                  <Button size="sm">Ver Perfil</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="trainers" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "João Silva",
                specialty: "Hipertrofia e Emagrecimento",
                rating: 4.9,
                reviews: 87,
                distance: "2.3 km",
                price: "$$",
                availability: "Disponível",
                experience: "8 anos",
                verified: true,
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Ana Oliveira",
                specialty: "Funcional e HIIT",
                rating: 4.8,
                reviews: 65,
                distance: "3.1 km",
                price: "$$$",
                availability: "Lista de espera",
                experience: "10 anos",
                verified: true,
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Carlos Santos",
                specialty: "Reabilitação e Idosos",
                rating: 4.7,
                reviews: 54,
                distance: "1.8 km",
                price: "$$",
                availability: "Disponível",
                experience: "12 anos",
                verified: false,
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Fernanda Costa",
                specialty: "Crossfit e Força",
                rating: 4.9,
                reviews: 92,
                distance: "4.5 km",
                price: "$$$",
                availability: "Disponível",
                experience: "7 anos",
                verified: true,
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Ricardo Almeida",
                specialty: "Musculação e Nutrição Esportiva",
                rating: 4.6,
                reviews: 48,
                distance: "3.7 km",
                price: "$$",
                availability: "Disponível",
                experience: "5 anos",
                verified: false,
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Juliana Mendes",
                specialty: "Pilates e Yoga",
                rating: 4.8,
                reviews: 73,
                distance: "2.9 km",
                price: "$$",
                availability: "Lista de espera",
                experience: "9 anos",
                verified: true,
                avatar: "/placeholder.svg?height=80&width=80",
              },
            ].map((trainer, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 border">
                      <AvatarImage src={trainer.avatar || "/placeholder.svg"} alt={trainer.name} />
                      <AvatarFallback>{trainer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <CardTitle className="text-base">{trainer.name}</CardTitle>
                          {trainer.verified && <BadgeCheck className="ml-1 h-4 w-4 text-primary" />}
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <CardDescription>{trainer.specialty}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center mb-2">
                    <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                    <span className="text-sm">{trainer.rating}</span>
                    <span className="mx-1 text-sm">•</span>
                    <span className="text-sm">{trainer.reviews} avaliações</span>
                    <span className="mx-1 text-sm">•</span>
                    <MapPin className="mx-1 h-3 w-3" />
                    <span className="text-sm">{trainer.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant={trainer.availability === "Disponível" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {trainer.availability}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {trainer.price}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {trainer.experience}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contato
                  </Button>
                  <Button size="sm">Ver Perfil</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="nutritionists" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Dra. Mariana Costa",
                specialty: "Nutrição Esportiva",
                rating: 4.9,
                reviews: 76,
                distance: "3.2 km",
                price: "$$$",
                availability: "Disponível",
                experience: "10 anos",
                verified: true,
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Dr. Felipe Mendes",
                specialty: "Emagrecimento e Reeducação Alimentar",
                rating: 4.7,
                reviews: 58,
                distance: "2.5 km",
                price: "$$",
                availability: "Disponível",
                experience: "8 anos",
                verified: false,
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Dra. Camila Rocha",
                specialty: "Nutrição Clínica e Funcional",
                rating: 4.8,
                reviews: 64,
                distance: "4.1 km",
                price: "$$$",
                availability: "Lista de espera",
                experience: "12 anos",
                verified: true,
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Dr. Lucas Ferreira",
                specialty: "Nutrição Vegetariana e Vegana",
                rating: 4.6,
                reviews: 42,
                distance: "3.8 km",
                price: "$$",
                availability: "Disponível",
                experience: "6 anos",
                verified: false,
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Dra. Beatriz Santos",
                specialty: "Nutrição Materno-Infantil",
                rating: 4.8,
                reviews: 53,
                distance: "5.2 km",
                price: "$$",
                availability: "Disponível",
                experience: "9 anos",
                verified: true,
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Dr. Rodrigo Lima",
                specialty: "Nutrição para Hipertrofia",
                rating: 4.7,
                reviews: 49,
                distance: "2.9 km",
                price: "$$$",
                availability: "Lista de espera",
                experience: "7 anos",
                verified: false,
                avatar: "/placeholder.svg?height=80&width=80",
              },
            ].map((nutritionist, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 border">
                      <AvatarImage src={nutritionist.avatar || "/placeholder.svg"} alt={nutritionist.name} />
                      <AvatarFallback>{nutritionist.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <CardTitle className="text-base">{nutritionist.name}</CardTitle>
                          {nutritionist.verified && <BadgeCheck className="ml-1 h-4 w-4 text-primary" />}
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <CardDescription>{nutritionist.specialty}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center mb-2">
                    <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                    <span className="text-sm">{nutritionist.rating}</span>
                    <span className="mx-1 text-sm">•</span>
                    <span className="text-sm">{nutritionist.reviews} avaliações</span>
                    <span className="mx-1 text-sm">•</span>
                    <MapPin className="mx-1 h-3 w-3" />
                    <span className="text-sm">{nutritionist.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant={nutritionist.availability === "Disponível" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {nutritionist.availability}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {nutritionist.price}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {nutritionist.experience}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contato
                  </Button>
                  <Button size="sm">Ver Perfil</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="favorites" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Seus Favoritos</CardTitle>
              <CardDescription>Academias, personal trainers e nutricionistas que você salvou</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Academias</h3>
                  {[
                    {
                      name: "Academia Fitness Center",
                      type: "Academia",
                      rating: 4.8,
                      distance: "1.2 km",
                      verified: true,
                      avatar: "/placeholder.svg?height=80&width=80",
                    },
                    {
                      name: "Elite Training Center",
                      type: "Academia",
                      rating: 4.9,
                      distance: "3.8 km",
                      verified: true,
                      avatar: "/placeholder.svg?height=80&width=80",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10 border">
                          <AvatarImage src={item.avatar || "/placeholder.svg"} alt={item.name} />
                          <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium flex items-center">
                            {item.name}
                            {item.verified && <BadgeCheck className="ml-1 h-4 w-4 text-primary" />}
                          </div>
                          <div className="text-xs text-muted-foreground flex items-center">
                            <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                            {item.rating} • {item.distance}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Personal Trainers</h3>
                  {[
                    {
                      name: "João Silva",
                      type: "Personal",
                      rating: 4.9,
                      distance: "2.3 km",
                      verified: true,
                      avatar: "/placeholder.svg?height=80&width=80",
                    },
                    {
                      name: "Fernanda Costa",
                      type: "Personal",
                      rating: 4.9,
                      distance: "4.5 km",
                      verified: false,
                      avatar: "/placeholder.svg?height=80&width=80",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10 border">
                          <AvatarImage src={item.avatar || "/placeholder.svg"} alt={item.name} />
                          <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium flex items-center">
                            {item.name}
                            {item.verified && <BadgeCheck className="ml-1 h-4 w-4 text-primary" />}
                          </div>
                          <div className="text-xs text-muted-foreground flex items-center">
                            <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                            {item.rating} • {item.distance}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Nutricionistas</h3>
                  {[
                    {
                      name: "Dra. Mariana Costa",
                      type: "Nutricionista",
                      rating: 4.9,
                      distance: "3.2 km",
                      verified: true,
                      avatar: "/placeholder.svg?height=80&width=80",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10 border">
                          <AvatarImage src={item.avatar || "/placeholder.svg"} alt={item.name} />
                          <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium flex items-center">
                            {item.name}
                            {item.verified && <BadgeCheck className="ml-1 h-4 w-4 text-primary" />}
                          </div>
                          <div className="text-xs text-muted-foreground flex items-center">
                            <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                            {item.rating} • {item.distance}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
