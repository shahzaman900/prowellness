import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "save-billions-in-healthcare",
  title: "How Remote Patient Monitoring Can Help Reduce Hospital Readmissions",
  publishedAt: "2023-04-26",
  excerpt:
    "RPM is expected to save $200 billion in healthcare costs globally over the next 25 years by preventing avoidable hospital visits and readmissions.",
  category: "Operations",
  tags: ["Readmissions", "Cost Savings", "RPM", "Healthcare Economics"],
  coverImage: "/images/software-integrations.png",
  coverImageAlt:
    "Reducing hospital readmissions through remote patient monitoring",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/save-billions-in-healthcare/",
  content: [
    {
      type: "paragraph",
      text: "Remote patient monitoring (RPM) enables timely and personalized interventions, but one of its most staggering benefits is the potential for cost savings. RPM is ranked as the #1 reducer of overall costs by 69% of healthcare professionals.",
    },
    {
      type: "heading",
      level: 2,
      text: "How Cost Savings are Achieved",
    },
    {
      type: "list",
      items: [
        "Preventing Avoidable Visits: Home management of chronic conditions like diabetes and heart failure reduces ER trips.",
        "Reducing Length of Stay: Faster recovery and better post-discharge monitoring prevent complications after surgery.",
        "Improved Coordination: Automated data collection and analysis streamline workflows for the entire care team.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Overcoming Barriers to Adoption",
    },
    {
      type: "paragraph",
      text: "While challenges like interoperability and reimbursement remain, providers can overcome them by investing in user-friendly solutions and advocating for policy changes that favor value-based care models.",
    },
    {
      type: "paragraph",
      text: "By addressing these hurdles, RPM will continue to transform healthcare delivery, offering more accessible, convenient, and personalized care while saving billions for the global economy.",
    },
  ],
};
