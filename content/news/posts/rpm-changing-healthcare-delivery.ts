import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "rpm-changing-healthcare-delivery",
  title: "How Remote Patient Monitoring is Changing Healthcare Delivery",
  publishedAt: "2023-04-17",
  excerpt:
    "RPM is transforming healthcare by improving outcomes, reducing costs, and increasing access to care without the need for in-person visits.",
  category: "Company News",
  tags: ["Healthcare Delivery", "RPM", "Innovation"],
  coverImage: "/images/software-integrations.png",
  coverImageAlt:
    "How RPM technology is transforming modern healthcare delivery",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/rpm-changing-healthcare-delivery/",
  content: [
    {
      type: "paragraph",
      text: "There has been a significant shift in healthcare delivery globally, and the adoption of remote patient monitoring (RPM) is one of the most notable changes. It allows providers to monitor patients without the need for in-person visits.",
    },
    {
      type: "heading",
      level: 2,
      text: "Three Pillars of Transformation",
    },
    {
      type: "list",
      items: [
        "Improving Outcomes: Real-time detection of health changes allows for timely interventions before complications occur.",
        "Reducing Costs: Minimizing the number of in-person visits and preventing hospital readmissions lowers costs for everyone.",
        "Increasing Access: Patients can receive care from anywhere, eliminating travel time and cost, especially for those with limited mobility.",
      ],
    },
    {
      type: "paragraph",
      text: "As technology continues to evolve, RPM is likely to become an increasingly important part of healthcare. By embracing this technology, providers can offer better care while simultaneously streamlining delivery and reducing overall expenses.",
    },
  ],
};
