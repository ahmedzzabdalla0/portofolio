import type { Metadata } from 'next'
import '../styles/globals.css'
import { RootLayoutTemplate } from '@/components/templates'
import { SITE_OWNER } from '@/lib/constants'

export const metadata: Metadata = {
  title: {
    default: `${SITE_OWNER.name} | Full-Stack Engineer`,
    template: `%s | ${SITE_OWNER.name}`,
  },
  description: SITE_OWNER.bio,
  keywords: ['Full-Stack Engineer', 'Backend Engineer', 'React', 'Next.js', 'Go', 'Node.js'],
  authors: [{ name: SITE_OWNER.name }],
  creator: SITE_OWNER.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AHMED.DEV',
    title: `${SITE_OWNER.name} | Full-Stack Engineer`,
    description: SITE_OWNER.bio,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_OWNER.name} | Full-Stack Engineer`,
    description: SITE_OWNER.bio,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <RootLayoutTemplate>{children}</RootLayoutTemplate>
      </body>
    </html>
  )
}
