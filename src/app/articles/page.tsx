import type { Metadata } from "next";
import Link from "next/link";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { ArticleQuote } from "@/components/molecules/ArticleQuote";
import { Icon } from "@/components/atoms/Icon";
import { ARTICLE_QUOTE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Articles",
  description: "Writings on software engineering, system design, and modern web development.",
};

export default function ArticlesPage() {
  return (
    <div className="py-section px-gutter">
      <div className="max-w-container mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-6 animate-fade-in-up">
          <Typography variant="h1">Articles</Typography>
          <Typography variant="body-lg" className="max-w-xl">
            Thoughts on software engineering, system design, and the occasional deep dive into emerging technologies.
          </Typography>
        </div>
        <ArticleQuote data={ARTICLE_QUOTE} />
        <div className="flex justify-center border-t border-subtle pt-12">
          <Button as={Link} href={ARTICLE_QUOTE.mediumUrl} variant="secondary" size="lg">
            <Icon name="open_in_new" size="sm" />
            Read All Articles on Medium
          </Button>
        </div>
      </div>
    </div>
  );
}
