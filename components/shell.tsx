import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ShellProps {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function Shell({ children, className, as: Component = "div" }: ShellProps) {
  return (
    <Component className={cn("mx-auto w-full max-w-7xl px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10", className)}>
      {children}
    </Component>
  )
}
