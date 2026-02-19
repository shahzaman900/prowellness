import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "cut-hospital-readmission-with-rpm",
  title:
    "Reduce Hospital Readmissions with Remote Patient Monitoring – Here’s How!",
  publishedAt: "2023-04-19",
  excerpt:
    "1 in 5 Medicare patients are readmitted within 30 days. RPM has been proven to reduce these readmissions by up to 63% for certain conditions.",
  category: "Operations",
  tags: ["Hospital Readmissions", "RPM", "Outcomes"],
  coverImage: "/images/outcomes-dashboard.png",
  coverImageAlt: "Data dashboard showing hospital readmission statistics",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/cut-hospital-readmission-with-rpm/",
  content: [
    {
      type: "paragraph",
      text: "Hospital readmissions are a significant issue. According to CMS, approximately 1 in 5 Medicare patients are readmitted within 30 days of discharge, costing billions annually. Remote Patient Monitoring (RPM) has effective results in reducing these readmissions.",
    },
    {
      type: "heading",
      level: 2,
      text: "How RPM Reduces Readmissions",
    },
    {
      type: "paragraph",
      text: "RPM involves devices that allow patients to receive medical attention from home while providers monitor them remotely. By tracking vital signs, providers can intervene before a condition worsens.",
    },
    {
      type: "heading",
      level: 3,
      text: "Proven Results Across Conditions",
    },
    {
      type: "list",
      items: [
        "Heart Failure Patients: A study showed a 56% reduction in readmissions when tracking weight, BP, and heart rate.",
        "COPD Patients: Effective monitoring of oxygen saturation and breathing rate reduced readmissions by 51%.",
        "Post-Surgery Patients: Tracking range of motion, pain, and temperature led to a 63% reduction in readmissions.",
      ],
    },
    {
      type: "paragraph",
      text: "Specifically, by providing patients the ability to monitor health from home and alerting providers to worsening conditions, RPM devices allow for earlier intervention and preventable readmissions.",
    },
  ],
};
