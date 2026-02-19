"use client"

import { useState } from "react"
import { LayoutGrid, List } from "lucide-react"
import { NewsCard } from "@/components/news/news-card"
import { Button } from "@/components/ui/button"
import type { NewsPost } from "@/lib/news/types"

interface NewsFeedProps {
  featuredPost: NewsPost
  posts: NewsPost[]
}

export function NewsFeed({ featuredPost, posts }: NewsFeedProps) {
  const [view, setView] = useState<"grid" | "list">("grid")

  return (
    <div className="space-y-16">
      <NewsCard post={featuredPost} featured />

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#121576] md:text-3xl">Browse Articles</h2>
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
          <Button
            variant={view === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setView("grid")}
            className="h-8 gap-2 rounded-md px-4 text-xs font-bold uppercase tracking-wider"
          >
            <LayoutGrid className="h-4 w-4" />
            Grid
          </Button>
          <Button
            variant={view === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setView("list")}
            className="h-8 gap-2 rounded-md px-4 text-xs font-bold uppercase tracking-wider"
          >
            <List className="h-4 w-4" />
            List
          </Button>
        </div>
      </div>

      {posts.length > 0 ? (
        <div
          className={
            view === "grid"
              ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              : "space-y-4 md:space-y-6"
          }
        >
          {posts.map((post) => (
            <NewsCard key={post.slug} post={post} view={view} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center text-muted-foreground">
          Add more files in <code className="rounded bg-gray-200 px-2 py-1 text-xs">content/news/posts</code> to
          populate additional cards.
        </div>
      )}
    </div>
  )
}
