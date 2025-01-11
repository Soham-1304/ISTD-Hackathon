'use client'

import { Pie, PieChart } from 'recharts'

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
  { name: 'Highly Satisfied', value: 45, fill: 'var(--color-highly-satisfied)' },
  { name: 'Satisfied', value: 30, fill: 'var(--color-satisfied)' },
  { name: 'Neutral', value: 15, fill: 'var(--color-neutral)' },
  { name: 'Dissatisfied', value: 10, fill: 'var(--color-dissatisfied)' },
]

const chartConfig = {
  'highly-satisfied': {
    label: 'Highly Satisfied',
    color: 'hsl(var(--chart-1))',
  },
  satisfied: {
    label: 'Satisfied',
    color: 'hsl(var(--chart-2))',
  },
  neutral: {
    label: 'Neutral',
    color: 'hsl(var(--chart-3))',
  },
  dissatisfied: {
    label: 'Dissatisfied',
    color: 'hsl(var(--chart-4))',
  },
}

export function FeedbackChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Learner Satisfaction</CardTitle>
        <CardDescription>
          Overall satisfaction ratings from course participants
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

