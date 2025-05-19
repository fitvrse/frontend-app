import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Users, Apple, User } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">FitConnect</h1>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Cadastrar</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Conectando academias, profissionais e alunos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Uma plataforma completa para gestão fitness, prescrição de treinos, acompanhamento nutricional e evolução de
            resultados.
          </p>
          <Button size="lg" asChild>
            <Link href="/register">Comece agora</Link>
          </Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Dumbbell className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Para Academias</CardTitle>
              <CardDescription>Gerencie seu negócio com eficiência</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Gestão completa de alunos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Controle financeiro e fluxo de caixa</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Agendamento e controle de acesso</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Relatórios e Business Intelligence</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/register?type=gym">Saiba mais</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Para Personal Trainers</CardTitle>
              <CardDescription>Potencialize seu trabalho com seus alunos</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Gestão de alunos vinculados</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Prescrição de treinos personalizados</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Monitoramento em tempo real</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Agenda e comunicação integrada</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/register?type=personal">Saiba mais</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Apple className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Para Nutricionistas</CardTitle>
              <CardDescription>Acompanhe seus pacientes de forma eficiente</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Gestão de pacientes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Prescrição de planos alimentares</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Acompanhamento em tempo real</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Integração com personal trainers</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/register?type=nutritionist">Saiba mais</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Para Alunos/Clientes</CardTitle>
              <CardDescription>Acompanhe sua evolução e resultados</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Busca de academias e profissionais</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Controle de treinos e dietas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Acompanhamento de evolução</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Gamificação e recompensas</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/register?type=client">Saiba mais</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Como funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cadastre-se</h3>
              <p className="text-muted-foreground">Escolha seu perfil: academia, personal, nutricionista ou aluno</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Conecte-se</h3>
              <p className="text-muted-foreground">Vincule-se a outros profissionais e alunos na plataforma</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Gerencie</h3>
              <p className="text-muted-foreground">Utilize as ferramentas específicas para seu perfil</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-primary">FitConnect</h2>
              <p className="text-muted-foreground">Conectando academias, profissionais e alunos</p>
            </div>
            <div className="flex gap-8">
              <div>
                <h3 className="font-semibold mb-2">Plataforma</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Recursos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Preços
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Suporte
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Empresa</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Sobre
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Legal</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Termos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Privacidade
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} FitConnect. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
