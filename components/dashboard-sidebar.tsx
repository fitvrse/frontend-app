"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import {
  Users,
  Calendar,
  DollarSign,
  Dumbbell,
  MessageSquare,
  Settings,
  Menu,
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
}

export function DashboardSidebar({ userType }: SidebarProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
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
      { href: "/personal/workouts", label: "Treinos", icon: Dumbbell },
      { href: "/personal/exercises", label: "Exercícios", icon: BookOpen },
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
      { href: "/client/dashboard", label: "Dashboard", icon: Home },
      { href: "/client/search", label: "Buscar", icon: Search },
      { href: "/client/professionals", label: "Meus Profissionais", icon: UserCheck },
      { href: "/client/workouts", label: "Meus Treinos", icon: Dumbbell },
      { href: "/client/nutrition", label: "Minha Nutrição", icon: Apple },
      { href: "/client/progress", label: "Meu Progresso", icon: LineChart },
      { href: "/client/challenges", label: "Desafios", icon: Trophy },
      { href: "/client/schedule", label: "Agenda", icon: Calendar },
      { href: "/client/assessment", label: "Avaliações", icon: Calendar },
      { href: "/client/chat", label: "Chat", icon: MessageSquare },
      { href: "/client/settings", label: "Configurações", icon: Settings },
    ],
  }

  const currentRoutes = routes[userType]

  return (
    <>
      {/* Botão de menu móvel - fixo no canto inferior direito */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
            >
              <Menu className="h-6 w-6 text-primary-foreground" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] sm:w-[350px] p-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <Logo />
                <h2 className="text-xl font-bold">Menu</h2>
              </div>
              <ScrollArea className="flex-1 px-2 py-4">
                <div className="space-y-1">
                  {currentRoutes.map((route) =>
                    "submenu" in route ? (
                      <div key={route.label} className="space-y-1">
                        <Button
                          variant="ghost"
                          className="w-full justify-between py-6 text-base"
                          onClick={() => toggleSubmenu(route.label)}
                        >
                          <div className="flex items-center">
                            <route.icon className="mr-3 h-5 w-5" />
                            {route.label}
                          </div>
                          <div
                            className={`transform transition-transform ${openSubmenus[route.label] ? "rotate-180" : ""}`}
                          >
                            <ChevronDown className="h-5 w-5" />
                          </div>
                        </Button>
                        {openSubmenus[route.label] && (
                          <div className="ml-6 space-y-1 border-l pl-3">
                            {route.submenu?.map((subItem) => (
                              <Button
                                key={subItem.href}
                                variant={pathname === subItem.href ? "secondary" : "ghost"}
                                className={cn(
                                  "w-full justify-start py-5 text-base",
                                  pathname === subItem.href && "bg-muted font-medium",
                                )}
                                asChild
                                onClick={() => setOpen(false)}
                              >
                                <Link href={subItem.href}>
                                  <subItem.icon className="mr-3 h-5 w-5" />
                                  {subItem.label}
                                </Link>
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Button
                        key={"href" in route ? route.href : route.label}
                        variant={pathname === ("href" in route ? route.href : "") ? "secondary" : "ghost"}
                        className={cn(
                          "w-full justify-start py-6 text-base",
                          pathname === ("href" in route ? route.href : "") && "bg-muted font-medium",
                        )}
                        asChild={!("submenu" in route)}
                        onClick={() => !("submenu" in route) && setOpen(false)}
                      >
                        {"href" in route ? (
                          <Link href={route.href}>
                            <route.icon className="mr-3 h-5 w-5" />
                            {route.label}
                          </Link>
                        ) : (
                          <div className="flex items-center">
                            <route.icon className="mr-3 h-5 w-5" />
                            {route.label}
                          </div>
                        )}
                      </Button>
                    ),
                  )}
                </div>
              </ScrollArea>
              <div className="p-4 border-t">
                <Button variant="destructive" className="w-full justify-start py-6 text-base">
                  <LogOut className="mr-3 h-5 w-5" />
                  Sair
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Sidebar para desktop */}
      <nav className="hidden md:block">
        <ScrollArea className="h-[calc(100vh-4rem)] py-6">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Menu</h2>
            <div className="space-y-1">
              {currentRoutes.map((route) =>
                "submenu" in route ? (
                  <div key={route.label} className="space-y-1">
                    <Button
                      variant="ghost"
                      className="w-full justify-between"
                      onClick={() => toggleSubmenu(route.label)}
                    >
                      <div className="flex items-center">
                        <route.icon className="mr-2 h-4 w-4" />
                        {route.label}
                      </div>
                      <div
                        className={`transform transition-transform ${openSubmenus[route.label] ? "rotate-180" : ""}`}
                      >
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
          </div>
        </ScrollArea>
      </nav>
    </>
  )
}
