'use client'

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { month: 'Jan', completions: 65, engagement: 78, satisfaction: 85 },
  { month: 'Feb', completions: 75, engagement: 82, satisfaction: 87 },
  { month: 'Mar', completions: 85, engagement: 85, satisfaction: 89 },
  { month: 'Apr', completions: 78, engagement: 88, satisfaction: 88 },
  { month: 'May', completions: 90, engagement: 92, satisfaction: 91 },
  { month: 'Jun', completions: 95, engagement: 90, satisfaction: 93 },
]

const chartConfig = {
  completions: {
    label: 'Completions',
    color: 'hsl(var(--chart-1))',
  },
  engagement: {
    label: 'Engagement',
    color: 'hsl(var(--chart-2))',
  },
  satisfaction: {
    label: 'Satisfaction',
    color: 'hsl(var(--chart-3))',
  },
}

export function EngagementChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Learning Metrics Trends</CardTitle>
        <CardDescription>
          Course completions, engagement, and satisfaction rates over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            height={400}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="completions"
              stroke="var(--color-completions)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="engagement"
              stroke="var(--color-engagement)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="satisfaction"
              stroke="var(--color-satisfaction)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

