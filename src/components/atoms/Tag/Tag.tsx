import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  label: string
}

function Tag({ label, className, ...rest }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-sm',
        'bg-surface-container-high text-on-surface-variant',
        'font-label text-label uppercase tracking-widest',
        'border border-subtle',
        className
      )}
      {...rest}
    >
      {label}
    </span>
  )
}

export { Tag }
export type { TagProps }
