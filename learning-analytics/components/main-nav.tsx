'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, LayoutDashboard, LineChart } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const routes = [
  {
    label: 'Overview',
    icon: LayoutDashboard,
    href: '/',
    color: 'text-sky-500',
  },
  {
    label: 'Courses',
    icon: BookOpen,
    href: '/courses',
    color: 'text-violet-500',
  },
  {
    label: 'Metrics',
    icon: LineChart,
    href: '/metrics',
    color: 'text-pink-500',
  },
]

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      {routes.map((route) => (
        <Button
          key={route.href}
          variant="ghost"
          className={cn(
            'justify-start',
            pathname === route.href
              ? 'bg-muted hover:bg-muted'
              : 'hover:bg-transparent hover:underline',
          )}
          asChild
        >
          <Link
            href={route.href}
            className="flex items-center gap-2"
          >
            <route.icon className={cn('h-5 w-5', route.color)} />
            {route.label}
          </Link>
        </Button>
      ))}
    </nav>
  )
}

