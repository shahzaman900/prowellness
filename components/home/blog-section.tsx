"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { getLatestNewsPosts } from "@/lib/news";
import { NewsCard } from "@/components/news/news-card";
import { Button } from "@/components/ui/button";

export function BlogSection() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const latestPosts = getLatestNewsPosts(6);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className='bg-white py-20 lg:py-28'>
      <div className='container mx-auto px-4'>
        {/* Header Row */}
        <div className='mb-10 flex items-end justify-between gap-4'>
          <div className='space-y-3'>
            <p className='text-sm font-bold uppercase tracking-[0.18em] text-secondary'>
              Latest Insights
            </p>
            <h2 className='font-serif text-3xl font-bold tracking-tight text-[#121576] md:text-4xl'>
              News & Updates
            </h2>
          </div>

          <div className='flex items-center gap-3'>
            {/* Navigation Arrows */}
            <div className='hidden items-center gap-2 md:flex'>
              <Button
                variant='outline'
                size='icon'
                onClick={() => scroll("left")}
                className='h-10 w-10 rounded-full border-secondary text-secondary transition-colors hover:bg-secondary hover:text-white'
              >
                <ChevronLeft className='h-5 w-5' />
              </Button>
              <Button
                variant='outline'
                size='icon'
                onClick={() => scroll("right")}
                className='h-10 w-10 rounded-full border-secondary text-secondary transition-colors hover:bg-secondary hover:text-white'
              >
                <ChevronRight className='h-5 w-5' />
              </Button>
            </div>

            <Link
              href='/news'
              className='text-sm font-bold uppercase tracking-wide text-secondary transition-colors hover:text-primary'
            >
              View All
            </Link>
          </div>
        </div>

        {/* Scrollable Cards */}
        {latestPosts.length > 0 ? (
          <>
            <div
              ref={scrollContainerRef}
              className='flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4'
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {latestPosts.map((post) => (
                <div
                  key={post.slug}
                  className='w-[340px] flex-shrink-0 snap-start md:w-[400px]'
                >
                  <NewsCard post={post} />
                </div>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className='mt-6 flex items-center justify-center gap-3 md:hidden'>
              <Button
                variant='outline'
                size='icon'
                onClick={() => scroll("left")}
                className='h-10 w-10 rounded-full border-secondary text-secondary'
              >
                <ChevronLeft className='h-5 w-5' />
              </Button>
              <Button
                variant='outline'
                size='icon'
                onClick={() => scroll("right")}
                className='h-10 w-10 rounded-full border-secondary text-secondary'
              >
                <ChevronRight className='h-5 w-5' />
              </Button>
            </div>
          </>
        ) : (
          <div className='rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center text-muted-foreground'>
            No published posts yet.
          </div>
        )}
      </div>
    </section>
  );
}
