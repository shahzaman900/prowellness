export const newsCategories = [
  "RPM",
  "CCM",
  "Compliance",
  "Operations",
  "Company News",
] as const

export type NewsCategory = (typeof newsCategories)[number]

export type NewsContentBlock =
  | {
      type: "heading"
      level: 2 | 3
      text: string
    }
  | {
      type: "paragraph"
      text: string
    }
  | {
      type: "list"
      ordered?: boolean
      items: string[]
    }
  | {
      type: "quote"
      text: string
      citation?: string
    }

export interface NewsPost {
  slug: string
  title: string
  publishedAt: string
  excerpt: string
  category: NewsCategory
  tags: string[]
  coverImage: string
  coverImageAlt: string
  author: string
  status: "draft" | "published"
  sourceUrl?: string
  content: NewsContentBlock[]
}
