"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { cn } from "@/lib/utils"

export default function GymLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Alterar o estado inicial do sidebar para recolhido
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar se é dispositivo móvel
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false)
      }
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader
        userType="gym"
        userName="Academia Fitness"
        onSidebarToggle={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="flex flex-1 pt-16">
        <DashboardSidebar userType="gym" isSidebarOpen={isSidebarOpen} />
        <main className={cn("flex-1 p-4 md:p-6 transition-all duration-300", isSidebarOpen ? "ml-64" : "ml-0")}>
          {children}
        </main>
      </div>
    </div>
  )
}
