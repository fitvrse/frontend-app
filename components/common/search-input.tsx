"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchInputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
}

export function SearchInput({
  placeholder = "Buscar...",
  value,
  onChange,
  className = "w-full md:w-80",
}: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="pl-8"
      />
    </div>
  )
}
