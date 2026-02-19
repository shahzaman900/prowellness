import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "rpm-the-future-of-healthcare",
  title: "RPM & The Future of Healthcare",
  publishedAt: "2023-03-01",
  excerpt:
    "Remote patient monitoring is set to take center stage in the coming years. It personalized care, saves time, and empowers patients like never before.",
  category: "Company News",
  tags: ["Future of Healthcare", "RPM", "Innovation"],
  coverImage: "/images/hero-lifestyle.png",
  coverImageAlt:
    "Visualizing the future of healthcare with integrated RPM services",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/rpm-the-future-of-healthcare/",
  content: [
    {
      type: "paragraph",
      text: "With technology evolving rapidly, the healthcare sector is expanding, and remote patient monitoring (RPM) is taking center stage. By monitoring vital signs and symptoms from a distance, RPM provides immense benefits for both patients and providers.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why RPM is the Future",
    },
    {
      type: "list",
      items: [
        "Individualized Care: Physicians can tailor treatment plans to the unique needs of each patient using real-time insights.",
        "Efficiency: Reductions in expensive in-person visits allow physicians to focus on critical cases like diagnosis and complex treatment.",
        "Cost Savings: Lower overhead for providers can lead to more affordable and accessible healthcare for everyone.",
        "Patient Connection: Remote tracking makes patients feel more empowered and connected to their care teams.",
      ],
    },
    {
      type: "paragraph",
      text: "In conclusion, those who adopt this technology early will be better positioned to succeed in an industry that increasingly values proactive, efficient, and patient-centered delivery models.",
    },
  ],
};
