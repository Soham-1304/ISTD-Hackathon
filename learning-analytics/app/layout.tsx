import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learning Analytics Dashboard',
  description: 'Track and analyze the impact of learning programs with comprehensive analytics and ROI metrics',
  openGraph: {
    title: 'Learning Analytics Dashboard',
    description: 'Track and analyze the impact of learning programs with comprehensive analytics and ROI metrics',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-accent/5">
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,hsl(var(--primary)/0.05),transparent)] dark:bg-[radial-gradient(45%_25%_at_50%_50%,hsl(var(--primary)/0.1),transparent)]" />
            <Header />
            <main className="flex-1 page-transition">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

