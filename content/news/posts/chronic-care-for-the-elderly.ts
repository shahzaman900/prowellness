import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "chronic-care-for-the-elderly",
  title: "Why Chronic Care Management (CCM) Is Important for People Over 65",
  publishedAt: "2025-01-01",
  excerpt:
    "As we age, chronic conditions become more common. CCM provides the coordinated care and monitoring needed for healthy aging.",
  category: "CCM",
  tags: ["CCM", "Elderly Care", "Health Outcomes"],
  coverImage: "/images/ccm-hero.png",
  coverImageAlt: "Elderly patient receiving chronic care management",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/chronic-care-for-the-elderly/",
  content: [
    {
      type: "paragraph",
      text: "Aging is a natural process that often brings an increased likelihood of chronic conditions like diabetes, hypertension, and heart disease. For people over 65, these conditions can significantly affect quality of life. Chronic Care Management (CCM) becomes a lifeline, offering comprehensive support to navigate healthcare in later years.",
    },
    {
      type: "heading",
      level: 2,
      text: "Coordinated Care for Complex Needs",
    },
    {
      type: "paragraph",
      text: "Many older individuals struggle with multiple medications and numerous doctor appointments. CCM provides a structured, team-based approach ensuring all providers work together seamlessly. This reduces conflicting treatments and prioritizes the patient's overall health.",
    },
    {
      type: "heading",
      level: 2,
      text: "Proactive Monitoring",
    },
    {
      type: "paragraph",
      text: "CCM programs emphasize continuous monitoring to detect issues before they escalate. Routine follow-ups and Remote Patient Monitoring (RPM) can identify fluctuations in vital signs, enabling timely interventions that prevent hospitalizations.",
    },
    {
      type: "heading",
      level: 2,
      text: "Improved Health Outcomes",
    },
    {
      type: "list",
      items: [
        "Fewer emergency department visits.",
        "Reduced hospital readmissions.",
        "Improved management of chronic illnesses.",
        "Maintained independence for longer periods.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Personalized Support",
    },
    {
      type: "paragraph",
      text: "Beyond clinical benefits, CCM provides regular contact with healthcare professionals who understand unique patient needs. This improves adherence to treatment plans and provides essential emotional support.",
    },
    {
      type: "heading",
      level: 2,
      text: "Financial Benefits",
    },
    {
      type: "paragraph",
      text: "By focusing on prevention, CCM can reduce out-of-pocket expenses for patients and families. Medicare’s coverage for CCM further minimizes financial barriers, making it widely accessible.",
    },
    {
      type: "paragraph",
      text: "For those over 65, CCM is more than just a program—it’s a pathway to healthier aging, empowering them to enjoy their golden years with dignity and vitality.",
    },
  ],
};
