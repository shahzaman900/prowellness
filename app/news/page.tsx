import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { NewsFeed } from "@/components/news/news-feed"
import { getAllNewsPosts } from "@/lib/news"

export default function NewsPage() {
  const posts = getAllNewsPosts()
  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-background py-16 lg:py-24">
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl space-y-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">Insights & Announcements</p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                News & Updates
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Stay current with ProactiveWellness Care news, RPM and CCM insights, and operational guidance for care teams.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-4">
            {featuredPost ? (
              <NewsFeed featuredPost={featuredPost} posts={remainingPosts} />
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center text-muted-foreground">
                No published posts found. Add a post in <code>content/news/posts</code> and set <code>status</code> to{" "}
                <code>published</code>.
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
