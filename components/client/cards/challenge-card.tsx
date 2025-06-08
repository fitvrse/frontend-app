"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, Trophy } from "lucide-react"

interface Challenge {
  id: string
  name: string
  type: string
  progress: number
  reward: string
  daysLeft?: string
  participants?: number
  status: "active" | "available" | "completed"
}

interface ChallengeCardProps {
  challenge: Challenge
  onAction: (challengeId: string, action: string) => void
}

export function ChallengeCard({ challenge, onAction }: ChallengeCardProps) {
  const getActionButton = () => {
    switch (challenge.status) {
      case "active":
        return (
          <Button variant="outline" className="w-full" onClick={() => onAction(challenge.id, "view")}>
            Ver Detalhes
          </Button>
        )
      case "available":
        return (
          <Button className="w-full" onClick={() => onAction(challenge.id, "join")}>
            Participar
          </Button>
        )
      case "completed":
        return (
          <Button variant="outline" className="w-full" onClick={() => onAction(challenge.id, "view")}>
            Ver Resultado
          </Button>
        )
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base">{challenge.name}</CardTitle>
            <CardDescription>{challenge.type}</CardDescription>
          </div>
          {challenge.daysLeft && (
            <Badge variant="outline" className="ml-2">
              {challenge.daysLeft}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        {challenge.status === "active" && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progresso</span>
              <span>{challenge.progress}%</span>
            </div>
            <Progress value={challenge.progress} className="h-2" />
          </div>
        )}
        <div className="flex items-center text-sm text-muted-foreground mt-4">
          <Trophy className="mr-2 h-4 w-4" />
          <span>Recompensa: {challenge.reward}</span>
        </div>
        {challenge.participants && (
          <div className="flex items-center text-sm text-muted-foreground mt-2">
            <Users className="mr-2 h-4 w-4" />
            <span>{challenge.participants} participantes</span>
          </div>
        )}
      </CardContent>
      <CardFooter>{getActionButton()}</CardFooter>
    </Card>
  )
}
