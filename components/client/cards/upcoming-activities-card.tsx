import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Apple } from "lucide-react"

interface UpcomingActivity {
  name: string
  time: string
  type: "workout" | "nutrition" | "assessment"
}

interface UpcomingActivitiesCardProps {
  activities: UpcomingActivity[]
}

export function UpcomingActivitiesCard({ activities }: UpcomingActivitiesCardProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "workout":
        return <Dumbbell className="h-4 w-4 text-primary" />
      case "nutrition":
        return <Apple className="h-4 w-4 text-primary" />
      default:
        return <div className="h-4 w-4 text-primary">Activity</div>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Próximas Atividades</CardTitle>
        <CardDescription>Hoje, {new Date().toLocaleDateString("pt-BR")}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.name}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <Button variant="ghost" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
