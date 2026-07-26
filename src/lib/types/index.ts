import type { ElementType, ComponentPropsWithoutRef } from "react";

export type PolymorphicProps<E extends ElementType, P = object> = P &
  Omit<ComponentPropsWithoutRef<E>, keyof P> & {
    as?: E;
  };

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export type TypographyVariant = "h1" | "h2" | "h3" | "body-lg" | "body-md" | "label";

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: string[];
  proficiencies?: Skill[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  companyColor?: string;
  period: string;
  description: string;
  technologies: string[];
  isCurrent?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  href: string;
  category: ProjectCategory;
  isFeatured?: boolean;
  imageAlt?: string;
  coverColor: string;
  coverGradient?: boolean;
  logoIcon?: string;
  logoSrc?: string;
  logoAlt?: string;
}

export type ProjectCategory = "full-stack" | "devops" | "frontend" | "data" | "automation";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  socials: SocialLink[];
}

export interface ArticleQuoteData {
  quote: string;
  mediumUrl: string;
}
