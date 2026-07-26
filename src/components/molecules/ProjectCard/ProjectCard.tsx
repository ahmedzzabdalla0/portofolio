import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/atoms/Icon";
import { Typography } from "@/components/atoms/Typography";
import { Tag } from "@/components/atoms/Tag";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "featured";
  className?: string;
}

function ProjectCard({ project, variant = "default", className }: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const coverBackground =
    project.coverGradient === true
      ? `linear-gradient(135deg, ${project.coverColor} 0%, var(--color-surface-container-highest) 100%)`
      : project.coverColor;
  const mediaPx = isFeatured ? 90 : 80;
  const mediaSizeClass = isFeatured ? "text-[5.625rem]" : "text-[5rem]";

  return (
    <Link
      href={project.href}
      target="_blank"
      className={cn(
        "group block bg-surface-container-low border border-subtle rounded-xl overflow-hidden",
        "hover:border-primary-container/40 transition-all duration-250",
        isFeatured && "lg:col-span-2",
        className,
      )}
    >
      <div className={cn("relative overflow-hidden", isFeatured ? "h-64" : "h-48")}>
        <div
          className="absolute inset-0 transition-opacity duration-250 group-hover:opacity-75"
          style={{ background: coverBackground }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-250" />
        <div className="absolute inset-0 z-10 flex items-center justify-center p-6 pointer-events-none">
          <div className="transition-all duration-250 group-hover:scale-90 group-hover:opacity-40">
            {project.logoSrc ? (
              <Image
                src={project.logoSrc}
                alt={project.logoAlt ?? `${project.title} logo`}
                width={mediaPx}
                height={mediaPx}
                className={cn(
                  "object-contain w-auto drop-shadow-lg",
                  isFeatured ? "max-h-[5.625rem] max-w-[5.625rem]" : "max-h-[5rem] max-w-[5rem]",
                )}
              />
            ) : (
              <Icon
                name={project.logoIcon ?? "deployed_code"}
                className={cn("text-on-surface drop-shadow-lg leading-none", mediaSizeClass)}
                fill={0}
              />
            )}
          </div>
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none">
          <span className="bg-primary-container text-on-primary font-label text-label px-4 py-2 rounded-full flex items-center gap-2 uppercase tracking-widest shadow-glow-sm">
            View Project
            <Icon name="arrow_outward" size="sm" />
          </span>
        </div>
        {project.isFeatured && (
          <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
            <span className="font-label text-label text-primary-container uppercase tracking-widest flex items-center gap-1">
              <Icon name="star" size="sm" fill={1} />
              Featured
            </span>
            <span className="font-label text-label text-secondary uppercase tracking-widest">
              · {project.category.replace("-", " ")}
            </span>
          </div>
        )}
        {!project.isFeatured && (
          <div className="absolute top-4 left-4 z-30">
            <span className="font-label text-label text-secondary uppercase tracking-widest">
              {project.category.replace("-", " ")}
            </span>
          </div>
        )}
      </div>
      <div className="p-card flex flex-col gap-4">
        <Typography variant="h3">{project.title}</Typography>
        <Typography variant="body-md">{project.description}</Typography>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech} label={tech} />
          ))}
        </div>
      </div>
    </Link>
  );
}

export { ProjectCard };
export type { ProjectCardProps };
