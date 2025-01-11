'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, LineChart, Users } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  {
    title: 'Active Courses',
    value: '120+',
    icon: BookOpen,
    description: 'Diverse learning programs',
  },
  {
    title: 'Total Learners',
    value: '2.8k+',
    icon: Users,
    description: 'Engaged participants',
  },
  {
    title: 'Average ROI',
    value: '267%',
    icon: LineChart,
    description: 'Return on investment',
  },
]

export function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="gradient-text text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Learning Analytics Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Track the effectiveness and ROI of workplace learning programs with
            comprehensive analytics and insights
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex justify-center gap-6"
          >
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden border-2 border-primary bg-primary px-8 transition-all hover:scale-105 hover:border-primary/80 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              <Link href="/courses" className="flex items-center gap-2">
                View Courses <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="relative overflow-hidden border-2 border-secondary bg-secondary px-8 transition-all hover:scale-105 hover:border-secondary/80 hover:bg-secondary/90 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            >
              <Link href="/metrics" className="flex items-center gap-2">
                View Metrics <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <Card key={stat.title} className="hero-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-3xl font-bold">{stat.value}</h3>
                <p className="mt-2 font-medium">{stat.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

