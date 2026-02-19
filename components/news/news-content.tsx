import type { NewsContentBlock } from "@/lib/news/types"

interface NewsContentProps {
  content: NewsContentBlock[]
}

export function NewsContent({ content }: NewsContentProps) {
  return (
    <div className="space-y-6 text-base leading-8 text-foreground">
      {content.map((block, index) => {
        if (block.type === "heading") {
          if (block.level === 2) {
            return (
              <h2 key={`h2-${index}`} className="pt-2 text-2xl font-bold text-[#121576]">
                {block.text}
              </h2>
            )
          }

          return (
            <h3 key={`h3-${index}`} className="pt-2 text-xl font-bold text-[#121576]">
              {block.text}
            </h3>
          )
        }

        if (block.type === "paragraph") {
          return (
            <p key={`p-${index}`} className="text-base leading-8 text-foreground/90">
              {block.text}
            </p>
          )
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul"
          return (
            <ListTag
              key={`list-${index}`}
              className={block.ordered ? "list-decimal space-y-3 pl-6" : "list-disc space-y-3 pl-6"}
            >
              {block.items.map((item, itemIndex) => (
                <li key={`item-${index}-${itemIndex}`} className="leading-7 text-foreground/90">
                  {item}
                </li>
              ))}
            </ListTag>
          )
        }

        return (
          <blockquote
            key={`quote-${index}`}
            className="rounded-xl border-l-4 border-secondary bg-secondary/5 px-5 py-4"
          >
            <p className="text-lg italic text-foreground">{block.text}</p>
            {block.citation ? (
              <footer className="mt-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {block.citation}
              </footer>
            ) : null}
          </blockquote>
        )
      })}
    </div>
  )
}
