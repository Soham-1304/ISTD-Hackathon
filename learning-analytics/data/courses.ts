import { 
  calculateDetailedROI, 
  type CourseROIParams 
} from '@/lib/calculations'

// Base parameters for mid-sized Indian corporate training program
const baseParams: CourseROIParams = {
  trainingCost: 250000,          // ₹2.5L base training cost
  infrastructureCost: 100000,    // ₹1L infrastructure
  contentCost: 300000,          // ₹3L content development
  technologyCost: 150000,       // ₹1.5L technology
  marketingCost: 50000,         // ₹50K marketing
  
  participantCount: 50,
  averageCtc: 800000,           // ₹8L CTC
  trainingHours: 24,
  
  productivityGain: 15,         // 15% productivity improvement
  errorReduction: 20,           // 20% error reduction
  timeOptimization: 10,         // 10% time saved
  retentionImprovement: 15,     // 15% retention improvement
  
  averageRevenuePerEmployee: 2400000, // ₹24L revenue per employee
  replacementCost: 400000,      // ₹4L replacement cost
  implementationPeriod: 12      // 12 months implementation
}

export const courses = [
  {
    id: '1',
    name: 'Advanced Technology Leadership',
    description: 'Leadership program for tech managers and architects',
    duration: '12 weeks',
    enrolledCount: 40,
    metrics: {
      completionRate: 92,
      engagementHours: 36,
      satisfactionScore: 4.7,
      feedbackDistribution: [
        { category: 'Highly Satisfied', count: 25 },
        { category: 'Satisfied', count: 12 },
        { category: 'Neutral', count: 2 },
        { category: 'Dissatisfied', count: 1 }
      ]
    },
    roi: calculateDetailedROI({
      ...baseParams,
      trainingCost: 500000,        // ₹5L (higher for specialized content)
      participantCount: 40,
      averageCtc: 2500000,         // ₹25L CTC for tech leaders
      contentCost: 600000,         // ₹6L for technical content
      productivityGain: 20,        // 20% productivity improvement
      averageRevenuePerEmployee: 7500000, // ₹75L revenue per tech leader
      replacementCost: 1250000,    // ₹12.5L replacement cost
      implementationPeriod: 12
    })
  },
  {
    id: '2',
    name: 'Digital Marketing Mastery',
    description: 'Comprehensive digital marketing certification',
    duration: '8 weeks',
    enrolledCount: 75,
    metrics: {
      completionRate: 88,
      engagementHours: 24,
      satisfactionScore: 4.5,
      feedbackDistribution: [
        { category: 'Highly Satisfied', count: 40 },
        { category: 'Satisfied', count: 25 },
        { category: 'Neutral', count: 8 },
        { category: 'Dissatisfied', count: 2 }
      ]
    },
    roi: calculateDetailedROI({
      ...baseParams,
      trainingCost: 300000,        // ₹3L
      participantCount: 75,
      averageCtc: 1000000,         // ₹10L CTC
      contentCost: 400000,         // ₹4L
      productivityGain: 25,        // 25% productivity improvement
      averageRevenuePerEmployee: 3000000, // ₹30L revenue per marketer
      replacementCost: 500000,     // ₹5L replacement cost
      implementationPeriod: 12
    })
  },
  {
    id: '3',
    name: 'Data Analytics Fundamentals',
    description: 'Essential data analysis and visualization skills',
    duration: '10 weeks',
    enrolledCount: 60,
    metrics: {
      completionRate: 85,
      engagementHours: 30,
      satisfactionScore: 4.6,
      feedbackDistribution: [
        { category: 'Highly Satisfied', count: 35 },
        { category: 'Satisfied', count: 15 },
        { category: 'Neutral', count: 8 },
        { category: 'Dissatisfied', count: 2 }
      ]
    },
    roi: calculateDetailedROI({
      ...baseParams,
      trainingCost: 400000,        // ₹4L
      participantCount: 60,
      averageCtc: 1500000,         // ₹15L CTC
      contentCost: 500000,         // ₹5L
      productivityGain: 22,        // 22% productivity improvement
      averageRevenuePerEmployee: 4500000, // ₹45L revenue per analyst
      replacementCost: 750000,     // ₹7.5L replacement cost
      implementationPeriod: 12
    })
  }
]

// Department-specific ROI calculations
export const departmentROI = [
  {
    department: 'Technology',
    ...calculateDetailedROI({
      ...baseParams,
      trainingCost: 1500000,       // ₹15L
      participantCount: 100,
      averageCtc: 2000000,         // ₹20L CTC
      contentCost: 1000000,        // ₹10L
      technologyCost: 500000,      // ₹5L
      productivityGain: 18,
      errorReduction: 25,
      timeOptimization: 15,
      averageRevenuePerEmployee: 6000000, // ₹60L revenue per tech employee
      replacementCost: 1000000,    // ₹10L replacement cost
      implementationPeriod: 12
    })
  },
  {
    department: 'Sales & Marketing',
    ...calculateDetailedROI({
      ...baseParams,
      trainingCost: 1000000,       // ₹10L
      participantCount: 150,
      averageCtc: 1200000,         // ₹12L CTC
      contentCost: 800000,         // ₹8L
      productivityGain: 25,
      errorReduction: 15,
      timeOptimization: 12,
      averageRevenuePerEmployee: 3600000, // ₹36L revenue per sales employee
      replacementCost: 600000,     // ₹6L replacement cost
      implementationPeriod: 12
    })
  },
  {
    department: 'Operations',
    ...calculateDetailedROI({
      ...baseParams,
      trainingCost: 800000,        // ₹8L
      participantCount: 120,
      averageCtc: 800000,          // ₹8L CTC
      contentCost: 600000,         // ₹6L
      productivityGain: 20,
      errorReduction: 30,
      timeOptimization: 18,
      averageRevenuePerEmployee: 2400000, // ₹24L revenue per ops employee
      replacementCost: 400000,     // ₹4L replacement cost
      implementationPeriod: 12
    })
  }
]

// Calculate aggregated metrics
export const overallMetrics = {
  totalParticipants: courses.reduce((sum, c) => sum + c.enrolledCount, 0),
  averageCompletion: Math.round(
    courses.reduce((sum, c) => sum + c.metrics.completionRate, 0) / courses.length
  ),
  averageSatisfaction: Number(
    (courses.reduce((sum, c) => sum + c.metrics.satisfactionScore, 0) / courses.length).toFixed(1)
  ),
  totalInvestment: departmentROI.reduce((sum, d) => sum + d.investment.total, 0),
  totalBenefits: departmentROI.reduce((sum, d) => sum + d.benefits.total, 0),
  overallROI: Math.round(
    departmentROI.reduce((sum, d) => sum + d.metrics.roi, 0) / departmentROI.length
  )
}

