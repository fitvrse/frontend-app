import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfessionalsLoading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-4 w-full max-w-[450px]" />
      </div>

      <Tabs defaultValue="academies" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="academies">Academias</TabsTrigger>
          <TabsTrigger value="personal">Personal Trainers</TabsTrigger>
          <TabsTrigger value="nutritionist">Nutricionistas</TabsTrigger>
        </TabsList>

        <TabsContent value="academies" className="space-y-6">
          <Skeleton className="h-20 w-full" />

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-16 w-16 rounded-full" />
                  <div>
                    <Skeleton className="h-6 w-[200px] mb-2" />
                    <Skeleton className="h-4 w-[250px]" />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <div className="flex flex-wrap gap-3">
                  <Skeleton className="h-6 w-[120px] rounded-full" />
                  <Skeleton className="h-6 w-[150px] rounded-full" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <div className="flex gap-2">
                <Skeleton className="h-9 w-9 rounded-md" />
                <Skeleton className="h-9 w-9 rounded-md" />
                <Skeleton className="h-9 w-9 rounded-md" />
              </div>
              <Skeleton className="h-9 w-[180px] rounded-md" />
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
