import { Typography } from '@/components/atoms/Typography'
import { ArticleQuote } from '@/components/molecules/ArticleQuote'
import { ARTICLE_QUOTE } from '@/lib/constants'

function Articles() {
  return (
    <section className="border-b border-subtle py-section px-gutter">
      <div className="max-w-container mx-auto flex flex-col gap-12">
        <Typography variant="h2" className="text-center">
          My Articles
        </Typography>
        <ArticleQuote data={ARTICLE_QUOTE} />
      </div>
    </section>
  )
}

export { Articles }
