"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dumbbell, Users, Apple, User } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("gym")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulação de login - em produção, isso seria uma chamada de API
    console.log("Login com:", { email, password, userType })

    // Redirecionar para o dashboard apropriado
    switch (userType) {
      case "gym":
        router.push("/gym/dashboard")
        break
      case "personal":
        router.push("/personal/dashboard")
        break
      case "nutritionist":
        router.push("/nutritionist/dashboard")
        break
      case "client":
        router.push("/client/dashboard")
        break
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Entrar no FitConnect</CardTitle>
          <CardDescription>Escolha seu tipo de perfil e faça login</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="gym" onValueChange={setUserType}>
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="gym" className="flex flex-col items-center gap-1 py-2">
                <Dumbbell className="h-4 w-4" />
                <span className="text-xs">Academia</span>
              </TabsTrigger>
              <TabsTrigger value="personal" className="flex flex-col items-center gap-1 py-2">
                <Users className="h-4 w-4" />
                <span className="text-xs">Personal</span>
              </TabsTrigger>
              <TabsTrigger value="nutritionist" className="flex flex-col items-center gap-1 py-2">
                <Apple className="h-4 w-4" />
                <span className="text-xs">Nutri</span>
              </TabsTrigger>
              <TabsTrigger value="client" className="flex flex-col items-center gap-1 py-2">
                <User className="h-4 w-4" />
                <span className="text-xs">Aluno</span>
              </TabsTrigger>
            </TabsList>

            {["gym", "personal", "nutritionist", "client"].map((type) => (
              <TabsContent key={type} value={type}>
                <form onSubmit={handleLogin}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="nome@exemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Senha</Label>
                        <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                          Esqueceu a senha?
                        </Link>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Entrar
                    </Button>
                  </div>
                </form>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-sm text-center text-muted-foreground">
            Não tem uma conta?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Cadastre-se
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
