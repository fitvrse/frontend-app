import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Dumbbell, Target } from "lucide-react"
import Link from "next/link"

interface WorkoutSummaryCardProps {
  title: string
  description: string
  duration: string
  exercises: number
  difficulty: string
  href: string
}

export function WorkoutSummaryCard({
  title,
  description,
  duration,
  exercises,
  difficulty,
  href,
}: WorkoutSummaryCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge variant="outline">{difficulty}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {duration}
          </div>
          <div className="flex items-center">
            <Dumbbell className="mr-1 h-4 w-4" />
            {exercises} exercícios
          </div>
        </div>
        <Button asChild className="w-full">
          <Link href={href}>
            <Target className="mr-2 h-4 w-4" />
            Iniciar Treino
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
