'use client'

import { useState } from 'react'
import { BarChart, Clock, MoreVertical, Star, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Progress } from '@/components/ui/progress'

const courses = [
  {
    id: '1',
    name: 'Leadership Essentials',
    description: 'Master the fundamentals of effective leadership',
    duration: '8 weeks',
    enrolledCount: 156,
    completionRate: 78,
    rating: 4.2,
    costPerLearner: 299,
    totalHours: 24,
    modules: 6,
    instructor: 'Dr. Sarah Johnson',
    lastUpdated: '2024-01-15',
  },
  {
    id: '2',
    name: 'Project Management Fundamentals',
    description: 'Learn the basics of project management methodology',
    duration: '6 weeks',
    enrolledCount: 243,
    completionRate: 82,
    rating: 4.6,
    costPerLearner: 249,
    totalHours: 18,
    modules: 5,
    instructor: 'Michael Chen',
    lastUpdated: '2024-01-10',
  },
  {
    id: '3',
    name: 'Digital Marketing Strategy',
    description: 'Comprehensive guide to modern marketing',
    duration: '10 weeks',
    enrolledCount: 189,
    completionRate: 71,
    rating: 4.1,
    costPerLearner: 349,
    totalHours: 30,
    modules: 8,
    instructor: 'Emma Thompson',
    lastUpdated: '2024-01-05',
  },
  {
    id: '4',
    name: 'Data Analytics Fundamentals',
    description: 'Introduction to data analysis and visualization',
    duration: '12 weeks',
    enrolledCount: 167,
    completionRate: 75,
    rating: 4.3,
    costPerLearner: 399,
    totalHours: 36,
    modules: 10,
    instructor: 'Dr. Alex Rivera',
    lastUpdated: '2024-01-20',
  },
  {
    id: '5',
    name: 'Business Communication',
    description: 'Enhance your professional communication skills',
    duration: '4 weeks',
    enrolledCount: 312,
    completionRate: 88,
    rating: 3.7,
    costPerLearner: 199,
    totalHours: 12,
    modules: 4,
    instructor: 'Patricia Wong',
    lastUpdated: '2024-01-08',
  },
  {
    id: '6',
    name: 'Agile Development',
    description: 'Master agile methodologies and practices',
    duration: '8 weeks',
    enrolledCount: 198,
    completionRate: 79,
    rating: 3.9,
    costPerLearner: 299,
    totalHours: 24,
    modules: 6,
    instructor: 'James Wilson',
    lastUpdated: '2024-01-12',
  },
  {
    id: '7',
    name: 'Financial Planning',
    description: 'Understanding financial management and planning',
    duration: '6 weeks',
    enrolledCount: 145,
    completionRate: 85,
    rating: 4.5,
    costPerLearner: 249,
    totalHours: 18,
    modules: 5,
    instructor: 'Robert Miller',
    lastUpdated: '2024-01-18',
  },
  {
    id: '8',
    name: 'HR Management',
    description: 'Essential skills for human resource management',
    duration: '10 weeks',
    enrolledCount: 134,
    completionRate: 76,
    rating: 4.5,
    costPerLearner: 349,
    totalHours: 30,
    modules: 8,
    instructor: 'Lisa Anderson',
    lastUpdated: '2024-01-22',
  },
  {
    id: '9',
    name: 'Cybersecurity Basics',
    description: 'Introduction to cybersecurity principles',
    duration: '12 weeks',
    enrolledCount: 178,
    completionRate: 72,
    rating: 4.2,
    costPerLearner: 399,
    totalHours: 36,
    modules: 10,
    instructor: 'David Kumar',
    lastUpdated: '2024-01-25',
  },
  {
    id: '10',
    name: 'Customer Service Excellence',
    description: 'Deliver outstanding customer service',
    duration: '4 weeks',
    enrolledCount: 267,
    completionRate: 91,
    rating: 3.6,
    costPerLearner: 199,
    totalHours: 12,
    modules: 4,
    instructor: 'Maria Garcia',
    lastUpdated: '2024-01-15',
  },
]

export function CourseList() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(
    null
  )

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="cursor-pointer hover:bg-muted/50" onClick={() => setSelectedCourse(course)}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{course.name}</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setSelectedCourse(course)}>
                      View details
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {course.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {course.enrolledCount} enrolled
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Completion Rate</span>
                  <span>{course.completionRate}%</span>
                </div>
                <Progress value={course.completionRate} />
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-medium">{course.rating}</span>
              </div>
              <Button className="w-full">
                <BarChart className="mr-2 h-4 w-4" />
                View Metrics
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="sm:max-w-[625px]">
          {selectedCourse && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedCourse.name}</DialogTitle>
                <DialogDescription>
                  {selectedCourse.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium">Duration</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedCourse.duration}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Total Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedCourse.totalHours} hours
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Modules</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedCourse.modules} modules
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Enrolled</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedCourse.enrolledCount} learners
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Completion Rate</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedCourse.completionRate}%
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Rating</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedCourse.rating}/5.0
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Cost per Learner</h4>
                    <p className="text-sm text-muted-foreground">
                      ${selectedCourse.costPerLearner}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Last Updated</h4>
                    <p className="text-sm text-muted-foreground">
                      {new Date(selectedCourse.lastUpdated).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Instructor</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedCourse.instructor}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

