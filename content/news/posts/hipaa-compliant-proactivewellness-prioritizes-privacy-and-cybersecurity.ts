import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "hipaa-compliant-proactivewellness-prioritizes-privacy-and-cybersecurity",
  title:
    "Prioritizing Patient Privacy & Cybersecurity in Remote Patient Monitoring",
  publishedAt: "2024-05-27",
  excerpt:
    "RPM platforms collect sensitive data. At ProactiveWellness, we prioritize robust cybersecurity and HIPAA compliance to safeguard patient information.",
  category: "Compliance",
  tags: ["HIPAA", "Cybersecurity", "Privacy", "RPM"],
  coverImage: "/images/software-integrations.png",
  coverImageAlt: "Secured data integration and privacy icons",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl:
    "https://prowellcare.com/hipaa-compliant-proactivewellness-prioritizes-privacy-and-cybersecurity/",
  content: [
    {
      type: "paragraph",
      text: "Remote Patient Monitoring (RPM) platforms collect sensitive patient data, including vitals and medical records. Protecting this information is paramount to prevent identity theft and maintain patient trust.",
    },
    {
      type: "heading",
      level: 2,
      text: "How ProactiveWellness Ensures Data Security",
    },
    {
      type: "list",
      items: [
        "HIPAA Compliance: We adhere to strict federal regulations for data protection.",
        "SOC 2 Compliance: Validated controls against industry-standard security requirements.",
        "Secure Data Transmission: End-to-end encryption for all patient communications.",
        "Multi-Layered Security: Comprehensive infrastructure with granular access controls.",
        "Proactive Audits: Regular assessments to identify and mitigate potential vulnerabilities.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Choosing a Secure RPM Partner",
    },
    {
      type: "paragraph",
      text: "When selecting an RPM vendor, prioritize those who conduct regular audits and emphasize encryption. ProactiveWellness provides peace of mind, allowing healthcare providers to focus on what matters most: patient well-being.",
    },
  ],
};
