import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "the-impact-of-telemonitoring-for-diabetes-type-2",
  title:
    "Telemonitoring Revives Diabetes Care for Lost Patients: UAE Study Finds Success",
  publishedAt: "2023-03-07",
  excerpt:
    "A study conducted at the Dubai Diabetes Center found that telemonitoring significantly improved HbA1c levels and body weight for patients previously lost to follow-up.",
  category: "RPM",
  tags: ["Diabetes", "Telemonitoring", "Research", "Clinical Outcomes"],
  coverImage: "/images/programs-condition-hero.png",
  coverImageAlt: "UAE study showing success of telemonitoring in diabetes care",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl:
    "https://prowellcare.com/the-impact-of-telemonitoring-for-diabetes-type-2/",
  content: [
    {
      type: "paragraph",
      text: "A significant interventional study in the UAE evaluated the impact of telemonitoring (TM) on glycemic control for patients who had been lost-to-follow-up (LTFU) for over a year. The results highlight the immense potential of remote monitoring in challenging populations.",
    },
    {
      type: "heading",
      level: 2,
      text: "Key Research Findings",
    },
    {
      type: "list",
      items: [
        "HB1Ac Reduction: Mean levels decreased significantly from 10.3% to 7.4% over three months.",
        "Target Achievement: 50% of participants achieved the target of HbA1c < 7% within the study period.",
        "Weight Loss: Participants saw a notable reduction in body weight and improvement in lipid profiles.",
        "Device Adherence: Portable pill dispensers and glucose monitors showed high usage rates among participants.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Implications for Diabetes Care",
    },
    {
      type: "paragraph",
      text: "The study concludes that TM is an effective tool to re-engage lost patients and improve metabolic parameters. By minimizing life disruptions and providing timely feedback, telemonitoring bridges the gap in chronic disease management.",
    },
  ],
};
