export function LearningImpactSummary() {
  return (
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
                ₹212.50L
              </p>
              <p className="text-xs text-muted-foreground">
                Across all programs
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                Total Benefits
              </p>
              <p className="text-2xl font-bold text-secondary">
                ₹551.80L
              </p>
              <p className="text-xs text-muted-foreground">
                Realized value
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                Average Completion
              </p>
              <p className="text-2xl font-bold text-accent">
                76.5%
              </p>
              <p className="text-xs text-muted-foreground">
                Across all courses
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                Active Learners
              </p>
              <p className="text-2xl font-bold">
                1,842
              </p>
              <p className="text-xs text-muted-foreground">
                Currently enrolled
              </p>
            </div>
          </div>
          <div className="pt-4 border-t">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                Program ROI Analysis
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold text-green-500">
                  159%
                </p>
                <p className="text-sm text-muted-foreground">
                  Overall return on investment
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                Net benefit: ₹339.30L
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

