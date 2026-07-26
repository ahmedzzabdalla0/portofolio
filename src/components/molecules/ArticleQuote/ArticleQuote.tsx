import Link from "next/link";
import { Icon } from "@/components/atoms/Icon";
import { Typography } from "@/components/atoms/Typography";
import type { ArticleQuoteData } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ArticleQuoteProps {
  data: ArticleQuoteData;
  className?: string;
}

function ArticleQuote({ data, className }: ArticleQuoteProps) {
  return (
    <div
      className={cn(
        "bg-surface-container-low border border-subtle rounded-xl p-card relative overflow-hidden",
        className,
      )}
    >
      <Icon
        name="format_quote"
        size="xl"
        fill={1}
        className="text-surface-container-highest absolute top-1 left-1 opacity-40 select-none pointer-events-none"
      />
      <div className="relative z-10 flex flex-col gap-6">
        <Typography variant="h3" className="text-on-surface max-w-2xl">
          {data.quote}
        </Typography>
        <Link
          href={data.mediumUrl}
          className="font-label text-label text-primary-container uppercase tracking-widest hover:text-primary transition-colors duration-250 flex items-center gap-2 w-fit"
        >
          Read My Articles on Medium
          <Icon name="arrow_forward" size="sm" />
        </Link>
      </div>
    </div>
  );
}

export { ArticleQuote };
export type { ArticleQuoteProps };
