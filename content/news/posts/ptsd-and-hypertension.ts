import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "ptsd-and-hypertension",
  title:
    "The Link Between PTSD and Hypertension: How ProactiveWellness Care Can Help",
  publishedAt: "2024-06-25",
  excerpt:
    "National PTSD Awareness Day highlights the link between chronic stress and high blood pressure. RPM offers a solution for managing both conditions.",
  category: "RPM",
  tags: ["PTSD", "Hypertension", "Stress", "RPM"],
  coverImage: "/images/programs-condition-hero.png",
  coverImageAlt:
    "Managing the link between PTSD and hypertension through remote care",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/ptsd-and-hypertension/",
  content: [
    {
      type: "paragraph",
      text: "National PTSD Awareness Day serves as a reminder of those living with post-traumatic stress disorder. There is a surprising connection between PTSD and hypertension, rooted in chronic stress and physiological responses.",
    },
    {
      type: "heading",
      level: 2,
      text: "The Connection Explained",
    },
    {
      type: "list",
      items: [
        "Chronic Stress: PTSD triggers 'fight-or-flight' responses, elevating cortisol levels which strain the cardiovascular system.",
        "Unhealthy Habits: Coping mechanisms for PTSD can often include smoking or poor diet, contributing to high BP.",
        "Sleep Disturbances: Disrupted sleep patterns are linked to an increased risk of hypertension.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "How RPM Offers a Solution",
    },
    {
      type: "paragraph",
      text: "ProactiveWellness Care RPM offers a dynamic approach to managing these linked conditions through real-time monitoring and personalized care plans that address both stress management and blood pressure control.",
    },
    {
      type: "paragraph",
      text: "RPM empowers patients to take an active role in their health from the comfort of their home, providing actionable data for their healthcare providers.",
    },
  ],
};
