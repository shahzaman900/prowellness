import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "remote-patient-monitoring-chronic-conditions",
  title:
    "Remote Patient Monitoring: Managing Chronic Conditions In-Between Office Visits",
  publishedAt: "2024-09-27",
  excerpt:
    "Ensuring continuous care between visits is challenging. RPM revolutionizes management through real-time data collection and proactive interventions.",
  category: "RPM",
  tags: ["Chronic Conditions", "RPM", "Continuous Care"],
  coverImage: "/images/software-dashboard.png",
  coverImageAlt:
    "Managing chronic conditions with remote patient monitoring between clinical visits",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl:
    "https://prowellcare.com/remote-patient-monitoring-chronic-conditions/",
  content: [
    {
      type: "paragraph",
      text: "Remote Patient Monitoring (RPM) is a game-changing technology that revolutionizes how we manage health outside of traditional clinical settings. By collecting real-time data, RPM bridges the gap between office visits.",
    },
    {
      type: "heading",
      level: 2,
      text: "Key Benefits of Continuous Care",
    },
    {
      type: "list",
      items: [
        "Early detection of emerging health issues.",
        "Reduced hospital admissions and emergency department visits.",
        "Improved management of diabetes, hypertension, and COPD.",
        "Enhanced patient engagement and long-term satisfaction.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Best Practices for Implementation",
    },
    {
      type: "list",
      items: [
        "Set clear program objectives and goals.",
        "Choose user-friendly technology for both staff and patients.",
        "Establish standardized protocols for enrollment and data response.",
        "Provide comprehensive training for all system users.",
        "Regularly evaluate program performance and outcomes.",
      ],
    },
    {
      type: "paragraph",
      text: "As technology advances, AI and predictive analytics will enable even more personalized care. RPM is more than an advancement—it's a paradigm shift towards proactive, continuous care delivery.",
    },
  ],
};
