"use client"

import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

interface SearchProps {
  placeholder?: string
  className?: string
  onChange?: (value: string) => void
}

export function Search({ placeholder = "Buscar...", className, onChange }: SearchProps) {
  return (
    <div className={`relative ${className}`}>
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  )
}
