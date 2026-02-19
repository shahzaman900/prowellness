import Link from "next/link"
import { NewsCard } from "@/components/news/news-card"
import { getLatestNewsPosts } from "@/lib/news"

export function BlogSection() {
  const latestPosts = getLatestNewsPosts(3)

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-3">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Latest Insights</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#121576] md:text-4xl">News & Updates</h2>
          </div>
          <Link
            href="/news"
            className="text-sm font-bold uppercase tracking-wide text-secondary transition-colors hover:text-primary"
          >
            View All
          </Link>
        </div>

        {latestPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {latestPosts.map((post) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center text-muted-foreground">
            No published posts yet.
          </div>
        )}
      </div>
    </section>
  )
}
