import { Typography } from '@/components/atoms/Typography'
import { Tag } from '@/components/atoms/Tag'
import type { ExperienceItem } from '@/lib/types'
import { cn } from '@/lib/utils'

interface ExperienceCardProps {
  item: ExperienceItem
  className?: string
}

function ExperienceCard({ item, className }: ExperienceCardProps) {
  return (
    <div
      className={cn(
        'relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-outline-variant',
        className
      )}
    >
      <div
        className={cn(
          'absolute left-0 top-1 w-2 h-2 rounded-full -translate-x-[calc(50%-0.5px)]',
          item.isCurrent
            ? 'bg-primary-container animate-pulse-glow'
            : 'bg-surface-container-high border border-outline'
        )}
      />
      <div className="bg-surface-container-low border border-subtle rounded-xl p-card flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div className="flex flex-col gap-1">
            <Typography variant="h3">{item.title}</Typography>
            <span
              className="font-body text-body-md font-medium"
              style={{ color: item.companyColor ?? 'rgb(var(--color-primary-container))' }}
            >
              {item.company}
            </span>
          </div>
          <span className="font-label text-label text-secondary uppercase tracking-widest whitespace-nowrap border border-subtle rounded-full px-3 py-1 self-start">
            {item.period}
          </span>
        </div>
        <Typography variant="body-md">{item.description}</Typography>
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <Tag key={tech} label={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { ExperienceCard }
export type { ExperienceCardProps }
