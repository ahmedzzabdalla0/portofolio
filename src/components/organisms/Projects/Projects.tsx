import Link from 'next/link'
import { Typography } from '@/components/atoms/Typography'
import { Button } from '@/components/atoms/Button'
import { ProjectCard } from '@/components/molecules/ProjectCard'
import { PROJECTS } from '@/lib/constants'
import { Icon } from '@/components/atoms/Icon'

interface ProjectsProps {
  limit?: number
  showViewAll?: boolean
}

function Projects({ limit, showViewAll = false }: ProjectsProps) {
  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS

  return (
    <section className="border-b border-subtle py-section px-gutter">
      <div className="max-w-container mx-auto flex flex-col gap-12">
        <div className="flex justify-between items-end">
          <Typography variant="h2" className="text-center">
            My Projects
          </Typography>
          {showViewAll && (
            <Button as={Link} href="/projects" variant="ghost">
              View All
              <Icon name="arrow_forward" size="sm" />
            </Button>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant={project.isFeatured ? 'featured' : 'default'}
            />
          ))}
        </div>
        {showViewAll && (
          <div className="flex justify-center">
            <Button as={Link} href="/projects" variant="ghost">
              View All Projects
              <Icon name="arrow_forward" size="sm" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export { Projects }
