import { Skeleton } from "@/components/ui/skeleton"

export default function WorkoutsDetailsLoading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96" />
      </div>

      <div className="border rounded-lg p-6 space-y-8">
        <div className="flex justify-center">
          <div className="flex items-center w-full max-w-md">
            <div className="flex flex-col items-center flex-1">
              <Skeleton className="w-16 h-16 rounded-full" />
              <Skeleton className="h-4 w-16 mt-2" />
            </div>

            <Skeleton className="w-full h-0.5 mx-4" />

            <div className="flex flex-col items-center flex-1">
              <Skeleton className="w-16 h-16 rounded-full" />
              <Skeleton className="h-4 w-16 mt-2" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-32 w-full" />
            <div className="flex justify-end">
              <Skeleton className="h-4 w-24" />
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    </div>
  )
}
