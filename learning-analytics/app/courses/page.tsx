import { CourseList } from '@/components/course-list'

export default function CoursesPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Course Catalog</h2>
          <p className="text-muted-foreground">
            Browse and explore our learning programs
          </p>
        </div>
      </div>
      <CourseList />
    </div>
  )
}

