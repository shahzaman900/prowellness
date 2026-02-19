import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "rpm-for-chronic-disease-management",
  title: "The Benefits of RPM for Chronic Disease Management",
  publishedAt: "2023-04-10",
  excerpt:
    "Chronic diseases affect millions of Americans. The AMA supports RPM integration to improve patient engagement, quality of care, and cost-effectiveness.",
  category: "RPM",
  tags: ["Chronic Disease", "RPM", "AMA", "Patient Engagement"],
  coverImage: "/images/programs-condition-hero.png",
  coverImageAlt: "Chronic disease management through remote patient monitoring",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/rpm-for-chronic-disease-management/",
  content: [
    {
      type: "paragraph",
      text: "Chronic diseases make it difficult for many Americans to maintain a healthy lifestyle. Remote Patient Monitoring (RPM) has emerged as a valuable tool for improving management, with strong support from the American Medical Association (AMA).",
    },
    {
      type: "heading",
      level: 2,
      text: "Core Benefits of RPM Integration",
    },
    {
      type: "list",
      items: [
        "Increased Engagement: Patients take an active role by tracking and sharing their own data.",
        "Improved Quality of Care: Real-time monitoring allows for quick detection and response to health issues.",
        "Cost-Effectiveness: Reduces hospitalizations and emergency room visits through early intervention.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "AMA Stance and Support",
    },
    {
      type: "paragraph",
      text: "The AMA recognizes the potential of RPM and recommends that healthcare providers adopt it to improve outcomes. They have even released a 'Remote Patient Monitoring Playbook' to guide practices in successful implementation.",
    },
    {
      type: "paragraph",
      text: "As the industry evolves, RPM is poised to play an increasingly important role in managing chronic diseases and improving patient health across the United States.",
    },
  ],
};
