'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  label: string
}

function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'font-label text-label uppercase tracking-widest transition-colors duration-250',
        'hover:text-on-surface',
        isActive
          ? 'text-primary-container border-b-2 border-primary-container pb-1'
          : 'text-secondary'
      )}
    >
      {label}
    </Link>
  )
}

export { NavLink }
export type { NavLinkProps }
