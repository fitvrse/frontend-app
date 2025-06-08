import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface DashboardStatsCardProps {
  title: string
  value: string | number
  description: string
  icon: LucideIcon
  trend?: {
    value: string
    isPositive: boolean
  }
}

export function DashboardStatsCard({ title, value, description, icon: Icon, trend }: DashboardStatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend ? (
          <p className={`text-xs flex items-center ${trend.isPositive ? "text-green-500" : "text-red-500"}`}>
            <span className={trend.isPositive ? "text-green-500" : "text-red-500"}>{trend.value}</span>
            <span className="text-muted-foreground ml-1">{description}</span>
          </p>
        ) : (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  )
}
