import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      {/* Cover and Profile */}
      <div className="relative">
        <Skeleton className="h-48 w-full rounded-lg" />
        <div className="absolute -bottom-16 left-8">
          <Skeleton className="h-32 w-32 rounded-full" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <Skeleton className="h-8 w-[200px]" />
          <Skeleton className="h-4 w-[150px] mt-2" />
        </div>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <Skeleton className="h-9 w-[120px]" />
          <Skeleton className="h-9 w-[120px]" />
        </div>
      </div>

      {/* Tabs */}
      <Skeleton className="h-10 w-full" />

      {/* Content */}
      <Skeleton className="h-[500px] w-full" />
    </div>
  )
}
