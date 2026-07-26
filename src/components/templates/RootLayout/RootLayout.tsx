import type { ReactNode } from 'react'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'

interface RootLayoutTemplateProps {
  children: ReactNode
}

function RootLayoutTemplate({ children }: RootLayoutTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  )
}

export { RootLayoutTemplate }
