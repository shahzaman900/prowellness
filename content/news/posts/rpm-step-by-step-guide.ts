import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "rpm-step-by-step-guide",
  title:
    "How to Get Started with Remote Patient Monitoring: A Step-by-Step Guide",
  publishedAt: "2023-05-09",
  excerpt:
    "RPM help you manage your condition, improve outcomes, and reduce costs. This guide explains how it works and how to begin your RPM journey.",
  category: "Operations",
  tags: ["Guide", "RPM", "Implementation", "Patient Care"],
  coverImage: "/images/rpm-hero.png",
  coverImageAlt: "Step-by-step guide to starting remote patient monitoring",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/rpm-step-by-step-guide/",
  content: [
    {
      type: "paragraph",
      text: "Remote patient monitoring (RPM) uses technology to track your health and medical data and share it with your healthcare provider. It involves connected devices like blood pressure cuffs or glucose monitors that send readings to a secure platform.",
    },
    {
      type: "heading",
      level: 2,
      text: "Core Benefits of Starting RPM",
    },
    {
      type: "list",
      items: [
        "Improved clinical decision-making through better data trends.",
        "Better self-management and adherence to care plans.",
        "Reduced costs by avoiding unnecessary hospital visits.",
        "Increased patient satisfaction and loyalty.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "The 6-Step RPM Process",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Prescription: Your provider prescribes a device suitable for your condition.",
        "Setup: You receive the device and connect it to a mobile app or portal.",
        "Usage: You use the device as instructed (daily, weekly, or as needed).",
        "Transmission: The device sends data automatically to a secure platform.",
        "Monitoring: Your provider reviews the data and provides guidance.",
        "Adjustment: Treatment plans are adjusted based on real-time insights.",
      ],
    },
    {
      type: "paragraph",
      text: "To get started, talk to your healthcare provider about their RPM offerings and ask about goals, equipment, and privacy protections.",
    },
  ],
};
