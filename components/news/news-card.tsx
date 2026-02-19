import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import { formatNewsDate } from "@/lib/news";
import type { NewsPost } from "@/lib/news/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  post: NewsPost;
  featured?: boolean;
  view?: "grid" | "list";
}

export function NewsCard({
  post,
  featured = false,
  view = "grid",
}: NewsCardProps) {
  // FEATURED VARIANT: Editorial Split Layout
  if (featured) {
    return (
      <section className='group relative overflow-hidden rounded-2xl bg-card border border-border/40 shadow-sm transition-all hover:shadow-md'>
        <div className='grid gap-8 lg:grid-cols-2 lg:gap-12'>
          {/* Image Side */}
          <Link
            href={`/news/${post.slug}`}
            className='relative aspect-video w-full overflow-hidden lg:aspect-auto lg:h-full'
            aria-label={`Read featured article: ${post.title}`}
          >
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              fill
              className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
              sizes='(max-width: 1024px) 100vw, 50vw'
              priority
            />
          </Link>

          {/* Content Side */}
          <div className='flex flex-col justify-center p-6 lg:py-12 lg:pr-12'>
            <div className='mb-6 flex items-center gap-3'>
              <Badge
                variant='secondary'
                className='rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#121576] bg-[#121576]/10 hover:bg-[#121576]/20 border-none'
              >
                Featured
              </Badge>
              <span className='flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground'>
                <Calendar className='h-3.5 w-3.5' />
                {formatNewsDate(post.publishedAt)}
              </span>
            </div>

            <h2 className='mb-6 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl'>
              <Link
                href={`/news/${post.slug}`}
                className='transition-colors hover:text-[#121576]'
              >
                {post.title}
              </Link>
            </h2>

            <p className='mb-8 text-base leading-relaxed text-muted-foreground md:text-lg'>
              {post.excerpt}
            </p>

            <div className='mt-auto'>
              <Link
                href={`/news/${post.slug}`}
                className='inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#121576] transition-opacity hover:opacity-80'
              >
                Read Full Story
                <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // LIST VARIANT: Horizontal Layout
  if (view === "list") {
    return (
      <article className='group relative grid gap-6 rounded-xl bg-card p-6 transition-all hover:bg-muted/30 md:grid-cols-[280px_1fr] md:gap-8 border-b border-border last:border-0'>
        <Link
          href={`/news/${post.slug}`}
          className='relative aspect-[3/2] overflow-hidden rounded-lg bg-muted md:aspect-[4/3] md:h-full'
        >
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
            sizes='(max-width: 768px) 100vw, 280px'
          />
        </Link>

        <div className='flex flex-col justify-center'>
          <div className='mb-3 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wider text-muted-foreground'>
            <span className='font-bold text-[#121576]'>{post.category}</span>
            <span>•</span>
            <span>{formatNewsDate(post.publishedAt)}</span>
          </div>

          <h3 className='mb-3 font-serif text-2xl font-bold leading-tight text-foreground md:text-3xl'>
            <Link
              href={`/news/${post.slug}`}
              className='transition-colors hover:text-[#121576]'
            >
              {post.title}
            </Link>
          </h3>

          <p className='mb-5 line-clamp-2 text-muted-foreground md:line-clamp-3'>
            {post.excerpt}
          </p>

          <Link
            href={`/news/${post.slug}`}
            className='mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#121576] transition-colors hover:text-secondary'
          >
            Read Article
            <ArrowRight className='h-3.5 w-3.5 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>
      </article>
    );
  }

  // GRID VARIANT (Default): Modern Card
  return (
    <article className='group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md'>
      <Link
        href={`/news/${post.slug}`}
        className='relative aspect-video w-full overflow-hidden bg-muted'
      >
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100' />
      </Link>

      <div className='flex flex-1 flex-col p-6'>
        <div className='mb-4 flex items-center justify-between'>
          <span className='text-xs font-bold uppercase tracking-widest text-[#121576]'>
            {post.category}
          </span>
          <span className='text-xs font-medium text-muted-foreground'>
            {formatNewsDate(post.publishedAt)}
          </span>
        </div>

        <h3 className='mb-3 font-serif text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-[#121576] md:text-2xl'>
          <Link href={`/news/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className='mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground'>
          {post.excerpt}
        </p>

        <div className='mt-auto border-t border-border pt-4'>
          <Link
            href={`/news/${post.slug}`}
            className='flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-[#121576]'
          >
            <span>Read Article</span>
            <ArrowRight className='h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100' />
          </Link>
        </div>
      </div>
    </article>
  );
}
