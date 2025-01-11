'use client'

import { motion } from 'framer-motion'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { cn } from '@/lib/utils'
import { fadeIn } from '@/lib/animations'
import { formatIndianCurrency, formatLakhs } from '@/lib/calculations'
import { courses, departmentROI } from '@/data/courses'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// Transform course data for performance metrics
const coursePerformanceData = courses.map(course => ({
  name: course.name,
  completion: course.metrics.completionRate,
  engagement: course.metrics.engagementHours,
  satisfaction: course.metrics.satisfactionScore * 20, // Convert to percentage
  roi: course.roi.roi
}))

// More realistic monthly trends with actual fluctuations
const monthlyTrends = [
  {
    month: 'January',
    completion: 72,
    engagement: 65,
    satisfaction: 78,
  },
  {
    month: 'February',
    completion: 68, // Drop due to holiday season
    engagement: 58,
    satisfaction: 75,
  },
  {
    month: 'March',
    completion: 75,
    engagement: 70,
    satisfaction: 82,
  },
  {
    month: 'April',
    completion: 82, // Improvement after process changes
    engagement: 78,
    satisfaction: 85,
  },
  {
    month: 'May',
    completion: 79, // Slight decline
    engagement: 72,
    satisfaction: 80,
  },
  {
    month: 'June',
    completion: 85, // Recovery and improvement
    engagement: 80,
    satisfaction: 88,
  },
]

// Transform department ROI data
const departmentROIData = [
  {
    department: 'Technology',
    investment: 85.5,
    benefit: 245.2,
    roi: 186
  },
  {
    department: 'Sales',
    investment: 42.8,
    benefit: 168.5,
    roi: 294
  },
  {
    department: 'Operations',
    investment: 56.2,
    benefit: 95.4,
    roi: 70
  },
  {
    department: 'HR',
    investment: 28.5,
    benefit: 42.8,
    roi: 50
  }
]

// Define coursePerformance with realistic data
const coursePerformance = [
  {
    name: 'Advanced Tech Leadership',
    completion: 88,
    trend: 'up',
    change: '+8%',
    roi: 186
  },
  {
    name: 'Project Management',
    completion: 72,
    trend: 'down',
    change: '-12%',
    roi: 95
  },
  {
    name: 'Data Analytics',
    completion: 92,
    trend: 'up',
    change: '+15%',
    roi: 240
  },
  {
    name: 'Communication Skills',
    completion: 65,
    trend: 'down',
    change: '-18%',
    roi: 45
  },
  {
    name: 'Agile Methodologies',
    completion: 78,
    trend: 'up',
    change: '+5%',
    roi: 125
  }
]

// Calculate overall metrics
const overallMetrics = {
  totalInvestment: 21250000,    // ₹2.125 Cr total investment
  totalBenefits: 55180000,      // ₹5.518 Cr total benefits
  avgCompletion: 76.5,          // Realistic average completion rate
  activeLearners: 1842,         // Current active learners
  avgSatisfaction: 4.1,         // Out of 5
  overallROI: 159              // 159% overall ROI
};


export function MetricsOverview() {
  return (
    <motion.div className="grid gap-6" {...fadeIn}>
      <Card>
        <CardHeader>
          <CardTitle>Overall Performance Metrics</CardTitle>
          <CardDescription>
            6-month overview showing key performance indicators
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tick={{ fill: 'hsl(var(--foreground))' }}
                tickLine={{ stroke: 'hsl(var(--foreground))' }}
              />
              <YAxis
                tick={{ fill: 'hsl(var(--foreground))' }}
                tickLine={{ stroke: 'hsl(var(--foreground))' }}
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
                label={{
                  value: 'Percentage (%)',
                  angle: -90,
                  position: 'insideLeft',
                  fill: 'hsl(var(--foreground))',
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  padding: '8px',
                }}
                formatter={(value) => [`${value}%`]}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36}
              />
              <Line
                type="monotone"
                dataKey="completion"
                name="Completion Rate"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--chart-1))' }}
              />
              <Line
                type="monotone"
                dataKey="engagement"
                name="Engagement Score"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--chart-2))' }}
              />
              <Line
                type="monotone"
                dataKey="satisfaction"
                name="Satisfaction"
                stroke="hsl(var(--chart-3))"
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--chart-3))' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Department ROI Analysis</CardTitle>
            <CardDescription>
              Investment and benefits by department (in lakhs ₹)
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={departmentROIData}
                margin={{ top: 20, right: 30, left: 60, bottom: 40 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="department"
                  tick={{ fill: 'hsl(var(--foreground))' }}
                />
                <YAxis
                  tick={{ fill: 'hsl(var(--foreground))' }}
                  tickFormatter={(value) => `₹${value}L`}
                  label={{
                    value: 'Amount (Lakhs ₹)',
                    angle: -90,
                    position: 'insideLeft',
                    fill: 'hsl(var(--foreground))',
                  }}
                />
                <Tooltip
                  formatter={(value, name) => [
                    `₹${Number(value).toFixed(2)}L`,
                    name === 'investment' ? 'Investment' : 'Benefit'
                  ]}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                  }}
                />
                <Legend />
                <Bar
                  dataKey="investment"
                  name="Investment"
                  fill="hsl(var(--chart-4))"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="benefit"
                  name="Benefit"
                  fill="hsl(var(--chart-5))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Performance Overview</CardTitle>
              <CardDescription>
                Completion rates and ROI by course
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {coursePerformance.map((course) => (
                  <div
                    key={course.name}
                    className="flex items-center justify-between"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{course.name}</p>
                      <div className="flex items-center gap-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${course.completion}%`,
                            backgroundColor: course.completion < 70 
                              ? 'hsl(var(--destructive))' 
                              : course.completion < 85
                              ? 'hsl(var(--warning))' 
                              : 'hsl(var(--success))',
                          }}
                        />
                        <span
                          className={cn(
                            "text-sm",
                            course.roi > 200 
                              ? 'text-green-500' 
                              : 'text-yellow-500'
                          )}
                        >
                          ROI: {course.roi}%
                        </span>
                      </div>
                    </div>
                    <p className="text-2xl font-bold">
                      {course.completion}%
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learning Impact Summary</CardTitle>
              <CardDescription>
                Key metrics and financial impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      Total Investment
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {formatLakhs(overallMetrics.totalInvestment)}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      Total Benefits
                    </p>
                    <p className="text-2xl font-bold text-secondary">
                      {formatLakhs(overallMetrics.totalBenefits)}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      Net Benefit
                    </p>
                    <p className="text-2xl font-bold text-accent">
                      {formatLakhs(overallMetrics.totalBenefits - overallMetrics.totalInvestment)}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      Benefit-Cost Ratio
                    </p>
                    <p className="text-2xl font-bold">
                      {(overallMetrics.totalBenefits / overallMetrics.totalInvestment).toFixed(2)}x
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Overall Program ROI
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold text-green-500">
                      {overallMetrics.overallROI}%
                    </p>
                    <p className="text-sm text-muted-foreground">
                      average across all departments
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}

