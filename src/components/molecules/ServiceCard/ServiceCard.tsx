import { Icon } from '@/components/atoms/Icon'
import { Typography } from '@/components/atoms/Typography'
import { Tag } from '@/components/atoms/Tag'
import type { ServiceItem } from '@/lib/types'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  service: ServiceItem
  className?: string
}

function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        'bg-surface-container-low p-card rounded-xl border border-subtle',
        'hover:border-primary-container/40 transition-colors duration-250',
        'flex flex-col gap-6',
        className
      )}
    >
      <Icon name={service.icon} size="lg" className="text-primary-container" />
      <div className="flex flex-col gap-3">
        <Typography variant="h3">{service.title}</Typography>
        <Typography variant="body-md">{service.description}</Typography>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {service.technologies.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </div>
    </div>
  )
}

export { ServiceCard }
export type { ServiceCardProps }
