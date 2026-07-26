"use client";

import { useState } from "react";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { Icon } from "@/components/atoms/Icon";
import { PROJECTS } from "@/lib/constants";
import type { ProjectCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

type FilterOption = "all" | ProjectCategory;

const FILTER_OPTIONS: { label: string; value: FilterOption }[] = [
  { label: "All Projects", value: "all" },
  { label: "Full-Stack", value: "full-stack" },
  { label: "DevOps", value: "devops" },
  { label: "Frontend", value: "frontend" },
  { label: "Automation", value: "automation" },
];

const ITEMS_PER_PAGE = 6;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredProjects = activeFilter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <div className="py-section px-gutter">
      <div className="max-w-container mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-6 animate-fade-in-up">
          <Typography variant="h1">Projects Gallery</Typography>
          <Typography variant="body-lg" className="max-w-xl">
            A curated selection of technical work spanning full-stack development, cloud infrastructure, and frontend
            architecture. Built with precision and a focus on performance.
          </Typography>
        </div>

        <div className="flex flex-wrap gap-3 border-b border-subtle pb-8">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setActiveFilter(option.value);
                setVisibleCount(ITEMS_PER_PAGE);
              }}
              className={cn(
                "font-label text-label uppercase tracking-widest px-4 py-2 rounded-md transition-all duration-250",
                activeFilter === option.value
                  ? "bg-primary-container text-on-primary"
                  : "border border-subtle text-secondary hover:text-on-surface hover:border-primary-container/40",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variant={project.isFeatured ? "featured" : "default"} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center">
            <Button variant="secondary" size="lg" onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}>
              Load More Projects
              <Icon name="expand_more" size="sm" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
