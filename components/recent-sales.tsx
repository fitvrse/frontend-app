import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface RecentSalesProps {
  data: Array<{
    id: string
    date: string
    customer: string
    amount: string
    status: string
  }>
}

export function RecentSales({ data }: RecentSalesProps) {
  return (
    <div className="space-y-8">
      {data.map((sale) => (
        <div key={sale.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>
              {sale.customer
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.customer}</p>
            <p className="text-sm text-muted-foreground">{sale.date}</p>
          </div>
          <div className="ml-auto font-medium">
            <span className="text-sm">{sale.amount}</span>
            <div className={`text-xs ${sale.status === "delivered" ? "text-green-600" : "text-yellow-600"}`}>
              {sale.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
