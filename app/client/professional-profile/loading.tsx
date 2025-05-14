import { Skeleton } from "@/components/ui/skeleton"

export default function ProfessionalProfileLoading() {
  return (
    <div className="flex flex-col gap-6">
      {/* Cabeçalho com botão de voltar */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-6 w-40" />
      </div>

      {/* Banner */}
      <Skeleton className="w-full h-48 rounded-lg" />

      <div className="relative px-6 pb-6 pt-0 -mt-16 rounded-b-lg border">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Foto e informações básicas */}
          <div className="flex flex-col items-center md:items-start">
            <Skeleton className="h-32 w-32 rounded-full" />
            <div className="mt-4 text-center md:text-left w-full">
              <Skeleton className="h-8 w-48 mx-auto md:mx-0" />
              <Skeleton className="h-4 w-32 mt-2 mx-auto md:mx-0" />
              <Skeleton className="h-4 w-40 mt-2 mx-auto md:mx-0" />
              <Skeleton className="h-4 w-24 mt-2 mx-auto md:mx-0" />
            </div>
          </div>

          {/* Ações rápidas */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4 md:mt-auto md:ml-auto">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>

        {/* Abas de conteúdo */}
        <div className="mt-8">
          <Skeleton className="h-10 w-full rounded-lg" />
          <div className="mt-6 space-y-6">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
