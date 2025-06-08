import { Skeleton } from "@/components/ui/skeleton"

export default function PromotionalMaterialsLoading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-4 w-[350px]" />
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
        <Skeleton className="h-9 w-[320px]" />
      </div>

      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Skeleton className="h-[200px] w-full" />
                <Skeleton className="h-6 w-[80%]" />
                <Skeleton className="h-4 w-full" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-5 w-[100px]" />
                  <div className="flex gap-2">
                    <Skeleton className="h-8 w-8 rounded-md" />
                    <Skeleton className="h-8 w-8 rounded-md" />
                    <Skeleton className="h-8 w-8 rounded-md" />
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="flex items-center justify-center mt-4">
          <Skeleton className="h-10 w-[300px]" />
        </div>
      </div>
    </div>
  )
}
