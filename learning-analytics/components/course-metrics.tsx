'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { fadeIn, slideIn } from '@/lib/animations'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Skeleton } from '@/components/ui/skeleton'

const courses = [
  { value: '1', label: 'Advanced Tech Leadership' },
  { value: '2', label: 'Project Management Fundamentals' },
  { value: '3', label: 'Digital Marketing Strategy' },
  { value: '4', label: 'Data Analytics Fundamentals' },
  { value: '5', label: 'Business Communication' },
  { value: '6', label: 'Agile Development' },
  { value: '7', label: 'Financial Planning' },
  { value: '8', label: 'HR Management' },
  { value: '9', label: 'Cybersecurity Basics' },
  { value: '10', label: 'Customer Service Excellence' }
]

const courseData = {
  '1': {
    engagement: [
      { module: 'Module 1: Leadership Foundations', time: 45 },
      { module: 'Module 2: Tech Strategy', time: 52 },
      { module: 'Module 3: Team Management', time: 48 },
      { module: 'Module 4: Innovation', time: 55 },
      { module: 'Module 5: Digital Transformation', time: 50 }
    ],
    completion: [
      { week: 'Week 1', rate: 95 },
      { week: 'Week 2', rate: 92 },
      { week: 'Week 3', rate: 88 },
      { week: 'Week 4', rate: 90 },
      { week: 'Week 5', rate: 92 }
    ],
    satisfaction: [
      { rating: 'Very Satisfied', value: 55, fill: 'var(--color-very-satisfied)' },
      { rating: 'Satisfied', value: 32, fill: 'var(--color-satisfied)' },
      { rating: 'Neutral', value: 10, fill: 'var(--color-neutral)' },
      { rating: 'Dissatisfied', value: 3, fill: 'var(--color-dissatisfied)' }
    ],
    roi: { cost: 500000, benefit: 1500000 }
  },
  '2': {
    engagement: [
      { module: 'Module 1: PM Basics', time: 40 },
      { module: 'Module 2: Planning', time: 45 },
      { module: 'Module 3: Execution', time: 42 },
      { module: 'Module 4: Monitoring', time: 38 },
      { module: 'Module 5: Closure', time: 35 }
    ],
    completion: [
      { week: 'Week 1', rate: 88 },
      { week: 'Week 2', rate: 85 },
      { week: 'Week 3', rate: 82 },
      { week: 'Week 4', rate: 80 },
      { week: 'Week 5', rate: 78 }
    ],
    satisfaction: [
      { rating: 'Very Satisfied', value: 45, fill: 'var(--color-very-satisfied)' },
      { rating: 'Satisfied', value: 35, fill: 'var(--color-satisfied)' },
      { rating: 'Neutral', value: 15, fill: 'var(--color-neutral)' },
      { rating: 'Dissatisfied', value: 5, fill: 'var(--color-dissatisfied)' }
    ],
    roi: { cost: 350000, benefit: 875000 }
  },
  '3': {
    engagement: [
      { module: 'Module 1: Digital Basics', time: 35 },
      { module: 'Module 2: Social Media', time: 42 },
      { module: 'Module 3: Content Strategy', time: 45 },
      { module: 'Module 4: Analytics', time: 48 },
      { module: 'Module 5: Campaigns', time: 40 }
    ],
    completion: [
      { week: 'Week 1', rate: 92 },
      { week: 'Week 2', rate: 88 },
      { week: 'Week 3', rate: 85 },
      { week: 'Week 4', rate: 82 },
      { week: 'Week 5', rate: 80 }
    ],
    satisfaction: [
      { rating: 'Very Satisfied', value: 48, fill: 'var(--color-very-satisfied)' },
      { rating: 'Satisfied', value: 38, fill: 'var(--color-satisfied)' },
      { rating: 'Neutral', value: 12, fill: 'var(--color-neutral)' },
      { rating: 'Dissatisfied', value: 2, fill: 'var(--color-dissatisfied)' }
    ],
    roi: { cost: 400000, benefit: 1200000 }
  },
  '4': {
    engagement: [
      { module: 'Module 1: Data Fundamentals', time: 50 },
      { module: 'Module 2: Analysis Tools', time: 55 },
      { module: 'Module 3: Visualization', time: 52 },
      { module: 'Module 4: Statistics', time: 48 },
      { module: 'Module 5: Projects', time: 45 }
    ],
    completion: [
      { week: 'Week 1', rate: 90 },
      { week: 'Week 2', rate: 87 },
      { week: 'Week 3', rate: 85 },
      { week: 'Week 4', rate: 82 },
      { week: 'Week 5', rate: 80 }
    ],
    satisfaction: [
      { rating: 'Very Satisfied', value: 50, fill: 'var(--color-very-satisfied)' },
      { rating: 'Satisfied', value: 35, fill: 'var(--color-satisfied)' },
      { rating: 'Neutral', value: 12, fill: 'var(--color-neutral)' },
      { rating: 'Dissatisfied', value: 3, fill: 'var(--color-dissatisfied)' }
    ],
    roi: { cost: 450000, benefit: 1350000 }
  },
  '5': {
    engagement: [
      { module: 'Module 1: Communication Basics', time: 30 },
      { module: 'Module 2: Business Writing', time: 35 },
      { module: 'Module 3: Presentations', time: 38 },
      { module: 'Module 4: Negotiations', time: 40 },
      { module: 'Module 5: Practice', time: 32 }
    ],
    completion: [
      { week: 'Week 1', rate: 95 },
      { week: 'Week 2', rate: 92 },
      { week: 'Week 3', rate: 90 },
      { week: 'Week 4', rate: 88 },
      { week: 'Week 5', rate: 85 }
    ],
    satisfaction: [
      { rating: 'Very Satisfied', value: 42, fill: 'var(--color-very-satisfied)' },
      { rating: 'Satisfied', value: 40, fill: 'var(--color-satisfied)' },
      { rating: 'Neutral', value: 15, fill: 'var(--color-neutral)' },
      { rating: 'Dissatisfied', value: 3, fill: 'var(--color-dissatisfied)' }
    ],
    roi: { cost: 250000, benefit: 625000 }
  },
  '6': {
    engagement: [
      { module: 'Module 1: Agile Principles', time: 42 },
      { module: 'Module 2: Scrum', time: 45 },
      { module: 'Module 3: Kanban', time: 40 },
      { module: 'Module 4: Sprints', time: 44 },
      { module: 'Module 5: Implementation', time: 38 }
    ],
    completion: [
      { week: 'Week 1', rate: 88 },
      { week: 'Week 2', rate: 85 },
      { week: 'Week 3', rate: 82 },
      { week: 'Week 4', rate: 80 },
      { week: 'Week 5', rate: 78 }
    ],
    satisfaction: [
      { rating: 'Very Satisfied', value: 46, fill: 'var(--color-very-satisfied)' },
      { rating: 'Satisfied', value: 36, fill: 'var(--color-satisfied)' },
      { rating: 'Neutral', value: 14, fill: 'var(--color-neutral)' },
      { rating: 'Dissatisfied', value: 4, fill: 'var(--color-dissatisfied)' }
    ],
    roi: { cost: 380000, benefit: 950000 }
  },
  '7': {
    engagement: [
      { module: 'Module 1: Financial Basics', time: 38 },
      { module: 'Module 2: Budgeting', time: 42 },
      { module: 'Module 3: Investment', time: 45 },
      { module: 'Module 4: Risk Management', time: 40 },
      { module: 'Module 5: Planning', time: 35 }
    ],
    completion: [
      { week: 'Week 1', rate: 85 },
      { week: 'Week 2', rate: 82 },
      { week: 'Week 3', rate: 80 },
      { week: 'Week 4', rate: 78 },
      { week: 'Week 5', rate: 75 }
    ],
    satisfaction: [
      { rating: 'Very Satisfied', value: 40, fill: 'var(--color-very-satisfied)' },
      { rating: 'Satisfied', value: 38, fill: 'var(--color-satisfied)' },
      { rating: 'Neutral', value: 17, fill: 'var(--color-neutral)' },
      { rating: 'Dissatisfied', value: 5, fill: 'var(--color-dissatisfied)' }
    ],
    roi: { cost: 300000, benefit: 600000 }
  },
  '8': {
    engagement: [
      { module: 'Module 1: HR Fundamentals', time: 35 },
      { module: 'Module 2: Recruitment', time: 38 },
      { module: 'Module 3: Employee Relations', time: 40 },
      { module: 'Module 4: Performance', time: 42 },
      { module: 'Module 5: Compliance', time: 35 }
    ],
    completion: [
      { week: 'Week 1', rate: 82 },
      { week: 'Week 2', rate: 80 },
      { week: 'Week 3', rate: 78 },
      { week: 'Week 4', rate: 75 },
      { week: 'Week 5', rate: 72 }
    ],
    satisfaction: [
      { rating: 'Very Satisfied', value: 38, fill: 'var(--color-very-satisfied)' },
      { rating: 'Satisfied', value: 42, fill: 'var(--color-satisfied)' },
      { rating: 'Neutral', value: 15, fill: 'var(--color-neutral)' },
      { rating: 'Dissatisfied', value: 5, fill: 'var(--color-dissatisfied)' }
    ],
    roi: { cost: 280000, benefit: 490000 }
  },
  '9': {
    engagement: [
      { module: 'Module 1: Security Basics', time: 48 },
      { module: 'Module 2: Threats', time: 52 },
      { module: 'Module 3: Prevention', time: 50 },
      { module: 'Module 4: Response', time: 45 },
      { module: 'Module 5: Best Practices', time: 42 }
    ],
    completion: [
      { week: 'Week 1', rate: 89 },
      { week: 'Week 2', rate: 86 },
      { week: 'Week 3', rate: 84 },
      { week: 'Week 4', rate: 82 },
      { week: 'Week 5', rate: 80 }
    ],
    satisfaction: [
      { rating: 'Very Satisfied', value: 47, fill: 'var(--color-very-satisfied)' },
      { rating: 'Satisfied', value: 37, fill: 'var(--color-satisfied)' },
      { rating: 'Neutral', value: 13, fill: 'var(--color-neutral)' },
      { rating: 'Dissatisfied', value: 3, fill: 'var(--color-dissatisfied)' }
    ],
    roi: { cost: 420000, benefit: 1050000 }
  },
  '10': {
    engagement: [
      { module: 'Module 1: Service Basics', time: 32 },
      { module: 'Module 2: Communication', time: 35 },
      { module: 'Module 3: Problem Solving', time: 38 },
      { module: 'Module 4: Customer Experience', time: 40 },
      { module: 'Module 5: Practice', time: 35 }
    ],
    completion: [
      { week: 'Week 1', rate: 94 },
      { week: 'Week 2', rate: 92 },
      { week: 'Week 3', rate: 90 },
      { week: 'Week 4', rate: 88 },
      { week: 'Week 5', rate: 85 }
    ],
    satisfaction: [
      { rating: 'Very Satisfied', value: 44, fill: 'var(--color-very-satisfied)' },
      { rating: 'Satisfied', value: 39, fill: 'var(--color-satisfied)' },
      { rating: 'Neutral', value: 14, fill: 'var(--color-neutral)' },
      { rating: 'Dissatisfied', value: 3, fill: 'var(--color-dissatisfied)' }
    ],
    roi: { cost: 220000, benefit: 550000 }
  }
}

export function CourseMetrics() {
  const [selectedCourse, setSelectedCourse] = useState('1')
  const [loading, setLoading] = useState(false)

  const handleCourseChange = (value: string) => {
    setLoading(true)
    setSelectedCourse(value)
    setTimeout(() => setLoading(false), 500)
  }

  const data = courseData[selectedCourse as keyof typeof courseData]

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Select value={selectedCourse} onValueChange={handleCourseChange}>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a course" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course) => (
              <SelectItem key={course.value} value={course.value}>
                {course.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <motion.div className="grid gap-4 md:grid-cols-2" {...fadeIn}>
        <Card>
          <CardHeader>
            <CardTitle>Module Engagement Analysis</CardTitle>
            <CardDescription>
              Average time spent per module (in minutes)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-[300px] w-full" />
            ) : (
              <ChartContainer
                config={{
                  time: {
                    label: 'Time Spent (Minutes)',
                    color: 'hsl(var(--chart-1))',
                  },
                }}
              >
                <BarChart
                  data={data.engagement}
                  margin={{ top: 20, right: 20, left: 60, bottom: 60 }}
                  height={300}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="module"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                    interval={0}
                  >
                    <Label value="Module Name" offset={-50} position="insideBottom" />
                  </XAxis>
                  <YAxis>
                    <Label
                      value="Time Spent (Minutes)"
                      angle={-90}
                      position="insideLeft"
                      style={{ textAnchor: 'middle' }}
                    />
                  </YAxis>
                  <Tooltip />
                  <Bar
                    dataKey="time"
                    fill="var(--color-time)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Completion Rate Progress</CardTitle>
            <CardDescription>Course completion rates over time</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-[300px] w-full" />
            ) : (
              <ChartContainer
                config={{
                  rate: {
                    label: 'Completion Rate (%)',
                    color: 'hsl(var(--chart-2))',
                  },
                }}
              >
                <LineChart
                  data={data.completion}
                  margin={{ top: 20, right: 20, left: 60, bottom: 60 }}
                  height={300}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week">
                    <Label value="Course Timeline" offset={-20} position="insideBottom" />
                  </XAxis>
                  <YAxis>
                    <Label
                      value="Completion Rate (%)"
                      angle={-90}
                      position="insideLeft"
                      style={{ textAnchor: 'middle' }}
                    />
                  </YAxis>
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    stroke="var(--color-rate)"
                    strokeWidth={2}
                    dot={{ fill: 'var(--color-rate)' }}
                  />
                </LineChart>
              </ChartContainer>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learner Satisfaction Distribution</CardTitle>
            <CardDescription>Breakdown of satisfaction ratings</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-[300px] w-full" />
            ) : (
              <ChartContainer
                config={{
                  'very-satisfied': {
                    label: 'Very Satisfied',
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
                }}
              >
                <PieChart height={300}>
                  <Pie
                    data={data.satisfaction}
                    dataKey="value"
                    nameKey="rating"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    label={(entry) => `${entry.rating}: ${entry.value}%`}
                    labelLine={true}
                  />
                  <Tooltip />
                </PieChart>
              </ChartContainer>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Return on Investment Analysis</CardTitle>
            <CardDescription>Cost vs. Benefit Analysis (in ₹)</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </div>
            ) : (
              <motion.div className="space-y-4" {...slideIn}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Total Investment Cost</p>
                    <p className="text-2xl font-bold">
                      ₹{(data.roi.cost / 100000).toFixed(2)}L
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Total Business Benefit</p>
                    <p className="text-2xl font-bold">
                      ₹{(data.roi.benefit / 100000).toFixed(2)}L
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Return on Investment (ROI)</p>
                  <p className="text-2xl font-bold text-green-500">
                    {Math.round(
                      ((data.roi.benefit - data.roi.cost) / data.roi.cost) * 100
                    )}
                    %
                  </p>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

