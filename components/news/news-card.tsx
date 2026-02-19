import Image from "next/image"
import Link from "next/link"
import type { NewsPost } from "@/lib/news/types"
import { formatNewsDate } from "@/lib/news"
import { cn } from "@/lib/utils"

interface NewsCardProps {
  post: NewsPost
  featured?: boolean
  view?: "grid" | "list"
}

export function NewsCard({ post, featured = false, view = "grid" }: NewsCardProps) {
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-xl">
        <div className="relative aspect-[21/9] overflow-hidden md:aspect-[16/6]">
          <Link href={`/news/${post.slug}`} className="absolute inset-0" aria-label={post.title}>
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
          </Link>

          <div className="absolute inset-0 flex items-end">
            <div className="w-full p-8 md:p-12 lg:p-16">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#121576] shadow-sm backdrop-blur-sm">
                  {post.category}
                </span>
                <span className="text-sm font-medium text-white/95 drop-shadow-sm">
                  {formatNewsDate(post.publishedAt)}
                </span>
              </div>

              <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg md:text-4xl lg:text-5xl">
                <Link href={`/news/${post.slug}`} className="hover:text-white/95 transition-colors">
                  {post.title}
                </Link>
              </h2>

              <p className="mb-6 max-w-3xl text-base leading-relaxed text-white/95 drop-shadow-md md:text-lg">
                {post.excerpt}
              </p>

              <Link
                href={`/news/${post.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#121576] shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
              >
                Read Featured Story
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    )
  }

  if (view === "list") {
    return (
      <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md">
        <div className="md:grid md:grid-cols-[320px_1fr]">
          <Link
            href={`/news/${post.slug}`}
            className="relative block aspect-[16/10] overflow-hidden bg-gray-100 md:h-full md:aspect-auto"
          >
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </Link>

          <div className="flex flex-col justify-center p-6 md:p-8">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">{formatNewsDate(post.publishedAt)}</span>
            </div>

            <h2 className="mb-3 text-xl font-bold leading-tight tracking-tight text-[#121576] md:text-2xl">
              <Link href={`/news/${post.slug}`} className="transition-colors hover:text-secondary">
                {post.title}
              </Link>
            </h2>

            <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              {post.excerpt}
            </p>

            <Link
              href={`/news/${post.slug}`}
              className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-wide text-secondary transition-colors hover:text-primary"
            >
              Read Article
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
      <Link href={`/news/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-gray-100">
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </Link>

      <div className="p-6">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            {post.category}
          </span>
          <span className="text-sm text-muted-foreground">{formatNewsDate(post.publishedAt)}</span>
        </div>

        <h2 className="mb-3 line-clamp-2 text-xl font-bold leading-tight tracking-tight text-[#121576]">
          <Link href={`/news/${post.slug}`} className="transition-colors hover:text-secondary">
            {post.title}
          </Link>
        </h2>

        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>

        <Link
          href={`/news/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-secondary transition-colors hover:text-primary"
        >
          Read Article
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  )
}
