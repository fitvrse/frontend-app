import type React from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Logo } from "@/components/logo"

export default function GymLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <aside className="hidden fixed top-0 left-0 h-screen w-64 border-r md:block z-30 bg-background">
          <div className="flex h-16 items-center border-b px-6">
            <Logo />
          </div>
          <DashboardSidebar userType="gym" />
        </aside>
        <div className="flex flex-1 flex-col md:pl-64">
          <DashboardHeader userType="gym" userName="Academia Fitness" />
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
