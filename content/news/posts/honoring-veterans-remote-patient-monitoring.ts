import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "honoring-veterans-remote-patient-monitoring",
  title:
    "Honoring Our Heroes: How Remote Patient Monitoring Supports Veterans’ Health",
  publishedAt: "2025-11-10",
  excerpt:
    "Veterans often face barriers to care. RPM improves access for those with chronic conditions, especially in rural or underserved communities.",
  category: "Company News",
  tags: ["Veterans", "RPM", "Veterans Day"],
  coverImage: "/images/programs-speciality-hero.png",
  coverImageAlt: "Remote patient monitoring supporting veterans health",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl:
    "https://prowellcare.com/honoring-veterans-remote-patient-monitoring/",
  content: [
    {
      type: "paragraph",
      text: "Every Veterans Day, we honor the courage of our nation's heroes. At ProactiveWellness Care, we believe technology is key to ensuring they receive the continued care they deserve, regardless of their location.",
    },
    {
      type: "heading",
      level: 2,
      text: "Improving Access for Veterans",
    },
    {
      type: "paragraph",
      text: "For veterans in rural or underserved communities, RPM bridges the gap by connecting them to care teams virtually. Providers can monitor vitals in real-time and intervene early, preventing emergencies.",
    },
    {
      type: "heading",
      level: 2,
      text: "Managing Chronic Conditions",
    },
    {
      type: "paragraph",
      text: "Many veterans manage hypertension, diabetes, or PTSD-related health issues. RPM empowers them to take control through consistent tracking and personalized feedback, reducing unnecessary hospitalizations.",
    },
    {
      type: "heading",
      level: 2,
      text: "Enhanced Care Coordination",
    },
    {
      type: "paragraph",
      text: "Working across multiple specialists can be complex. RPM acts as a centralized bridge, ensuring health information flows seamlessly among all providers, reducing redundant tests and medication errors.",
    },
    {
      type: "paragraph",
      text: "RPM is about empowerment, giving veterans insight into their health patterns. ProactiveWellness Care is proud to support our heroes through innovative, compassionate care solutions.",
    },
  ],
};
