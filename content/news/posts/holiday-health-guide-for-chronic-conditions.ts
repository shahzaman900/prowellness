import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "holiday-health-guide-for-chronic-conditions",
  title:
    "Enjoying the Holidays: A Comprehensive Guide for Patients Managing Chronic Conditions",
  publishedAt: "2024-11-25",
  excerpt:
    "The holidays bring joy but can also challenge chronic condition management. Use this guide to navigate festivities while prioritizing your health.",
  category: "Operations",
  tags: ["Holiday Health", "Chronic Conditions", "Guide"],
  coverImage: "/images/hero-lifestyle.png",
  coverImageAlt: "Balanced lifestyle and wellness during the holiday season",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl:
    "https://prowellcare.com/holiday-health-guide-for-chronic-conditions/",
  content: [
    {
      type: "paragraph",
      text: "The holiday season is a time for celebration. For those managing conditions like hypertension, diabetes, or COPD, it also poses unique challenges. This guide offers strategies to help you enjoy the festivities while prioritizing your well-being.",
    },
    {
      type: "heading",
      level: 2,
      text: "Strategies for a Healthy Holiday",
    },
    {
      type: "list",
      items: [
        "Stay Connected: Keep your healthcare team updated on your plans and leverage RPM devices to track vitals.",
        "Meal Planning: Focus on nutrition, practice portion control, and stay well-hydrated.",
        "Stay Active: Incorporate small bursts of movement into family gatherings or daily routines.",
        "Manage Stress: Practice mindfulness and prioritize quality sleep to support mental health.",
        "Limit Alcohol: If you choose to drink, do so mindfully and be aware of medication interactions.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Be Prepared",
    },
    {
      type: "paragraph",
      text: "Have a plan for large gatherings and travel, including bringing healthy snacks and knowing your emergency contacts. Reflect on your health journey over the past year and set realistic goals for the new year.",
    },
    {
      type: "paragraph",
      text: "By staying proactive and seeking support, you can fully enjoy the holiday season. Wishing you a happy and healthy celebration!",
    },
  ],
};
