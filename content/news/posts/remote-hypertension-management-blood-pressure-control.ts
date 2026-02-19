import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "remote-hypertension-management-blood-pressure-control",
  title:
    "Remote Hypertension Management & Blood Pressure Control: Adapting to COVID-19",
  publishedAt: "2023-03-28",
  excerpt:
    "The pandemic disrupted traditional health assessments. Remote programs proved adaptable, reaching BP goals for 94.6% of patients during the crisis.",
  category: "Operations",
  tags: ["Hypertension", "COVID-19", "RPM", "BP Control"],
  coverImage: "/images/rpm-dashboard.png",
  coverImageAlt:
    "Remote blood pressure monitoring during the COVID-19 pandemic",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl:
    "https://prowellcare.com/remote-hypertension-management-blood-pressure-control/",
  content: [
    {
      type: "paragraph",
      text: "The COVID-19 pandemic disrupted traditional blood pressure assessments. Remote hypertension management programs emerged as a vital solution, allowing patients to monitor BP at home and ensuring continuous care.",
    },
    {
      type: "heading",
      level: 2,
      text: "Study Findings on Program Effectiveness",
    },
    {
      type: "paragraph",
      text: "A recent study analyzed 1,256 patients in a remote management program. Rates of achieving goal blood pressure improved significantly from 75.8% pre-pandemic to 94.6% during the pandemic.",
    },
    {
      type: "heading",
      level: 2,
      text: "Increased Engagement",
    },
    {
      type: "paragraph",
      text: "The transition to remote care accelerated program success, with patients averaging 8.2 monthly calls and recording 32.4 monthly BP readings—a significant increase from pre-pandemic engagement levels.",
    },
    {
      type: "paragraph",
      text: "Overall, remote programs have the potential to revolutionize how hypertension is managed, making care delivery more accessible and convenient for patients even during times of major healthcare disruption.",
    },
  ],
};
