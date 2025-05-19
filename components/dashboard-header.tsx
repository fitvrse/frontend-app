"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Menu, MessageSquare, User, Wallet, X } from "lucide-react"
import { Logo } from "@/components/logo"

interface DashboardHeaderProps {
  userType: "gym" | "personal" | "nutritionist" | "client"
  userName: string
  onSidebarToggle: () => void
  isSidebarOpen: boolean
}

export function DashboardHeader({ userType, userName, onSidebarToggle, isSidebarOpen }: DashboardHeaderProps) {
  const userInitial = userName.charAt(0).toUpperCase()

  const userTypeLabel = {
    gym: "Academia",
    personal: "Personal Trainer",
    nutritionist: "Nutricionista",
    client: "Aluno",
  }

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onSidebarToggle}>
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">{isSidebarOpen ? "Fechar menu lateral" : "Abrir menu lateral"}</span>
        </Button>
        <Logo />
      </div>
      <div className="flex flex-1 items-center justify-end gap-4 md:gap-2 lg:gap-4">
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
            5
          </span>
          <span className="sr-only">Notificações</span>
        </Button>

        {userType === "client" && (
          <Button variant="outline" size="icon" asChild>
            <Link href="/client/wallet">
              <Wallet className="h-5 w-5" />
              <span className="sr-only">Carteira</span>
            </Link>
          </Button>
        )}

        <Button variant="outline" size="icon" asChild>
          <Link href={`/${userType}/chat`}>
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">Mensagens</span>
          </Link>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder.svg" alt={userName} />
                <AvatarFallback>{userInitial}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bell className="mr-2 h-4 w-4" />
              <span>Notificações</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Mensagens</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
