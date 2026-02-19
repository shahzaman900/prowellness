import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "copd-and-rpm",
  title: "COPD: How Can RPM Help?",
  publishedAt: "2023-06-20",
  excerpt:
    "Chronic obstructive pulmonary disease is a progressive lung disease. RPM helps monitor symptoms, medication adherence, and improves patient quality of life.",
  category: "RPM",
  tags: ["COPD", "RPM", "Symptom Management"],
  coverImage: "/images/rpm-hero.png",
  coverImageAlt: "Patient using remote monitoring for COPD management",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/copd-and-rpm/",
  content: [
    {
      type: "paragraph",
      text: "Chronic obstructive pulmonary disease (COPD) is a progressive lung disease that makes it difficult to breathe. It is caused by long-term exposure to harmful substances, such as cigarette smoke and air pollution. COPD is the third leading cause of death in the United States.",
    },
    {
      type: "paragraph",
      text: "Remote patient monitoring (RPM) is a technology that allows healthcare providers to track patients’ health data remotely. RPM can be used to monitor COPD patients’ symptoms, medication adherence, and quality of life.",
    },
    {
      type: "heading",
      level: 2,
      text: "How RPM Helps COPD Patients",
    },
    {
      type: "list",
      items: [
        "Improved symptom management: RPM helps patients track symptoms like cough frequency and severity, allowing providers to adjust treatment proactively.",
        "Improved medication adherence: RPM reminders help patients take medications as prescribed, reducing the risk of complications.",
        "Improved quality of life: Studies show that patients using RPM report better sleep, less fatigue, and lower anxiety levels.",
      ],
    },
    {
      type: "paragraph",
      text: "RPM is a valuable tool for managing COPD effectively. Healthcare providers should consider using these technologies to enhance the quality of care provided to their patients.",
    },
    {
      type: "heading",
      level: 2,
      text: "References",
    },
    {
      type: "paragraph",
      text: "Pulmonary Medicine Study: Sinkowitz, J.A., et al. (2017). Chest Study: Mannino, D.M., et al. (2018).",
    },
  ],
};
