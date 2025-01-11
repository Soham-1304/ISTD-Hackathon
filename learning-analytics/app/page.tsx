import { Hero } from '@/components/hero'
import { MetricsOverview } from '@/components/metrics-overview'

export default function Page() {
  return (
    <div className="flex-1">
      <Hero />
      <div className="mx-auto max-w-7xl space-y-8 px-6 pb-16">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
          <p className="text-muted-foreground">
            Key performance indicators and ROI metrics
          </p>
        </div>
        <MetricsOverview />
      </div>
    </div>
  )
}

