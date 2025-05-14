import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, ImageIcon, Paperclip, Plus, Search, Send, Smile, User, Users } from "lucide-react"

export default function ChatPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex flex-col gap-2 p-4 md:p-6">
        <h1 className="text-3xl font-bold tracking-tight">Chat</h1>
        <p className="text-muted-foreground">Comunique-se com profissionais e alunos</p>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:flex flex-col w-80 border-r">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar conversas..." className="pl-8" />
            </div>
          </div>
          <Tabs defaultValue="all" className="flex-1">
            <div className="px-4 py-2 border-b">
              <TabsList className="w-full">
                <TabsTrigger value="all" className="flex-1">
                  Todos
                </TabsTrigger>
                <TabsTrigger value="unread" className="flex-1">
                  Não lidos
                </TabsTrigger>
                <TabsTrigger value="groups" className="flex-1">
                  Grupos
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="flex-1 p-0">
              <ScrollArea className="h-[calc(100vh-13rem)]">
                <div className="space-y-1 p-2">
                  {[
                    {
                      name: "João Silva",
                      avatar: "JS",
                      role: "Personal Trainer",
                      message: "Vamos aumentar a carga no supino hoje?",
                      time: "10:30",
                      unread: true,
                    },
                    {
                      name: "Dra. Mariana Costa",
                      avatar: "MC",
                      role: "Nutricionista",
                      message: "Lembre-se de registrar suas refeições hoje",
                      time: "09:15",
                      unread: false,
                    },
                    {
                      name: "Academia Fitness Center",
                      avatar: "FC",
                      role: "Academia",
                      message: "Sua mensalidade vence em 3 dias",
                      time: "Ontem",
                      unread: true,
                    },
                    {
                      name: "Carlos Santos",
                      avatar: "CS",
                      role: "Aluno",
                      message: "Obrigado pelas dicas de treino!",
                      time: "Ontem",
                      unread: false,
                    },
                    {
                      name: "Ana Oliveira",
                      avatar: "AO",
                      role: "Aluna",
                      message: "Preciso remarcar minha avaliação",
                      time: "Seg",
                      unread: false,
                    },
                    {
                      name: "Equipe de Instrutores",
                      avatar: "EI",
                      role: "Grupo",
                      message: "Reunião confirmada para sexta-feira",
                      time: "Seg",
                      unread: false,
                    },
                    {
                      name: "Pedro Santos",
                      avatar: "PS",
                      role: "Aluno",
                      message: "Como faço para agendar uma aula?",
                      time: "Dom",
                      unread: false,
                    },
                    {
                      name: "Juliana Lima",
                      avatar: "JL",
                      role: "Aluna",
                      message: "Já estou me sentindo melhor!",
                      time: "25/04",
                      unread: false,
                    },
                  ].map((chat, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 rounded-lg p-2 cursor-pointer ${
                        i === 0 ? "bg-muted" : "hover:bg-muted/50"
                      }`}
                    >
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage src="/placeholder.svg" alt={chat.name} />
                        <AvatarFallback>{chat.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{chat.name}</div>
                          <div className="text-xs text-muted-foreground">{chat.time}</div>
                        </div>
                        <div className="text-xs text-muted-foreground">{chat.role}</div>
                        <div className="text-sm truncate">{chat.message}</div>
                      </div>
                      {chat.unread && <div className="w-2 h-2 rounded-full bg-primary"></div>}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="unread" className="flex-1 p-0">
              <ScrollArea className="h-[calc(100vh-13rem)]">
                <div className="space-y-1 p-2">
                  {[
                    {
                      name: "João Silva",
                      avatar: "JS",
                      role: "Personal Trainer",
                      message: "Vamos aumentar a carga no supino hoje?",
                      time: "10:30",
                      unread: true,
                    },
                    {
                      name: "Academia Fitness Center",
                      avatar: "FC",
                      role: "Academia",
                      message: "Sua mensalidade vence em 3 dias",
                      time: "Ontem",
                      unread: true,
                    },
                  ].map((chat, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 rounded-lg p-2 cursor-pointer ${
                        i === 0 ? "bg-muted" : "hover:bg-muted/50"
                      }`}
                    >
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage src="/placeholder.svg" alt={chat.name} />
                        <AvatarFallback>{chat.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{chat.name}</div>
                          <div className="text-xs text-muted-foreground">{chat.time}</div>
                        </div>
                        <div className="text-xs text-muted-foreground">{chat.role}</div>
                        <div className="text-sm truncate">{chat.message}</div>
                      </div>
                      {chat.unread && <div className="w-2 h-2 rounded-full bg-primary"></div>}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="groups" className="flex-1 p-0">
              <ScrollArea className="h-[calc(100vh-13rem)]">
                <div className="space-y-1 p-2">
                  {[
                    {
                      name: "Equipe de Instrutores",
                      avatar: "EI",
                      role: "Grupo",
                      message: "Reunião confirmada para sexta-feira",
                      time: "Seg",
                      unread: false,
                      members: 8,
                    },
                    {
                      name: "Turma de Spinning",
                      avatar: "TS",
                      role: "Grupo",
                      message: "Aula extra confirmada para sábado",
                      time: "20/04",
                      unread: false,
                      members: 15,
                    },
                    {
                      name: "Desafio Emagrecimento",
                      avatar: "DE",
                      role: "Grupo",
                      message: "Parabéns a todos pelos resultados!",
                      time: "15/04",
                      unread: false,
                      members: 12,
                    },
                  ].map((chat, i) => (
                    <div key={i} className={`flex items-center gap-3 rounded-lg p-2 cursor-pointer hover:bg-muted/50`}>
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage src="/placeholder.svg" alt={chat.name} />
                        <AvatarFallback>{chat.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{chat.name}</div>
                          <div className="text-xs text-muted-foreground">{chat.time}</div>
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          <span>{chat.members} membros</span>
                        </div>
                        <div className="text-sm truncate">{chat.message}</div>
                      </div>
                      {chat.unread && <div className="w-2 h-2 rounded-full bg-primary"></div>}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
          <div className="p-4 border-t">
            <Button className="w-full" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Nova Conversa
            </Button>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-4 p-4 border-b">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src="/placeholder.svg" alt="João Silva" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium">João Silva</div>
              <div className="text-xs text-muted-foreground">Personal Trainer • Online</div>
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Ver perfil</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <ChevronDown className="h-5 w-5" />
              <span className="sr-only">Mais opções</span>
            </Button>
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">Hoje</div>
              </div>
              <div className="flex items-start gap-3 max-w-[80%]">
                <Avatar className="h-8 w-8 border">
                  <AvatarImage src="/placeholder.svg" alt="João Silva" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p>Bom dia! Como está se sentindo após o treino de ontem?</p>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">09:15</div>
                </div>
              </div>
              <div className="flex items-start gap-3 max-w-[80%] ml-auto flex-row-reverse">
                <Avatar className="h-8 w-8 border">
                  <AvatarImage src="/placeholder.svg" alt="Você" />
                  <AvatarFallback>EU</AvatarFallback>
                </Avatar>
                <div>
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <p>Bom dia! Estou bem, senti um pouco de dor muscular nas pernas, mas nada demais.</p>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 text-right">09:30</div>
                </div>
              </div>
              <div className="flex items-start gap-3 max-w-[80%]">
                <Avatar className="h-8 w-8 border">
                  <AvatarImage src="/placeholder.svg" alt="João Silva" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p>
                      É normal sentir um pouco de dor muscular após o treino de pernas. Isso indica que o músculo está
                      se recuperando e ficando mais forte.
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">09:45</div>
                </div>
              </div>
              <div className="flex items-start gap-3 max-w-[80%]">
                <Avatar className="h-8 w-8 border">
                  <AvatarImage src="/placeholder.svg" alt="João Silva" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p>
                      Para o treino de hoje, vamos aumentar a carga no supino? Você tem progredido bem nas últimas
                      semanas.
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">10:30</div>
                </div>
              </div>
            </div>
          </ScrollArea>
          <Separator />
          <div className="p-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Paperclip className="h-4 w-4" />
                <span className="sr-only">Anexar arquivo</span>
              </Button>
              <Button variant="outline" size="icon">
                <ImageIcon className="h-4 w-4" />
                <span className="sr-only">Enviar imagem</span>
              </Button>
              <div className="relative flex-1">
                <Input placeholder="Digite sua mensagem..." className="pr-10" />
                <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                  <Smile className="h-4 w-4" />
                  <span className="sr-only">Emojis</span>
                </Button>
              </div>
              <Button size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Enviar</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
