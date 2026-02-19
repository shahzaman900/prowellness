import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "rpm-solve-the-healthcare-workforce-shortage",
  title:
    "How Remote Patient Monitoring Can Solve The Healthcare Workforce Shortage",
  publishedAt: "2023-07-03",
  excerpt:
    "Nearly half of US healthcare workers plan to quit by 2025. RPM offers a sustainable solution by reducing burnout and increasing efficiency.",
  category: "Company News",
  tags: ["Workforce Shortage", "RPM", "Efficiency", "Sustainability"],
  coverImage: "/images/software-dashboard.png",
  coverImageAlt:
    "Remote patient monitoring helping mitigate the healthcare workforce shortage",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl:
    "https://prowellcare.com/rpm-solve-the-healthcare-workforce-shortage/",
  content: [
    {
      type: "paragraph",
      text: "The healthcare workforce is facing a burnout crisis, with nearly half of U.S. workers planning to leave by 2025. Remote Patient Monitoring (RPM) offers a path to turn this crisis into an opportunity by leveraging digital tools to deliver care more efficiently.",
    },
    {
      type: "heading",
      level: 2,
      text: "Mitigating the Impact of the Crisis",
    },
    {
      type: "list",
      items: [
        "Reducing Workload: Automating data collection and streamlining workflows reduces administrative burden by up to 38%.",
        "Increasing Incentives: RPM creates new reimbursement opportunities and enhances value-based outcomes.",
        "Improving Retention: By enhancing job satisfaction and professional development through innovation.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Benefits Across Stakeholders",
    },
    {
      type: "paragraph",
      text: "RPM empowers patients with real-time data, improves clinical productivity for providers, and reduces inpatient costs for organizations by moving acute care monitoring into the home setting.",
    },
    {
      type: "paragraph",
      text: "By leveraging RPM, healthcare organizations can create a more sustainable and resilient workforce capable of delivering high-quality, patient-centered care both during and beyond the current pandemic challenges.",
    },
  ],
};
