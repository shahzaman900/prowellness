"use client";

import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { NewsCard } from "@/components/news/news-card";
import { Button } from "@/components/ui/button";
import type { NewsPost } from "@/lib/news/types";

interface NewsFeedProps {
  featuredPost: NewsPost;
  posts: NewsPost[];
}

export function NewsFeed({ featuredPost, posts }: NewsFeedProps) {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className='space-y-20'>
      <NewsCard post={featuredPost} featured />

      <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        <h2 className='font-serif text-3xl font-bold tracking-tight text-[#121576] md:text-4xl'>
          Latest Articles
        </h2>
        <div className='inline-flex rounded-lg border border-border bg-background p-1 shadow-sm'>
          <Button
            variant={view === "grid" ? "default" : "ghost"}
            size='sm'
            onClick={() => setView("grid")}
            className='h-8 gap-2 rounded-md px-4 text-xs font-bold uppercase tracking-wider'
          >
            <LayoutGrid className='h-4 w-4' />
            Grid
          </Button>
          <Button
            variant={view === "list" ? "default" : "ghost"}
            size='sm'
            onClick={() => setView("list")}
            className='h-8 gap-2 rounded-md px-4 text-xs font-bold uppercase tracking-wider'
          >
            <List className='h-4 w-4' />
            List
          </Button>
        </div>
      </div>

      {posts.length > 0 ? (
        <div
          className={
            view === "grid"
              ? "grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              : "grid gap-8"
          }
        >
          {posts.map((post) => (
            <NewsCard key={post.slug} post={post} view={view} />
          ))}
        </div>
      ) : (
        <div className='rounded-xl border border-dashed border-border bg-muted/30 p-12 text-center text-muted-foreground'>
          Add more files in{" "}
          <code className='rounded bg-muted px-2 py-1 text-xs'>
            content/news/posts
          </code>{" "}
          to populate additional cards.
        </div>
      )}
    </div>
  );
}
