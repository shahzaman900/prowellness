import type { NewsPost } from "@/lib/news/types"

export const post: NewsPost = {
  slug: "simplify-remote-patient-monitoring-webinar",
  title: "How to Simplify RPM for Your Medical Practice: Webinar Recap",
  publishedAt: "2024-08-27",
  excerpt:
    "A practical recap of the ProWell Care RPM webinar covering common implementation blockers and a cleaner operating model for care teams.",
  category: "RPM",
  tags: ["RPM", "Workflow", "Webinar"],
  coverImage: "/images/software-dashboard.png",
  coverImageAlt:
    "Care team reviewing remote patient monitoring metrics on a clinical dashboard",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/simplify-remote-patient-monitoring-webinar/",
  content: [
    {
      type: "heading",
      level: 2,
      text: "Introduction",
    },
    {
      type: "paragraph",
      text: "Remote Patient Monitoring can transform chronic care delivery, but practices often struggle with data overload, fragmented workflows, and inconsistent patient engagement. This session focused on simplifying RPM operations without reducing clinical quality.",
    },
    {
      type: "heading",
      level: 2,
      text: "Top Implementation Friction Points",
    },
    {
      type: "list",
      items: [
        "High alert volume that obscures clinically urgent events.",
        "Difficulty integrating RPM actions into day-to-day team routines.",
        "Inconsistent patient adherence to daily measurements.",
        "Unclear documentation standards for reimbursement readiness.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Operational Recommendations",
    },
    {
      type: "list",
      items: [
        "Use protocol-based triage thresholds to prioritize escalations.",
        "Assign role ownership for onboarding, monitoring, and outreach.",
        "Set recurring patient touchpoints tied to adherence milestones.",
        "Capture time and intervention logs in a structured, audit-ready format.",
      ],
    },
    {
      type: "quote",
      text: "A successful RPM program is less about adding tools and more about designing a repeatable care workflow.",
      citation: "ProWell Care Webinar Discussion",
    },
    {
      type: "paragraph",
      text: "Teams that align staffing, communication cadence, and documentation standards typically see better continuity, faster intervention response, and stronger long-term program retention.",
    },
  ],
}
