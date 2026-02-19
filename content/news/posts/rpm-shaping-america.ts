import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "rpm-shaping-america",
  title: "How Remote Patient Monitoring is Shaping the Healthcare of USA",
  publishedAt: "2023-12-05",
  excerpt:
    "The number of US patients using RPM is expected to reach 30 million by 2024. RPM is transforming healthcare quality, accessibility, and affordability.",
  category: "Company News",
  tags: ["Healthcare USA", "RPM", "Telehealth", "Trends"],
  coverImage: "/images/hero-lifestyle.png",
  coverImageAlt:
    "National growth and impact of remote patient monitoring in the US",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/rpm-shaping-america/",
  content: [
    {
      type: "paragraph",
      text: "Remote patient monitoring (RPM) is a delivery system within the broader telehealth industry that is rapidly evolving in the US. It involves transmitting information electronically between patients and physicians to monitor health outside clinical settings.",
    },
    {
      type: "heading",
      level: 2,
      text: "National Benefits and Impact",
    },
    {
      type: "list",
      items: [
        "Improving access for rural and remote populations.",
        "Enhancing patient engagement through personalized, continuous care.",
        "Reducing overall healthcare utilization and preventing emergency visits.",
        "Increasing provider productivity through better care coordination.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Overcoming Industry Challenges",
    },
    {
      type: "paragraph",
      text: "Growth requires addressing data security, ensuring reliability across networks, and aligning reimbursement policies. Despite these hurdles, US patient adoption is projected to grow to 30 million by 2024.",
    },
    {
      type: "paragraph",
      text: "RPM is not just a technology; it’s a culture and a vision that is shaping the future of American healthcare by making it more affordable and accessible for all.",
    },
  ],
};
