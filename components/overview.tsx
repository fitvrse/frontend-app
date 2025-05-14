import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { name: 'Jan', total: 2400 },
  { name: 'Feb', total: 1398 },
  { name: 'Mar', total: 9800 },
  { name: 'Apr', total: 3908 },
  { name: 'May', total: 4800 },
  { name: 'Jun', total: 3800 },
  { name: 'Jul', total: 4300 },
  { name: 'Aug', total: 2100 },
  { name: 'Sep', total: 3400 },
  { name: 'Oct', total: 4600 },
  { name: 'Nov', total: 5300 },
  { name: 'Dec', total: 4100 },
]

export function Overview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Visão Geral</CardTitle>
        <CardDescription>
          Visão geral das atividades do mês atual.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2">
        <div style={{ width: '100%', height: 350 }}>
          <div className="flex h-full items-end justify-between space-x-2">
            {data.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center flex-1"
              >
                <div
                  className="w-full bg-blue-500 rounded-t"
                  style={{
                    height: `${(item.total / 10000) * 100}%`,
                    minHeight: '20px',
                  }}
                />
                <span className="text-xs text-gray-600 mt-1">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
