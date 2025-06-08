import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

interface WorkoutProgressCardProps {
  workoutName: string
  progress: number
  description?: string
  href: string
}

export function WorkoutProgressCard({ workoutName, progress, description, href }: WorkoutProgressCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Treino Atual</CardTitle>
        <CardDescription>{description || "Continue de onde parou"}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>{workoutName}</span>
            <span>{progress}% concluído</span>
          </div>
          <Progress value={progress} />
        </div>
        <Link href={href}>
          <Button className="w-full">Continuar Treino</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
