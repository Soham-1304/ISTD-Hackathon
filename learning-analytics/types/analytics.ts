export interface Course {
  id: string
  name: string
  description: string
  duration: string
  enrolledCount: number
  completionRate: number
  rating: number
  costPerLearner: number
  totalHours: number
  modules: number
  instructor: string
  lastUpdated: string
}

export interface CourseMetrics {
  courseId: string
  timeSpentPerModule: {
    moduleName: string
    averageTime: number
  }[]
  completionTrend: {
    date: string
    rate: number
  }[]
  feedback: {
    rating: number
    count: number
  }[]
  engagement: {
    metric: string
    value: number
  }[]
  roi: {
    cost: number
    benefit: number
    percentage: number
  }
}

export interface OverallMetrics {
  totalCourses: number
  totalLearners: number
  averageCompletion: number
  averageSatisfaction: number
  totalHoursSpent: number
  completedCourses: number
  roi: {
    totalCost: number
    totalBenefit: number
    percentage: number
  }
  trends: {
    date: string
    completion: number
    satisfaction: number
    engagement: number
  }[]
}

