import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { NewsCard } from "@/components/news/news-card"
import { NewsContent } from "@/components/news/news-content"
import { formatNewsDate, getAllNewsPosts, getNewsPostBySlug, getRelatedNewsPosts } from "@/lib/news"

interface NewsPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return getAllNewsPosts().map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: NewsPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getNewsPostBySlug(slug)

  if (!post) {
    return {
      title: "News Article Not Found | ProWell Care",
    }
  }

  return {
    title: `${post.title} | ProWell Care News`,
    description: post.excerpt,
  }
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params
  const post = getNewsPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedNewsPosts(post, 3)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-gray-100 bg-white py-10">
          <div className="container mx-auto px-4">
            <Link href="/news" className="text-sm font-semibold uppercase tracking-wide text-secondary hover:text-primary">
              &larr; Back to News
            </Link>
          </div>
        </section>

        <article className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  {post.category}
                </span>
                <span className="text-sm text-muted-foreground">{formatNewsDate(post.publishedAt)}</span>
              </div>

              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
                {post.title}
              </h1>

              <p className="mb-8 text-base text-muted-foreground">By {post.author}</p>

              <div className="relative mb-10 aspect-[16/8] overflow-hidden rounded-2xl bg-primary/5 shadow-md">
                <Image src={post.coverImage} alt={post.coverImageAlt} fill className="object-cover" priority />
              </div>

              <NewsContent content={post.content} />

              {post.sourceUrl ? (
                <p className="mt-10 text-sm text-muted-foreground">
                  Source:{" "}
                  <a
                    href={post.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline-offset-2 hover:underline"
                  >
                    Original article
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 ? (
          <section className="border-t border-gray-100 bg-muted/20 py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-[#121576]">Related Updates</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <NewsCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  )
}
