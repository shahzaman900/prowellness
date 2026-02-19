import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "role-of-rpm-in-preventive-care",
  title: "The Role of RPM in Preventive Care",
  publishedAt: "2023-05-23",
  excerpt:
    "RPM is a vital subset of telehealth that enhances preventive care through connectivity, self-monitoring, and proactive health management.",
  category: "RPM",
  tags: ["Preventive Care", "RPM", "Telehealth"],
  coverImage: "/images/hero-lifestyle.png",
  coverImageAlt:
    "Role of remote patient monitoring in proactive preventive care",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/role-of-rpm-in-preventive-care/",
  content: [
    {
      type: "paragraph",
      text: "Remote patient monitoring (RPM) involves collecting health data via wearable sensors and handheld devices. It plays a significant role in preventive care by reducing the risk of illness or injury through continuous surveillance.",
    },
    {
      type: "heading",
      level: 2,
      text: "Benefits of RPM for Preventive Care",
    },
    {
      type: "list",
      items: [
        "Increased Connectivity: Patients can interact with physicians anytime through secure platforms.",
        "Continuous Monitoring: Regular tracking of chronic conditions rather than periodic check-ups.",
        "Easy Accessibility: Reduces barriers for patients in remote areas or with mobility issues.",
        "Self-Monitoring: Empowers patients with real-time feedback and personalized guidance.",
        "Optimized Resources: Helps prioritize patients who need urgent attention, reducing unnecessary visits.",
        "Reliable Data: Provides objective information for clinical decision-making during telehealth consults.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Challenges and Opportunities",
    },
    {
      type: "paragraph",
      text: "Technical issues like device malfunctions and regulatory hurdles regarding reimbursement need to be addressed. However, by seizing these opportunities, RPM can become an integral part of digital healthcare.",
    },
    {
      type: "paragraph",
      text: "RPM is a promising technology that enables proactive health management. Overcoming human and clinical issues through education and research will lead to better clinical utility and patient satisfaction.",
    },
  ],
};
