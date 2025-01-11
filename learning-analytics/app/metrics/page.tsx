import { CourseMetrics } from '@/components/course-metrics'

export default function MetricsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Course Metrics</h2>
          <p className="text-muted-foreground">
            Detailed analytics for individual courses
          </p>
        </div>
      </div>
      <CourseMetrics />
    </div>
  )
}

