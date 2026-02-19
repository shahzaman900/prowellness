import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "technology-in-chronic-care-management",
  title:
    "The Role of Technology in Chronic Care Management: Empowering Better Patient Care",
  publishedAt: "2025-01-01",
  excerpt:
    "Wearables, telehealth, and AI are transforming chronic care management. Technology enables continuous monitoring and more personalized patient outcomes.",
  category: "RPM",
  tags: ["Technology", "CCM", "RPM", "Wearables", "AI"],
  coverImage: "/images/software-dashboard.png",
  coverImageAlt: "Technology enabling better chronic care management",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/technology-in-chronic-care-management/",
  content: [
    {
      type: "paragraph",
      text: "Managing chronic conditions like diabetes and hypertension has become more efficient and accessible thanks to modern technology. From wearables to AI, these tools are empowering both patients and healthcare providers.",
    },
    {
      type: "heading",
      level: 2,
      text: "Transformation Pillars",
    },
    {
      type: "list",
      items: [
        "Wearable Devices: Collect real-time data on vitals, allowing for preemptive adjustments to treatment plans.",
        "Telehealth: Eliminates travel barriers and ensures continuity of care through virtual consultations.",
        "Mobile Apps: Facilitate seamless communication, health tracking, and medication reminders.",
        "AI & Analytics: Predict potential health crises by detecting patterns in large volumes of patient data.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Key Benefits",
    },
    {
      type: "paragraph",
      text: "The integration of these technologies ensures continuous monitoring, highly personalized care, and significantly reduced hospital readmissions. Ultimately, this leads to a more empowered patient population and more cost-effective care delivery.",
    },
  ],
};
