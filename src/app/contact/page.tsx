import type { Metadata } from 'next'
import { ContactForm } from '@/components/organisms/ContactForm'
import { SITE_OWNER } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact',
  description: SITE_OWNER.aboutSubtitle,
}

export default function ContactPage() {
  return <ContactForm />
}
