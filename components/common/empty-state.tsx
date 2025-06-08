"use client"

import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex items-center justify-center h-[400px]">
      <div className="text-center">
        <Icon className="mx-auto h-16 w-16 text-muted" />
        <h3 className="mt-4 text-lg font-medium">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        {action && (
          <Button className="mt-4" onClick={action.onClick}>
            {action.label}
          </Button>
        )}
      </div>
    </div>
  )
}
