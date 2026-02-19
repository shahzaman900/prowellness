import { newsPosts } from "@/content/news/posts"
import type { NewsPost } from "@/lib/news/types"

function sortPostsByDate(posts: NewsPost[]): NewsPost[] {
  return [...posts].sort((a, b) => {
    const aDate = new Date(`${a.publishedAt}T00:00:00Z`).getTime()
    const bDate = new Date(`${b.publishedAt}T00:00:00Z`).getTime()
    return bDate - aDate
  })
}

export function getAllNewsPosts(): NewsPost[] {
  const publishedPosts = newsPosts.filter((post) => post.status === "published")
  return sortPostsByDate(publishedPosts)
}

export function getLatestNewsPosts(limit = 3): NewsPost[] {
  return getAllNewsPosts().slice(0, limit)
}

export function getNewsPostBySlug(slug: string): NewsPost | undefined {
  return getAllNewsPosts().find((post) => post.slug === slug)
}

export function getRelatedNewsPosts(currentPost: NewsPost, limit = 3): NewsPost[] {
  return getAllNewsPosts()
    .filter((post) => post.slug !== currentPost.slug)
    .sort((a, b) => {
      if (a.category === currentPost.category && b.category !== currentPost.category) {
        return -1
      }

      if (a.category !== currentPost.category && b.category === currentPost.category) {
        return 1
      }

      const aDate = new Date(`${a.publishedAt}T00:00:00Z`).getTime()
      const bDate = new Date(`${b.publishedAt}T00:00:00Z`).getTime()
      return bDate - aDate
    })
    .slice(0, limit)
}

export function formatNewsDate(dateString: string): string {
  const parsedDate = new Date(`${dateString}T00:00:00Z`)
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsedDate)
}
