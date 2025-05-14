import { CardDescription } from "@/components/ui/card"
import { SendIcon, PaperclipIcon, ImageIcon, MicIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function PersonalChatPage() {
  // Dados simulados de contatos e mensagens
  const contacts = [
    {
      id: 1,
      name: "Carlos Silva",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Vou começar a dieta hoje",
      time: "10:30",
      unread: 0,
      online: true,
    },
    {
      id: 2,
      name: "Mariana Costa",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "você é uma profissional top!",
      time: "09:15",
      unread: 2,
      online: false,
    },
    {
      id: 3,
      name: "Pedro Alves",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Preciso remarcar a sessão de amanhã",
      time: "Ontem",
      unread: 0,
      online: true,
    },
    {
      id: 4,
      name: "Juliana Mendes",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Você viu meu progresso?",
      time: "Ontem",
      unread: 0,
      online: false,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "me",
      content: "Bom dia, Carlos! está bebendo a quantidade de agua ideal?",
      time: "09:30",
    },
    {
      id: 2,
      sender: "other",
      content: "Bom dia, nutri! Estou me hitratando sim.",
      time: "09:45",
    },
    {
      id: 3,
      sender: "me",
      content:
        "Muito bem, continue assim e terá resultados incriveis.",
      time: "09:47",
    },
    {
      id: 4,
      sender: "other",
      content: "Comprei legumes frescos, vou começar minha alimentação",
      time: "10:30",
    },
  ]

  return (
    <div className="p-6 h-[calc(100vh-4rem)]">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Chat</h1>
          <p className="text-muted-foreground">Converse com seus pacientes e acompanhe seu progresso</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 h-[calc(100%-5rem)]">
          <Card className="md:col-span-1 flex flex-col">
            <CardHeader>
              <CardTitle>Conversas</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-0">
              <Tabs defaultValue="all" className="px-4">
                <TabsList className="mb-4 w-full">
                  <TabsTrigger value="all" className="flex-1">
                    Todos
                  </TabsTrigger>
                  <TabsTrigger value="unread" className="flex-1">
                    Não lidos
                  </TabsTrigger>
                  <TabsTrigger value="online" className="flex-1">
                    Online
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-0 m-0">
                  {contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className={`flex items-center gap-3 p-4 hover:bg-muted cursor-pointer border-b ${contact.id === 1 ? "bg-muted" : ""}`}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                          <AvatarFallback>{contact.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        {contact.online && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium truncate">{contact.name}</h4>
                          <span className="text-xs text-muted-foreground">{contact.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                      </div>
                      {contact.unread > 0 && (
                        <Badge className="bg-[#1b4040] hover:bg-[#143030] h-5 w-5 flex items-center justify-center rounded-full p-0">
                          {contact.unread}
                        </Badge>
                      )}
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="unread" className="space-y-0 m-0">
                  {contacts
                    .filter((c) => c.unread > 0)
                    .map((contact) => (
                      <div
                        key={contact.id}
                        className="flex items-center gap-3 p-4 hover:bg-muted cursor-pointer border-b"
                      >
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                            <AvatarFallback>{contact.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          {contact.online && (
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium truncate">{contact.name}</h4>
                            <span className="text-xs text-muted-foreground">{contact.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                        </div>
                        <Badge className="bg-[#1b4040] hover:bg-[#143030] h-5 w-5 flex items-center justify-center rounded-full p-0">
                          {contact.unread}
                        </Badge>
                      </div>
                    ))}
                </TabsContent>

                <TabsContent value="online" className="space-y-0 m-0">
                  {contacts
                    .filter((c) => c.online)
                    .map((contact) => (
                      <div
                        key={contact.id}
                        className="flex items-center gap-3 p-4 hover:bg-muted cursor-pointer border-b"
                      >
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                            <AvatarFallback>{contact.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium truncate">{contact.name}</h4>
                            <span className="text-xs text-muted-foreground">{contact.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                        </div>
                        {contact.unread > 0 && (
                          <Badge className="bg-[#1b4040] hover:bg-[#143030] h-5 w-5 flex items-center justify-center rounded-full p-0">
                            {contact.unread}
                          </Badge>
                        )}
                      </div>
                    ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 flex flex-col">
            <CardHeader className="border-b">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={contacts[0].avatar || "/placeholder.svg"} alt={contacts[0].name} />
                  <AvatarFallback>{contacts[0].name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{contacts[0].name}</CardTitle>
                  <CardDescription>
                    {contacts[0].online ? (
                      <span className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                        Online
                      </span>
                    ) : (
                      "Offline"
                    )}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "me" ? "bg-[#1b4040] text-white rounded-tr-none" : "bg-muted rounded-tl-none"
                    }`}
                  >
                    <p>{message.content}</p>
                    <p
                      className={`text-xs mt-1 ${message.sender === "me" ? "text-gray-300" : "text-muted-foreground"}`}
                    >
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <PaperclipIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ImageIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <MicIcon className="h-4 w-4" />
                </Button>
                <Input placeholder="Digite sua mensagem..." className="flex-1" />
                <Button size="icon" className="bg-[#1b4040] hover:bg-[#143030]">
                  <SendIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
