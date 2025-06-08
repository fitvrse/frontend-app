import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-4 w-[350px]" />
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Skeleton className="h-10 w-[320px]" />
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Skeleton className="h-9 w-[150px]" />
          <Skeleton className="h-9 w-[170px]" />
        </div>
      </div>

      <Skeleton className="h-[600px] w-full" />
    </div>
  )
}
