"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Dumbbell, Apple, Building2 } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">Fitness App</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plataforma completa para gestão de academias, personal trainers e nutricionistas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Cliente</CardTitle>
              <CardDescription>Acesse seus treinos e acompanhe seu progresso</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/client/dashboard">
                <Button className="w-full">Acessar</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Dumbbell className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Personal Trainer</CardTitle>
              <CardDescription>Gerencie alunos e crie treinos personalizados</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/personal/dashboard">
                <Button className="w-full">Acessar</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Apple className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Nutricionista</CardTitle>
              <CardDescription>Crie planos alimentares e acompanhe pacientes</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/nutritionist/dashboard">
                <Button className="w-full">Acessar</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Academia</CardTitle>
              <CardDescription>Administre sua academia e gerencie alunos</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/gym/dashboard">
                <Button className="w-full">Acessar</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button variant="outline" size="lg">
                Fazer Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="lg">Criar Conta</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
