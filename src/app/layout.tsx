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

const MANROPE_HREF =
  'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600&display=swap'

const MATERIAL_SYMBOLS_HREF =
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href={MANROPE_HREF} />
        <link rel="preload" as="style" href={MATERIAL_SYMBOLS_HREF} />
        <link rel="stylesheet" href={MANROPE_HREF} />
        <link rel="stylesheet" href={MATERIAL_SYMBOLS_HREF} />
      </head>
      <body>
        <RootLayoutTemplate>{children}</RootLayoutTemplate>
      </body>
    </html>
  )
}
