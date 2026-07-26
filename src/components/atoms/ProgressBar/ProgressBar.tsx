import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  value: number
  max?: number
}

function ProgressBar({ label, value, max = 100, className, ...rest }: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  return (
    <div className={cn('flex flex-col gap-2', className)} {...rest}>
      <div className="flex justify-between items-center">
        <span className="font-label text-label text-on-surface-variant uppercase tracking-widest">
          {label}
        </span>
        <span className="font-label text-label text-primary-container">
          {value}%
        </span>
      </div>
      <div
        className="w-full h-0.5 bg-surface-container-high rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        <div
          className="h-full bg-primary-container rounded-full transition-all duration-slow"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export { ProgressBar }
export type { ProgressBarProps }
