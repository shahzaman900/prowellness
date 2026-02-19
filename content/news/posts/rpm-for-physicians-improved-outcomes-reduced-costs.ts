import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "rpm-for-physicians-improved-outcomes-reduced-costs",
  title: "RPM for Physicians: Improved Outcomes & Reduced Costs",
  publishedAt: "2023-03-07",
  excerpt:
    "RPM provides physicians with real-time data to detect issues early, improve patient compliance, and significant cost savings through fewer readmissions.",
  category: "Operations",
  tags: ["Physicians", "RPM", "Outcomes", "Cost Savings"],
  coverImage: "/images/software-dashboard.png",
  coverImageAlt: "Clinical benefits and cost savings for physicians using RPM",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl:
    "https://prowellcare.com/rpm-for-physicians-improved-outcomes-reduced-costs/",
  content: [
    {
      type: "paragraph",
      text: "Remote patient monitoring (RPM) is gaining popularity for its effectiveness in clinical settings. By monitoring health status outside traditional settings, physicians gain a powerful tool for improving care delivery.",
    },
    {
      type: "heading",
      level: 2,
      text: "Tangible Benefits for Medical Practices",
    },
    {
      type: "list",
      items: [
        "Improved Outcomes: Real-time monitoring allows for early detection and timely intervention in chronic conditions.",
        "Enhanced Engagement: Patients feel more involved and empowered, leading to better adherence to treatment plans.",
        "Significant Cost Savings: Reduces the need for expensive in-person visits and hospitalizations.",
        "Reduced Readmissions: Continuous monitoring after discharge lowers the risk of costly 30-day readmissions.",
      ],
    },
    {
      type: "paragraph",
      text: "Furthermore, RPM improves the efficiency of care delivery by allowing physicians to prioritize patients based on actual data, ensuring that urgent care is provided where it is most needed.",
    },
  ],
};
