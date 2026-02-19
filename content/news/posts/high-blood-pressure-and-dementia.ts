import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "high-blood-pressure-and-dementia",
  title: "The Overlooked Link: How High Blood Pressure Fuels Dementia Risk",
  publishedAt: "2025-09-04",
  excerpt:
    "Hypertension doesn't just harm the heart—it's a critical factor in dementia risk. Controlling blood pressure is key to protecting brain health and independence.",
  category: "RPM",
  tags: ["Hypertension", "Dementia", "Cognitive Decline", "RPM"],
  coverImage: "/images/rpm-dashboard.png",
  coverImageAlt:
    "Remote patient monitoring dashboard showing blood pressure trends",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/high-blood-pressure-and-dementia/",
  content: [
    {
      type: "paragraph",
      text: "When you think of high blood pressure (hypertension), most think of heart attacks or strokes. However, hypertension also significantly impacts the brain. Studies increasingly show that uncontrolled blood pressure raises the risk of cognitive decline and dementia.",
    },
    {
      type: "heading",
      level: 2,
      text: "How Hypertension Affects Brain Health",
    },
    {
      type: "paragraph",
      text: "Hypertension damages blood vessels in the brain, leading to reduced oxygen and nutrients. Over time, this results in memory loss, confusion, and accelerated cognitive decline. A JAMA Network Open study found that untreated hypertension increases dementia risk by 42%.",
    },
    {
      type: "heading",
      level: 2,
      text: "The Human Cost of Dementia",
    },
    {
      type: "paragraph",
      text: "Dementia is more than a medical condition; it’s a life-changing event for families. It brings emotional heartbreak, a significant financial burden for care, and social impacts that can overwhelm adult children and caregivers.",
    },
    {
      type: "heading",
      level: 2,
      text: "Prevention is Key",
    },
    {
      type: "paragraph",
      text: "The good news is that hypertension-related dementia can often be prevented or delayed. Families should focus on regular monitoring, healthy lifestyle choices, and working closely with healthcare providers.",
    },
    {
      type: "heading",
      level: 2,
      text: "How ProactiveWellness Care Can Help",
    },
    {
      type: "paragraph",
      text: "At ProactiveWellness Care, we offer Remote Patient Monitoring (RPM) to help families stay ahead of chronic conditions. Our system provides continuous blood pressure monitoring, real-time alerts, and nursing support to guide care and protect independence.",
    },
    {
      type: "paragraph",
      text: "Managing blood pressure isn’t just about adding years to life, it’s about adding life to years. By acting today, families can protect their loved ones' memories and dignity for tomorrow.",
    },
  ],
};
