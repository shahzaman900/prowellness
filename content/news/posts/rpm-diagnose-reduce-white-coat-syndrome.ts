import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "rpm-diagnose-reduce-white-coat-syndrome",
  title: "RPM & Reducing White Coat Syndrome",
  publishedAt: "2023-04-04",
  excerpt:
    "White coat syndrome can lead to inaccurate blood pressure readings in clinics. RPM allows for continuous monitoring at home, providing a clearer diagnostic picture.",
  category: "RPM",
  tags: ["White Coat Syndrome", "Hypertension", "RPM", "Patient Anxiety"],
  coverImage: "/images/rpm-dashboard.png",
  coverImageAlt:
    "Remote patient monitoring helping reduce white coat syndrome anxiety",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/rpm-diagnose-reduce-white-coat-syndrome/",
  content: [
    {
      type: "paragraph",
      text: "White coat syndrome, or white coat hypertension, occurs when patients experience elevated blood pressure in medical settings due to stress and anxiety. Remote Patient Monitoring (RPM) provides an effective way to diagnose and manage this common phenomenon.",
    },
    {
      type: "heading",
      level: 2,
      text: "Diagnosing Through Real-World Data",
    },
    {
      type: "paragraph",
      text: "One of the primary advantages of RPM is continuous monitoring outside of clinical settings. Patients can wear monitors throughout their day, automatically recording readings in a natural environment. This provides a more accurate picture of baseline blood pressure.",
    },
    {
      type: "heading",
      level: 2,
      text: "Reducing Anxiety and Improving Health",
    },
    {
      type: "paragraph",
      text: "Once diagnosed, the next step is reducing clinical stress. RPM allows patients to see real-time feedback in a relaxed setting, which can normalize readings over time. Additionally, platforms educate patients on the significance of monitoring and healthy lifestyle habits.",
    },
    {
      type: "paragraph",
      text: "By using RPM to diagnose white coat syndrome, providers can help patients manage their blood pressure more effectively while reducing overall stress and anxiety levels during check-ups.",
    },
  ],
};
