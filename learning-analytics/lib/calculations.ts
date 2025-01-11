export interface CourseROIParams {
  // All costs in INR
  trainingCost: number        // Direct training cost
  infrastructureCost: number  // Physical/virtual classroom costs
  contentCost: number        // Content development and materials
  technologyCost: number     // LMS and tools
  marketingCost: number      // Course marketing and promotion
  
  // Participant details
  participantCount: number
  averageCtc: number         // Cost to company (annual)
  trainingHours: number
  
  // Impact metrics (percentages)
  productivityGain: number   // Expected productivity improvement
  errorReduction: number     // Reduction in mistakes/rework
  timeOptimization: number   // Time saved in processes
  retentionImprovement: number // Improvement in employee retention
  
  // Business metrics
  averageRevenuePerEmployee: number // Annual revenue per employee
  replacementCost: number    // Cost to replace an employee
  implementationPeriod: number // Months to fully implement learning
}

export function calculateDetailedROI(params: CourseROIParams) {
  // 1. Total Investment Calculation
  const totalDirectCosts = 
    params.trainingCost +
    params.infrastructureCost +
    params.contentCost +
    params.technologyCost +
    params.marketingCost

  // Opportunity cost (time spent in training)
  const hourlyRate = params.averageCtc / (240 * 8) // 240 working days
  const opportunityCost = 
    params.participantCount * 
    hourlyRate * 
    params.trainingHours

  const totalInvestment = totalDirectCosts + opportunityCost

  // 2. Benefits Calculation
  
  // Productivity Benefits
  const annualProductivityBenefit = 
    (params.averageRevenuePerEmployee * (params.productivityGain / 100)) *
    params.participantCount

  // Error Reduction Benefits
  const errorCostSavings = 
    (params.averageRevenuePerEmployee * 0.05) * // Assuming 5% revenue loss due to errors
    (params.errorReduction / 100) *
    params.participantCount

  // Time Optimization Benefits
  const timeSavingsBenefit = 
    (params.averageCtc * (params.timeOptimization / 100)) *
    params.participantCount

  // Retention Benefits
  const retentionBenefit = 
    params.replacementCost *
    params.participantCount *
    (params.retentionImprovement / 100)

  // Total Benefits (prorated for implementation period)
  const implementationFactor = params.implementationPeriod / 12
  const totalBenefits = 
    (annualProductivityBenefit +
    errorCostSavings +
    timeSavingsBenefit +
    retentionBenefit) * implementationFactor

  // 3. ROI Calculation
  const roi = ((totalBenefits - totalInvestment) / totalInvestment) * 100

  return {
    investment: {
      direct: totalDirectCosts,
      opportunity: opportunityCost,
      total: totalInvestment
    },
    benefits: {
      productivity: annualProductivityBenefit * implementationFactor,
      errorReduction: errorCostSavings * implementationFactor,
      timeSavings: timeSavingsBenefit * implementationFactor,
      retention: retentionBenefit * implementationFactor,
      total: totalBenefits
    },
    metrics: {
      roi: Math.round(roi),
      paybackPeriod: totalInvestment / (totalBenefits / 12), // in months
      benefitCostRatio: totalBenefits / totalInvestment
    }
  }
}

export function formatIndianCurrency(amount: number): string {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  })
  return formatter.format(amount)
}

export function formatLakhs(amount: number): string {
  return `₹${(amount / 100000).toFixed(2)}L`
}

