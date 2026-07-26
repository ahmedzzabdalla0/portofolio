import { Icon } from '@/components/atoms/Icon'
import { Typography } from '@/components/atoms/Typography'
import { Tag } from '@/components/atoms/Tag'
import { ProgressBar } from '@/components/atoms/ProgressBar'
import type { SkillCategory } from '@/lib/types'
import { cn } from '@/lib/utils'

interface SkillGroupProps {
  category: SkillCategory
  className?: string
}

function SkillGroup({ category, className }: SkillGroupProps) {
  const hasProficiencies = category.proficiencies && category.proficiencies.length > 0

  return (
    <div
      className={cn(
        'bg-surface-container-low border border-subtle rounded-xl p-card',
        'hover:border-primary-container/40 transition-colors duration-250',
        'flex flex-col gap-6',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Icon name={category.icon} className="text-primary-container" />
        <Typography variant="h3">{category.title}</Typography>
      </div>
      {category.description && (
        <Typography variant="body-md">{category.description}</Typography>
      )}
      {hasProficiencies ? (
        <div className="flex flex-col gap-4">
          {category.proficiencies!.map((skill) => (
            <ProgressBar
              key={skill.name}
              label={skill.name}
              value={skill.level}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <Tag key={skill} label={skill} />
          ))}
        </div>
      )}
    </div>
  )
}

export { SkillGroup }
export type { SkillGroupProps }
