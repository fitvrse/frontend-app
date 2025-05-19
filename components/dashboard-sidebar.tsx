"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Users,
  Calendar,
  DollarSign,
  Dumbbell,
  MessageSquare,
  Settings,
  LogOut,
  Home,
  Wallet,
  Apple,
  LineChart,
  Trophy,
  Search,
  Activity,
  Gauge,
  BarChart,
  Megaphone,
  Wrench,
  UserPlus,
  BookOpen,
  Layers,
  UserCheck,
  ChevronDown,
} from "lucide-react"

interface RouteItem {
  href: string
  label: string
  icon: React.ElementType
}

interface RouteWithSubmenu {
  label: string
  icon: React.ElementType
  submenu: RouteItem[]
}

type Route = RouteItem | RouteWithSubmenu

interface SidebarProps {
  userType: "gym" | "personal" | "nutritionist" | "client"
  isSidebarOpen: boolean
}

export function DashboardSidebar({ userType, isSidebarOpen }: SidebarProps) {
  const pathname = usePathname()
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({})

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  const routes = {
    gym: [
      { href: "/gym/dashboard", label: "Painel", icon: Home },
      { href: "/gym/students", label: "Alunos", icon: Users },
      { href: "/gym/finances", label: "Financeiro", icon: DollarSign },
      { href: "/gym/workouts", label: "Treinos", icon: Dumbbell },
      { href: "/gym/schedule", label: "Agendamento", icon: Calendar },
      { href: "/gym/classes", label: "Aulas Coletivas", icon: Users },
      { href: "/gym/nutrition", label: "Nutrição", icon: Apple },
      { href: "/gym/team", label: "Equipe", icon: UserPlus },
      { href: "/gym/reports", label: "Relatórios", icon: BarChart },
      { href: "/gym/marketing", label: "Marketing", icon: Megaphone },
      { href: "/gym/equipment", label: "Equipamentos", icon: Wrench },
      { href: "/gym/monitoring", label: "Monitoramento", icon: Gauge },
      { href: "/gym/profile", label: "Perfil", icon: Users },
      { href: "/gym/chat", label: "Chat", icon: MessageSquare },
      { href: "/gym/wallet", label: "Carteira", icon: Wallet },
      { href: "/gym/settings", label: "Configurações", icon: Settings },
    ],
    personal: [
      { href: "/personal/dashboard", label: "Painel", icon: Home },
      { href: "/personal/students", label: "Alunos", icon: Users },
      
      {
        label: " Gerenciador de Treinos",
        icon: Dumbbell,
        submenu: [
          { href: "/personal/workouts", label: "Treinos", icon: Dumbbell },
          { href: "/personal/aerobic-training", label: "Treinos Aeróbicos", icon: Activity },
          { href: "/personal/exercises", label: "Exercícios", icon: BookOpen },
          { href: "/personal/training-categories", label: "Categorias", icon: BookOpen },
        ],
      },
      
      { href: "/personal/assessments", label: "Avaliações", icon: Activity },
      { href: "/personal/progress", label: "Progressos", icon: LineChart },
      { href: "/personal/schedule", label: "Agenda", icon: Calendar },
      { href: "/personal/reports", label: "Relatórios", icon: BarChart },
      { href: "/personal/finances", label: "Financeiro", icon: DollarSign },
      { href: "/personal/marketing", label: "Marketing", icon: Megaphone },
      { href: "/personal/wallet", label: "Carteira", icon: Wallet },
      { href: "/personal/settings", label: "Configurações", icon: Settings },
    ],
    nutritionist: [
      { href: "/nutritionist/dashboard", label: "Painel", icon: Home },
      { href: "/nutritionist/patients", label: "Pacientes", icon: Users },
      {
        label: "Consultório",
        icon: Users,
        submenu: [
          { href: "/nutritionist/meal-plans", label: "Planos alimentares", icon: Apple },
          { href: "/nutritionist/meal-plans", label: "Consultas", icon: Apple },
          { href: "/nutritionist/foods", label: "Alimentos", icon: Layers },
          { href: "/nutritionist/assessments", label: "Avaliações", icon: Activity },
          { href: "/nutritionist/progress", label: "Progressos", icon: LineChart },
          { href: "/nutritionist/schedule", label: "Agenda", icon: Calendar },
          { href: "/nutritionist/#", label: "Orientações", icon: Layers },
          { href: "/nutritionist/foods", label: "Pedidos de exames", icon: Layers },
          { href: "/nutritionist/foods", label: "Suplementos e produtos", icon: Layers },
        ],
      },
      { href: "/nutritionist/#", label: "Favoritos", icon: Wallet },
      { href: "/nutritionist/finances", label: "Financeiro", icon: DollarSign },
      { href: "/nutritionist/marketing", label: "Marketing", icon: Megaphone },
      { href: "/nutritionist/plans", label: "Planos", icon: DollarSign },
      {
        label: "Ferramentas",
        icon: Users,
        submenu: [
          { href: "/nutritionist/meeting", label: "Videochamada", icon: UserPlus },
          { href: "/nutritionist/reports", label: "Relatórios", icon: BarChart },
        ],
      },
      { href: "/nutritionist/settings", label: "Configurações", icon: Settings },
      { href: "/nutritionist/Support", label: "Suporte", icon: Wallet },
    ],
    client: [
      { href: "/client/dashboard", label: "Painel", icon: Home },
      { href: "/client/search", label: "Buscar", icon: Search },
      { href: "/client/professionals", label: "Meus Profissionais", icon: UserCheck },
      {
        label: "Meus Treinos",
        icon: Dumbbell,
        submenu: [
          { href: "/client/workouts", label: "Treinos", icon: Dumbbell },
          { href: "/client/aerobic-training", label: "Treinos Aeróbicos", icon: Activity },
        ],
      },
      {
        label: "Minha Nutrição",
        icon: Apple,
        submenu: [
          { href: "/client/nutrition", label: "Dietas", icon: Apple },
          { href: "/client/revenue", label: "Receitas", icon: BookOpen },
        ],
      },
      { href: "/client/progress", label: "Meu Progresso", icon: LineChart },
      { href: "/client/challenges", label: "Desafios", icon: Trophy },
      { href: "/client/schedule", label: "Agenda", icon: Calendar },
      { href: "/client/assessment", label: "Avaliações", icon: Activity },
      { href: "/client/my-files", label: "Meus Arquivos", icon: Layers },
      { href: "/client/invoices", label: "Minhas Faturas", icon: Layers }
      { href: "/client/settings", label: "Configurações", icon: Settings },
    ],
  }

  const currentRoutes = routes[userType]

  if (!isSidebarOpen) {
    return null
  }

  return (
    <aside
      className={cn(
        "fixed top-16 left-0 h-[calc(100vh-4rem)] bg-background border-r z-30 transition-all duration-300 ease-in-out w-64",
      )}
    >
      <ScrollArea className="h-full">
        <div className="py-4 px-3">
          <h2 className="mb-2 px-4 text-lg font-semibold">Menu</h2>
          <div className="space-y-1">
            {currentRoutes.map((route) =>
              "submenu" in route ? (
                <div key={route.label} className="space-y-1">
                  <Button variant="ghost" className="w-full justify-between" onClick={() => toggleSubmenu(route.label)}>
                    <div className="flex items-center">
                      <route.icon className="mr-2 h-4 w-4" />
                      {route.label}
                    </div>
                    <div className={`transform transition-transform ${openSubmenus[route.label] ? "rotate-180" : ""}`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </Button>
                  {openSubmenus[route.label] && (
                    <div className="ml-4 space-y-1 border-l pl-2">
                      {route.submenu?.map((subItem) => (
                        <Button
                          key={subItem.href}
                          variant={pathname === subItem.href ? "secondary" : "ghost"}
                          className={cn("w-full justify-start", pathname === subItem.href && "bg-muted")}
                          asChild
                        >
                          <Link href={subItem.href}>
                            <subItem.icon className="mr-2 h-4 w-4" />
                            {subItem.label}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  key={route.href}
                  variant={pathname === route.href ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", pathname === route.href && "bg-muted")}
                  asChild
                >
                  <Link href={route.href}>
                    <route.icon className="mr-2 h-4 w-4" />
                    {route.label}
                  </Link>
                </Button>
              ),
            )}
          </div>
          <div className="mt-6 px-3">
            <Button variant="destructive" className="w-full justify-start">
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}
