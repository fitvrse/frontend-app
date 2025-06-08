import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface NutritionStatsCardProps {
  title: string
  current: number
  target: number
  unit: string
}

export function NutritionStatsCard({ title, current, target, unit }: NutritionStatsCardProps) {
  const percentage = Math.round((current / target) * 100)

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {current} / {target}
          {unit}
        </div>
        <Progress value={percentage} className="h-2 mt-2" />
        <p className="text-xs text-muted-foreground mt-1">{percentage}% da meta diária</p>
      </CardContent>
    </Card>
  )
}
