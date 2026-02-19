import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "why-integrate-ccm-rpm",
  title: "Why Providers Should Consider Integrating CCM and RPM",
  publishedAt: "2025-07-07",
  excerpt:
    "Combining CCM and RPM creates a comprehensive care model that improves patient outcomes and generates significant monthly recurring revenue.",
  category: "Compliance",
  tags: ["CCM", "RPM", "Integration", "Medicare Reimbursement"],
  coverImage: "/images/software-integrations.png",
  coverImageAlt:
    "Integrated chronic care management and remote patient monitoring model",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/why-integrate-ccm-rpm/",
  content: [
    {
      type: "paragraph",
      text: "As healthcare shifts toward value-based care, integrating Chronic Care Management (CCM) and Remote Patient Monitoring (RPM) is becoming essential. Together, they provide continuous oversight and new revenue streams for practices.",
    },
    {
      type: "heading",
      level: 2,
      text: "Closing the Care Loop",
    },
    {
      type: "paragraph",
      text: "CCM focuses on care coordination and follow-up, while RPM provides the real-time clinical data needed to fuel timely decisions. This combined approach ensures that medication adherence improves and complications are caught early.",
    },
    {
      type: "heading",
      level: 2,
      text: "Financial and Core Benefits",
    },
    {
      type: "list",
      items: [
        "Financial Opportunity: Managed correctly, practices can significantly boost recurring monthly revenue through Medicare reimbursements (e.g., CPT 99490 and 99457).",
        "Improved Outcomes: Studies show up to a 43% reduction in hospitalizations among enrolled patients.",
        "Workflow Efficiency: Clinical teams can prioritize high-risk patients based on real-time data trends.",
        "Compliance: Structured documentation ensures audit readiness and eases the administrative burden.",
      ],
    },
    {
      type: "paragraph",
      text: "ProactiveWellness Care offers end-to-end solutions for practices ready to implement these scalable, future-ready preventive care models.",
    },
  ],
};
