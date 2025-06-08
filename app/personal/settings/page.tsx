"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Camera,
  CreditCard,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Smartphone,
  Wallet,
  Plus,
  Sun,
  Moon,
  Laptop,
  Shield,
  User,
} from "lucide-react"

export default function PersonalSettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">Gerencie suas preferências e informações da conta</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-6 lg:w-[800px]">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="account">Conta</TabsTrigger>
          <TabsTrigger value="professional">Profissional</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="billing">Pagamentos</TabsTrigger>
          <TabsTrigger value="appearance">Aparência</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Perfil</CardTitle>
              <CardDescription>Atualize suas informações pessoais e de contato</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-24 w-24 border">
                    <AvatarImage src="/placeholder.svg" alt="João Paulo Silva" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    Alterar Foto
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" defaultValue="João Paulo Silva" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Nome de Usuário</Label>
                      <Input id="username" defaultValue="joao.personal" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="joao.silva@exemplo.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" type="tel" defaultValue="(11) 98765-4321" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografia Profissional</Label>
                    <Textarea
                      id="bio"
                      defaultValue="Personal Trainer especializado em hipertrofia e emagrecimento, com mais de 10 anos de experiência."
                      rows={4}
                    />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Redes Sociais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="instagram" className="flex items-center gap-2">
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </Label>
                    <Input id="instagram" defaultValue="@joao.personal" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="facebook" className="flex items-center gap-2">
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Label>
                    <Input id="facebook" defaultValue="joao.personal" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Salvar Alterações</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Dados de Acesso
              </CardTitle>
              <CardDescription>Gerencie suas credenciais de acesso e informações de segurança</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Senha Atual</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username-change">Nome de Usuário</Label>
                  <Input id="username-change" defaultValue="joao.personal" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nova Senha</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" defaultValue="123.456.789-00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ (Opcional)</Label>
                  <Input id="cnpj" placeholder="00.000.000/0000-00" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Switch id="two-factor" />
                  <Label htmlFor="two-factor">Ativar autenticação de dois fatores</Label>
                </div>
                <Button variant="link" className="text-primary">
                  Configurar
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Atualizar Dados</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="professional" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Informações Profissionais
              </CardTitle>
              <CardDescription>Configure suas informações profissionais e certificações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cref">Registro CREF</Label>
                  <Input id="cref" defaultValue="123456-G/SP" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialty">Especialidade Principal</Label>
                  <Select defaultValue="personal">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione sua especialidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal Trainer</SelectItem>
                      <SelectItem value="crossfit">CrossFit</SelectItem>
                      <SelectItem value="pilates">Pilates</SelectItem>
                      <SelectItem value="yoga">Yoga</SelectItem>
                      <SelectItem value="funcional">Treinamento Funcional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="certifications">Certificações</Label>
                <Textarea
                  id="certifications"
                  defaultValue="Certificação CrossFit Level 2&#10;Especialista em Treinamento Funcional&#10;Certificação em Nutrição Esportiva - ACSM"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Anos de Experiência</Label>
                <Select defaultValue="10+">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1-2 anos</SelectItem>
                    <SelectItem value="3-5">3-5 anos</SelectItem>
                    <SelectItem value="6-10">6-10 anos</SelectItem>
                    <SelectItem value="10+">Mais de 10 anos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Localização de Atendimento</Label>
                <Input id="location" defaultValue="São Paulo, SP" />
              </div>
              <div className="space-y-2">
                <Label>Especialidades</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge>Musculação</Badge>
                  <Badge>Perda de peso</Badge>
                  <Badge>Hipertrofia</Badge>
                  <Badge>Funcional</Badge>
                  <Badge>Crossfit</Badge>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Salvar Informações</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificação</CardTitle>
              <CardDescription>Escolha como e quando deseja ser notificado</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Canais de Notificação</h3>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="email-notifications">Notificações por Email</Label>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="push-notifications">Notificações Push</Label>
                    </div>
                    <Switch id="push-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="sms-notifications">Notificações por SMS</Label>
                    </div>
                    <Switch id="sms-notifications" />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Tipos de Notificação</h3>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Novos Alunos</p>
                      <p className="text-sm text-muted-foreground">Quando um novo aluno se inscrever</p>
                    </div>
                    <Switch id="new-students" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Agendamentos</p>
                      <p className="text-sm text-muted-foreground">Lembretes de sessões agendadas</p>
                    </div>
                    <Switch id="schedule-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Pagamentos</p>
                      <p className="text-sm text-muted-foreground">Confirmações de pagamento recebido</p>
                    </div>
                    <Switch id="payment-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Mensagens</p>
                      <p className="text-sm text-muted-foreground">Novas mensagens de alunos</p>
                    </div>
                    <Switch id="message-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing</p>
                      <p className="text-sm text-muted-foreground">Novidades e promoções da plataforma</p>
                    </div>
                    <Switch id="marketing-notifications" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Restaurar Padrões</Button>
              <Button>Salvar Preferências</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Métodos de Pagamento</CardTitle>
              <CardDescription>Gerencie seus cartões e métodos de pagamento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-8 bg-muted rounded flex items-center justify-center">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Expira em 12/2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>Padrão</Badge>
                    <Button variant="ghost" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-8 bg-muted rounded flex items-center justify-center">
                      <Wallet className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Pix</p>
                      <p className="text-sm text-muted-foreground">joao.silva@exemplo.com</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Editar
                  </Button>
                </div>
                <Button variant="outline" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Método de Pagamento
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Recebimentos</CardTitle>
              <CardDescription>Visualize seus recebimentos recentes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "REC-001",
                    date: "10/05/2023",
                    amount: "R$ 120,00",
                    status: "Recebido",
                    description: "Sessão Personal - Maria Costa",
                  },
                  {
                    id: "REC-002",
                    date: "09/05/2023",
                    amount: "R$ 300,00",
                    status: "Recebido",
                    description: "Consultoria Online - Rafael Santos",
                  },
                  {
                    id: "REC-003",
                    date: "08/05/2023",
                    amount: "R$ 150,00",
                    status: "Recebido",
                    description: "Avaliação Física - Luciana Mendes",
                  },
                ].map((payment, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{payment.description}</p>
                      <p className="text-sm text-muted-foreground">
                        {payment.date} • {payment.id}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-green-600">
                        {payment.status}
                      </Badge>
                      <p className="font-medium">{payment.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver Todos os Recebimentos
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Aparência</CardTitle>
              <CardDescription>Personalize a aparência do aplicativo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Tema</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="justify-start">
                    <Sun className="h-4 w-4 mr-2" />
                    Claro
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Moon className="h-4 w-4 mr-2" />
                    Escuro
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Laptop className="h-4 w-4 mr-2" />
                    Sistema
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Cor Principal</Label>
                <div className="grid grid-cols-6 gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary border-2 border-primary cursor-pointer" />
                  <div className="w-8 h-8 rounded-full bg-red-500 cursor-pointer" />
                  <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer" />
                  <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer" />
                  <div className="w-8 h-8 rounded-full bg-purple-500 cursor-pointer" />
                  <div className="w-8 h-8 rounded-full bg-orange-500 cursor-pointer" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Switch id="reduce-motion" />
                  <Label htmlFor="reduce-motion">Reduzir Animações</Label>
                </div>
                <p className="text-sm text-muted-foreground">Para melhor acessibilidade</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Switch id="large-text" />
                  <Label htmlFor="large-text">Texto Grande</Label>
                </div>
                <p className="text-sm text-muted-foreground">Aumenta o tamanho do texto</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Restaurar Padrões</Button>
              <Button>Salvar Preferências</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
