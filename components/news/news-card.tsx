import Image from "next/image"
import Link from "next/link"
import type { NewsPost } from "@/lib/news/types"
import { formatNewsDate } from "@/lib/news"
import { cn } from "@/lib/utils"

interface NewsCardProps {
  post: NewsPost
  featured?: boolean
}

export function NewsCard({ post, featured = false }: NewsCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        featured ? "grid gap-0 overflow-hidden lg:grid-cols-2" : "overflow-hidden"
      )}
    >
      <Link
        href={`/news/${post.slug}`}
        className={cn("relative block bg-primary/5", featured ? "min-h-[260px]" : "aspect-[16/9]")}
      >
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
        />
      </Link>

      <div className="p-6 lg:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            {post.category}
          </span>
          <span className="text-sm text-muted-foreground">{formatNewsDate(post.publishedAt)}</span>
        </div>

        <h2
          className={cn(
            "mb-3 font-bold tracking-tight text-[#121576]",
            featured ? "text-2xl md:text-3xl" : "text-xl"
          )}
        >
          <Link href={`/news/${post.slug}`} className="transition-colors hover:text-secondary">
            {post.title}
          </Link>
        </h2>

        <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">{post.excerpt}</p>

        <Link
          href={`/news/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-secondary transition-colors hover:text-primary"
        >
          Read Article
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  )
}
