import Link from "next/link";
import { Icon } from "@/components/atoms/Icon";
import { cn } from "@/lib/utils";

interface ContactLinkProps {
  href: string;
  label: string;
  icon: string;
  className?: string;
}

function ContactLink({ href, label, icon, className }: ContactLinkProps) {
  return (
    <Link target="_blank" href={href} className={cn("flex items-center gap-4 group w-fit", className)}>
      <div className="w-12 h-12 rounded-lg bg-surface-container-low border border-subtle flex items-center justify-center group-hover:border-primary-container/50 transition-colors duration-250">
        <Icon
          name={icon}
          className="text-secondary group-hover:text-primary-container transition-colors duration-250"
        />
      </div>
      <span className="font-body text-body-md text-secondary group-hover:text-on-surface transition-colors duration-250">
        {label}
      </span>
    </Link>
  );
}

export { ContactLink };
export type { ContactLinkProps };
