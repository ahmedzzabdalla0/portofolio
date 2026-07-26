import { Typography } from '@/components/atoms/Typography'
import { SkillGroup } from '@/components/molecules/SkillGroup'
import { SKILL_CATEGORIES } from '@/lib/constants'

function TechnicalArsenal() {
  return (
    <section className="py-section px-gutter">
      <div className="max-w-container mx-auto flex flex-col gap-12">
        <Typography variant="h2">Technical Arsenal</Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <SkillGroup key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { TechnicalArsenal }
