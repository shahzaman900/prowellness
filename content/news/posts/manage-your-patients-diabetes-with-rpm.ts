import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "manage-your-patients-diabetes-with-rpm",
  title: "How ProactiveWellness Can Help Your Patients with Diabetes",
  publishedAt: "2023-06-08",
  excerpt:
    "RPM devices allow diabetes patients to track blood glucose and insulin from home, leading to better glycemic control and fewer complications.",
  category: "RPM",
  tags: ["Diabetes", "RPM", "Blood Glucose"],
  coverImage: "/images/programs-condition-hero.png",
  coverImageAlt: "Patient using RPM device to manage diabetes",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/manage-your-patients-diabetes-with-rpm/",
  content: [
    {
      type: "paragraph",
      text: "Remote patient monitoring (RPM) technology, including wearable glucometers and sensors, is transforming diabetes management. These devices allow patients to track blood sugar levels and insulin intake from home, sharing data directly with their healthcare providers.",
    },
    {
      type: "heading",
      level: 2,
      text: "Key Benefits for Diabetes Management",
    },
    {
      type: "list",
      items: [
        "Frequent Tracking: Identify trends in blood sugar more effectively.",
        "Real-Time Feedback: Stay on track with treatment plans through immediate data insights.",
        "Increased Connection: Enhanced satisfaction and adherence through closer provider contact.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Evidence-Based Results",
    },
    {
      type: "paragraph",
      text: "Studies in JAMA and the New England Journal of Medicine signify that RPM improves HbA1c levels and reduces the risk of hospitalization for diabetes-related complications by up to 30%.",
    },
    {
      type: "heading",
      level: 2,
      text: "The ProactiveWellness Advantage",
    },
    {
      type: "list",
      items: [
        "Continuous Monitoring: Track blood glucose, heart rate, and weight seamlessly.",
        "Timely Interventions: Get alerted when patient parameters deviate from target ranges.",
        "Improved Adherence: Automated reminders help ensure medications are taken on time.",
      ],
    },
    {
      type: "paragraph",
      text: "Diabetes is challenging to manage, but RPM provides the tools needed for better control and enhanced patient safety. ProactiveWellness helps physicians stay updated and manage patient vitals from anywhere.",
    },
  ],
};
