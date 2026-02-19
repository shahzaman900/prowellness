import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "rpm-for-elderly-care",
  title: "Must Try Benefits of Remote Patient Monitoring for Elderly Care",
  publishedAt: "2023-05-05",
  excerpt:
    "Elderly patients often face barriers to regular care. RPM provides easier access, improved support, and increased independence for aging populations.",
  category: "RPM",
  tags: ["Elderly Care", "RPM", "Independence", "Chronic Disease"],
  coverImage: "/images/chronic-care-management-hero.png",
  coverImageAlt:
    "Providing better care for the elderly with remote patient monitoring",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/rpm-for-elderly-care/",
  content: [
    {
      type: "paragraph",
      text: "Remote patient monitoring (RPM) allows patients to share vital signs with providers from a distance. It is particularly beneficial for the elderly who may face challenges with mobility or living independently.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why Elderly Populations Should Try RPM",
    },
    {
      type: "list",
      items: [
        "Easier Access: Reduces the need for frequent, difficult clinic visits while enabling timely interventions.",
        "Improved Support: Enhances the relationship between patients and providers through continuous feedback.",
        "Reduced Costs: Lowers expenses by avoiding unnecessary hospitalizations and emergency visits.",
        "Quality of Life: Supports independence and dignity by allowing patients to stay in their own homes longer.",
      ],
    },
    {
      type: "paragraph",
      text: "RPM is a promising technology that transforms the experience of aging. It not only delays disease progression but also enhances the comfort and satisfaction of patients and their families.",
    },
  ],
};
