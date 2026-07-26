import { Typography } from '@/components/atoms/Typography'
import { ServiceCard } from '@/components/molecules/ServiceCard'
import { SERVICES } from '@/lib/constants'

function Services() {
  return (
    <section className="border-b border-subtle py-section px-gutter">
      <div className="max-w-container mx-auto flex flex-col gap-12">
        <Typography variant="h2" className="text-center">
          My Services
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { Services }
