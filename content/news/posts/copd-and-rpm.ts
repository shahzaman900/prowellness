import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "copd-and-rpm",
  title: "COPD: How Can RPM Help?",
  publishedAt: "2023-06-20",
  excerpt:
    "Chronic obstructive pulmonary disease is a progressive lung disease. RPM helps monitor symptoms, medication adherence, and improves patient quality of life.",
  category: "RPM",
  tags: ["COPD", "RPM", "Symptom Management"],
  coverImage: "/images/rpm-hero.png",
  coverImageAlt: "Patient using remote monitoring for COPD management",
  author: "ProactiveWellness Care Editorial Team",
  status: "published",
  sourceUrl: "https://prowellcare.com/copd-and-rpm/",
  content: [
    {
      type: "paragraph",
      text: "Chronic obstructive pulmonary disease (COPD) is a progressive lung disease that makes it difficult to breathe. It is caused by long-term exposure to harmful substances, such as cigarette smoke, air pollution, and dust. COPD is the third leading cause of death in the United States.",
    },
    {
      type: "paragraph",
      text: "Remote patient monitoring (RPM) is a technology that allows healthcare providers to track patients' health data remotely. RPM can be used to monitor COPD patients' symptoms, medication adherence, and quality of life.",
    },
    {
      type: "paragraph",
      text: "Here are some of the ways that RPM can help COPD patients:",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Improved symptom management: RPM can help COPD patients track their symptoms and communicate with their healthcare providers about changes in their condition. This can help patients manage their symptoms more effectively and prevent exacerbations. For example, a patient with COPD might use an RPM device to track their daily cough frequency and severity. This data can then be shared with their healthcare provider, who can use it to adjust the patient's medication or recommend other treatment options.",
        "Improved medication adherence: RPM can help COPD patients track their medication usage and remind them to take their medications as prescribed. This can help improve medication adherence and reduce the risk of complications. A study published in the journal Pulmonary Medicine found that COPD patients who used an RPM device were more likely to adhere to their medication regimen than those who did not use an RPM device.",
        "Improved quality of life: RPM can help COPD patients track their quality of life and identify areas where they need support. This can help patients improve their quality of life and reduce stress levels. A study published in the journal Chest found that COPD patients who used an RPM device reported improvements in their quality of life, including better sleep, less fatigue, and less anxiety.",
      ],
    },
    {
      type: "paragraph",
      text: "RPM is a valuable tool that can help COPD patients manage their condition more effectively. If you are a healthcare provider who treats COPD patients, you should consider using RPM to improve the care you provide to your patients.",
    },
    {
      type: "heading",
      level: 2,
      text: "References",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Pulmonary Medicine study: Remote monitoring improves medication adherence in COPD. Authors: J.A. Sinkowitz, et al. Published in Pulmonary Medicine (2017). doi:10.1002/pm.21879",
        "Chest study: Remote monitoring improves quality of life in COPD. Authors: D.M. Mannino, et al. Published in Chest (2018). doi:10.1016/j.chest.2018.01.044",
      ],
    },
  ],
};
