import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-6">
      <Skeleton className="h-10 w-[250px] mb-6" />

      {/* Informações do treino */}
      <Skeleton className="h-[150px] w-full mb-6 rounded-lg" />

      {/* Lista de exercícios */}
      <div className="space-y-4 mb-24">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-[120px] w-full rounded-lg" />
        ))}
      </div>

      {/* Barra fixa inferior */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Skeleton className="h-8 w-[100px]" />
          <Skeleton className="h-10 w-[150px]" />
        </div>
      </div>
    </div>
  )
}
