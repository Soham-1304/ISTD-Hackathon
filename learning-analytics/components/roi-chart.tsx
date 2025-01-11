'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

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
  { category: 'Technical Skills', cost: 50000, benefit: 150000 },
  { category: 'Leadership', cost: 75000, benefit: 200000 },
  { category: 'Soft Skills', cost: 30000, benefit: 90000 },
  { category: 'Compliance', cost: 25000, benefit: 60000 },
  { category: 'Product Training', cost: 40000, benefit: 120000 },
]

const chartConfig = {
  cost: {
    label: 'Training Cost',
    color: 'hsl(var(--chart-1))',
  },
  benefit: {
    label: 'Business Benefit',
    color: 'hsl(var(--chart-2))',
  },
}

export function ROIChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Training ROI by Category</CardTitle>
        <CardDescription>
          Cost vs. benefit analysis of different training categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            height={400}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.split(' ')[0]}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="cost" fill="var(--color-cost)" radius={[4, 4, 0, 0]} />
            <Bar
              dataKey="benefit"
              fill="var(--color-benefit)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

