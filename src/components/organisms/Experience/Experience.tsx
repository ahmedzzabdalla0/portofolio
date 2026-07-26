import { Typography } from "@/components/atoms/Typography";
import { ExperienceCard } from "@/components/molecules/ExperienceCard";
import { EXPERIENCE_ITEMS } from "@/lib/constants";

function Experience() {
  return (
    <section className="border-b border-subtle py-section px-gutter">
      <div className="max-w-container mx-auto flex flex-col gap-12">
        <Typography variant="h2">Experience</Typography>
        <div className="flex flex-col gap-10">
          {EXPERIENCE_ITEMS.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Experience };
